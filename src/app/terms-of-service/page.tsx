import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-12 px-4">
        <article className="prose lg:prose-xl mx-auto">
          <h1>Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service")
            carefully before using the AI Call Center Agents website and
            services operated by AI Call Center Agents.
          </p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, then you may not
            access the service.
          </p>
          <h2>2. Use of Service</h2>
          <p>
            Our service is designed to provide AI-powered call center solutions.
            You agree to use the service only for lawful purposes and in
            accordance with these Terms.
          </p>
          <h2>3. Account Registration</h2>
          <p>
            To use our services, you may be required to create an account. You
            are responsible for maintaining the confidentiality of your account
            information and for all activities that occur under your account.
          </p>
          <h2>4. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality
            are and will remain the exclusive property of AI Call Center Agents
            and its licensors.
          </p>
          <h2>5. Termination</h2>
          <p>
            We may terminate or suspend access to our service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms.
          </p>
          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall AI Call Center Agents, nor its directors,
            employees, partners, agents, suppliers, or affiliates, be liable for
            any indirect, incidental, special, consequential or punitive
            damages.
          </p>
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. By continuing to access or use our service
            after those revisions become effective, you agree to be bound by the
            revised terms.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            <a href="mailto:legal@aicallcenter.com">legal@aicallcenter.com</a>
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
