import React, {useState} from 'react'
//import memeData from '../memeData.js'

export default function Meme(){

    //const  [memeImage, newMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    //API pyyntö imgflip sivulle. Saadaan meemit ilman niiden manuaalista lataamista paikalliseen tietokantaan.
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch ("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])

    //Funktio joka hakee satunnaisen meemin
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name,value}  = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="meme--form">
            <div className="form">
                
                <input
                    type="text"
                    name="topText"
                    placeholder="Yläteksti"
                    className="form--input"
                    value={meme.topText}
                    onChange={handleChange}
                />
                
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Alateksti"
                    className="form--input"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                
                <button
                    onClick={getMemeImage}
                    className="form--button">
                        Make New Meme
                </button>
            </div>

            <div className="memeDiv">
                <img className="meme--image" src={meme.randomImage}></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
