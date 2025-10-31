import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, UserPlus, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { getPublicPortfolios } from '@/lib/supabase/queries';

const DiscoverPage = async () => {
  const portfolios = await getPublicPortfolios();

  return (
    <div className="container py-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline text-primary">Discover Portfolios</h1>
        <p className="text-muted-foreground">
          Browse and follow top-performing portfolios from other traders in the neon-drenched alleys of the digital frontier.
        </p>
      </div>

      <div className="mb-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search by name, description, or wallet address..." className="pl-10" />
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolios.map((portfolio) => {
          const isPositive = portfolio.dailyChange >= 0;
          return (
            <Card key={portfolio.id} className="flex flex-col transition-all hover:shadow-primary/20 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-headline text-lg">{portfolio.name}</CardTitle>
                    <CardDescription>by {portfolio.owner.name}</CardDescription>
                  </div>
                  <Avatar>
                    <AvatarImage src={portfolio.owner.avatar} alt={portfolio.owner.name} />
                    <AvatarFallback>{portfolio.owner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="text-3xl font-bold font-headline text-primary">
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
                  <span className={`flex items-center gap-1 font-medium ${isPositive ? 'text-accent' : 'text-destructive'}`}>
                    {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownLeft className="h-4 w-4" />}
                    {portfolio.dailyChange.toFixed(2)}%
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Follow
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  );
};

export default DiscoverPage;
