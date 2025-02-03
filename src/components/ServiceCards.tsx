import { Users, Building2, Store, Video, Share2, Globe, Search, Mail, Camera, Palette, LineChart } from 'lucide-react';

const mainServices = [
  {
    title: "Personal Branding",
    description: "Build your personal brand identity with custom strategies, social media management, and content creation tailored to your unique voice.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Small / Big Company Branding",
    description: "Comprehensive branding solutions for businesses of all sizes. From startups to enterprises, we help establish and grow your market presence.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Restaurant / Flower Businesses",
    description: "Specialized branding for hospitality and retail. Showcase your products and services with stunning visuals and engaging content.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Content Creators",
    description: "Elevate your content game with professional editing, channel management, and growth strategies for all major platforms.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const detailedServices = [
  {
    title: "Social Media Management",
    description: "Strategic social media management to boost your online presence and engagement.",
    icon: Share2
  },
  {
    title: "Website Development",
    description: "Custom website development with modern design and optimal performance.",
    icon: Globe
  },
  {
    title: "SEO and Ads Management",
    description: "Boost your visibility with expert SEO optimization and strategic ad campaigns.",
    icon: Search
  },
  {
    title: "Email Marketing",
    description: "Targeted email campaigns to engage and grow your audience.",
    icon: Mail
  },
  {
    title: "Professional Photography",
    description: "High-quality photography services for products, events, and brand content.",
    icon: Camera
  },
  {
    title: "Brand Design",
    description: "Creative design solutions that capture your brand's essence.",
    icon: Palette
  },
  {
    title: "Market Analysis",
    description: "Data-driven insights to guide your business strategy.",
    icon: LineChart
  },
  {
    title: "Content Strategy",
    description: "Strategic content planning and creation for maximum impact.",
    icon: Video
  },
  {
    title: "Community Management",
    description: "Build and engage your online community effectively.",
    icon: Users
  }
];

export function ServiceCards() {
  return (
    <section id="what-we-do" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
          What We Do
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We specialize in transforming brands through innovative digital solutions, 
          helping businesses and individuals stand out in today's competitive landscape.
        </p>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 hover:bg-gray-700/50 
                transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl 
                hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative p-6">
                <div className="mb-4 inline-block p-3 rounded-lg bg-gray-900/50 group-hover:bg-blue-500/20 
                  transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-400 group-hover:text-teal-400 
                    transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-400 
                  transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 
                transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-gray-900/50 group-hover:bg-blue-500/20 
                transition-colors duration-300">
                <service.icon className="w-6 h-6 text-blue-400 group-hover:text-teal-400 
                  transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-teal-400 
                transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}