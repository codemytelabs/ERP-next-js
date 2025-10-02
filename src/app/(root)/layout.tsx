import { SideNavbar, TopNavbar } from '@/components';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-slate-50">

            <SideNavbar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopNavbar />
                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-slate-50">
                    <div className="p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
