const practiceData = [
  { day: "Mon", yards: 325, vibe: "Full pads scrimmage" },
  { day: "Tue", yards: 298, vibe: "Blitz pickup clinic" },
  { day: "Wed", yards: 342, vibe: "Two-minute drill reps" },
  { day: "Thu", yards: 365, vibe: "Red zone install" },
  { day: "Fri", yards: 287, vibe: "Walkthrough polish" },
  { day: "Sat", yards: 210, vibe: "Film study focus" },
  { day: "Sun", yards: 155, vibe: "Recovery session" },
];

const maxYards = Math.max(...practiceData.map((item) => item.yards));

export function DailyBrewChart() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-end justify-between gap-2">
        {practiceData.map((item) => {
          const height = Math.round((item.yards / maxYards) * 100);
          return (
            <div key={item.day} className="flex flex-1 flex-col items-center">
              <div className="relative flex h-40 w-full items-end justify-center">
                <div
                  className="w-full rounded-t-md bg-amber-400/80 shadow-inner"
                  style={{ height: `${height}%` }}
                />
                <span className="absolute -top-7 rounded-full bg-white px-2 py-1 text-xs font-semibold text-amber-700 shadow">
                  {item.yards}
                </span>
              </div>
              <div className="mt-2 text-sm font-medium text-slate-700">{item.day}</div>
              <div className="text-xs text-slate-400">{item.vibe}</div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Practice yardage tapers into the weekend, right before the Monday night kickoff.
      </p>
    </div>
  );
}
