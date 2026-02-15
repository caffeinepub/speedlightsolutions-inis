import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from '../components/layout/SiteLayout';
import HomePage from '../pages/HomePage';
import ContentPage from '../pages/ContentPage';
import NotFoundPage from '../pages/NotFoundPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

// Our Solutions
const solutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions',
  component: () => <ContentPage pageId="solutions" />,
});

const workplaceCollaborationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions/workplace-collaboration',
  component: () => <ContentPage pageId="workplace-collaboration" />,
});

const professionalSoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions/professional-sound',
  component: () => <ContentPage pageId="professional-sound" />,
});

const displayVisualizationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions/display-visualization',
  component: () => <ContentPage pageId="display-visualization" />,
});

const networkingConnectivityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions/networking-connectivity',
  component: () => <ContentPage pageId="networking-connectivity" />,
});

const intelligentSystemsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions/intelligent-systems',
  component: () => <ContentPage pageId="intelligent-systems" />,
});

const lifecycleSupportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions/lifecycle-support',
  component: () => <ContentPage pageId="lifecycle-support" />,
});

// Industries We Serve
const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries',
  component: () => <ContentPage pageId="industries" />,
});

const corporateEnterpriseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/corporate-enterprise',
  component: () => <ContentPage pageId="corporate-enterprise" />,
});

const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/education',
  component: () => <ContentPage pageId="education" />,
});

const healthcareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/healthcare',
  component: () => <ContentPage pageId="healthcare" />,
});

const manufacturingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/manufacturing',
  component: () => <ContentPage pageId="manufacturing" />,
});

const governmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/government',
  component: () => <ContentPage pageId="government" />,
});

const hospitalityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/hospitality',
  component: () => <ContentPage pageId="hospitality" />,
});

const bankingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/banking',
  component: () => <ContentPage pageId="banking" />,
});

const trainingCentersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/training-centers',
  component: () => <ContentPage pageId="training-centers" />,
});

const retailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/retail',
  component: () => <ContentPage pageId="retail" />,
});

const liveEventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industries/live-events',
  component: () => <ContentPage pageId="live-events" />,
});

// About Us
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <ContentPage pageId="about" />,
});

const ourOrganizationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/our-organization',
  component: () => <ContentPage pageId="our-organization" />,
});

const whyChooseUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/why-choose-us',
  component: () => <ContentPage pageId="why-choose-us" />,
});

const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/case-studies',
  component: () => <ContentPage pageId="case-studies" />,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/careers',
  component: () => <ContentPage pageId="careers" />,
});

// Contact
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: () => <ContentPage pageId="contact" />,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  solutionsRoute,
  workplaceCollaborationRoute,
  professionalSoundRoute,
  displayVisualizationRoute,
  networkingConnectivityRoute,
  intelligentSystemsRoute,
  lifecycleSupportRoute,
  industriesRoute,
  corporateEnterpriseRoute,
  educationRoute,
  healthcareRoute,
  manufacturingRoute,
  governmentRoute,
  hospitalityRoute,
  bankingRoute,
  trainingCentersRoute,
  retailRoute,
  liveEventsRoute,
  aboutRoute,
  ourOrganizationRoute,
  whyChooseUsRoute,
  caseStudiesRoute,
  careersRoute,
  contactRoute,
  notFoundRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
