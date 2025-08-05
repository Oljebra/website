export default function Services() {
  const services = [
    {
      title: "Process Optimization",
      description: "Streamline your business operations with intelligent automation and workflow optimization.",
      icon: "⚡",
      features: ["Workflow Analysis", "Automation Implementation", "Performance Monitoring", "Continuous Improvement"],
    },
    {
      title: "Digital Transformation",
      description: "Modernize your technology stack and embrace digital-first approaches to business.",
      icon: "🚀",
      features: ["Legacy System Migration", "Cloud Architecture", "API Integration", "Mobile Solutions"],
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and reporting.",
      icon: "📊",
      features: ["Business Intelligence", "Predictive Analytics", "Real-time Dashboards", "Data Visualization"],
    },
    {
      title: "Cloud Solutions",
      description: "Leverage cloud computing for scalability, security, and cost-effective operations.",
      icon: "☁️",
      features: ["Cloud Migration", "Infrastructure as Code", "Security Implementation", "Cost Optimization"],
    },
    {
      title: "Custom Software",
      description: "Bespoke software solutions tailored to your specific business requirements.",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
    },
    {
      title: "Consulting Services",
      description: "Strategic guidance and expertise to navigate your digital transformation journey.",
      icon: "🎯",
      features: ["Technology Strategy", "Project Management", "Change Management", "Training & Support"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
