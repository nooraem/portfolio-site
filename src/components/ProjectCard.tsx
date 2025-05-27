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
    <div className="bg-white rounded-sm px-6 py-8 shadow-sm hover:shadow-md transition">

      <div className="flex flex-row mb-2 items-center">
        <h3 className="text-xl sm:text-2xl font-medium text-pink">{name}</h3>
        {hasBadges && (
          <div className="ml-2">
            {status && <Tag tag={status} variant="status" />}
          </div>
        )}
      </div>

      <p className="italic sm:text-lg">{description}</p>

      {hasBadges && (
        <div className="flex flex-wrap mt-6 gap-2">
          {tags?.map((t) => (
            <Tag key={t} tag={t} variant="info" />
          ))}
        </div>
      )}

      <div className="flex flex-wrap mt-6">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-medium text-dark-pink hover:text-pink"
          >
            &#39;{name}&#39; on GitHub &#10141;
          </a>
        )}
        {link && (
          <a
            href={link}
            target={link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-sm font-medium text-dark-pink hover:text-pink"
          >
            {link.startsWith('http') ? 'Visit Site \u279D' : 'View Designs \u279D'}
          </a>
        )}
      </div>
    </div>
  );
}
