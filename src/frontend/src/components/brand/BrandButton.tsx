import { Button } from '@/components/ui/button';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

export interface BrandButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  brandVariant?: 'primary' | 'secondary' | 'accent';
}

/**
 * BrandButton - Wrapper around shadcn Button with brand-specific styling
 * Provides primary, secondary, and accent CTA variants matching brand spec
 */
const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ brandVariant = 'primary', className = '', ...props }, ref) => {
    // Map brand variants to button styles
    const brandStyles = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
      secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
      accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
    };

    return (
      <Button
        ref={ref}
        className={`${brandStyles[brandVariant]} ${className}`}
        {...props}
      />
    );
  }
);

BrandButton.displayName = 'BrandButton';

export default BrandButton;
