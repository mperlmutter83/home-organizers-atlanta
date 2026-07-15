import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, insights, and expert advice on home and office organization from Home Organizers Atlanta.',
};

export default function BlogPage() {
  const categories = [
    'Home Organization',
    'Office Solutions',
    'Decluttering Techniques',
    'Storage Ideas',
    'Time Management',
    'Minimalist Living',
    'Productivity Hacks',
    'Sustainable Practices',
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
                Discover the art of organization with our expert tips and services designed to simplify your home and office. Let us help you create a serene and efficient environment.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Get Started Today
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1765277789187-fac64540b2dc?w=800&h=1000&fit=crop"
                alt="Neat home interior"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Latest Tips and Insights on Organization</h2>

          {/* Empty State */}
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We&apos;re working on bringing you valuable organization tips and insights. Check back soon for helpful articles!
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Explore Our Blog Categories</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of organization enthusiasts! Subscribe now to receive the latest tips, exclusive offers, and updates from Home Organizers Atlanta directly to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Schedule Your Free Consultation Today</h2>
          <p className="text-xl text-teal-100 mb-8">
            Ready to take control of your space and reduce stress? Book a complimentary consultation with our experts at Home Organizers Atlanta and discover how we can create lasting organization solutions for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
