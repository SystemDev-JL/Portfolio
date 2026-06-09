// ─── PROJECT DATA ────────────────────────────────────────────────────────────
// To update a project: edit the fields below.
// To add a new project: copy one object and paste it into the array.
// image: import the image at the top of your component or use a URL string.

import hakotImg from '../assets/projects/hakot.png';
import leteciaImg from '../assets/projects/letecia-farm.png';
import mabuhayImg from '../assets/projects/mabuhay-printing.png';
import payrollImg from '../assets/projects/payroll.png';
import quarryImg from '../assets/projects/quarry.png';
import laundryImg from '../assets/projects/Laudry Express.png';
import loanImg from '../assets/projects/Loan Management System.png';

export const projects = [
  {
    id: 1,
    title: 'HAKOT: Waste Collection Management',
    subtitle: 'Tagum City Smart Waste Routing System',
    category: 'Web App',
    tags: ['Web App', 'Mobile App'],
    image: hakotImg,
    description:
      'A smart waste collection management and routing system designed for Tagum City to improve garbage collection efficiency through route monitoring, resident reporting, driver coordination, and admin management.',
    features: [
      'Admin dashboard with route overview',
      'Resident mobile app for concern/report submission',
      'Driver mobile app with task coordination',
      'Map-based garbage truck route monitoring',
      'Collection schedule management',
      'Push notifications via OneSignal',
      'Real-time route and collection status updates',
    ],
    tech: ['PHP', 'Laravel', 'Flutter', 'MySQL', 'OpenLayers', 'Firebase', 'OneSignal'],
    // github: 'https://github.com/yourusername/hakot',  // ← replace with your GitHub link
    // demo: 'https://hakot.example.com',                // ← replace with live demo link
  },
  {
    id: 2,
    title: 'BOMS: Quarry Management System',
    subtitle: 'Business Operations Management',
    category: 'Management System',
    tags: ['Management System', 'Web App'],
    image: quarryImg,
    description:
      'A management system for quarry operations that helps organize transactions, records, inventory, reports, and business workflows for efficient day-to-day operations.',
    features: [
      'Admin dashboard with analytics',
      'Transaction monitoring and history',
      'Inventory and material tracking',
      'Comprehensive reports and summaries',
      'User and role management',
      'Business workflow automation',
      'Printable and exportable reports',
      'Advanced filtering and record search',
    ],
    tech: ['Laravel', 'React', 'MySQL'],
  },
  {
    id: 3,
    title: 'Mabuhay Printing Press',
    subtitle: 'Printing Press Management System',
    category: 'Management System',
    tags: ['Management System', 'Web App'],
    image: mabuhayImg,
    description:
      'A business operations system for a printing press, designed to manage customer orders, production workflow, services, pricing, and reports for streamlined operations.',
    features: [
      'Order and job order management',
      'Customer records and CRM',
      'Service and pricing tracking',
      'Production workflow monitoring',
      'Reports and business summaries',
      'Admin dashboard',
      'Material and supply inventory',
    ],
    tech: ['Laravel', 'React', 'MySQL'],
  },
  {
    id: 4,
    title: 'Letecia Farm Staycation',
    subtitle: 'Resort & Booking Platform',
    category: 'Booking',
    tags: ['Booking', 'Web App', 'Mobile App'],
    image: leteciaImg,
    description:
      'A staycation and farm resort booking platform for guests, designed with a relaxing, clean, and user-friendly interface for browsing accommodations and making reservations.',
    features: [
      'Guest booking interface',
      'Room, cottage, and accommodation listings',
      'Real-time availability display',
      'Online booking form',
      'Mobile-responsive design',
      'Admin-side booking management',
      'Guest-friendly landing page',
    ],
    tech: ['React', 'React Native', 'Laravel', 'MySQL', 'Firebase'],
  },
  {
    id: 5,
    title: 'Laundry Express',
    subtitle: 'Mobile Laundry Service App',
    category: 'Mobile App',
    tags: ['Mobile App'],
    image: laundryImg,
    description:
      'A mobile application for laundry service customers to request laundry pickup, track order status, and manage service transactions with an intuitive mobile-first interface.',
    features: [
      'Customer mobile app interface',
      'Laundry pickup request scheduling',
      'Real-time order status tracking',
      'Service pricing and selection',
      'Push notifications',
      'Customer transaction records',
      'Service history and receipts',
      'Partner and rider management',
    ],
    tech: ['React Native', 'Flutter', 'Firebase', 'Supabase'],
  },
  {
    id: 6,
    title: 'Loan Management System',
    subtitle: 'Maco Public Market Stall Renters',
    category: 'Finance',
    tags: ['Finance', 'Management System'],
    image: loanImg,
    description:
      'A loan management platform designed to manage borrowers, loan records, payment schedules, balances, and reports for Maco Public Market Stall Renters Association.',
    features: [
      'Borrower records management',
      'Loan application tracking',
      'Payment monitoring and history',
      'Automatic balance computation',
      'Payment schedule generation',
      'Comprehensive reports',
      'Admin dashboard',
      'Advanced search and filtering',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'React'],
  },
  {
    id: 7,
    title: 'Payroll System',
    subtitle: 'HR & Employee Management',
    category: 'Management System',
    tags: ['Management System', 'Finance'],
    image: payrollImg,
    description:
      'A payroll and employee management system for handling employee records, attendance-related data, deductions, payroll summaries, and reports for efficient HR operations.',
    features: [
      'Employee records management',
      'Payroll computation and monitoring',
      'Deductions and benefits management',
      'Payroll summaries and payslips',
      'Detailed reports and analytics',
      'Admin dashboard',
      'Export and print features',
      'Employee status tracking',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'React'],
  },
];

export const filterCategories = ['All', 'Web App', 'Mobile App', 'Management System', 'Booking', 'Finance'];
