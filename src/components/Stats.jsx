const PostLengthLimit = {
  FACEBOOK: 2200, // Facebook post length limit
  INSTAGRAM: 280, // Instagram post length limit
};

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
      <div className="text-blue-500 text-2xl font-bold">{stats}</div>
      <div>{label}</div>
    </div>
  );
}
