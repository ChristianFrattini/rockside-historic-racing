import React from "react";

export default function PrivacyPage() {
  return (
    <div className="py-12 lg:pt-[7rem] pt-[8.5rem] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="md:mb-10 mb-5 font-light md:text-4xl text-3xl">
        Privacy Notice
      </h2>
      <div className="flex flex-col space-y-5 lg:space-y-10 font-serif">
        {/* Who We Are */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">1. Who We Are</p>
          <p className="text-base font-medium lg:pr-40">
            Rockside Historic Racing Limited operates this website. For any
            questions regarding this privacy notice, contact us at:
          </p>
          <div>
            <p className="text-base font-semibold">
              Email:{" "}
              <a
                className="underline font-normal"
                href="mailto:email@email.com"
              >
                email@email.com
              </a>
            </p>
            <div className="flex flex-row">
              <p className="text-base font-semibold">Address: </p>
              <p className="ml-1">
                Address Line 1, Address Line 2, City, Postcode
              </p>
            </div>
          </div>
        </div>
        {/* What Personal Data We Collect */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">
            2. What Personal Data We Collect
          </p>
          <p className="text-base font-medium lg:pr-40">
            When you contact us through our website, we may collect the
            following personal data:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>First Name</li>
            <li>Last Name</li>
            <li>Email</li>
            <li>Telephone</li>
          </ul>
        </div>
        {/* How We Use Your Data */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">3. How We Use Your Data</p>
          <p className="text-base font-medium lg:pr-40">
            We use the information you provide to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your inquiries.</li>
            <li>Provide customer support.</li>
          </ul>
          <p className="text-base font-medium lg:pr-40">
            We do <strong>not</strong> store your data in a database. Your
            message is received via email and retained only as long as necessary
            to respond to your inquiry.
          </p>
        </div>
        {/* Legal Basis for Processing */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">4. Legal Basis for Processing</p>
          <p className="text-base font-medium lg:pr-40">
            We process your personal data based on{" "}
            <strong>legitimate interest</strong> (to respond to your request) or{" "}
            <strong>consent</strong> (if you provide your details voluntarily).
          </p>
        </div>
        {/* Data Sharing */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">5. Data Sharing</p>
          <p className="text-base font-medium lg:pr-40">
            We do <strong>not</strong> share, sell, or distribute your personal
            data to third parties. However, our email provider may process your
            data as part of email communication.
          </p>
        </div>
        {/* Data Retention */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">6. Data Retention</p>
          <p className="text-base font-medium lg:pr-40">
            We retain your email only as long as necessary to handle your
            inquiry, after which it will be deleted unless legally required
            otherwise.
          </p>
        </div>
        {/* Your Rights */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">7. Your Rights</p>
          <p className="text-base font-medium lg:pr-40">
            Under UK data protection law, you have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request access to your data.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw your consent (if applicable).</li>
          </ul>
          <p className="text-base font-semibold">
            To exercise these rights, contact us at:{" "}
            <a className="underline font-normal" href="mailto:email@email.com">
              email@email.com
            </a>
          </p>
        </div>
        {/* Security */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">8. Security</p>
          <p className="text-base font-medium lg:pr-40">
            We take reasonable measures to protect your data, but please be
            aware that email communication is not always 100% secure.
          </p>
        </div>
        {/* Updates to This Notice */}
        <div className="flex flex-col space-y-2 lg:space-y-4">
          <p className="text-xl font-semibold">9. Updates to This Notice</p>
          <p className="text-base font-medium lg:pr-40">
            We may update this privacy notice from time to time. Any changes
            will be posted on this page.
          </p>
        </div>
      </div>
    </div>
  );
}
