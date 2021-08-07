import React from 'react';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../../../image/family.jpg';
import image2 from '../../../image/student.jpg';
import image3 from '../../../image/wedding.jpg';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mt-5">
                            <h3 style={{ color: 'lightsalmon' }}>Articles</h3>
                            <div class="media">
                                <a href="#" class="pull-left">
                                    <img style={{ width: '100px' }} src={image1} alt="" class="media-object" />
                                </a>
                                <div class="media-body ml-3 text-primary">
                                    <h4 class="media-heading">Family</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div class="media">
                                <a href="#" class="pull-left">
                                    <img style={{ width: '100px' }} src={image2} alt="" class="media-object" />
                                </a>
                                <div class="media-body ml-3 text-primary">
                                    <h4 class="media-heading">Student</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div class="media">
                                <a href="#" class="pull-left">
                                    <img style={{ width: '100px' }} src={image3} alt="" class="media-object" />
                                </a>
                                <div class="media-body ml-3 text-primary">
                                    <h4 class="media-heading">Wedding</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-4 mt-5">
                            <h3 style={{ color: 'lightsalmon' }}>Social Site</h3>
                            <div className="gap-5">
                                <FontAwesomeIcon style={{ color: "blue" }} className="fa-4x" icon={faFacebook} />
                                <FontAwesomeIcon style={{ color: "blue" }} className="fa-4x" icon={faTwitter} />
                                <FontAwesomeIcon style={{ color: 'red' }} className="fa-4x" icon={faYoutube} />
                                <FontAwesomeIcon style={{ color: 'lightsalmon' }} className="fa-4x" icon={faInstagram} />
                            </div>
                            <div className="mt-5 fs-5 text-primary">
                                <h3 style={{ color: 'lightsalmon' }}>Contact</h3>
                                <p>Shahnaz@gmail.com</p>
                                <p>Shahnaz Begum</p>
                                <p>Mobile: 0172352763 <FontAwesomeIcon className="fa-2x" style={{ color: 'green' }} icon={faPhone} /></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="copyright text-center text-primary">
                    Copyright &copy; 2021 <span>Shahnaz Begum</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;