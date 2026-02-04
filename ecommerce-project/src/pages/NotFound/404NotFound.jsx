import { Header } from '../../Components/Header';
import { Link } from 'react-router';
import './404NotFound.css';

export function NotFound({ carts }) {
    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicons/404-error.png" />
            <title>Page Not Found</title>
            <Header carts={carts} />
            <div className="not-found-page">
                <Link to="/" className="return-home-button link-primary">
                    Return to Home
                </Link>
                <div className="not-found-message">
                    Oops! The page you are looking for does not exist.
                </div>
            </div>
        </>
    );
}