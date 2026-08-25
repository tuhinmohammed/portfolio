"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [result, setResult] = useState({
    type: "",
    message: "",
  });

  async function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult({
        type: "error",
        message: "The contact form is not configured yet.",
      });

      return;
    }

    setIsSubmitting(true);
    setResult({
      type: "",
      message: "",
    });

    const formData = new FormData(form);
    const senderName = String(formData.get("name") || "");

    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      `New portfolio message from ${senderName}`,
    );
    formData.append("from_name", "Mohammed Tuhin Portfolio");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (data.success) {
        setResult({
          type: "success",
          message: "Your message has been sent successfully!",
        });

        form.reset();
      } else {
        setResult({
          type: "error",
          message:
            data.message ||
            "The message could not be sent. Please try again.",
        });
      }
    } catch {
      setResult({
        type: "error",
        message:
          "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="hero-grid scroll-mt-20 bg-[#080d12] px-6 py-24 sm:px-10 lg:px-[7.5%] lg:py-28 "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00d4aa]">
            {`// 05 Contact`}
          </p>

          <hr
            aria-hidden="true"
            className="mt-4 w-9 border-0 border-t-2 border-[#00d4aa]"
          />

          <h2 className="mt-6 font-serif text-4xl font-semibold text-[#e8edf2] md:text-5xl">
            {"Let's work together."}
          </h2>
        </div>

        {/* Contact content */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Contact information */}
          <div>
            <p className="max-w-xl text-base leading-8 text-[#8fa3b8] sm:text-lg">
              I’m always open to discussing new projects, creative ideas, and
              opportunities to collaborate. If you have something in mind, send
              me a message and let’s talk.
            </p>

            {/* Email */}
            <div className="mt-9 grid gap-3 sm:grid-cols-[80px_1fr] sm:items-center">
              <p className="font-mono text-sm lowercase text-[#3f5d73]">
                email
              </p>

              <a
                href="mailto:memohammedtuhin@gmail.com"
                className="inline-flex items-center gap-3 text-[#8fa3b8] transition-colors hover:text-[#00d4aa]"
              >
                <Mail
                  aria-hidden="true"
                  size={17}
                  className="text-[#00d4aa]"
                />

                <span className="break-all">
                  {`memohammedtuhin@gmail.com`}
                </span>
              </a>
            </div>

            {/* Social icons */}
            <ul className="mt-9 flex items-center gap-3">
              <li>
                <SocialIcon
                  url="https://github.com/tuhinmohammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Mohammed Tuhin on GitHub"
                  bgColor="#0f1419"
                  fgColor="#8fa3b8"
                  borderRadius="8px"
                  className="border border-[#1a2a35] transition hover:-translate-y-1 hover:border-[#00d4aa]"
                  style={{ width: 42, height: 42 }}
                />
              </li>

              <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/memohammedtuhin"
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Mohammed Tuhin on LinkedIn"
                  bgColor="#0f1419"
                  fgColor="#8fa3b8"
                  borderRadius="8px"
                  className="border border-[#1a2a35] transition hover:-translate-y-1 hover:border-[#00d4aa]"
                  style={{ width: 42, height: 42 }}
                />
              </li>

         
            </ul>
          </div>

          {/* Contact form */}
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Honeypot spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="contact-name" className="sr-only">
                Your name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
                className="w-full rounded-sm border border-[#1a2a35] bg-[#0f1419] px-5 py-4 text-[#e8edf2] outline-none transition-colors placeholder:text-[#3f5d73] focus:border-[#00d4aa]"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="sr-only">
                Your email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
                className="w-full rounded-sm border border-[#1a2a35] bg-[#0f1419] px-5 py-4 text-[#e8edf2] outline-none transition-colors placeholder:text-[#3f5d73] focus:border-[#00d4aa]"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                required
                rows={7}
                className="min-h-44 w-full resize-y rounded-sm border border-[#1a2a35] bg-[#0f1419] px-5 py-4 text-[#e8edf2] outline-none transition-colors placeholder:text-[#3f5d73] focus:border-[#00d4aa]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-sm bg-[#00d4aa] px-6 py-4 font-semibold text-[#080d12] transition-colors hover:bg-[#00b896] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer" 
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result.message && (
              <p
                role={result.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`font-mono text-sm ${
                  result.type === "success"
                    ? "text-[#00d4aa]"
                    : "text-red-400"
                }`}
              >
                {result.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;