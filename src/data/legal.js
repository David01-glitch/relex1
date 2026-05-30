import { SITE } from './site.js'

const C = SITE.name
const E = SITE.email
const ADDR = SITE.address.full
const PHONE = SITE.phone
const UPDATED = 'January 5, 2026'

export const PRIVACY = {
  title: 'Privacy Policy',
  updated: UPDATED,
  intro: [
    `${C} ("we," "us," or "our") respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains what information we collect when you visit ${SITE.url}, how we use and protect it, the choices you have, and the rights you may exercise. By using our website, you agree to the practices described here.`,
    `We are an independent editorial blog about canoeing and lake adventures for adults over 50. We are not a store, a tour operator, or a booking service, and we deliberately collect as little personal information as possible.`,
  ],
  sections: [
    {
      heading: '1. Information We Collect',
      body: [
        'Information you provide voluntarily: When you contact us, subscribe to our newsletter, or share a story, you may give us your name, email address, and the content of your message. We only ever ask for what is needed to respond to you or deliver the newsletter you requested.',
        'Information collected automatically: Like most websites, we may collect standard technical information such as your browser type, device type, referring pages, and general (city-level) location through cookies and analytics tools. This data is aggregated and is not used to personally identify you.',
        'We do not knowingly collect sensitive personal information, and we do not collect payment card details, because we do not sell products or services through this website.',
      ],
    },
    {
      heading: '2. Cookies and Consent',
      body: [
        'We use cookies and similar technologies to understand how readers use our site so we can improve our guides. Analytics and advertising storage are disabled by default. Nothing that requires consent loads until you make a choice in our cookie banner.',
        'We implement Google Consent Mode v2. When you first visit, analytics_storage and ad_storage are set to "denied." If you select "Accept," we update your consent to "granted" and store your preference locally in your browser. If you select "Decline," no analytics cookies are set. You can clear your browser storage at any time to reset this choice.',
      ],
    },
    {
      heading: '3. How We Use Your Information',
      body: [
        'To respond to your questions, messages, and story submissions.',
        'To send the email newsletter you have requested, and only until you unsubscribe.',
        'To understand, in aggregate, which articles and guides are most helpful so we can write better content.',
        'To maintain the security, integrity, and proper functioning of our website.',
        'We never sell your personal information, and we do not share it with third parties except as described in this policy.',
      ],
    },
    {
      heading: '4. Google Analytics',
      body: [
        'We use Google Analytics (GA4) to measure traffic and engagement. With your consent, Google may set cookies to help analyze how visitors use the site. We have enabled IP anonymization, and we do not use Analytics data to personally identify individual visitors.',
        'You can learn more about how Google uses data at policies.google.com/technologies/partner-sites, and you can opt out of Google Analytics across all sites using the Google Analytics Opt-out Browser Add-on.',
      ],
    },
    {
      heading: '5. Email and Newsletter',
      body: [
        'If you subscribe to our newsletter, we store your email address solely to send you the content you requested. Every email includes a clear unsubscribe link, and we honor unsubscribe requests promptly. You may also email us at ' + E + ' to be removed at any time.',
      ],
    },
    {
      heading: '6. How We Protect Your Information',
      body: [
        'We use reasonable administrative and technical safeguards to protect the limited information we hold. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. We encourage you to never send sensitive personal information (such as financial or health details) through our contact form.',
      ],
    },
    {
      heading: '7. Data Retention',
      body: [
        'We keep correspondence and newsletter subscriptions only as long as necessary to provide the service you requested or as required by law. When information is no longer needed, we delete or anonymize it.',
      ],
    },
    {
      heading: '8. Your Rights and Choices',
      body: [
        'Depending on where you live, you may have the right to access, correct, delete, or restrict the processing of your personal information, and to withdraw consent at any time. To exercise any of these rights, contact us at ' + E + ' and we will respond within a reasonable timeframe.',
        'California residents may have additional rights under the CCPA/CPRA, and residents of the EU/EEA and UK may have rights under the GDPR/UK GDPR. We honor verified requests regardless of where you reside.',
      ],
    },
    {
      heading: "9. Children's Privacy",
      body: [
        'Our website is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us and we will delete it.',
      ],
    },
    {
      heading: '10. Third-Party Links',
      body: [
        'Our articles may link to outfitters, parks, or resources operated by others. We are not responsible for the privacy practices of those external sites, and we encourage you to review their policies before sharing information with them.',
      ],
    },
    {
      heading: '11. Changes to This Policy',
      body: [
        'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Significant changes will be highlighted on the site. Your continued use of the website after changes take effect constitutes acceptance of the revised policy.',
      ],
    },
    {
      heading: '12. Contact Us',
      body: [
        `If you have any questions about this Privacy Policy or our data practices, please contact us:`,
        `Email: ${E}`,
        `Phone: ${PHONE}`,
        `Mail: ${C}, ${ADDR}`,
      ],
    },
  ],
}

