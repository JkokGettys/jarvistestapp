export default function ScoutingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Scouting Reports</h1>
        <p className="mt-2 text-slate-600">
          Intelligence on upcoming opponents and game strategies
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              Next Opponent: Arnett Mead Panthers
            </h2>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-800">
              High Priority
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-medium text-slate-700">Team Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between rounded-md bg-slate-50 p-3">
                  <span className="text-slate-600">Record</span>
                  <span className="font-semibold text-slate-900">8-2</span>
                </div>
                <div className="flex justify-between rounded-md bg-slate-50 p-3">
                  <span className="text-slate-600">Points Per Game</span>
                  <span className="font-semibold text-slate-900">31.4</span>
                </div>
                <div className="flex justify-between rounded-md bg-slate-50 p-3">
                  <span className="text-slate-600">Points Allowed</span>
                  <span className="font-semibold text-slate-900">18.2</span>
                </div>
                <div className="flex justify-between rounded-md bg-slate-50 p-3">
                  <span className="text-slate-600">Turnover Margin</span>
                  <span className="font-semibold text-green-700">+12</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-medium text-slate-700">Key Players</h3>
              <div className="space-y-3">
                <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">#12 Jake Morrison</span>
                    <span className="text-sm text-slate-500">QB</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Strong arm, 2,400 passing yards, 24 TDs
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">#88 Derek Hayes</span>
                    <span className="text-sm text-slate-500">WR</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Speed threat, 1,100 receiving yards, 12 TDs
                  </p>
                </div>
                <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">#54 Marcus Webb</span>
                    <span className="text-sm text-slate-500">LB</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    Team leader, 98 tackles, 8 sacks
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-md bg-blue-50 p-4">
            <h3 className="font-semibold text-blue-900">Coach's Notes</h3>
            <p className="mt-2 text-sm text-blue-800">
              Panthers run a spread offense with quick passes. Their QB is mobile but
              struggles under pressure. Focus on blitz packages and tight coverage on
              their star receiver. Defensively, they're vulnerable to the run up the
              middle.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Recent Opponents</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-3">
              <span className="font-medium text-slate-700">Dillon Panthers</span>
              <span className="text-sm text-green-700">W 28-21</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-3">
              <span className="font-medium text-slate-700">East Dillon Lions</span>
              <span className="text-sm text-green-700">W 35-14</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-3">
              <span className="font-medium text-slate-700">Laribee County Cougars</span>
              <span className="text-sm text-red-700">L 17-24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
