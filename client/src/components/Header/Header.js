import './header.css'
import Nav from '../Nav/Nav';

function Header(props) {
    return (
        <header className={"masthead"}>
            <h1>{props.title}</h1>
            <Nav/>
        </header>
    )
}

export default Header;