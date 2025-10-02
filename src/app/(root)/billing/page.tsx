export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Billing & Finance</h1>
        <p className="text-gray-600">
          Manage your invoices, payments, and expenses from this central location.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Create Invoice</div>
              <div className="text-sm text-gray-500">Generate new invoice</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Record Payment</div>
              <div className="text-sm text-gray-500">Log customer payment</div>
            </button>
            <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="font-medium">Add Expense</div>
              <div className="text-sm text-gray-500">Track business expense</div>
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">Invoice #INV-001</div>
                <div className="text-sm text-gray-500">Customer: ABC Company</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">$1,250.00</div>
                <div className="text-sm text-gray-500">Paid</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium">Invoice #INV-002</div>
                <div className="text-sm text-gray-500">Customer: XYZ Corp</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-orange-600">$850.00</div>
                <div className="text-sm text-gray-500">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
