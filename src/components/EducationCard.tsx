import Tag from '@/components/Tag';

interface EducationCardProps {
  status: string;
  statusInfo: string;
  school: string;
  degree: string;
  field: string;
  information: string;
}

export default function EducationCard({ status, statusInfo, school, degree, field, information }: EducationCardProps) {
  return (
    <div className="bg-white rounded-lg py-6 px-6 shadow-sm hover:shadow-mg transition">
      <div className="flex flex-wrap gap-2 mb-2">
        <Tag tag={status} variant="status" />
        <Tag tag={statusInfo} variant="info" />
      </div>

      <h3 className="text-xl sm:text-2xl mb-1 font-semibold">{degree}</h3>
      <p className="sm:text-lg italic mb-1">{field}</p>

      <p className="text-sm sm:text-base mb-4 font-medium text-dark-pink/70">{school}</p>

      <p className="mb-2">{information}</p>
    </div>
  );
}