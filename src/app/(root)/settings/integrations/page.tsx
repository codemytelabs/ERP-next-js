export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Integrations</h1>
            <p className="text-slate-600 text-lg">Connect with third-party services and APIs.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Add Integration
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Available Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <h4 className="font-semibold text-slate-900 mb-2">Stripe</h4>
            <p className="text-sm text-slate-500 mb-4">Payment processing</p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold">
              Connect
            </button>
          </div>
          <div className="p-6 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <h4 className="font-semibold text-slate-900 mb-2">QuickBooks</h4>
            <p className="text-sm text-slate-500 mb-4">Accounting integration</p>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
