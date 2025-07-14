import { useState } from "react";
import {
  Search,
  MessageSquare,
  SquarePlay,
  Play,
  ChevronDown,
  Star,
  Quote,
} from "lucide-react";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { ArrowDown } from "lucide-react";
import Image from "../../assets/Hero.png";

const testimonials = [
  {
    id: 1,
    name: "Mr. Manish Chaudhary",
    course: "Advanced AI & Machine Learning with Python",
    image: `${Image}`,
    testimonial:
      "The AI course at Broadway Infosys transformed my career. The instructors' expertise and hands-on projects helped me master machine learning and LLMs, leading to a dream job in AI development.",
    rating: 5,
    date: "June 2023",
  },
  {
    id: 2,
    name: "Mr. Krishna Gaha",
    course: "Professional Java Developer Program",
    image: `${Image}`,
    testimonial:
      "Broadway Infosys provided an exceptional learning experience. The Java course was comprehensive, and the instructors' guidance made complex concepts easy to grasp. Highly recommend!",
    rating: 4,
    date: "May 2023",
  },
  {
    id: 3,
    name: "Ms. Pragya Sharad Khadka",
    course: "Full-Stack Web Development with Python & Django",
    image: `${Image}`,
    testimonial:
      "The Python and Django course was a game-changer. The instructors were industry experts who provided real-world insights, and the management team ensured a seamless learning journey.",
    rating: 5,
    date: "July 2023",
  },
  {
    id: 4,
    name: "Ms. Rabina Kumari Chaudhary",
    course: "UI/UX & Web Design Mastery",
    image: `${Image}`,
    testimonial:
      "The web design course ignited my passion for creating user-friendly interfaces. The instructor's enthusiasm and clear explanations made every session engaging and impactful.",
    rating: 5,
    date: "August 2023",
  },
  {
    id: 5,
    name: "Mr. Prakash Bahadur Kathayat",
    course: "Data Science & Analytics with Python",
    image: `${Image}`,
    testimonial:
      "The Data Science course was exceptionally well-structured. The hands-on projects and expert guidance helped me transition into a data analyst role with confidence.",
    rating: 4,
    date: "September 2023",
  },
  {
    id: 6,
    name: "Mr. Saphal Rai",
    course: "Cross-Platform Mobile Development with Flutter",
    image: `${Image}`,
    testimonial:
      "Learning Flutter at Broadway Infosys was a fantastic experience. The instructor's clear, conceptual teaching style empowered me to build professional mobile apps.",
    rating: 5,
    date: "October 2023",
  },
  {
    id: 7,
    name: "Mr. Rejas Pandey",
    course: "Professional Accounting & Financial Analysis",
    image: `${Image}`,
    testimonial:
      "The accounting course was outstanding. The instructor's ability to simplify complex financial concepts and the supportive environment at Broadway Infosys made learning a joy.",
    rating: 4,
    date: "November 2023",
  },
  {
    id: 8,
    name: "Mr. Abhishek Mishra",
    course: "Data Science & Machine Learning with Python",
    image: `${Image}`,
    testimonial:
      "Coming from a non-technical background, I was amazed at how the instructor made Python and Data Science accessible. The course was a turning point in my career.",
    rating: 5,
    date: "December 2023",
  },
  {
    id: 9,
    name: "Ms. Sanglamu Sherpa",
    course: "Advanced Web Design & User Experience",
    image: `${Image}`,
    testimonial:
      "The web design course cleared all my doubts and boosted my confidence. The instructor's practical approach and the institute's resources were top-notch.",
    rating: 4,
    date: "January 2024",
  },
  {
    id: 10,
    name: "Mr. Santosh Kunwar",
    course: "Professional Graphic Design with Adobe Suite",
    image: `${Image}`,
    testimonial:
      "मैले ग्राफिक डिजाइन कोर्समा धेरै कुरा सिकें। शिक्षकको व्यावहारिक र स्पष्ट शिक्षणले मलाई फोटोशप र इलस्ट्रेटरमा निपुण बनायो। The course was a creative breakthrough for me.",
    rating: 5,
    date: "February 2024",
  },
  {
    id: 11,
    name: "Mr. Jaganath Raila",
    course: "Quality Assurance & Software Testing",
    image: `${Image}`,
    testimonial:
      "The QA course was engaging and practical. The instructor fostered a supportive environment, making it easy to learn and excel in software testing.",
    rating: 4,
    date: "March 2024",
  },
  {
    id: 12,
    name: "Mr. Rimesh Chaudhary",
    course: "Advanced Data Science with Python",
    image: `${Image}`,
    testimonial:
      "Broadway Infosys opened the door to data science for me. The instructor's expertise and real-world projects made this one of the best learning experiences I've had.",
    rating: 4,
    date: "April 2024",
  },
  {
    id: 13,
    name: "Mr. Prajjwol Mani Bajracharya",
    course: "Full-Stack React & Node.js Development",
    image: `${Image}`,
    testimonial:
      "The React course was meticulously designed and delivered with professional excellence. It equipped me with the skills to build modern web applications.",
    rating: 5,
    date: "May 2024",
  },
  {
    id: 14,
    name: "Mr. Bidur Timsina",
    course: "Data Science & AI with Python",
    image: `${Image}`,
    testimonial:
      "The Data Science course was a perfect blend of theory and practice. The instructor's clear explanations and interactive sessions made complex topics approachable.",
    rating: 4,
    date: "June 2024",
  },
  {
    id: 15,
    name: "Ms. Samikshya Rajthala",
    course: "Advanced Graphic Design & Visual Communication",
    image: `${Image}`,
    testimonial:
      "The graphic design course was intensive and inspiring. The instructor's guidance and real-world projects helped me create a professional portfolio.",
    rating: 5,
    date: "July 2024",
  },
  {
    id: 16,
    name: "Mr. Sahadev Pandey",
    course: "Enterprise Java Development",
    image: `${Image}`,
    testimonial:
      "Broadway Infosys provided an exceptional Java learning experience. The instructors were always ready to mentor, making it a rewarding journey.",
    rating: 4,
    date: "August 2024",
  },
  {
    id: 17,
    name: "Ms. Raksha Khadka",
    course: "Data Science & Machine Learning Mastery",
    image: `${Image}`,
    testimonial:
      "Joining the Data Science course was a life-changing decision. The mentor's expertise and the institute's support made my learning journey truly remarkable.",
    rating: 5,
    date: "September 2024",
  },
  {
    id: 18,
    name: "Mr. Hemanta Rajbanshi",
    course: "Data Science & Predictive Analytics",
    image: `${Image}`,
    testimonial:
      "The instructors' industry experience and practical teaching methods made the Data Science course incredibly valuable. I feel confident in my new skills.",
    rating: 4,
    date: "October 2024",
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Mr. Ashish Poudel",
    course: "Professional Web Design & UI/UX",
    thumbnail: `${Image}`,
    duration: "2:30",
    views: "1.2K",
    rating: 5,
    date: "June 2023",
  },
  {
    id: 2,
    name: "Mr. Ruchi Raj Karki",
    course: "Full-Stack MERN Development",
    thumbnail: `${Image}`,
    duration: "3:15",
    views: "2.5K",
    rating: 4,
    date: "July 2023",
  },
  {
    id: 3,
    name: "Mr. Sandesh Kharal",
    course: "Advanced MERN Stack Development",
    thumbnail: `${Image}`,
    duration: "2:45",
    views: "1.8K",
    rating: 4,
    date: "August 2023",
  },
  {
    id: 4,
    name: "Mr. Subodh Parajuli",
    course: "Digital Marketing & SEO Mastery",
    thumbnail: `${Image}`,
    duration: "4:20",
    views: "3.1K",
    rating: 5,
    date: "September 2023",
  },
  {
    id: 5,
    name: "Ms. Smriti Joshi",
    course: "Data Science & Machine Learning with Python",
    thumbnail: `${Image}`,
    duration: "3:30",
    views: "2.0K",
    rating: 4,
    date: "October 2023",
  },
  {
    id: 6,
    name: "Ms. Chetana Nath",
    course: "Professional Graphic Design & Visual Arts",
    thumbnail: `${Image}`,
    duration: "2:55",
    views: "1.5K",
    rating: 5,
    date: "November 2023",
  },
];

