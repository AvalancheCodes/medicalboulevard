import icon1 from "../public/images/services/features/icon1.svg";
import icon2 from "../public/images/services/features/icon2.svg";
import icon3 from "../public/images/services/features/icon3.svg";
import RecurringType from "../core/shared/entities/enums/RecurringType";
import IRoomEntity from "../core/shared/entities/IRoomEntity";
import IMedicalSpaceCoordinatorEntity from "../core/shared/entities/IMedicalSpaceCoordinatorEntity";
import { EntityWithId } from "../core/shared/entities/utils/EntityWithId";

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

export const SERVICES_FLEXIBLE_SPACE_AND_SCHEDULING_STEPS_ITEMS = [
  {
    title: "Discovery Phase",
    description: "In the initial discovery phase, we'll work with you to understand your practice's unique values, personality, and target audience. This will help us develop a customised branding and marketing strategy that reflects your practice's vision and resonates with your ideal patients"
  },
  {
    title: "Website Design and Development",
    description: "A well-designed website is essential for establishing your practice's online presence. We'll create a custom website that showcases your unique offerings and provides a seamless user experience for your patients"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Our SEO services will improve your practice's visibility on search engines, making it easier for potential patients to find you online. We'll optimise your website for relevant keywords, build quality backlinks, and continuously monitor and refine your SEO strategy to keep you ahead of the competition"
  },
  {
    title: "Social Media Marketing",
    description: "Social media is a powerful tool for building brand awareness and engaging with your audience. We'll create and manage your social media accounts, post engaging content, and interact with your followers to increase your online visibility"
  },
  {
    title: "Branding and Identity",
    description: "A strong brand identity sets your practice apart from your competitors and creates a lasting impression on your patients. We'll work with you to develop a brand strategy that reflects your practice's values and personality and resonates with your target audience"
  },
  {
    title: "Analytics and Reporting",
    description: "Our analytics and reporting services will provide you with valuable insights into your practice's online performance. We'll track your website traffic, social media engagement, and other key metrics, and use this data to refine your branding and marketing strategy over time"
  },
]

export const SERVICES_FLEXIBLE_SPACE_AND_SCHEDULING_FEEDBACK_ITEMS = [
  {
    quote: "As a physician with over 20 years of experience, I can say with confidence that Medical Boulevard has been an invaluable resource in helping me build and grow my practice. From the cutting-edge facilities to the exceptional support staff, every aspect of the service is top-notch.",
    authorName: "Andrea",
    authorJobTitle: "Product Manager",
    authorCompany: "Mailchimp",
    authorPhoto: "/images/avatars/30.jpg"
  },
  {
    quote: "I was thrilled to discover Medical Boulevard's MSO services. As a nurse practitioner just starting out, I needed affordable and flexible options for renting space and using medical equipment. Thanks to Medical Boulevard, I was able to build my practice and expand my services much faster than I ever thought possible",
    authorName: "John",
    authorJobTitle: "Director of Sales",
    authorCompany: "Vidados",
    authorPhoto: "/images/avatars/30.jpg"
  },
  {
    quote: "As an aesthetician, I know how important it is to have a strong brand and a compelling online presence. That's why I turned to Medical Boulevard for their expert branding and marketing services. They created a beautiful website, helped me optimize my social media accounts, and provided me with ongoing support to ensure my success.",
    authorName: "Alex",
    authorJobTitle: "Product Designer",
    authorCompany: "Capsule",
    authorPhoto: "/images/avatars/30.jpg"
  },
]

//#region MedicalSpaceCoordinators
const MDS_KRISTIN_JOHNSON: EntityWithId<IMedicalSpaceCoordinatorEntity> = {
  _id: "mds-kristin-johnson-id",
  fullName: "Kristin Johnson",
  rating: 90,
  about: "Kristin combines her real estate background and customer service skills to offer a seamless rental experience at Medical Boulevard. As our Medical Space Coordinator, she expertly guides clients and fosters lasting relationships, ensuring satisfaction in our flexible spaces.",
  photoUrl: "/images/dummy/mds-kristin-johnson.png"
}

export const MEDICAL_SPACE_COORDINATORS = [
  MDS_KRISTIN_JOHNSON
]
//#endregion MedicalSpaceCoordinators

//#region ROOMS

