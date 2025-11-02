export default function PlaybookPage() {
  const offensivePlays = [
    {
      name: "Power I Formation - Dive Right",
      code: "22 POWER",
      status: "Installed",
      reps: 45,
      success: "87%",
      notes: "Primary short yardage play",
    },
    {
      name: "Spread Option - QB Keep",
      code: "SPREAD 18",
      status: "Installed",
      reps: 38,
      success: "72%",
      notes: "Effective against 4-3 defense",
    },
    {
      name: "Play Action Pass - Deep Post",
      code: "PA STREAK 9",
      status: "In Progress",
      reps: 12,
      success: "58%",
      notes: "Timing needs work with WR1",
    },
    {
      name: "Shotgun Draw - Inside Zone",
      code: "GUN 34 DRAW",
      status: "Installed",
      reps: 29,
      success: "81%",
      notes: "Works well on 3rd and medium",
    },
    {
      name: "Trips Right - Slot Fade",
      code: "TRIPS 7 FADE",
      status: "In Progress",
      reps: 8,
      success: "50%",
      notes: "Red zone package",
    },
    {
      name: "Wing T - Counter Trey",
      code: "WING 27 COUNTER",
      status: "Installed",
      reps: 34,
      success: "79%",
      notes: "Misdirection play",
    },
  ];

  const defensivePlays = [
    {
      name: "4-3 Base - Cover 2",
      code: "43 COVER 2",
      status: "Installed",
      reps: 52,
      success: "84%",
      notes: "Standard formation",
    },
    {
      name: "Nickel Package - Man Blitz",
      code: "NICKEL FIRE",
      status: "Installed",
      reps: 41,
      success: "76%",
      notes: "3rd down pressure",
    },
    {
      name: "Dime Package - Cover 3",
      code: "DIME 3 DEEP",
      status: "In Progress",
      reps: 15,
      success: "67%",
      notes: "Passing situations",
    },
    {
      name: "Goal Line - 6-2 Stack",
      code: "GOAL 62",
      status: "Installed",
      reps: 28,
      success: "89%",
      notes: "Short yardage stop",
    },
    {
      name: "Prevent Defense - Cover 4",
      code: "PREVENT 4",
      status: "In Progress",
      reps: 9,
      success: "55%",
      notes: "Late game situations",
    },
    {
      name: "Blitz Package - A-Gap Storm",
      code: "STORM A",
      status: "Installed",
      reps: 36,
      success: "73%",
      notes: "QB pressure play",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Playbook Install</h1>
        <p className="mt-2 text-slate-600">
          Review and install new plays for the upcoming game
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Offensive Plays</h2>
            <span className="text-sm text-slate-500">6 plays total</span>
          </div>
          <div className="space-y-3">
            {offensivePlays.map((play) => (
              <div
                key={play.code}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{play.name}</h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          play.status === "Installed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {play.status}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-sm text-slate-600">{play.code}</p>
                    <p className="mt-2 text-sm text-slate-600">{play.notes}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-4 border-t border-slate-200 pt-3">
                  <div className="text-sm">
                    <span className="text-slate-500">Reps:</span>{" "}
                    <span className="font-semibold text-slate-900">{play.reps}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-500">Success:</span>{" "}
                    <span className="font-semibold text-slate-900">
                      {play.success}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Defensive Plays</h2>
            <span className="text-sm text-slate-500">6 plays total</span>
          </div>
          <div className="space-y-3">
            {defensivePlays.map((play) => (
              <div
                key={play.code}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{play.name}</h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          play.status === "Installed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {play.status}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-sm text-slate-600">{play.code}</p>
                    <p className="mt-2 text-sm text-slate-600">{play.notes}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-4 border-t border-slate-200 pt-3">
                  <div className="text-sm">
                    <span className="text-slate-500">Reps:</span>{" "}
                    <span className="font-semibold text-slate-900">{play.reps}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-slate-500">Success:</span>{" "}
                    <span className="font-semibold text-slate-900">
                      {play.success}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
        <h3 className="font-semibold text-blue-900">Practice Schedule</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded-md bg-white p-3">
            <p className="text-sm font-medium text-slate-700">Monday</p>
            <p className="mt-1 text-xs text-slate-600">Install new plays</p>
          </div>
          <div className="rounded-md bg-white p-3">
            <p className="text-sm font-medium text-slate-700">Wednesday</p>
            <p className="mt-1 text-xs text-slate-600">Full team walkthrough</p>
          </div>
          <div className="rounded-md bg-white p-3">
            <p className="text-sm font-medium text-slate-700">Friday</p>
            <p className="mt-1 text-xs text-slate-600">Game day execution</p>
          </div>
        </div>
      </div>
    </div>
  );
}
