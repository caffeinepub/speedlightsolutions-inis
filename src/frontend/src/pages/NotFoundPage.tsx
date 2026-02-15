import { Link } from '@tanstack/react-router';
import { Home } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
import BrandButton from '../components/brand/BrandButton';

export default function NotFoundPage() {
  usePageTitle('Page Not Found - Speedlight Solutions');

  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-16">
      <div className="text-center max-w-md">
        <img
          src="/assets/generated/not-found-hero.dim_1200x600.png"
          alt="Page not found illustration"
          className="w-full h-auto max-w-sm mx-auto mb-8 rounded-lg"
        />
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>
        <BrandButton asChild size="lg" brandVariant="primary">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </BrandButton>
      </div>
    </div>
  );
}
