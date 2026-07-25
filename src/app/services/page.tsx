import { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional home and office organization services in Atlanta. Home decluttering, office optimization, custom closet design, and more.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Home Decluttering',
      description: 'Eliminate chaos and reclaim your living space with our comprehensive home decluttering services, tailored to your unique needs.',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
    },
    {
      title: 'Office Optimization',
      description: 'Boost productivity and efficiency with our office organization solutions, designed to streamline your workspace and workflow.',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Custom Closet Design',
      description: 'Maximize your storage potential with our custom closet solutions, crafted to fit your lifestyle and aesthetic preferences.',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: 'Personalized Solutions',
      description: 'We offer tailored organization strategies that cater to your specific needs, ensuring sustainable and effective results.',
    },
    {
      title: 'Experienced Professionals',
      description: 'Our team of experts brings years of experience and a passion for organization to every project, guaranteeing exceptional service.',
    },
    {
      title: 'Sustainable Practices',
      description: "We prioritize eco-friendly methods and materials, helping you create a clutter-free environment that's kind to the planet.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 font-semibold mb-4">Transform Your Space, Transform Your Life</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional Organization Services in Atlanta
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the power of a well-organized home or office with our expert services designed to bring clarity and calm to your everyday life.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Schedule Your Consultation
              </Link>
            </div>
            <div>
              <img
                src="/images/garage-main.jpg"
                alt="Professionally organized garage by Home Organizers Atlanta"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Our Organization Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <img
                  src={`/images/garage-card-${index + 1}.jpg`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Home Organizers Atlanta</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Home Organizers Atlanta is dedicated to bringing order and tranquility to homes and offices across Georgia. Founded with a mission to alleviate the stress of clutter, our team of skilled organizers works closely with clients to develop personalized solutions that are both practical and sustainable.
                </p>
                <p>
                  We believe in the power of organization to enhance everyday life, and our commitment to excellence ensures that our systems are not only effective but also enduring. Our team, a blend of creativity and efficiency, is passionate about helping you achieve a harmonious space that reflects your lifestyle and needs.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block mt-6 text-teal-600 font-semibold hover:text-teal-700"
              >
                Learn More About Us →
              </Link>
            </div>
            <div>
              <img
                src="/images/garage-main.jpg"
                alt="Organized garage cabinets and workspace"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Schedule Your Consultation Today</h2>
            <p className="text-xl text-gray-600">
              Discover how our organization services can transform your space and simplify your life.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Transform Your Space Today</h2>
          <p className="text-xl text-teal-100 mb-8">
            Ready to reclaim your space and bring order to your life? Contact us now to schedule a consultation and discover how our expert team can help you create lasting organization solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Schedule Your Consultation
            </Link>
            <a
              href="tel:+14047379453"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              Call (404) 737-9453
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
