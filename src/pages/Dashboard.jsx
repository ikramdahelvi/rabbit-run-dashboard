import { lazy, Suspense } from "react";
import Card from "../components/ui/Card";
import Header from "../components/layout/Header";
import DataTable from "../components/dashboard/DataTable";
import CardHeader from "../components/dashboard/CardHeader";


const DonutChart = lazy(() =>
  import("../components/dashboard/DonutChart")
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#ECECEC]">
      
      <Header />

      <main className="py-4 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* TABLE CARD */}
          <Card>
            <CardHeader />
              <DataTable />
          </Card>

          {/* CHART CARD */}
          <Card>
            <CardHeader title="Rabbit Card Two" />

            <Suspense fallback={<div className="h-[260px]" />}>
              <DonutChart />
            </Suspense>

          </Card>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;