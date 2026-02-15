import { useState } from 'react';
import { BRAND } from '../../site/brand';

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = 'h-8 w-auto' }: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback to text-based brand mark
    return (
      <div className={`flex items-center ${className}`}>
        <span className="font-bold text-xl text-foreground whitespace-nowrap">
          {BRAND.name}
        </span>
      </div>
    );
  }

  return (
    <img
      src={BRAND.logo.path}
      alt={BRAND.logo.alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
