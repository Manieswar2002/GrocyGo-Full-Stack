import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const messages = ["Welcome to", "Happy to see you at", "Thanks for choosing"];
const registerMessages = [
  "Be a part of the GrocyGo family today!",
  "Sign up now & enjoy seamless grocery shopping!",
  "Fresh groceries, fast delivery—Join now!",
];

const AnimatedMessage = ({ messages }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change message every 4 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <motion.div
      key={messageIndex} // Triggers animation on update
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center font-semibold mb-4 text-xl sm:text-2xl md:text-xl"
    >
      <span className="text-yellow-500">
        <Typewriter
          words={[messages[messageIndex]]}
          loop={1} // Type only once per message cycle
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </span>
      <br />
      <span className="font-bold text-green-600 text-3xl sm:text-3xl md:text-3xl">
        GrocyGo! 🛒
      </span>
    </motion.div>
  );
};

export const WelcomeMessage = () => <AnimatedMessage messages={messages} />;
export const RegisterMessage = () => <AnimatedMessage messages={registerMessages} />;
