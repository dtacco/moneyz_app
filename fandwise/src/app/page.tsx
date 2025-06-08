import DashboardOverview from "@/app/components/dashboard/DashboardOverview";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <DashboardOverview />
    </div>
  );
}
