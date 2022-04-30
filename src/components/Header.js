import image from './troll-face.png'; 

function Header() {
    return (
        <header className="header">
            <img 
                src={image}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"></h4>
        </header>
    )
}

export default Header;