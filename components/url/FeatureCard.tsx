interface Props {
  title: string;
  active?: boolean;
}

export default function FeatureCard({
  title,
  active,
}: Props) {
  return (
    <button
      className={`rounded-xl border p-6 transition-all ${
        active
          ? "border-blue-500 bg-blue-500/10"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      }`}
    >
      <div className="font-medium">{title}</div>
    </button>
  );
}