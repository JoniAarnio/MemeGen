import logo from '../assets/logo.png'

export default function Header(){
    return (
        <header className="header">
            <img className="header--logo" src={logo}></img>
            <h2 className="header--title">Meemi Generaattori</h2>
            <h4 className="header--project">React Projekti</h4>
        </header>
    )
}