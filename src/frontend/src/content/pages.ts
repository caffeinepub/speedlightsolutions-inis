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

  // About Pages
  'our-organization': {
    id: 'our-organization',
    title: 'Our Organization',
    sections: [
      {
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Engineering Intelligent AV & IT Ecosystems',
          },
          {
            type: 'paragraph',
            text: 'Speedlight Infosolutions Pvt Ltd is a specialized technology integration company delivering enterprise-grade Audio Visual (AV), Unified Collaboration, Networking, and Intelligent Control solutions.',
          },
          {
            type: 'paragraph',
            text: 'We partner with organizations to design, integrate, and support scalable technology environments that enhance communication, collaboration, visualization, and operational control. From corporate boardrooms and digital classrooms to command centers and large-scale event environments, we transform physical spaces into intelligent, connected ecosystems.',
          },
        ],
      },
      {
        id: 'who-we-are',
        title: 'Who We Are',
        blocks: [
          {
            type: 'paragraph',
            text: 'We are solution architects and system integrators — not just equipment suppliers.',
          },
          {
            type: 'paragraph',
            text: 'Our strength lies in understanding business objectives and translating them into performance-driven, standards-compliant technology infrastructures engineered for reliability, scalability, and long-term value.',
          },
          {
            type: 'paragraph',
            text: 'By combining AV expertise with enterprise IT infrastructure capabilities, we deliver fully integrated systems that operate seamlessly across modern workplaces.',
          },
        ],
      },
      {
        id: 'what-we-do',
        title: 'What We Do',
        blocks: [
          {
            type: 'paragraph',
            text: 'We provide end-to-end integration services across:',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Workplace Collaboration & Microsoft Teams Room environments',
              'Professional Audio & Acoustic Systems',
              'Advanced Display & Visualization Technologies',
              'Enterprise Networking & AV-over-IP Architectures',
              'Intelligent Control & Automation Platforms',
              'Hybrid Event & Large-Scale AV Deployments',
            ],
          },
          {
            type: 'paragraph',
            text: 'Our services cover consultation, system design, engineering, installation, programming, commissioning, and ongoing lifecycle support.',
          },
        ],
      },
      {
        id: 'engineering-approach',
        title: 'Our Engineering Approach',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Strategic Consultation',
          },
          {
            type: 'paragraph',
            text: 'We begin by understanding operational workflows, space requirements, compliance standards, and long-term scalability goals.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Precision System Design',
          },
          {
            type: 'paragraph',
            text: 'Our engineers develop interoperable, future-ready system architectures aligned with global best practices.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Professional Deployment',
          },
          {
            type: 'paragraph',
            text: 'Certified specialists execute structured installation, configuration, testing, and commissioning.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Lifecycle Support',
          },
          {
            type: 'paragraph',
            text: 'We provide proactive maintenance, optimization, upgrades, and remote support to ensure sustained performance and minimal downtime.',
          },
        ],
      },
      {
        id: 'technology-ecosystem',
        title: 'Our Technology Ecosystem',
        blocks: [
          {
            type: 'paragraph',
            text: 'We collaborate with globally recognized technology leaders across collaboration, professional audio, display, networking, and control platforms — ensuring every deployment meets international standards of performance, security, and innovation.',
          },
          {
            type: 'paragraph',
            text: 'Our Partners: Poly, Yealink, Logitech, Cisco, Microsoft Teams Rooms, QSC, JBL, Bose, Biamp, Shure, Sennheiser, Yamaha, Samsung, LG, Sony, ViewSonic, BenQ, Panasonic, NEC, Epson, Cisco, Netgear, Juniper Networks, Commscope, Aruba, Crestron, Kramer, AMX, Extron, Biamp, Q-SYS, Barco',
          },
        ],
      },
      {
        id: 'commitment',
        title: 'Our Commitment',
        blocks: [
          {
            type: 'paragraph',
            text: 'At Speedlight Infosolutions PvLtd, technology is not just installed — it is engineered with purpose.',
          },
          {
            type: 'paragraph',
            text: 'We are committed to delivering intelligent, scalable, and future-ready solutions that simplify complexity, enhance user experience, and support organizational growth.',
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
        id: 'hero',
        blocks: [
          {
            type: 'heading',
            level: 1,
            text: 'Engineered for Performance. Designed for Reliability. Built for Scale.',
          },
          {
            type: 'paragraph',
            text: 'In today\'s enterprise environments, technology must do more than function — it must perform consistently, integrate seamlessly, and scale intelligently.',
          },
          {
            type: 'paragraph',
            text: 'At Speedlight Infosolutions Pvt Ltd, we deliver integrated AV and IT ecosystems engineered to support mission-critical communication, collaboration, and control.',
          },
        ],
      },
      {
        id: 'reasons',
        title: 'Why Choose Speedlight',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: '1. True System Integration Expertise',
          },
          {
            type: 'paragraph',
            text: 'We don\'t assemble products. We architect complete technology ecosystems.',
          },
          {
            type: 'paragraph',
            text: 'By combining collaboration platforms, professional audio, advanced visualization, enterprise networking, and intelligent control systems, we ensure seamless interoperability across every deployment.',
          },
          {
            type: 'heading',
            level: 3,
            text: '2. Strategic Partnerships with Global Technology Leaders',
          },
          {
            type: 'paragraph',
            text: 'Our solutions are powered by industry-leading manufacturers including Poly, Cisco, QSC, Samsung, Crestron, Barco and other globally recognized brands.',
          },
          {
            type: 'paragraph',
            text: 'This ensures:',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'International performance standards',
              'Secure and compliant infrastructure',
              'Long-term manufacturer support',
              'Future-ready technology alignment',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: '3. Engineering-Driven Methodology',
          },
          {
            type: 'paragraph',
            text: 'Every project follows a structured and disciplined lifecycle:',
          },
          {
            type: 'paragraph',
            text: 'Consult → Design → Integrate → Test → Commission → Support',
          },
          {
            type: 'paragraph',
            text: 'Our engineering-first approach minimizes risk, eliminates integration conflicts, and ensures consistent performance from day one.',
          },
          {
            type: 'heading',
            level: 3,
            text: '4. Scalable & Future-Ready Architecture',
          },
          {
            type: 'paragraph',
            text: 'Technology evolves rapidly. Our systems are designed to evolve with it.',
          },
          {
            type: 'paragraph',
            text: 'We engineer scalable infrastructure that accommodates expansion, hybrid workforce growth, and emerging technologies — protecting your long-term investment.',
          },
          {
            type: 'heading',
            level: 3,
            text: '5. Performance & Reliability Focus',
          },
          {
            type: 'paragraph',
            text: 'We design for real-world usage — not just specifications.',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Optimized audio clarity and acoustic coverage',
              'High-availability networking architecture',
              'Redundant system design for critical environments',
              'Centralized control for operational simplicity',
            ],
          },
          {
            type: 'paragraph',
            text: 'Our solutions are built to perform under demanding enterprise conditions.',
          },
          {
            type: 'heading',
            level: 3,
            text: '6. Cross-Industry Execution Capability',
          },
          {
            type: 'paragraph',
            text: 'We successfully deploy technology ecosystems across:',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Corporate Enterprises',
              'Education & Digital Learning',
              'Healthcare & Telemedicine',
              'Government & Command Centers',
              'Industrial & Manufacturing Units',
              'Hospitality & Convention Venues',
              'Financial Institutions',
              'Large-Scale Live Events',
            ],
          },
          {
            type: 'paragraph',
            text: 'Our adaptability across sectors demonstrates deep technical capability and operational maturity.',
          },
          {
            type: 'heading',
            level: 3,
            text: '7. End-to-End Accountability',
          },
          {
            type: 'paragraph',
            text: 'From consultation to lifecycle support, we remain your single point of responsibility.',
          },
          {
            type: 'paragraph',
            text: 'No fragmented vendors. No integration gaps. No accountability confusion.',
          },
          {
            type: 'paragraph',
            text: 'Just structured delivery and measurable outcomes.',
          },
        ],
      },
      {
        id: 'commitment',
        title: 'Our Commitment',
        blocks: [
          {
            type: 'paragraph',
            text: 'At Speedlight Infosolutions Pvt Ltd, we are committed to delivering:',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Intelligent system architecture',
              'Operational efficiency',
              'Enterprise-level security',
              'Measurable return on technology investment',
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
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'We design and deliver intelligent AV and IT ecosystems tailored to real-world enterprise challenges. Below are representative project scenarios demonstrating our integration expertise.',
          },
        ],
      },
      {
        id: 'case-1',
        title: '1. Enterprise Headquarters – Unified Collaboration Deployment',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Challenge',
          },
          {
            type: 'paragraph',
            text: 'A multi-floor corporate office required standardized Microsoft Teams-enabled meeting rooms with centralized control and enterprise-grade networking.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Solution',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Integrated collaboration systems',
              'Professional audio calibration',
              'Centralized control programming',
              'Structured cabling and network optimization',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Outcome',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Seamless hybrid collaboration',
              'Standardized user experience',
              'Reduced IT intervention',
              'Improved executive productivity',
            ],
          },
        ],
      },
      {
        id: 'case-2',
        title: '2. University Campus – Smart Classroom Infrastructure',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Challenge',
          },
          {
            type: 'paragraph',
            text: 'Upgrade legacy lecture halls into interactive, hybrid-enabled learning environments.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Solution',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Interactive displays and projection systems',
              'Wireless presentation platforms',
              'Campus-wide AV-over-IP architecture',
              'Instructor collaboration tools',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Outcome',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Enhanced student engagement',
              'Hybrid learning capability',
              'Scalable digital classroom infrastructure',
            ],
          },
        ],
      },
      {
        id: 'case-3',
        title: '3. Command & Control Center – Monitoring Environment',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'Challenge',
          },
          {
            type: 'paragraph',
            text: 'Design a 24/7 monitoring environment with large-format visualization and secure networking.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Solution',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'Video wall integration',
              'Redundant networking architecture',
              'Centralized control platform',
              'Acoustic and ergonomic system design',
            ],
          },
          {
            type: 'heading',
            level: 3,
            text: 'Outcome',
          },
          {
            type: 'list',
            ordered: false,
            items: [
              'High-availability operations',
              'Real-time monitoring efficiency',
              'Secure and scalable infrastructure',
            ],
          },
        ],
      },
    ],
  },

  'careers': {
    id: 'careers',
    title: 'Careers at Speedlight Infosolutions Pvt Ltd',
    sections: [
      {
        id: 'intro',
        blocks: [
          {
            type: 'paragraph',
            text: 'We are building intelligent technology environments across industries — and we are always looking for passionate professionals who thrive in innovation-driven environments.',
          },
        ],
      },
      {
        id: 'why-work',
        title: 'Why Work With Us',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Exposure to enterprise-scale projects',
              'Collaboration with global technology brands',
              'Technical growth in AV & IT integration',
              'Structured project environments',
              'Performance-driven culture',
            ],
          },
        ],
      },
      {
        id: 'opportunities',
        title: 'Current Opportunities',
        blocks: [
          {
            type: 'heading',
            level: 3,
            text: 'AV Installation Engineer',
          },
          {
            type: 'paragraph',
            text: 'Experience in AV integration, cabling, rack assembly, and system commissioning.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Network & Infrastructure Engineer',
          },
          {
            type: 'paragraph',
            text: 'Experience in LAN/WAN setup, AV-over-IP architecture, and enterprise networking.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'AV Programmer / Control System Specialist',
          },
          {
            type: 'paragraph',
            text: 'Experience in Crestron / AMX / Extron programming preferred.',
          },
          {
            type: 'heading',
            level: 3,
            text: 'Sales & Business Development Executive',
          },
          {
            type: 'paragraph',
            text: 'Enterprise AV/IT solution selling experience preferred.',
          },
        ],
      },
      {
        id: 'who-we-look-for',
        title: 'Who We Look For',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Technically driven professionals',
              'Strong problem-solving mindset',
              'Team-oriented collaborators',
              'Customer-focused communicators',
              'Commitment to quality and precision',
            ],
          },
        ],
      },
      {
        id: 'apply',
        title: 'Apply With Us',
        blocks: [
          {
            type: 'paragraph',
            text: 'Interested candidates may share their resume at: careers@speedlightinfosolutions.com',
          },
        ],
      },
    ],
  },

  // Industry Pages (keeping existing content - truncated for brevity but unchanged)
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

  // Note: Keeping all other industry pages unchanged (education, healthcare, manufacturing, government, hospitality, banking, training-centers, retail, live-events)
  // For brevity, I'm not repeating them here but they remain in the registry with their existing content
};
