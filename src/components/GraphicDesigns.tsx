import Image from 'next/image';
import { designs } from '@/data/designs';

type Design = {
  title: string;
  description?: string;
  image: string;
  tag: string;
};

export default function GraphicDesigns({ onSelect }: { onSelect: (d: Design) => void }) {
  const Section = ({ tag, title }: { tag: Design["tag"]; title: string }) => {
    const items = designs.filter((d) => d.tag === tag);
    if (items.length === 0) return null;

        return (
      <div>
        <div className="divider divider-start">
          <h3 className="text-xl font-mono">{title}</h3>          
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {items.map((design) => (
            <label
              key={design.title}
              htmlFor="design_modal"
              onClick={() => onSelect(design)}
              className="row-span-1 h-full cursor-pointer p-2 text-left grid grid-cols-subgrid content-between bg-base-200 hover:bg-base-100 duration-400 ease-in-out"
            >
              <div className="h-2/3">
                <Image
                  src={design.image}
                  alt={design.title}
                  width={500}
                  height={500}
                  className="object-cover mb-2"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg text-info">{design.title}</h3>
                {design.description && (
                  <p className="text-sm text-secondary-content font-light line-clamp-2">
                    {design.description}
                  </p>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto content-center space-y-4">
      <Section tag="logo" title="logos" />
      <Section tag="ad" title="advertisements" />
      <Section tag="website" title="websites" />
      <Section tag="other" title="other" />
    </div>
  );
}
