import React from 'react';

const PrivacyContent = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto  p-8 md:p-12 ">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-base leading-7 mb-6">
          We respect your privacy and are committed to protecting your personal information.
          This Privacy Policy outlines how we collect, use, and safeguard your data when you use our logistics services.
          It also explains your rights regarding your personal information.
        </p>

        <div className="space-y-6 text-gray-700 text-sm md:text-base leading-7">

          <div>
            <h2 className="font-bold text-gray-800 mb-2">
              1. ORGANIZATION AND SCOPE
            </h2>
            <p>
              Our logistics company is responsible for collecting and processing personal information through our website and services.
              This policy applies to all data collected via shipments, tracking systems, and customer interactions.
              It also includes interactions with third-party logistics partners.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-2">
              2. INFORMATION COLLECTED
            </h2>
            <p className="mb-2">
              By using our services, you consent to the collection and use of your information. We may collect:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Personal identification information:</span> Name, email, phone number.
              </li>
              <li>
                <span className="font-semibold">Shipping details:</span> Pickup and delivery addresses.
              </li>
              <li>
                <span className="font-semibold">Transaction data:</span> Payment and billing information.
              </li>
              <li>
                <span className="font-semibold">Tracking data:</span> Shipment status and delivery updates.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-2">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To manage and deliver shipments</li>
              <li>To provide real-time tracking updates</li>
              <li>To improve logistics operations and services</li>
              <li>To communicate with customers</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-2">
              4. DATA SHARING
            </h2>
            <p>
              We do not sell your personal data. Information may be shared with transport partners,
              payment gateways, and authorities when required by law.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-2">
              5. DATA SECURITY
            </h2>
            <p>
              We use industry-standard security measures to protect your information from unauthorized access,
              misuse, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-2">
              6. YOUR RIGHTS
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request corrections or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-gray-800 mb-2">
              7. CONTACT US
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at:
              <br />
              Email: support@logistics.com <br />
              Phone: +91 00000 00000
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;