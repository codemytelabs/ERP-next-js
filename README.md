# 🏢 ERP System - Point of Sale

A comprehensive Enterprise Resource Planning (ERP) system built with Next.js 15, TypeScript, and Tailwind CSS. This system provides complete business management capabilities including inventory, sales, billing, HR, and reporting modules.

## ✨ Features

### 🏠 Dashboard
- **Overview**: Real-time business metrics and KPIs
- **Quick Actions**: Fast access to common tasks
- **Recent Activity**: Latest transactions and updates
- **Charts & Analytics**: Visual representation of business data

### 📦 Inventory Management
- **Products**: Complete product catalog with variants, pricing, and descriptions
- **Stock Levels**: Real-time inventory tracking with low-stock alerts
- **Purchase Orders**: Supplier order management and tracking
- **Suppliers**: Vendor management with contact information and performance metrics

### 💰 Sales & CRM
- **Customers**: Customer database with purchase history and preferences
- **Orders**: Sales order processing and fulfillment tracking
- **Invoices**: Invoice generation, management, and payment tracking
- **Delivery**: Shipping and delivery management with tracking

### 💳 Billing & Finance
- **Invoices**: Financial invoice management and payment processing
- **Payments**: Payment tracking and reconciliation
- **Expenses**: Business expense tracking and categorization
- **Financial Reports**: Profit/loss, cash flow, and financial analytics

### 👥 Human Resources
- **Employees**: Employee database with roles and contact information
- **Departments & Roles**: Organizational structure management
- **Payroll**: Salary processing and tax calculations
- **Attendance**: Time tracking and attendance management

### 📊 Reports & Analytics
- **Sales Reports**: Revenue analysis, top products, customer insights
- **Inventory Reports**: Stock movement, turnover rates, valuation
- **HR Reports**: Employee performance, attendance summaries
- **Finance Reports**: Financial statements, budget vs actual

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: Heroicons
- **Fonts**: Geist Sans & Geist Mono

## 🎨 UI/UX Features

### Modern Design System
- **Glass Morphism**: Translucent cards with backdrop blur effects
- **Professional Color Palette**: Slate-based theme with blue accents
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Hover animations and smooth transitions

### Navigation
- **Wide Sidebar**: 288px width for better readability
- **Hidden Scrollbar**: Clean navigation without visible scrollbars
- **Active States**: Gradient backgrounds without left borders
- **Collapsible Menus**: Expandable navigation sections

