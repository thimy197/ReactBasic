import { Link, NavLink, useNavigate } from 'react-router';
import './Header.css';
import LogoWhiteImg from '../assets/images/logo-white.png';
import MobileLogoWhiteImg from '../assets/images/mobile-logo-white.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import CartIcon from '../assets/images/icons/cart-icon.png';
import { useEffect, useState } from 'react';

export function Header({ carts, searchParam }) {

    const navigateSearch = useNavigate();
    const [search, setSearch] = useState(searchParam || "");
    useEffect(() => {
        setSearch(searchParam || "");
    }, [searchParam]);

    let cartQtySum = 0;
    carts?.forEach((cart) => {
        cartQtySum += cart.quantity;
    });
    const changeInputSearch = (event) => {
        setSearch(event.target.value);
    }
    const searchProduct = () => {
        navigateSearch(`/?search=${search}`);
    }
    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo"
                        src={LogoWhiteImg} />
                    <img className="mobile-logo"
                        src={MobileLogoWhiteImg} />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search"
                    value={search}
                    onChange={changeInputSearch} />

                <button className="search-button" onClick={searchProduct}>
                    <img className="search-icon" src={SearchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={CartIcon} />
                    <div className="cart-quantity">{cartQtySum}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}