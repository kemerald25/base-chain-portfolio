import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import type { PublicPortfolio } from '@/types';

interface CopyTradingProps {
  portfolios: PublicPortfolio[];
}

const CopyTrading = ({ portfolios }: CopyTradingProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Followed Portfolios</CardTitle>
        <CardDescription>Track the performance of top traders.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {portfolios.map((portfolio) => {
          const isPositive = portfolio.dailyChange >= 0;
          return (
            <div key={portfolio.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={portfolio.owner.avatar} alt={portfolio.owner.name} />
                  <AvatarFallback>{portfolio.owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{portfolio.name}</p>
                  <p className="text-sm text-muted-foreground">${portfolio.totalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-accent' : 'text-destructive'}`}>
                 {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownLeft className="h-4 w-4" />}
                {portfolio.dailyChange.toFixed(2)}%
              </div>
            </div>
          )
        })}
        <Button variant="outline" className="w-full" asChild>
          <Link href="/discover">
            Discover More Portfolios <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CopyTrading;
