import { Sidebar } from "./components/sidebar";
import { StatCard } from "./components/stat-card";
import { ActivityTable } from "./components/activity-table";
import { DailyBrewChart } from "./components/daily-brew-chart";

const stats = [
  { label: "Total Yards", value: "3,482", trend: "+162 this week" },
  { label: "Touchdowns", value: "28", trend: "Streak active" },
  { label: "Takeaways", value: "17", trend: "+3 on Sunday" },
  { label: "Red Zone %", value: "74%", trend: "Up 5%" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 space-y-8 p-8">
        <header>
          <h1 className="text-3xl font-semibold">Gridiron Command Center</h1>
          <p className="text-slate-500">
            Fast reads on today&apos;s play calls, player momentum, and sideline strategy
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold">Daily Practice Yardage</h2>
          <p className="mb-4 text-sm text-slate-500">
            How far the offense pushed the chains during each day&apos;s sessions.
          </p>
          <DailyBrewChart />
        </section>

        <section>
          <h2 className="text-xl font-semibold">Recent Sideline Chatter</h2>
          <ActivityTable />
        </section>
      </main>
    </div>
  );
}
