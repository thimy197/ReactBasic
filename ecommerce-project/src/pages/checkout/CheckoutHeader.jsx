import { Link } from 'react-router';
import './CheckoutHeader.css';
import LogoImg from '../../assets/images/logo.png';
import MobileLogoImg from '../../assets/images/mobile-logo.png';
import CheckoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png';

export function CheckoutHeader({ carts }) {
    let cartQtySum = 0;
    carts?.forEach((cart) => {
        cartQtySum += cart.quantity;
    });
    return (
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src={LogoImg} />
                            <img className="mobile-logo" src={MobileLogoImg} />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">{cartQtySum} items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src={CheckoutLockIcon} />
                    </div>
                </div>
            </div>
        </>
    );
}