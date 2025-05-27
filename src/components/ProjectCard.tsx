import Tag from './Tag';

interface ProjectCardProps {
  name: string;
  description: string;
  github?: string;
  link?: string;
  status?: string;
  tags?: string[];
}

export default function ProjectCard({
  name,
  description,
  github,
  link,
  status,
  tags,
}: ProjectCardProps) {
  const hasBadges = Boolean(status) || (tags?.length ?? 0) > 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
      
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {hasBadges && (
        <div className="flex flex-wrap my-6">
          {status && <Tag tag={status} variant="status" />}
          {tags?.map((t) => (
            <Tag key={t} tag={t} variant="info" />
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-amaranth-purple hover:text-tyrian-purple"
          >
            &#39;{name}&#39; on GitHub &#10141;
          </a>
        )}
        {link && (
          <a
            href={link}
            target={link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-sm font-medium text-amaranth-purple hover:text-tyrian-purple"
          >
            {link.startsWith('http') ? 'Visit Site \u279D' : 'View Designs \u279D'}
          </a>
        )}
      </div>
    </div>
  );
}
