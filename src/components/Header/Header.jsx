import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import { Nav } from '../Nav/nav.jsx';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="Logo" className="logo" />
                    <span>Reactive</span>
                </Link>
            </div>
            <Nav />
        </header>
    );
};