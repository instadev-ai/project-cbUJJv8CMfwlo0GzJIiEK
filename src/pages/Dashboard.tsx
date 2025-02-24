import { DashboardSidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { DashboardStats } from "@/components/dashboard/Stats";
import { DashboardCharts } from "@/components/dashboard/Charts";

const Dashboard = () => {
  return (
    <div className="grid min-h-screen">
      <div className="fixed left-0 top-0 z-20 w-64 h-screen">
        <DashboardSidebar />
      </div>
      <div className="ml-64">
        <Navbar />
        <main className="p-8">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <div className="mt-8 space-y-4">
            <DashboardStats />
            <DashboardCharts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;