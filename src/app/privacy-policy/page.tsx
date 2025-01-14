import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-12 px-4">
        <article className="prose lg:prose-xl mx-auto">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At AI Call Center Agents, we take your privacy seriously. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our AI-powered call center services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when
            you create an account, use our services, or contact us for support.
            This may include:
          </p>
          <ul>
            <li>
              Contact information (e.g., name, email address, phone number)
            </li>
            <li>Account credentials</li>
            <li>Business information</li>
            <li>Call logs and recordings</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, as well as to:
          </p>
          <ul>
            <li>Process and fulfill your requests</li>
            <li>Communicate with you about our services</li>
            <li>
              Detect, investigate, and prevent fraudulent transactions and other
              illegal activities
            </li>
            <li>Comply with legal obligations</li>
          </ul>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect the security of your personal information. However, please
            note that no method of transmission over the Internet or electronic
            storage is 100% secure.
          </p>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            <a href="mailto:privacy@aicallcenter.com">
              privacy@aicallcenter.com
            </a>
          </p>
          <p>
            <Link href="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
}
