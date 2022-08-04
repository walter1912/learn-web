import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import "./Contact.scss";

const Contact = props => {
    return (
        <>
            <Header />
            <div className='container d-flex  flex-column justify-content-center align-items-center '>
                <h4 className='text-center'>Kết nối với chúng tôi qua</h4>

                <div className="footer__email  col-6">
                    <h5>Đăng kí email để nhận thông báo</h5>
                    <div className="input-group" action=''>
                        <input type="text" className="form-control" placeholder="Email của bạn" aria-label="Enter your email" aria-describedby="button-addon2" />
                        <button
                            className="btn btn-primary" type="button" id="button-addon2"
                            onClick={() => window.open('mailto:hobathai1912@gmail.com')}
                        >
                            Đăng kí</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

Contact.propTypes = {

};

export default Contact;