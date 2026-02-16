/**
 * Solution Services Registry
 * 
 * Single source of truth mapping Solutions category pageIds to their service definitions.
 * Each service has a unique pageId, title, route path, and belongs to a parent solution category.
 */

export interface ServiceDefinition {
  pageId: string;
  title: string;
  routePath: string;
  categoryPageId: string;
}

export const solutionServices: ServiceDefinition[] = [
  // Workplace Collaboration & Video Conferencing Technologies
  {
    pageId: 'executive-boardroom-conference-room-av-integration',
    title: 'Executive Boardroom & Conference Room AV Integration',
    routePath: '/solutions/workplace-collaboration/executive-boardroom-conference-room-av-integration',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'smart-meeting-room-solutions',
    title: 'Smart Meeting Room Solutions',
    routePath: '/solutions/workplace-collaboration/smart-meeting-room-solutions',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'huddle-room-small-room-collaboration-setup',
    title: 'Huddle Room & Small Room Collaboration Setup',
    routePath: '/solutions/workplace-collaboration/huddle-room-small-room-collaboration-setup',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'wireless-presentation-screen-sharing-systems',
    title: 'Wireless Presentation & Screen Sharing Systems',
    routePath: '/solutions/workplace-collaboration/wireless-presentation-screen-sharing-systems',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'enterprise-townhall-auditorium-av-solutions',
    title: 'Enterprise Townhall & Auditorium AV Solutions',
    routePath: '/solutions/workplace-collaboration/enterprise-townhall-auditorium-av-solutions',
    categoryPageId: 'workplace-collaboration',
  },

  // Integrated Professional Sound Systems
  {
    pageId: 'commercial-audio-system-design-installation',
    title: 'Commercial Audio System Design & Installation',
    routePath: '/solutions/professional-sound/commercial-audio-system-design-installation',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'conference-boardroom-audio-solutions',
    title: 'Conference & Boardroom Audio Solutions',
    routePath: '/solutions/professional-sound/conference-boardroom-audio-solutions',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'public-address-pa-announcement-systems',
    title: 'Public Address (PA) & Announcement Systems',
    routePath: '/solutions/professional-sound/public-address-pa-announcement-systems',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'background-music-systems',
    title: 'Background Music Systems',
    routePath: '/solutions/professional-sound/background-music-systems',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'live-sound-event-audio-solutions',
    title: 'Live Sound & Event Audio Solutions',
    routePath: '/solutions/professional-sound/live-sound-event-audio-solutions',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'acoustic-consulting-sound-optimization',
    title: 'Acoustic Consulting & Sound Optimization',
    routePath: '/solutions/professional-sound/acoustic-consulting-sound-optimization',
    categoryPageId: 'professional-sound',
  },

  // Display & Visualization Solutions
  {
    pageId: 'commercial-display-systems-installation',
    title: 'Commercial Display Systems Installation',
    routePath: '/solutions/display-visualization/commercial-display-systems-installation',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'video-wall-solutions',
    title: 'Video Wall Solutions',
    routePath: '/solutions/display-visualization/video-wall-solutions',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'interactive-display-smart-classroom-solutions',
    title: 'Interactive Display & Smart Classroom Solutions',
    routePath: '/solutions/display-visualization/interactive-display-smart-classroom-solutions',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'digital-signage-solutions',
    title: 'Digital Signage Solutions',
    routePath: '/solutions/display-visualization/digital-signage-solutions',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'integrated-projection-large-format-display-systems',
    title: 'Integrated Projection & Large-Format Display Systems',
    routePath: '/solutions/display-visualization/integrated-projection-large-format-display-systems',
    categoryPageId: 'display-visualization',
  },

  // Enterprise Networking & Connectivity Solutions
  {
    pageId: 'structured-cabling-infrastructure-systems',
    title: 'Structured Cabling Infrastructure Systems',
    routePath: '/solutions/networking-connectivity/structured-cabling-infrastructure-systems',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'lan-wan-wireless-network-deployment',
    title: 'LAN, WAN & Wireless Network Deployment',
    routePath: '/solutions/networking-connectivity/lan-wan-wireless-network-deployment',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'av-over-ip-network-infrastructure',
    title: 'AV over IP Network Infrastructure',
    routePath: '/solutions/networking-connectivity/av-over-ip-network-infrastructure',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'network-security-access-control-solutions',
    title: 'Network Security & Access Control Solutions',
    routePath: '/solutions/networking-connectivity/network-security-access-control-solutions',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'data-center-server-room-infrastructure',
    title: 'Data Center & Server Room Infrastructure',
    routePath: '/solutions/networking-connectivity/data-center-server-room-infrastructure',
    categoryPageId: 'networking-connectivity',
  },

  // Intelligent Systems & Control Platforms
  {
    pageId: 'centralized-av-control-system-integration',
    title: 'Centralized AV Control System Integration',
    routePath: '/solutions/intelligent-systems/centralized-av-control-system-integration',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'room-automation-control-systems',
    title: 'Room Automation & Control Systems',
    routePath: '/solutions/intelligent-systems/room-automation-control-systems',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'multi-room-campus-wide-control-platforms',
    title: 'Multi-Room & Campus-Wide Control Platforms',
    routePath: '/solutions/intelligent-systems/multi-room-campus-wide-control-platforms',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'control-system-programming-custom-interface-development',
    title: 'Control System Programming & Custom Interface Development',
    routePath: '/solutions/intelligent-systems/control-system-programming-custom-interface-development',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'intelligent-residential-automation-solutions',
    title: 'Intelligent Residential Automation Solutions',
    routePath: '/solutions/intelligent-systems/intelligent-residential-automation-solutions',
    categoryPageId: 'intelligent-systems',
  },

  // System Lifecycle & Support Solutions
  {
    pageId: 'system-upgrades-expansion',
    title: 'System Upgrades & Expansion',
    routePath: '/solutions/lifecycle-support/system-upgrades-expansion',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'amc-preventive-maintenance-support',
    title: 'AMC & Preventive Maintenance Support',
    routePath: '/solutions/lifecycle-support/amc-preventive-maintenance-support',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'troubleshooting-performance-optimization',
    title: 'Troubleshooting & Performance Optimization',
    routePath: '/solutions/lifecycle-support/troubleshooting-performance-optimization',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'system-relocation-reinstallation-services',
    title: 'System Relocation & Reinstallation Services',
    routePath: '/solutions/lifecycle-support/system-relocation-reinstallation-services',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'emergency-repair-services',
    title: 'Emergency Repair Services',
    routePath: '/solutions/lifecycle-support/emergency-repair-services',
    categoryPageId: 'lifecycle-support',
  },
];

/**
 * Get all services for a specific solution category
 */
export function getServicesForCategory(categoryPageId: string): ServiceDefinition[] {
  return solutionServices.filter(service => service.categoryPageId === categoryPageId);
}

/**
 * Get service definition by pageId
 */
export function getServiceByPageId(pageId: string): ServiceDefinition | undefined {
  return solutionServices.find(service => service.pageId === pageId);
}

/**
 * Get all unique solution category pageIds
 */
export function getAllCategoryPageIds(): string[] {
  return Array.from(new Set(solutionServices.map(s => s.categoryPageId)));
}
