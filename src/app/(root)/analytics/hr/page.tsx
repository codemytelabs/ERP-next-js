export default function HRAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">HR Analytics</h1>
            <p className="text-slate-600 text-lg">Analyze employee performance and HR metrics.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Generate Report
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">HR Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <p className="text-3xl font-bold text-blue-600">45</p>
            <p className="text-slate-600 font-medium">Total Employees</p>
          </div>
          <div className="text-center p-6 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <p className="text-3xl font-bold text-emerald-600">98.5%</p>
            <p className="text-slate-600 font-medium">Attendance Rate</p>
          </div>
          <div className="text-center p-6 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <p className="text-3xl font-bold text-violet-600">5</p>
            <p className="text-slate-600 font-medium">Departments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
