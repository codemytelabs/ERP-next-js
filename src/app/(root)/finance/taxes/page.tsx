export default function TaxesPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Taxes</h1>
            <p className="text-slate-600 text-lg">Configure tax rates and manage tax calculations.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Add Tax Rate
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Tax Rates</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div>
              <p className="font-semibold text-slate-900">Sales Tax</p>
              <p className="text-sm text-slate-500">Rate: 8.5% | Type: Percentage | Applicable to: All products</p>
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 text-sm font-medium rounded-xl">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
