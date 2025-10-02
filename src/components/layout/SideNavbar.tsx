'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  path?: string;
  children?: NavItem[];
}

interface SideNavbarProps {
  onClose?: () => void;
}

export const SideNavbar = ({ onClose }: SideNavbarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const links: NavItem[] = [
    { name: 'Dashboard', path: '/dashboard' },
    {
      name: 'Inventory',
      children: [
        { name: 'Products', path: '/inventory/products' },
        { name: 'Stock Levels', path: '/inventory/stock-levels' },
        { name: 'Purchase Orders', path: '/inventory/purchase-orders' },
        { name: 'Suppliers', path: '/inventory/suppliers' },
        { name: 'Categories', path: '/inventory/categories' },
      ],
    },
    {
      name: 'Sales & CRM',
      children: [
        { name: 'Customers', path: '/sales/customers' },
        { name: 'Sales Orders', path: '/sales/orders' },
        { name: 'Quotes', path: '/sales/quotes' },
        { name: 'Delivery', path: '/sales/delivery' },
        { name: 'Returns', path: '/sales/returns' },
      ],
    },
    {
      name: 'Finance',
      children: [
        { name: 'Invoices', path: '/finance/invoices' },
        { name: 'Payments', path: '/finance/payments' },
        { name: 'Expenses', path: '/finance/expenses' },
        { name: 'Accounts', path: '/finance/accounts' },
        { name: 'Taxes', path: '/finance/taxes' },
      ],
    },
    {
      name: 'Human Resources',
      children: [
        { name: 'Employees', path: '/hr/employees' },
        { name: 'Departments', path: '/hr/departments' },
        { name: 'Payroll', path: '/hr/payroll' },
        { name: 'Attendance', path: '/hr/attendance' },
        { name: 'Leave Management', path: '/hr/leave' },
      ],
    },
    {
      name: 'Analytics',
      children: [
        { name: 'Sales Analytics', path: '/analytics/sales' },
        { name: 'Inventory Analytics', path: '/analytics/inventory' },
        { name: 'Financial Analytics', path: '/analytics/finance' },
        { name: 'HR Analytics', path: '/analytics/hr' },
        { name: 'Custom Reports', path: '/analytics/custom' },
      ],
    },
    {
      name: 'Settings',
      children: [
        { name: 'Company Profile', path: '/settings/company' },
        { name: 'User Management', path: '/settings/users' },
        { name: 'System Settings', path: '/settings/system' },
        { name: 'Integrations', path: '/settings/integrations' },
        { name: 'Backup & Restore', path: '/settings/backup' },
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
            className={`w-full px-4 py-3 rounded-xl transition-all duration-200 text-left flex items-center justify-between group ${
              level === 0 
                ? 'text-slate-200 hover:bg-slate-700/50 hover:text-white hover:shadow-md' 
                : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
            } ${isExpanded ? 'bg-slate-700/50 text-white' : 'bg-transparent'}`}
          >
            <div className="flex items-center">
              <span className={`${level === 0 ? 'font-semibold text-sm tracking-wide' : 'font-medium text-sm'}`}>
                {item.name}
              </span>
            </div>
            <svg
              className={`w-4 h-4 transition-all duration-200 ${
                isExpanded ? 'rotate-90 text-blue-400' : 'text-slate-400 group-hover:text-blue-300'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {isExpanded && (
            <div className="ml-6 mt-2 space-y-1 border-l border-slate-600 pl-4">
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
        onClick={() => onClose && onClose()}
        className={`px-4 py-3 transition-all duration-200 block group relative rounded-xl ${
          isActive 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
            : level === 0 
              ? 'text-slate-200 hover:bg-slate-700/50 hover:text-white hover:shadow-md' 
              : 'text-slate-400 hover:bg-slate-700/50 hover:text-white hover:shadow-sm'
        }`}
      >
        <div className="flex items-center">
          <span className={`${level === 0 ? 'font-semibold text-sm tracking-wide' : 'font-medium text-sm'}`}>
            {item.name}
          </span>
        </div>
        {/* Active indicator */}
        <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-opacity duration-200 ${
          isActive ? 'opacity-100 bg-white' : 'opacity-0'
        }`} />
      </Link>
    );
  };

  return (
    <aside className="w-72 h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col shadow-2xl border-r border-slate-700">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white tracking-tight">ERP System</h1>
              <p className="text-xs text-slate-400 font-medium">Business Management</p>
            </div>
          </div>
          {/* Close button for mobile */}
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style jsx>{`
          nav::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {links.map((link) => renderNavItem(link))}
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400 text-center font-medium">
          <p>© 2025 CodeMyte Labs</p>
          <p className="mt-1">Version 1.0.0</p>
        </div>
      </div>
    </aside>
  );
};