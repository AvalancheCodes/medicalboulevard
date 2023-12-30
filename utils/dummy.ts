import icon1 from "../public/images/services/features/icon1.svg";
import icon2 from "../public/images/services/features/icon2.svg";
import icon3 from "../public/images/services/features/icon3.svg";
import RecurringType from "../core/shared/entities/enums/RecurringType";
import IRoomEntity from "../core/shared/entities/IRoomEntity";
import IMedicalSpaceCoordinatorEntity from "../core/shared/entities/IMedicalSpaceCoordinatorEntity";
import { EntityWithId } from "../core/shared/entities/utils/EntityWithId";

export const HOMEPAGE_PROCESS_STEPS = [
  {
    title: "Choose Your Ideal Medical Space",
    text: "Browse our gallery of flexible medical spaces and filter by type to find your perfect fit. Our spaces are available for rent on an hourly basis with a minimum time block of four hours, providing the flexibility you need to elevate your practice.",
    url: "/services",
    urlText: "Services",
  },
  {
    title: "Check Availability and Pricing",
    text: "Once you've found the right property, simply fill out our easy-to-use online form to check availability and pricing. We'll get back to you within 24 hours with all the information you need to move forward with your rental.",
    url: "/features",
    urlText: "Features",
  },
  {
    title: "Schedule a Tour or Virtual Tour",
    text: "If the property you requested is available, we'll work with you to schedule a tour or virtual tour so you can see it for yourself. If it's not available, we'll help you find a time that works with your schedule. With our simple 3-step process, renting your ideal medical property has never been easier.",
    url: "/dashboard",
    urlText: "Dashboard",
  }
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
    quote: "I was thrilled to discover Medical Boulevard's MSO services. As a nurse practitioner just starting out, I needed affordable and flexible options for renting property and using medical equipment. Thanks to Medical Boulevard, I was able to build my practice and expand my services much faster than I ever thought possible",
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
  category: "medical",
  type: "medical examination room",
  sizeSqf: 95,
  pricePerHour: 275,
  excerpt: "Spacious, sunlit property",
  hasDoubleSink: true,
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
  descriptionShort: "The Glamour Suite offers a luxurious experience with a spa chair, two sinks, and abundant natural light through its wide windows.",
  badges: [
    { bgColor: "#9371A3", textColor: "white", text: "Verified" },
    { bgColor: "#1E1E1E", textColor: "white", text: "New" },
  ],

  mainImageUrl: "/images/rooms/serenity-1.png",
  extraImagesUrls: [
    '/images/rooms/serenity-3.png',
    '/images/rooms/serenity-2.png',
    '/images/rooms/serenity-4.png',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",
  createdAtMs: 1607644800000,
  rentalDetails: {
    hourlyRent: 275,
    type: "medical examination room",
    area: 210,
    totalHours: 4,
    startDate: "2023-02-14",
    endDate: "2023-02-14",
    guests: 3,
    parkingValidation: 2,
    totalRent: 400, // Calculated based on hourlyRent * totalHours
  }
}

const TeleMedicineRoom: EntityWithId<IRoomEntity> = {
  _id: "the-telemedicine-room",
  name: "The Telemedicine Room",
  slug: "the-telemedicine-room",
  category: "business",
  type: "medical business room",
  sizeSqf: 105,
  pricePerHour: 125,
  excerpt: "Consult, Create, Broadcast",
  descriptionHtml: `
    <h1>
        Overview
    </h1>
                  
    <p>
      Experience the future of healthcare with Medical Boulevard's professional telemedicine station. 
      Designed for virtual appointments, our telemedicine room provides a seamless interface for 
      remote consultations, ensuring that you can deliver high-quality care to your patients, 
      no matter where they are. Equipped with state-of-the-art technology, this space 
      allows healthcare professionals to connect with their patients in a 
      secure and convenient virtual environment. With Medical Boulevard, 
      you're not just renting a room, you're embracing the future of healthcare delivery.
    </p>
    
    
    <div className='gear-description'>
    <h2>Telemedicine Room Gear</h2>
      <ul>
        <li>
          <strong>Dell Outlet Precision T7820:</strong> This powerful workstation is designed to meet the demanding needs of healthcare professionals. It features an Intel Xeon Gold 6248R Processor, 2TB PCIe M.2 NVMe Class 40 Solid State Drive, and exceptional processing power and storage capacity.
        </li>
        <li>
          <strong>LG Superwide Monitor (49"):</strong> The large and immersive 49-inch monitor provides healthcare professionals with a wide viewing area, ideal for medical records, diagnostic images, and telemedicine sessions. Its stunning display ensures clarity and detail.
        </li>
      </ul>
      <p>
        In addition to its telemedicine capabilities, this station empowers healthcare professionals to utilize the advanced gear for editing and broadcasting their work to the outside world. The Dell workstation's precision and performance enable efficient video editing, research, and presentations. The LG Superwide Monitor offers an immersive viewing experience, perfect for showcasing their work with clarity and impact.
      </p>
      <p>
        Leveraging this cutting-edge technology, healthcare professionals can deliver exceptional patient care, collaborate with colleagues, and share their expertise with the broader healthcare community. The telemedicine room serves as a versatile hub where medical professionals can conduct remote consultations, as well as engage in productive editing and broadcasting activities.
      </p>
    </div>

  `,
  descriptionShort: "Tech-enabled telemedicine room empowers healthcare professionals to collaborate, edit, and broadcast their work seamlessly.",
  badges: [
    { bgColor: "#9371A3", textColor: "white", text: "Verified" },
    { bgColor: "#1E1E1E", textColor: "white", text: "New" },
  ],

  mainImageUrl: "/images/rooms/tele-med.png",
  extraImagesUrls: [
    '/images/rooms/tele-med-2.png',
    '/images/rooms/tele-med-3.png',
    '/images/rooms/tele-med-4.png',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",

  createdAtMs: 1607644800000,
  rentalDetails: {
    hourlyRent: 150,
    type: "medical examination room",
    area: 110,
    totalHours: 2,
    startDate: "2023-02-14",
    endDate: "2023-02-14",
    guests: 8,
    parkingValidation: 2,
    totalRent: 400, // Calculated based on hourlyRent * totalHours
  }
}

const ConferenceRoom: EntityWithId<IRoomEntity> = {
  _id: "the-conference-room",
  name: "The Conference Room",
  slug: "the-conference-room",
  category: "business",
  type: "medical business room",
  sizeSqf: 210,
  pricePerHour: 150,
  excerpt: "Versatile, Professional, Convenient, Modern",
  descriptionHtml: `
    <h1>
        Overview
    </h1>
                  
   <p>Experience the versatility of our fully equipped conference room at Medical Boulevard, 
   located in the heart of Beverly Hills. This on-demand space can comfortably accommodate 
   up to seven people, making it an ideal setting for a variety of professional interactions. 
   Whether you're conducting staff interviews, hosting a small conference, or running a 
   training class, our conference room provides the perfect environment to 
   facilitate productive and meaningful discussions.</p>

    <p>Designed with the needs of healthcare professionals in mind, our conference room goes 
    beyond the traditional meeting space. It can be transformed into a patient consultation 
    room for group sessions, a networking hub for industry events, or a media center for 
    press briefings. With state-of-the-art technology, it also supports teleconferencing, 
    allowing you to connect with colleagues or patients remotely. At Medical Boulevard, 
    we provide the space for you to focus on what matters most - 
    delivering exceptional care to your patients.</p>
    
    <ul>
      <li>Conduct staff interviews</li>
      <li>Host small conferences or meetings</li>
      <li>Run training classes or workshops</li>
      <li>Facilitate patient group consultations</li>
      <li>Organize networking events</li>
      <li>Hold media briefings or press conferences</li>
      <li>Support teleconferencing</li>
      <li>Host product demonstrations or informational sessions</li>
    </ul>

  `,
  descriptionShort: "Versatile conference room in Beverly Hills for meetings, training, patient consultations, networking events, and teleconferencing in healthcare",
  badges: [
    { bgColor: "#9371A3", textColor: "white", text: "Verified" },
    { bgColor: "#1E1E1E", textColor: "white", text: "New" },
  ],

  mainImageUrl: "/images/rooms/conference-1.png",
  extraImagesUrls: [
    '/images/rooms/conference-2.png',
    '/images/rooms/conference-3.png',
    '/images/rooms/conference-4.png',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",

  createdAtMs: 1607644800000,
  //   Rental hours details
  rentalDetails: {
    hourlyRent: 50,
    type: "medical examination room",
    area: 210,
    totalHours: 8,
    startDate: "2023-02-14",
    endDate: "2023-02-14",
    guests: 8,
    parkingValidation: 2,
    totalRent: 400, // Calculated based on hourlyRent * totalHours
  }
}

const TheRejuvenationRetreatRoom: EntityWithId<IRoomEntity> = {
  _id: "the-rejuvenation-retreat-room-id",
  name: "The Rejuvenation Retreat Room",
  slug: "the-rejuvenation-room",
  category: "medical",
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

  mainImageUrl: "/images/rooms/rejuvenation-1.png",
  extraImagesUrls: [
    '/images/rooms/rejuvination-2.png',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",

  createdAtMs: 1607644800000,
  rentalDetails: {
    hourlyRent: 50,
    type: "medical examination room",
    area: 210,
    totalHours: 8,
    startDate: "2023-02-14",
    endDate: "2023-02-14",
    guests: 8,
    parkingValidation: 2,
    totalRent: 400, // Calculated based on hourlyRent * totalHours
  }
}

const TheRadianceRoom: EntityWithId<IRoomEntity> = {
  _id: "the-radiance-room-id",
  name: "The Radiance Room",
  slug: "radiance-room",
  category: "medical",
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

  mainImageUrl: "/images/rooms/med-conference.png",
  extraImagesUrls: [
    '/images/car-finder/single/gallery/02.jpg',
    '/images/car-finder/single/gallery/03.jpg',
    '/images/car-finder/single/gallery/04.jpg',
  ],

  amenitiesIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  medicalSpaceCoordinatorId: "mds-kristin-johnson-id",
  createdAtMs: 1607644800000
}

const TheSpaRoom: EntityWithId<IRoomEntity> = {
  _id: "the-spa-room-id",
  name: "The SPA Room",
  slug: "spa-room",
  category: "medical",
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

  mainImageUrl: "/images/rooms/med-conference.png",
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
  TeleMedicineRoom,
  ConferenceRoom,
  TheRejuvenationRetreatRoom,
  TheRadianceRoom,
  TheSpaRoom
];

//#endregion ROOMS
