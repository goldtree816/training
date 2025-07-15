import { useState } from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import {
  Calendar,
  Users,
  Share2,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useParams } from "react-router-dom";

const upcomingClassesData = [
  {
    id: 1,
    title: "Full Accounting Course",
    duration: "6 Month",
    date: "15 Jun 2025",
    time: "08:00 PM - 09:30 PM",
    moreClasses: 5,
    link: "/upcoming_classes/course_details/1",
    schedules: [
      { date: 15, month: "Jun", time: "08:00 PM - 09:30 PM" },
      { date: 16, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 17, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 18, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 19, month: "Jun", time: "10:00 AM - 11:30 AM" },
    ],
  },
  {
    id: 2,
    title: "AWS Full Course",
    duration: "1 Month",
    date: "16 Jun 2025",
    time: "07:00 AM - 08:30 AM",
    moreClasses: 3,
    link: "/upcoming_classes/2",
    schedules: [
      { date: 16, month: "Jun", time: "07:00 AM - 08:30 AM" },
      { date: 18, month: "Jun", time: "03:00 PM - 04:30 PM" },
      { date: 20, month: "Jun", time: "11:00 AM - 12:30 PM" },
    ],
  },
  {
    id: 3,
    title: "Advanced Cybersecurity Course",
    duration: "2.5 Months",
    date: "16 Jun 2025",
    time: "08:00 AM - 09:30 AM",
    moreClasses: 6,
    link: "/upcoming_classes/3",
    schedules: [
      { date: 16, month: "Jun", time: "08:00 AM - 09:30 AM" },
      { date: 17, month: "Jun", time: "10:00 AM - 11:30 AM" },
      { date: 19, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 21, month: "Jun", time: "04:00 PM - 05:30 PM" },
      { date: 23, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 25, month: "Jun", time: "06:00 PM - 07:30 PM" },
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Full Course",
    duration: "3 Months",
    date: "16 Jun 2025",
    time: "09:30 AM - 11:00 AM",
    moreClasses: 4,
    link: "/upcoming_classes/4",
    schedules: [
      { date: 16, month: "Jun", time: "09:30 AM - 11:00 AM" },
      { date: 18, month: "Jun", time: "01:00 PM - 02:30 PM" },
      { date: 20, month: "Jun", time: "05:00 PM - 06:30 PM" },
      { date: 22, month: "Jun", time: "08:00 AM - 09:30 AM" },
    ],
  },
  {
    id: 5,
    title: "Excel Full Course",
    duration: "1 Month",
    date: "17 Jun 2025",
    time: "10:00 AM - 11:30 AM",
    moreClasses: 5,
    link: "/upcoming_classes/5",
    schedules: [
      { date: 16, month: "Jun", time: "11:00 AM - 12:30 PM" },
      { date: 17, month: "Jun", time: "05:00 PM - 06:30 PM" },
      { date: 23, month: "Jun", time: "04:30 PM - 06:00 PM" },
      { date: 29, month: "Jun", time: "06:30 AM - 08:00 AM" },
      { date: 30, month: "Jun", time: "02:00 PM - 03:30 PM" },
    ],
  },
  {
    id: 6,
    title: "Java Full Course",
    duration: "2 Months",
    date: "18 Jun 2025",
    time: "02:00 PM - 03:30 PM",
    moreClasses: 7,
    link: "/upcoming_classes/6",
    schedules: [
      { date: 18, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 19, month: "Jun", time: "09:00 AM - 10:30 AM" },
      { date: 21, month: "Jun", time: "11:00 AM - 12:30 PM" },
      { date: 23, month: "Jun", time: "03:00 PM - 04:30 PM" },
      { date: 25, month: "Jun", time: "07:00 PM - 08:30 PM" },
      { date: 27, month: "Jun", time: "10:00 AM - 11:30 AM" },
      { date: 29, month: "Jun", time: "04:00 PM - 05:30 PM" },
    ],
  },
  {
    id: 7,
    title: "MERN Stack Web Development",
    duration: "8 Months",
    date: "19 Jun 2025",
    time: "06:00 PM - 07:30 PM",
    moreClasses: 5,
    link: "/upcoming_classes/7",
    schedules: [
      { date: 19, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 21, month: "Jun", time: "08:00 AM - 09:30 AM" },
      { date: 23, month: "Jun", time: "01:00 PM - 02:30 PM" },
      { date: 25, month: "Jun", time: "05:00 PM - 06:30 PM" },
      { date: 27, month: "Jun", time: "09:00 AM - 10:30 AM" },
    ],
  },
  {
    id: 8,
    title: "RedHat Certified Engineer",
    duration: "2.5 Months",
    date: "20 Jun 2025",
    time: "04:00 PM - 05:30 PM",
    moreClasses: 8,
    link: "/upcoming_classes/8",
    schedules: [
      { date: 20, month: "Jun", time: "04:00 PM - 05:30 PM" },
      { date: 21, month: "Jun", time: "10:00 AM - 11:30 AM" },
      { date: 23, month: "Jun", time: "02:00 PM - 03:30 PM" },
      { date: 25, month: "Jun", time: "08:00 AM - 09:30 AM" },
      { date: 27, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 29, month: "Jun", time: "11:00 AM - 12:30 PM" },
      { date: 30, month: "Jun", time: "03:00 PM - 04:30 PM" },
      { date: 30, month: "Jun", time: "07:00 PM - 08:30 PM" },
    ],
  },
  {
    id: 9,
    title: "Social Media Marketing",
    duration: "8 Months",
    date: "19 Jun 2025",
    time: "06:00 PM - 07:30 PM",
    moreClasses: 5,
    link: "/upcoming_classes/9",
    schedules: [
      { date: 19, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 21, month: "Jun", time: "08:00 AM - 09:30 AM" },
      { date: 23, month: "Jun", time: "01:00 PM - 02:30 PM" },
      { date: 25, month: "Jun", time: "05:00 PM - 06:30 PM" },
      { date: 27, month: "Jun", time: "09:00 AM - 10:30 AM" },
    ],
  },
  {
    id: 10,
    title: "SPSS Full Course",
    duration: "8 Months",
    date: "19 Jun 2025",
    time: "06:00 PM - 07:30 PM",
    moreClasses: 5,
    link: "/upcoming_classes/10",
    schedules: [
      { date: 19, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 21, month: "Jun", time: "08:00 AM - 09:30 AM" },
      { date: 23, month: "Jun", time: "01:00 PM - 02:30 PM" },
      { date: 25, month: "Jun", time: "05:00 PM - 06:30 PM" },
      { date: 27, month: "Jun", time: "09:00 AM - 10:30 AM" },
    ],
  },
  {
    id: 11,
    title: "Tally",
    duration: "8 Months",
    date: "19 Jun 2025",
    time: "06:00 PM - 07:30 PM",
    moreClasses: 5,
    link: "/upcoming_classes/11",
    schedules: [
      { date: 19, month: "Jun", time: "06:00 PM - 07:30 PM" },
      { date: 21, month: "Jun", time: "08:00 AM - 09:30 AM" },
      { date: 23, month: "Jun", time: "01:00 PM - 02:30 PM" },
      { date: 25, month: "Jun", time: "05:00 PM - 06:30 PM" },
      { date: 27, month: "Jun", time: "09:00 AM - 10:30 AM" },
    ],
  },
];

const courseDetailsData = {
  1: {
    title: "Full Accounting Course",
    overview:
      "Comprehensive training in accounting principles and software, designed for accountants and financial professionals.",
    highlights: [
      "Master financial accounting concepts",
      "Learn to use accounting software like Tally",
      "Understand tax preparation and auditing",
      "Financial statement analysis",
      "Budgeting and forecasting",
    ],
    benefits: [
      "High demand for skilled accountants",
      "Improved financial decision-making",
      "Career advancement in finance sectors",
      "Practical software skills",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Introduction to Accounting",
      "Financial Statements",
      "Taxation Basics",
      "Accounting Software",
      "Auditing Techniques",
    ],
    role: "Accountant",
    trainingMode: "Physical & Live Online Classes",
  },
  2: {
    title: "AWS Full Course",
    overview:
      "Learn cloud computing with AWS, covering services, architecture, and deployment for IT professionals.",
    highlights: [
      "Understand AWS core services",
      "Master cloud architecture design",
      "Deploy applications on AWS",
      "Security and compliance",
      "Cost optimization techniques",
    ],
    benefits: [
      "High demand for cloud professionals",
      "Global career opportunities",
      "Hands-on cloud deployment skills",
      "AWS certification preparation",
      "Scalable IT solutions",
    ],
    syllabus: [
      "AWS Fundamentals",
      "Compute Services",
      "Storage Solutions",
      "Networking in AWS",
      "Security and Management",
    ],
    role: "Cloud Engineer",
    trainingMode: "Physical & Live Online Classes, including Night Classes",
  },
  3: {
    title: "Advanced Cybersecurity Course",
    overview:
      "In-depth training in cybersecurity practices, tools, and techniques to protect systems and data from threats.",
    highlights: [
      "Master cybersecurity frameworks",
      "Learn ethical hacking techniques",
      "Implement network security measures",
      "Understand threat detection and response",
      "Prepare for cybersecurity certifications",
    ],
    benefits: [
      "High demand for cybersecurity professionals",
      "Protect organizations from cyber threats",
      "Career growth in IT security",
      "Hands-on experience with security tools",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Ethical Hacking",
      "Incident Response",
      "Cryptography Basics",
    ],
    role: "Cybersecurity Specialist",
    trainingMode: "Physical & Live Online Classes",
  },
  4: {
    title: "Digital Marketing Full Course",
    overview:
      "Comprehensive training in digital marketing strategies, tools, and analytics to boost online presence.",
    highlights: [
      "Master SEO and SEM techniques",
      "Learn content marketing strategies",
      "Understand social media advertising",
      "Analyze marketing campaign performance",
      "Develop digital marketing plans",
    ],
    benefits: [
      "High demand for digital marketing experts",
      "Drive business growth through online channels",
      "Career opportunities in marketing agencies",
      "Practical skills in analytics tools",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Introduction to Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Content Marketing",
      "Social Media Marketing",
      "Analytics and Reporting",
    ],
    role: "Digital Marketer",
    trainingMode: "Physical & Live Online Classes",
  },
  5: {
    title: "Excel Full Course",
    overview:
      "Advanced MS-Excel Training course for data analysts, business managers, and professionals to enhance analytical skills.",
    highlights: [
      "Familiarity with advanced Excel features",
      "Understanding Excel Formulas and Functions",
      "Data Analysis and Visualization",
      "Advanced Charting Techniques",
      "Pivot Tables and Pivot Charts",
      "Data Validation and Protection",
      "Macro Programming Basics",
      "Financial Modeling",
      "Statistical Analysis",
      "Database Functions",
    ],
    benefits: [
      "High demand for data analysts",
      "Attention to detail in data-oriented roles",
      "Better career opportunities in finance and business",
      "Enhanced productivity and efficiency",
      "Professional certification recognized by industry",
    ],
    syllabus: [
      "Understanding Excel Reporting Environment",
      "Business Intelligence Overview",
      "Working with Data",
      "Exploring Excel Database Features",
      "Data Tables",
      "Data Validation",
      "Conditional Formatting",
      "Creating Dynamic Lists with PivotTables",
      "Analyzing Information Data Sets",
      "Auditing",
      "Functions and Formulas",
      "Collaborating with Colleagues",
      "Creating Charts and Graphics",
    ],
    role: "Excel Analyst",
    trainingMode:
      "Both, Physical & Live Online Classes, including Online Live Night Classes",
  },
  6: {
    title: "Java Full Course",
    overview:
      "Comprehensive Java programming training for building robust applications and preparing for software development roles.",
    highlights: [
      "Master Java syntax and OOP concepts",
      "Build desktop and web applications",
      "Understand Java frameworks",
      "Database connectivity with Java",
      "Unit testing and debugging",
    ],
    benefits: [
      "High demand for Java developers",
      "Versatile programming skills",
      "Career opportunities in software development",
      "Strong foundation for Android development",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Java Basics",
      "Object-Oriented Programming",
      "Java Collections Framework",
      "Exception Handling",
      "Database Integration",
    ],
    role: "Java Developer",
    trainingMode: "Physical & Live Online Classes",
  },
  7: {
    title: "MERN Stack Web Development",
    overview:
      "Learn full-stack web development using MongoDB, Express.js, React, and Node.js to build modern web applications.",
    highlights: [
      "Master the MERN stack",
      "Build dynamic web applications",
      "Understand RESTful API development",
      "Implement front-end with React",
      "Manage databases with MongoDB",
    ],
    benefits: [
      "High demand for full-stack developers",
      "Build scalable web applications",
      "Career opportunities in tech startups",
      "Hands-on project experience",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Introduction to MERN Stack",
      "Node.js and Express.js",
      "MongoDB Database Management",
      "React for Front-End Development",
      "Building Full-Stack Applications",
    ],
    role: "Full-Stack Developer",
    trainingMode: "Physical & Live Online Classes, including Night Classes",
  },
  8: {
    title: "RedHat Certified Engineer",
    overview:
      "Training for Red Hat Enterprise Linux administration, focusing on system configuration, management, and automation.",
    highlights: [
      "Facet joint: System",
      "Master Linux system administration",
      "Configure Red Hat Enterprise Linux",
      "Automate system tasks with Ansible",
      "Manage system security",
      "Prepare for RHCE certification",
    ],
    benefits: [
      "High demand for Linux administrators",
      "Career advancement in IT operations",
      "Practical skills in system management",
      "Red Hat certification preparation",
      "Enhanced system administration expertise",
    ],
    syllabus: [
      "Linux Fundamentals",
      "System Administration",
      "Networking and Security",
      "Automation with Ansible",
      "Performance Tuning",
    ],
    role: "Linux System Administrator",
    trainingMode: "Physical & Live Online Classes",
  },
  9: {
    title: "Social Media Marketing",
    overview:
      "Learn strategies and tools for effective social media marketing to grow brand presence and engagement.",
    highlights: [
      "Master social media platforms",
      "Create engaging content strategies",
      "Understand ad campaign management",
      "Analyze social media metrics",
      "Build brand communities",
    ],
    benefits: [
      "High demand for social media marketers",
      "Drive brand engagement and sales",
      "Career opportunities in digital marketing",
      "Practical skills in social media tools",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Introduction to Social Media Marketing",
      "Content Creation and Strategy",
      "Social Media Advertising",
      "Analytics and Performance Tracking",
      "Community Management",
    ],
    role: "Social Media Marketer",
    trainingMode: "Physical & Live Online Classes",
  },
  10: {
    title: "SPSS Full Course",
    overview:
      "Comprehensive training in SPSS for statistical analysis, data management, and research applications.",
    highlights: [
      "Master SPSS software",
      "Conduct statistical analysis",
      "Manage and clean datasets",
      "Create data visualizations",
      "Interpret research findings",
    ],
    benefits: [
      "High demand for data analysts",
      "Enhanced research capabilities",
      "Career opportunities in academia and industry",
      "Practical data analysis skills",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Introduction to SPSS",
      "Data Management",
      "Statistical Analysis Techniques",
      "Data Visualization",
      "Research Reporting",
    ],
    role: "Data Analyst",
    trainingMode: "Physical & Live Online Classes",
  },
  11: {
    title: "Tally",
    overview:
      "Learn Tally ERP for accounting, inventory management, and business operations for financial professionals.",
    highlights: [
      "Master Tally ERP software",
      "Manage business accounts",
      "Handle inventory and payroll",
      "Generate financial reports",
      "Understand GST compliance",
    ],
    benefits: [
      "High demand for Tally professionals",
      "Streamline business operations",
      "Career growth in accounting and finance",
      "Practical software skills",
      "Industry-recognized certification",
    ],
    syllabus: [
      "Introduction to Tally ERP",
      "Accounting in Tally",
      "Inventory Management",
      "Payroll Processing",
      "GST and Taxation",
    ],
    role: "Tally Accountant",
    trainingMode: "Physical & Live Online Classes",
  },
};

export default function CourseDetails() {
  const { classId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSections, setExpandedSections] = useState({});

  const course = upcomingClassesData.find((c) => c.id === parseInt(classId));
  const courseDetails = courseDetailsData[classId] || {};

  if (!course) {
    return <div className="text-center py-16">Course not found</div>;
  }

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const upcomingClasses = course.schedules.map((schedule) => ({
    date: `${schedule.date} ${schedule.month} 2025`,
    times: [schedule.time],
  }));

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="bg-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span>›</span>
              <a href="/upcoming_classes" className="hover:underline">
                Courses
              </a>
              <span>›</span>
              <span>{course.title}</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">{course.title}</h1>
                <div className="flex items-center space-x-6 mb-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{courseDetails.role || "Professional"}</span>
                  </div>
                  <div className="flex items-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    <span>Share with friends</span>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">
                    Training Mode:{" "}
                    {courseDetails.trainingMode ||
                      "Physical & Live Online Classes"}
                  </span>
                </div>
                <p className="text-lg mb-8">
                  {courseDetails.overview ||
                    "Learn advanced skills in this comprehensive course."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                    ENROLL NOW →
                  </button>
                  <button className="bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition-colors">
                    SEND AN INQUIRY →
                  </button>
                </div>
                <div className="flex items-center mt-6">
                  <Play className="w-5 h-5 mr-2" />
                  <a href="#" className="underline text-sm">
                    watch student's testimonials
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <span className="text-white text-6xl font-bold">
                        {course.title[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex space-x-8 border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "overview"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Overview
                </button>
                <button
                  onClick={() => setActiveTab("benefits")}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "benefits"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Course Benefits
                </button>
                <button
                  onClick={() => setActiveTab("syllabus")}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "syllabus"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Syllabus
                </button>
              </div>
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Course Overview
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {courseDetails.overview ||
                      "This course provides comprehensive training to enhance your professional skills."}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Course Highlights
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {(courseDetails.highlights || []).map(
                      (highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="text-center mb-8">
                    <button className="text-gray-600 hover:text-gray-800 flex items-center mx-auto">
                      <ChevronDown className="w-4 h-4 mr-1" />
                      See more
                    </button>
                  </div>
                </div>
              )}
              {activeTab === "benefits" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Benefits of {course.title}
                  </h2>
                  <ul className="space-y-3">
                    {(courseDetails.benefits || []).map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-4">
                    {[
                      "Keyboard Shortcuts",
                      "Formatting Tips",
                      "Efficiency Tips",
                      "Customization",
                    ].map((section) => (
                      <div key={section} className="bg-blue-50 rounded-lg">
                        <button
                          onClick={() => toggleSection(section)}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <span className="font-medium text-gray-800">
                            + {section}
                          </span>
                          {expandedSections[section] ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                        {expandedSections[section] && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-700">
                              Content for {section} section...
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Earn a Professional Certification
                        </h3>
                        <p className="text-gray-700 mb-6">
                          Upon successful completion of the {course.title}, you
                          will receive an industry-recognized certificate.
                        </p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Industry Recognition
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Recognized by leading companies and HR
                                departments
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Digital & Physical Copy
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Receive both digital and physical certificates
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Lifetime Validity
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Certificate never expires and can be verified
                                online
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-sm">✓</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                LinkedIn Integration
                              </h4>
                              <p className="text-gray-600 text-sm">
                                Add directly to your LinkedIn profile, resume,
                                and CV
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Certificate Includes:
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Your name and course completion details</li>
                            <li>• Official seal and signature</li>
                            <li>• Unique certificate ID for verification</li>
                            <li>• Course duration and skill level achieved</li>
                            <li>• QR code for instant online verification</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="bg-white border-4 border-blue-600 rounded-lg p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="text-center">
                              <div className="mb-6">
                                <div className="flex items-center justify-center mb-2">
                                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                    <span className="text-white font-bold text-lg">
                                      B
                                    </span>
                                  </div>
                                  <div className="text-left">
                                    <div className="text-blue-600 font-bold text-lg">
                                      BROADWAY
                                    </div>
                                    <div className="text-blue-600 font-bold text-sm">
                                      INFOSYS
                                    </div>
                                    <div className="text-gray-500 text-xs">
                                      Since 2008
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-6">
                                <h3 className="text-blue-800 font-bold text-xl mb-2">
                                  CERTIFICATE OF COMPLETION
                                </h3>
                                <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                              </div>
                              <div className="mb-6">
                                <p className="text-gray-600 text-sm mb-4">
                                  This is to certify that
                                </p>
                                <div className="border-b-2 border-gray-300 pb-2 mb-4">
                                  <span className="text-gray-800 font-bold text-lg">
                                    [Student Name]
                                  </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">
                                  has successfully completed
                                </p>
                                <p className="text-blue-800 font-bold text-base mb-4">
                                  {course.title}
                                </p>
                                <p className="text-gray-600 text-xs">
                                  Duration: {course.duration} | Level: Advanced
                                </p>
                              </div>
                              <div className="flex justify-between items-end">
                                <div className="text-left">
                                  <div className="w-20 h-8 bg-blue-100 rounded mb-1"></div>
                                  <p className="text-xs text-gray-500">
                                    Instructor Signature
                                  </p>
                                </div>
                                <div className="text-center">
                                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                                    <span className="text-white font-bold text-lg">
                                      B
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    Official Seal
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="w-20 h-8 bg-blue-100 rounded mb-1"></div>
                                  <p className="text-xs text-gray-500">
                                    Director Signature
                                  </p>
                                </div>
                              </div>
                              <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500">
                                  Certificate ID: BIS-{course.id}-2025-001
                                </p>
                                <p className="text-xs text-gray-500">
                                  Verify at: broadwayinfosys.com/verify
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-blue-600 text-xl">🏆</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Industry Standard
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Meets international certification standards
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-green-600 text-xl">✓</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Verified Skills
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Demonstrates mastery of advanced skills
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-purple-600 text-xl">📈</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Career Boost
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Enhances your professional profile
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Earn a High Value Industry Certificate
                      </h3>
                      <p className="text-gray-700">
                        Add this credential to your LinkedIn profile, resume, or
                        CV to stand out to recruiters.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg">
                        <div className="text-center">
                          <div className="text-blue-600 font-bold text-lg mb-2">
                            GoldTree Group
                          </div>
                          <div className="text-blue-800 font-bold text-xl mb-4">
                            CERTIFICATE OF ACHIEVEMENT
                          </div>
                          <div className="text-sm text-gray-600 mb-4">
                            This certifies that
                          </div>
                          <div className="border-b border-gray-300 mb-4 pb-2">
                            <span className="text-gray-800 font-medium">
                              Training Name
                            </span>
                          </div>
                          <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white font-bold">B</span>
                          </div>
                          <div className="text-xs text-gray-500">
                            GoldTree Group
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "syllabus" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    What you'll learn
                  </h2>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      {(courseDetails.syllabus || []).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Key Skills
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                          Core Concepts
                        </h4>
                        <p className="text-sm text-gray-600">
                          Learn foundational skills for {course.title}
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">
                          Advanced Techniques
                        </h4>
                        <p className="text-sm text-gray-600">
                          Master advanced applications in {course.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <button className="w-full bg-orange-600 text-white py-3 px-6 rounded font-semibold hover:bg-orange-700 transition-colors mb-6">
                  SEND AN INQUIRY →
                </button>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Upcoming Classes
                  </h3>
                  <div className="space-y-4">
                    {upcomingClasses.map((classItem, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-3 last:border-b-0"
                      >
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{classItem.date}</span>
                        </div>
                        {classItem.times.map((time, timeIndex) => (
                          <div
                            key={timeIndex}
                            className="text-sm text-gray-700 ml-6"
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Students also enrolled to
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-12 bg-blue-100 rounded flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">
                        {course.title.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">
                        Related Course
                      </h4>
                      <p className="text-xs text-gray-600">Popular Course</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
