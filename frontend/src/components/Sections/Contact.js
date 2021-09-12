import './Contact.css'

export default function Contact() {

    return (
        <>
        <a name="Contact" />
        <section className="contact">
            
            <div className="contact-card">
                <div className="card-column">

                    <div className="card-row">

                        <div className="card-header">


                            <h3 className="header-title"><i className="fas fa-envelope pr-2"></i>Write to me:</h3>


                            <div className="header-row">
                                
                                <div className="header-row-row">
                                <input type="text" id="form-contact-name" className="form-control" placeholder="Your name..." />
        
                                <input type="text" id="form-contact-email" className="form-control" placeholder="Your email..."/>
</div>
<div className="header-row-row">
                                <input type="text" id="form-contact-phone" className="form-control" placeholder="Your phone..." />
  
                                <input type="text" id="form-contact-company" className="form-control" placeholder="Your company..."/>
</div>
                            </div>

                            <div className="header-row-text">

                                <textarea id="form-contact-message" className="form-control-textarea" rows="3" placeholder="Your message..."></textarea>       
                                <button><i className="far fa-paper-plane"></i></button>

                            </div>


                        </div>

                    </div>

                    <div className="card-row">

                        <div className="card-footer-container">

                            <h3 className="card-footer-title">Contact information</h3>
                            <ul className="footer-list">
                                <li>
                                    <p><i className="footer-item"></i>New York, 94126, USA</p>
                                </li>
                                <li>
                                    <p><i className="footer-item"></i>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <p><i className="footer-item"></i>contact@example.com</p>
                                </li>
                            </ul>
                            
                            <hr className="footer-contact-divider"/>

                            <ul className ="footer-social-list">
                            <li className ="footer-social-item">
                            <a className ="twitter">
                            <i className ="fab fa-twitter"></i>
                            </a>
                            </li>
                            <li className ="footer-social-item">
                            <a className ="linkedin">
                            <i className ="fab fa-linkedin-in"> </i>
                            </a>
                            </li>
                            <li className ="footer-social-item">
                            <a className ="instagram">
                            <i className ="fab fa-instagram"> </i>
                            </a>
                            </li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
        </>
    );
}