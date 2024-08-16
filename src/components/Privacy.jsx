import './privacy.css'

function Privacy() {

    return (
        <section className='privacy-container'>
            <h1>Data Privacy Statement for [Beauty Shop Name]</h1>
                At [Beauty Shop Name], we value your privacy and are committed to protecting your personal information. This data privacy statement outlines how we collect, use, and safeguard your data when you interact with our services.
            <details>
                <summary> 1. Information We Collect</summary>
                <div>
                        We may collect the following types of personal information:
                        <ul>
                            <li>Contact Information: Name, email address, phone number, and mailing address.</li>
                            <li>Purchase Information: Details of products and services you have purchased from us.</li>
                            <li>Payment Information: Credit card details and billing address.</li>
                            <li>Usage Information: How you use our website and services, including IP address, browser type, and browsing history.</li>
                            <li>preferencesences: Your preferences and interests related to our products and services.</li>
                        </ul>
                </div>
            </details>

            <details>
                <summary> 2. How We Use Your Information</summary>
                <p>
                        We use your personal information for the following purposes:
                    • To Provide Services: To process transactions, manage appointments, and deliver products.
                    • To Improve Our Services: To enhance our products, website, and customer service based on your feedback.
                    • To Communicate: To send you promotional materials, newsletters, and other information you may find interesting.
                    • For Security: To protect against fraud and unauthorized transactions.
                    • Legal Compliance: To comply with legal obligations and resolve disputes.
                </p>
            </details>

            <details>
                <summary> 3. Data Sharing and Disclosure</summary>
                <p>
                        We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the following cases:
                    • Service Providers: We may share your information with third-party service providers who assist us in operating our business and providing our services e.g. order delivery
                    • Legal Requirements: We may disclose your information when required by law or to protect our rights and safety.
                    • Business Transfers: In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the new owner.
                </p>
            </details>

            <details>
                <summary> 4. Data Security</summary>
                <p>
                    We implement a variety of security measures to maintain the safety of your personal information. These include:
                    • Encryption: Data encryption to protect sensitive information.
                    • Access Controls: Restricted access to personal data to authorized personnel only.
                    • Regular Audits: Regular security audits to identify and mitigate risks.
                </p>
            </details>

            <details>
                <summary> 5. Your Rights</summary>
                <p>
                    You have the right to:
                    • Access Your Data: Request a copy of the personal information we hold about you.
                    • Update Your Data: Correct any inaccuracies in your personal information.
                    • Delete Your Data: Request the deletion of your personal information, subject to certain exceptions.
                    • Opt-Out: Unsubscribe from marketing communications at any time.
                </p>
            </details>
            <details>
                <summary> 6. Contact Us</summary>
            <p>
                If you have any questions about this data privacy statement or your personal information, please contact us at:
                • Email: [Your Email Address]
                • Phone: [Your Phone Number]
                • Address: [Your Physical Address]
            </p>
            </details>
            <details>
                <summary> 7. Changes to This Statement</summary>
                <p>
                    We may update this data privacy statement from time to time. We will notify you of any changes by posting the new statement on our website.
                </p>
            </details>
        </section>
    )
}

export default Privacy