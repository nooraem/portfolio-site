import { Check } from "lucide-react";
import { ReactElement } from "react";

export type BadgeVariant = "status" | "tag";

export interface BadgeProps {
  badge: string;
  variant?: BadgeVariant;
}

export default function Badge({ badge, variant = "status" }: BadgeProps) {
  const badgeIcons: Record<string, ReactElement> = {
    "Completed": <Check size={14} className="-ml-1"/>,
  };

  const badgeColors: Record<string, string> = {
    "Completed": "badge-success",
    "In Progress": "badge-warning",
    "Ongoing": "badge-warning",
  };

  if (variant === "tag") {
    return (
      <span
        className="badge badge-xs badge-soft badge-info p-3 transition-colors duration-400">
        {badge}
      </span>
    );
  }

  const color = badgeColors[badge] ?? "badge-info";

  return (
    <span className={`badge badge-xs badge-soft ${color} gap-1 p-3 transition-colors duration-400`}>
      {badgeIcons[badge]}
      {badge}
    </span>
  );
}
