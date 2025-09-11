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
  ArrowBigRight,
  Circle,
  Check,
} from "lucide-react";
import moment from "moment";
import { useParams } from "react-router-dom";

// Generate the upcoming dates data with dynamic dates
const generateUpcomingClassesData = () => {
  // Get the current date and last day of the current month
  const currentDate = moment();
  const lastDayOfMonth = moment().endOf('month');
  
  // Check if today is the last day of the month
  const isLastDay = currentDate.isSame(lastDayOfMonth, 'day');
  
  // Set nextMonthStart to the start of the next month if today is the last day, otherwise use the current month
  const nextMonthStart = isLastDay ? moment().add(1, 'month').startOf('month') : moment().startOf('month');

  return [
    {
      id: 1,
      title: "Full Accounting Course",
      duration: "6 Month",
      date: nextMonthStart.clone(),
      time: "08:00 PM - 09:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/course_details/1",
      schedules: [
        { date: nextMonthStart.clone().date(1), time: "08:00 PM - 09:30 PM" },
        { date: nextMonthStart.clone().date(2), time: "09:00 AM - 10:30 AM" },
        { date: nextMonthStart.clone().date(3), time: "02:00 PM - 03:30 PM" },
        { date: nextMonthStart.clone().date(4), time: "06:00 PM - 07:30 PM" },
        { date: nextMonthStart.clone().date(5), time: "10:00 AM - 11:30 AM" },
      ],
    },
    {
      id: 2,
      title: "AWS Full Course",
      duration: "1 Month",
      date: nextMonthStart.clone(),
      moreClasses: 3,
      link: "/upcoming_classes/2",
      schedules: [
        { date: nextMonthStart.clone().date(1), time: "07:00 AM - 08:30 AM" },
        { date: nextMonthStart.clone().date(3), time: "03:00 PM - 04:30 PM" },
        { date: nextMonthStart.clone().date(5), time: "11:00 AM - 12:30 PM" },
      ],
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Course",
      duration: "2.5 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(2.5, "months"),
      },
      time: "08:00 AM - 09:30 AM",
      moreClasses: 6,
      link: "/upcoming_classes/3",
      schedules: [
        { date: nextMonthStart.clone().date(1), time: "08:00 AM - 09:30 AM" },
        { date: nextMonthStart.clone().date(2), time: "10:00 AM - 11:30 AM" },
        { date: nextMonthStart.clone().date(4), time: "02:00 PM - 03:30 PM" },
        { date: nextMonthStart.clone().date(6), time: "04:00 PM - 05:30 PM" },
        { date: nextMonthStart.clone().date(8), time: "09:00 AM - 10:30 AM" },
        { date: nextMonthStart.clone().date(10), time: "06:00 PM - 07:30 PM" },
      ],
    },
    {
      id: 4,
      title: "Digital Marketing Full Course",
      duration: "3 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(3, "months"),
      },
      time: "09:30 AM - 11:00 AM",
      moreClasses: 4,
      link: "/upcoming_classes/4",
      schedules: [
        { date: nextMonthStart.clone().date(1), time: "09:30 AM - 11:00 AM" },
        { date: nextMonthStart.clone().date(3), time: "01:00 PM - 02:30 PM" },
        { date: nextMonthStart.clone().date(5), time: "05:00 PM - 06:30 PM" },
        { date: nextMonthStart.clone().date(7), time: "08:00 AM - 09:30 AM" },
      ],
    },
    {
      id: 5,
      title: "Excel Full Course",
      duration: "1 Month",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(1, "month"),
      },
      time: "10:00 AM - 11:30 AM",
      moreClasses: 5,
      link: "/upcoming_classes/5",
      schedules: [
        { date: nextMonthStart.clone().date(1), time: "11:00 AM - 12:30 PM" },
        { date: nextMonthStart.clone().date(2), time: "05:00 PM - 06:30 PM" },
        { date: nextMonthStart.clone().date(8), time: "04:30 PM - 06:00 PM" },
        { date: nextMonthStart.clone().date(14), time: "06:30 AM - 08:00 AM" },
        { date: nextMonthStart.clone().date(15), time: "02:00 PM - 03:30 PM" },
      ],
    },
    {
      id: 6,
      title: "Java Full Course",
      duration: "2 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(2, "months"),
      },
      time: "02:00 PM - 03:30 PM",
      moreClasses: 7,
      link: "/upcoming_classes/6",
      schedules: [
        { date: nextMonthStart.clone().date(3), time: "02:00 PM - 03:30 PM" },
        { date: nextMonthStart.clone().date(4), time: "09:00 AM - 10:30 AM" },
        { date: nextMonthStart.clone().date(6), time: "11:00 AM - 12:30 PM" },
        { date: nextMonthStart.clone().date(8), time: "03:00 PM - 04:30 PM" },
        { date: nextMonthStart.clone().date(10), time: "07:00 PM - 08:30 PM" },
        { date: nextMonthStart.clone().date(12), time: "10:00 AM - 11:30 AM" },
        { date: nextMonthStart.clone().date(14), time: "04:00 PM - 05:30 PM" },
      ],
    },
    {
      id: 7,
      title: "MERN Stack Web Development",
      duration: "8 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(8, "months"),
      },
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/7",
      schedules: [
        { date: nextMonthStart.clone().date(4), time: "06:00 PM - 07:30 PM" },
        { date: nextMonthStart.clone().date(6), time: "08:00 AM - 09:30 AM" },
        { date: nextMonthStart.clone().date(8), time: "01:00 PM - 02:30 PM" },
        { date: nextMonthStart.clone().date(10), time: "05:00 PM - 06:30 PM" },
        { date: nextMonthStart.clone().date(12), time: "09:00 AM - 10:30 AM" },
      ],
    },
    {
      id: 8,
      title: "RedHat Certified Engineer",
      duration: "2.5 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(2.5, "months"),
      },
      time: "04:00 PM - 05:30 PM",
      moreClasses: 8,
      link: "/upcoming_classes/8",
      schedules: [
        { date: nextMonthStart.clone().date(5), time: "04:00 PM - 05:30 PM" },
        { date: nextMonthStart.clone().date(6), time: "10:00 AM - 11:30 AM" },
        { date: nextMonthStart.clone().date(8), time: "02:00 PM - 03:30 PM" },
        { date: nextMonthStart.clone().date(10), time: "08:00 AM - 09:30 AM" },
        { date: nextMonthStart.clone().date(12), time: "06:00 PM - 07:30 PM" },
        { date: nextMonthStart.clone().date(14), time: "11:00 AM - 12:30 PM" },
        { date: nextMonthStart.clone().date(15), time: "03:00 PM - 04:30 PM" },
        { date: nextMonthStart.clone().date(15), time: "07:00 PM - 08:30 PM" },
      ],
    },
    {
      id: 9,
      title: "Social Media Marketing",
      duration: "8 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(8, "months"),
      },
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/9",
      schedules: [
        { date: nextMonthStart.clone().date(4), time: "06:00 PM - 07:30 PM" },
        { date: nextMonthStart.clone().date(6), time: "08:00 AM - 09:30 AM" },
        { date: nextMonthStart.clone().date(8), time: "01:00 PM - 02:30 PM" },
        { date: nextMonthStart.clone().date(10), time: "05:00 PM - 06:30 PM" },
        { date: nextMonthStart.clone().date(12), time: "09:00 AM - 10:30 AM" },
      ],
    },
    {
      id: 10,
      title: "SPSS Full Course",
      duration: "8 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(8, "months"),
      },
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/10",
      schedules: [
        { date: nextMonthStart.clone().date(4), time: "06:00 PM - 07:30 PM" },
        { date: nextMonthStart.clone().date(6), time: "08:00 AM - 09:30 AM" },
        { date: nextMonthStart.clone().date(8), time: "01:00 PM - 02:30 PM" },
        { date: nextMonthStart.clone().date(10), time: "05:00 PM - 06:30 PM" },
        { date: nextMonthStart.clone().date(12), time: "09:00 AM - 10:30 AM" },
      ],
    },
    {
      id: 11,
      title: "Tally",
      duration: "8 Months",
      date: {
        start: nextMonthStart.clone(),
        end: nextMonthStart.clone().add(8, "months"),
      },
      time: "06:00 PM - 07:30 PM",
      moreClasses: 5,
      link: "/upcoming_classes/11",
      schedules: [
        { date: nextMonthStart.clone().date(4), time: "06:00 PM - 07:30 PM" },
        { date: nextMonthStart.clone().date(6), time: "08:00 AM - 09:30 AM" },
        { date: nextMonthStart.clone().date(8), time: "01:00 PM - 02:30 PM" },
        { date: nextMonthStart.clone().date(10), time: "05:00 PM - 06:30 PM" },
        { date: nextMonthStart.clone().date(12), time: "09:00 AM - 10:30 AM" },
      ],
    },
  ];
};

