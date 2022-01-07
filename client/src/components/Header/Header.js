import './header.css'
import Nav from '../Nav/Nav';

function Header(props) {
    return (
        <header className={"masthead"}>
            <Nav title={props.title}/>
        </header>
    )
}

export default Header;