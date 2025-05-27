export type TagVariant = 'status' | 'info';

export interface TagProps {
  tag: string;
  variant?: TagVariant;
}

export default function Tag({ tag, variant = 'status' }: TagProps) {
  const base = 'inline-block text-xs sm:text-sm px-3 py-1 rounded-full mb-2 mr-2 font-medium w-fit';

  const statusColors: Record<string, string> = {
    'Completed': 'bg-green-100 text-green-900',
    'In Progress': 'bg-yellow-100 text-yellow-900',
    'Ongoing': 'bg-yellow-100 text-yellow-900'
  };

  const color =
    variant === 'status'
      ? statusColors[tag] ?? 'bg-gray-100 text-gray-900'
      : 'bg-gray-100 text-gray-900';

  return <span className={`${base} ${color}`}>{tag}</span>;
}
