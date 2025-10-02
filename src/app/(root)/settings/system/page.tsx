export default function SystemPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">System Settings</h1>
            <p className="text-slate-600 text-lg">Configure system-wide settings and preferences.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Save Settings
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">General Settings</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div>
              <p className="font-semibold text-slate-900">Email Notifications</p>
              <p className="text-sm text-slate-500">Send email notifications for important events</p>
            </div>
            <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div>
              <p className="font-semibold text-slate-900">Auto Backup</p>
              <p className="text-sm text-slate-500">Automatically backup data daily</p>
            </div>
            <input type="checkbox" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}
