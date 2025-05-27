export type TagVariant = 'status' | 'info';

export interface TagProps {
  tag: string;
  variant?: TagVariant;
}

export default function Tag({ tag, variant = 'status' }: TagProps) {
  const base = 'px-3 py-1 w-fit shadow-xs rounded-full font-medium text-xs sm:text-sm ';

  const statusColors: Record<string, string> = {
    'Completed': 'bg-light-green text-dark-green',
    'In Progress': 'bg-light-yellow text-dark-yellow',
    'Ongoing': 'bg-light-yellow text-dark-yellow'
  };

  const color =
    variant === 'status'
      ? statusColors[tag] ?? 'bg-light-gray text-dark-gray'
      : 'bg-light-gray text-dark-gray';

  return <span className={`${base} ${color}`}>{tag}</span>;
}
