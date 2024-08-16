export default function Stats({ stats, heading }) {
  return (
    <section className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {heading && <h3 className="text-2xl font-bold">{heading}</h3>}
      <div className="grid grid-cols-2 gap-6 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        {stats &&
          stats.map((stat) => {
            return (
              <div key={stat._key}>
                <h4 className="text-lg font-semibold text-gray-800 sm:text-xl ">
                  {stat.heading}
                </h4>
                <p className="mt-2 text-4xl font-bold text-blue-600 sm:mt-3 sm:text-6xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-gray-500 ">{stat.subhead}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}
