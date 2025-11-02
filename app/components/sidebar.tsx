const navItems = [
  { label: "Locker Room Rundown", href: "#" },
  { label: "Playbook Install", href: "#" },
  { label: "Depth Chart", href: "#" },
  { label: "Scouting Reports", href: "#" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white p-6 shadow-sm lg:flex">
      <div className="mb-8">
        <span className="text-lg font-semibold">Friday Night Lights</span>
        <p className="text-sm text-slate-500">Sideline Strategy Console</p>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mt-auto rounded-md bg-slate-100 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-800">Injury Report</p>
        <p className="mt-1">Questionable: 1 | Probable: 5 | Out: 0</p>
      </div>
    </aside>
  );
}
