export default function AttendancePage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Attendance</h1>
            <p className="text-slate-600 text-lg">Track employee attendance and working hours.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Mark Attendance
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Today's Attendance</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div>
              <p className="font-semibold text-slate-900">John Smith</p>
              <p className="text-sm text-slate-500">Check-in: 09:00 AM | Check-out: 06:00 PM</p>
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-sm font-medium rounded-xl">Present</span>
          </div>
        </div>
      </div>
    </div>
  );
}