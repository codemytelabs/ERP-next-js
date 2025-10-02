export default function StockLevelsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Stock Levels</h1>
            <p className="text-slate-600 text-lg">Monitor inventory levels and manage stock alerts.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Update Stock
          </button>
        </div>
      </div>

      {/* Stock Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Items</p>
              <p className="text-3xl font-bold text-slate-900">2,890</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Low Stock</p>
              <p className="text-3xl font-bold text-amber-600">15</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Out of Stock</p>
              <p className="text-3xl font-bold text-red-600">3</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Value</p>
              <p className="text-3xl font-bold text-emerald-600">$125,430</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Alerts */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Stock Alerts</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-900">Laptop Pro 15&quot;</p>
                <p className="text-sm text-slate-600">Current stock: 5 | Reorder point: 10</p>
              </div>
            </div>
            <button className="text-amber-600 hover:text-amber-800 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-amber-100 transition-colors">
              Reorder Now
            </button>
          </div>
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200/50">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-900">Wireless Keyboard</p>
                <p className="text-sm text-slate-600">Current stock: 0 | Reorder point: 15</p>
              </div>
            </div>
            <button className="text-red-600 hover:text-red-800 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-red-100 transition-colors">
              Reorder Now
            </button>
          </div>
        </div>
      </div>

      {/* Stock Movement Table */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Recent Stock Movements</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Laptop Pro 15&quot;</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Out</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SO-001</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wireless Mouse</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">In</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">+50</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PO-002</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
