import { Link } from '@tanstack/react-router';
import HeroSection from '../components/sections/HeroSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePageTitle } from '../hooks/usePageTitle';
import { BRAND } from '../site/brand';
import BrandButton from '../components/brand/BrandButton';

export default function HomePage() {
  usePageTitle(`${BRAND.name} - Audiovisual & Technology Solutions`);

  const coreExpertise = [
    {
      number: '1️⃣',
      title: 'Workplace Collaboration & Video Conferencing',
      description: 'Enterprise-grade meeting rooms, smart collaboration spaces, hybrid work environments, and large-scale townhall AV systems.',
    },
    {
      number: '2️⃣',
      title: 'Integrated Professional Sound Systems',
      description: 'Commercial audio, conferencing systems, PA solutions, background music, live sound, and acoustic optimization.',
    },
    {
      number: '3️⃣',
      title: 'Display & Visualization Solutions',
      description: 'Commercial displays, video walls, interactive panels, digital signage, and projection systems.',
    },
    {
      number: '4️⃣',
      title: 'Enterprise Networking & Connectivity',
      description: 'Structured cabling, LAN/WAN infrastructure, wireless networks, AV over IP, and data center environments.',
    },
    {
      number: '5️⃣',
      title: 'Intelligent Systems & Control Platforms',
      description: 'Centralized AV control, room automation, multi-room management, and customized control programming.',
    },
    {
      number: '6️⃣',
      title: 'System Lifecycle & Support Solutions',
      description: 'Upgrades, AMC programs, optimization, relocation services, and emergency support.',
    },
  ];

  const whyChooseUs = [
    'Enterprise-focused design approach',
    'Vendor-neutral technology advisory',
    'Certified engineering & installation teams',
    'Scalable and future-ready architecture',
    'Long-term lifecycle support',
    'Proven multi-domain integration capability',
  ];

  const technologyPartners = [
    'Poly · Yealink · Logitech · Cisco · Microsoft Teams Rooms',
    'QSC · JBL · Bose · Biamp · Shure · Sennheiser · Yamaha',
    'Samsung · LG · Sony · ViewSonic · BenQ · Epson · Panasonic · NEC',
    'Crestron · AMX · Extron · Kramer · Barco',
    'Netgear · Juniper Networks · Aruba · CommScope',
  ];

  const industries = [
    'Corporate & Enterprise Offices',
    'Education & Digital Classrooms',
    'Healthcare Facilities',
    'Manufacturing & Industrial Facilities',
    'Government & Public Sector',
    'Hospitality & Convention Centers',
    'Banking & Financial Institution',
    'Training Centers & Skill Development Institutes',
    'Retail & Commercial Spaces',
    'Live Events & Corporate Events',
  ];

  const approachSteps = [
    {
      number: '01',
      title: 'Consult',
      description: 'Requirement analysis and environment assessment.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Custom architecture and system planning.',
    },
    {
      number: '03',
      title: 'Integrate',
      description: 'Professional installation and system configuration.',
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Testing, calibration, and performance validation.',
    },
    {
      number: '05',
      title: 'Support',
      description: 'Lifecycle management and technical assistance.',
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Our Core Expertise */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Core Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end technology integration across six specialized domains:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreExpertise.map((item, idx) => (
            <Card key={idx} className="border-border/40 hover:border-primary/50 transition-all hover:shadow-soft">
              <CardHeader>
                <div className="text-3xl mb-2">{item.number}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Speedlight Infosolutions */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Speedlight Infosolutions?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-primary text-xl flex-shrink-0">✔</span>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg font-semibold text-center text-foreground">
              We don't just install systems — we engineer intelligent environments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Technology Ecosystem */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Technology Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We collaborate with globally recognized technology leaders to deliver solutions that meet international standards of performance, security, and innovation.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {technologyPartners.map((line, idx) => (
            <p key={idx} className="text-center text-base md:text-lg text-muted-foreground">
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Industries We Serve
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-semibold text-primary flex-shrink-0">{idx + 1}.</span>
                  <span className="text-base">{industry}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Approach
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {approachSteps.map((step, idx) => (
            <Card key={idx} className="border-border/40 text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">{step.number}</div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let's Build the Future of Intelligent Spaces
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you are upgrading a boardroom, building a new campus, or modernizing enterprise infrastructure — Speedlight Infosolutions Pvt Ltd delivers reliable, scalable, and performance-driven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BrandButton asChild size="lg" brandVariant="primary">
              <Link to="/contact">🔹 Request a Consultation</Link>
            </BrandButton>
            <BrandButton asChild size="lg" brandVariant="secondary">
              <Link to="/contact">🔹 Speak to an Expert</Link>
            </BrandButton>
          </div>
        </div>
      </section>
    </div>
  );
}
