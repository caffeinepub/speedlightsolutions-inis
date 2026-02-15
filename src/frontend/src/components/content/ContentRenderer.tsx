import { Link } from '@tanstack/react-router';
import { ContentSection, ContentBlock } from '../../content/contentTypes';

interface ContentRendererProps {
  sections: ContentSection[];
}

export default function ContentRenderer({ sections }: ContentRendererProps) {
  const renderBlock = (block: ContentBlock, idx: number) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.level}` as 'h1' | 'h2' | 'h3';
        return (
          <HeadingTag
            key={idx}
            className="text-2xl md:text-3xl font-semibold tracking-tight page-section-title border-l-4 pl-4"
          >
            {block.text}
          </HeadingTag>
        );
      
      case 'paragraph':
        return (
          <p key={idx} className="text-base md:text-lg leading-relaxed text-foreground/90">
            {block.text}
          </p>
        );
      
      case 'list':
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag key={idx} className="space-y-2 ml-6">
            {block.items?.map((item, lIdx) => (
              <li key={lIdx} className="text-base md:text-lg leading-relaxed page-list-item">
                {item}
              </li>
            ))}
          </ListTag>
        );
      
      case 'emphasis':
        const emphasisClass = block.style === 'bold' ? 'font-bold' : 'italic';
        return (
          <div key={idx} className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg">
            <p className={`text-base md:text-lg ${emphasisClass} text-foreground`}>
              {block.text}
            </p>
          </div>
        );
      
      case 'link-list':
        return (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {block.links?.map((link, lIdx) => (
              <Link
                key={lIdx}
                to={link.to}
                className="group p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base md:text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                {link.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {link.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <section key={section.id || idx} className="space-y-4">
          {section.title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight page-section-title border-l-4 pl-4">
              {section.title}
            </h2>
          )}
          {section.blocks.map((block, bIdx) => renderBlock(block, bIdx))}
        </section>
      ))}
    </div>
  );
}
