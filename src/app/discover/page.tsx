import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, UserPlus, ArrowUpRight } from 'lucide-react';
import { mockPublicPortfolios } from '@/lib/mock-data';
import Image from 'next/image';

const DiscoverPage = () => {
  return (
    <div className="container py-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Discover Portfolios</h1>
        <p className="text-muted-foreground">
          Browse and follow top-performing portfolios from other traders.
        </p>
      </div>

      <div className="mb-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search by name, description, or wallet address..." className="pl-10" />
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockPublicPortfolios.map((portfolio) => (
          <Card key={portfolio.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-headline">{portfolio.name}</CardTitle>
                  <CardDescription>by {portfolio.owner.name}</CardDescription>
                </div>
                <Avatar>
                  <AvatarImage src={portfolio.owner.avatar} alt={portfolio.owner.name} />
                  <AvatarFallback>{portfolio.owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="text-2xl font-bold">
                ${portfolio.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-sm text-muted-foreground h-10 overflow-hidden">
                {portfolio.description}
              </p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Followers</span>
                <span className="font-medium">{portfolio.followers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">24h Change</span>
                <span className={`font-medium ${portfolio.dailyChange >= 0 ? 'text-accent' : 'text-destructive'}`}>
                  {portfolio.dailyChange >= 0 ? '+' : ''}{portfolio.dailyChange.toFixed(2)}%
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <UserPlus className="mr-2 h-4 w-4" />
                Follow
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
