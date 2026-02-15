import type { PageContent } from './contentTypes';

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

  // Solutions Subpages
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
            text: 'Serve citizens better and improve government operations with secure, reliable AV and communication solutions. We understand the unique requirements of public sector organizations and deliver compliant, mission-critical systems.',
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
              'Council chambers and legislative facilities',
              'Emergency operations centers and command rooms',
              'Public safety and 911 dispatch centers',
              'Courtroom technology and evidence presentation',
              'Citizen service centers and public information displays',
              'Secure video conferencing for classified environments',
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
            text: 'All solutions meet government security standards including FIPS compliance, TAA compliance for federal procurement, and support for classified and sensitive information handling.',
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
            text: 'Create memorable guest experiences and maximize event revenue with flexible, high-performance AV solutions for hotels, resorts, and convention facilities. Our systems adapt to any event type and scale.',
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
              'Portable and modular event technology',
              'Digital signage and wayfinding displays',
              'In-room entertainment and casting solutions',
              'Outdoor venue sound and projection',
              'Event management and control systems',
            ],
          },
        ],
      },
      {
        id: 'advantages',
        title: 'Competitive Advantages',
        blocks: [
          {
            type: 'paragraph',
            text: 'Increase event bookings with state-of-the-art technology, reduce setup time and labor costs, provide turnkey solutions for event planners, and differentiate your venue in a competitive market.',
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
            text: 'Support secure, efficient operations and enhance customer experience with specialized AV and communication solutions for financial institutions. Our systems meet stringent security and compliance requirements.',
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
              'Executive briefing centers and board rooms',
              'Trading floor communication and display systems',
              'Branch digital signage and queue management',
              'Video banking and remote teller solutions',
              'Training facilities and learning centers',
              'Secure video conferencing for sensitive discussions',
            ],
          },
        ],
      },
      {
        id: 'security',
        title: 'Financial Security',
        blocks: [
          {
            type: 'paragraph',
            text: 'All solutions incorporate bank-grade security, encrypted communications, audit logging, and compliance with financial industry regulations including SOX, PCI-DSS, and regional banking standards.',
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
            text: 'Deliver effective training programs with technology that enhances learning outcomes and instructor effectiveness. Our solutions support diverse training methodologies from hands-on workshops to virtual instructor-led training.',
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
              'Simulation and virtual reality training systems',
              'Video recording and playback for skills assessment',
              'Remote training and webinar platforms',
              'Computer lab and technical training facilities',
              'Assessment and testing technology',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Training Benefits',
        blocks: [
          {
            type: 'paragraph',
            text: 'Improve knowledge retention and skill development, support blended learning approaches, enable remote and distributed training delivery, reduce training costs and time-to-competency, and provide measurable learning analytics.',
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
            text: 'Enhance customer engagement and drive sales with dynamic digital experiences. Our retail technology solutions help you communicate with customers, showcase products, and create memorable brand experiences.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Retail Technology',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Digital signage and video walls',
              'Interactive product displays and kiosks',
              'In-store audio and background music systems',
              'Window displays and outdoor advertising',
              'Queue management and customer flow systems',
              'Content management and scheduling platforms',
            ],
          },
        ],
      },
      {
        id: 'impact',
        title: 'Business Impact',
        blocks: [
          {
            type: 'paragraph',
            text: 'Increase foot traffic and dwell time, promote products and special offers in real-time, enhance brand perception and customer experience, reduce perceived wait times, and gather customer analytics and insights.',
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
            text: 'Create unforgettable event experiences with professional-grade AV production services and equipment. From intimate corporate gatherings to large-scale conferences and concerts, we deliver flawless execution.',
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
              'Full-service event production and management',
              'Stage design and scenic elements',
              'Professional lighting and special effects',
              'Concert-grade sound reinforcement',
              'LED video walls and projection mapping',
              'Live streaming and hybrid event solutions',
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
            text: 'Our experienced production team handles every detail from initial concept through load-out, ensuring your event runs smoothly and achieves its objectives. We support product launches, conferences, galas, concerts, and more.',
          },
        ],
      },
    ],
  },

  // About Us Landing
  about: {
    id: 'about',
    title: 'About Us',
    sections: [
      {
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'We are a leading provider of audiovisual and technology solutions, dedicated to transforming how organizations communicate, collaborate, and connect. With decades of combined experience and a passion for innovation, we deliver solutions that make a real difference.',
          },
        ],
      },
      {
        id: 'approach',
        title: 'Our Approach',
        blocks: [
          {
            type: 'paragraph',
            text: 'We believe technology should be intuitive, reliable, and purposeful. Our consultative approach ensures we understand your unique needs and deliver solutions that align with your goals, budget, and timeline.',
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
              'Our Organization - Discover our history, values, and team',
              'Why Choose Us - Learn what sets us apart',
              'Case Studies - See our solutions in action',
              'Careers - Join our growing team',
            ],
          },
        ],
      },
    ],
  },

  // About Subpages
  'our-organization': {
    id: 'our-organization',
    title: 'Our Organization',
    sections: [
      {
        id: 'history',
        title: 'Our History',
        blocks: [
          {
            type: 'paragraph',
            text: 'Founded with a vision to simplify complex technology, we have grown from a small team of AV enthusiasts to a comprehensive solutions provider serving clients across multiple industries and geographies.',
          },
        ],
      },
      {
        id: 'mission',
        title: 'Mission & Vision',
        blocks: [
          {
            type: 'paragraph',
            text: 'Our mission is to empower organizations with technology solutions that enhance communication, collaboration, and productivity. We envision a world where technology seamlessly supports human connection and creativity.',
          },
        ],
      },
      {
        id: 'values',
        title: 'Core Values',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Excellence: We deliver exceptional quality in everything we do',
              'Innovation: We embrace new technologies and creative solutions',
              'Integrity: We operate with honesty and transparency',
              'Partnership: We build lasting relationships with clients and partners',
              'Expertise: We invest in continuous learning and certification',
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
            text: 'Our team comprises certified engineers, experienced project managers, creative designers, and dedicated support professionals. We hold industry certifications from leading manufacturers and maintain partnerships with top technology brands.',
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
        id: 'differentiators',
        title: 'What Sets Us Apart',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'End-to-End Solutions: From consultation through ongoing support',
              'Vendor-Agnostic Approach: We recommend the best technology for your needs',
              'Certified Expertise: Factory-trained and certified technicians',
              'Proven Methodology: Structured project management and quality assurance',
              'Responsive Support: 24/7 helpdesk and rapid response times',
              'Long-Term Partnership: We grow with your organization',
            ],
          },
        ],
      },
      {
        id: 'process',
        title: 'Our Process',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Discovery: We listen to understand your needs and challenges',
              'Design: We create tailored solutions with detailed documentation',
              'Deployment: We execute with precision and minimal disruption',
              'Training: We ensure your team can use the technology effectively',
              'Support: We provide ongoing maintenance and optimization',
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
            text: 'We stand behind every installation with comprehensive warranties, responsive support, and a commitment to your long-term success. Your satisfaction is our measure of success.',
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
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'Explore how we have helped organizations across diverse industries transform their communication and collaboration capabilities. These case studies showcase real-world challenges, innovative solutions, and measurable results.',
          },
        ],
      },
      {
        id: 'featured',
        title: 'Featured Projects',
        blocks: [
          {
            type: 'paragraph',
            text: 'Global Financial Services Firm: Deployed 200+ Microsoft Teams Rooms across 15 countries, standardizing collaboration technology and reducing meeting setup time by 75%.',
          },
          {
            type: 'paragraph',
            text: 'Major University: Transformed 50 classrooms with interactive displays and lecture capture, enabling hybrid learning and improving student engagement scores by 40%.',
          },
          {
            type: 'paragraph',
            text: 'Healthcare System: Implemented telemedicine solutions across 30 clinics, expanding patient access to specialists and reducing no-show rates by 60%.',
          },
          {
            type: 'paragraph',
            text: 'Manufacturing Company: Installed production floor digital signage and mass notification systems, improving safety compliance and reducing incident response time by 50%.',
          },
        ],
      },
      {
        id: 'testimonials',
        title: 'Client Testimonials',
        blocks: [
          {
            type: 'paragraph',
            text: '"The team delivered a complex global rollout on time and on budget. Their expertise and professionalism were exceptional." - IT Director, Fortune 500 Company',
          },
          {
            type: 'paragraph',
            text: '"Our new collaboration spaces have transformed how our teams work together. The technology just works, and support is always there when we need it." - VP Operations, Technology Firm',
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
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'Join a team of passionate professionals dedicated to delivering exceptional technology solutions. We offer challenging projects, continuous learning opportunities, and a collaborative culture where your contributions make a real impact.',
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
              'AV Systems Engineers and Designers',
              'Project Managers and Coordinators',
              'Installation Technicians and Field Engineers',
              'Technical Support Specialists',
              'Sales and Business Development Professionals',
              'Software Developers and Programmers',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Why Work With Us',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Competitive compensation and benefits packages',
              'Professional development and certification programs',
              'Exposure to cutting-edge technology and diverse projects',
              'Collaborative and supportive team environment',
              'Work-life balance and flexible arrangements',
              'Career growth and advancement opportunities',
            ],
          },
        ],
      },
      {
        id: 'apply',
        title: 'How to Apply',
        blocks: [
          {
            type: 'paragraph',
            text: 'We are always looking for talented individuals to join our team. Send your resume and cover letter to careers@speedlightsolutions.in. We review all applications and will contact qualified candidates for interviews.',
          },
        ],
      },
    ],
  },

  // Contact Page
  contact: {
    id: 'contact',
    title: 'Contact Us',
    sections: [
      {
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ready to transform your communication and collaboration capabilities? We would love to hear from you. Contact us to discuss your project, request a consultation, or learn more about our solutions.',
          },
        ],
      },
      {
        id: 'methods',
        title: 'Get in Touch',
        blocks: [
          {
            type: 'paragraph',
            text: 'Email: info@speedlightsolutions.in',
          },
          {
            type: 'paragraph',
            text: 'Phone: +91 (555) 123-4567',
          },
          {
            type: 'paragraph',
            text: 'Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST',
          },
        ],
      },
      {
        id: 'inquiry',
        title: 'What to Expect',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Initial Consultation: We discuss your needs and objectives',
              'Site Assessment: We evaluate your space and requirements',
              'Proposal: We present a detailed solution and investment',
              'Project Kickoff: We begin implementation with clear milestones',
              'Ongoing Support: We provide training and continuous support',
            ],
          },
        ],
      },
      {
        id: 'locations',
        title: 'Service Areas',
        blocks: [
          {
            type: 'paragraph',
            text: 'We serve clients across India and internationally. Our team is equipped to handle projects of any size and complexity, from single-room installations to multi-site deployments.',
          },
        ],
      },
    ],
  },
};
