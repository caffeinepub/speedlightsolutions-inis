import { Link } from '@tanstack/react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import BrandButton from '../brand/BrandButton';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1600x900.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Innovative AV Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Transform Communication & Collaboration
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive audiovisual and technology solutions that empower organizations to connect, collaborate, and succeed in today's hybrid world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BrandButton asChild size="lg" brandVariant="primary" className="group">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </BrandButton>
            <BrandButton asChild size="lg" brandVariant="secondary">
              <Link to="/solutions">Explore Solutions</Link>
            </BrandButton>
          </div>
        </div>
      </div>
    </section>
  );
}
