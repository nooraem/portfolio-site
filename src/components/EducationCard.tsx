import Badge from '@/components/Badge';

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
    <div tabIndex={0} className="collapse collapse-arrow bg-linear-to-br from-none to-base-100 rounded-none">
      <input type="checkbox" />
      <div className="collapse-title space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge badge={status} variant="status" />
          <Badge badge={statusInfo} variant="info" />
        </div>
        <h3 className="text-lg md:text-xl mb-1">{degree}</h3>
      </div> 
      <div className="collapse-content space-y-2">
        <p className="text-accent">{field}</p>
        <p className="">{school}</p>
        <p className="text-sm font-light">{information}</p>
      </div>
    </div>
  );
}