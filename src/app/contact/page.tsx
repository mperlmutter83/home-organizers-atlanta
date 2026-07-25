import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Home Organizers Atlanta to schedule a consultation. Call (404) 737-9453 or fill out our form. Serving Atlanta and surrounding areas.',
};

export default function ContactPage() {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We provide comprehensive home and office organization services, including decluttering, space planning, and system implementation tailored to your needs.',
    },
    {
      question: 'How does the consultation process work?',
      answer: 'Our consultation involves an in-depth discussion to understand your goals, followed by an assessment of your space to create a customized plan.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We proudly serve Atlanta, Georgia, and surrounding areas, bringing our expertise to homes and offices throughout the region.',
    },
    {
      question: 'How long does the organization process take?',
      answer: 'The duration depends on the size and complexity of the project, but we aim to work efficiently while ensuring quality results.',
    },
    {
      question: 'Do you offer virtual organization services?',
      answer: 'Yes, we provide virtual consultations and guidance for clients who prefer remote assistance in organizing their spaces.',
    },
    {
      question: 'What should I expect during the first visit?',
      answer: 'During the initial visit, we assess your space, discuss your needs, and begin developing a personalized organization strategy.',
    },
    {
      question: 'Are your services confidential?',
      answer: 'Absolutely. We respect your privacy and ensure that all client information is kept confidential.',
    },
    {
      question: 'Can you help with moving or downsizing?',
      answer: 'Yes, we offer specialized services for moving and downsizing, including packing, unpacking, and organizing your new space.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and varies depending on the scope of work. We provide transparent quotes after the initial consultation.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal-600 font-semibold mb-4">Transform Your Space with Expert Organization</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Home Organizers Atlanta
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the power of a well-organized home or office. Our professional team in Atlanta is here to help you reclaim your space and peace of mind.
              </p>
              <a
                href="tel:+14047379453"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Call (404) 737-9453
              </a>
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

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <a href="tel:+14047379453" className="text-teal-600 hover:text-teal-700 text-lg">
                      (404) 737-9453
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@homeorganizersatlanta.com" className="text-teal-600 hover:text-teal-700">
                      info@homeorganizersatlanta.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      2137 Canaan Ct SE<br />
                      Atlanta, GA 30316
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us Online</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-100 transition-colors">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-100 transition-colors">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-teal-100 transition-colors">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Lead Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Consultation</h2>
                <p className="text-gray-600 mb-6">
                  Ready to transform your space? Fill out our simple form to schedule a consultation.
                </p>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Common Questions About Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Discover answers to frequently asked questions about our home and office organization services.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Schedule Your Consultation Today</h2>
          <p className="text-xl text-teal-100 mb-8">
            Ready to take control of your space and reduce stress? Book a consultation with our experts.
          </p>
          <a
            href="tel:+14047379453"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Call (404) 737-9453
          </a>
        </div>
      </section>
    </>
  );
}
