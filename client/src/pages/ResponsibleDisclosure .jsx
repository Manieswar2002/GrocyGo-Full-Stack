const ResponsibleDisclosure = () => {
    return (
      <div className="bg-blue-100 min-h-screen py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-blue shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Responsible Disclosure Policy</h1>
          <p className="text-gray-700 mb-6 text-sm md:text-base">Last Updated: February 28, 2025</p>
  
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            At <strong>GrocyGo</strong>, we take security seriously. We encourage security researchers to responsibly disclose vulnerabilities
            so we can address them promptly and ensure a safe experience for our users.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">1. Reporting a Vulnerability</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            If you discover a security issue, please report it to us by emailing{" "}
            <a href="mailto:security@grocygo.com" className="text-blue-600 underline">
              security@grocygo.com
            </a>.  
            Provide sufficient details to help us reproduce and resolve the issue.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">2. Guidelines for Responsible Disclosure</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-sm md:text-base">
            <li>Do not publicly disclose the vulnerability before we have addressed it.</li>
            <li>Do not access or modify data that does not belong to you.</li>
            <li>Do not exploit the vulnerability for personal gain.</li>
            <li>Give us a reasonable amount of time to respond and fix the issue.</li>
          </ul>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">3. Recognition & Rewards</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            While we do not offer a formal bug bounty program, we may acknowledge and appreciate researchers
            who help us enhance security.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">4. Legal Considerations</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We will not take legal action against researchers who adhere to this policy.
            However, any actions that cause harm or violate applicable laws will not be tolerated.
          </p>
  
          <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">5. Contact</h2>
          <p className="text-gray-700 text-sm md:text-base">
            If you have any questions regarding this policy, please reach out to{" "}
            <a href="mailto:security@grocygo.com" className="text-blue-600 underline">
              security@grocygo.com
            </a>.
          </p>
        </div>
      </div>
    );
  };
  
  export default ResponsibleDisclosure;
  