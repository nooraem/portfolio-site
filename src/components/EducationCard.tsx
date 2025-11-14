import Badge from '@/components/Badge';

type EducationCardProps = {
  status: string;
  statusinfo: string;
  school: string;
  degree: string;
  field: string;
  description: string;
};

export default function EducationCard({ status, statusinfo, school, degree, field, description }: EducationCardProps) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow custom-card duration-400">
      <input type="checkbox" />

      <div className="collapse-title space-y-2">
        <div className="flex flex-wrap gap-1">
          <Badge badge={status} variant="status" />
          <Badge badge={statusinfo} variant="tag" />
        </div>

        <h3 className="leading-tight">{degree}</h3>
      </div>

      <div className="collapse-content">
        <p className="text-xs font-extralight opacity-80">{school}</p>
        <p className="text-sm text-accent">{field}</p>
        <p className="text-xs font-extralight">{description}</p>
      </div>
    </div>
  );
}