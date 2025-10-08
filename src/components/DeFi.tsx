import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Info } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
const DeFi = () => {
  const [activeMode, setActiveMode] = useState<"bonds" | "loans">("bonds");
  const [selectedPool, setSelectedPool] = useState<any>(null);
  // User's properties with location and sector information
  const userProperties = [{
    name: "Juniper Tower",
    location: "Vancouver",
    sector: "Multi-Family Housing"
  }];

  // Extract unique locations and sectors from user properties
  const userLocations = [...new Set(userProperties.map(p => p.location))];
  const userSectors = [...new Set(userProperties.map(p => p.sector))];

  // Historical data for the chart (showing growth over time)
  const chartData = [{
    month: 'Jan 2024',
    deposits: 1200000000,
    loans: 800000000
  }, {
    month: 'Feb 2024',
    deposits: 1500000000,
    loans: 950000000
  }, {
    month: 'Mar 2024',
    deposits: 1800000000,
    loans: 1150000000
  }, {
    month: 'Apr 2024',
    deposits: 2100000000,
    loans: 1350000000
  }, {
    month: 'May 2024',
    deposits: 2500000000,
    loans: 1600000000
  }, {
    month: 'Jun 2024',
    deposits: 2900000000,
    loans: 1850000000
  }, {
    month: 'Jul 2024',
    deposits: 3300000000,
    loans: 2100000000
  }, {
    month: 'Aug 2024',
    deposits: 3800000000,
    loans: 2450000000
  }, {
    month: 'Sep 2024',
    deposits: 4400000000,
    loans: 2800000000
  }, {
    month: 'Oct 2024',
    deposits: 4900000000,
    loans: 3050000000
  }, {
    month: 'Nov 2024',
    deposits: 5150000000,
    loans: 3150000000
  }, {
    month: 'Dec 2024',
    deposits: 5247830456,
    loans: 3192045789
  }];
  const bondPools = [{
    name: "Residential Prime Bond",
    deposits: "$845,678,901",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "7.82%",
    borrowAPY: "5.45%",
    network: "Solana",
    utilization: "65%"
  }, {
    name: "Commercial Property Bond",
    deposits: "$592,345,123",
    curator: "Rentity Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "8.12%",
    borrowAPY: "6.05%",
    network: "Solana",
    utilization: "58%"
  }, {
    name: "Mixed-Use Development Bond",
    deposits: "$478,234,567",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT", "DAI"],
    supplyAPY: "7.45%",
    borrowAPY: "5.15%",
    network: "Solana",
    utilization: "52%"
  }, {
    name: "Multi-Family Housing Bond",
    deposits: "$367,890,234",
    curator: "Rentity Protocol",
    collateral: ["USDC"],
    supplyAPY: "7.95%",
    borrowAPY: "5.75%",
    network: "Ethereum",
    utilization: "68%"
  }, {
    name: "Student Housing Bond",
    deposits: "$345,123,678",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "8.35%",
    borrowAPY: "6.25%",
    network: "Solana",
    utilization: "62%"
  }, {
    name: "Luxury Residential Bond",
    deposits: "$289,456,890",
    curator: "Rentity Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "7.65%",
    borrowAPY: "5.35%",
    network: "Solana",
    utilization: "55%"
  }, {
    name: "Retail Property Bond",
    deposits: "$212,567,234",
    curator: "Rentity Protocol",
    collateral: ["USDC"],
    supplyAPY: "7.28%",
    borrowAPY: "4.95%",
    network: "Arbitrum",
    utilization: "48%"
  }, {
    name: "Office Space Bond",
    deposits: "$167,890,123",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "7.15%",
    borrowAPY: "4.85%",
    network: "Solana",
    utilization: "45%"
  }];
  const loanPools = [{
    name: "Residential Prime Loan",
    deposits: "$1,245,678,901",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "9.82%",
    borrowAPY: "7.45%",
    network: "Solana",
    utilization: "85%"
  }, {
    name: "Commercial Property Loan",
    deposits: "$892,345,123",
    curator: "Rentity Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "10.12%",
    borrowAPY: "8.05%",
    network: "Solana",
    utilization: "78%"
  }, {
    name: "Mixed-Use Development Loan",
    deposits: "$678,234,567",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT", "DAI"],
    supplyAPY: "9.45%",
    borrowAPY: "7.15%",
    network: "Solana",
    utilization: "72%"
  }, {
    name: "Multi-Family Housing Loan",
    deposits: "$567,890,234",
    curator: "Rentity Protocol",
    collateral: ["USDC"],
    supplyAPY: "9.95%",
    borrowAPY: "7.75%",
    network: "Ethereum",
    utilization: "88%"
  }, {
    name: "Student Housing Loan",
    deposits: "$445,123,678",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "10.35%",
    borrowAPY: "8.25%",
    network: "Solana",
    utilization: "82%"
  }, {
    name: "Luxury Residential Loan",
    deposits: "$389,456,890",
    curator: "Rentity Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "9.65%",
    borrowAPY: "7.35%",
    network: "Solana",
    utilization: "75%"
  }, {
    name: "Retail Property Loan",
    deposits: "$312,567,234",
    curator: "Rentity Protocol",
    collateral: ["USDC"],
    supplyAPY: "9.28%",
    borrowAPY: "6.95%",
    network: "Arbitrum",
    utilization: "68%"
  }, {
    name: "Office Space Loan",
    deposits: "$267,890,123",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "9.15%",
    borrowAPY: "6.85%",
    network: "Solana",
    utilization: "65%"
  }];
  const pools = activeMode === "bonds" ? bondPools : loanPools;
  const earnPositions = [{
    pool: "Residential Prime Bond",
    type: "Supply",
    productType: "Bond",
    amount: "$175,500",
    amountNumeric: 175500,
    apy: "7.82%",
    apyNumeric: 7.82,
    duration: "Fixed - 3 months remaining",
    startDate: "Apr 1, 2024",
    status: "Active",
    network: "Solana",
    details: {
      positionId: "RPB-2024-04-001",
      depositDate: "Apr 1, 2024",
      daysActive: 275,
      principalAmount: "$175,500",
      currentValue: "$189,625",
      yieldEarned: "$14,125",
      projectedAnnualYield: "$13,793",
      poolUtilization: "65%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$1,164"
    }
  }, {
    pool: "Hong Kong Market-Based Loan",
    type: "Supply",
    productType: "Loan",
    amount: "$150,000",
    amountNumeric: 150000,
    apy: "11.2%",
    apyNumeric: 11.2,
    duration: "Flexible",
    startDate: "Jun 15, 2024",
    status: "Active",
    network: "Solana",
    details: {
      positionId: "HKL-2024-06-001",
      depositDate: "Jun 15, 2024",
      daysActive: 200,
      principalAmount: "$150,000",
      currentValue: "$157,562",
      yieldEarned: "$7,562",
      projectedAnnualYield: "$16,800",
      poolUtilization: "92%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$1,400"
    }
  }, {
    pool: "Multi-Family Housing Loan",
    type: "Supply",
    productType: "Loan",
    amount: "$85,000",
    amountNumeric: 85000,
    apy: "9.95%",
    apyNumeric: 9.95,
    duration: "Flexible",
    startDate: "Aug 1, 2024",
    status: "Active",
    network: "Ethereum",
    details: {
      positionId: "MFHL-2024-08-001",
      depositDate: "Aug 1, 2024",
      daysActive: 153,
      principalAmount: "$85,000",
      currentValue: "$87,474",
      yieldEarned: "$2,474",
      projectedAnnualYield: "$8,458",
      poolUtilization: "88%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$704"
    }
  }];
  const borrowPositions = [{
    property: "Juniper Tower",
    type: "Borrow",
    amount: "$100,000",
    apr: "7.8%",
    duration: "2 years",
    startDate: "Aug 1, 2024",
    status: "Active",
    network: "Solana",
    details: {
      loanId: "JT-2024-08-001",
      securityType: "Position on Title + Corporate Guarantee",
      propertyAddress: "4567 Juniper Street, Vancouver, BC",
      corporateGuarantor: "Greystone Properties Holdings Limited",
      principalRemaining: "$89,250",
      interestPaid: "$6,850",
      nextPaymentDate: "Jan 1, 2025",
      nextPaymentAmount: "$3,250",
      totalRepayments: "$13,150",
      maturityDate: "Aug 1, 2026",
      loanToValue: "45%",
      propertyValue: "$2,250,000"
    }
  }];
  const markets = [{
    location: "Vancouver",
    country: "Canada",
    totalValue: "$1,892,456,789",
    properties: 234,
    avgReturn: "8.5%",
    occupancyRate: "94%",
    marketCap: "$2.1B",
    growth: "+12.3%"
  }, {
    location: "Paris",
    country: "France",
    totalValue: "$1,456,789,234",
    properties: 189,
    avgReturn: "7.8%",
    occupancyRate: "92%",
    marketCap: "$1.8B",
    growth: "+9.7%"
  }, {
    location: "Hong Kong",
    country: "China",
    totalValue: "$1,234,567,890",
    properties: 156,
    avgReturn: "9.2%",
    occupancyRate: "96%",
    marketCap: "$1.5B",
    growth: "+15.8%"
  }, {
    location: "New York",
    country: "USA",
    totalValue: "$1,123,456,789",
    properties: 298,
    avgReturn: "8.1%",
    occupancyRate: "91%",
    marketCap: "$1.4B",
    growth: "+10.5%"
  }, {
    location: "London",
    country: "UK",
    totalValue: "$987,654,321",
    properties: 167,
    avgReturn: "7.5%",
    occupancyRate: "89%",
    marketCap: "$1.2B",
    growth: "+8.2%"
  }, {
    location: "Tokyo",
    country: "Japan",
    totalValue: "$876,543,210",
    properties: 145,
    avgReturn: "7.2%",
    occupancyRate: "93%",
    marketCap: "$1.0B",
    growth: "+7.9%"
  }];
  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`;
    }
    return `$${(value / 1000000).toFixed(2)}M`;
  };
  return <>
    <div className="space-y-6">
      {/* Header and Description */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Real Estate DeFi</h1>
        <p className="text-muted-foreground">Choose to fund and earn from specific pools based on market, category, or individual property. All pools have been curated and completed due dilligence by Rentity.</p>
        <div className="mt-4 space-y-3 text-muted-foreground">
          
          
        </div>
      </div>

      {/* Bonds/Loans Toggle */}
      <div className="flex items-center py-4">
        <div className="flex items-center gap-2 bg-card border border-border rounded-full px-2 py-2">
          <button className={cn("px-6 py-2 rounded-full font-medium transition-all text-sm", activeMode === "bonds" ? "bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white" : "text-foreground hover:text-foreground/80")} onClick={() => setActiveMode("bonds")}>
            Bonds
          </button>
          <button className={cn("px-6 py-2 rounded-full font-medium transition-all text-sm", activeMode === "loans" ? "bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white" : "text-foreground hover:text-foreground/80")} onClick={() => setActiveMode("loans")}>
            Loans
          </button>
        </div>
      </div>

      <Tabs defaultValue="earn" className="w-full">
        

        <TabsContent value="earn" className="mt-6 space-y-6">

      {/* Metrics Overview Section */}
      <div className="p-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg rounded-lg">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Total Deposits</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold mb-1">{activeMode === "bonds" ? "$3.29B" : "$5.25B"}</p>
            <p className="text-sm">{activeMode === "bonds" ? "3.29B USDC" : "5.25B USDC"}</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Active {activeMode === "bonds" ? "Bonds" : "Loans"}</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold mb-1">{activeMode === "bonds" ? "$1.85B" : "$3.19B"}</p>
            <p className="text-sm">{activeMode === "bonds" ? "1.85B USDC" : "3.19B USDC"}</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Estimated Yield</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold">{activeMode === "bonds" ? "7.5%" : "10.0%"}</p>
            <p className="text-sm">Annual APY</p>
          </div>
        </div>
      </div>

      {/* Active Positions Section */}
      <Card>
        <CardHeader>
          <CardTitle>My Active Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pool</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">APY</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Network</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {earnPositions.map((position, index) => <Dialog key={index}>
                  <DialogTrigger asChild>
                    <TableRow className="hover:bg-muted/50 cursor-pointer">
                      <TableCell className="font-medium">{position.pool}</TableCell>
                      <TableCell>
                        <Badge variant={position.productType === "Bond" ? "outline" : "secondary"} className={position.productType === "Bond" ? "text-xs" : "bg-primary/20 text-primary text-xs"}>
                          {position.productType}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {position.amount}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm text-success">
                        {position.apy}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {position.duration}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {position.startDate}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {position.network}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default" className="bg-success/20 text-success">
                          {position.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Position Details</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Position Header */}
                      <div className="bg-primary-gradient text-primary-foreground p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">{position.pool}</h3>
                        <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                          {position.productType} Position
                        </Badge>
                        <p className="text-sm mt-2 opacity-90">Position ID: {position.details.positionId}</p>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Principal Amount</p>
                          <p className="text-lg font-semibold">{position.details.principalAmount}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Yield Earned</p>
                          <p className="text-lg font-semibold text-success">{position.details.yieldEarned}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Current Value</p>
                          <p className="text-lg font-semibold">{position.details.currentValue}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">APY</p>
                          <p className="text-lg font-semibold text-success">{position.apy}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Days Active</p>
                          <p className="text-lg font-semibold">{position.details.daysActive} days</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Status</p>
                          <Badge variant="default" className="bg-success/20 text-success">
                            {position.status}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Network</p>
                          <p className="text-lg font-semibold">{position.network}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Pool Utilization</p>
                          <p className="text-lg font-semibold">{position.details.poolUtilization}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Deposit Date</p>
                          <p className="text-lg font-semibold">{position.details.depositDate}</p>
                        </div>
                      </div>

                      <Separator />

                      {/* Yield Information */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Yield & Distribution</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Projected Annual Yield</p>
                            <p className="text-lg font-semibold text-success">{position.details.projectedAnnualYield}</p>
                            <p className="text-xs text-muted-foreground">Based on current APY of {position.apy}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">Next Distribution</p>
                            <p className="text-lg font-semibold">{position.details.nextDistribution}</p>
                            <p className="text-xs text-muted-foreground">Amount: {position.details.distributionAmount}</p>
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          Position Information
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          This {position.productType.toLowerCase()} position in {position.pool} has been active for {position.details.daysActive} days, earning a total of {position.details.yieldEarned} in yield. The current value of your position is {position.details.currentValue}, representing a return on your principal investment of {position.details.principalAmount}.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90">
                          Add Funds
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Withdraw
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>)}
              <TableRow className="border-t-2 font-bold bg-muted/50">
                <TableCell className="text-lg">TOTAL</TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right text-lg">$510,500</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Top Section with Chart */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Deposits
            </CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-4xl font-bold mt-2">$5.25B</div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex gap-4 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(158,64%,52%)]" />
              <span className="text-muted-foreground">Deposits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(180,65%,45%)]" />
              <span className="text-muted-foreground">Active Loans</span>
            </div>
          </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="depositsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="loansGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => value.split(' ')[0]} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={formatCurrency} />
                <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} />
                <Area type="monotone" dataKey="deposits" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill="url(#depositsGradient)" />
                <Area type="monotone" dataKey="loans" stroke="hsl(180, 65%, 45%)" strokeWidth={2} fill="url(#loansGradient)" />
              </AreaChart>
            </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Tabs and Table Section */}
      <Card>
        <CardHeader>
          <CardTitle>Pools</CardTitle>
        </CardHeader>
        <CardContent>
        <Tabs defaultValue={activeMode === "bonds" ? "markets" : "category"} className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            {activeMode === "bonds" && <TabsTrigger value="markets" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                Markets
              </TabsTrigger>}
            <TabsTrigger value="category" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
              Category
            </TabsTrigger>
            <TabsTrigger value="more" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
              Buildings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="markets" className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead className="text-right">Total Value</TableHead>
                  <TableHead className="text-right">Properties</TableHead>
                  <TableHead className="text-right">APY</TableHead>
                  <TableHead className="text-right">Occupancy</TableHead>
                  <TableHead className="text-right">Market Cap</TableHead>
                  <TableHead className="text-right">Growth</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {markets.map((market, index) => <TableRow key={index} className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                        ...market,
                        type: 'market'
                      })}>
                    <TableCell className="font-medium">{market.location}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {market.country}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {market.totalValue}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {market.properties}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm text-success">
                      {market.avgReturn}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {market.occupancyRate}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {market.marketCap}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm text-success">
                      {market.growth}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" className="bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => {
                            e.stopPropagation();
                          }}>
                        Fund Pool
                      </Button>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="category" className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Total Value</TableHead>
                  <TableHead className="text-right">Properties</TableHead>
                  <TableHead className="text-right">Avg Return</TableHead>
                  <TableHead className="text-right">Occupancy</TableHead>
                  <TableHead className="text-right">Market Cap</TableHead>
                  <TableHead className="text-right">Growth</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pools.map((pool, index) => <TableRow key={index} className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                        ...pool,
                        type: 'pool'
                      })}>
                    <TableCell className="font-medium">{pool.name}</TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {pool.deposits}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {[234, 189, 156, 142, 128, 98, 87, 76][index] || 50}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm text-success">
                      {pool.supplyAPY}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {pool.utilization}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {pool.deposits}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm text-success">
                      {pool.borrowAPY}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" className="bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => {
                            e.stopPropagation();
                          }}>
                        Fund Pool
                      </Button>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="more" className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead className="text-right">Total Value</TableHead>
                  <TableHead className="text-right">Units</TableHead>
                  <TableHead className="text-right">Avg Return</TableHead>
                  <TableHead className="text-right">Occupancy</TableHead>
                  <TableHead className="text-right">Market Cap</TableHead>
                  <TableHead className="text-right">Growth</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                        name: 'Riverside Gardens',
                        totalValue: '$4,567,200',
                        units: 189,
                        avgReturn: '9.2%',
                        occupancy: '97%',
                        marketCap: '$4.8M',
                        growth: '+14.6%',
                        type: 'building'
                      })}>
                  <TableCell className="font-medium">Riverside Gardens</TableCell>
                  <TableCell className="text-right font-mono text-sm">$4,567,200</TableCell>
                  <TableCell className="text-right font-mono text-sm">189</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">9.2%</TableCell>
                  <TableCell className="text-right font-mono text-sm">97%</TableCell>
                  <TableCell className="text-right font-mono text-sm">$4.8M</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">+14.6%</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => e.stopPropagation()}>
                      Fund Pool
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                        name: 'Downtown Development Site',
                        totalValue: '$8,950,000',
                        isDevelopmentLand: true,
                        avgReturn: '12.5%',
                        marketCap: '$9.2M',
                        growth: '+18.3%',
                        type: 'building'
                      })}>
                  <TableCell className="font-medium">Downtown Development Site</TableCell>
                  <TableCell className="text-right font-mono text-sm">$8,950,000</TableCell>
                  <TableCell className="text-right font-mono text-sm text-muted-foreground">-</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">12.5%</TableCell>
                  <TableCell className="text-right font-mono text-sm text-muted-foreground">-</TableCell>
                  <TableCell className="text-right font-mono text-sm">$9.2M</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">+18.3%</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => e.stopPropagation()}>
                      Fund Pool
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                        name: 'Harbor Point Towers',
                        totalValue: '$6,234,800',
                        units: 142,
                        avgReturn: '10.8%',
                        occupancy: '95%',
                        marketCap: '$6.5M',
                        growth: '+16.1%',
                        type: 'building'
                      })}>
                  <TableCell className="font-medium">Harbor Point Towers</TableCell>
                  <TableCell className="text-right font-mono text-sm">$6,234,800</TableCell>
                  <TableCell className="text-right font-mono text-sm">142</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">10.8%</TableCell>
                  <TableCell className="text-right font-mono text-sm">95%</TableCell>
                  <TableCell className="text-right font-mono text-sm">$6.5M</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">+16.1%</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => e.stopPropagation()}>
                      Fund Pool
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedPool({
                        name: 'Westside Land Parcel',
                        totalValue: '$5,670,000',
                        isDevelopmentLand: true,
                        avgReturn: '13.2%',
                        marketCap: '$5.9M',
                        growth: '+19.5%',
                        type: 'building'
                      })}>
                  <TableCell className="font-medium">Westside Land Parcel</TableCell>
                  <TableCell className="text-right font-mono text-sm">$5,670,000</TableCell>
                  <TableCell className="text-right font-mono text-sm text-muted-foreground">-</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">13.2%</TableCell>
                  <TableCell className="text-right font-mono text-sm text-muted-foreground">-</TableCell>
                  <TableCell className="text-right font-mono text-sm">$5.9M</TableCell>
                  <TableCell className="text-right font-mono text-sm text-success">+19.5%</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full px-4 py-1 text-xs h-auto" onClick={e => e.stopPropagation()}>
                      Fund Pool
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="borrow" className="mt-6 space-y-6">
          {/* Metrics Overview Section - Borrow */}
          <div className="p-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg rounded-lg">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm">Total Available</p>
                  <Info className="h-4 w-4" />
                </div>
                <p className="text-4xl font-bold mb-1">$2.06B</p>
                <p className="text-sm">2.06B USDC Available</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm">Total Borrowed</p>
                  <Info className="h-4 w-4" />
                </div>
                <p className="text-4xl font-bold mb-1">$3.19B</p>
                <p className="text-sm">3.19B USDC</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm">Avg Borrow Rate</p>
                  <Info className="h-4 w-4" />
                </div>
                <p className="text-4xl font-bold">7.5%</p>
                <p className="text-sm">Annual APR</p>
              </div>
            </div>
          </div>

          {/* Active Borrow Positions Section */}
          <Card>
            <CardHeader>
              <CardTitle>My Active Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Rate</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Network</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {borrowPositions.map((position, index) => <Dialog key={index}>
                      <DialogTrigger asChild>
                        <TableRow className="hover:bg-muted/50 cursor-pointer">
                          <TableCell className="font-medium">{position.property}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-[hsl(180,65%,45%)]/20 text-[hsl(180,65%,45%)]">
                              {position.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono text-sm">
                            {position.amount}
                          </TableCell>
                          <TableCell className="text-right font-mono text-sm">
                            {position.apr}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {position.duration}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {position.startDate}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {position.network}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="default" className="bg-success/20 text-success">
                              {position.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{position.property} Loan</DialogTitle>
                          <p className="text-muted-foreground">Loan ID: {position.details.loanId}</p>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-6">
                          {/* Key Metrics Cards */}
                          <div className="grid grid-cols-3 gap-4">
                            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                              <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground mb-1">Original Amount</p>
                                <p className="text-3xl font-bold">{position.amount}</p>
                              </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-[hsl(180,65%,45%)]/10 to-[hsl(180,65%,45%)]/5 border-[hsl(180,65%,45%)]/20">
                              <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground mb-1">Principal Remaining</p>
                                <p className="text-3xl font-bold">{position.details.principalRemaining}</p>
                              </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                              <CardContent className="pt-6">
                                <p className="text-sm text-muted-foreground mb-1">Interest Rate</p>
                                <p className="text-3xl font-bold text-[hsl(180,65%,45%)]">{position.apr}</p>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Loan Information */}
                          <Card>
                            <CardHeader className="bg-muted/30">
                              <CardTitle className="text-lg">Loan Information</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Duration</span>
                                    <span className="font-semibold">{position.duration}</span>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Start Date</span>
                                    <span className="font-mono text-sm">{position.startDate}</span>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Maturity Date</span>
                                    <span className="font-mono text-sm">{position.details.maturityDate}</span>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Status</span>
                                    <Badge variant="default" className="bg-success/20 text-success">
                                      {position.status}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Network</span>
                                    <Badge variant="outline">{position.network}</Badge>
                                  </div>
                                  <div className="flex justify-between items-center py-2 border-b">
                                    <span className="text-muted-foreground">Loan-to-Value</span>
                                    <span className="font-semibold text-success">{position.details.loanToValue}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Security Information */}
                          <Card>
                            <CardHeader className="bg-muted/30">
                              <CardTitle className="text-lg">Security & Guarantees</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <div className="space-y-4">
                                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                                  <p className="text-sm text-muted-foreground mb-2">Security Type</p>
                                  <p className="font-semibold text-lg">{position.details.securityType}</p>
                                  <p className="text-sm text-muted-foreground mt-3">
                                    This loan is secured by a registered position on the property title and backed by a corporate guarantee, providing dual-layer security for lenders.
                                  </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-2">
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Property Address</p>
                                    <p className="text-sm font-medium">{position.details.propertyAddress}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-muted-foreground mb-1">Property Value</p>
                                    <p className="text-lg font-bold">{position.details.propertyValue}</p>
                                  </div>
                                  <div className="col-span-2">
                                    <p className="text-sm text-muted-foreground mb-1">Corporate Guarantor</p>
                                    <p className="text-sm font-medium">{position.details.corporateGuarantor}</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Payment Schedule */}
                          <Card>
                            <CardHeader className="bg-muted/30">
                              <CardTitle className="text-lg">Payment Information</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                              <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 border rounded-lg">
                                  <p className="text-sm text-muted-foreground mb-1">Next Payment Date</p>
                                  <p className="text-xl font-bold mb-3">{position.details.nextPaymentDate}</p>
                                  <p className="text-sm text-muted-foreground mb-1">Amount Due</p>
                                  <p className="text-2xl font-bold text-[hsl(180,65%,45%)]">{position.details.nextPaymentAmount}</p>
                                </div>
                                <div className="space-y-4">
                                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                                    <span className="text-sm text-muted-foreground">Interest Paid to Date</span>
                                    <span className="text-lg font-semibold">{position.details.interestPaid}</span>
                                  </div>
                                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                                    <span className="text-sm text-muted-foreground">Total Repayments</span>
                                    <span className="text-lg font-semibold">{position.details.totalRepayments}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </DialogContent>
                    </Dialog>)}
                  <TableRow className="border-t-2 font-bold bg-muted/50">
                    <TableCell className="text-lg">TOTAL</TableCell>
                    <TableCell></TableCell>
                    <TableCell className="text-right text-lg">$100,000</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Section with Chart - Borrow */}
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Borrowed
                </CardTitle>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-4xl font-bold mt-2">$3.19B</div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-4 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(158,64%,52%)]" />
                  <span className="text-muted-foreground">Deposits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[hsl(180,65%,45%)]" />
                  <span className="text-muted-foreground">Active Loans</span>
                </div>
              </div>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="depositsGradientBorrow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="loansGradientBorrow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={value => value.split(' ')[0]} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={formatCurrency} />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} />
                    <Area type="monotone" dataKey="deposits" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill="url(#depositsGradientBorrow)" />
                    <Area type="monotone" dataKey="loans" stroke="hsl(180, 65%, 45%)" strokeWidth={2} fill="url(#loansGradientBorrow)" />
                  </AreaChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Tabs and Table Section - Borrow */}
          <Card>
            <CardHeader>
              <CardTitle>Pools</CardTitle>
            </CardHeader>
            <CardContent>
            <Tabs defaultValue="markets" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger value="markets" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                  Markets
                </TabsTrigger>
                <TabsTrigger value="category" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                  Category
                </TabsTrigger>
                <TabsTrigger value="more" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent">
                  More
                </TabsTrigger>
              </TabsList>

              <TabsContent value="markets" className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Location</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead className="text-right">Total Value</TableHead>
                      <TableHead className="text-right">Properties</TableHead>
                      <TableHead className="text-right">Avg Borrow Rate</TableHead>
                      <TableHead className="text-right">Available</TableHead>
                      <TableHead className="text-right">Market Cap</TableHead>
                      <TableHead className="text-right">Growth</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {markets.filter(market => userLocations.includes(market.location)).map((market, index) => <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{market.location}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {market.country}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.totalValue}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.properties}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.avgReturn}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-success">
                          {market.occupancyRate}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {market.marketCap}
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm text-success">
                          {market.growth}
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="category" className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vault</TableHead>
                      <TableHead className="text-right">Available</TableHead>
                      <TableHead>Curator</TableHead>
                      <TableHead>Collateral</TableHead>
                      <TableHead className="text-right">Borrow APY</TableHead>
                      <TableHead>Network</TableHead>
                      <TableHead className="text-right">Utilization</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pools.filter(pool => userSectors.includes(pool.name)).map((pool, index) => <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{pool.name}</TableCell>
                        <TableCell className="text-right font-mono text-sm text-success">
                          {pool.deposits}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {pool.curator}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {pool.collateral.map((token, i) => <Badge key={i} variant="outline" className="text-xs">
                                {token}
                              </Badge>)}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {pool.borrowAPY}
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs">
                            {pool.network}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono text-sm">
                          {pool.utilization}
                        </TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>

    {/* Pool Facts Dialog */}
    <Dialog open={!!selectedPool} onOpenChange={() => setSelectedPool(null)}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Pool Facts</DialogTitle>
        </DialogHeader>
        
        {selectedPool && <div className="space-y-6">
            {/* Pool Header */}
            <div className="bg-primary-gradient text-primary-foreground p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">
                {selectedPool.name || selectedPool.location}
              </h3>
              <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                {selectedPool.type === 'market' ? 'Market Pool' : selectedPool.type === 'building' ? 'Building Pool' : 'Category Pool'}
              </Badge>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedPool.type === 'market' && <>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-semibold">{selectedPool.location}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Country</p>
                    <p className="text-lg font-semibold">{selectedPool.country}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="text-lg font-semibold">{selectedPool.totalValue}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Properties</p>
                    <p className="text-lg font-semibold">{selectedPool.properties}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Avg Return</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.avgReturn}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                    <p className="text-lg font-semibold">{selectedPool.occupancyRate}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="text-lg font-semibold">{selectedPool.marketCap}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.growth}</p>
                  </div>
                </>}

              {selectedPool.type === 'pool' && <>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Deposits</p>
                    <p className="text-lg font-semibold">{selectedPool.deposits}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Supply APY</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.supplyAPY}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Utilization</p>
                    <p className="text-lg font-semibold">{selectedPool.utilization}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Network</p>
                    <p className="text-lg font-semibold">{selectedPool.network}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Curator</p>
                    <p className="text-lg font-semibold">{selectedPool.curator}</p>
                  </div>
                </>}

              {selectedPool.type === 'building' && <>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Value</p>
                    <p className="text-lg font-semibold">{selectedPool.totalValue}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Units</p>
                    <p className="text-lg font-semibold">{selectedPool.units}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Avg Return</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.avgReturn}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Occupancy</p>
                    <p className="text-lg font-semibold">{selectedPool.occupancy}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="text-lg font-semibold">{selectedPool.marketCap}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="text-lg font-semibold text-success">{selectedPool.growth}</p>
                  </div>
                </>}
            </div>

            <Separator />

            {/* Collateral Information (for pool type) */}
            {selectedPool.type === 'pool' && selectedPool.collateral && <div>
                <h4 className="text-lg font-semibold mb-3">Accepted Collateral</h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedPool.collateral.map((token: string, idx: number) => <Badge key={idx} variant="secondary">{token}</Badge>)}
                </div>
              </div>}

            {/* Additional Info */}
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" />
                Pool Information
              </h4>
              <p className="text-sm text-muted-foreground">
                {selectedPool.type === 'market' ? `This market-based pool aggregates real estate financing opportunities across ${selectedPool.location}, ${selectedPool.country}. Loans could be for land acquisition, construction development, mezzanine financing, bridge loans, or other real estate purposes.` : selectedPool.type === 'building' ? `This building-specific pool provides financing for ${selectedPool.name} with ${selectedPool.units} units. Loans may include construction development, bridge financing, mezzanine loans, or land acquisition for this property.` : `This loan pool specializes in ${selectedPool.name} financing. Funds are deployed for land loans, construction development, mezzanine financing, bridge loans, and other real estate lending opportunities matching this category.`}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90">
                Fund Pool
              </Button>
              <Button variant="outline" className="flex-1">
                View Details
              </Button>
            </div>
          </div>}
      </DialogContent>
    </Dialog>
  </>;
};
export default DeFi;