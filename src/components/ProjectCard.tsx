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
      className="
        collapse collapse-arrow duration-400
        bg-base-200
        border border-base-300
        shadow-sm
        rounded-md
      "
    >
      <input type="checkbox" />

      <div className="collapse-title space-y-3">
        {hasBadges && (
          <div className="flex flex-wrap gap-1">
            {status === "In Progress" && <Badge badge={status} variant="status" />}
            {tags?.map(tag => (
              <Badge key={tag} badge={tag} variant="tag" />
            ))}
          </div>
        )}

        <h3>
          {name}
        </h3>
      </div>

      <div className="collapse-content space-y-4">
        <p className="text-xs font-extralight">
          {description}
        </p>

        <div className="card-actions justify-end gap-2">
          {repo_url && (
            <Link
              href={repo_url}
              target="_blank"
              className="btn btn-sm btn-soft btn-info"
            >
              View on GitHub
            </Link>
          )}

          {link && (
            <Link
              href={link}
              target={link.startsWith("http") ? "_blank" : "_self"}
              className="btn btn-sm btn-soft btn-info"
            >
              Learn more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
