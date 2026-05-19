import {
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiLock,
  FiPenTool,
  FiRefreshCw,
  FiServer,
  FiShield,
  FiShoppingCart,
  FiTool,
  FiUsers,
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    icon: FiLayers,
    title: 'Custom Business Systems',
    description: 'Smart software solutions tailored for businesses, supermarkets, suppliers, and operations management.',
  },
  {
    icon: FiGlobe,
    title: 'Web Application Development',
    description: 'Modern responsive web applications built using MERN Stack technologies.',
  },
  {
    icon: FiUsers,
    title: 'School Management',
    description: 'Digital platforms for student management, attendance, exams, reports, and administration.',
  },
  {
    icon: FiShoppingCart,
    title: 'POS & Supermarket Systems',
    description: 'Billing, inventory tracking, sales analytics, and customer management solutions.',
  },
  {
    icon: FiPenTool,
    title: 'UI/UX Design',
    description: 'Clean, modern, and user-focused interface designs for web and business applications.',
  },
  {
    icon: FiDatabase,
    title: 'Backend & Database Development',
    description: 'Secure APIs, scalable backend architecture, and efficient database management.',
  },
  {
    icon: FiServer,
    title: 'Deployment & Hosting',
    description: 'Production deployment, domain connection, hosting setup, and live system maintenance.',
  },
  {
    icon: FiTool,
    title: 'System Maintenance & Support',
    description: 'System optimization, troubleshooting, updates, and continuous technical support.',
  },
  {
    icon: FiBriefcase,
    title: 'Digital Branding',
    description: 'Professional posters, business branding, and social media design solutions.',
  },
];

export const projects = [
  {
    title: 'Supermarket Management System',
    description: 'A complete POS, inventory, billing, sales analytics, and customer management platform for retail operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    videoFile: 'super market.mp4',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'School Management System',
    description: 'A digital school platform for student records, attendance, exams, reports, administration, and daily operations.',
    technologies: ['MERN Stack', 'JWT Auth', 'Reports', 'Dashboard'],
    videoFile: 'school video.mp4',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cosmetics Supplier Management System',
    description: 'A modern supplier and invoice system for cosmetics businesses, covering stock, purchases, payments, and supplier records.',
    technologies: ['React', 'Express.js', 'MongoDB', 'REST API'],
    videoFile: 'Supplier-system-cosmetics.mp4',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Pharmacy Management System',
    description:
      'A modern pharmacy management solution for medicine inventory, billing, sales tracking, supplier management, and daily pharmacy operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Inventory'],
    videoFile: 'Pharmacy Management.mp4',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
  },
];

export const reasons = [
  {
    icon: FiCode,
    title: 'Modern Technologies',
    description: 'We use modern tools like React, Node.js, MongoDB, and Tailwind CSS to build fast and scalable systems.',
  },
  {
    icon: FiBriefcase,
    title: 'Business-Focused Solutions',
    description: 'Every system is designed to solve real business problems and improve daily operations.',
  },
  {
    icon: FiPenTool,
    title: 'Clean UI/UX Design',
    description: 'We create simple, modern, and user-friendly interfaces that clients can use easily.',
  },
  {
    icon: FiLayers,
    title: 'Scalable Systems',
    description: 'Our solutions are built with future growth in mind, so businesses can expand without starting over.',
  },
  {
    icon: FiLock,
    title: 'Secure Development',
    description: 'We follow good development practices to protect data, users, and business operations.',
  },
  {
    icon: FiRefreshCw,
    title: 'Ongoing Support',
    description: 'We provide updates, improvements, troubleshooting, and technical support after delivery.',
  },
];

export const stats = [
  {
    icon: FiCheckCircle,
    value: 3,
    suffix: '+',
    title: 'Systems Developed',
    description: 'Business-ready software systems built for real operational workflows.',
  },
  {
    icon: FiLayers,
    value: 'MERN',
    title: 'Modern MERN Stack Solutions',
    description: 'Responsive applications powered by MongoDB, Express, React, and Node.js.',
  },
  {
    icon: FiGlobe,
    value: '100%',
    title: 'Responsive & Scalable Applications',
    description: 'Clean interfaces designed to work smoothly across phones, tablets, and desktops.',
  },
  {
    icon: FiBriefcase,
    value: 'B2B',
    title: 'Business Automation Focused',
    description: 'Digital tools shaped around efficiency, reporting, and smarter daily operations.',
  },
];

export const processPoints = [
  'Discovery workshops that map the business clearly.',
  'Lean prototypes before heavy development starts.',
  'Launch-ready interfaces with thoughtful responsive states.',
  'Support plans built around growth, not dependency.',
];

export { FiBarChart2 };
