import type { PageContent } from './contentTypes';
import { solutionServicePages } from './solutionServicePages';
import { getServicesForCategory } from './solutionServices';

export const pageContents: Record<string, PageContent> = {
  // Our Solutions Landing
  solutions: {
    id: 'solutions',
    title: 'Our Solutions',
    sections: [
      {
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'We deliver comprehensive audiovisual and technology solutions designed to transform how organizations communicate, collaborate, and operate. Our integrated approach combines cutting-edge hardware, intelligent software, and expert services to create seamless experiences across every environment.',
          },
          {
            type: 'paragraph',
            text: 'From boardrooms to classrooms, from manufacturing floors to convention centers, our solutions empower teams to work smarter, connect better, and achieve more.',
          },
        ],
      },
      {
        id: 'solution-categories',
        title: 'Solution Categories',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Workplace Collaboration & Video Conferencing Technologies',
              'Integrated Professional Sound Systems',
              'Display & Visualization Solutions',
              'Enterprise Networking & Connectivity Solutions',
              'Intelligent Systems & Control Platforms',
              'System Lifecycle & Support Solutions',
            ],
          },
        ],
      },
    ],
  },

  // Solutions Subpages with service links
  'workplace-collaboration': {
    id: 'workplace-collaboration',
    title: 'Workplace Collaboration & Video Conferencing Technologies',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Transform your meeting spaces with state-of-the-art video conferencing and collaboration technologies. Our solutions enable seamless communication across distributed teams, ensuring every participant can contribute effectively regardless of location.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Our Services',
        blocks: [
          {
            type: 'link-list',
            links: getServicesForCategory('workplace-collaboration').map(service => ({
              label: service.title,
              to: service.routePath,
            })),
          },
        ],
      },
      {
        id: 'offerings',
        title: 'Key Offerings',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Microsoft Teams Rooms and Zoom Rooms certified solutions',
              'High-definition PTZ cameras and intelligent framing systems',
              'Professional-grade speakerphones and microphone arrays',
              'Interactive whiteboards and wireless presentation systems',
              'Unified communications platforms integration',
              'Room scheduling and analytics solutions',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Benefits',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Enhanced remote collaboration and productivity',
              'Reduced travel costs and carbon footprint',
              'Improved meeting equity for hybrid teams',
              'Simplified user experience with one-touch join',
              'Enterprise-grade security and reliability',
            ],
          },
        ],
      },
    ],
  },

  'professional-sound': {
    id: 'professional-sound',
    title: 'Integrated Professional Sound Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Deliver crystal-clear audio experiences with our professional sound system solutions. From conference rooms to auditoriums, we design and deploy acoustic environments that ensure every word is heard with perfect clarity.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Our Services',
        blocks: [
          {
            type: 'link-list',
            links: getServicesForCategory('professional-sound').map(service => ({
              label: service.title,
              to: service.routePath,
            })),
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Sound Solutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Ceiling and wall-mounted speaker systems',
              'Wireless microphone systems and lapel mics',
              'Digital signal processors and audio mixers',
              'Acoustic treatment and sound masking',
              'Public address and emergency notification systems',
              'Audio conferencing and voice lift systems',
            ],
          },
        ],
      },
      {
        id: 'applications',
        title: 'Applications',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our professional sound systems serve diverse environments including corporate boardrooms, training facilities, houses of worship, performing arts centers, retail spaces, and hospitality venues.',
          },
        ],
      },
    ],
  },

  'display-visualization': {
    id: 'display-visualization',
    title: 'Display & Visualization Solutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Create stunning visual experiences with our comprehensive display and visualization solutions. We provide everything from single displays to massive video walls, ensuring your content makes maximum impact.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Our Services',
        blocks: [
          {
            type: 'link-list',
            links: getServicesForCategory('display-visualization').map(service => ({
              label: service.title,
              to: service.routePath,
            })),
          },
        ],
      },
      {
        id: 'technologies',
        title: 'Display Technologies',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'LED video walls and fine-pitch LED displays',
              'Large-format LCD and OLED displays',
              'Interactive touchscreen displays and kiosks',
              'Projection systems and edge-blending solutions',
              'Digital signage and content management platforms',
              'Control room and command center displays',
            ],
          },
        ],
      },
      {
        id: 'features',
        title: 'Key Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '4K and 8K ultra-high-definition resolution',
              'HDR and wide color gamut support',
              'Seamless video wall processing',
              'Remote monitoring and management',
              'Energy-efficient operation',
            ],
          },
        ],
      },
    ],
  },

  'networking-connectivity': {
    id: 'networking-connectivity',
    title: 'Enterprise Networking & Connectivity Solutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Build a robust, secure, and scalable network infrastructure that supports your AV systems and business operations. Our networking solutions ensure reliable connectivity and optimal performance for all your technology investments.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Our Services',
        blocks: [
          {
            type: 'link-list',
            links: getServicesForCategory('networking-connectivity').map(service => ({
              label: service.title,
              to: service.routePath,
            })),
          },
        ],
      },
      {
        id: 'networking-services',
        title: 'Networking Services',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and fiber optic infrastructure',
              'Managed network switches and routers',
              'Wireless access points and coverage optimization',
              'Network security and firewall solutions',
              'AV-over-IP and video distribution systems',
              'Network monitoring and performance management',
            ],
          },
        ],
      },
      {
        id: 'standards',
        title: 'Industry Standards',
        blocks: [
          {
            type: 'paragraph',
            text: 'We design and implement networks following industry best practices including Dante, AVB, NDI, and SDVoE standards, ensuring interoperability and future-proof scalability.',
          },
        ],
      },
    ],
  },

  'intelligent-systems': {
    id: 'intelligent-systems',
    title: 'Intelligent Systems & Control Platforms',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Simplify complex technology environments with intelligent control systems that put power at your fingertips. Our automation and control solutions make sophisticated AV systems easy to operate for users of all technical levels.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Our Services',
        blocks: [
          {
            type: 'link-list',
            links: getServicesForCategory('intelligent-systems').map(service => ({
              label: service.title,
              to: service.routePath,
            })),
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Control Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Centralized AV control systems and touch panels',
              'Room automation and environmental controls',
              'Scheduling and resource management integration',
              'Mobile device control and BYOD support',
              'Voice control and AI-powered automation',
              'Custom user interfaces and presets',
            ],
          },
        ],
      },
      {
        id: 'platforms',
        title: 'Leading Platforms',
        blocks: [
          {
            type: 'paragraph',
            text: 'We partner with industry leaders including Crestron, Extron, AMX, and QSC to deliver reliable, scalable control solutions tailored to your specific requirements.',
          },
        ],
      },
    ],
  },

  'lifecycle-support': {
    id: 'lifecycle-support',
    title: 'System Lifecycle & Support Solutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Maximize your technology investment with comprehensive lifecycle management and support services. From initial design through ongoing maintenance, we ensure your systems deliver consistent performance and value.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Our Services',
        blocks: [
          {
            type: 'link-list',
            links: getServicesForCategory('lifecycle-support').map(service => ({
              label: service.title,
              to: service.routePath,
            })),
          },
        ],
      },
      {
        id: 'support-services',
        title: 'Support Services',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Consultation and system design services',
              'Professional installation and commissioning',
              'User training and documentation',
              '24/7 helpdesk and remote support',
              'Preventive maintenance programs',
              'System upgrades and technology refresh planning',
            ],
          },
        ],
      },
      {
        id: 'commitment',
        title: 'Our Commitment',
        blocks: [
          {
            type: 'paragraph',
            text: 'We stand behind every installation with responsive support, proactive monitoring, and continuous optimization to ensure your systems perform at their best throughout their entire lifecycle.',
          },
        ],
      },
    ],
  },

  // Industries Landing
  industries: {
    id: 'industries',
    title: 'Industries We Serve',
    sections: [
      {
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our audiovisual and technology solutions serve diverse industries, each with unique communication and collaboration needs. We bring deep vertical expertise and proven methodologies to deliver solutions that address industry-specific challenges and opportunities.',
          },
        ],
      },
      {
        id: 'sectors',
        title: 'Industry Sectors',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Corporate & Enterprise Offices',
              'Education & Digital Classrooms',
              'Healthcare Facilities',
              'Manufacturing & Industrial Facilities',
              'Government & Public Sector',
              'Hospitality & Convention Centers',
              'Banking & Financial Institutions',
              'Training Centers & Skill Development Institutes',
              'Retail & Commercial Spaces',
              'Live Events & Corporate Events',
            ],
          },
        ],
      },
    ],
  },

  // Industry Subpages
  'corporate-enterprise': {
    id: 'corporate-enterprise',
    title: 'Corporate & Enterprise Offices',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Empower your workforce with technology solutions that enhance collaboration, productivity, and employee experience. From executive boardrooms to open collaboration spaces, we create environments where teams thrive.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Corporate Solutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Executive boardrooms with premium AV systems',
              'Huddle rooms and collaboration spaces',
              'Town hall and all-hands meeting facilities',
              'Digital signage and corporate communications',
              'Visitor management and reception displays',
              'Hybrid workplace technology enablement',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Business Benefits',
        blocks: [
          {
            type: 'paragraph',
            text: 'Improve meeting effectiveness, reduce real estate costs through flexible space utilization, attract and retain top talent with modern workplace technology, and support distributed teams with seamless collaboration tools.',
          },
        ],
      },
    ],
  },

  education: {
    id: 'education',
    title: 'Education & Digital Classrooms',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Transform learning environments with technology that engages students, empowers educators, and enables innovative teaching methodologies. Our education solutions support in-person, remote, and hybrid learning models.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Education Technology',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Interactive displays and smart boards',
              'Lecture capture and video streaming systems',
              'Distance learning and hybrid classroom solutions',
              'Campus-wide digital signage networks',
              'Auditorium and performance venue AV systems',
              'Learning management system integration',
            ],
          },
        ],
      },
      {
        id: 'outcomes',
        title: 'Learning Outcomes',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enhance student engagement and participation, support diverse learning styles, enable flexible teaching methods, improve accessibility for all learners, and prepare students for technology-driven careers.',
          },
        ],
      },
    ],
  },

  healthcare: {
    id: 'healthcare',
    title: 'Healthcare Facilities',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Support better patient outcomes and operational efficiency with healthcare-specific AV and communication solutions. Our systems meet stringent healthcare standards while improving care delivery and staff collaboration.',
          },
        ],
      },
      {
        id: 'applications',
        title: 'Healthcare Applications',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Telemedicine and remote consultation systems',
              'Operating room integration and surgical displays',
              'Patient room entertainment and education',
              'Medical imaging display and PACS integration',
              'Emergency department communication systems',
              'Staff training and simulation facilities',
            ],
          },
        ],
      },
      {
        id: 'compliance',
        title: 'Healthcare Standards',
        blocks: [
          {
            type: 'paragraph',
            text: 'All solutions comply with HIPAA privacy requirements, infection control protocols, and medical-grade equipment standards, ensuring patient safety and regulatory compliance.',
          },
        ],
      },
    ],
  },

  manufacturing: {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Facilities',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Improve operational efficiency, safety, and communication across your manufacturing operations with industrial-grade AV and communication systems designed for demanding production environments.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Industrial Solutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Production floor digital signage and KPI displays',
              'Mass notification and emergency alert systems',
              'Remote expert collaboration and troubleshooting',
              'Training room and safety briefing facilities',
              'Quality control and inspection displays',
              'Warehouse and logistics communication systems',
            ],
          },
        ],
      },
      {
        id: 'features',
        title: 'Industrial Features',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ruggedized equipment for harsh environments, high-brightness displays for ambient light conditions, noise-canceling audio systems, and integration with industrial control systems and SCADA platforms.',
          },
        ],
      },
    ],
  },

  government: {
    id: 'government',
    title: 'Government & Public Sector',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Serve citizens effectively with secure, reliable AV and communication systems designed for government facilities. Our solutions support public meetings, emergency operations, and inter-agency collaboration while meeting strict security requirements.',
          },
        ],
      },
      {
        id: 'applications',
        title: 'Government Applications',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Council chambers and public meeting spaces',
              'Emergency operations centers',
              'Courtroom AV and evidence presentation',
              'Secure video conferencing for classified environments',
              'Public information displays and kiosks',
              'Training facilities for first responders',
            ],
          },
        ],
      },
      {
        id: 'compliance',
        title: 'Security & Compliance',
        blocks: [
          {
            type: 'paragraph',
            text: 'All government solutions meet applicable security standards including FIPS, TAA compliance, and cybersecurity requirements for federal, state, and local agencies.',
          },
        ],
      },
    ],
  },

  hospitality: {
    id: 'hospitality',
    title: 'Hospitality & Convention Centers',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Create memorable guest experiences with hospitality AV solutions that support events, meetings, and entertainment. Our systems provide the flexibility and reliability required for hotels, resorts, and convention centers.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Hospitality Solutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Ballroom and meeting room AV systems',
              'Digital signage and wayfinding',
              'In-room entertainment and IPTV',
              'Outdoor AV for pool and patio areas',
              'Restaurant and bar audio systems',
              'Event production and technical services',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Guest Benefits',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enhance guest satisfaction, increase event bookings, provide seamless technology experiences, and differentiate your property with state-of-the-art AV capabilities.',
          },
        ],
      },
    ],
  },

  banking: {
    id: 'banking',
    title: 'Banking & Financial Institutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Support secure, professional communication in financial environments with AV solutions designed for banking and financial services. Our systems enable effective client meetings, training, and operations while maintaining the highest security standards.',
          },
        ],
      },
      {
        id: 'applications',
        title: 'Banking Applications',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Executive boardrooms and client meeting rooms',
              'Trading floor communication systems',
              'Branch video banking and teller assist',
              'Training centers and financial education',
              'Digital signage for rates and promotions',
              'Secure video conferencing for sensitive discussions',
            ],
          },
        ],
      },
      {
        id: 'security',
        title: 'Security & Compliance',
        blocks: [
          {
            type: 'paragraph',
            text: 'All banking solutions incorporate encryption, access controls, and audit logging to meet financial industry security requirements and regulatory compliance standards.',
          },
        ],
      },
    ],
  },

  'training-centers': {
    id: 'training-centers',
    title: 'Training Centers & Skill Development Institutes',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enable effective learning and skill development with AV technology designed for training environments. Our solutions support instructor-led training, hands-on labs, and remote learning scenarios.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Training Solutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Interactive training rooms with collaboration tools',
              'Lecture capture and content recording',
              'Simulation and virtual reality training',
              'Remote training and webinar capabilities',
              'Assessment and testing systems',
              'Learning management system integration',
            ],
          },
        ],
      },
      {
        id: 'outcomes',
        title: 'Training Outcomes',
        blocks: [
          {
            type: 'paragraph',
            text: 'Improve knowledge retention, support diverse learning styles, enable scalable training delivery, track learner progress, and reduce training costs through technology-enabled instruction.',
          },
        ],
      },
    ],
  },

  retail: {
    id: 'retail',
    title: 'Retail & Commercial Spaces',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Engage customers and drive sales with retail AV solutions that create immersive shopping experiences. Our digital signage, audio, and interactive display solutions help retailers communicate effectively and enhance the customer journey.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Retail Solutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Digital signage and promotional displays',
              'Interactive product displays and kiosks',
              'In-store audio and background music',
              'Video walls and experiential displays',
              'Queue management and wayfinding',
              'Window displays and outdoor signage',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Retail Benefits',
        blocks: [
          {
            type: 'paragraph',
            text: 'Increase customer engagement, promote products effectively, create memorable brand experiences, drive impulse purchases, and adapt messaging in real-time based on inventory and promotions.',
          },
        ],
      },
    ],
  },

  'live-events': {
    id: 'live-events',
    title: 'Live Events & Corporate Events',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Deliver impactful live events with professional AV production services and equipment. From corporate conferences to product launches, our event solutions ensure your message reaches audiences with maximum impact.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Event Services',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Event production and technical direction',
              'LED video walls and projection mapping',
              'Professional audio and concert sound',
              'Stage lighting and intelligent lighting',
              'Live streaming and hybrid event production',
              'Event recording and post-production',
            ],
          },
        ],
      },
      {
        id: 'expertise',
        title: 'Event Expertise',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our experienced event production team handles everything from initial concept through load-out, ensuring flawless execution and memorable experiences for your attendees.',
          },
        ],
      },
    ],
  },

  // About Us
  about: {
    id: 'about',
    title: 'About Us',
    sections: [
      {
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions is a leading provider of audiovisual and technology solutions, dedicated to transforming how organizations communicate, collaborate, and operate. With deep expertise and a commitment to excellence, we deliver innovative solutions that empower our clients to achieve their goals.',
          },
        ],
      },
      {
        id: 'sections',
        title: 'Learn More',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Our Organization',
              'Why Choose Us',
              'Case Studies',
              'Careers',
            ],
          },
        ],
      },
    ],
  },

  'our-organization': {
    id: 'our-organization',
    title: 'Our Organization',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Founded with a vision to revolutionize workplace technology, Speedlight Infosolutions has grown into a trusted partner for organizations across India. Our team of certified professionals brings decades of combined experience in AV design, integration, and support.',
          },
        ],
      },
      {
        id: 'values',
        title: 'Our Values',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Excellence in every project, from design to delivery',
              'Innovation through continuous learning and technology adoption',
              'Partnership with clients built on trust and transparency',
              'Integrity in all business practices and relationships',
              'Sustainability through energy-efficient and long-lasting solutions',
            ],
          },
        ],
      },
      {
        id: 'team',
        title: 'Our Team',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our team includes CTS-certified designers, manufacturer-trained technicians, and experienced project managers who work collaboratively to deliver exceptional results. We invest in ongoing training to ensure our team stays at the forefront of AV technology.',
          },
        ],
      },
    ],
  },

  'why-choose-us': {
    id: 'why-choose-us',
    title: 'Why Choose Us',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Choosing the right AV partner is critical to your success. Speedlight Infosolutions stands out through our comprehensive approach, technical expertise, and unwavering commitment to client satisfaction.',
          },
        ],
      },
      {
        id: 'differentiators',
        title: 'What Sets Us Apart',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'End-to-end solutions from consultation through ongoing support',
              'Certified partnerships with leading technology manufacturers',
              'Proven track record across diverse industries and applications',
              'Responsive support with local presence and 24/7 availability',
              'Scalable solutions that grow with your organization',
              'Competitive pricing without compromising quality',
            ],
          },
        ],
      },
      {
        id: 'approach',
        title: 'Our Approach',
        blocks: [
          {
            type: 'paragraph',
            text: 'We begin every engagement by understanding your unique requirements, challenges, and goals. Our consultative approach ensures we recommend solutions that deliver real business value, not just the latest technology.',
          },
        ],
      },
    ],
  },

  'case-studies': {
    id: 'case-studies',
    title: 'Case Studies',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Explore how Speedlight Infosolutions has helped organizations across industries transform their communication and collaboration capabilities. Our case studies showcase real-world implementations and the measurable results achieved.',
          },
        ],
      },
      {
        id: 'featured',
        title: 'Featured Projects',
        blocks: [
          {
            type: 'paragraph',
            text: 'From Fortune 500 corporate headquarters to educational institutions and healthcare facilities, our portfolio demonstrates our ability to deliver complex AV solutions on time and within budget.',
          },
        ],
      },
      {
        id: 'contact',
        title: 'Request Case Studies',
        blocks: [
          {
            type: 'paragraph',
            text: 'Contact us to receive detailed case studies relevant to your industry and application. We\'re happy to provide references and arrange site visits to see our solutions in action.',
          },
        ],
      },
    ],
  },

  careers: {
    id: 'careers',
    title: 'Careers',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Join a dynamic team of AV professionals passionate about technology and client success. Speedlight Infosolutions offers rewarding career opportunities for talented individuals who want to make an impact in the AV industry.',
          },
        ],
      },
      {
        id: 'opportunities',
        title: 'Career Opportunities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'AV System Designers and Engineers',
              'Installation Technicians and Programmers',
              'Project Managers and Coordinators',
              'Sales and Business Development Professionals',
              'Technical Support Specialists',
              'Service and Maintenance Technicians',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Why Work With Us',
        blocks: [
          {
            type: 'paragraph',
            text: 'We offer competitive compensation, comprehensive benefits, ongoing training and certification opportunities, and a collaborative work environment where your contributions are valued and recognized.',
          },
        ],
      },
    ],
  },

  // Contact Us
  contact: {
    id: 'contact',
    title: 'Contact Us',
    sections: [
      {
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ready to transform your communication and collaboration capabilities? Contact Speedlight Infosolutions today to discuss your requirements and discover how our solutions can help you achieve your goals.',
          },
        ],
      },
      {
        id: 'contact-info',
        title: 'Get In Touch',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our team is ready to answer your questions, provide consultations, and develop customized solutions for your organization. Reach out via phone, email, or the contact form below.',
          },
        ],
      },
      {
        id: 'locations',
        title: 'Our Locations',
        blocks: [
          {
            type: 'paragraph',
            text: 'With offices and service coverage across India, we provide local support backed by national resources. Contact us to connect with your nearest Speedlight Infosolutions office.',
          },
        ],
      },
    ],
  },

  // Merge in all service pages
  ...solutionServicePages,
};
