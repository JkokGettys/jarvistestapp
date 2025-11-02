export default function DepthChartPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Depth Chart</h1>
        <p className="mt-2 text-slate-600">
          Current roster positions and player rankings
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Offense</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium text-slate-700">Quarterback</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    1
                  </span>
                  <span className="font-medium text-slate-900">#7 Jason Street</span>
                  <span className="ml-auto text-sm text-slate-500">Senior</span>
                </div>
                <div className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </span>
                  <span className="font-medium text-slate-900">#6 Matt Saracen</span>
                  <span className="ml-auto text-sm text-slate-500">Sophomore</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-slate-700">Running Back</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    1
                  </span>
                  <span className="font-medium text-slate-900">#33 Tim Riggins</span>
                  <span className="ml-auto text-sm text-slate-500">Junior</span>
                </div>
                <div className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-bold text-slate-700">
                    2
                  </span>
                  <span className="font-medium text-slate-900">#22 Smash Williams</span>
                  <span className="ml-auto text-sm text-slate-500">Senior</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Defense</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium text-slate-700">Linebacker</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    1
                  </span>
                  <span className="font-medium text-slate-900">#45 Luke Cafferty</span>
                  <span className="ml-auto text-sm text-slate-500">Junior</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-slate-700">Safety</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    1
                  </span>
                  <span className="font-medium text-slate-900">#1 Vince Howard</span>
                  <span className="ml-auto text-sm text-slate-500">Sophomore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
