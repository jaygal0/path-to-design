export default function Page() {
  return (
    <div className="md:px-96">
      <div className="flex flex-col gap-4 font-sans text-xl font-thin leading-relaxed">
        <h1 className="mb-8 text-2xl font-bold">Privacy Policy</h1>

        <p>
          <strong>Last Updated:</strong> 22/11/2025
        </p>

        <p>
          PathToDesign.com (“we”, “our”, “us”) is committed to protecting your
          privacy. This Privacy Policy explains what personal data we collect,
          how we use it, and the rights you have under the GDPR and other
          applicable data protection laws.
        </p>

        <h2>Information We Collect</h2>
        <ul className="list-inside list-disc">
          <li>
            <strong>Personal Information You Provide:</strong> When you
            subscribe to our newsletter or contact us, we may collect your name,
            email address, and any information you include in your message.
          </li>
          <li>
            <strong>Usage Data:</strong> We use Plausible Analytics, a
            privacy-focused and cookie-free analytics platform, to collect
            aggregated, anonymous data such as pages visited, referring
            websites, and general device information. Plausible does not collect
            personal data or use cookies.
          </li>
          <li>
            <strong>Hosting and Server Logs:</strong> Our site is hosted on
            Vercel. Their systems may temporarily process IP addresses and
            technical information for performance, security, and error
            detection. This data is processed under legitimate interest and is
            not used for tracking.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul className="list-inside list-disc">
          <li>To operate, maintain, and improve our website.</li>
          <li>To respond to inquiries and provide customer support.</li>
          <li>
            To send newsletters and updates, but only if you have provided
            consent.
          </li>
          <li>
            To analyze website performance and understand usage trends through
            anonymous analytics.
          </li>
          <li>To maintain the security and reliability of our services.</li>
        </ul>

        <h2>Legal Basis for Processing (GDPR)</h2>
        <ul className="list-inside list-disc">
          <li>
            <strong>Consent:</strong> For newsletters and email communication.
          </li>
          <li>
            <strong>Legitimate Interest:</strong> For analytics (via Plausible)
            and essential hosting functions (via Vercel).
          </li>
          <li>
            <strong>Contractual Necessity:</strong> When responding to contact
            requests.
          </li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information. We only
          share data with trusted third-party providers who help us operate the
          website:
        </p>
        <ul className="list-inside list-disc">
          <li>Vercel – hosting and infrastructure</li>
          <li>Plausible – anonymous analytics</li>
          <li>Mailchimp – newsletter management</li>
        </ul>
        <p>
          These providers process data on our behalf and in compliance with
          applicable data protection laws.
        </p>

        <h2>Cookies</h2>
        <p>
          PathToDesign.com currently does not use cookies for analytics or
          tracking. Plausible Analytics is fully cookie-free. If we introduce
          cookies in the future, we will update this policy and display a cookie
          notice if required.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect
          your personal data. However, no online transmission or storage method
          can be guaranteed completely secure.
        </p>

        <h2>Links to Other Websites</h2>
        <p>
          Our website may contain links to external sites. We are not
          responsible for their content or privacy practices. We recommend
          reviewing the privacy policies of any external websites you visit.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Some links on PathToDesign.com are affiliate links, meaning we may
          earn a small commission if you purchase through them—at no additional
          cost to you. We only recommend products and services we believe are
          genuinely valuable.
        </p>

        <h2>Your Rights (GDPR)</h2>
        <ul className="list-inside list-disc">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent at any time</li>
          <li>Object to certain types of processing</li>
          <li>Request a copy of your data</li>
        </ul>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page with an updated “Last Updated” date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or privacy-related requests, please contact
          us at <strong>info@pathtodesign.com</strong>.
        </p>

        <p>By using PathToDesign.com, you agree to this Privacy Policy.</p>
      </div>
    </div>
  );
}
