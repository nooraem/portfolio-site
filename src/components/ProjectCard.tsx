import Badge from './Badge';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  description: string;
  github?: string;
  link?: string;
  status?: string;
  badges?: string[];
  image?: string;
}

export default function ProjectCard({
  name,
  description,
  github,
  link,
  status,
  badges,
}: ProjectCardProps) {
  const hasBadges = Boolean(status) || (badges?.length ?? 0) > 0;

  return (
    <div className="card md:card-side bg-linear-to-br from-none to-base-100 rounded-none">
      <div className="card-body text-base">
        {hasBadges && ( status && <Badge badge={status} variant="status" />)}
        {hasBadges && ( badges?.map((t) => (<Badge key={t} badge={t} variant="info" />)))}
        <h2 className="card-title">{name}</h2>
        <p className="font-light">{description}</p>
        <div className="card-actions justify-end">
            {github && (
              <Link
                href={github}
                target="_blank"
                className="btn btn-soft btn-info font-medium"
              >
                View on GitHub
              </Link>
            )}
            {link && (
              <Link
                href={link}
                target={link.startsWith('http') ? '_blank' : '_self'}
                className="text-accent font-medium"
              >
                {link.startsWith('http') 
                  ? <p>Learn more</p>
                  : <p>View Designs</p>
                }
              </Link>
            )}
        </div>
      </div>
    </div>
  );
}