export const TERMS = {
  title: 'Terms of Service',
  updated: UPDATED,
  intro: [
    `Welcome to ${C}. These Terms of Service ("Terms") govern your access to and use of ${SITE.url} and all content, features, and services we make available (collectively, the "Website"). Please read these Terms carefully. By accessing or using the Website, you agree to be bound by them. If you do not agree, please do not use the Website.`,
  ],
  sections: [
    {
      heading: '1. Acceptance of Terms',
      body: [
        'By accessing, browsing, or otherwise using the Website, you confirm that you have read, understood, and agree to be bound by these Terms and by our Privacy Policy, which is incorporated by reference. These Terms apply to all visitors, readers, and others who access the Website.',
      ],
    },
    {
      heading: '2. About Our Content',
      body: [
        `${C} is an independent editorial blog providing general information about canoeing, lake travel, outdoor recreation, and related topics for adults over 50. All content is provided for informational and educational purposes only. We are not a tour operator, a retailer, a guide service, or a provider of professional advice.`,
      ],
    },
    {
      heading: '3. No Professional, Medical, or Safety Advice',
      body: [
        'Our articles, guides, and tips are general in nature and are not a substitute for professional judgment. Canoeing and outdoor activities carry inherent risks. Nothing on this Website constitutes medical, legal, financial, or professional safety advice. Always consult your physician before beginning any new physical activity, follow local regulations, use proper safety equipment, and assess conditions for yourself before paddling.',
      ],
    },
    {
      heading: '4. Assumption of Risk',
      body: [
        'You understand and agree that any outdoor activity you undertake after reading our content is done entirely at your own risk and discretion. You are solely responsible for your own safety, the safety of those in your care, your equipment, and your decisions on and around the water. We are not responsible for any injury, loss, or damage arising from your activities.',
      ],
    },
    {
      heading: '5. Intellectual Property',
      body: [
        `All content on the Website — including text, articles, guides, photographs, graphics, logos, and the overall design — is the property of ${C} or its content contributors and is protected by copyright and other intellectual property laws. You may view and share links to our content for personal, non-commercial use.`,
      ],
    },
    {
      heading: '6. Permitted Use and Restrictions',
      body: [
        'You agree to use the Website only for lawful purposes. You may not reproduce, republish, sell, or distribute our content without prior written permission; attempt to gain unauthorized access to our systems; use automated tools to scrape or overload the Website; or use the Website in any way that could damage, disable, or impair it or interfere with others\' use.',
      ],
    },
    {
      heading: '7. User Submissions',
      body: [
        'If you submit a story, photograph, comment, or other material to us, you grant us a non-exclusive, royalty-free, worldwide license to use, edit, and publish that material in connection with the Website, with attribution as agreed. You represent that you own or have the right to share what you submit and that it does not infringe anyone else\'s rights. We are not obligated to publish any submission.',
      ],
    },
    {
      heading: '8. Newsletter and Communications',
      body: [
        'By subscribing to our newsletter, you consent to receive periodic emails from us. You may unsubscribe at any time using the link in any email or by contacting us. We will never share your email address with unrelated third parties.',
      ],
    },
    {
      heading: '9. Third-Party Links and References',
      body: [
        'The Website may reference or link to third-party websites, products, parks, or outfitters for your convenience. We do not control and are not responsible for the content, policies, availability, or practices of any third party. A reference is not an endorsement, and you engage with third parties at your own risk.',
      ],
    },
    {
      heading: '10. Disclaimer of Warranties',
      body: [
        'The Website and all content are provided "as is" and "as available," without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components, or that the information is complete, current, or accurate in every respect.',
      ],
    },
    {
      heading: '11. Limitation of Liability',
      body: [
        `To the fullest extent permitted by law, ${C}, its contributors, and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss or injury arising from your use of, or inability to use, the Website or your reliance on any content. Where liability cannot be excluded, it is limited to the maximum extent permitted by applicable law.`,
      ],
    },
    {
      heading: '12. Indemnification',
      body: [
        `You agree to indemnify and hold harmless ${C} and its contributors from any claims, damages, liabilities, costs, or expenses (including reasonable legal fees) arising out of your use of the Website, your violation of these Terms, or your violation of any rights of a third party.`,
      ],
    },
    {
      heading: '13. Changes to the Website and Terms',
      body: [
        'We may modify, suspend, or discontinue any part of the Website at any time without notice. We may also revise these Terms from time to time. The "Last updated" date reflects the most recent version. Your continued use of the Website after changes take effect constitutes acceptance of the revised Terms.',
      ],
    },
    {
      heading: '14. Governing Law',
      body: [
        'These Terms are governed by and construed in accordance with the laws of the State of Minnesota, United States, without regard to its conflict-of-law principles. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Minnesota.',
      ],
    },
    {
      heading: '15. Contact Information',
      body: [
        'Questions about these Terms may be directed to us:',
        `Email: ${E}`,
        `Phone: ${PHONE}`,
        `Mail: ${C}, ${ADDR}`,
      ],
    },
  ],
}

