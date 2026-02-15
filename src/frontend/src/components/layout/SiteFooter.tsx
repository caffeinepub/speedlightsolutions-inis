import { Link } from '@tanstack/react-router';
import { navigationConfig } from '../../site/navigation';
import { BRAND } from '../../site/brand';
import { Heart } from 'lucide-react';
import BrandLogo from '../brand/BrandLogo';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : encodeURIComponent(BRAND.domain);

  // Get Solutions, Industries, and About sections
  const solutionsSection = navigationConfig.find(item => item.id === 'solutions');
  const industriesSection = navigationConfig.find(item => item.id === 'industries');
  const aboutSection = navigationConfig.find(item => item.id === 'about');

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <BrandLogo />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Transforming communication and collaboration through innovative audiovisual and technology solutions.
            </p>
          </div>

          {/* Solutions */}
          {solutionsSection && (
            <div>
              <h3 className="font-semibold mb-4">{solutionsSection.label}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={solutionsSection.path as any}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Overview
                  </Link>
                </li>
                {solutionsSection.children && solutionsSection.children.slice(0, 4).map((child) => (
                  <li key={child.id}>
                    <Link
                      to={child.path as any}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
                {solutionsSection.children && solutionsSection.children.length > 4 && (
                  <li>
                    <Link
                      to={solutionsSection.path as any}
                      className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      View all →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Industries */}
          {industriesSection && (
            <div>
              <h3 className="font-semibold mb-4">{industriesSection.label}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={industriesSection.path as any}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    Overview
                  </Link>
                </li>
                {industriesSection.children && industriesSection.children.slice(0, 4).map((child) => (
                  <li key={child.id}>
                    <Link
                      to={child.path as any}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
                {industriesSection.children && industriesSection.children.length > 4 && (
                  <li>
                    <Link
                      to={industriesSection.path as any}
                      className="text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      View all →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* About & Contact */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {aboutSection && (
                <>
                  <li>
                    <Link
                      to={aboutSection.path as any}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {aboutSection.label}
                    </Link>
                  </li>
                  {aboutSection.children && aboutSection.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        to={child.path as any}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </>
              )}
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-sm">Contact</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>{BRAND.contact.email}</li>
                <li>{BRAND.contact.phone}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-accent fill-accent" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
