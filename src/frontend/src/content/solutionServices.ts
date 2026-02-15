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
    pageId: 'microsoft-teams-rooms',
    title: 'Microsoft Teams Rooms',
    routePath: '/solutions/workplace-collaboration/microsoft-teams-rooms',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'zoom-rooms',
    title: 'Zoom Rooms',
    routePath: '/solutions/workplace-collaboration/zoom-rooms',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'huddle-room-solutions',
    title: 'Huddle Room Solutions',
    routePath: '/solutions/workplace-collaboration/huddle-room-solutions',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'interactive-whiteboards',
    title: 'Interactive Whiteboards',
    routePath: '/solutions/workplace-collaboration/interactive-whiteboards',
    categoryPageId: 'workplace-collaboration',
  },
  {
    pageId: 'wireless-presentation',
    title: 'Wireless Presentation Systems',
    routePath: '/solutions/workplace-collaboration/wireless-presentation',
    categoryPageId: 'workplace-collaboration',
  },

  // Integrated Professional Sound Systems
  {
    pageId: 'conference-audio',
    title: 'Conference Room Audio Systems',
    routePath: '/solutions/professional-sound/conference-audio',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'auditorium-sound',
    title: 'Auditorium Sound Systems',
    routePath: '/solutions/professional-sound/auditorium-sound',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'wireless-microphones',
    title: 'Wireless Microphone Systems',
    routePath: '/solutions/professional-sound/wireless-microphones',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'dsp-audio-processing',
    title: 'DSP & Audio Processing',
    routePath: '/solutions/professional-sound/dsp-audio-processing',
    categoryPageId: 'professional-sound',
  },
  {
    pageId: 'public-address-systems',
    title: 'Public Address Systems',
    routePath: '/solutions/professional-sound/public-address-systems',
    categoryPageId: 'professional-sound',
  },

  // Display & Visualization Solutions
  {
    pageId: 'led-video-walls',
    title: 'LED Video Walls',
    routePath: '/solutions/display-visualization/led-video-walls',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'interactive-displays',
    title: 'Interactive Touch Displays',
    routePath: '/solutions/display-visualization/interactive-displays',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'digital-signage',
    title: 'Digital Signage Solutions',
    routePath: '/solutions/display-visualization/digital-signage',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'projection-systems',
    title: 'Projection Systems',
    routePath: '/solutions/display-visualization/projection-systems',
    categoryPageId: 'display-visualization',
  },
  {
    pageId: 'control-room-displays',
    title: 'Control Room Displays',
    routePath: '/solutions/display-visualization/control-room-displays',
    categoryPageId: 'display-visualization',
  },

  // Enterprise Networking & Connectivity Solutions
  {
    pageId: 'structured-cabling',
    title: 'Structured Cabling Infrastructure',
    routePath: '/solutions/networking-connectivity/structured-cabling',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'av-over-ip',
    title: 'AV-over-IP Solutions',
    routePath: '/solutions/networking-connectivity/av-over-ip',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'network-switches',
    title: 'Managed Network Switches',
    routePath: '/solutions/networking-connectivity/network-switches',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'wireless-infrastructure',
    title: 'Wireless Infrastructure',
    routePath: '/solutions/networking-connectivity/wireless-infrastructure',
    categoryPageId: 'networking-connectivity',
  },
  {
    pageId: 'video-distribution',
    title: 'Video Distribution Systems',
    routePath: '/solutions/networking-connectivity/video-distribution',
    categoryPageId: 'networking-connectivity',
  },

  // Intelligent Systems & Control Platforms
  {
    pageId: 'crestron-control',
    title: 'Crestron Control Systems',
    routePath: '/solutions/intelligent-systems/crestron-control',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'extron-control',
    title: 'Extron Control Systems',
    routePath: '/solutions/intelligent-systems/extron-control',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'room-automation',
    title: 'Room Automation Solutions',
    routePath: '/solutions/intelligent-systems/room-automation',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'room-scheduling',
    title: 'Room Scheduling Systems',
    routePath: '/solutions/intelligent-systems/room-scheduling',
    categoryPageId: 'intelligent-systems',
  },
  {
    pageId: 'mobile-control',
    title: 'Mobile Device Control',
    routePath: '/solutions/intelligent-systems/mobile-control',
    categoryPageId: 'intelligent-systems',
  },

  // System Lifecycle & Support Solutions
  {
    pageId: 'system-design',
    title: 'System Design & Consultation',
    routePath: '/solutions/lifecycle-support/system-design',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'installation-commissioning',
    title: 'Installation & Commissioning',
    routePath: '/solutions/lifecycle-support/installation-commissioning',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'user-training',
    title: 'User Training Programs',
    routePath: '/solutions/lifecycle-support/user-training',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'maintenance-support',
    title: 'Maintenance & Support Services',
    routePath: '/solutions/lifecycle-support/maintenance-support',
    categoryPageId: 'lifecycle-support',
  },
  {
    pageId: 'remote-monitoring',
    title: 'Remote Monitoring & Management',
    routePath: '/solutions/lifecycle-support/remote-monitoring',
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
