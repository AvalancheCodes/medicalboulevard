import icon1 from "../public/images/services/features/icon1.svg";
import icon2 from "../public/images/services/features/icon2.svg";
import icon3 from "../public/images/services/features/icon3.svg";
import { RecurringType } from "./constants";

export const HOMEPAGE_CATEGORIES = [
  {
    href: '/real-estate/catalog?category=rent',
    media: 'fi-real-estate-house',
    title: 'Examination'
  },
  {
    href: '/real-estate/catalog?category=sale',
    media: 'fi-apartment',
    title: 'SPA Rooms'
  },
  {
    href: '/real-estate/catalog?category=rent',
    media: 'fi-shop',
    title: 'Conference Room'
  },
  {
    href: '/real-estate/catalog?category=rent',
    media: 'fi-rent',
    title: 'Media Room'
  },
  {
    href: '/real-estate/catalog?category=sale',
    media: 'fi-house-chosen',
    title: 'Workspace'
  }
];

export const HOMEPAGE_HOW_IT_WORKS = [
  [
    {
      title: "Check Availability",
      text: "To get started, you can check the availability of the medical or business rooms you're interested in renting. Select the specific dates and times for one-time or recurring rentals."
    },
    {
      title: "Book Your Room and Repeat as Needed:",
      text: "Check availability for the desired dates and times for one-time or recurring rentals of our medical and business rooms. Once you find a room that works for you, book it directly through Medical Boulevard and provide payment for the total time you've booked. With upcoming 24-hour availability, you'll have even more flexibility to serve your patients or hold your meetings on your schedule."
    },
    {
      title: "Use It",
      text: "Once your booking is confirmed and payment is received, you can start using your room at the scheduled time. Our rooms are equipped with everything you need to perform your services or hold your meetings, including furniture and sinks required for non-intrusive surgical procedures or other facial treatments. You can focus on your work knowing that all necessary equipment is provided."
    }
  ], [
    {
      title: "Check Availability",
      text: "To get started, you can check the availability of the medical or business rooms you're interested in renting. Select the specific dates and times for one-time or recurring rentals."
    },
    {
      title: "Book Your Room and Repeat as Needed:",
      text: "Check availability for the desired dates and times for one-time or recurring rentals of our medical and business rooms. Once you find a room that works for you, book it directly through Medical Boulevard and provide payment for the total time you've booked. With upcoming 24-hour availability, you'll have even more flexibility to serve your patients or hold your meetings on your schedule."
    },
    {
      title: "Use It",
      text: "Once your booking is confirmed and payment is received, you can start using your room at the scheduled time. Our rooms are equipped with everything you need to perform your services or hold your meetings, including furniture and sinks required for non-intrusive surgical procedures or other facial treatments. You can focus on your work knowing that all necessary equipment is provided."
    },
  ]
];

export const MEDICAL_ROOMS_PROPERTIES = [
  {
    id: "1",
    title: "The Glamour Suite",
    image: '/images/dummy/room-card-image.png',
    sizeSqf: 98,
    category: 'Medical',
    description: 'The Glamour Suite offers a luxurious experience with a spa chair, two sinks, and abundant natural light through its wide windows.',
    price: 1629,
    badges: ['Furnished']
  },
  {
    id: "2",
    title: "The Glamour Suite",
    image: '/images/dummy/room-card-image.png',
    sizeSqf: 98,
    category: 'Medical',
    description: 'The Glamour Suite offers a luxurious experience with a spa chair, two sinks, and abundant natural light through its wide windows.',
    price: 1629,
    badges: ['Furnished']
  },
  {
    id: "3",
    title: "The Glamour Suite",
    image: '/images/dummy/room-card-image.png',
    sizeSqf: 98,
    category: 'Medical',
    description: 'The Glamour Suite offers a luxurious experience with a spa chair, two sinks, and abundant natural light through its wide windows.',
    price: 1629,
    badges: ['Furnished']
  },
  {
    id: "4",
    title: "The Glamour Suite",
    image: '/images/dummy/room-card-image.png',
    sizeSqf: 98,
    category: 'Medical',
    description: 'The Glamour Suite offers a luxurious experience with a spa chair, two sinks, and abundant natural light through its wide windows.',
    price: 1629,
    badges: ['Furnished']
  },
  {
    id: "5",
    title: "The Glamour Suite",
    image: '/images/dummy/room-card-image.png',
    sizeSqf: 98,
    category: 'Medical',
    description: 'The Glamour Suite offers a luxurious experience with a spa chair, two sinks, and abundant natural light through its wide windows.',
    price: 1629,
    badges: ['Furnished']
  },
];

