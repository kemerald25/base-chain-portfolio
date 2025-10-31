import PortfolioOverview from '@/components/dashboard/portfolio-overview';
import PortfolioCharts from '@/components/dashboard/portfolio-charts';
import CopyTrading from '@/components/dashboard/copy-trading';

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            <PortfolioOverview />
            <PortfolioCharts />
          </div>
        </div>
        <div className="lg:col-span-1">
          <CopyTrading />
        </div>
      </div>
    </div>
  );
}
