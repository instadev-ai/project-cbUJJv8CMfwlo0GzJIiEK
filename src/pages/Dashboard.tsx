import { DashboardSidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";
import { DashboardStats } from "@/components/dashboard/Stats";
import { DashboardCharts } from "@/components/dashboard/Charts";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <Navbar />
        <main className="container space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <div className="space-y-4">
            <DashboardStats />
            <DashboardCharts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;