export default function CategoriesPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Categories</h1>
            <p className="text-slate-600 text-lg">Organize your products into categories and subcategories.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            Add Category
          </button>
        </div>
      </div>
      
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Product Categories</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-5 rounded-2xl hover:bg-white/50 transition-colors border border-slate-200/50">
            <div>
              <p className="font-semibold text-slate-900">Electronics</p>
              <p className="text-sm text-slate-500">45 products | 3 subcategories</p>
            </div>
            <div className="flex space-x-3">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">Edit</button>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
