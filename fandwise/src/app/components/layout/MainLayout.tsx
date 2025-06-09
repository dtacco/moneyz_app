import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen antialiased text-neutral-800 bg-neutral-100">
      {/* The Sidebar now has its own background color, so MainLayout's bg is for the content area backdrop */}
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        {/* Content is rendered here */}
        {children}
      </main>
    </div>
  );
}
