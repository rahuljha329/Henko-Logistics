import React from 'react';

const TermsContent = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-16 lg:px-24">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Terms & Conditions
      </h1>

      <p className="text-gray-700 text-base md:text-lg leading-8 mb-8 max-w-5xl mx-auto text-center">
        These terms and conditions govern the use of our logistics services.
        By accessing our website or using our services, you agree to comply with these terms.
      </p>

      <div className="space-y-8 text-gray-800 text-sm md:text-base leading-7 max-w-6xl mx-auto">

        <div>
          <h2 className="font-bold text-lg mb-2">1. ACCEPTANCE OF TERMS</h2>
          <p>
            By using our logistics services, you agree to be bound by these terms and conditions.
            If you do not agree, please discontinue use of our services immediately.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">2. SERVICES</h2>
          <p>
            We provide transportation, shipping, warehousing, and supply chain solutions.
            Delivery timelines are estimates and may vary due to operational or external conditions.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">3. USER RESPONSIBILITIES</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete shipment information</li>
            <li>Ensure goods comply with all applicable laws and regulations</li>
            <li>Properly package items to prevent damage</li>
            <li>Not ship prohibited or hazardous materials without declaration</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">4. PROHIBITED ITEMS</h2>
          <p>
            Customers must not ship illegal, hazardous, flammable, or restricted goods.
            Any violation may result in legal action and termination of services.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">5. PAYMENT TERMS</h2>
          <p>
            All services must be paid according to agreed pricing terms. Late payments may result
            in penalties, delayed shipments, or service suspension.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">6. DELIVERY & DELAYS</h2>
          <p>
            While we strive for timely delivery, we are not responsible for delays caused by weather,
            traffic, customs clearance, or other unforeseen circumstances.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">7. LIMITATION OF LIABILITY</h2>
          <p>
            We are not liable for indirect or consequential losses. Liability is limited to the declared
            value of goods unless additional insurance is purchased.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">8. INSURANCE</h2>
          <p>
            Customers may opt for shipment insurance. Without insurance, we are not responsible for
            damage, theft, or loss beyond standard liability limits.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">9. CANCELLATION & REFUND</h2>
          <p>
            Orders can be canceled before dispatch. Refunds are subject to company policy and may
            exclude processing or handling charges.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">10. TERMINATION</h2>
          <p>
            We reserve the right to suspend or terminate services if these terms are violated or
            misuse of services is detected.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">11. CHANGES TO TERMS</h2>
          <p>
            We may update these terms periodically. Continued use of our services indicates acceptance
            of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">12. GOVERNING LAW</h2>
          <p>
            These terms are governed by applicable laws and regulations. Any disputes shall be subject
            to the jurisdiction of local courts.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">13. CONTACT US</h2>
          <p>
            Email: support@logistics.com <br />
            Phone: +91 00000 00000
          </p>
        </div>

      </div>

    </div>
  );
};

export default TermsContent;