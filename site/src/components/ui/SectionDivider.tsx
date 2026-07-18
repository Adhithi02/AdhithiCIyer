interface SectionDividerProps {
  label: string;
  id?: string;
}

export default function SectionDivider({ label, id }: SectionDividerProps) {
  return (
    <div id={id} className="section-shell pt-20 pb-8 scroll-mt-20">
      <div className="flex items-center gap-4">
        <span className="mono-label whitespace-nowrap">{label}</span>
        <hr className="ruled-line flex-1" />
      </div>
    </div>
  );
}
