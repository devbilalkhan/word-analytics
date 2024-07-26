export default function Stats() {
  const stats = ["Words", "Characters", "Facebook", "Instagram"];
  return (
    <section className="h-1/2 md:h-full w-full md:w-1/2 font-semibold text-xl">
      <div className="grid grid-cols-2 h-full ">
        {stats.map((stat) => (
          <StatTag key={stat} label={stat} stats={230} />
        ))}
      </div>
    </section>
  );
}

function StatTag({ stats, label }) {
  return (
    <div className="flex justify-center items-center border border-gray-700 text-gray-400">
      {stats} {label}
    </div>
  );
}
