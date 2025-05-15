const PrivacyPolicy = () => {
    return (
      <div className ="bg-blue-100 min-h-screen py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-blue-100 shadow-lg p-6 md:p-8 lg:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-700 mb-6 text-sm md:text-base">Last Updated: February 28, 2025</p>
  
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Welcome to <strong>GrocyGo</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our services.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We collect information that you provide directly, such as your name, email, phone number, and address. We also gather usage data when you interact with our app and website.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-sm md:text-base">
            <li>To provide and improve our services</li>
            <li>To personalize your experience</li>
            <li>To send updates, promotions, and support messages</li>
            <li>To comply with legal obligations</li>
          </ul>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">3. Data Sharing & Security</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We do not sell your personal data. Your information is stored securely and only shared with trusted third-party services that help us operate our business.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">4. Your Rights & Choices</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            You have the right to access, update, or delete your personal data. Contact us at{" "}
            <a href="mailto:support@grocygo.com" className="text-blue-600 underline">
              support@grocygo.com
            </a>{" "}
            for assistance.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">5. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We may update this Privacy Policy from time to time. Any changes will be posted here, and we will notify you as necessary.
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
  
  export default PrivacyPolicy;
  