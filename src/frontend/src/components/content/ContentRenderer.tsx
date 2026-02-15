import type { ContentBlock, ContentSection } from '../../content/contentTypes';

interface ContentRendererProps {
  sections: ContentSection[];
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading':
      const headingClasses = {
        1: 'text-3xl font-bold tracking-tight mb-4',
        2: 'text-2xl font-semibold tracking-tight mb-3',
        3: 'text-xl font-semibold tracking-tight mb-2',
      };
      
      if (block.level === 1) {
        return <h1 className={headingClasses[1]}>{block.text}</h1>;
      } else if (block.level === 2) {
        return <h2 className={headingClasses[2]}>{block.text}</h2>;
      } else {
        return <h3 className={headingClasses[3]}>{block.text}</h3>;
      }

    case 'paragraph':
      return <p className="text-muted-foreground leading-relaxed mb-4">{block.text}</p>;

    case 'list':
      const ListTag = block.ordered ? 'ol' : 'ul';
      const listClass = block.ordered ? 'list-decimal' : 'list-disc';
      return (
        <ListTag className={`${listClass} ml-6 mb-4 space-y-2 text-muted-foreground`}>
          {block.items.map((item, idx) => (
            <li key={idx} className="leading-relaxed industry-list-item">
              {item}
            </li>
          ))}
        </ListTag>
      );

    case 'emphasis':
      const EmphasisTag = block.style === 'bold' ? 'strong' : 'em';
      return <EmphasisTag className="font-medium text-foreground">{block.text}</EmphasisTag>;

    default:
      return null;
  }
}

export default function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} className="space-y-4">
          {section.title && (
            <h2 className="text-2xl font-semibold tracking-tight border-b pb-2 industry-section-title">
              {section.title}
            </h2>
          )}
          <div className="space-y-4">
            {section.blocks.map((block, idx) => (
              <BlockRenderer key={idx} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
