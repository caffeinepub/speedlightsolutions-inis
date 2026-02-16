import type { PageContent } from './contentTypes';
import { solutionServices } from './solutionServices';

/**
 * Solution Service Pages Content
 * 
 * PageContent objects for each service under the 6 solution categories.
 * Content is derived from Google Drive documents (see contentSourceLinks.ts).
 */

export const solutionServicePages: Record<string, PageContent> = {
  // Workplace Collaboration Services
  'executive-boardroom-conference-room-av-integration': {
    id: 'executive-boardroom-conference-room-av-integration',
    title: 'Executive Boardroom & Conference Room AV Integration',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We engineer high-performance boardroom and conference room environments that support strategic discussions, executive presentations, and global hybrid collaboration.',
          },
          {
            type: 'paragraph',
            text: 'Our solutions integrate video conferencing platforms, precision audio systems, large-format displays, and centralized automation — ensuring reliability and operational simplicity.',
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
              '4K video conferencing system integration',
              'Ceiling and table-mounted microphone arrays',
              'Professional speaker systems with acoustic tuning',
              'Large-format displays and dual-screen configurations',
              'Touch panel control and room automation',
              'Platform integration with Microsoft Teams and Zoom',
              'Acoustic optimization and DSP configuration',
            ],
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Solutions We Deliver',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Executive boardrooms',
              'Corporate conference rooms',
              'Strategy and decision-making spaces',
              'Client presentation environments',
              'Multi-purpose meeting rooms',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Business Benefits',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Professional and executive-grade meeting experience',
              '✔ Reliable hybrid collaboration',
              '✔ Simplified room operation',
              '✔ Clear, distraction-free communication',
            ],
          },
        ],
      },
    ],
  },

  'smart-meeting-room-solutions': {
    id: 'smart-meeting-room-solutions',
    title: 'Smart Meeting Room Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We transform traditional meeting rooms into intelligent, automated collaboration environments that streamline workflows and enhance user experience.',
          },
          {
            type: 'paragraph',
            text: 'These smart environments integrate scheduling systems, automation controls, camera intelligence, and wireless connectivity for frictionless operation.',
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
              'Automated room control and scheduling integration',
              'One-touch meeting start',
              'Occupancy-based automation',
              'Intelligent camera tracking and speaker framing',
              'Wireless multi-device connectivity',
              'Energy-efficient system management',
            ],
          },
        ],
      },
      {
        id: 'applications',
        title: 'Ideal Applications',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Corporate offices',
              'Innovation labs',
              'Training environments',
              'Hybrid collaboration spaces',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Business Benefits',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Faster meeting start times',
              '✔ Reduced IT intervention',
              '✔ Consistent user experience',
              '✔ Future-ready infrastructure',
            ],
          },
        ],
      },
    ],
  },

  'huddle-room-small-room-collaboration-setup': {
    id: 'huddle-room-small-room-collaboration-setup',
    title: 'Huddle Room & Small Room Collaboration Setup',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We design compact yet powerful collaboration environments tailored for small teams and agile workspaces.',
          },
          {
            type: 'paragraph',
            text: 'These solutions deliver enterprise-grade video and audio performance within space-efficient configurations.',
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
              'All-in-one video conferencing systems',
              'Wide-angle intelligent cameras',
              'Integrated speaker and microphone arrays',
              'Plug-and-play device connectivity',
              'Small-room acoustic optimization',
              'Cost-effective scalable deployment',
            ],
          },
        ],
      },
      {
        id: 'use-cases',
        title: 'Typical Use Cases',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Small meeting rooms',
              'Focus collaboration zones',
              'Startup and agile workspaces',
              'Remote interaction hubs',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Business Benefits',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Efficient space utilization',
              '✔ Rapid deployment',
              '✔ Consistent collaboration quality',
              '✔ Budget-optimized solutions',
            ],
          },
        ],
      },
    ],
  },

  'wireless-presentation-screen-sharing-systems': {
    id: 'wireless-presentation-screen-sharing-systems',
    title: 'Wireless Presentation & Screen Sharing Systems',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enable seamless, secure, and cable-free content sharing across devices and platforms.',
          },
          {
            type: 'paragraph',
            text: 'Our wireless presentation systems simplify collaboration while maintaining enterprise-level security and performance standards.',
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
              'One-click wireless screen sharing',
              'Multi-user content collaboration',
              'BYOD (Bring Your Own Device) support',
              'Cross-platform compatibility',
              'Secure enterprise-grade connectivity',
              'Integration with existing AV systems',
            ],
          },
        ],
      },
      {
        id: 'integration',
        title: 'Integration Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Corporate network compatibility',
              'Centralized control system integration',
              'Multi-display presentation environments',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Business Benefits',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Reduced cable clutter',
              '✔ Faster meeting collaboration',
              '✔ Improved productivity',
              '✔ Flexible device compatibility',
            ],
          },
        ],
      },
    ],
  },

  'enterprise-townhall-auditorium-av-solutions': {
    id: 'enterprise-townhall-auditorium-av-solutions',
    title: 'Enterprise Townhall & Auditorium AV Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We design and integrate large-scale AV ecosystems for corporate townhalls, auditoriums, and communication venues — ensuring powerful sound, immersive visuals, and seamless audience engagement.',
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
              'Large venue sound reinforcement systems',
              'Digital signal processing and acoustic engineering',
              'LED display walls, projection, and video wall integration',
              'Presenter confidence monitors and stage displays',
              'Centralized AV control and automation',
              'Live streaming and recording integration',
            ],
          },
        ],
      },
      {
        id: 'applications',
        title: 'Applications',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Corporate townhall spaces',
              'Auditoriums and training centers',
              'Large presentation venues',
              'Internal communication halls',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Business Benefits',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Clear communication for large audiences',
              '✔ Scalable and future-ready infrastructure',
              '✔ Professional event execution',
              '✔ Reliable performance in high-demand environments',
            ],
          },
        ],
      },
    ],
  },

  // Professional Sound Services
  'commercial-audio-system-design-installation': {
    id: 'commercial-audio-system-design-installation',
    title: 'Commercial Audio System Design & Installation',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We design and deploy scalable commercial audio systems engineered for consistent coverage, superior clarity, and operational reliability. Each solution is customized based on acoustic characteristics, architectural layout, and functional requirements.',
          },
        ],
      },
      {
        id: 'what-we-deliver',
        title: 'What We Deliver',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Detailed site survey and acoustic assessment',
              'System architecture planning and equipment selection',
              'Speaker placement design and coverage modeling',
              'DSP configuration and signal routing',
              'Professional installation, testing, and commissioning',
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
            text: 'Corporate offices · Educational institutions · Hospitality environments · Retail spaces · Auditoriums',
          },
        ],
      },
      {
        id: 'technology-partners',
        title: 'Technology Partners',
        blocks: [
          {
            type: 'paragraph',
            text: 'JBL Professional · Bose Professional · QSC · Biamp',
          },
        ],
      },
      {
        id: 'why-speedlight',
        title: 'Why Speedlight Infosolutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Precision-driven system design',
              '✔ Certified installation standards',
              '✔ Vendor-neutral approach',
              '✔ End-to-end lifecycle support',
            ],
          },
        ],
      },
    ],
  },

  'conference-boardroom-audio-solutions': {
    id: 'conference-boardroom-audio-solutions',
    title: 'Conference & Boardroom Audio Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We implement high-intelligibility conferencing audio systems that ensure every participant is heard clearly — whether in-room or remote.',
          },
        ],
      },
      {
        id: 'what-we-deliver',
        title: 'What We Deliver',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Conference microphone systems and array solutions',
              'Integrated speakers and amplification systems',
              'Echo cancellation and advanced noise management',
              'DSP tuning optimized for speech clarity',
              'Seamless integration with video conferencing platforms',
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
            text: 'Boardrooms · Meeting rooms · Training facilities · Collaboration spaces',
          },
        ],
      },
      {
        id: 'technology-partners',
        title: 'Technology Partners',
        blocks: [
          {
            type: 'paragraph',
            text: 'Shure · Biamp · QSC · Logitech · Poly',
          },
        ],
      },
      {
        id: 'why-speedlight',
        title: 'Why Speedlight Infosolutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Optimized for speech intelligibility',
              '✔ Seamless VC integration',
              '✔ Precision audio calibration',
            ],
          },
        ],
      },
    ],
  },

  'public-address-pa-announcement-systems': {
    id: 'public-address-pa-announcement-systems',
    title: 'Public Address (PA) & Announcement Systems',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We design and deploy reliable public address and announcement systems built for clarity, coverage, and scalability across facilities of any size.',
          },
        ],
      },
      {
        id: 'what-we-deliver',
        title: 'What We Deliver',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Centralized PA system architecture',
              'Zonal audio distribution systems',
              'Paging microphones and control consoles',
              'Emergency announcement integration',
              'Scalable amplification infrastructure',
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
            text: 'Corporate campuses · Industrial facilities · Schools · Warehouses · Public infrastructure',
          },
        ],
      },
      {
        id: 'technology-partners',
        title: 'Technology Partners',
        blocks: [
          {
            type: 'paragraph',
            text: 'Bosch · JBL Professional · QSC',
          },
        ],
      },
      {
        id: 'why-speedlight',
        title: 'Why Speedlight Infosolutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ High reliability architecture',
              '✔ Clear and intelligible voice projection',
              '✔ Scalable and expandable systems',
            ],
          },
        ],
      },
    ],
  },

  'background-music-systems': {
    id: 'background-music-systems',
    title: 'Background Music Systems',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We create ambient audio systems that enhance customer experience and workplace environments through balanced and consistent sound distribution.',
          },
        ],
      },
      {
        id: 'what-we-deliver',
        title: 'What We Deliver',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Distributed speaker network design',
              'Zonal music control solutions',
              'Amplification and source integration',
              'Sound level calibration',
              'Centralized audio management systems',
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
            text: 'Retail stores · Corporate offices · Hotels · Restaurants · Commercial environments',
          },
        ],
      },
      {
        id: 'technology-partners',
        title: 'Technology Partners',
        blocks: [
          {
            type: 'paragraph',
            text: 'Bose Professional · JBL Professional · QSC',
          },
        ],
      },
      {
        id: 'why-speedlight',
        title: 'Why Speedlight Infosolutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Uniform sound coverage',
              '✔ Discreet and elegant integration',
              '✔ Low-maintenance architecture',
            ],
          },
        ],
      },
    ],
  },

  'live-sound-event-audio-solutions': {
    id: 'live-sound-event-audio-solutions',
    title: 'Live Sound & Event Audio Solutions',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We provide professional live sound reinforcement systems engineered for performance-grade clarity and audience coverage across events and institutional venues.',
          },
        ],
      },
      {
        id: 'what-we-deliver',
        title: 'What We Deliver',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Event sound system design',
              'Mixing console configuration',
              'Stage monitoring systems',
              'Portable PA systems',
              'System tuning and on-site technical support',
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
            text: 'Corporate events · Auditoriums · Conferences · Product launches · Institutional programs',
          },
        ],
      },
      {
        id: 'technology-partners',
        title: 'Technology Partners',
        blocks: [
          {
            type: 'paragraph',
            text: 'Yamaha · JBL Professional · Shure',
          },
        ],
      },
      {
        id: 'why-speedlight',
        title: 'Why Speedlight Infosolutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Professional audio engineering',
              '✔ Reliable event deployment',
              '✔ Experienced on-site technical support',
            ],
          },
        ],
      },
    ],
  },

  'acoustic-consulting-sound-optimization': {
    id: 'acoustic-consulting-sound-optimization',
    title: 'Acoustic Consulting & Sound Optimization',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'We analyze acoustic environments and optimize system performance to achieve balanced sound, improved speech intelligibility, and reduced reverberation.',
          },
        ],
      },
      {
        id: 'what-we-deliver',
        title: 'What We Deliver',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Acoustic measurement and environmental analysis',
              'Reverberation control recommendations',
              'Speaker placement optimization',
              'DSP tuning and calibration',
              'Performance validation testing',
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
            text: 'Boardrooms · Auditoriums · Classrooms · Conference centers · Performance venues',
          },
        ],
      },
      {
        id: 'why-speedlight',
        title: 'Why Speedlight Infosolutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              '✔ Science-based acoustic optimization',
              '✔ Measurable performance enhancement',
              '✔ Environment-specific tuning approach',
            ],
          },
        ],
      },
    ],
  },

  // Display & Visualization Services
  'led-video-walls': {
    id: 'led-video-walls',
    title: 'LED Video Walls',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Create stunning visual impact with LED video wall solutions that deliver brilliant color, seamless imagery, and flexible configurations. Our LED walls range from fine-pitch indoor displays to large-format outdoor installations.',
          },
        ],
      },
      {
        id: 'technologies',
        title: 'LED Technologies',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Fine-pitch LED for close viewing distances',
              'Direct-view LED with seamless tile design',
              'HDR and wide color gamut support',
              'Modular and scalable configurations',
              'Video wall processors and content management',
              'Redundant power and signal distribution',
            ],
          },
        ],
      },
    ],
  },

  'interactive-displays': {
    id: 'interactive-displays',
    title: 'Interactive Touch Displays',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enable collaborative interaction with large-format interactive displays that respond to touch, pen, and gesture input. Our interactive solutions support education, corporate collaboration, and public engagement applications.',
          },
        ],
      },
      {
        id: 'features',
        title: 'Interactive Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Multi-touch and multi-user interaction',
              'Integrated collaboration software',
              'Wireless content sharing and annotation',
              '4K resolution and anti-glare surfaces',
              'Built-in computing and connectivity',
              'Mobile device integration',
            ],
          },
        ],
      },
    ],
  },

  'digital-signage': {
    id: 'digital-signage',
    title: 'Digital Signage Solutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Communicate effectively with dynamic digital signage solutions that deliver the right message to the right audience at the right time. Our signage systems combine professional displays, content management software, and network infrastructure.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Signage Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Centralized content management and scheduling',
              'Multi-location deployment and control',
              'Interactive wayfinding and directories',
              'Real-time data integration and feeds',
              'Emergency messaging and alerts',
              'Analytics and audience measurement',
            ],
          },
        ],
      },
    ],
  },

  'projection-systems': {
    id: 'projection-systems',
    title: 'Projection Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Deliver large-scale visual experiences with professional projection systems designed for education, corporate, and entertainment applications. Our solutions range from single projectors to multi-projector edge-blended installations.',
          },
        ],
      },
      {
        id: 'technologies',
        title: 'Projection Technologies',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Laser phosphor and lamp-based projectors',
              'Ultra-short-throw and standard throw options',
              '4K resolution and HDR support',
              'Edge blending and geometric correction',
              'Projection mapping and immersive displays',
              'Automated screen and lift systems',
            ],
          },
        ],
      },
    ],
  },

  'control-room-displays': {
    id: 'control-room-displays',
    title: 'Control Room Displays',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Monitor critical operations with professional control room display solutions designed for 24/7 reliability and optimal situational awareness. Our systems support security operations centers, network operations centers, and command centers.',
          },
        ],
      },
      {
        id: 'features',
        title: 'Control Room Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Video wall processors and matrix switching',
              'Multi-source display and windowing',
              'Operator workstation displays',
              'Redundant signal paths and failover',
              'Ergonomic viewing and ambient light control',
              'Integration with monitoring and management systems',
            ],
          },
        ],
      },
    ],
  },

  // Enterprise Networking & Connectivity Services
  'structured-cabling': {
    id: 'structured-cabling',
    title: 'Structured Cabling Infrastructure',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Build a reliable foundation for your technology systems with professional structured cabling infrastructure. Our cabling solutions support current requirements while providing scalability for future growth.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Cabling Services',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Category 6A and fiber optic cabling',
              'Pathway design and cable management',
              'Testing and certification',
              'Documentation and labeling',
              'Rack and cabinet installation',
              'Maintenance and troubleshooting',
            ],
          },
        ],
      },
    ],
  },

  'av-over-ip': {
    id: 'av-over-ip',
    title: 'AV-over-IP Solutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Distribute audio and video content over standard network infrastructure with AV-over-IP solutions that provide flexibility, scalability, and cost-effectiveness. Our systems support both compressed and uncompressed video transmission.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'AV-over-IP Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Point-to-point and multicast distribution',
              '4K and HDR video support',
              'Low-latency encoding and decoding',
              'Matrix switching and routing',
              'Integration with control systems',
              'Standards-based protocols (Dante, NDI, SDVoE)',
            ],
          },
        ],
      },
    ],
  },

  'network-switches': {
    id: 'network-switches',
    title: 'Managed Network Switches',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ensure reliable network performance with enterprise-grade managed switches designed for AV and IT convergence. Our switch solutions provide the bandwidth, quality of service, and management features required for modern AV systems.',
          },
        ],
      },
      {
        id: 'features',
        title: 'Switch Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Gigabit and 10-gigabit Ethernet ports',
              'Power over Ethernet (PoE/PoE+)',
              'VLAN and QoS configuration',
              'IGMP snooping for multicast optimization',
              'Redundant power and stacking',
              'Network monitoring and management',
            ],
          },
        ],
      },
    ],
  },

  'wireless-infrastructure': {
    id: 'wireless-infrastructure',
    title: 'Wireless Infrastructure',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Provide seamless wireless connectivity with enterprise wireless infrastructure designed for high-density environments and mobile device support. Our wireless solutions ensure reliable coverage and performance for BYOD and collaboration applications.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Wireless Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Wi-Fi 6 and Wi-Fi 6E access points',
              'Site survey and coverage planning',
              'Centralized management and monitoring',
              'Guest access and authentication',
              'Seamless roaming and load balancing',
              'Security and encryption',
            ],
          },
        ],
      },
    ],
  },

  'video-distribution': {
    id: 'video-distribution',
    title: 'Video Distribution Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Distribute video content to multiple displays and locations with professional video distribution systems. Our solutions support both traditional matrix switching and modern IP-based distribution architectures.',
          },
        ],
      },
      {
        id: 'technologies',
        title: 'Distribution Technologies',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'HDMI and HDBaseT matrix switchers',
              'Video over IP encoders and decoders',
              'Scaling and format conversion',
              'Multi-viewer and video wall processing',
              'Control system integration',
              'HDCP management and EDID control',
            ],
          },
        ],
      },
    ],
  },

  // Intelligent Systems & Control Platforms Services
  'crestron-control': {
    id: 'crestron-control',
    title: 'Crestron Control Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Simplify technology operation with Crestron control systems that provide intuitive interfaces and powerful automation. Our Crestron solutions integrate all aspects of your AV environment into a unified, easy-to-use system.',
          },
        ],
      },
      {
        id: 'features',
        title: 'Crestron Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Touch panel and button panel interfaces',
              'Room scheduling and resource management',
              'Lighting and shade control integration',
              'Video conferencing automation',
              'Mobile device control',
              'Enterprise management and monitoring',
            ],
          },
        ],
      },
    ],
  },

  'extron-control': {
    id: 'extron-control',
    title: 'Extron Control Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Deliver reliable AV control with Extron systems known for their stability and ease of programming. Our Extron solutions provide comprehensive control of audio, video, and environmental systems.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Extron Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Control processors and touch panels',
              'Integrated switching and control',
              'Audio DSP and matrix switching',
              'Video scaling and distribution',
              'Scheduling and room booking',
              'GlobalViewer Enterprise management',
            ],
          },
        ],
      },
    ],
  },

  'room-automation': {
    id: 'room-automation',
    title: 'Room Automation Solutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Create intelligent spaces that respond to occupancy, scheduling, and user preferences with room automation solutions. Our automation systems improve user experience while reducing energy consumption and operational costs.',
          },
        ],
      },
      {
        id: 'features',
        title: 'Automation Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Occupancy-based system control',
              'Automated lighting and shade adjustment',
              'Temperature and climate control',
              'One-touch meeting start',
              'Scheduled system power management',
              'Integration with building management systems',
            ],
          },
        ],
      },
    ],
  },

  'room-scheduling': {
    id: 'room-scheduling',
    title: 'Room Scheduling Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Optimize space utilization with room scheduling systems that integrate with calendar platforms and provide real-time availability information. Our scheduling solutions reduce meeting conflicts and improve resource management.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Scheduling Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Calendar integration (Microsoft 365, Google Workspace)',
              'Room panel displays with availability',
              'Mobile booking and check-in',
              'Analytics and utilization reporting',
              'Automated room release for no-shows',
              'Wayfinding integration',
            ],
          },
        ],
      },
    ],
  },

  'mobile-control': {
    id: 'mobile-control',
    title: 'Mobile Device Control',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Put AV control in users\' hands with mobile device control solutions that work with smartphones and tablets. Our mobile control systems provide intuitive interfaces for managing meeting room technology from personal devices.',
          },
        ],
      },
      {
        id: 'features',
        title: 'Mobile Control Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'iOS and Android app support',
              'Wireless content sharing',
              'Video conferencing control',
              'Audio and video source selection',
              'Lighting and shade adjustment',
              'Room booking and check-in',
            ],
          },
        ],
      },
    ],
  },

  // System Lifecycle & Support Solutions Services
  'system-design': {
    id: 'system-design',
    title: 'System Design & Consultation',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Start your project right with professional system design and consultation services. Our design team works with you to understand requirements, develop solutions, and create detailed documentation for successful implementation.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Design Services',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Needs assessment and requirements gathering',
              'Technology recommendations and system architecture',
              'Detailed design drawings and documentation',
              'Equipment specifications and budgeting',
              'Acoustic modeling and analysis',
              'Project planning and scheduling',
            ],
          },
        ],
      },
    ],
  },

  'installation-commissioning': {
    id: 'installation-commissioning',
    title: 'Installation & Commissioning',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ensure flawless system performance with professional installation and commissioning services. Our certified technicians follow industry best practices to deliver systems that meet specifications and exceed expectations.',
          },
        ],
      },
      {
        id: 'services',
        title: 'Installation Services',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Professional equipment installation and mounting',
              'Cable installation and termination',
              'System integration and programming',
              'Testing and quality assurance',
              'System optimization and tuning',
              'Documentation and as-built drawings',
            ],
          },
        ],
      },
    ],
  },

  'user-training': {
    id: 'user-training',
    title: 'User Training Programs',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Maximize system adoption and effectiveness with comprehensive user training programs. Our training services ensure users understand how to operate technology confidently and take advantage of all system capabilities.',
          },
        ],
      },
      {
        id: 'training',
        title: 'Training Programs',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'End-user operation training',
              'Administrator and IT staff training',
              'Custom training materials and documentation',
              'Hands-on practice sessions',
              'Video tutorials and quick reference guides',
              'Follow-up training and refresher courses',
            ],
          },
        ],
      },
    ],
  },

  'maintenance-support': {
    id: 'maintenance-support',
    title: 'Maintenance & Support Services',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Keep systems running at peak performance with comprehensive maintenance and support services. Our support programs provide peace of mind with preventive maintenance, rapid response, and expert technical assistance.',
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
              '24/7 helpdesk and technical support',
              'Preventive maintenance programs',
              'Emergency repair and replacement',
              'Software updates and patches',
              'System health monitoring',
              'Annual system inspections and optimization',
            ],
          },
        ],
      },
    ],
  },

  'remote-monitoring': {
    id: 'remote-monitoring',
    title: 'Remote Monitoring & Management',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Proactively manage system health and performance with remote monitoring and management services. Our monitoring solutions identify and resolve issues before they impact users, ensuring maximum uptime and reliability.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Monitoring Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Real-time system status monitoring',
              'Automated alerts and notifications',
              'Remote diagnostics and troubleshooting',
              'Usage analytics and reporting',
              'Firmware and software management',
              'Predictive maintenance and trend analysis',
            ],
          },
        ],
      },
    ],
  },
};
