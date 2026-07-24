type StatCardProps = {
  title: String;
  value: String;
  icon: String;
};

export default function StatCard({
  title,value,icon
}: StatCardProps){
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-lg font-semibold text-slate-300">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}