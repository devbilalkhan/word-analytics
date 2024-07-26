import PostLengthLimit from "../lib/constants";

export default function Stats({ state }) {
  const { characters } = state;
  const stats = {
    ...state,
    facebook: PostLengthLimit["FACEBOOK"] - characters,
    instagram: PostLengthLimit["INSTAGRAM"] - characters,
  };
  return (
    <section className="h-1/2 md:h-full w-full md:w-1/2 font-semibold text-md">
      <div className="grid grid-cols-2 h-full ">
        {Object.keys(stats).map((label) => (
          <StatTag
            key={label}
            label={label.toUpperCase()}
            stats={stats[label]}
          />
        ))}
      </div>
    </section>
  );
}

function StatTag({ stats, label }) {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-700 text-gray-400">
      <div
        className={`text-2xl font-bold ${
          stats < 0 ? "text-red-600" : "text-blue-500"
        } "`}
      >
        {stats}
      </div>
      <div>{label}</div>
    </div>
  );
}
