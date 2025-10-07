import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Info } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
const DeFi = () => {
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
  const pools = [{
    name: "Residential Prime Pool",
    deposits: "$1,245,678,901",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "6.82%",
    borrowAPY: "7.45%",
    network: "Solana",
    utilization: "85%"
  }, {
    name: "Commercial Property Pool",
    deposits: "$892,345,123",
    curator: "Rentity Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "7.12%",
    borrowAPY: "8.05%",
    network: "Solana",
    utilization: "78%"
  }, {
    name: "Mixed-Use Development",
    deposits: "$678,234,567",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT", "DAI"],
    supplyAPY: "6.45%",
    borrowAPY: "7.15%",
    network: "Solana",
    utilization: "72%"
  }, {
    name: "Multi-Family Housing",
    deposits: "$567,890,234",
    curator: "Rentity Protocol",
    collateral: ["USDC"],
    supplyAPY: "6.95%",
    borrowAPY: "7.75%",
    network: "Ethereum",
    utilization: "88%"
  }, {
    name: "Student Housing Pool",
    deposits: "$445,123,678",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "7.35%",
    borrowAPY: "8.25%",
    network: "Solana",
    utilization: "82%"
  }, {
    name: "Luxury Residential",
    deposits: "$389,456,890",
    curator: "Rentity Protocol",
    collateral: ["USDC", "DAI"],
    supplyAPY: "6.65%",
    borrowAPY: "7.35%",
    network: "Solana",
    utilization: "75%"
  }, {
    name: "Retail Property Pool",
    deposits: "$312,567,234",
    curator: "Rentity Protocol",
    collateral: ["USDC"],
    supplyAPY: "6.28%",
    borrowAPY: "6.95%",
    network: "Arbitrum",
    utilization: "68%"
  }, {
    name: "Office Space Pool",
    deposits: "$267,890,123",
    curator: "Rentity Protocol",
    collateral: ["USDC", "USDT"],
    supplyAPY: "6.15%",
    borrowAPY: "6.85%",
    network: "Solana",
    utilization: "65%"
  }];
  const earnPositions = [{
    pool: "Residential Prime Pool",
    type: "Supply",
    amount: "$275,500",
    amountNumeric: 275500,
    apy: "6.82%",
    apyNumeric: 6.82,
    monthlyEarnings: "$1,566",
    monthlyEarningsNumeric: 1566,
    bonusRentTokens: "125",
    bonusRentTokensNumeric: 125,
    duration: "Flexible",
    startDate: "Apr 1, 2024",
    status: "Active",
    network: "Solana",
    details: {
      positionId: "RPP-2024-04-001",
      depositDate: "Apr 1, 2024",
      daysActive: 275,
      principalAmount: "$275,500",
      currentValue: "$289,625",
      yieldEarned: "$14,125",
      monthlyEarnings: "$1,566",
      projectedAnnualYield: "$18,793",
      bonusRentTokens: "125 RENT",
      poolUtilization: "85%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$1,564"
    }
  }, {
    pool: "Hong Kong Market-Based Pool",
    type: "Supply",
    amount: "$150,000",
    amountNumeric: 150000,
    apy: "9.2%",
    apyNumeric: 9.2,
    monthlyEarnings: "$1,150",
    monthlyEarningsNumeric: 1150,
    bonusRentTokens: "95",
    bonusRentTokensNumeric: 95,
    duration: "Flexible",
    startDate: "Jun 15, 2024",
    status: "Active",
    network: "Solana",
    details: {
      positionId: "HK-2024-06-001",
      depositDate: "Jun 15, 2024",
      daysActive: 200,
      principalAmount: "$150,000",
      currentValue: "$157,562",
      yieldEarned: "$7,562",
      monthlyEarnings: "$1,150",
      projectedAnnualYield: "$13,800",
      bonusRentTokens: "95 RENT",
      poolUtilization: "92%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$1,150"
    }
  }, {
    pool: "Multi-Family Housing",
    type: "Supply",
    amount: "$85,000",
    amountNumeric: 85000,
    apy: "6.95%",
    apyNumeric: 6.95,
    monthlyEarnings: "$492",
    monthlyEarningsNumeric: 492,
    bonusRentTokens: "68",
    bonusRentTokensNumeric: 68,
    duration: "Flexible",
    startDate: "Aug 1, 2024",
    status: "Active",
    network: "Ethereum",
    details: {
      positionId: "MFH-2024-08-001",
      depositDate: "Aug 1, 2024",
      daysActive: 153,
      principalAmount: "$85,000",
      currentValue: "$87,474",
      yieldEarned: "$2,474",
      monthlyEarnings: "$492",
      projectedAnnualYield: "$5,908",
      bonusRentTokens: "68 RENT",
      poolUtilization: "88%",
      nextDistribution: "Jan 15, 2025",
      distributionAmount: "$487"
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
  return <div className="space-y-6">
      {/* Header and Description */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Rentity Real Estate</h1>
        <p className="text-muted-foreground">
          Rentity DeFi Pools give property owners two powerful options:
        </p>
        <div className="mt-4 space-y-3 text-muted-foreground">
          <p>
            <strong>1. Earn Yield</strong> — Deposit stablecoins into Rentity Pools to earn returns backed by real estate cashflows. Choose from curated pools by market (Vancouver, New York, Hong Kong) or by sector (multifamily, senior housing, student housing), with transparent terms and on-chain reporting.
          </p>
          <p>
            <strong>2. Borrow</strong> — Tap into the same pools for fast, non-dilutive financing. Property owners can request loans, receiving upfront liquidity directly from global LPs.
          </p>
        </div>
      </div>

      <Tabs defaultValue="earn" className="w-full">
        

        <TabsContent value="earn" className="mt-6 space-y-6">

      {/* Metrics Overview Section */}
      <div className="p-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg rounded-lg">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Total Supplied</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold mb-1">$510,500</p>
            <p className="text-sm">Across 3 pools</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Monthly Earnings</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold mb-1">$3,208</p>
            <p className="text-sm text-success">+8.2% avg APY</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Bonus $RENT Tokens</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold mb-1">288</p>
            <p className="text-sm">RENT earned this month</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm">Total Earned</p>
              <Info className="h-4 w-4" />
            </div>
            <p className="text-4xl font-bold">$24,161</p>
            <p className="text-sm">Since inception</p>
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
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">APY</TableHead>
                <TableHead className="text-right">Monthly Earnings</TableHead>
                <TableHead className="text-right">Bonus $RENT</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {earnPositions.map((position, index) => <Dialog key={index}>
                  <DialogTrigger asChild>
                    <TableRow className="hover:bg-muted/50 cursor-pointer">
                      <TableCell className="font-medium">{position.pool}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-[hsl(158,64%,52%)]/20 text-[hsl(158,64%,52%)]">
                          {position.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {position.amount}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm text-success">
                        {position.apy}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm text-[hsl(158,64%,52%)]">
                        {position.monthlyEarnings}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm text-[hsl(90,70%,60%)]">
                        {position.bonusRentTokens} RENT
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {position.startDate}
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
                      <DialogTitle className="text-2xl font-bold">{position.pool} Position</DialogTitle>
                      <p className="text-muted-foreground">Position ID: {position.details.positionId}</p>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-6">
                      {/* Key Metrics Cards */}
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                          <CardContent className="pt-6">
                            <p className="text-sm text-muted-foreground mb-1">Principal Amount</p>
                            <p className="text-3xl font-bold">{position.details.principalAmount}</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-[hsl(158,64%,52%)]/10 to-[hsl(158,64%,52%)]/5 border-[hsl(158,64%,52%)]/20">
                          <CardContent className="pt-6">
                            <p className="text-sm text-muted-foreground mb-1">Yield Earned</p>
                            <p className="text-3xl font-bold text-success">{position.details.yieldEarned}</p>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                          <CardContent className="pt-6">
                            <p className="text-sm text-muted-foreground mb-1">Current Value</p>
                            <p className="text-3xl font-bold">{position.details.currentValue}</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Position Information */}
                      <Card>
                        <CardHeader className="bg-muted/30">
                          <CardTitle className="text-lg">Position Information</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-muted-foreground">APY</span>
                                <span className="font-semibold text-success text-lg">{position.apy}</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-muted-foreground">Deposit Date</span>
                                <span className="font-mono text-sm">{position.details.depositDate}</span>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b">
                                <span className="text-muted-foreground">Days Active</span>
                                <span className="font-semibold">{position.details.daysActive} days</span>
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
                                <span className="text-muted-foreground">Pool Utilization</span>
                                <span className="font-semibold">{position.details.poolUtilization}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                       {/* Yield Information */}
                      <Card>
                        <CardHeader className="bg-muted/30">
                          <CardTitle className="text-lg">Yield & Distribution</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg bg-[hsl(158,64%,52%)]/5">
                              <p className="text-sm text-muted-foreground mb-1">Monthly Earnings</p>
                              <p className="text-2xl font-bold text-[hsl(158,64%,52%)] mb-3">{position.details.monthlyEarnings}</p>
                              <p className="text-xs text-muted-foreground">
                                Per month
                              </p>
                            </div>
                            <div className="p-4 border rounded-lg bg-[hsl(90,70%,60%)]/5">
                              <p className="text-sm text-muted-foreground mb-1">Bonus $RENT Tokens</p>
                              <p className="text-2xl font-bold text-[hsl(90,70%,60%)] mb-3">{position.details.bonusRentTokens}</p>
                              <p className="text-xs text-muted-foreground">
                                Monthly rewards
                              </p>
                            </div>
                            <div className="p-4 border rounded-lg bg-success/5">
                              <p className="text-sm text-muted-foreground mb-1">Projected Annual Yield</p>
                              <p className="text-2xl font-bold text-success mb-3">{position.details.projectedAnnualYield}</p>
                              <p className="text-xs text-muted-foreground">
                                Based on APY of {position.apy}
                              </p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="p-4 border rounded-lg">
                              <p className="text-sm text-muted-foreground mb-1">Next Distribution</p>
                              <p className="text-xl font-bold mb-3">{position.details.nextDistribution}</p>
                              <p className="text-sm text-muted-foreground mb-1">Amount</p>
                              <p className="text-lg font-bold text-success">{position.details.distributionAmount}</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                              <p className="text-sm text-muted-foreground mb-1">Pool Utilization</p>
                              <p className="text-xl font-bold">{position.details.poolUtilization}</p>
                              <p className="text-xs text-muted-foreground mt-2">
                                Higher utilization = more earnings
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Performance Summary */}
                      <Card>
                        <CardHeader className="bg-muted/30">
                          <CardTitle className="text-lg">Performance Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <span className="text-sm text-muted-foreground">Total Deposited</span>
                              <span className="text-lg font-semibold">{position.details.principalAmount}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                              <span className="text-sm text-muted-foreground">Total Yield Earned</span>
                              <span className="text-lg font-semibold text-success">{position.details.yieldEarned}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                              <span className="text-sm text-muted-foreground">Current Total Value</span>
                              <span className="text-xl font-bold">{position.details.currentValue}</span>
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
      <Card className="border-0 shadow-none">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Pools</h2>
        </div>
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
                  <TableHead className="text-right">Avg Return</TableHead>
                  <TableHead className="text-right">Occupancy</TableHead>
                  <TableHead className="text-right">Market Cap</TableHead>
                  <TableHead className="text-right">Growth</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {markets.map((market, index) => <TableRow key={index} className="hover:bg-muted/50">
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
                  </TableRow>)}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="category" className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vault</TableHead>
                  <TableHead className="text-right">Deposits</TableHead>
                  <TableHead>Curator</TableHead>
                  <TableHead>Collateral</TableHead>
                  <TableHead className="text-right">Supply APY</TableHead>
                  <TableHead className="text-right">Borrow APY</TableHead>
                  <TableHead>Network</TableHead>
                  <TableHead className="text-right">Utilization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pools.map((pool, index) => <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{pool.name}</TableCell>
                    <TableCell className="text-right font-mono text-sm">
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
                    <TableCell className="text-right font-mono text-sm text-success">
                      {pool.supplyAPY}
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
          <Card className="border-0 shadow-none">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Pools</h2>
            </div>
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
          </Card>
        </TabsContent>
      </Tabs>
    </div>;
};
export default DeFi;