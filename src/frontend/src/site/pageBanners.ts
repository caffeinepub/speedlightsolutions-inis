/**
 * Page banner image mapping
 * Maps each pageId to its corresponding hero/banner image with alt text
 */

export interface PageBanner {
  imagePath: string;
  alt: string;
}

export const pageBanners: Record<string, PageBanner> = {
  // Solutions
  'solutions': {
    imagePath: '/assets/generated/solutions-hero.dim_1600x900.png',
    alt: 'Comprehensive audiovisual and technology solutions',
  },
  'workplace-collaboration': {
    imagePath: '/assets/generated/workplace-collaboration-hero.dim_1600x900.png',
    alt: 'Modern workplace collaboration and video conferencing technology',
  },
  'professional-sound': {
    imagePath: '/assets/generated/professional-sound-hero.dim_1600x900.png',
    alt: 'Professional integrated sound systems',
  },
  'display-visualization': {
    imagePath: '/assets/generated/display-visualization-hero.dim_1600x900.png',
    alt: 'Display and visualization solutions',
  },
  'networking-connectivity': {
    imagePath: '/assets/generated/networking-connectivity-hero.dim_1600x900.png',
    alt: 'Enterprise networking and connectivity infrastructure',
  },
  'intelligent-systems': {
    imagePath: '/assets/generated/intelligent-systems-hero.dim_1600x900.png',
    alt: 'Intelligent control systems and automation platforms',
  },
  'lifecycle-support': {
    imagePath: '/assets/generated/lifecycle-support-hero.dim_1600x900.png',
    alt: 'Comprehensive system lifecycle and support services',
  },

  // Industries
  'industries': {
    imagePath: '/assets/generated/industries-hero.dim_1600x900.png',
    alt: 'Industries we serve with AV solutions',
  },
  'corporate-enterprise': {
    imagePath: '/assets/generated/corporate-enterprise-hero.dim_1600x900.png',
    alt: 'Corporate and enterprise office solutions',
  },
  'education': {
    imagePath: '/assets/generated/education-hero.dim_1600x900.png',
    alt: 'Education and digital classroom technology',
  },
  'healthcare': {
    imagePath: '/assets/generated/healthcare-hero.dim_1600x900.png',
    alt: 'Healthcare facility AV and communication systems',
  },
  'manufacturing': {
    imagePath: '/assets/generated/manufacturing-hero.dim_1600x900.png',
    alt: 'Manufacturing and industrial facility solutions',
  },
  'government': {
    imagePath: '/assets/generated/government-hero.dim_1600x900.png',
    alt: 'Government and public sector technology solutions',
  },
  'hospitality': {
    imagePath: '/assets/generated/hospitality-hero.dim_1600x900.png',
    alt: 'Hospitality and convention center AV systems',
  },
  'banking': {
    imagePath: '/assets/generated/banking-hero.dim_1600x900.png',
    alt: 'Banking and financial institution technology',
  },
  'training-centers': {
    imagePath: '/assets/generated/training-centers-hero.dim_1600x900.png',
    alt: 'Training centers and skill development facilities',
  },
  'retail': {
    imagePath: '/assets/generated/retail-hero.dim_1600x900.png',
    alt: 'Retail and commercial space solutions',
  },
  'live-events': {
    imagePath: '/assets/generated/live-events-hero.dim_1600x900.png',
    alt: 'Live events and corporate event technology',
  },

  // About
  'about': {
    imagePath: '/assets/generated/about-hero.dim_1600x900.png',
    alt: 'About Speedlight Solutions',
  },
  'our-organization': {
    imagePath: '/assets/generated/our-organization-hero.dim_1600x900.png',
    alt: 'Our organization and team',
  },
  'why-choose-us': {
    imagePath: '/assets/generated/why-choose-us-hero.dim_1600x900.png',
    alt: 'Why choose Speedlight Solutions',
  },
  'case-studies': {
    imagePath: '/assets/generated/case-studies-hero.dim_1600x900.png',
    alt: 'Customer success stories and case studies',
  },
  'careers': {
    imagePath: '/assets/generated/careers-hero.dim_1600x900.png',
    alt: 'Career opportunities at Speedlight Solutions',
  },

  // Contact
  'contact': {
    imagePath: '/assets/generated/contact-hero.dim_1600x900.png',
    alt: 'Contact Speedlight Solutions',
  },
};
