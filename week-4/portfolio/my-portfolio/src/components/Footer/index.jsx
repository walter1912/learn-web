import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../assets/constants';
import "./Footer.scss";

const Footer = props => {
    return (
        <footer class="footer">
            <div class="footer__connect flex-center">
                <button class="footer__connect--btn">
                    <Icon.fb />
                </button>
                <button class="footer__connect--btn">
                    <Icon.Ig />
                </button>
                <button class="footer__connect--btn">
                    <Icon.Lk />
                </button>
                <button class="footer__connect--btn">
                    <Icon.Tw />
                </button>

            </div>
            <p class="text-center">Copyright ©2020 All rights reserved</p>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;