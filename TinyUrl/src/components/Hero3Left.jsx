const stats = [
    { value: "Billions", label: "of redirects per month" },
    { value: "24 years", label: "of shortening URLs" },
    { value: "32,853,182,253", label: "TinyURLs created" },
  ];
  
  export default function StatsSection() {
    return (
      <section className="w-1/2 md:w-1/2 bg-[#00234B] text-white p-10">
        <h2 className="text-4xl font-bold leading-tight">
          Transforming the Digital Landscape Since ‘02
        </h2>
  
        <p className="mt-6 text-lg leading-relaxed">
          TinyURL has created billions of short links for marketers, influencers,
          small business owners, and large businesses.
        </p>
  
        <div className="mt-10 space-y-8">
          {stats.map((item) => (
            <div key={item.label} className="grid grid-cols-2 items-center gap-4">
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }