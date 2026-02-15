export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  children?: NavigationItem[];
}

export const navigationConfig: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'solutions',
    label: 'Our Solutions',
    path: '/solutions',
    children: [
      {
        id: 'workplace-collaboration',
        label: 'Workplace Collaboration & Video Conferencing',
        path: '/solutions/workplace-collaboration',
      },
      {
        id: 'professional-sound',
        label: 'Integrated Professional Sound Systems',
        path: '/solutions/professional-sound',
      },
      {
        id: 'display-visualization',
        label: 'Display & Visualization Solutions',
        path: '/solutions/display-visualization',
      },
      {
        id: 'networking-connectivity',
        label: 'Enterprise Networking & Connectivity',
        path: '/solutions/networking-connectivity',
      },
      {
        id: 'intelligent-systems',
        label: 'Intelligent Systems & Control Platforms',
        path: '/solutions/intelligent-systems',
      },
      {
        id: 'lifecycle-support',
        label: 'System Lifecycle & Support Solutions',
        path: '/solutions/lifecycle-support',
      },
    ],
  },
  {
    id: 'industries',
    label: 'Industries We Serve',
    path: '/industries',
    children: [
      {
        id: 'corporate-enterprise',
        label: 'Corporate & Enterprise Offices',
        path: '/industries/corporate-enterprise',
      },
      {
        id: 'education',
        label: 'Education & Digital Classrooms',
        path: '/industries/education',
      },
      {
        id: 'healthcare',
        label: 'Healthcare Facilities',
        path: '/industries/healthcare',
      },
      {
        id: 'manufacturing',
        label: 'Manufacturing & Industrial Facilities',
        path: '/industries/manufacturing',
      },
      {
        id: 'government',
        label: 'Government & Public Sector',
        path: '/industries/government',
      },
      {
        id: 'hospitality',
        label: 'Hospitality & Convention Centers',
        path: '/industries/hospitality',
      },
      {
        id: 'banking',
        label: 'Banking & Financial Institutions',
        path: '/industries/banking',
      },
      {
        id: 'training-centers',
        label: 'Training Centers & Skill Development',
        path: '/industries/training-centers',
      },
      {
        id: 'retail',
        label: 'Retail & Commercial Spaces',
        path: '/industries/retail',
      },
      {
        id: 'live-events',
        label: 'Live Events & Corporate Events',
        path: '/industries/live-events',
      },
    ],
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about',
    children: [
      {
        id: 'our-organization',
        label: 'Our Organization',
        path: '/about/our-organization',
      },
      {
        id: 'why-choose-us',
        label: 'Why Choose Us',
        path: '/about/why-choose-us',
      },
      {
        id: 'case-studies',
        label: 'Case Studies',
        path: '/about/case-studies',
      },
      {
        id: 'careers',
        label: 'Careers',
        path: '/about/careers',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact Us',
    path: '/contact',
  },
];

export function getAllRoutes(items: NavigationItem[] = navigationConfig): NavigationItem[] {
  const routes: NavigationItem[] = [];
  
  items.forEach(item => {
    routes.push(item);
    if (item.children) {
      routes.push(...getAllRoutes(item.children));
    }
  });
  
  return routes;
}
