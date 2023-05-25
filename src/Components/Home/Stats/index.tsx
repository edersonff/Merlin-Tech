import StatsItem from "./Item";

const stats = [
  {
    id: 1,
    name: "Transactions every 24 hours",
    value: 44,
    prefix: "$",
    suffix: "k",
  },
  { id: 2, name: "Assets under holding", value: 119, prefix: "$", suffix: "M" },
  { id: 3, name: "New users annually", value: 46, prefix: "", suffix: "k" },
];

export default function HomeStats() {
  return (
    <div className="bg-white py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, i) => (
            <StatsItem i={i} key={stat.id} stat={stat} />
          ))}
        </dl>
      </div>
    </div>
  );
}
