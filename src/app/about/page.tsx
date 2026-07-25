import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Home Organizers Atlanta - serving Atlanta since 2010. Our mission is to empower individuals and businesses through innovative organization solutions.',
};

export default function AboutPage() {
  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Home Organizers Atlanta was established with a mission to bring order and peace to homes and offices across Atlanta.',
    },
    {
      year: '2012',
      title: 'First Major Project',
      description: 'We successfully completed our first large-scale office organization project, setting a new standard for corporate organization solutions.',
    },
    {
      year: '2015',
      title: 'Expansion of Services',
      description: 'Introduced specialized services for busy professionals, including digital organization and time management systems.',
    },
    {
      year: '2020',
      title: 'Award-Winning Innovations',
      description: "Our innovative approach to home organization earned us the prestigious 'Best of Atlanta' award in the home services category.",
    },
  ];

  const awards = [
    {
      year: '2018',
      title: 'Top Organizer Award',
      description: 'Recognized by the National Association of Professional Organizers for excellence in home organization services.',
    },
    {
      year: '2020',
      title: 'Best of Atlanta',
      description: 'Awarded for our innovative and effective organization solutions that have transformed numerous homes and offices.',
    },
    {
      year: '2022',
      title: 'Customer Choice Award',
      description: 'Voted by our clients as the top organization company for outstanding customer service and results.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 font-semibold mb-4">Transform Your Space with Ease</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Home Organizers Atlanta: Your Path to a Clutter-Free Life
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover how our expert team can help you reclaim your home and office, creating a serene and efficient environment tailored to your needs.
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
                src="/images/desk-wall-unit.jpg"
                alt="Organized built-in desk and bookshelves by Home Organizers Atlanta"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Our Mission and Vision</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              At Home Organizers Atlanta, our mission is to empower individuals and businesses to achieve harmony and productivity through innovative organization solutions. We envision a world where clutter no longer hinders personal growth and professional success.
            </p>
            <p>
              Our core values—trust, professionalism, and efficiency—guide us in transforming chaotic spaces into orderly sanctuaries. By implementing sustainable systems, we aim to alleviate stress and enhance everyday living for our clients.
            </p>
            <p>
              Founded in Atlanta, Georgia, Home Organizers Atlanta has been at the forefront of the organization industry, helping clients streamline their environments for over a decade. Our dedicated team is passionate about creating customized solutions that not only tidy up spaces but also improve overall quality of life.
            </p>
            <p className="font-semibold text-gray-900">
              We believe that a well-organized space is the foundation of a balanced and fulfilling lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Our Journey Through the Years</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Since our inception, Home Organizers Atlanta has been dedicated to transforming spaces and lives.
          </p>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-teal-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Our Accolades</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-teal-50 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <p className="text-teal-600 font-semibold mb-2">{award.year}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Transform Your Space with Our Expertise</h2>
          <p className="text-xl text-teal-100 mb-8">
            Discover how our tailored organization solutions can bring harmony to your home or office. Schedule a consultation today and let us show you the path to a clutter-free life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
