"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Locker Room Rundown", href: "/" },
  { label: "Playbook Install", href: "/playbook" },
  { label: "Depth Chart", href: "/depth-chart" },
  { label: "Scouting Reports", href: "/scouting" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white p-6 shadow-sm lg:flex">
      <div className="mb-8">
        <span className="text-lg font-semibold">Friday Night Lights</span>
        <p className="text-sm text-slate-500">Sideline Strategy Console</p>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-md bg-slate-100 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-800">Injury Report</p>
        <p className="mt-1">Questionable: 1 | Probable: 5 | Out: 0</p>
      </div>
    </aside>
  );
}
