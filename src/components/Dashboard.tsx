import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import CapitalCard from "./CapitalCard";
import RecentActivity from "./RecentActivity";
import Earn from "./Earn";
import Wallet from "./Wallet";
import DeFi from "./DeFi";
import Settings from "./Settings";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { TrendingUp, Info } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import BlockchainPaymentHistory from "./BlockchainPaymentHistory";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [activeTab, setActiveTab] = useState("portfolio");
  const [showWallet, setShowWallet] = useState(false);
  const navigate = useNavigate();
  const {
    slug
  } = useParams();
  const handleSidebarClick = (item: string) => {
    setActiveItem(item);
    // Reset wallet view unless explicitly opening it
    setShowWallet(false);
    switch (item) {
      case "dashboard":
        setActiveTab("portfolio");
        navigate("/");
        break;
      case "fund":
        setActiveTab("portfolio");
        break;
      case "stake":
        setActiveTab("earn");
        break;
      case "earn":
        setActiveTab("earn");
        break;
      case "defi":
        setActiveTab("defi");
        break;
      case "wallet":
        setShowWallet(true);
        break;
      case "settings":
        setActiveTab("settings");
        break;
      default:
        break;
    }
  };
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
  return <div className="flex h-screen bg-background scale-90 origin-top-left">
      <Sidebar activeItem={activeItem} onItemClick={handleSidebarClick} />
      
      <div className="flex-1 flex flex-col">
        <TopNavigation activeTab={activeTab} onTabClick={tab => {
        setActiveTab(tab);
        setShowWallet(false);
      }} onWalletClick={() => setShowWallet(true)} />
        
        <main className="flex-1 p-8 overflow-auto">
          <div className={activeTab === "earn" ? "w-full" : "max-w-7xl mx-auto"}>
            {showWallet ? <Wallet /> : <>
                {activeTab === "portfolio" && <>
                    <h1 className="text-2xl font-bold mb-8">Hello Johnny 👋</h1>
                    
                    <div className="flex gap-8 mb-8">
                      <div className="flex-1 space-y-8">
                        <CapitalCard onStakeClick={() => setActiveTab("earn")} />
                        
                        <Card>
                          <CardHeader>
                            <CardTitle>My Positions</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-6 mb-6">
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Total Liquidity Provided</p>
                                <p className="text-2xl font-bold flex items-center gap-2">
                                  $410,500
                                  <TrendingUp className="w-4 h-4 text-green-500" />
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Average APY</p>
                                <p className="text-2xl font-bold text-green-500">9.66%</p>
                              </div>
                            </div>

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
                                        <TableCell className="text-right font-mono text-sm">{position.amount}</TableCell>
                                        <TableCell className="text-right font-mono text-sm text-success">{position.apy}</TableCell>
                                        <TableCell className="text-sm text-muted-foreground">{position.duration}</TableCell>
                                        <TableCell className="text-sm text-muted-foreground">{position.startDate}</TableCell>
                                        <TableCell>
                                          <Badge variant="outline" className="text-xs">{position.network}</Badge>
                                        </TableCell>
                                        <TableCell>
                                          <Badge variant="default" className="bg-success/20 text-success">{position.status}</Badge>
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
                                        </div>

                                        <Separator />

                                        {/* Performance Chart */}
                                        <div>
                                          <h4 className="text-lg font-semibold mb-3">Position Performance</h4>
                                          <ResponsiveContainer width="100%" height={200}>
                                            <AreaChart data={[
                                              { month: 'Jul', value: position.amountNumeric * 0.92, yield: 0 },
                                              { month: 'Aug', value: position.amountNumeric * 0.94, yield: position.amountNumeric * 0.02 },
                                              { month: 'Sep', value: position.amountNumeric * 0.96, yield: position.amountNumeric * 0.04 },
                                              { month: 'Oct', value: position.amountNumeric * 0.98, yield: position.amountNumeric * 0.06 },
                                              { month: 'Nov', value: position.amountNumeric, yield: position.amountNumeric * 0.08 },
                                              { month: 'Dec', value: parseFloat(position.details.currentValue.replace(/[$,]/g, '')), yield: parseFloat(position.details.yieldEarned.replace(/[$,]/g, '')) }
                                            ]}>
                                              <defs>
                                                <linearGradient id={`valueGradientDash${index}`} x1="0" y1="0" x2="0" y2="1">
                                                  <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                                                  <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id={`yieldGradientDash${index}`} x1="0" y1="0" x2="0" y2="1">
                                                  <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.3} />
                                                  <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0} />
                                                </linearGradient>
                                              </defs>
                                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                                              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                                              <Tooltip 
                                                formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name === 'value' ? 'Position Value' : 'Yield Earned']}
                                                contentStyle={{
                                                  backgroundColor: 'hsl(var(--card))',
                                                  border: '1px solid hsl(var(--border))',
                                                  borderRadius: '8px'
                                                }} 
                                              />
                                              <Area type="monotone" dataKey="value" stroke="hsl(180, 65%, 45%)" strokeWidth={2} fill={`url(#valueGradientDash${index})`} />
                                              <Area type="monotone" dataKey="yield" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill={`url(#yieldGradientDash${index})`} />
                                            </AreaChart>
                                          </ResponsiveContainer>
                                        </div>

                                        <Separator />

                                        {/* Distribution Timeline */}
                                        <div>
                                          <h4 className="text-lg font-semibold mb-3">Distribution Timeline</h4>
                                          <div className="bg-muted/30 rounded-lg p-4 mb-4">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                              <div>
                                                <p className="text-muted-foreground">Next Distribution</p>
                                                <p className="font-semibold">{position.details.nextDistribution}</p>
                                              </div>
                                              <div>
                                                <p className="text-muted-foreground">Distribution Amount</p>
                                                <p className="font-semibold text-success">{position.details.distributionAmount}</p>
                                              </div>
                                            </div>
                                          </div>
                                          <ResponsiveContainer width="100%" height={200}>
                                            <AreaChart data={[
                                              { month: 'Jan', distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 0.95, cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 0.95 },
                                              { month: 'Feb', distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.02, cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.97 },
                                              { month: 'Mar', distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 0.98, cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 2.95 },
                                              { month: 'Apr', distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.05, cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 4.0 },
                                              { month: 'May', distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 1.01, cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 5.01 },
                                              { month: 'Jun', distribution: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')), cumulative: parseFloat(position.details.distributionAmount.replace(/[$,]/g, '')) * 6.01 }
                                            ]}>
                                              <defs>
                                                <linearGradient id={`distGradientDash${index}`} x1="0" y1="0" x2="0" y2="1">
                                                  <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.4} />
                                                  <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.05} />
                                                </linearGradient>
                                                <linearGradient id={`cumGradientDash${index}`} x1="0" y1="0" x2="0" y2="1">
                                                  <stop offset="5%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0.3} />
                                                  <stop offset="95%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0} />
                                                </linearGradient>
                                              </defs>
                                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                                              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                                              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={(value) => `$${value.toLocaleString()}`} />
                                              <Tooltip 
                                                formatter={(value: number, name: string) => [
                                                  `$${value.toLocaleString()}`, 
                                                  name === 'distribution' ? 'Monthly' : 'Cumulative'
                                                ]}
                                                contentStyle={{
                                                  backgroundColor: 'hsl(var(--card))',
                                                  border: '1px solid hsl(var(--border))',
                                                  borderRadius: '8px'
                                                }} 
                                              />
                                              <Legend 
                                                verticalAlign="top" 
                                                height={36}
                                                formatter={(value) => value === 'distribution' ? 'Monthly Distribution' : 'Cumulative Total'}
                                              />
                                              <Area type="monotone" dataKey="distribution" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill={`url(#distGradientDash${index})`} />
                                              <Area type="monotone" dataKey="cumulative" stroke="hsl(270, 70%, 60%)" strokeWidth={2} fill={`url(#cumGradientDash${index})`} />
                                            </AreaChart>
                                          </ResponsiveContainer>
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
                                              <p className="text-sm text-muted-foreground">Pool Utilization</p>
                                              <p className="text-lg font-semibold">{position.details.poolUtilization}</p>
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
                                  <TableCell className="text-right text-lg">$410,500</TableCell>
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
                      </div>
                      
                      <RecentActivity />
                    </div>

                    <div className="mt-8">
                      <BlockchainPaymentHistory />
                    </div>
                  </>}
                
                {activeTab === "earn" && <Earn />}
                
                {activeTab === "defi" && <DeFi />}
                
                {activeTab === "settings" && <Settings />}
              </>}
          </div>
        </main>
      </div>
    </div>;
};
export default Dashboard;