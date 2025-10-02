export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Dashboard</h1>
        <p className="text-slate-600 text-lg">Welcome to your ERP system. Here's an overview of your business performance.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Revenue</p>
              <p className="text-3xl font-bold text-emerald-600">$45,678</p>
              <p className="text-sm text-emerald-600 font-medium">+12.5% from last month</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Orders</p>
              <p className="text-3xl font-bold text-blue-600">1,234</p>
              <p className="text-sm text-blue-600 font-medium">+8.2% from last month</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Active Customers</p>
              <p className="text-3xl font-bold text-violet-600">567</p>
              <p className="text-sm text-violet-600 font-medium">+15.3% from last month</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">Inventory Items</p>
              <p className="text-3xl font-bold text-amber-600">2,890</p>
              <p className="text-sm text-amber-600 font-medium">+5.7% from last month</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-5 text-left rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-md group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="font-semibold text-slate-900">New Order</div>
              <div className="text-sm text-slate-500">Create sales order</div>
            </button>
            <button className="p-5 text-left rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-md group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="font-semibold text-slate-900">New Invoice</div>
              <div className="text-sm text-slate-500">Generate invoice</div>
            </button>
            <button className="p-5 text-left rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-md group">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-violet-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="font-semibold text-slate-900">Add Customer</div>
              <div className="text-sm text-slate-500">Register new customer</div>
            </button>
            <button className="p-5 text-left rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-md group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="font-semibold text-slate-900">Add Product</div>
              <div className="text-sm text-slate-500">Add inventory item</div>
            </button>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">New order #ORD-001</p>
                <p className="text-xs text-slate-500">2 minutes ago</p>
              </div>
              <span className="text-sm font-bold text-emerald-600">$1,250</span>
            </div>
            <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">Payment received</p>
                <p className="text-xs text-slate-500">15 minutes ago</p>
              </div>
              <span className="text-sm font-bold text-blue-600">$850</span>
            </div>
            <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">Low stock alert</p>
                <p className="text-xs text-slate-500">1 hour ago</p>
              </div>
              <span className="text-sm font-bold text-amber-600">5 items</span>
            </div>
            <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">New customer registered</p>
                <p className="text-xs text-slate-500">2 hours ago</p>
              </div>
              <span className="text-sm font-bold text-violet-600">ABC Corp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}