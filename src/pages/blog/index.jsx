import { useState } from "react";
import BlogCard from "../../components/block.card";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Headers from "../../components/common/header";
import Footer from "../../components/common/footer";

import AWS from "../../assets/career/AWS.jpg";
import CyberSecurity from "../../assets/career/CyberSecurity.jpg";
import Designer from "../../assets/career/Designer.jpg";
import Excel from "../../assets/career/Excel.png";
import GitGithub from "../../assets/career/GitGithub.jpg";
import ITCareer from "../../assets/career/IT-Career.jpg";
import ITStudent from "../../assets/career/IT-Student.jpg";
import JobInterview from "../../assets/career/JobInterview.jpg";
import Marketing from "../../assets/career/Marketing.jpg";
import MERNStack from "../../assets/career/MERNStack.jpg";
import Python from "../../assets/career/Python.jpg";
import QATest from "../../assets/career/QA-Test.jpg";
import RedHat from "../../assets/career/RedHat.jpg";
import ResonsiveWeb from "../../assets/career/Responsiv-Web.jpg";
import Tally from "../../assets/career/Tally.jpg";
import WebDevelopment from "../../assets/career/Web-Development.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 High-Paying IT Jobs You Can Land After +2",
    excerpt:
      "Just finished +2 and wondering what's next? Discover five high-paying IT careers you can pursue with the right training, from web development to cybersecurity.",
    date: "May 11, 2025",
    image: ITCareer,
  },
  {
    id: 2,
    title: "Top 10 Generative AI Tools for Writing, Design, and Video",
    excerpt:
      "Explore the best generative AI tools to spark creativity, from writing assistants to AI-driven design and video editing platforms.",
    date: "April 20, 2025",
    image: Designer,
  },
  {
    id: 3,
    title: "Why Non-IT Students Are Choosing IT Courses at GoldTree Group",
    excerpt:
      "Curious why students from non-IT backgrounds are diving into tech? Learn six reasons why Broadway Infosys is their top choice for IT training.",
    date: "April 10, 2025",
    image: ITStudent,
  },
  {
    id: 4,
    title: "Mastering Git: 8 Best Practices for Developers",
    excerpt:
      "Git is essential for team collaboration. Master version control with these eight best practices to streamline your development workflow.",
    date: "March 26, 2025",
    image: GitGithub,
  },
  {
    id: 5,
    title: "CSS Grid Layout: 10 Techniques for Responsive Web Design",
    excerpt:
      "Create stunning, responsive websites with CSS Grid. Learn 10 essential techniques to build flexible layouts for any device.",
    date: "March 21, 2025",
    image: ResonsiveWeb,
  },
  {
    id: 6,
    title: "Debugging Failed QA Test Cases: 10 Expert Strategies",
    excerpt:
      "Turn failed QA test cases into opportunities. Discover 10 expert strategies to debug and improve software quality effectively.",
    date: "March 04, 2025",
    image: QATest,
  },
  {
    id: 7,
    title: "How to Start a Career in Cloud Computing with AWS",
    excerpt:
      "Cloud computing is booming. Learn how to kickstart your career with AWS training, from basics to certification.",
    date: "February 15, 2025",
    image: AWS,
  },
  {
    id: 8,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Stay ahead in web development with these emerging trends, including AI integration, Web3, and progressive web apps.",
    date: "February 01, 2025",
    image: WebDevelopment,
  },
  {
    id: 9,
    title: "Why Learn Python? 7 Reasons It’s Perfect for Beginners",
    excerpt:
      "Python is a top choice for beginners. Discover seven reasons why its simplicity and versatility make it ideal for new coders.",
    date: "January 25, 2025",
    image: Python,
  },
  {
    id: 10,
    title: "Building Secure Applications: Cybersecurity Tips for Developers",
    excerpt:
      "Protect your applications from threats. Learn essential cybersecurity practices every developer should know.",
    date: "January 10, 2025",
    image: CyberSecurity,
  },
  {
    id: 11,
    title: "Mastering Data Analysis with Excel: Top 5 Techniques",
    excerpt:
      "Unlock the power of Excel for data analysis. Learn five advanced techniques to boost your analytical skills.",
    date: "December 20, 2024",
    image: Excel,
  },
  {
    id: 12,
    title: "How to Ace Your IT Job Interview: 8 Proven Tips",
    excerpt:
      "Nail your next IT job interview with these eight proven tips, from technical prep to soft skills.",
    date: "December 05, 2024",
    image: JobInterview,
  },
  {
    id: 13,
    title: "Introduction to MERN Stack: Build Your First Full-Stack App",
    excerpt:
      "Dive into full-stack development with the MERN stack. Learn how to build a complete web app from scratch.",
    date: "November 15, 2024",
    image: MERNStack,
  },
  {
    id: 14,
    title: "Social Media Marketing: 6 Strategies for Brand Growth",
    excerpt:
      "Boost your brand with social media marketing. Discover six strategies to increase engagement and reach.",
    date: "November 01, 2024",
    image: Marketing,
  },
  {
    id: 15,
    title: "Red Hat Linux: Why It’s Essential for IT Professionals",
    excerpt:
      "Learn why Red Hat Linux is a must for IT pros and how certification can elevate your career.",
    date: "October 20, 2024",
    image: RedHat,
  },
  {
    id: 16,
    title: "Tally ERP: Streamlining Business Accounting in 2025",
    excerpt:
      "Master Tally ERP to manage business accounting efficiently. Explore its features for modern financial tasks.",
    date: "October 10, 2024",
    image: Tally,
  },
];

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Calculate posts for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  // Generate pagination buttons with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const sidePages = 2;

    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = Math.max(1, currentPage - sidePages);
    let endPage = Math.min(totalPages, currentPage + sidePages);

    if (currentPage <= sidePages + 1) {
      endPage = maxPagesToShow - 1;
    } else if (currentPage >= totalPages - sidePages) {
      startPage = totalPages - maxPagesToShow + 2;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) {
      pages.unshift("...");
      pages.unshift(1);
    }
    if (endPage < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      <Headers />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Latest IT Insights & Tips
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Explore our blog for the latest trends, tips, and career advice in
            IT and technology.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 md:mt-12">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-2 sm:px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 sm:gap-2 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronsLeft className="h-4 sm:h-5 w-4 sm:w-5" />
            <span className="text-sm sm:text-base font-medium">Previous</span>
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded text-sm sm:text-base transition-colors ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : typeof page === "number"
                  ? "text-blue-600 hover:bg-blue-50"
                  : "text-gray-400 cursor-default"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className={`px-2 sm:px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 sm:gap-2 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="text-sm sm:text-base font-medium">Next</span>
            <ChevronsRight className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
