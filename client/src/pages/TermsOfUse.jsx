const TermsOfUse = () => {
    return (
      <div className="bg-blue-100 min-h-screen py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-blue shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
          <p className="text-gray-700 mb-6 text-sm md:text-base">Last Updated: February 28, 2025</p>
  
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Welcome to <strong>GrocyGo</strong>. These Terms of Use govern your use of our platform, including our website and mobile application.
            By accessing or using our services, you agree to be bound by these terms.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            By using <strong>GrocyGo</strong>, you acknowledge that you have read, understood, and agree to these Terms of Use. If you do not agree, you must discontinue use immediately.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">2. Use of Services</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-sm md:text-base">
            <li>You must be at least 18 years old or have legal parental consent.</li>
            <li>You may not use our services for any unlawful or fraudulent activities.</li>
            <li>All intellectual property on the platform belongs to GrocyGo.</li>
          </ul>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">3. User Accounts</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            When you create an account with <strong>GrocyGo</strong>, you are responsible for maintaining the confidentiality of your login credentials.
            You agree to notify us immediately if you suspect unauthorized access to your account.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">4. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            GrocyGo is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our services.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">5. Changes to Terms</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We may update these Terms of Use from time to time. Continued use of our services after updates constitutes acceptance of the revised terms.
          </p>
  
          <p className="text-gray-700 mt-6 text-sm md:text-base">
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@grocygo.com" className="text-blue-600 underline">
              support@grocygo.com
            </a>.
          </p>
        </div>
      </div>
    );
  };
  
  export default TermsOfUse;
  