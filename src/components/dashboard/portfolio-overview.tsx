import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownLeft, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CreatePortfolioDialog from './create-portfolio-dialog';

interface PortfolioOverviewProps {
  overview: {
    totalValue: number;
    dailyChange: number;
    dailyProfit: number;
  }
}

const PortfolioOverview = ({ overview }: PortfolioOverviewProps) => {
  const { totalValue, dailyChange, dailyProfit } = overview;
  const isPositive = dailyChange >= 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Total Portfolio Value
        </CardTitle>
        <CreatePortfolioDialog>
          <Button variant="ghost" size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Portfolio
          </Button>
        </CreatePortfolioDialog>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold font-headline">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="flex items-center text-xs text-muted-foreground mt-2">
          <span className={`flex items-center gap-1 ${isPositive ? 'text-accent' : 'text-destructive'}`}>
            {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownLeft className="h-4 w-4" /> }
            {dailyChange.toFixed(2)}%
          </span>
          <span className="ml-2">
            {isPositive ? '+' : ''}${dailyProfit.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} (24h)
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioOverview;
