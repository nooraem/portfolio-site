import { Check, Info } from "lucide-react";
import { ReactElement } from "react";

export type BadgeVariant = 'status' | 'info';

export interface BadgeProps {
  badge: string;
  variant?: BadgeVariant;
}

export default function Badge({ badge, variant = 'status' }: BadgeProps) {
  const badgeIcon: Record<string, ReactElement> = {
    'Completed': <Check size="16" />,
    'Finished': <Check size="16" />
  }

  const badgeColors: Record<string, string> = {
    'Completed': 'badge-success',
    'Finished': 'badge-success',
    'In Progress': 'badge-warning',
    'Ongoing': 'badge-warning'
  };

  const icon = 
    variant === 'status'
      ? badgeIcon[badge] ?? null
      :  <Info size="16" />;

  const color =
    variant === 'status'
      ? badgeColors[badge] ?? 'badge-info'
      : 'badge-info';

  return <div className={`badge badge-soft ${color}`}>{icon}{badge}</div>;
}
