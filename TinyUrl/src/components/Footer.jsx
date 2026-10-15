const columns = [
    {
      title: "Features",
      links: [
        "Link Editor",
        "Link Management",
        "Branded Links",
        "Short URL Tracking",
        "QR Code Generator",
        "Short URL API",
      ],
    },
    {
      title: "Resources",
      links: ["Blog", "For Developers", "Our Proven Process", "About Us"],
    },
    {
      title: "Contact Us",
      links: ["Help Desk", "Contact Sales", "Contact Support", "Report Abuse"],
    },
    {
      title: "Legal",
      links: [
        "Terms of Service",
        "Privacy Policy",
        "Cookie Policy",
        "Accessibility Statement",
        "Privacy Manager",
      ],
    },
  ];
  
  const socials = [
    {
      name: "Facebook",
      href: "#",
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" />
        </>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <>
          <path d="M4 4l11.733 16h4.267l-11.733-16z" />
          <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
        </>
      ),
    },
  ];
  
  export default function Footer() {
    return (
      <footer className="bg-[linear-gradient(to_right,#0F7A9A,#00234B)] text-white px-6 py-16 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-2xl font-bold">{col.title}</h3>
              <ul className="mt-10 space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-lg hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
  
          {/* Brand block */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-end md:items-end md:text-right">
            <div className="flex gap-6 mb-16">
              {socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} className="hover:opacity-70">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
  
            <p className="text-4xl  tracking-wide font-['Bungee']">TINYURL</p>
  
            <p className="mt-6 text-lg">
              © {new Date().getFullYear()} YourBrand LLC
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }