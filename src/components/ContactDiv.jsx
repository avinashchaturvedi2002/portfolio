import { motion } from "framer-motion";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactDiv() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isLoading,setIsLoading]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (!formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
     const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_email: formData.email,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      setStatus("Message sent successfully!");
      setFormData({ email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send. Please try again later.");
      console.error(error);
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="sm:w-3/4 mt-8 space-y-8 flex flex-col border rounded-2xl border-white/20 justify-center items-center p-8"
    >
      {/* Contact Options */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col space-y-4 sm:space-y-0 items-center sm:flex-row justify-center sm:space-x-16 w-full"
      >
        <motion.a
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex w-full sm:w-5/12 items-center justify-center px-4 py-2 rounded-2xl space-x-2 border border-white/20"
          href="mailto:avinashchaturvedi2002@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
        >
          <SiGmail />
          <span>avinashchaturvedi2002@gmail.com</span>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex w-full sm:w-5/12 items-center justify-center px-4 py-2 rounded-2xl space-x-2 border border-white/20"
          href="https://wa.me/916394196970"
  target="_blank"
  rel="noopener noreferrer"
        >
          <SiWhatsapp />
          <span>WhatsApp</span>
        </motion.a>
      </motion.div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm"
      >
        or send a message
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-center flex-col space-y-4"
      >
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-black/5 w-11/12 rounded p-4 border border-white/20 focus:outline-none"
        />
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          rows={5}
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="bg-black/5 w-11/12 rounded p-4 border border-white/20 resize-none focus:outline-none"
        />
        <motion.button
  whileTap={{ scale: 0.98 }}
  whileHover={{ scale: 1.02 }}
  type="submit"
  disabled={isLoading}
  className={`bg-black/5 w-11/12 rounded px-4 py-2 border border-white/20 focus:outline-none ${
    isLoading ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {isLoading ? (
    <div className="flex items-center justify-center space-x-2">
      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
        />
      </svg>
      <span>Sending...</span>
    </div>
  ) : (
    "Send Message"
  )}
</motion.button>

        {status && (
          <p className="text-sm mt-2 text-center text-white/80">{status}</p>
        )}
      </motion.form>
    </motion.div>
  );
}
