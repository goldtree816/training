import { ArrowRight, Calendar, Phone, Percent, Book } from "lucide-react";

import FrontImage from "../../assets/Front-Image.jpg";

export default function Offer() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-300 to-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="mt-10">
              <h2 className="text-gray-700 font-medium text-xl mb-4">
                18% OFF FOR +2 APPEARED STUDENTS
              </h2>
              <h1 className="text-gray-800 font-bold text-6xl mb-4">
                Get 18% OFF
              </h1>
              <p className="text-gray-800 font-medium text-2xl mb-6">
                FOR ALL COURSES
              </p>

              <div className="flex items-center text-gray-700 mb-8">
                <Calendar className="w-5 h-5 mr-2" />
                <span>May 15, 2025-June 15, 2025</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="bg-orange-600 hover:bg:-orange-700 text-white px-6 py-4 rounded inline-block text-center transition-colors"
                >
                  <div className="text-xs mb-1">TALK TO OUR SUPPORT TEAM</div>
                  <div className="font-medium">SEND AN INQUIRY</div>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-2 text-gray-800 hover:text-gray-900 font-medium transition-colors"
                >
                  <span>Pay and Enroll Now!</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="hidden lg:block -mt-20">
              <img
                src={FrontImage}
                width={400}
                height={300}
                alt="Student reading"
                className="mx-auto -mb-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-gray-800 text-2xl font-semibold mb-6">
                Launch Your Tech Career Now: 18% Exclusive Discount for +2
                Graduates (2082 Batch)
              </h2>

              <p className="text-gray-700 mb-4">
                Congratulations on completing your +2 journey! At GoldTree
                Group, we're empowering Nepal's next generation of tech leaders
                with our{" "}
                <span className="font-semibold">
                  industry-aligned IT training programs
                </span>
                . As you take this pivotal step toward your future, we're
                offering an{" "}
                <span className="font-semibold">exclusive 18% discount</span> to
                help you gain cutting-edge skills that employers actually value.
              </p>

              <p className="text-gray-700 mb-4">
                Our{" "}
                <span className="font-semibold">
                  project-based learning approach
                </span>{" "}
                gives you real-world experience in:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Full-stack web development</li>
                  <li>Mobile app creation</li>
                  <li>Cloud computing fundamentals</li>
                  <li>Data science essentials</li>
                </ul>
              </p>

              <p className="text-gray-700 mb-4">
                Beyond technical skills, you'll receive:
                <span className="block mt-2">
                  <span className="font-semibold">✓ Career mentorship</span>{" "}
                  from industry experts
                  <br />
                  <span className="font-semibold">
                    ✓ Portfolio development
                  </span>{" "}
                  to showcase your work
                  <br />
                  <span className="font-semibold">
                    ✓ Job placement support
                  </span>{" "}
                  with our 200+ partner companies
                </span>
              </p>

              <p className="text-gray-700 mb-6">
                This limited-time offer expires soon.{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Schedule a free counseling session
                </a>{" "}
                to find your perfect career path in tech.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      LIMITED SEATS AVAILABLE
                    </h3>
                    <p className="text-gray-800 font-semibold text-lg">
                      01-4111849 / 9841002000
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Call now for priority enrollment
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <div className="h-6 w-6 text-white flex items-center justify-center font-bold">
                      <Percent />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      EXCLUSIVE BENEFITS
                    </h3>
                    <p className="text-gray-800 font-semibold text-lg">
                      18% Discount + Free Career Kit
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <div className="h-6 w-6 text-white flex items-center justify-center font-bold">
                      <Book />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">
                      TOP PROGRAMS
                    </h3>
                    <p className="text-gray-800 font-semibold text-lg">
                      Web Development • App Development • Data Science •
                      Cybersecurity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
