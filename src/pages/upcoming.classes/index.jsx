import { useState } from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import UpcomingClassPopUp from "./upcoming.popup";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import FullAccounting from "../../assets/courses/Acconting-Img.png";
import AWS from "../../assets/courses/AWS.png";
import CyberSecurity from "../../assets/courses/CyberSecurity-Img.png";
import DigitalImage from "../../assets/courses/Digital-Image.png";
import ExcelImage from "../../assets/courses/Excel-Img.png";
import Java from "../../assets/courses/Java-Img.png";
import MERN from "../../assets/courses/Mern-Img.png";
import RedHatImage from "../../assets/courses/RedHat-Img.png";
import SocialMarketing from "../../assets/courses/Social-Marketing-Img.png";
import SPSS from "../../assets/courses/SPSS-Img.png";
import Tally from "../../assets/courses/Tally-Img.png";

// Generate the upcoming classes data with dynamic dates
const generateUpcomingClassesData = () => {
  // Get the current date and last day of the current month
  const currentDate = moment();
  const lastDayOfMonth = moment().endOf('month');
  
  // Check if today is the last day of the month
  const isLastDay = currentDate.isSame(lastDayOfMonth, 'day');
  
  // Set nextMonthStart to the start of the next month if today is the last day, otherwise use the current month
  const nextMonthStart = isLastDay ? moment().add(1, 'month').startOf('month') : moment().startOf('month');

  // Array of base days and times for each course
  const courseSchedules = [
    {
      id: 1,
      title: "Full Accounting Course",
      duration: "6 Month",
      image: FullAccounting,
      baseDay: 15,
      time: "08:00 PM - 09:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/1",
      scheduleDays: [15, 16, 17, 18, 19],
      scheduleTimes: [
        "08:00 PM - 09:30 PM",
        "09:00 AM - 10:30 AM",
        "02:00 PM - 03:30 PM",
        "06:00 PM - 07:30 PM",
        "10:00 AM - 11:30 AM",
      ],
    },
    {
      id: 2,
      title: "AWS Full Course",
      duration: "1 Month",
      image: AWS,
      baseDay: 16,
      time: "07:00 AM - 08:30 AM",
      moreClasses: 3,
      link: "/upcoming_classes/2",
      scheduleDays: [16, 18, 20],
      scheduleTimes: [
        "07:00 AM - 08:30 AM",
        "03:00 PM - 04:30 PM",
        "11:00 AM - 12:30 PM",
      ],
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Course",
      duration: "2.5 Months",
      image: CyberSecurity,
      baseDay: 16,
      time: "08:00 AM - 09:30 AM",
      moreClasses: 6,
      link: "/upcoming_classes/3",
      scheduleDays: [16, 17, 19, 21, 23, 25],
      scheduleTimes: [
        "08:00 AM - 09:30 AM",
        "10:00 AM - 11:30 AM",
        "02:00 PM - 03:30 PM",
        "04:00 PM - 05:30 PM",
        "09:00 AM - 10:30 AM",
        "06:00 PM - 07:30 PM",
      ],
    },
    {
      id: 4,
      title: "Digital Marketing Full Course",
      duration: "3 Months",
      image: DigitalImage,
      baseDay: 16,
      time: "09:30 AM - 11:00 AM",
      moreClasses: 4,
      link: "/upcoming_classes/4",
      scheduleDays: [16, 18, 20, 22],
      scheduleTimes: [
        "09:30 AM - 11:00 AM",
        "01:00 PM - 02:30 PM",
        "05:00 PM - 06:30 PM",
        "08:00 AM - 09:30 AM",
      ],
    },
    {
      id: 5,
      title: "Excel Full Course",
      duration: "1 Month",
      image: ExcelImage,
      baseDay: 17,
      time: "10:00 AM - 11:30 AM",
      moreClasses: 5,
      link: "/upcoming_classes/5",
      scheduleDays: [16, 17, 23, 29, 30],
      scheduleTimes: [
        "11:00 AM - 12:30 PM",
        "05:00 PM - 06:30 PM",
        "04:30 PM - 06:00 PM",
        "06:30 AM - 08:00 AM",
        "02:00 PM - 03:30 PM",
      ],
    },
    {
      id: 6,
      title: "Java Full Course",
      duration: "2 Months",
      image: Java,
      baseDay: 15,
      time: "02:00 PM - 03:30 PM",
      moreClasses: 7,
      link: "/upcoming_classes/6",
      scheduleDays: [18, 19, 21, 23, 25, 27, 29],
      scheduleTimes: [
        "02:00 PM - 03:30 PM",
        "09:00 AM - 10:30 AM",
        "11:00 AM - 12:30 PM",
        "03:00 PM - 04:30 PM",
        "07:00 PM - 08:30 PM",
        "10:00 AM - 11:30 AM",
        "04:00 PM - 05:30 PM",
      ],
    },
    {
      id: 7,
      title: "MERN Stack Web Development",
      duration: "8 Months",
      image: MERN,
      baseDay: 15,
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/7",
      scheduleDays: [19, 21, 23, 25, 27],
      scheduleTimes: [
        "06:00 PM - 07:30 PM",
        "08:00 AM - 09:30 AM",
        "01:00 PM - 02:30 PM",
        "05:00 PM - 06:30 PM",
        "09:00 AM - 10:30 AM",
      ],
    },
    {
      id: 8,
      title: "RedHat Certified Engineer",
      duration: "2.5 Months",
      image: RedHatImage,
      baseDay: 20,
      time: "04:00 PM - 05:30 PM",
      moreClasses: 8,
      link: "/upcoming_classes/8",
      scheduleDays: [20, 21, 23, 25, 27, 29, 30, 30],
      scheduleTimes: [
        "04:00 PM - 05:30 PM",
        "10:00 AM - 11:30 AM",
        "02:00 PM - 03:30 PM",
        "08:00 AM - 09:30 AM",
        "06:00 PM - 07:30 PM",
        "11:00 AM - 12:30 PM",
        "03:00 PM - 04:30 PM",
        "07:00 PM - 08:30 PM",
      ],
    },
    {
      id: 9,
      title: "Social Media Marketing",
      duration: "8 Months",
      image: SocialMarketing,
      baseDay: 19,
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/9",
      scheduleDays: [19, 21, 23, 25, 27],
      scheduleTimes: [
        "06:00 PM - 07:30 PM",
        "08:00 AM - 09:30 AM",
        "01:00 PM - 02:30 PM",
        "05:00 PM - 06:30 PM",
        "09:00 AM - 10:30 AM",
      ],
    },
    {
      id: 10,
      title: "SPSS Full Course",
      duration: "8 Months",
      image: SPSS,
      baseDay: 15,
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/10",
      scheduleDays: [19, 21, 23, 25, 27],
      scheduleTimes: [
        "06:00 PM - 07:30 PM",
        "08:00 AM - 09:30 AM",
        "01:00 PM - 02:30 PM",
        "05:00 PM - 06:30 PM",
        "09:00 AM - 10:30 AM",
      ],
    },
    {
      id: 11,
      title: "Tally",
      duration: "8 Months",
      image: Tally,
      baseDay: 15,
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/11",
      scheduleDays: [19, 21, 23, 25, 27],
      scheduleTimes: [
        "06:00 PM - 07:30 PM",
        "08:00 AM - 09:30 AM",
        "01:00 PM - 02:30 PM",
        "05:00 PM - 06:30 PM",
        "09:00 AM - 10:30 AM",
      ],
    },
  ];

  return courseSchedules.map((course) => {
    // Generate the main course date using the base day
    const courseDate = nextMonthStart.clone().date(course.baseDay);
    
    // Generate schedules with dynamic dates and month
    const schedules = course.scheduleDays.map((day, index) => ({
      date: day,
      month: nextMonthStart.format("MMM"),
      time: course.scheduleTimes[index],
    }));

    return {
      ...course,
      date: courseDate.format("MMMM D, YYYY"),
      schedules,
    };
  });
};

const upcomingClassesData = generateUpcomingClassesData();

export default function UpcomingClasses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleMoreClassesClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const goToCardLink = (course) => {
    console.log("Navigating to:", course.link);
    navigate(course.link);
  };

  return (
    <>
      <Header />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Find Our Upcoming Class Schedule Here!
            </h1>
            <p className="text-gray-600 text-lg">
              Feel free to browse through our courses and their timings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingClassesData.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => goToCardLink(course)}
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {course.duration}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 text-lg mb-3">
                    {course.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-gray-700 font-medium text-sm">
                      UPCOMING CLASSES
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{course.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.time}</span>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMoreClassesClick(course);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                      >
                        {course.moreClasses} more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
              View All Upcoming Classes
            </button>
          </div>
        </div>
        {selectedCourse && (
          <UpcomingClassPopUp
            isOpen={isModalOpen}
            onClose={closeModal}
            courseName={selectedCourse.title}
            totalClasses={selectedCourse.moreClasses}
            schedules={selectedCourse.schedules}
          />
        )}
      </div>
      <Footer />
    </>
  );
}