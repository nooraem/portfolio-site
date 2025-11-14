import { Check } from "lucide-react";
import { ReactElement } from "react";

export type BadgeVariant = "status" | "tag";

export interface BadgeProps {
  badge: string;
  variant?: BadgeVariant;
}

export default function Badge({ badge, variant = "status" }: BadgeProps) {
  const badgeIcons: Record<string, ReactElement> = {
    "Completed": <Check size={14} className="-ml-0"/>,
  };

  const badgeColors: Record<string, string> = {
    "Completed": "badge-success",
    "In Progress": "badge-warning",
    "Ongoing": "badge-warning",
  };

  if (variant === "tag") {
    return (
      <span
        className="badge badge-xs rounded-xl badge-secondary p-2 transition-colors duration-400">
        {badge}
      </span>
    );
  }

  const color = badgeColors[badge] ?? "badge-info";

  return (
    <span className={`badge badge-xs rounded-xl badge-soft ${color} gap-1 p-2 transition-colors duration-400`}>
      {badgeIcons[badge]}
      {badge}
    </span>
  );
}
