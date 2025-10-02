import { SideNavbar, TopNavbar } from '@/components';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-50">

            <SideNavbar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <TopNavbar />
                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50">
                    <div className="p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
