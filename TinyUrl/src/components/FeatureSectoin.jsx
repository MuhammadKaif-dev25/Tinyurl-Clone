const leftFeatures = [
    {
      title: "Unlimited Tracked Clicks",
      text: "We don’t believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!",
    },
    {
      title: "Detailed Link Analytics",
      text: "Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters.",
    },
    {
      title: "Branded Domains",
      text: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable.",
    },
  ];
  
  const rightFeatures = [
    {
      title: "Fully Custom Links",
      text: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive.",
    },
    {
      title: "Bulk Short URLs",
      text: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.",
    },
    {
      title: "Link Management",
      text: "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features.",
    },
  ];
  
  function FeatureCard({ title, text }) {
    return (
      <div className=" feature-color p-4 rounded-sm  transition-colors">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed">{text}</p>
      </div>
    );
  }
  
  export default function FeaturesSection() {
    return (
      <section className="bg-[#FAFBFC] text-[#1a1a1a] px-6 py-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">
            Your One-Stop Solution for Branding and Managing Links
          </h2>
          <p className="mt-4 text-sm">
            We offer a comprehensive suite of premium features to allow users to
            brand and manage links conveniently and confidently.
          </p>
          <button className="mt-6 bg-[#0F6A8B] text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-[#0c5671] transition-colors">
            View Plans
          </button>
        </div>
  
        {/* Features + image */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          <div className="space-y-10">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
  
          <img
            src="https://tinyurl.com/images/overhauling/card-feature-0.webp"
            alt="TinyURL dashboard with rocket illustration"
            className="w-full max-w-md mx-auto"
          />
  
          <div className="space-y-10">
            {rightFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>
    );
  }