export const CART_LINE_ITEMS = [
  {
    title: 'The Glamour Suite 1',
    price: 1629,
    recurringType: RecurringType.None,
    dateStart: "2023-03-16",
    hoursStart: "13:00:00",
    hoursEnd: "16:00:00",
  },
  {
    title: 'The Glamour Suite 2',
    price: 1629,
    recurringType: RecurringType.EveryDay,
    dateStart: "2023-03-16",
    hoursStart: "13:00:00",
    hoursEnd: "16:00:00",
    endRepeatDate: "2023-03-22", // either
  },
  {
    title: 'The Glamour Suite 3',
    price: 1629,
    recurringType: RecurringType.EveryDay,
    dateStart: "2023-03-16",
    hoursStart: "13:00:00",
    hoursEnd: "16:00:00",
    endRepeatTimes: 10 // either
  },
  {
    title: 'The Glamour Suite 4',
    price: 1629,
    recurringType: RecurringType.EveryWeek,
    dateStart: "2023-03-16",
    hoursStart: "13:00:00",
    hoursEnd: "16:00:00",

    endRepeatDate: "2023-05-22",
  },
  {
    title: 'The Glamour Suite 5',
    price: 1629,
    recurringType: RecurringType.EveryWeek,
    dateStart: "2023-03-16",
    hoursStart: "13:00:00",
    hoursEnd: "16:00:00",
    endRepeatTimes: 7
  },
  {
    title: 'The Glamour Suite 6',
    price: 1629,
    recurringType: RecurringType.EveryMonth,
    dateStart: "2023-03-16",
    hoursStart: "07:00:00",
    hoursEnd: "16:00:00",

    endRepeatDate: "2023-09-22", // either
  },
  {
    title: 'The Glamour Suite 7',
    price: 1629,
    recurringType: RecurringType.EveryMonth,
    dateStart: "2023-03-16",
    hoursStart: "13:00:00",
    hoursEnd: "16:00:00",
    endRepeatTimes: 4
  }
]

export const SERVICE_FEATURES = [
  {
    img: icon1,
    title: 'Billing and Coding:',
    description: 'Our team ensures accurate coding and timely submission of claims to maximise revenue for healthcare providers. We provide:',
    liLines: [
      'Comprehensive billing and coding services',
      'Detailed claim submission and follow-up',
      'Continuous training and updates for billing regulations',
      'Assistance with patient billing and collections',
      'Customized reports and analytics for financial management'
    ]
  },
  {
    img: icon2,
    title: 'Marketing and Branding',
    description: 'Our team provides comprehensive marketing solutions to help you stand out in a crowded market and reach your ideal clients.',
    liLines: [
      'Social Media Management- Our team manages your social media accounts to increase engagement and grow your audience',
      'Customer Experience',
      'Procurement',
      'Mergers and Acquisitions'
    ]
  },
  {
    img: icon3,
    title: 'Human Resources:',
    description: 'We offer all kinds of programming services from developing to maintaining the existed.',
    liLines: [
      'Advanced Analytics',
      'Digital Marketing',
      'Organization',
      'New Business Innovation'
    ]
  },
  {
    img: icon1,
    title: 'Training and Education',
    description: 'We actively pursue the right balance between functionality and aesthetics.',
    liLines: [
      'Enterprise Technology',
      'Private Equity',
      'Learning & Development',
      'Sustainability'
    ]
  },
  {
    img: icon2,
    title: 'Facility Management',
    description: 'We stay lean and help your product do one thing well - buy and sell.',
    liLines: [
      'Cost Transformation',
      'Customer Experience',
      'Procurement',
      'Mergers and Acquisitions'
    ]
  },
  {
    img: icon3,
    title: 'IT Support',
    description: 'We offer all kinds of programming services from developing to maintaining the existed.',
    liLines: [
      'Advanced Analytics',
      'Digital Marketing',
      'Organization',
      'New Business Innovation'
    ]
  }
];
