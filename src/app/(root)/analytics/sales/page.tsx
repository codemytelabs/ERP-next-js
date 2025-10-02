export default function SalesAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Sales Analytics</h1>
            <p className="text-slate-600 text-lg">Analyze sales performance and trends.</p>
          </div>
          <div className="flex space-x-3">
            <select className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last year</option>
            </select>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
              Export Report
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Sales Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/50 transition-colors">
              <span className="text-slate-600 font-medium">Total Revenue</span>
              <span className="font-bold text-emerald-600 text-lg">$45,678</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/50 transition-colors">
              <span className="text-slate-600 font-medium">Total Orders</span>
              <span className="font-bold text-blue-600 text-lg">1,234</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/50 transition-colors">
              <span className="text-slate-600 font-medium">Average Order Value</span>
              <span className="font-bold text-violet-600 text-lg">$37.02</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Top Products</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/50 transition-colors">
              <span className="text-slate-600 font-medium">Laptop Pro 15&quot;</span>
              <span className="font-bold text-slate-900">$12,990</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/50 transition-colors">
              <span className="text-slate-600 font-medium">Wireless Mouse</span>
              <span className="font-bold text-slate-900">$4,498</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
