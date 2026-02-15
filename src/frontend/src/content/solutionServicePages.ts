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
  'microsoft-teams-rooms': {
    id: 'microsoft-teams-rooms',
    title: 'Microsoft Teams Rooms',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Transform your meeting spaces with certified Microsoft Teams Rooms solutions that deliver seamless video conferencing experiences. Our expertly designed and deployed Teams Rooms integrate native Microsoft Teams functionality with professional-grade audio, video, and control systems.',
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
              'One-touch join for scheduled Teams meetings',
              'Native Teams interface on touch panels',
              'Intelligent camera framing and speaker tracking',
              'Content sharing with HDMI ingest',
              'Dual-screen support for content and video',
              'Microsoft certified hardware and software',
            ],
          },
        ],
      },
      {
        id: 'benefits',
        title: 'Benefits',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enhance hybrid meeting equity, simplify user experience, ensure enterprise-grade security, and maximize your Microsoft 365 investment with purpose-built Teams Rooms solutions.',
          },
        ],
      },
    ],
  },

  'zoom-rooms': {
    id: 'zoom-rooms',
    title: 'Zoom Rooms',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Deploy Zoom Rooms certified solutions that bring the power of Zoom video conferencing to your physical meeting spaces. Our Zoom Rooms implementations provide consistent, reliable video collaboration experiences across all room sizes.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Zoom Rooms certified hardware bundles',
              'Wireless content sharing with Zoom Rooms',
              'Calendar integration and room scheduling',
              'Zoom Phone integration for unified communications',
              'Remote management and monitoring',
              'Zoom Rooms Controller for intuitive operation',
            ],
          },
        ],
      },
    ],
  },

  'huddle-room-solutions': {
    id: 'huddle-room-solutions',
    title: 'Huddle Room Solutions',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Optimize small meeting spaces with purpose-built huddle room solutions that deliver big meeting room capabilities in compact footprints. Perfect for 2-6 person collaboration spaces, our huddle room packages provide professional video conferencing at an accessible price point.',
          },
        ],
      },
      {
        id: 'components',
        title: 'Solution Components',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'All-in-one video bars with integrated camera, microphone, and speaker',
              'Compact touch controllers or wireless control',
              'Single-cable USB connectivity for BYOD scenarios',
              'Small-format displays optimized for close viewing',
              'Wireless presentation and content sharing',
            ],
          },
        ],
      },
    ],
  },

  'interactive-whiteboards': {
    id: 'interactive-whiteboards',
    title: 'Interactive Whiteboards',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enable dynamic collaboration with interactive whiteboard solutions that combine digital displays with intuitive touch and pen input. Our interactive whiteboards support brainstorming, annotation, and content sharing for in-room and remote participants.',
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
              'Multi-touch and pen input with palm rejection',
              'Native whiteboarding apps and annotation tools',
              'Integration with Microsoft Whiteboard and Miro',
              'Save and share whiteboard sessions',
              'Wireless screen mirroring from any device',
              'Built-in video conferencing capabilities',
            ],
          },
        ],
      },
    ],
  },

  'wireless-presentation': {
    id: 'wireless-presentation',
    title: 'Wireless Presentation Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Eliminate cables and streamline content sharing with wireless presentation systems that support BYOD environments. Our solutions enable seamless screen sharing from laptops, tablets, and smartphones to meeting room displays.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Presentation Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Cross-platform support (Windows, Mac, iOS, Android)',
              'App-based and app-free connection options',
              'Multi-user collaboration with split-screen',
              'Moderation and host controls',
              'AirPlay, Miracast, and Chromecast support',
              'Enterprise security and network integration',
            ],
          },
        ],
      },
    ],
  },

  // Professional Sound Services
  'conference-audio': {
    id: 'conference-audio',
    title: 'Conference Room Audio Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ensure crystal-clear audio in every meeting with professional conference room audio systems designed for speech intelligibility and natural conversation. Our solutions eliminate echo, reduce background noise, and provide consistent audio coverage.',
          },
        ],
      },
      {
        id: 'components',
        title: 'Audio Components',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Ceiling and tabletop microphone arrays',
              'Beamforming and acoustic echo cancellation',
              'Integrated speakers with optimized placement',
              'DSP-based audio processing and mixing',
              'USB and network audio connectivity',
              'Dante and AES67 audio networking',
            ],
          },
        ],
      },
    ],
  },

  'auditorium-sound': {
    id: 'auditorium-sound',
    title: 'Auditorium Sound Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Deliver powerful, intelligible audio to large audiences with professionally designed auditorium sound systems. Our solutions provide even coverage, speech clarity, and musical fidelity for presentations, performances, and events.',
          },
        ],
      },
      {
        id: 'systems',
        title: 'System Design',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Line array and point-source speaker systems',
              'Acoustic modeling and system optimization',
              'Wireless and wired microphone systems',
              'Digital mixing consoles and processors',
              'Assistive listening system integration',
              'Recording and streaming audio infrastructure',
            ],
          },
        ],
      },
    ],
  },

  'wireless-microphones': {
    id: 'wireless-microphones',
    title: 'Wireless Microphone Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Provide presenters with freedom of movement using professional wireless microphone systems with reliable RF performance and broadcast-quality audio. Our solutions support handheld, lapel, and headset microphone configurations.',
          },
        ],
      },
      {
        id: 'features',
        title: 'System Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Digital wireless transmission for interference-free operation',
              'Automatic frequency coordination and scanning',
              'Rechargeable battery systems with runtime monitoring',
              'Multiple microphone types (handheld, lavalier, headset)',
              'Networked monitoring and control',
              'Dante audio output for system integration',
            ],
          },
        ],
      },
    ],
  },

  'dsp-audio-processing': {
    id: 'dsp-audio-processing',
    title: 'DSP & Audio Processing',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Optimize audio quality and system performance with digital signal processing solutions that provide precise control over every aspect of your audio system. Our DSP platforms enable sophisticated audio routing, mixing, and processing.',
          },
        ],
      },
      {
        id: 'capabilities',
        title: 'Processing Capabilities',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Acoustic echo cancellation and noise reduction',
              'Automatic gain control and limiting',
              'Parametric EQ and crossover filtering',
              'Audio routing and matrix mixing',
              'Feedback suppression and room tuning',
              'Dante and AES67 network audio processing',
            ],
          },
        ],
      },
    ],
  },

  'public-address-systems': {
    id: 'public-address-systems',
    title: 'Public Address Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Communicate effectively across large facilities with public address and mass notification systems. Our PA solutions provide clear announcements, background music, and emergency notifications throughout your organization.',
          },
        ],
      },
      {
        id: 'applications',
        title: 'System Applications',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Campus-wide paging and announcements',
              'Emergency notification and life safety',
              'Background music and sound masking',
              'Zone-based audio distribution',
              'Integration with fire alarm and security systems',
              'Scheduled announcements and bell schedules',
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
            text: 'Create stunning visual impact with LED video wall solutions that deliver seamless, high-brightness displays at any size. Our LED video walls provide superior image quality for corporate lobbies, control rooms, retail environments, and event spaces.',
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
              'Indoor and outdoor LED display options',
              'Curved and creative LED configurations',
              'High dynamic range (HDR) and wide color gamut',
              'Modular panels for flexible sizing',
              'Front and rear serviceability options',
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
            text: 'Engage audiences with interactive touch displays that respond to multi-touch gestures and pen input. Our interactive displays support collaboration, wayfinding, product exploration, and educational applications.',
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
              '4K and 8K ultra-high-definition resolution',
              'Multi-touch with up to 40 simultaneous touch points',
              'Pen and stylus input with pressure sensitivity',
              'Anti-glare and anti-fingerprint coatings',
              'Built-in computing and wireless connectivity',
              'Portrait and landscape orientation support',
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
            text: 'Communicate dynamically with digital signage solutions that deliver targeted content to the right audience at the right time. Our digital signage platforms support corporate communications, wayfinding, advertising, and information display.',
          },
        ],
      },
      {
        id: 'platform',
        title: 'Signage Platform',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Cloud-based content management system',
              'Scheduled and triggered content playback',
              'Multi-zone layouts and playlists',
              'Data integration for real-time information',
              'Remote monitoring and device management',
              'Analytics and proof-of-play reporting',
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
            text: 'Deliver large-scale visual presentations with professional projection systems designed for auditoriums, classrooms, and large meeting spaces. Our projection solutions provide bright, clear images with flexible installation options.',
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
              'Laser phosphor projectors with long lamp life',
              'Ultra-short-throw and standard-throw options',
              '4K resolution and HDR support',
              'Edge-blending for seamless multi-projector displays',
              'Motorized lenses and lens shift',
              'Network monitoring and control',
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
            text: 'Monitor critical operations with control room display solutions designed for 24/7 operation and mission-critical applications. Our control room displays provide reliable performance, flexible configuration, and comprehensive source management.',
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
              'Ultra-narrow bezel video walls',
              '24/7 rated displays with extended warranties',
              'Video wall processors and controllers',
              'Multi-source display and windowing',
              'Redundant power and failover capabilities',
              'Calibration and color uniformity',
            ],
          },
        ],
      },
    ],
  },

  // Networking & Connectivity Services
  'structured-cabling': {
    id: 'structured-cabling',
    title: 'Structured Cabling Infrastructure',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Build a reliable foundation for your AV and IT systems with professionally designed and installed structured cabling infrastructure. Our cabling solutions support current and future technology requirements with industry-standard performance.',
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
              'Cat6A and Cat7 copper cabling',
              'Single-mode and multi-mode fiber optic cabling',
              'Cable pathway design and installation',
              'Rack and cabinet infrastructure',
              'Cable testing and certification',
              'Documentation and labeling',
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
            text: 'Distribute audio and video over standard network infrastructure with AV-over-IP solutions that provide flexibility, scalability, and cost-effectiveness. Our AV-over-IP systems support 4K video, low latency, and unlimited endpoints.',
          },
        ],
      },
      {
        id: 'technologies',
        title: 'AV-over-IP Technologies',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'SDVoE (Software Defined Video over Ethernet)',
              'Dante AV for audio and video distribution',
              'NDI (Network Device Interface) support',
              'JPEG 2000 and H.264/H.265 compression',
              'Zero-latency switching and routing',
              'Centralized management and control',
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
            text: 'Ensure reliable network performance for AV systems with managed network switches optimized for audio and video traffic. Our network solutions provide the bandwidth, quality of service, and redundancy required for professional AV applications.',
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
              'Gigabit and 10-Gigabit Ethernet ports',
              'Power over Ethernet (PoE/PoE+/PoE++) support',
              'VLAN and QoS configuration for AV traffic',
              'IGMP snooping for multicast optimization',
              'Redundant power supplies and stacking',
              'Network monitoring and SNMP management',
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
            text: 'Enable mobile collaboration and BYOD scenarios with enterprise-grade wireless infrastructure. Our wireless solutions provide secure, high-performance connectivity for wireless presentation, mobile control, and device connectivity.',
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
              'Site survey and RF planning',
              'Guest network and captive portal',
              'Wireless security and authentication',
              'Centralized wireless controller',
              'Roaming and load balancing',
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
            text: 'Distribute video signals throughout your facility with flexible video distribution systems that support multiple sources and displays. Our solutions provide reliable signal extension, switching, and routing for any application.',
          },
        ],
      },
      {
        id: 'systems',
        title: 'Distribution Systems',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'HDMI and DisplayPort matrix switchers',
              'HDBaseT extenders and distribution',
              'Fiber optic video transmission',
              'Video scalers and format converters',
              'Multi-viewer and video wall processors',
              'Control system integration',
            ],
          },
        ],
      },
    ],
  },

  // Intelligent Systems Services
  'crestron-control': {
    id: 'crestron-control',
    title: 'Crestron Control Systems',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Simplify complex AV environments with Crestron control systems that provide intuitive operation and centralized management. Our Crestron solutions integrate all room technologies into a single, easy-to-use interface.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Crestron Solutions',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Crestron Flex unified communications systems',
              'Crestron Mercury tabletop conferencing',
              'Touch panel and button panel interfaces',
              'Crestron Home automation integration',
              'XiO Cloud provisioning and management',
              'Custom programming and user interfaces',
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
            text: 'Deploy reliable Extron control systems that combine control, switching, and signal processing in integrated solutions. Our Extron implementations provide consistent user experiences and simplified system management.',
          },
        ],
      },
      {
        id: 'products',
        title: 'Extron Products',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Extron Pro Series control processors',
              'TouchLink Pro touchpanels and controllers',
              'Extron Room Scheduling solutions',
              'Integrated switcher/control systems',
              'Global Configurator programming software',
              'Extron AV switching and distribution',
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
            text: 'Enhance user experience and energy efficiency with intelligent room automation that responds to occupancy, schedules, and environmental conditions. Our automation solutions integrate AV, lighting, shades, and HVAC control.',
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
              'Occupancy-based system power management',
              'Automated lighting and shade control',
              'Temperature and climate control integration',
              'Preset scenes for different meeting types',
              'Calendar integration for scheduled automation',
              'Energy monitoring and reporting',
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
            text: 'Optimize meeting room utilization with intelligent room scheduling systems that integrate with your calendar platform. Our scheduling solutions provide real-time room availability, booking management, and usage analytics.',
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
              'Microsoft 365 and Google Workspace integration',
              'Room panel displays with touch interface',
              'Mobile app for room booking and wayfinding',
              'Check-in and no-show detection',
              'Room utilization analytics and reporting',
              'Hot-desking and workspace reservation',
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
            text: 'Empower users to control meeting room technology from their personal mobile devices. Our mobile control solutions provide intuitive apps and web interfaces for AV system operation without dedicated touch panels.',
          },
        ],
      },
      {
        id: 'features',
        title: 'Mobile Features',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'iOS and Android native apps',
              'Web-based control interfaces',
              'BYOD support without app installation',
              'Source selection and volume control',
              'Preset recall and system power',
              'Help and support integration',
            ],
          },
        ],
      },
    ],
  },

  // Lifecycle Support Services
  'system-design': {
    id: 'system-design',
    title: 'System Design & Consultation',
    sections: [
      {
        id: 'overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'Partner with our experienced design team to create AV solutions that meet your specific requirements and budget. Our consultation and design services ensure your technology investments deliver maximum value and performance.',
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
              'Budget estimation and value engineering',
              'Acoustic modeling and room analysis',
              'Standards compliance and best practices',
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
            text: 'Ensure flawless system deployment with professional installation and commissioning services. Our certified technicians follow industry best practices to deliver systems that perform to specification from day one.',
          },
        ],
      },
      {
        id: 'process',
        title: 'Installation Process',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'Project management and coordination',
              'Equipment installation and rack building',
              'Cable termination and testing',
              'System programming and configuration',
              'Testing, calibration, and optimization',
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
            text: 'Maximize system adoption and user satisfaction with comprehensive training programs tailored to your organization. Our training services ensure users can confidently operate technology and troubleshoot common issues.',
          },
        ],
      },
      {
        id: 'training',
        title: 'Training Options',
        blocks: [
          {
            type: 'list',
            ordered: false,
            items: [
              'End-user training for meeting room operation',
              'Administrator training for system management',
              'Train-the-trainer programs',
              'Custom training materials and quick reference guides',
              'On-site and remote training sessions',
              'Ongoing training for new employees',
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
            text: 'Protect your technology investment with proactive maintenance and responsive support services. Our support programs minimize downtime, extend system life, and ensure consistent performance.',
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
              '24/7 helpdesk and remote support',
              'Preventive maintenance visits',
              'Priority response for critical issues',
              'Spare parts inventory and management',
              'Software updates and security patches',
              'Extended warranty and equipment replacement',
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
            text: 'Gain visibility into system health and performance with remote monitoring and management services. Our monitoring solutions provide proactive alerts, usage analytics, and remote troubleshooting capabilities.',
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
              'Automated alerts for system issues',
              'Usage analytics and reporting',
              'Remote diagnostics and troubleshooting',
              'Firmware and software update management',
              'Predictive maintenance and trend analysis',
            ],
          },
        ],
      },
    ],
  },
};

/**
 * Get page content for a service by pageId
 */
export function getServicePageContent(pageId: string): PageContent | undefined {
  return solutionServicePages[pageId];
}

/**
 * Get all service page IDs
 */
export function getAllServicePageIds(): string[] {
  return Object.keys(solutionServicePages);
}