const SerenityRoom: EntityWithId<IRoomEntity> = {
  _id: "serenity-room-id",
  name: "Serenity Room",
  slug: "serenity-room",
  category: "Medical",
  type: "medical examination room",
  sizeSqf: 95,
  pricePerHour: 275,
  excerpt: "Elevate patient care in a spacious, sunlit setting",
  descriptionHtml: `
    <h1>
        Overview
    </h1>
                  
    <p>
      Elevate your patient care in our spacious, sunlit Serenity Suite, thoughtfully designed for medical
      professionals. This inviting atmosphere promotes a sense of comfort and trust, enhancing the overall
      treatment experience for your patients. Benefit from the room's well-equipped layout, tailored to
      support seamless consultations and procedures in a serene environment.
    </p>
    
    <p>
      <strong>Please note:</strong> While the Serenity Suite offers a wide range of amenities to support your practice, it
      does not include specialised medical equipment for specific procedures. Medical professionals are
      responsible for providing their own specialised tools and instruments as needed.
    </p>
  `,
  // TODO: Replace with actual description for this room.
  descriptionShort: "The Glamour Suite offers a luxurious experience with a spa chair, two sinks, and abundant natural light through its wide windows.",
  badges: [
    { bgColor: "#9371A3", textColor: "white", text: "Verified" },
    { bgColor: "#1E1E1E", textColor: "white", text: "New" },
  ],

  mainImageUrl: "/images/car-finder/single/gallery/01.jpg",
  extraImagesUrls: [
    '/images/car-finder/single/gallery/02.jpg',
    '/images/car-finder/single/gallery/03.jpg',
    '/images/car-finder/single/gallery/04.jpg',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",
  createdAtMs: 1607644800000
}

const TheRadianceRoom: EntityWithId<IRoomEntity> = {
  _id: "the-radiance-room-id",
  name: "The Radiance Room Room",
  slug: "radiance-room",
  category: "Medical",
  type: "medical examination room",
  sizeSqf: 85,
  pricePerHour: 250,
  excerpt: "Elevate patient care in a spacious, sunlit setting",
  descriptionHtml: `
    <h1>
        Overview
    </h1>
                  
    <p>
      Discover unparalleled sophistication in our chic Radiance Room, 
      expertly designed for discerning medical professionals. This refined and 
      inviting space inspires a sense of prestige and trust, enriching the overall 
      treatment experience for your patients. Benefit from the room's advanced layout, 
      purposefully constructed to support seamless consultations and procedures 
      in a stylish, professional setting.
    </p>
    
    <p>
      <strong>Please note:</strong> While the Rejuvenation Suite offers a wide range of amenities to support your practice, it
      does not include specialised medical equipment for specific procedures. Medical professionals are
      responsible for providing their own specialised tools and instruments as needed.
    </p>
  `,
  descriptionShort: "TODO: add description short",
  badges: [
    { bgColor: "#9371A3", textColor: "white", text: "Verified" },
    { bgColor: "#1E1E1E", textColor: "white", text: "New" },
  ],

  mainImageUrl: "/images/car-finder/single/gallery/01.jpg",
  extraImagesUrls: [
    '/images/car-finder/single/gallery/02.jpg',
    '/images/car-finder/single/gallery/03.jpg',
    '/images/car-finder/single/gallery/04.jpg',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",
  createdAtMs: 1607644800000
}

const TheRejuvenationRetreatRoom: EntityWithId<IRoomEntity> = {
  _id: "the-rejuvenation-retreat-room-id",
  name: "The Rejuvenation Retreat Room",
  slug: "rejuvenation-room",
  category: "Medical",
  type: "medical examination room",
  sizeSqf: 85,
  pricePerHour: 250,
  excerpt: "Elevate patient care in a spacious, sunlit setting",
  descriptionHtml: `
    <h1>
        Overview
    </h1>
                  
    <p>
      Experience seamless efficiency in our sleek Rejuvenation Room, meticulously crafted for medical professionals. 
      This modern and tranquil space fosters a sense of confidence and assurance, elevating the overall treatment experience 
      for your patients. Benefit from the room's state-of-the-art layout, 
      thoughtfully designed to facilitate smooth consultations and procedures in an elegant, professional environment
    </p>
    
    <p>
      <strong>Please note:</strong> While the Rejuvenation Suite offers a wide range of amenities to support your practice, it
      does not include specialised medical equipment for specific procedures. Medical professionals are
      responsible for providing their own specialised tools and instruments as needed.
    </p>
  `,
  descriptionShort: "TODO: add description short",
  badges: [
    { bgColor: "#9371A3", textColor: "white", text: "Verified" },
    { bgColor: "#1E1E1E", textColor: "white", text: "New" },
  ],

  mainImageUrl: "/images/car-finder/single/gallery/01.jpg",
  extraImagesUrls: [
    '/images/car-finder/single/gallery/02.jpg',
    '/images/car-finder/single/gallery/03.jpg',
    '/images/car-finder/single/gallery/04.jpg',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",

  createdAtMs: 1607644800000
}

export const ROOMS = [
  SerenityRoom,
  TheRadianceRoom,
  TheRejuvenationRetreatRoom
];

//#endregion ROOMS
