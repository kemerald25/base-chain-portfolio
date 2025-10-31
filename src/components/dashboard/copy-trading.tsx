import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRight, Users } from 'lucide-react';
import { mockPublicPortfolios } from '@/lib/mock-data';

const CopyTrading = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Followed Portfolios</CardTitle>
        <CardDescription>Track the performance of top traders.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockPublicPortfolios.slice(0, 3).map((portfolio) => (
          <div key={portfolio.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={portfolio.owner.avatar} alt={portfolio.owner.name} />
                <AvatarFallback>{portfolio.owner.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{portfolio.name}</p>
                <p className="text-sm text-muted-foreground">${portfolio.totalValue.toLocaleString()}</p>
              </div>
            </div>
            <div className={`text-sm font-medium ${portfolio.dailyChange >= 0 ? 'text-accent' : 'text-destructive'}`}>
              {portfolio.dailyChange >= 0 ? '+' : ''}{portfolio.dailyChange.toFixed(2)}%
            </div>
          </div>
        ))}
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
