import PortfolioOverview from '@/components/dashboard/portfolio-overview';
import PortfolioCharts from '@/components/dashboard/portfolio-charts';
import CopyTrading from '@/components/dashboard/copy-trading';
import { getDashboardData } from '@/lib/supabase/queries';

export default async function DashboardPage() {

  const data = await getDashboardData();

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            <PortfolioOverview overview={data.overview} />
            <PortfolioCharts charts={data.charts} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <CopyTrading portfolios={data.followed} />
        </div>
      </div>
    </div>
  );
}
