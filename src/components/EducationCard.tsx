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
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">

      <Tag tag={status} variant="status" />
      <Tag tag={statusInfo} variant="info" />

      <h3 className="text-xl font-semibold mb-1 text-gray-900">{degree}</h3>
      <p className="text-md text-gray-800 mb-1 italic">{field}</p>
      <p className="text-sm text-gray-600 mb-4">{school}</p>

      <p className="mb-4 text-gray-700">{information}</p>
    </div>
  );
}