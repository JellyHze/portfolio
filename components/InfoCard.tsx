type InfoCardProps = {
  title: string;
  subtitle: string;
  period?: string;
  description: string;
};

export default function InfoCard({
  title,
  subtitle,
  period,
  description,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/40 hover:bg-white/[0.06]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-violet-300">{subtitle}</p>
        </div>

        {period ? (
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
            {period}
          </span>
        ) : null}
      </div>

      <p className="mt-4 leading-7 text-zinc-400">{description}</p>
    </div>
  );
}