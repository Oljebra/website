export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Oljebra Group</h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded with a vision to bridge the gap between traditional business operations and modern technology, Oljebra Group has become a
              trusted partner for organizations seeking to optimize their processes and embrace digital transformation.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Our team of experienced consultants, developers, and strategists work collaboratively to understand your unique challenges and deliver
              tailored solutions that drive measurable results.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100M+</div>
                <div className="text-gray-300">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blue-600 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-blue-100 mb-6">
                To empower businesses with innovative technology solutions that streamline operations, reduce costs, and accelerate growth in an
                increasingly digital world.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Innovation First</h4>
                    <p className="text-blue-100">Cutting-edge solutions for modern challenges</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Client-Centric</h4>
                    <p className="text-blue-100">Your success is our primary focus</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Proven Results</h4>
                    <p className="text-blue-100">Track record of successful transformations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
