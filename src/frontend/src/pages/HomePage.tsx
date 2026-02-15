import { Link } from '@tanstack/react-router';
import HeroSection from '../components/sections/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Presentation, Volume2, Monitor, Network, Settings, Headphones } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
import { BRAND } from '../site/brand';
import BrandButton from '../components/brand/BrandButton';

export default function HomePage() {
  usePageTitle(`${BRAND.name} - Audiovisual & Technology Solutions`);

  const solutions = [
    {
      icon: Presentation,
      title: 'Workplace Collaboration',
      description: 'Video conferencing and collaboration technologies for modern workspaces.',
      link: '/solutions/workplace-collaboration',
    },
    {
      icon: Volume2,
      title: 'Professional Sound',
      description: 'Integrated audio systems for crystal-clear communication.',
      link: '/solutions/professional-sound',
    },
    {
      icon: Monitor,
      title: 'Display Solutions',
      description: 'Stunning visual experiences from displays to video walls.',
      link: '/solutions/display-visualization',
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Enterprise-grade connectivity and AV-over-IP solutions.',
      link: '/solutions/networking-connectivity',
    },
    {
      icon: Settings,
      title: 'Control Systems',
      description: 'Intelligent automation and control platforms.',
      link: '/solutions/intelligent-systems',
    },
    {
      icon: Headphones,
      title: 'Lifecycle Support',
      description: 'Comprehensive support from design to maintenance.',
      link: '/solutions/lifecycle-support',
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Solutions Overview */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Comprehensive AV Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consultation to implementation and ongoing support, we deliver end-to-end audiovisual and technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <Card key={idx} className="border-border/40 hover:border-primary/50 transition-all hover:shadow-soft">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{solution.description}</CardDescription>
                  <Link to={solution.link as any} className="text-link hover:text-link-hover transition-colors text-sm font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for diverse sectors with unique communication needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Corporate', link: '/industries/corporate-enterprise' },
              { label: 'Education', link: '/industries/education' },
              { label: 'Healthcare', link: '/industries/healthcare' },
              { label: 'Manufacturing', link: '/industries/manufacturing' },
              { label: 'Government', link: '/industries/government' },
              { label: 'Hospitality', link: '/industries/hospitality' },
              { label: 'Banking', link: '/industries/banking' },
              { label: 'Training', link: '/industries/training-centers' },
              { label: 'Retail', link: '/industries/retail' },
              { label: 'Events', link: '/industries/live-events' },
            ].map((industry, idx) => (
              <Link
                key={idx}
                to={industry.link as any}
                className="p-4 bg-card border border-border/40 rounded-lg text-center hover:border-primary/50 hover:shadow-soft transition-all"
              >
                <span className="text-sm font-medium">{industry.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <BrandButton asChild brandVariant="secondary" size="lg">
              <Link to="/industries">View All Industries</Link>
            </BrandButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our audiovisual solutions can enhance your communication and collaboration capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BrandButton asChild size="lg" brandVariant="primary">
              <Link to="/contact">Contact Us Today</Link>
            </BrandButton>
            <BrandButton asChild size="lg" brandVariant="secondary">
              <Link to="/about">Learn About Us</Link>
            </BrandButton>
          </div>
        </div>
      </section>
    </div>
  );
}