### Components
- **Borderless Cards**: Modern glass effect with shadows
- **Gradient Buttons**: Blue-to-indigo gradients for primary actions
- **Icon System**: Consistent Heroicons with gradient backgrounds
- **Typography**: Improved fonts with proper spacing and hierarchy

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes (future)
│   ├── (root)/                   # Main application routes
│   │   ├── dashboard/            # Dashboard with KPIs and analytics
│   │   │   └── page.tsx          # Main dashboard page
│   │   ├── inventory/            # Inventory management
│   │   │   ├── page.tsx          # Redirects to products
│   │   │   ├── products/         # Product catalog management
│   │   │   ├── stock-levels/     # Stock monitoring and alerts
│   │   │   ├── purchase-orders/  # Purchase order management
│   │   │   ├── suppliers/        # Supplier database
│   │   │   └── categories/       # Product categorization
│   │   ├── sales/                # Sales & CRM
│   │   │   ├── page.tsx          # Redirects to customers
│   │   │   ├── customers/        # Customer management
│   │   │   ├── orders/           # Sales order processing
│   │   │   ├── quotes/           # Quote management
│   │   │   ├── delivery/         # Delivery tracking
│   │   │   └── returns/          # Return processing
│   │   ├── finance/              # Financial management
│   │   │   ├── page.tsx          # Redirects to invoices
│   │   │   ├── invoices/         # Financial invoice management
│   │   │   ├── payments/         # Payment tracking
│   │   │   ├── expenses/         # Expense management
│   │   │   ├── accounts/         # Chart of accounts
│   │   │   └── taxes/            # Tax configuration
│   │   ├── hr/                   # Human Resources
│   │   │   ├── page.tsx          # Redirects to employees
│   │   │   ├── employees/        # Employee management
│   │   │   ├── departments/      # Department management
│   │   │   ├── payroll/          # Payroll processing
│   │   │   ├── attendance/       # Attendance tracking
│   │   │   └── leave/            # Leave management
│   │   ├── analytics/            # Business Intelligence
│   │   │   ├── page.tsx          # Redirects to sales analytics
│   │   │   ├── sales/            # Sales performance analytics
│   │   │   ├── inventory/        # Inventory analytics
│   │   │   ├── finance/          # Financial analytics
│   │   │   ├── hr/               # HR analytics
│   │   │   └── custom/           # Custom reports builder
│   │   ├── settings/             # System Configuration
│   │   │   ├── page.tsx          # Redirects to company settings
│   │   │   ├── company/          # Company profile management
│   │   │   ├── users/            # User management
│   │   │   ├── system/           # System configuration
│   │   │   ├── integrations/     # Third-party integrations
│   │   │   └── backup/           # Backup & restore
│   │   └── layout.tsx            # Main layout with navigation
│   ├── api/                      # API routes (future)
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page (redirects to dashboard)
│   ├── globals.css               # Global styles
│   └── favicon.ico               # Site favicon
├── components/
│   ├── layout/                   # Layout components
│   │   ├── SideNavbar.tsx        # Modern sidebar navigation
│   │   ├── TopNavbar.tsx         # Top navigation with search
│   │   └── index.ts              # Barrel exports
│   ├── ui/                       # Reusable UI components
│   │   └── index.ts              # UI component exports
│   ├── shared/                   # Shared business components
│   │   └── index.ts              # Shared component exports
│   └── features/                 # Feature-specific components
│       └── index.ts              # Feature component exports
└── lib/                          # Utility functions and configurations (future)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd erp-next-js
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Development Guidelines

### Component Architecture
- **Layout Components**: Navigation and layout in `/components/layout/`
  - `SideNavbar.tsx` - Modern sidebar with glass morphism design
  - `TopNavbar.tsx` - Top navigation with search and user profile
- **UI Components**: Pure, reusable components in `/components/ui/`
  - Form components (Button, Input, Select, etc.)
  - Layout components (Card, Modal, Table, etc.)
  - Data display components (Badge, Avatar, Progress, etc.)
- **Page Components**: Feature-specific components in `page/_components/`
  - Each page can have its own `_components/` folder
  - Co-located with the page that uses them
- **Shared Components**: App-wide components in `/components/shared/`
  - Loading spinners, error boundaries, common utilities

### File Naming
- Use PascalCase for component files: `ProductList.tsx`
- Use kebab-case for page routes: `/inventory/products`
- Use camelCase for utility functions: `formatCurrency.ts`

### Code Style
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Implement proper error handling
- Add JSDoc comments for complex functions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="your-database-url"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# API Keys
STRIPE_SECRET_KEY="your-stripe-key"
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Easy deployment with database
- **DigitalOcean**: VPS deployment option

## 📈 Roadmap

### Phase 1 (Completed ✅)
- [x] Complete navigation structure with all modules
- [x] Modern UI/UX with glass morphism design
- [x] Dashboard with KPIs and analytics
- [x] All page structures implemented
- [x] Professional sidebar and top navigation
- [x] Responsive design and modern theme

### Phase 2 (In Progress 🚧)
- [ ] Authentication system (NextAuth.js)
- [ ] Database integration (PostgreSQL/Prisma)
- [ ] Core CRUD operations for all modules
- [ ] Form validation and error handling
- [ ] Data tables with sorting and filtering

### Phase 3 (Planned 📋)
- [ ] Advanced analytics and reporting
- [ ] Real-time notifications
- [ ] File upload and management
- [ ] Email integration
- [ ] API integrations (Stripe, QuickBooks)

### Phase 4 (Future 🔮)
- [ ] Mobile app (React Native)
- [ ] Multi-tenant support
- [ ] Advanced workflow automation
- [ ] AI-powered insights
- [ ] Third-party marketplace integrations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **CodeMyte Labs** - Development Team
- **Contact**: [Your Contact Information]

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ by CodeMyte Labs**
