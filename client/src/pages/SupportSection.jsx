import { FaEnvelope } from "react-icons/fa";

const SupportSection = () => {
  return (
    <div className="bg-blue-100 text-black py-12 px-6 text-center min-h-screen">
      <h2 className="text-3xl font-bold mb-4">We're here to help.</h2>
      <p className="text-lg mb-8">
        Have an issue with an order or feedback for us? Our support team is here to help you from 6 am to 3 am.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-12">
        <div className="w-full md:w-1/3 text-center border-t border-white pt-4">
          <div className="flex items-center justify-center text-red-500 text-xl font-bold mb-2">
            <FaEnvelope className="mr-2" />
            Order Related Queries
          </div>
          <p className="text-lg">Connect with customer support on the app</p>
        </div>
        <div className="w-full md:w-1/3 text-center border-t border-white pt-4">
          <div className="flex items-center justify-center text-red-500 text-xl font-bold mb-2">
            <FaEnvelope className="mr-2" />
            For Anything Else
          </div>
          <p className="text-lg">Send us an email to <a href="mailto:support@zeptonow.com" className="underline">support@GrocyGonow.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
