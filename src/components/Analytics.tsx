import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Home, DollarSign, Wrench, ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const Analytics = () => {
  const {
    toast
  } = useToast();
  const paymentHistory = [{
    id: 1,
    property: "Century City",
    unit: "Unit 401",
    amount: "$2,500",
    token: "USDC",
    date: "2025-09-15",
    wallet: "0x742d...3a8f",
    txHash: "0x8f3c...92e1",
    status: "Confirmed",
    chain: "Solana"
  }, {
    id: 2,
    property: "Juniper Tower",
    unit: "Unit 207",
    amount: "$3,200",
    token: "USDT",
    date: "2025-09-12",
    wallet: "0x9a1b...4c2d",
    txHash: "0x4a7b...18f3",
    status: "Confirmed",
    chain: "Solana"
  }, {
    id: 3,
    property: "Century City",
    unit: "Unit 302",
    amount: "$2,800",
    token: "USDC",
    date: "2025-09-10",
    wallet: "0x5e8d...7f1a",
    txHash: "0x2c9e...45d6",
    status: "Confirmed",
    chain: "Solana"
  }, {
    id: 4,
    property: "Atmosphere",
    unit: "Unit 105",
    amount: "$1,950",
    token: "DAI",
    date: "2025-09-08",
    wallet: "0x3f2a...8b9c",
    txHash: "0x7e1d...63a2",
    status: "Confirmed",
    chain: "Solana"
  }, {
    id: 5,
    property: "Juniper Tower",
    unit: "Unit 503",
    amount: "$3,500",
    token: "USDC",
    date: "2025-09-05",
    wallet: "0x1c4e...5d7f",
    txHash: "0x9b3f...27c8",
    status: "Confirmed",
    chain: "Solana"
  }];
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`
    });
  };
  const revenueData = [{
    month: "Apr",
    centuryCity: 48000,
    juniperTower: 45000,
    atmosphere: 22000
  }, {
    month: "May",
    centuryCity: 49500,
    juniperTower: 46800,
    atmosphere: 22800
  }, {
    month: "Jun",
    centuryCity: 51000,
    juniperTower: 47200,
    atmosphere: 23200
  }, {
    month: "Jul",
    centuryCity: 50200,
    juniperTower: 48000,
    atmosphere: 23800
  }, {
    month: "Aug",
    centuryCity: 51800,
    juniperTower: 48500,
    atmosphere: 24200
  }, {
    month: "Sep",
    centuryCity: 52000,
    juniperTower: 48500,
    atmosphere: 24000
  }];
  const metrics = [{
    title: "Overall Occupancy",
    value: "87%",
    change: "+5%",
    trend: "up",
    icon: Users,
    color: "text-success"
  }, {
    title: "Vacancy Rate",
    value: "13%",
    change: "-3%",
    trend: "down",
    icon: Home,
    color: "text-warning"
  }, {
    title: "Monthly Revenue",
    value: "$124,500",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    color: "text-success"
  }, {
    title: "Maintenance Costs",
    value: "$8,200",
    change: "-8%",
    trend: "down",
    icon: Wrench,
    color: "text-success"
  }];
  const properties = [{
    name: "Century City",
    occupancy: 92,
    revenue: "$52,000",
    status: "High"
  }, {
    name: "Juniper Tower",
    occupancy: 85,
    revenue: "$48,500",
    status: "Medium"
  }, {
    name: "Atmosphere",
    occupancy: 78,
    revenue: "$24,000",
    status: "Medium"
  }];
  return <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-2">Analytics Overview</h1>
        <p className="text-muted-foreground">Track your portfolio performance and key metrics</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map(metric => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        return <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendIcon className={`h-4 w-4 ${metric.color}`} />
                  <span className={`text-sm ${metric.color}`}>{metric.change}</span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>;
      })}
      </div>

      {/* Property Revenue Chart */}
      <Card className="bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle>Property Monthly Revenue</CardTitle>
          <p className="text-sm text-muted-foreground">Revenue trends for the past 6 months</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorCenturyCity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorJuniperTower" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(90, 70%, 60%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(90, 70%, 60%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorAtmosphere" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, ""]} contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }} />
              <Area type="monotone" dataKey="centuryCity" name="Century City" stroke="hsl(180, 65%, 45%)" fill="url(#colorCenturyCity)" strokeWidth={2} />
              <Area type="monotone" dataKey="juniperTower" name="Juniper Tower" stroke="hsl(90, 70%, 60%)" fill="url(#colorJuniperTower)" strokeWidth={2} />
              <Area type="monotone" dataKey="atmosphere" name="Atmosphere" stroke="hsl(142, 71%, 45%)" fill="url(#colorAtmosphere)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
          
          {/* Custom Legend */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: "hsl(180, 65%, 45%)"
            }} />
              <span className="text-sm text-muted-foreground">Century City</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: "hsl(90, 70%, 60%)"
            }} />
              <span className="text-sm text-muted-foreground">Juniper Tower</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{
              backgroundColor: "hsl(142, 71%, 45%)"
            }} />
              <span className="text-sm text-muted-foreground">Atmosphere</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tenant Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">94%</div>
            <p className="text-sm text-muted-foreground">
              Average lease renewal rate across all properties
            </p>
            <Progress value={94} className="h-2 mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Days to Fill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">12 Days</div>
            <p className="text-sm text-muted-foreground">
              Average time to fill vacant units
            </p>
            <div className="flex items-center gap-1 mt-2">
              <TrendingDown className="h-4 w-4 text-success" />
              <span className="text-sm text-success">-3 days vs last quarter</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blockchain Payment History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">On-chain rent payments from your properties</p>
            </div>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Wallet</TableHead>
                <TableHead>Chain</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map(payment => <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.property}</TableCell>
                  <TableCell className="text-muted-foreground">{payment.unit}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-semibold">{payment.amount}</span>
                      <span className="text-xs text-muted-foreground">{payment.token}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(payment.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted px-2 py-1 rounded">
                        {payment.wallet}
                      </code>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => copyToClipboard(payment.wallet, "Wallet address")}>
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {payment.chain}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-success/10 text-success border-0">
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => copyToClipboard(payment.txHash, "Transaction hash")}>
                        <Copy className="h-3 w-3 mr-1" />
                        TX
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8" asChild>
                        <a href={`https://etherscan.io/tx/${payment.txHash}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>)}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>;
};
export default Analytics;