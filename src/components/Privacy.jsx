import './privacy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserShield, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Privacy() {
    return (
        <section className='privacy-container'>
            <div className="breadcrumb">
                <p>Home / Privacy Statement</p>
            </div>
            <h2 className="privacy-title">Data Privacy Statement for Lynk Beauty Spa</h2>
            <h3 className='sub-header'>
                At Lynk Beauty Spa, we value your privacy and are committed to protecting your personal information. This data privacy statement outlines how we collect, use, and safeguard your data when you interact with our services.
            </h3>
            
            <div className="details-container">
                <details>
                    <summary>
                        <FontAwesomeIcon icon={faUserShield} className="icon" /> 
                        1. Information We Collect
                    </summary>
                    <div>
                        <h4>We may collect the following types of personal information:</h4>
                        <ul>
                            <li>Contact Information: Name, email address, phone number, and mailing address.</li>
                            <li>Purchase Information: Details of products and services you have purchased from us.</li>
                            <li>Payment Information: Credit card details and billing address.</li>
                            <li>Usage Information: How you use our website and services, including IP address, browser type, and browsing history.</li>
                            <li>Preferences: Your preferences and interests related to our products and services.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" /> 
                        2. How We Use Your Information
                    </summary>
                    <div>
                        <h4>We use your personal information for the following purposes:</h4>
                        <ul>
                            <li>To Provide Services: To process transactions, manage appointments, and deliver products.</li>
                            <li>To Improve Our Services: To enhance our products, website, and customer service based on your feedback.</li>
                            <li>To Communicate: To send you promotional materials, newsletters, and other information you may find interesting.</li>
                            <li>For Security: To protect against fraud and unauthorized transactions.</li>
                            <li>Legal Compliance: To comply with legal obligations and resolve disputes.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary>
                        <FontAwesomeIcon icon={faLock} className="icon" /> 
                        3. Data Sharing and Disclosure
                    </summary>
                    <div>
                        <h4>We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the following cases:</h4>
                        <ul>
                            <li>Service Providers: We may share your information with third-party service providers who assist us in operating our business and providing our services, e.g., order delivery.</li>
                            <li>Legal Requirements: We may disclose your information when required by law or to protect our rights and safety.</li>
                            <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the new owner.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary>
                        <FontAwesomeIcon icon={faLock} className="icon" /> 
                        4. Data Security
                    </summary>
                    <div>
                        <h4>We implement a variety of security measures to maintain the safety of your personal information. These include:</h4>
                        <ul>
                            <li>Encryption: Data encryption to protect sensitive information.</li>
                            <li>Access Controls: Restricted access to personal data to authorized personnel only.</li>
                            <li>Regular Audits: Regular security audits to identify and mitigate risks.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary>
                        <FontAwesomeIcon icon={faLock} className="icon" /> 
                        5. Your Rights
                    </summary>
                    <div>
                        <h4>You have the right to:</h4>
                        <ul>
                            <li>Access Your Data: Request a copy of the personal information we hold about you.</li>
                            <li>Update Your Data: Correct any inaccuracies in your personal information.</li>
                            <li>Delete Your Data: Request the deletion of your personal information, subject to certain exceptions.</li>
                            <li>Opt-Out: Unsubscribe from marketing communications at any time.</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" /> 
                        6. Contact Us
                    </summary>
                    <div className="contact-info">
                        <h4>If you have any questions about this data privacy statement or your personal information, please contact us at:</h4>
                        <ul>
                            <li>Email: <a href="mailto:beautylynkspa254@gmail.com">beautylynkspa254@gmail.com</a></li>
                            <li>Phone: <a href="tel:+254701636709">+254 701 636709</a></li>
                            <li>Address: Lyric house, Kimathi Street</li>
                        </ul>
                    </div>
                </details>

                <details>
                    <summary>
                        <FontAwesomeIcon icon={faLock} className="icon" /> 
                        7. Changes to This Statement
                    </summary>
                    <p>
                        We may update this data privacy statement from time to time. We will notify you of any changes by posting the new statement on our website.
                    </p>
                </details>
            </div>
        </section>
    );
}

export default Privacy;
