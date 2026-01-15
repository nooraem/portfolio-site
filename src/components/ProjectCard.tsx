import Badge from "./Badge";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  status?: string;
  tags?: string[];
  repo_url?: string;
  link?: string;
  description?: string;
  images?: string[];
}

export default function ProjectCard({
  name,
  status,
  tags,
  link,
  repo_url,
  description
}: ProjectCardProps) {
  const hasBadges = Boolean(status) || (tags?.length ?? 0) > 0;

  return (
    <div
      tabIndex={0}
      className="custom-card py-4 break-inside-avoid duration-400"
    >

      {hasBadges && (
        <div className="flex flex-wrap gap-1 mb-3">
          {status === "In Progress" && <Badge badge={status} variant="status" />}
          {tags?.map(tag => (
            <Badge key={tag} badge={tag} variant="tag" />
          ))}
        </div>
      )}

      <h3>
        {name}
      </h3>

      <p className="text-sm font-extralight py-4">
        {description}
      </p>

      <div className="flex justify-end gap-2">
        {repo_url && (
          <Link
            href={repo_url}
            target="_blank"
            className="btn btn-xs text-accent"
          >
            View on GitHub
          </Link>
        )}

        {link && (
          <Link
            href={link}
            target={link.startsWith("http") ? "_blank" : "_self"}
            className="btn btn-xs text-accent"
          >
            Learn more
          </Link>
        )}
      </div>
    </div>
  );
}
