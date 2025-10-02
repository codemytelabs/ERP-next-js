export default function CompanyPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Company Profile</h1>
            <p className="text-slate-600 text-lg">Manage your company information and branding.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Save Changes
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Company Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Company Name</label>
            <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" defaultValue="Your Company Name" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" defaultValue="contact@company.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Phone</label>
            <input type="tel" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" defaultValue="+1 (555) 123-4567" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">Address</label>
            <textarea className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" rows={3} defaultValue="123 Business St, City, State 12345"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
