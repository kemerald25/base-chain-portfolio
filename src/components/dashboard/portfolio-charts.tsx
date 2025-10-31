'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Pie, PieChart, Cell, Line, LineChart } from 'recharts';
import { mockTokens, mockChains, mockHistory } from '@/lib/mock-data';

const CHART_COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

const PortfolioCharts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Analysis</CardTitle>
        <CardDescription>Visual breakdown of your assets and performance.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="allocation">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="chains">Chains</TabsTrigger>
          </TabsList>
          <TabsContent value="allocation" className="pt-4">
            <ChartContainer config={{}} className="mx-auto aspect-square max-h-[300px]">
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel nameKey="name" />}
                />
                <Pie data={mockTokens} dataKey="value" nameKey="name" innerRadius={60} strokeWidth={5}>
                  {mockTokens.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="history" className="pt-4">
            <ChartContainer config={{ value: { label: 'USD' } }} className="h-[300px] w-full">
              <LineChart data={mockHistory} margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(-2)} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `$${value / 1000}k`} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line dataKey="value" type="monotone" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </TabsContent>
          <TabsContent value="chains" className="pt-4">
            <ChartContainer config={{ value: { label: 'USD' } }} className="h-[300px] w-full">
              <BarChart data={mockChains} layout="vertical" margin={{ left: 10, right: 30 }}>
                <CartesianGrid horizontal={false} />
                <XAxis type="number" dataKey="value" hide />
                <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} tickMargin={10} width={110} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="value" layout="vertical" radius={5}>
                  {mockChains.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PortfolioCharts;
