import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { GraduationCap, BookOpenText, School, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.jpg";
import GodTreeGroup from "../../assets/GoldTree-Team.jpg";
import GoldTreeCareer from "../../assets/GoldTree-NextCareer.jpg";

export default function CareerPage() {
  const navigate = useNavigate();

  const stats = [
    {
      number: "162+",
      label: "Expert Instructors",
      icon: BookOpenText,
    },
    {
      number: "516+",
      label: "Courses Available",
      icon: School,
    },
    {
      number: "1000+",
      label: "Students Trained",
      icon: GraduationCap,
    },
    {
      number: "1337+",
      label: "Success Stories",
      icon: Star,
    },
  ];

  const successStories = [
    {
      id: 1,
      name: "Mr. Santosh Kunwar",
      position: "Graphics Designer",
      company: "Creative Solutions Pvt. Ltd.",
      course: "Graphics Design Training in Nepal",
      image: img1,
      description:
        "Completed graphics design training and now thriving as a professional designer.",
    },
    {
      id: 2,
      name: "Ms. Ankita Thapa Magar",
      position: "Web Developer",
      company: "Tech Innovations Nepal",
      course: "Web Development With Python and Django",
      image: img2,
      description:
        "Transitioned to web development with skills from our comprehensive course.",
    },
    {
      id: 3,
      name: "Ms. Raman Chaudhary",
      position: "Digital Marketing Specialist",
      company: "Digital Marketing Pro",
      course: "Web Design Training in Nepal",
      image: img3,
      description:
        "Leveraged web design skills to excel in the digital marketing field.",
    },
    {
      id: 4,
      name: "Mr. Rohit Rajthala",
      position: "UI/UX Designer",
      company: "Design Studio Nepal",
      course: "Graphics Design Training in Nepal",
      image: img4,
      description:
        "Advanced from graphics design to a specialized UI/UX design role.",
    },
  ];

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="max-w-lg">
              <h1 className="text-lg md:text-xl font-semibold mb-2 uppercase tracking-wide">
                Career Hub
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Take Your Next Career Step
              </h2>
              <p className="text-base md:text-lg text-blue-100 mb-6">
                At Broadway Infosys, we offer opportunities for students and seasoned professionals to advance in technology and education.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center w-32 md:w-40 h-16 md:h-20">
                {/* Image stack with responsive sizing */}
                <div className="absolute right-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src={img1} alt="User 1" className="w-full h-full object-cover" />
                </div>
                <div className="absolute right-8 md:right-10 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src={img2} alt="User 2" className="w-full h-full object-cover" />
                </div>
                <div className="absolute right-16 md:right-20 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src={img3} alt="User 3" className="w-full h-full object-cover" />
                </div>
                <div className="absolute right-24 md:right-30 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src={img4} alt="User 4" className="w-full h-full object-cover" />
                </div>
              </div>
              <p className="text-sm md:text-base text-blue-100">
                Over <span className="font-semibold">15,000+</span> individuals launched their careers with us.
              </p>
            </div>
          </div>

          {/* Join the GoldTree Team and Start Your Next Career Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
            {/* Join the GoldTree Team Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={GodTreeGroup}
                  alt="Broadway Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-blue-200/30"></div>
              </div>
              <div className="p-6 text-gray-800">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Join the Broadway Team
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  Be part of our dynamic team and shape the future of IT education in Nepal. We seek passionate educators and professionals.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm md:text-base font-medium transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Start Your Next Career Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={GoldTreeCareer}
                  alt="Career Success"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-green-200/30"></div>
              </div>
              <div className="p-6 text-gray-800">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Start Your Next Career
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  Launch your tech career with our comprehensive training programs, designed for beginners to advanced professionals.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm md:text-base font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex gap-3 bg-white items-center border border-gray-200 rounded-lg p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl md:text-3xl text-blue-600">{<stat.icon />}</div>
                <div className="flex flex-col items-start">
                  <span className="text-xl md:text-2xl font-bold text-gray-800">
                    {stat.number}
                  </span>
                  <span className="text-gray-600 text-sm md:text-base font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Success Stories
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Our students have transitioned to rewarding careers and advanced professionally. Discover their inspiring stories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg p-4 md:p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-100"
                />
                <h3 className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                  {story.name}
                </h3>
                <p className="text-blue-600 font-medium text-xs md:text-sm mb-1">
                  {story.position}
                </p>
                <p className="text-gray-500 text-xs md:text-sm mb-3">{story.company}</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-orange-600 text-xs md:text-sm font-medium mb-2">
                    {story.course}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/success-stories"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base hover:underline"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Hiring Partners */}
      <div className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Our Graduates Work at
              <span className="text-orange-600 ml-2">350+</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Leading Companies in Nepal
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "Beta", color: "text-red-600", textSize: "text-lg md:text-xl" },
              { name: "Splendour", color: "text-purple-600", textSize: "text-sm md:text-base" },
              { name: "TechCorp", color: "text-blue-700", textSize: "text-sm md:text-base" },
              { name: "InnovateLab", color: "text-gray-700", textSize: "text-sm md:text-base" },
              { name: "DigitalPro", color: "text-orange-600", textSize: "text-sm md:text-base" },
              { name: "EcoSoft", color: "text-green-600", textSize: "text-sm md:text-base" },
              { name: "NextGen", color: "text-purple-700", textSize: "text-sm md:text-base" },
              { name: "WebMaster", color: "text-teal-600", textSize: "text-sm md:text-base" },
              { name: "AppCraft", color: "text-indigo-600", textSize: "text-sm md:text-base" },
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center w-24 md:w-32"
              >
                {company.name === "Colorful" ? (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full"></div>
                  </div>
                ) : (
                  <span className={`font-bold ${company.color} ${company.textSize}`}>
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Ready to Learn New Skills or Advance Your Career?
          </h2>
          <button
            onClick={() => navigate("/upcoming_classes")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded font-semibold text-sm md:text-base transition-colors"
          >
            Explore Our Courses
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}