export const REFUND = {
  title: 'Refund Policy',
  updated: UPDATED,
  intro: [
    `This Refund Policy explains how refunds work in connection with ${C}. We want to be completely transparent: ${C} is a free, independent editorial blog. We do not sell physical products, paid memberships, courses, tours, or bookings through this Website, and we do not collect payment information from our readers.`,
  ],
  sections: [
    {
      heading: '1. Our Content Is Free',
      body: [
        'All articles, guides, tips, and stories on this Website are provided free of charge. Subscribing to our email newsletter is also free. Because we do not charge readers for access to our content, there are ordinarily no payments to refund.',
      ],
    },
    {
      heading: '2. No Paid Products or Services',
      body: [
        'We are not a store, a tour operator, or a booking platform. We do not sell canoes, gear, guided trips, cabin rentals, or event tickets. When our articles mention an outfitter, retailer, park, or product, those transactions take place entirely with the relevant third party, under their terms and their refund policies — not ours.',
      ],
    },
    {
      heading: '3. Purchases From Third Parties',
      body: [
        'If you purchase a product or service from a business we mention or link to, any refund must be requested directly from that business. We are not a party to those transactions and cannot issue refunds, process returns, or mediate disputes on their behalf. Please review the third party\'s own refund and cancellation policy before you buy.',
      ],
    },
    {
      heading: '4. Voluntary Contributions or Future Offerings',
      body: [
        'If, in the future, we ever offer an optional paid product (such as a downloadable guide) or accept voluntary contributions, the specific refund terms for that offering will be clearly stated at the point of purchase. Unless stated otherwise at that time, eligible refund requests for any such digital product may be made within 14 days of purchase by emailing us, provided the request is made in good faith.',
      ],
    },
    {
      heading: '5. How to Reach Us',
      body: [
        'If you believe you were charged in error by anything associated with this Website, or you have any question about this policy, please contact us right away and we will help you resolve it:',
        `Email: ${E}`,
        `Phone: ${PHONE}`,
        `Mail: ${C}, ${ADDR}`,
      ],
    },
    {
      heading: '6. Changes to This Policy',
      body: [
        'We may update this Refund Policy if our offerings change. Any update will be posted on this page with a revised "Last updated" date. The policy in effect at the time of a transaction governs that transaction.',
      ],
    },
  ],
}
