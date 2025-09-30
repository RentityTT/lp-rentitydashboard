import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import juniperImage from "@/assets/juniper-tower.jpg";
import centuryCityImage from "@/assets/century-city.jpg";
import atmosphereImage from "@/assets/atmosphere.jpg";

const Tokenization = () => {
  const { toast } = useToast();
  const { slug } = useParams();
  const selectedProperty = slug ?? "juniper-tower";

  const propertyData: Record<string, { name: string; location: string; image: string; description: string; rentalIncome: string; unlockedLiquidity: string; rate: string; }> = {
    "juniper-tower": {
      name: "Juniper Tower",
      location: "Vancouver, BC",
      image: juniperImage,
      description: "Juniper Tower is a 155 unit rental building located in Vancouver, BC. The property is wholly owned by Greystone Properties Holdings Limited.",
      rentalIncome: "$600,000",
      unlockedLiquidity: "$275,500",
      rate: "6.5%",
    },
    "century-city": {
      name: "Century City Tower",
      location: "Los Angeles, CA",
      image: centuryCityImage,
      description: "Century City Tower is a premium office tower with stable long-term tenants and strong cashflows.",
      rentalIncome: "$1,200,000",
      unlockedLiquidity: "$500,000",
      rate: "7.1%",
    },
    atmosphere: {
      name: "Atmosphere Residence",
      location: "Surrey, BC",
      image: atmosphereImage,
      description: "Atmosphere Residence is a modern rental community with high occupancy and consistent rental income.",
      rentalIncome: "$720,000",
      unlockedLiquidity: "$310,000",
      rate: "6.8%",
    },
  };

  const liquidityData = [
    { name: "Available Liquidity", value: 40, color: "hsl(158, 64%, 52%)" },
    { name: "Liquidity Used", value: 35, color: "hsl(180, 65%, 45%)" },
    { name: "Liquidity Allocated", value: 25, color: "hsl(90, 70%, 60%)" }
  ];

  const transactions = [
    {
      date: "2025-06-01 12:00:01",
      transaction: "Future Cashflow",
      type: "Withdraw",
      amount: "-$50,000",
      fromWallet: "greystone:juniper:2840...",
      toWallet: "rentity:futurecashpool:2703..."
    },
    {
      date: "2025-06-01 12:00:00",
      transaction: "Rent Payment",
      type: "Deposit",
      amount: "$50,000",
      fromWallet: "greystone:juniper:n188...",
      toWallet: "greystone:juniper:2840..."
    },
    {
      date: "2025-05-01 12:00:01",
      transaction: "Future Cashflow",
      type: "Withdraw",
      amount: "-$50,000",
      fromWallet: "greystone:juniper:2840...",
      toWallet: "rentity:futurecashpool:2703..."
    },
    {
      date: "2025-05-01 12:00:00",
      transaction: "Rent Payment",
      type: "Deposit",
      amount: "$50,000",
      fromWallet: "greystone:juniper:n188...",
      toWallet: "greystone:juniper:2840..."
    },
    {
      date: "2025-04-01 12:00:00",
      transaction: "Upfront Cashflow",
      type: "Deposit",
      amount: "$275,500",
      fromWallet: "rentity:futurecashpool:2703...",
      toWallet: "greystone:juniper:2840..."
    }
  ];

  const property = propertyData[selectedProperty] ?? propertyData["juniper-tower"];

  const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, name, value }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 30;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    const words = name.split(' ');
    const lineHeight = 12;
    
    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-[9px] fill-foreground"
      >
        {words.map((word: string, i: number) => (
          <tspan key={i} x={x} dy={i === 0 ? 0 : lineHeight}>
            {word}
          </tspan>
        ))}
        <tspan x={x} dy={lineHeight} className="font-semibold">
          {value}%
        </tspan>
      </text>
    );
  };


  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Wallet ID copied to clipboard",
    });
  };

  return (
    <div className="space-y-6">
      {/* Property Header and Metrics */}
      <div className="flex gap-8 items-start">
        {/* Left Side - Property Info and Metrics */}
        <div className="flex-1 space-y-10">
          {/* Property Header */}
          <div className="flex items-start gap-4">
            <img 
              src={property.image} 
              alt={property.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-bold">{property.name}</h1>
                <span className="text-base text-muted-foreground">{property.location}</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">{property.description}</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-8 pt-2">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total Rental Income (Annual)</p>
              <p className="text-4xl font-bold">{property.rentalIncome}</p>
              <p className="text-xs text-muted-foreground mt-0.5">USD</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Unlocked Liquidity</p>
              <p className="text-4xl font-bold">{property.unlockedLiquidity}</p>
              <p className="text-xs text-muted-foreground mt-0.5">USD</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Rate</p>
              <p className="text-4xl font-bold">{property.rate}</p>
              <p className="text-xs text-muted-foreground mt-0.5">APY</p>
            </div>
          </div>
        </div>

        {/* Right Side - Liquidity Pie Chart */}
        <Card className="w-80 flex-shrink-0 border-0 bg-card/50 backdrop-blur">
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                <Pie
                  data={liquidityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={55}
                  paddingAngle={1}
                  dataKey="value"
                  label={renderCustomLabel}
                  labelLine={false}
                >
                  {liquidityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" fillOpacity={0.8} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Card className="border-0 shadow-none">
        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger 
              value="overview"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="cashflow"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Cashflow
            </TabsTrigger>
            <TabsTrigger 
              value="transactions"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Transactions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-6">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Rental Income</span>
                <span className="text-muted-foreground">$600,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Duration</span>
                <span className="text-muted-foreground">5.25 Years</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Rentity Rating</span>
                <span className="text-muted-foreground">A-</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Vacancy</span>
                <span className="text-muted-foreground">2.1%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Discount Rate</span>
                <span className="text-muted-foreground">6.5%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Average Rent</span>
                <span className="text-muted-foreground">$1525 / month</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Advance Rate</span>
                <span className="text-muted-foreground">90%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Manager</span>
                <span className="text-muted-foreground">Greystone Property Management</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Maximum Liquidity Available</span>
                <span className="text-muted-foreground">$540,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Wallet ID</span>
                <div className="flex items-center gap-2">
                  <code className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                    greystone:juniper:rent188...
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => copyToClipboard("greystone:juniper:rent188")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium">Current Utilization</span>
                <span className="text-muted-foreground">$275,500 (51.0%)</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cashflow" className="p-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Monthly Cashflow Projection</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead className="text-right">Rental Income</TableHead>
                      <TableHead className="text-right">Tokenized Cashflow Repayment</TableHead>
                      <TableHead className="text-right">Net Cashflow</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 6 }, (_, i) => {
                      const monthlyRepayment = Math.round(275500 / 6);
                      const rentalIncome = 50000;
                      const netCashflow = rentalIncome - monthlyRepayment;
                      const date = new Date(2025, 3 + i, 1); // Starting from April 2025
                      const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
                      
                      return (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{monthYear}</TableCell>
                          <TableCell className="text-right">
                            ${rentalIncome.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-right text-destructive">
                            -${monthlyRepayment.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-success">
                            ${netCashflow.toLocaleString()}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow className="font-bold border-t-2">
                      <TableCell>Total</TableCell>
                      <TableCell className="text-right">
                        ${(50000 * 6).toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-destructive">
                        -${(275500).toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-success">
                        ${(50000 * 6 - 275500).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Note:</span> Monthly repayment of ${Math.round(275500 / 6).toLocaleString()} is calculated from the upfront liquidity ($275,500 ÷ 6 months). 
                    Net monthly cashflow represents rental income after tokenized repayments.
                  </p>
                </div>
              </div>
          </TabsContent>

          <TabsContent value="transactions" className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Transaction</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>From Wallet ID</TableHead>
                  <TableHead>To Wallet ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((tx, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{tx.date}</TableCell>
                    <TableCell>{tx.transaction}</TableCell>
                    <TableCell>
                      <Badge variant={tx.type === "Deposit" ? "secondary" : "outline"}>
                        {tx.type}
                      </Badge>
                    </TableCell>
                    <TableCell className={tx.amount.startsWith("-") ? "text-destructive" : "text-success"}>
                      {tx.amount}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {tx.fromWallet}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => copyToClipboard(tx.fromWallet)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {tx.toWallet}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0"
                          onClick={() => copyToClipboard(tx.toWallet)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Tokenization;
