interface Props {
  title: string;
  value: string;
  subtitle: string;
  highlight?: boolean;
}

export default function StatCard({ title, value, subtitle, highlight }: Props) {
  return (
    <div
      className={`p-5 rounded-xl ${
        highlight ? "bg-green-600 text-white border-none" : "bg-white"
      }`}
    >
      <p className="text-sm text-black opacity-80">{title}</p>

      <h2 className="text-2xl text-black font-bold mt-2">{value}</h2>

      <p className="text-sm text-emerald-700 mt-1 opacity-80">{subtitle}</p>
    </div>
  );
}
