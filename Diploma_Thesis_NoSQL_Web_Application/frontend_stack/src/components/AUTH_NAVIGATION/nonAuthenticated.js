import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

function NonAuthenticatedNavigation() {
    return (
        <div className="navbar">
            <div className="navbar-left"><Link to={routes.HOMEPAGE}>HOME</Link></div>
            <div className="navbar-right">
                <Link to={routes.SIGN_UP}>SIGN UP</Link>
                <Link to={routes.LOGIN}>LOGIN</Link>
            </div>
        </div>
    )
}

export default NonAuthenticatedNavigation;