import type { PageContent } from './contentTypes';
import { getServicesForCategory } from './solutionServices';

/**
 * Page Content Registry
 * 
 * This file contains the structured content for all pages in the application.
 * Content is organized into sections and blocks for flexible rendering.
 */

export const pages: Record<string, PageContent> = {
  // Solutions Landing Page
  solutions: {
    id: 'solutions',
    title: 'Our Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers enterprise-grade audio-visual, collaboration, and IT infrastructure solutions engineered for performance, reliability, and scalability.',
          },
          {
            type: 'paragraph',
            text: 'From intelligent meeting rooms to mission-critical control environments, we design, integrate, and support technology ecosystems that empower modern organizations to communicate, collaborate, and operate with confidence.',
          },
        ],
      },
    ],
  },

  // Workplace Collaboration & Video Conferencing Technologies
  'workplace-collaboration': {
    id: 'workplace-collaboration',
    title: 'Workplace Collaboration & Video Conferencing Technologies',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd designs and deploys intelligent collaboration environments that enable seamless communication, hybrid work, and enterprise-grade video conferencing.',
          },
          {
            type: 'paragraph',
            text: 'From executive boardrooms to agile huddle spaces, our solutions integrate leading platforms, professional AV systems, and centralized automation — ensuring reliability, clarity, and operational simplicity across every meeting environment.',
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
    ],
  },

  // Integrated Professional Sound Systems
  'professional-sound': {
    id: 'professional-sound',
    title: 'Integrated Professional Sound Systems',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers precision-engineered professional audio solutions designed for clarity, coverage, and operational reliability across corporate, institutional, and live event environments.',
          },
          {
            type: 'paragraph',
            text: 'From boardroom conferencing to large-venue sound reinforcement, our systems integrate advanced DSP, acoustic optimization, and enterprise-grade components — ensuring intelligible communication and immersive audio experiences.',
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
    ],
  },

  // Display & Visualization Solutions
  'display-visualization': {
    id: 'display-visualization',
    title: 'Display & Visualization Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers enterprise-grade display and visualization environments engineered for clarity, reliability, and seamless AV integration.',
          },
          {
            type: 'paragraph',
            text: 'From corporate workspaces to mission-critical control rooms, our solutions are designed to deliver impactful visual communication, operational efficiency, and scalable deployment across modern environments.',
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
    ],
  },

  // Enterprise Networking & Connectivity Solutions
  'networking-connectivity': {
    id: 'networking-connectivity',
    title: 'Enterprise Networking & Connectivity Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd designs and deploys secure, scalable, and high-performance networking environments that power modern enterprise operations.',
          },
          {
            type: 'paragraph',
            text: 'From structured cabling foundations to advanced AV over IP ecosystems, we deliver reliable connectivity infrastructures engineered for performance, security, and long-term scalability.',
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
    ],
  },

  // Intelligent Systems & Control Platforms
  'intelligent-systems': {
    id: 'intelligent-systems',
    title: 'Intelligent Systems & Control Platforms',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd designs and deploys intelligent control ecosystems that unify audio, video, collaboration, and environmental technologies into seamless, centralized platforms.',
          },
          {
            type: 'paragraph',
            text: 'Our solutions simplify system management, enhance operational efficiency, and deliver intuitive user experiences across enterprise and premium residential environments.',
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
    ],
  },

  // System Lifecycle & Support Solutions
  'lifecycle-support': {
    id: 'lifecycle-support',
    title: 'System Lifecycle & Support Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers comprehensive lifecycle management and technical support services to ensure enterprise AV and IT infrastructures remain reliable, optimized, and future-ready.',
          },
          {
            type: 'paragraph',
            text: 'From system upgrades to emergency response, we provide structured support frameworks that protect technology investments and ensure uninterrupted operational performance.',
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
    ],
  },

  // Industries Landing Page
  industries: {
    id: 'industries',
    title: 'Industries We Serve',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers industry-specific AV and IT infrastructure solutions tailored to the unique operational requirements, compliance standards, and communication needs of diverse sectors.',
          },
          {
            type: 'paragraph',
            text: 'From corporate enterprises to healthcare facilities, our solutions are engineered to enhance collaboration, streamline operations, and support mission-critical environments with reliability and scalability.',
          },
        ],
      },
    ],
  },

  // Industry Pages
  'corporate-enterprise': {
    id: 'corporate-enterprise',
    title: 'Corporate & Enterprise Offices',
    sections: [
      {
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Future-ready workplace technology that empowers collaboration, simplifies operations, and protects your IT investment.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end design, deployment and support of integrated AV & IT systems for headquarters, regional offices and executive facilities.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers turnkey AV and IT infrastructure for corporate environments. We combine practical design, disciplined project execution and dependable support to deliver systems that are secure, intuitive and easy to operate. Our solutions are engineered for reliability, scalability and low total cost of ownership.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Boardroom & Executive Meeting Rooms',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Full turnkey AV fit-out: cameras, DSP audio, microphones, displays and signal management.',
              'Seamless presentation workflows and wireless content sharing.',
              'Commissioning and acoustic tuning for optimal speech intelligibility.',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Executive-grade meeting experiences with predictable performance.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Unified Collaboration & Hybrid Meeting Solutions',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Certified meeting-room deployments, MTR and UC-ready rooms.',
              'Intelligent camera and audio solutions for hybrid participation.',
              'Simplified UX with one-touch meeting start and calendar integration.',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reliable hybrid meetings that reduce friction and travel.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Training Rooms & Collaboration Spaces',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Interactive displays, lecture capture and multi-zone audio.',
              'Flexible AV configurations for instructor-led and workshop modes.',
              'Recording and distribution workflows for on-demand training.',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Higher engagement and repeatable training outcomes.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Digital Signage & Corporate Communications',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Lobby and internal comms displays, content scheduling and CMS integration.',
              'Real-time dashboards for KPIs and operational messaging.',
              'Managed rollouts across multiple locations.',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent, centrally managed corporate messaging.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Intelligent Room Control & Automation',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Centralized room control panels and scheduling integration.',
              'Automated workflows: lighting, AV sources, blinds and presets.',
              'Remote monitoring and health-check reporting.',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reduced operational complexity and faster incident resolution.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Enterprise Network & Connectivity for AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling, enterprise switching, VLAN design and secure wireless.',
              'AV-over-IP architecture and QoS planning for high-availability media.',
              'Rack design, power planning and redundancy recommendations.',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Network foundations that protect AV performance and security.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation.',
              'Commissioning, user training and as-built documentation.',
              'Preventive maintenance, remote diagnostics and SLA-based support.',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Predictable uptime and longer equipment life.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Discovery & Requirements: Stakeholder workshops and technical site surveys.',
              'Design & Documentation: Scalable designs, BOM, schematics and deployment plan.',
              'Implementation & Commissioning: Certified installation, integration and tuning.',
              'Training & Handover: User training, admin training and detailed documentation.',
              'Support & Optimization: Preventive maintenance, upgrades and managed services.',
            ],
          },
          {
            type: 'paragraph',
            text: 'We follow clear project governance, staged testing and sign-off milestones to ensure timely delivery and quality outcomes.',
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Corporate headquarters & executive suites',
              'Regional and satellite offices',
              'Executive briefing centers and boardrooms',
              'Training & learning centers',
              'Collaboration hubs and innovation labs',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Clients Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Single-vendor project accountability from design through support',
              'Experienced engineers with enterprise deployment discipline',
              'Solutions tailored to operational workflows and security policies',
              'Focus on usability: intuitive controls and minimal training overhead',
              'Transparent budget planning and lifecycle cost management',
              'Fast, documented support processes and preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To discuss a site assessment, feasibility study or project proposal, contact Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Connected learning environments that enable interactive teaching, hybrid delivery, and scalable campus technology.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for schools, colleges, universities, and training institutes.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd designs and deploys technology-enabled learning spaces that enhance engagement, simplify instruction, and support hybrid education models. Our solutions are reliable, easy to operate, and scalable across single classrooms or entire campuses.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Smart Classrooms',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Interactive display systems with intuitive annotation tools',
              'Integrated audio for clear speech across the room',
              'Wireless presentation and content sharing',
              'Instructor-friendly control interfaces',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Higher student engagement and simplified teaching workflows.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Hybrid Learning & Lecture Capture',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Classroom systems for simultaneous in-person and remote participation',
              'Automated lecture recording and content distribution',
              'Camera and audio optimization for clear remote visibility',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent learning experience for on-site and remote students.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Auditoriums & Lecture Halls',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Large-format display and projection systems',
              'Speech reinforcement and coverage-optimized audio design',
              'Centralized control for seamless session management',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reliable performance for high-capacity teaching environments.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Campus Digital Signage & Information Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Centralized content management for announcements and wayfinding',
              'Departmental messaging and emergency notifications',
              'Multi-building deployment and scheduling',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent, real-time communication across campus.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Training Labs & Collaboration Spaces',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Flexible AV setups for workshops and group learning',
              'Recording and presentation infrastructure',
              'Multi-room integration for shared sessions',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Adaptive spaces that support modern pedagogies.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Education AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and secure campus networking',
              'AV-over-IP architecture for scalable distribution',
              'Rack design, power planning and bandwidth optimization',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable, secure connectivity for uninterrupted learning.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Requirement analysis, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Predictable uptime and long-term system reliability.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Academic needs analysis and site survey.',
              'Design: Scalable classroom standards and detailed documentation.',
              'Deployment: Professional installation, integration and testing.',
              'Training: Faculty and IT staff enablement.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Schools and K–12 classrooms',
              'Colleges and universities',
              'Training institutes and skill centers',
              'Seminar halls and auditoriums',
              'Campus common areas and lobbies',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Institutions Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey implementation from concept to support',
              'User-friendly systems requiring minimal training',
              'Scalable designs for campus-wide rollout',
              'Focus on reliability, clarity and ease of management',
              'Transparent budgeting and lifecycle planning',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a smart classroom or campus-wide deployment, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Reliable communication and visualization systems designed for clinical efficiency and operational continuity.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for hospitals, clinics, medical colleges, and healthcare networks.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers integrated AV and IT infrastructure tailored to healthcare environments. Our solutions support clear communication, real-time information visibility, and dependable system performance—while aligning with facility workflows and uptime requirements.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Telemedicine & Consultation Rooms',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Video-enabled consultation environments',
              'Optimized audio capture and playback for clinical clarity',
              'Secure presentation and content sharing',
              'Simple, clinician-friendly controls',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Effective remote consultations with consistent audio-visual quality.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Command Centers & Monitoring Displays',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-source display systems for real-time monitoring',
              'Centralized visualization for operations and incident response',
              'Ergonomic layouts for continuous use',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Faster decision-making with clear, consolidated information.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Public Address & Patient Communication',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Zonal public address and background audio systems',
              'Paging integration for departments and wards',
              'Clear, intelligible announcements in high-noise areas',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reliable facility-wide communication that supports patient care.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Training Rooms & Medical Education Spaces',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'AV-enabled classrooms for clinical training and briefings',
              'Recording and presentation infrastructure',
              'Flexible room configurations for workshops',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent delivery of training and knowledge sharing.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Digital Signage & Wayfinding',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Reception and waiting-area information displays',
              'Queue status and service messaging',
              'Centralized content management across departments',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Improved patient experience and operational transparency.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Healthcare AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and secure network segmentation',
              'AV-over-IP distribution for scalable deployments',
              'Rack design, power planning and redundancy recommendations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable, secure infrastructure that protects system performance.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: High availability and predictable operational costs.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Clinical workflow review and technical site survey.',
              'Design: Standards-based system design and detailed documentation.',
              'Implementation: Professional installation, integration and testing.',
              'Enablement: Staff training and operational handover.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Hospitals and multi-specialty clinics',
              'Diagnostic centers and day-care facilities',
              'Medical colleges and training institutes',
              'Control rooms and administrative offices',
              'Reception areas and patient waiting zones',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Healthcare Providers Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey delivery from design through long-term support',
              'Systems engineered for reliability and ease of use',
              'Scalable solutions for single sites or multi-facility networks',
              'Clear documentation and disciplined project governance',
              'Responsive support with preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a consultation room, command center, or facility-wide deployment, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Robust communication and visualization systems for safe, efficient, and connected industrial operations.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for plants, factories, warehouses, and industrial campuses.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers industrial-grade AV and IT infrastructure that supports real-time monitoring, plant-wide communication, and reliable connectivity. Our solutions are engineered for durability, scalability, and continuous operation in demanding environments.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Control Rooms & Operations Centers',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-source visualization and large-format display systems',
              'Ergonomic layouts for continuous monitoring',
              'Integrated audio for alerts and coordination',
              'Centralized control and system management',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Clear situational awareness and faster operational decisions.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Plant-wide Communication Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Zonal public address and paging systems',
              'Emergency and safety announcement integration',
              'High-intelligibility audio for noisy environments',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reliable communication that enhances safety and response time.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Industrial Display & Information Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Production dashboards and KPI visualization',
              'Shop-floor status displays and messaging',
              'Centralized content management across zones',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Real-time visibility into performance and operations.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Training Rooms & Briefing Facilities',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'AV-enabled spaces for safety briefings and technical training',
              'Presentation and recording infrastructure',
              'Flexible configurations for shift-based sessions',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent knowledge transfer and workforce readiness.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Industrial AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and hardened network design',
              'AV-over-IP distribution for scalable deployments',
              'Rack design, power planning and redundancy recommendations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable, secure infrastructure supporting critical operations.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Predictable uptime and long-term system performance.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Operational workflow review and technical site survey.',
              'Design: Scalable system architecture and detailed documentation.',
              'Implementation: Professional installation, integration and testing.',
              'Enablement: Operator training and operational handover.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Manufacturing plants and assembly lines',
              'Process industries and utilities',
              'Warehouses and logistics hubs',
              'Industrial campuses and administrative blocks',
              'Control rooms and command centers',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Industrial Clients Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey delivery from design through long-term support',
              'Solutions engineered for reliability in demanding conditions',
              'Scalable designs for single sites or multi-plant rollouts',
              'Clear documentation and disciplined project governance',
              'Responsive support with preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a control room, plant communication system, or facility-wide deployment, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Secure, scalable communication and visualization systems for mission-critical public environments.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for government offices, command centers, and public institutions.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers integrated AV and IT infrastructure that supports secure communication, real-time monitoring, and efficient public service operations. Our solutions are engineered for reliability, ease of operation, and long-term scalability across single facilities or multi-site deployments.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Command & Control Centers',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-source visualization and large-format display systems',
              'Centralized monitoring and incident coordination environments',
              'Integrated audio for alerts and communication',
              'Unified system control and management',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Clear situational awareness and faster response capabilities.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Conference & Briefing Rooms',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Video conferencing and presentation environments',
              'Professional audio systems for speech clarity',
              'Secure content sharing and display integration',
              'Simplified room control interfaces',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Effective decision-making and inter-department collaboration.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Public Information & Digital Signage',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Information display systems for public communication',
              'Wayfinding and announcement platforms',
              'Centralized content management across locations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent, real-time communication with citizens and staff.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Training & Capacity Building Facilities',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'AV-enabled training rooms and auditoriums',
              'Recording and presentation infrastructure',
              'Flexible configurations for seminars and workshops',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Standardized training delivery and knowledge sharing.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Government AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and secure network segmentation',
              'AV-over-IP architecture for scalable distribution',
              'Rack design, power planning and redundancy recommendations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable, secure infrastructure for continuous operations.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Predictable uptime and long-term system reliability.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Operational requirement analysis and site survey.',
              'Design: Standards-based system architecture and documentation.',
              'Implementation: Professional installation, integration and testing.',
              'Enablement: User training and operational handover.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Government offices and administrative buildings',
              'Command and monitoring centers',
              'Public service facilities',
              'Training institutes and auditoriums',
              'Multi-department coordination centers',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Public Sector Clients Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey delivery from design through long-term support',
              'Systems engineered for reliability and ease of use',
              'Scalable designs for single sites or nationwide rollouts',
              'Clear documentation and disciplined project governance',
              'Responsive support with preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a command center, briefing facility, or department-wide deployment, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Technology environments that elevate guest experience and enable seamless event operations.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for hotels, resorts, banquet venues, and convention centers.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers integrated AV and IT infrastructure tailored for hospitality and event environments. Our solutions enhance guest communication, support flexible venue operations, and ensure reliable performance across single halls or multi-venue facilities.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Banquet Halls & Event Venues',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Professional sound reinforcement and speech optimization',
              'Large-format displays and projection systems',
              'Flexible AV configurations for diverse event formats',
              'Centralized control for simplified operation',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent, high-quality experiences for events of any scale.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Conference & Convention Facilities',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-room AV integration for conferences and seminars',
              'Presentation and content distribution systems',
              'Seamless switching between event configurations',
              'Integrated control and scheduling',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Efficient management of complex, multi-session events.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Public Address & Background Music Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Zoned audio for lobbies, corridors, and common areas',
              'Paging and announcement integration',
              'Consistent coverage and intelligibility',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Clear communication and enhanced ambience throughout the property.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Digital Signage & Guest Information Displays',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Reception and wayfinding display systems',
              'Event schedules and promotional content',
              'Centralized content management across locations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Real-time information delivery and improved guest navigation.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Hospitality AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and enterprise-grade networking',
              'AV-over-IP distribution for scalable deployments',
              'Rack design, power planning and redundancy recommendations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reliable infrastructure supporting guest services and events.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Predictable uptime and long-term system performance.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Venue workflow review and technical site survey.',
              'Design: Scalable system architecture and documentation.',
              'Implementation: Professional installation, integration and testing.',
              'Enablement: Staff training and operational handover.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Hotels and resorts',
              'Banquet halls and ballrooms',
              'Convention and exhibition centers',
              'Conference facilities and meeting suites',
              'Public areas and guest common spaces',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Hospitality Clients Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey delivery from design through long-term support',
              'Flexible systems for diverse event requirements',
              'Scalable solutions for single venues or multi-property deployments',
              'Clear documentation and disciplined project governance',
              'Responsive support with preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a banquet hall, convention facility, or property-wide deployment, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
          },
        ],
      },
    ],
  },

  banking: {
    id: 'banking',
    title: 'Banking & Financial Institution',
    sections: [
      {
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Secure communication and high-clarity visualization for modern banking environments.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for bank headquarters, branches, and financial service facilities.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers integrated AV and IT infrastructure that supports secure collaboration, real-time monitoring, and consistent customer communication across banking environments. Our solutions are designed for reliability, scalability, and seamless integration with enterprise operations.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Executive Boardrooms & Collaboration Spaces',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Video conferencing and presentation environments',
              'Professional audio systems for speech clarity',
              'Secure content sharing and display integration',
              'Simplified room control interfaces',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Efficient decision-making and reliable executive communication.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Branch Communication & Customer Information Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Digital signage for customer messaging and queue information',
              'Information display systems for service areas',
              'Centralized content management across branches',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent communication and improved customer experience.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Monitoring & Operations Display Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-source display solutions for operational monitoring',
              'Centralized visualization for network and facility status',
              'Integrated control and management interfaces',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Enhanced operational visibility and faster response.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Training & Conference Facilities',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'AV-enabled training rooms and seminar environments',
              'Recording and presentation infrastructure',
              'Flexible configurations for internal programs',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Standardized training and knowledge delivery.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Banking AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and secure network segmentation',
              'AV-over-IP architecture for scalable deployments',
              'Rack design, power planning and redundancy recommendations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable, secure infrastructure aligned with enterprise standards.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Predictable uptime and long-term system performance.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Operational requirement review and site survey.',
              'Design: Standards-based architecture and detailed documentation.',
              'Implementation: Professional installation, integration and testing.',
              'Enablement: User training and operational handover.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Bank headquarters and regional offices',
              'Branch networks and service centers',
              'Operations and monitoring rooms',
              'Training and conference facilities',
              'Customer service and reception areas',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Financial Institutions Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey delivery from design through long-term support',
              'Systems engineered for reliability and ease of use',
              'Scalable designs for single sites or nationwide rollouts',
              'Clear documentation and disciplined project governance',
              'Responsive support with preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a boardroom, branch rollout, or operations display system, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Technology-enabled training environments that improve learning effectiveness and operational efficiency.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for corporate training centers, skill institutes, academies, and professional development facilities.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers integrated AV and IT infrastructure designed to support structured training delivery, hybrid learning models, and scalable institute operations. Our solutions are reliable, easy to manage, and optimized for consistent instructional performance.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Instructor-Led Training Rooms',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Interactive display and presentation systems',
              'Integrated audio for clear instruction delivery',
              'Wireless content sharing and recording capability',
              'Simplified room control interfaces',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Clear communication and structured training delivery.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Hybrid Training & Remote Learning Environments',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Video-enabled classrooms for on-site and remote participants',
              'Lecture capture and content distribution systems',
              'Optimized camera and audio configuration',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Flexible training delivery without location limitations.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Simulation & Practical Training Labs',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'AV integration for demonstration and skill-based learning',
              'Multi-source visualization systems',
              'Recording infrastructure for review and assessment',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Enhanced hands-on learning and performance tracking.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Seminar Halls & Presentation Spaces',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Large-format display and projection systems',
              'Speech reinforcement and coverage-optimized audio',
              'Centralized system control for smooth session management',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reliable performance for large-group instruction.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Training AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and secure network design',
              'AV-over-IP architecture for scalable deployment',
              'Rack design, power planning and redundancy recommendations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable infrastructure supporting continuous learning operations.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Predictable uptime and long-term system reliability.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Training workflow review and technical site survey.',
              'Design: Scalable system architecture and documentation.',
              'Implementation: Professional installation, integration and testing.',
              'Enablement: Trainer and administrator training.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Skill development institutes',
              'Corporate training centers',
              'Coaching and certification facilities',
              'Technical training labs',
              'Seminar and workshop spaces',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Training Providers Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey delivery from design through long-term support',
              'User-friendly systems requiring minimal training',
              'Scalable solutions for multi-room or multi-location institutes',
              'Clear documentation and disciplined project governance',
              'Responsive support with preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a training facility or institute-wide deployment, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Engaging visual communication and reliable infrastructure for modern retail environments.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV & IT integration for retail stores, malls, showrooms, and commercial facilities.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd delivers integrated AV and IT infrastructure that enhances customer engagement, streamlines communication, and supports scalable retail operations. Our solutions are designed for continuous operation, centralized management, and consistent brand presentation across locations.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Digital Signage & Customer Engagement Displays',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'High-impact promotional display systems',
              'Centralized content management and scheduling',
              'Multi-location rollout and remote updates',
              'Real-time messaging and campaign control',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Dynamic, consistent brand communication that drives engagement.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Video Walls & Feature Display Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Large-format visual solutions for flagship spaces',
              'Multi-source content presentation',
              'Seamless integration with promotional workflows',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: High-visibility displays that enhance in-store experience.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Background Music & Public Address Systems',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Zoned audio distribution for retail environments',
              'Announcement and promotional messaging integration',
              'Consistent coverage and clarity across spaces',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Improved ambience and effective in-store communication.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Control & Centralized Management',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Unified control of displays and AV systems',
              'Scheduled content and system automation',
              'Remote monitoring and device management',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Simplified operation and consistent performance across locations.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Connectivity for Retail AV',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Structured cabling and secure network design',
              'AV-over-IP architecture for scalable distribution',
              'Rack design, power planning and redundancy recommendations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable infrastructure supporting digital retail operations.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'System Lifecycle & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Site survey, design documentation and installation',
              'Commissioning, user training and handover',
              'Preventive maintenance and SLA-based support',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Reliable performance and predictable operational costs.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Assessment: Store layout review and technical site survey.',
              'Design: Scalable system architecture and documentation.',
              'Implementation: Professional installation, integration and testing.',
              'Enablement: Staff training and operational handover.',
              'Support: Ongoing maintenance, upgrades and optimization.',
            ],
          },
        ],
      },
      {
        id: 'deployment-locations',
        title: 'Typical Deployment Locations',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Retail stores and showrooms',
              'Shopping malls and commercial complexes',
              'Brand experience centers',
              'Supermarkets and chain outlets',
              'Reception and customer service areas',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Retail Clients Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey delivery from design through long-term support',
              'Scalable solutions for single stores or multi-location rollouts',
              'Systems engineered for continuous operation',
              'Clear documentation and disciplined project governance',
              'Responsive support with preventive maintenance programs',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan a retail rollout or commercial facility deployment, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Professional AV and IT environments that deliver seamless, high-impact event experiences.',
          },
          {
            type: 'paragraph',
            text: 'End-to-end AV integration for conferences, corporate events, product launches, and large venue productions.',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Get a project proposal', to: '/contact' },
            ],
          },
        ],
      },
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd provides professional AV and IT solutions for live and corporate events, ensuring reliable performance, clear communication, and smooth event execution. Our systems are designed for rapid deployment, flexible configuration, and dependable on-site operation.',
          },
        ],
      },
      {
        id: 'core-services',
        title: 'Core Services',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Conference & Corporate Event AV Setup',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Complete audio-visual system deployment',
              'Presentation and display integration',
              'Wireless microphone and speech reinforcement systems',
              'Centralized system control for event management',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Consistent technical performance for professional event delivery.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Large Venue Display & Visualization',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'LED display walls and large-format screens',
              'Projection systems for stage and venue environments',
              'Multi-source content switching and management',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: High-visibility visual communication for audience engagement.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Professional Sound Reinforcement',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Event-grade sound system deployment',
              'Speech clarity optimization for large audiences',
              'Zoned audio configuration for venue coverage',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Clear, balanced audio across the entire venue.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Hybrid Event & Streaming Infrastructure',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Video-enabled event environments',
              'Integration for remote participation and broadcasting',
              'Recording and content distribution capability',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Extended event reach beyond physical attendance.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Temporary Network & Connectivity Infrastructure',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Event-ready networking and structured connectivity',
              'AV-over-IP system configuration',
              'Reliable infrastructure for event operations',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Stable technical backbone for uninterrupted event performance.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'On-site Technical Management & Support',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'System setup, testing, and commissioning',
              'Real-time technical monitoring during events',
              'Post-event dismantling and system handover',
            ],
          },
          {
            type: 'emphasis',
            style: 'bold',
            text: 'Benefit: Smooth execution with dedicated technical supervision.',
          },
        ],
      },
      {
        id: 'delivery-approach',
        title: 'Our Delivery Approach',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Requirement Assessment: Event scope review and technical planning.',
              'System Design: Configuration planning and deployment strategy.',
              'Installation & Setup: Professional equipment setup and testing.',
              'Event Operation: On-site monitoring and technical management.',
              'Post-Event Support: System dismantling and reporting.',
            ],
          },
        ],
      },
      {
        id: 'deployment-environments',
        title: 'Typical Deployment Environments',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Corporate conferences and summits',
              'Product launches and brand events',
              'Annual meetings and town halls',
              'Exhibition and convention venues',
              'Auditoriums and large gathering spaces',
            ],
          },
        ],
      },
      {
        id: 'why-choose',
        title: 'Why Event Organizers Choose Speedlight',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Turnkey AV deployment and technical management',
              'Reliable systems designed for high-impact environments',
              'Flexible configurations for diverse event formats',
              'Experienced technical team for on-site support',
              'Structured planning and disciplined execution',
            ],
          },
        ],
      },
      {
        id: 'next-steps',
        title: 'Next Steps',
        blocks: [
          {
            type: 'paragraph',
            text: 'To plan your upcoming event or discuss technical requirements, connect with Speedlight Infosolutions Pvt Ltd:',
          },
          {
            type: 'link-list',
            links: [
              { label: 'Request a consultation', to: '/contact' },
              { label: 'Request a proposal', to: '/contact' },
            ],
          },
        ],
      },
    ],
  },

  // About Pages
  'our-organization': {
    id: 'our-organization',
    title: 'Our Organization',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd is a professional AV and IT systems integrator delivering enterprise-grade technology solutions across corporate, institutional, and commercial environments.',
          },
          {
            type: 'paragraph',
            text: 'We combine technical expertise, disciplined project execution, and long-term support to deliver reliable, scalable, and user-friendly systems that empower modern organizations.',
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
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Organizations choose Speedlight Infosolutions Pvt Ltd for our proven track record of delivering reliable, scalable, and user-friendly AV and IT infrastructure solutions.',
          },
        ],
      },
      {
        id: 'differentiators',
        title: 'Our Differentiators',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ End-to-end project accountability from design through support',
              '✔ Experienced engineers with enterprise deployment discipline',
              '✔ Solutions tailored to operational workflows and security requirements',
              '✔ Focus on usability and minimal training overhead',
              '✔ Transparent budget planning and lifecycle cost management',
              '✔ Fast, documented support processes and preventive maintenance',
            ],
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
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Explore real-world deployments and success stories showcasing how Speedlight Infosolutions Pvt Ltd has delivered reliable, scalable AV and IT infrastructure solutions across diverse industries and environments.',
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
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Join a team of professionals dedicated to delivering enterprise-grade AV and IT infrastructure solutions. We are always looking for talented engineers, project managers, and technical specialists.',
          },
        ],
      },
    ],
  },

  contact: {
    id: 'contact',
    title: 'Contact Us',
    sections: [
      {
        id: 'overview',
        title: 'Get in Touch',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ready to discuss your project requirements? Contact Speedlight Infosolutions Pvt Ltd to schedule a consultation or request a detailed proposal.',
          },
        ],
      },
    ],
  },
};
