'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path?: string;
  children?: NavItem[];
}

export const SideNavbar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const links: NavItem[] = [
    { name: 'Dashboard', path: '/' },
    {
      name: 'Inventory',
      children: [
        { name: 'Products', path: '/inventory/products' },
        { name: 'Stock Levels', path: '/inventory/stocks' },
        { name: 'Purchase Orders', path: '/inventory/purchase-orders' },
        { name: 'Suppliers', path: '/inventory/suppliers' },
      ],
    },
    {
      name: 'Sales / CRM',
      children: [
        { name: 'Customers', path: '/sales/customers' },
        { name: 'Orders', path: '/sales/orders' },
        { name: 'Invoices', path: '/sales/invoices' },
        { name: 'Delivery', path: '/sales/delivery' },
      ],
    },
    {
      name: 'Billing & Finance',
      children: [
        { name: 'Invoices', path: '/billing/invoices' },
        { name: 'Payments', path: '/billing/payments' },
        { name: 'Expenses', path: '/billing/expenses' },
      ],
    },
    {
      name: 'HR',
      children: [
        { name: 'Employees', path: '/hr/employees' },
        { name: 'Departments & Roles', path: '/hr/departments' },
        { name: 'Payroll', path: '/hr/payroll' },
        { name: 'Attendance', path: '/hr/attendance' },
      ],
    },
    {
      name: 'Reports',
      children: [
        { name: 'Sales Reports', path: '/reports/sales' },
        { name: 'Inventory Reports', path: '/reports/inventory' },
        { name: 'HR Reports', path: '/reports/hr' },
        { name: 'Finance Reports', path: '/reports/finance' },
      ],
    },
  ];

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const isExpanded = expandedItems.includes(item.name);
    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      return (
        <div key={item.name} className="mb-1">
          <button
            onClick={() => toggleExpanded(item.name)}
            className={`w-full px-4 py-3 rounded-lg transition-all duration-200 text-left flex items-center justify-between group ${
              level === 0 
                ? 'text-gray-200 hover:bg-gray-700 hover:text-white hover:shadow-md' 
                : 'text-gray-400 hover:bg-gray-700 hover:text-white'
            } ${isExpanded ? 'bg-gray-700 text-white' : 'bg-gray-700/50'}`}
          >
            <div className="flex items-center">
              <span className={`${level === 0 ? 'font-semibold text-sm' : 'font-medium text-sm'}`}>
                {item.name}
              </span>
            </div>
            <svg
              className={`w-4 h-4 transition-all duration-200 ${
                isExpanded ? 'rotate-90 text-cyan-400' : 'text-gray-400 group-hover:text-cyan-300'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {isExpanded && (
            <div className="ml-6 mt-2 space-y-1 border-l border-gray-600 pl-4">
              {item.children!.map((child) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    const isActive = pathname === item.path;
    
    return (
      <Link
        key={item.name}
        href={item.path!}
        className={`px-4 py-3 transition-all duration-200 block group relative rounded-lg ${
          isActive 
            ? 'bg-gradient-to-r from-cyan-700 to-blue-600 text-white shadow-lg border-l-4 border-cyan-300' 
            : level === 0 
              ? 'text-gray-200 hover:bg-gray-700 hover:text-white hover:shadow-md' 
              : 'text-gray-400 hover:bg-gray-700 hover:text-white hover:shadow-sm'
        }`}
      >
        <div className="flex items-center">
          <span className={`${level === 0 ? 'font-semibold text-sm' : 'font-medium text-sm'}`}>
            {item.name}
          </span>
        </div>
        {/* Active indicator */}
        <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-opacity duration-200 ${
          isActive ? 'opacity-100 bg-white' : 'opacity-0'
        }`} />
      </Link>
    );
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col shadow-2xl border-r border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">POS System</h1>
            <p className="text-xs text-gray-400">Point of Sale</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-hide">
        {links.map((link) => renderNavItem(link))}
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-400 text-center">
          <p>© 2025 CodeMyte Labs</p>
          <p className="mt-1">Version 1.0.0</p>
        </div>
      </div>
    </aside>
  );
};