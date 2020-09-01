import React from 'react';

function Footer(props) {
    return (
        <div className="footer center-footer" style={{position:'fixed',bottom:0,width:'100%'}}>
            <div className="wrapper-container">
                    <span className="footer-links"><a href="#">Home</a> | <a href="#">Feedback</a> | <a
                        href="#">Help</a> | <a href="#">FAQs</a> | <a href="#">Training</a></span>
                <span className="footer-legal">Copyright &copy; 2015 GoogleInternal &amp; Company. All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">Privacy &amp; Data</a> | <a href="https://www.GoogleInternal.com/">Legal</a> </span>
            </div>
        </div>
    );
}

export default Footer;