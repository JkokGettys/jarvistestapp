type Activity = {
  id: number;
  user: string;
  action: string;
  timestamp: string;
  status: "Touchdown" | "Field Goal" | "Two-Minute Drill" | "Flag on Play";
};

const recentActivity: Activity[] = [
  {
    id: 1,
    user: "Coach Carter",
    action: "Dialed up a reverse flea-flicker for the walk-off score",
    timestamp: "3 minutes ago",
    status: "Touchdown",
  },
  {
    id: 2,
    user: "Quarterback Quinn",
    action: "Checked down to beat the blitz and move the chains",
    timestamp: "18 minutes ago",
    status: "Field Goal",
  },
  {
    id: 3,
    user: "Sideline Sage",
    action: "Coordinated a perfect two-minute drill before halftime",
    timestamp: "47 minutes ago",
    status: "Two-Minute Drill",
  },
  {
    id: 4,
    user: "Referee Riley",
    action: "Picked up the flag after confirming a clean tackle",
    timestamp: "2 hours ago",
    status: "Flag on Play",
  },
];

const statusStyles: Record<Activity["status"], string> = {
  Touchdown: "text-emerald-700 bg-emerald-100",
  "Field Goal": "text-amber-700 bg-amber-100",
  "Two-Minute Drill": "text-sky-700 bg-sky-100",
  "Flag on Play": "text-rose-700 bg-rose-100",
};

export function ActivityTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
              Play Caller
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
              Sideline Call
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
              Clock
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-500">
              Drive Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {recentActivity.map((item) => (
            <tr key={item.id}>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                {item.user}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                {item.action}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                {item.timestamp}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