const upcomingClassesData = generateUpcomingClassesData();

// Format the schedule dates for display
const formatSchedules = (schedules) => {
  return schedules.map((schedule) => {
    // Check if date is a moment object
    if (moment.isMoment(schedule.date)) {
      return {
        ...schedule,
        displayDate: schedule.date.format("MMMM D, YYYY"),
        fullDate: schedule.date.format("YYYY-MM-DD"),
      };
    }
    
    // If it's already a string or other format, return as is
    return {
      ...schedule,
      displayDate: schedule.date || "Invalid date",
      fullDate: "",
    };
  });
};

upcomingClassesData.forEach((course) => {
  course.schedules = formatSchedules(course.schedules);
});

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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + T: Create new transaction in accounting software",
        "Ctrl + S: Save ledger entries",
        "Alt + R: Reconcile accounts",
        "Ctrl + P: Print financial reports",
        "Alt + F: Open financial statement templates",
      ],
      formattingTips: [
        "Use consistent number formats for currency (e.g., $1,234.56)",
        "Apply standardized date formats (DD/MM/YYYY)",
        "Utilize double-entry formatting for accurate bookkeeping",
        "Set up templates for recurring journal entries",
        "Use color coding for account types in ledgers",
      ],
      efficiencyTips: [
        "Automate recurring transactions using software",
        "Use batch processing for multiple entries",
        "Leverage templates for financial reports",
        "Schedule regular account reconciliation",
        "Integrate accounting software with bank feeds",
      ],
      customization: [
        "Customize chart of accounts for specific business needs",
        "Set up user-defined fields for custom reporting",
        "Create personalized financial dashboards",
        "Tailor invoice templates to brand identity",
        "Configure GST settings for compliance",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + Shift + N: Open new AWS Management Console tab",
        "Alt + S: Search AWS services",
        "Ctrl + D: Duplicate resource configurations",
        "Ctrl + R: Refresh resource list",
        "Alt + C: Open cost explorer",
      ],
      formattingTips: [
        "Use consistent naming conventions for AWS resources",
        "Apply tags to organize resources effectively",
        "Format JSON policies with proper indentation",
        "Use standardized AMI naming for clarity",
        "Document architecture with consistent diagramming tools",
      ],
      efficiencyTips: [
        "Use AWS CLI for repetitive tasks",
        "Automate deployments with CloudFormation",
        "Leverage AWS Lambda for serverless automation",
        "Schedule resource shutdowns for cost savings",
        "Monitor resources with CloudWatch dashboards",
      ],
      customization: [
        "Create custom CloudFormation templates",
        "Configure custom IAM policies",
        "Set up personalized CloudWatch dashboards",
        "Customize VPC settings for specific use cases",
        "Tailor S3 bucket policies for access control",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + T: Open new terminal for security tools",
        "Ctrl + C: Cancel active scans safely",
        "Alt + L: View logs in monitoring tools",
        "Ctrl + S: Save security configurations",
        "Alt + P: Open packet capture tools",
      ],
      formattingTips: [
        "Use consistent log file naming conventions",
        "Format security policies with clear sections",
        "Apply standardized firewall rule formats",
        "Document vulnerabilities with CVE formats",
        "Use structured JSON for SIEM configurations",
      ],
      efficiencyTips: [
        "Automate scans with scheduled scripts",
        "Use SIEM tools for centralized monitoring",
        "Leverage pre-built security templates",
        "Batch process vulnerability assessments",
        "Integrate threat intelligence feeds",
      ],
      customization: [
        "Customize firewall rules for specific networks",
        "Create tailored incident response plans",
        "Configure SIEM dashboards for key metrics",
        "Set up custom alerts for threat detection",
        "Personalize security tool interfaces",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + T: Open new tab for analytics tools",
        "Ctrl + S: Save campaign settings",
        "Alt + P: Preview ad creatives",
        "Ctrl + R: Refresh analytics dashboards",
        "Alt + C: Open content scheduler",
      ],
      formattingTips: [
        "Use consistent naming for campaign assets",
        "Format ad copy with clear headlines",
        "Apply standardized URL tracking parameters",
        "Use branded templates for social posts",
        "Organize analytics reports with clear sections",
      ],
      efficiencyTips: [
        "Schedule posts using automation tools",
        "Use templates for recurring campaigns",
        "Batch create ad variations",
        "Leverage analytics dashboards for quick insights",
        "Automate email marketing workflows",
      ],
      customization: [
        "Create custom audience segments",
        "Design branded social media templates",
        "Configure personalized analytics dashboards",
        "Tailor ad campaigns to specific demographics",
        "Customize email marketing templates",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + Shift + L: Toggle filters",
        "Alt + =: AutoSum",
        "Ctrl + ;: Insert current date",
        "F2: Edit selected cell",
        "Ctrl + Shift + $: Apply currency format",
      ],
      formattingTips: [
        "Use consistent number formats for data types",
        "Apply conditional formatting for data insights",
        "Utilize cell styles for uniform reports",
        "Format pivot tables with clear layouts",
        "Use custom number formats for specific needs",
      ],
      efficiencyTips: [
        "Use pivot tables for quick data summaries",
        "Automate repetitive tasks with macros",
        "Leverage data validation for error-free inputs",
        "Use Power Query for large datasets",
        "Create reusable report templates",
      ],
      customization: [
        "Create custom Excel templates",
        "Design personalized pivot table styles",
        "Set up custom conditional formatting rules",
        "Configure macros for specific workflows",
        "Customize ribbon for frequent tools",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + Shift + F: Format code",
        "Ctrl + D: Delete line",
        "Ctrl + /: Comment/uncomment line",
        "Alt + Shift + R: Refactor rename",
        "Ctrl + Space: Code completion",
      ],
      formattingTips: [
        "Follow consistent Java naming conventions",
        "Use proper indentation for code readability",
        "Apply Javadoc formatting for documentation",
        "Organize imports consistently",
        "Use consistent brace styles",
      ],
      efficiencyTips: [
        "Use IDE templates for common patterns",
        "Leverage debugging tools for quick fixes",
        "Automate builds with Maven or Gradle",
        "Use version control for collaboration",
        "Write reusable code libraries",
      ],
      customization: [
        "Configure IDE for custom key bindings",
        "Create custom code templates",
        "Set up personalized debugging configurations",
        "Customize project build settings",
        "Tailor JavaDoc templates for projects",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + S: Save project files",
        "Ctrl + Shift + F: Format code",
        "Ctrl + /: Toggle comment in code",
        "Alt + Shift + F: Auto-fix linting issues",
        "Ctrl + B: Build project",
      ],
      formattingTips: [
        "Use ESLint for consistent code style",
        "Apply Prettier for automatic formatting",
        "Use consistent JSON structures for APIs",
        "Organize React components with clear naming",
        "Format MongoDB queries for readability",
      ],
      efficiencyTips: [
        "Use hot reloading for faster development",
        "Leverage reusable React components",
        "Automate API testing with Postman",
        "Use MongoDB Atlas for quick setup",
        "Implement CI/CD pipelines",
      ],
      customization: [
        "Create custom React component libraries",
        "Configure custom API endpoints",
        "Set up personalized VS Code extensions",
        "Customize MongoDB schemas for projects",
        "Tailor CSS frameworks for UI",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + C: Terminate running process",
        "Ctrl + D: Exit terminal session",
        "Ctrl + L: Clear terminal screen",
        "Alt + T: Open new terminal tab",
        "Ctrl + R: Search command history",
      ],
      formattingTips: [
        "Use consistent naming for scripts",
        "Format Ansible playbooks with YAML",
        "Apply standardized log file formats",
        "Document commands with clear comments",
        "Use consistent file permission formats",
      ],
      efficiencyTips: [
        "Automate tasks with Ansible playbooks",
        "Use shell scripts for repetitive tasks",
        "Leverage Red Hat Satellite for management",
        "Monitor systems with Cockpit",
        "Batch process system updates",
      ],
      customization: [
        "Create custom Ansible roles",
        "Configure custom system monitoring",
        "Set up personalized shell aliases",
        "Customize Red Hat system profiles",
        "Tailor log rotation policies",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + T: Open new tab for social media tools",
        "Ctrl + S: Save post drafts",
        "Alt + P: Preview social media posts",
        "Ctrl + R: Refresh analytics dashboards",
        "Alt + C: Open content calendar",
      ],
      formattingTips: [
        "Use consistent hashtag formats",
        "Apply branded post templates",
        "Format captions with clear structure",
        "Use standardized image sizes",
        "Organize analytics reports clearly",
      ],
      efficiencyTips: [
        "Schedule posts with automation tools",
        "Use templates for recurring content",
        "Batch create social media assets",
        "Leverage analytics for quick insights",
        "Automate comment moderation",
      ],
      customization: [
        "Create custom post templates",
        "Configure personalized analytics dashboards",
        "Tailor ad campaigns to platforms",
        "Design branded social media graphics",
        "Set up custom content calendars",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + T: Open new data view",
        "Ctrl + S: Save dataset",
        "Alt + G: Generate graphs",
        "Ctrl + R: Run analysis",
        "Alt + V: Switch to variable view",
      ],
      formattingTips: [
        "Use consistent variable naming conventions",
        "Apply standardized data formats",
        "Format output tables for clarity",
        "Use consistent chart styles",
        "Document datasets with clear labels",
      ],
      efficiencyTips: [
        "Use syntax for repetitive analyses",
        "Automate data cleaning processes",
        "Leverage templates for reports",
        "Batch process statistical tests",
        "Save custom chart templates",
      ],
      customization: [
        "Create custom output templates",
        "Configure personalized chart styles",
        "Set up custom variable attributes",
        "Tailor syntax for specific analyses",
        "Customize SPSS interface",
      ],
    },
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
    productivityTips: {
      keyboardShortcuts: [
        "Ctrl + N: Create new voucher",
        "Ctrl + S: Save entries",
        "Alt + R: Open reports menu",
        "Ctrl + P: Print invoices",
        "Alt + G: Go to GST portal",
      ],
      formattingTips: [
        "Use consistent ledger naming",
        "Apply standardized voucher formats",
        "Format reports with clear headings",
        "Use uniform date formats",
        "Apply branded invoice templates",
      ],
      efficiencyTips: [
        "Automate voucher entries",
        "Use batch processing for transactions",
        "Leverage pre-built report templates",
        "Integrate with bank feeds",
        "Schedule GST filings",
      ],
      customization: [
        "Customize ledger categories",
        "Create tailored invoice designs",
        "Configure custom report layouts",
        "Set up personalized dashboards",
        "Tailor GST compliance settings",
      ],
    },
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
    date: schedule.displayDate,
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
                  <button className=" flex gap-5 bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
                    ENROLL NOW{" "}
                    <ArrowBigRight className="w-5 h-5 text-blue-600" />
                  </button>
                  <button className="flex gap-5 bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition-colors">
                    SEND AN INQUIRY <ArrowBigRight className="w-5 h-5" />
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
                        <li
                          key={index}
                          className="flex items-center justify-start space-x-3"
                        >
                          <Circle className="w-2 h-2 text-green-600 fill-green-600" />
                          <span className="text-gray-700 text-base">
                            {highlight}
                          </span>
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
                      <li
                        key={index}
                        className="flex items-center justify-start space-x-3"
                      >
                        <Circle className="w-2 h-2 text-green-600 fill-green-600" />
                        <span className="text-gray-700 text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 space-y-4">
                    {[
                      {
                        key: "Keyboard Shortcuts",
                        property: "keyboardShortcuts",
                      },
                      { key: "Formatting Tips", property: "formattingTips" },
                      { key: "Efficiency Tips", property: "efficiencyTips" },
                      { key: "Customization", property: "customization" },
                    ].map(({ key, property }) => (
                      <div key={key} className="bg-blue-50 rounded-lg">
                        <button
                          onClick={() => toggleSection(key)}
                          className="w-full flex items-center justify-between p-4 text-left"
                        >
                          <span className="font-medium text-gray-800">
                            + {key}
                          </span>
                          {expandedSections[key] ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                          )}
                        </button>
                        {expandedSections[key] && (
                          <div className="px-4 pb-4">
                            <ul className="space-y-2">
                              {(
                                courseDetails.productivityTips?.[property] || []
                              ).map((tip, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>
                                  <span className="text-gray-700">{tip}</span>
                                </li>
                              ))}
                            </ul>
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
                                      GOLDTREE
                                    </div>
                                    <div className="text-blue-600 font-bold text-sm">
                                      GROUP
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
                                  Verify at: goldtree.com/verify
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
                        <li
                          key={index}
                          className="flex items-center justify-start space-x-3"
                        >
                          <Check className="w-3 h-3 text-blue-600 fill-blue-600" />
                          <span className="text-gray-700 text-base">
                            {item}
                          </span>
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
                <button className="flex gap-5 w-full bg-orange-600 text-white py-3 px-6 rounded font-semibold hover:bg-orange-700 transition-colors mb-6">
                  SEND AN INQUIRY <ArrowBigRight className="w-5 h-5" />
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