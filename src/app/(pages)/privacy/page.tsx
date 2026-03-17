export default function Page() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-5 font-sans text-lg font-light leading-relaxed text-stone-200">
        <h1 className="mb-6 text-3xl font-bold text-stone-50">Privacy Policy</h1>

        <p>
          <strong>Last Updated:</strong> March 17, 2026
        </p>

        <p>
          Path to Design collects a limited amount of information so we can run
          the site, send quiz results, improve the experience, and optionally
          send design tips when you explicitly opt in.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          Information we collect
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Your email address when you submit the design career quiz</li>
          <li>Your quiz answers, result role, and experience level</li>
          <li>
            Optional marketing consent if you choose to receive design tips and
            updates
          </li>
          <li>
            Site usage and event data through Plausible Analytics, such as page
            views, outbound clicks, and quiz funnel events
          </li>
          <li>
            Temporary quiz state stored in your browser session so you can move
            through the quiz without losing progress
          </li>
          <li>
            If you submit a designer profile or story, the information and
            files you choose to provide in that form
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-stone-50">
          Why we collect it
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>To send your quiz result email and recommended resources</li>
          <li>To personalise your design guidance based on your answers</li>
          <li>To send future marketing emails only if you explicitly opt in</li>
          <li>To understand how people use the site and improve it over time</li>
          <li>To review and publish submitted designer stories when relevant</li>
        </ul>

        <h2 className="text-2xl font-semibold text-stone-50">
          Analytics and Plausible
        </h2>
        <p>
          We use Plausible Analytics to measure page views, outbound clicks,
          and quiz interactions. This helps us understand what content is
          useful and where users drop off in the funnel. We use Plausible in a
          lightweight, privacy-focused way and do not use it in our own code to
          create advertising audiences or behavioral profiles.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          Cookies and browser storage
        </h2>
        <p>
          We do not currently set non-essential marketing cookies in our own
          application code. The quiz does use browser session storage to hold
          temporary quiz progress while you complete the flow. Your browser,
          hosting providers, or third-party services may still use technical
          cookies or similar storage for core functionality, security, or
          delivery.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          Emails and consent
        </h2>
        <p>
          Your quiz result email is transactional, so it is sent whether or not
          you opt into marketing. Marketing emails are only sent when you
          explicitly check the consent box. We store whether consent was given
          and when it was recorded so we can respect your preferences.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          Unsubscribe and email preferences
        </h2>
        <p>
          Marketing emails include an unsubscribe link. When you unsubscribe, we
          keep a record of that preference so we do not continue sending
          marketing emails. Unsubscribing does not automatically delete your
          record from our database.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          How long we keep it
        </h2>
        <p>
          We keep subscriber records until you unsubscribe, request deletion, or
          we determine the data is no longer needed for the quiz and email
          service. Temporary quiz progress stored in session storage remains in
          your browser until the session ends or it is cleared.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          Who processes the data
        </h2>
        <p>
          We use third-party providers to help operate the site, including
          hosting and analytics services, a database provider, and Resend for
          sending emails. These providers only receive the information needed to
          perform their service.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          Your rights
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Request access to your data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw marketing consent at any time</li>
          <li>Unsubscribe from marketing emails</li>
        </ul>

        <h2 className="text-2xl font-semibold text-stone-50">
          How to request deletion
        </h2>
        <p>
          Email <strong>info@pathtodesign.com</strong> and we will handle your
          deletion request as quickly as possible.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">
          Information we do not intentionally collect
        </h2>
        <p>
          We do not intentionally collect sensitive personal data through the
          quiz. Please avoid sending sensitive information through quiz fields,
          contact forms, or profile submissions unless it is necessary.
        </p>

        <h2 className="text-2xl font-semibold text-stone-50">Contact</h2>
        <p>
          For any privacy-related questions, contact{" "}
          <strong>info@pathtodesign.com</strong>.
        </p>
      </div>
    </div>
  );
}
