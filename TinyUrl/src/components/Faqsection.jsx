const faqs = [
    {
      question: "What Is a URL Shortener?",
      answer:
        "A URL shortener turns a long web address into a short link that is easier to share, type, and remember. The short link sends visitors to the original page.",
    },
    {
      question: "How Does a URL Shortener Work?",
      answer:
        "When you paste a long URL, the service creates a short code and stores it with your original link. When someone opens the short link, they are redirected to the original page.",
    },
    {
      question: "What Are the Benefits of Using a Short URL?",
      answer:
        "Short links are cleaner, easier to share on social media and messages, and can be tracked so you can see how many people click them.",
    },
    {
      question: "What Is a Custom URL Shortener?",
      answer:
        "A custom URL shortener lets you use your own domain and your own link names, so every short link carries your brand.",
    },
    {
      question: "How Do I Shorten a URL for Free?",
      answer:
        "Paste your long link into the box, click the shorten button, and copy your new short link. No account is needed for basic use.",
    },
    {
      question: "How Do I Know Your Service Is Reliable and Scalable?",
      answer:
        "The service has been running for many years and handles billions of redirects every month, so it is built to stay fast as your traffic grows.",
    },
    {
      question: "Can I Use a Domain I Already Own?",
      answer:
        "Yes. You can connect your own domain and create branded short links that use it.",
    },
  ];
  
  function Chevron() {
    return (
      <svg
        className="w-5 h-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    );
  }
  
  export default function Faqsection() {
    return (
      <section className="bg-[#F9FAFC] text-[#1a1a1a] px-6 py-16 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] items-center gap-10">
          {/* Left heading */}
          <h2 className="text-4xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>
  
          {/* Right list */}
          <div>
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-gray-200">
                <summary className="flex items-center justify-between gap-4 px-8 py-6 text-lg font-bold cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Chevron />
                </summary>
                <p className="px-8 pb-6 text-base leading-relaxed text-gray-700">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }