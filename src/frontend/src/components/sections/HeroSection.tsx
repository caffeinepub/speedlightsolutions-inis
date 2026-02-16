import { Link } from '@tanstack/react-router';
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
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            SPEEDLIGHT INFOSOLUTIONS PVT LTD
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">
            Engineering Intelligent AV & IT Ecosystems for Modern Enterprises
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            We design, integrate, and support advanced Audio-Visual and Enterprise IT infrastructures that enable seamless collaboration, secure connectivity, and intelligent control across corporate, institutional, and premium environments.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            From boardrooms to control rooms, from enterprise campuses to smart residences — we deliver performance-driven, future-ready technology ecosystems.
          </p>
          <p className="text-lg font-semibold text-primary mb-8">
            🔹 Design. Integrate. Optimize. Support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BrandButton asChild size="lg" brandVariant="primary">
              <Link to="/contact">
                🔹 Request a Consultation
              </Link>
            </BrandButton>
            <BrandButton asChild size="lg" brandVariant="secondary">
              <Link to="/contact">
                🔹 Speak to an Expert
              </Link>
            </BrandButton>
          </div>
        </div>
      </div>
    </section>
  );
}
