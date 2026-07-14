import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Space. Simplify Your Life.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover how our expert team can help you reclaim your home and office, creating a serene and efficient environment tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-center"
                >
                  Get a Free Consultation
                </Link>
                <a
                  href="tel:+14047379453"
                  className="border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-center"
                >
                  Call (404) 737-9453
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1622127800587-1ce716f1981e?w=800&h=600&fit=crop"
                alt="Organized modern workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we can transform your home or office with our expert organization services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Home Organization */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Organization</h3>
              <p className="text-gray-600">
                Revitalize your living spaces with custom solutions for closets, kitchens, and garages.
              </p>
            </div>

            {/* Office Organization */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Organization</h3>
              <p className="text-gray-600">
                Boost productivity with tailored systems for workspaces and office environments.
              </p>
            </div>

            {/* Move-In / Move-Out */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Move-In / Move-Out Organization</h3>
              <p className="text-gray-600">
                Simplify your transition with efficient packing, unpacking, and organizing services.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                Start with a consultation to discuss your needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Plan</h3>
              <p className="text-gray-600">
                Receive a tailored organization plan designed specifically for your space.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transformation</h3>
              <p className="text-gray-600">
                Watch as we transform your environment into a clutter-free oasis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1723406236695-424c0ccdefe8?w=800&h=1000&fit=crop"
                alt="Stress-free organized environment"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Save Time & Reduce Stress</h3>
                    <p className="text-gray-600">
                      Our organization solutions streamline your space, allowing you to focus on what truly matters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Maximize Your Space</h3>
                    <p className="text-gray-600">
                      We optimize every inch of your home or office, creating functional and efficient areas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Boost Productivity</h3>
                    <p className="text-gray-600">
                      Experience increased productivity and peace of mind with a well-organized environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Organized?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Take the first step towards a clutter-free life. Schedule your free consultation today and discover how we can transform your space into a haven of order and tranquility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Book Your Free Consultation
            </Link>
            <a
              href="tel:+14047379453"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              Call (404) 737-9453
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
