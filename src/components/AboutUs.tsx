import { Instagram, Twitter, Mail, Linkedin } from 'lucide-react';

export function AboutUs() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "X", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contact@brandcraftersai.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" }
  ];

  return (
    <section id="about" className="py-16 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          About Us
        </h2>
        
        {/* Company Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 leading-relaxed text-lg">
            BrandCraftersAi empower businesses, professionals, and content creators to excel in the digital world. Using creativity, technology, and strategy, we deliver customized solutions for branding and online growth. Our services are available across India and in Arab countries like Kuwait, Dubai and beyond. Let us help you build a powerful and lasting digital presence.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-4 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-8 h-8 text-gray-400 group-hover:text-teal-400 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}