export default function StudentTestimonials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("text");
  const [visibleTestimonials, setVisibleTestimonials] = useState(6);
  const [visibleVideos, setVisibleVideos] = useState(6);

  const loadMore = () => {
    if (activeTab === "text") {
      setVisibleTestimonials((prev) => prev + 6);
    } else {
      setVisibleVideos((prev) => prev + 6);
    }
  };

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = videoTestimonials.filter(
    (video) =>
      video.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-500 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Trusted by{" "}
                <span className="text-blue-600">thousands of students</span>
              </h1>
              <h2 className="text-4xl font-bold mb-6">
                for their <span className="text-orange-600">learning</span>
              </h2>
              <p className="text-gray-800 mb-8">
                Real stories, real results. Our students share their
                transformative learning experiences.
              </p>
              <button className="bg-blue-600 gap-2 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center transition-colors">
                Explore Testimonials <ArrowDown className="w-5 h-5" />
              </button>
            </div>

            {/* Right side - Testimonial cards in 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {testimonials.slice(0, 4).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4">
                    <Quote className="text-orange-500 w-6 h-6 mt-1 mr-2" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.testimonial.length > 100
                        ? `${testimonial.testimonial.substring(0, 100)}...`
                        : testimonial.testimonial}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {testimonial.course}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Search Student/Course to see what our students say about it
            </h2>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-6">
              <input
                type="text"
                placeholder="Search by student or course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Text/Video Toggle */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab("text")}
                className={`flex items-center justify-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "text"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <MessageSquare className="w-5 h-5" />
                Text
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`flex items-center justify-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors
                 ${
                   activeTab === "video"
                     ? "bg-gray-800 text-white"
                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                 }`}
              >
                <SquarePlay className="w-5 h-5" />
                Video
              </button>
            </div>
          </div>

          {/* Testimonials Text Card Grid */}
          <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {activeTab === "text" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTestimonials
                    .slice(0, visibleTestimonials)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800 text-sm">
                              {testimonial.name} (ID: {testimonial.id})
                            </h3>
                            <p className="text-blue-600 text-xs">
                              {testimonial.course}
                            </p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < testimonial.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              {testimonial.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start mb-4">
                          <Quote className="text-orange-500 w-6 h-6 mt-1 mr-2" />
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {testimonial.testimonial}
                          </p>
                        </div>
                        <a
                          href="#"
                          className="text-blue-600 text-sm hover:underline"
                        >
                          Read more
                        </a>
                      </div>
                    ))}
                </div>
              )}

              {/* Video Testimonials Grid */}
              {activeTab === "video" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVideos.slice(0, visibleVideos).map((video) => (
                    <div
                      key={video.id}
                      className="relative group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.name}
                          className="w-full h-48 object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50"></div>

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                            <Play className="h-8 w-8 text-white fill-current" />
                          </div>
                        </div>

                        {/* Duration and Views */}
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                          {video.duration} • {video.views} views
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={video.thumbnail}
                            alt={video.name}
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800 text-sm">
                              {video.name} (ID: {video.id})
                            </h3>
                            <p className="text-gray-600 text-xs">
                              {video.course}
                            </p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${
                                    i < video.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              {video.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-12 flex justify-center">
                <button
                  onClick={loadMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md flex items-center transition-colors duration-300 font-medium"
                >
                  LOAD MORE
                  <ChevronDown className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
