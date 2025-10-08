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
import { TrendingUp } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import BlockchainPaymentHistory from "./BlockchainPaymentHistory";
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
    productType: "Bond",
    amount: "$175,500",
    apy: "7.82%",
    duration: "Fixed - 3 months remaining",
    startDate: "Apr 1, 2024",
    network: "Solana",
    status: "Active"
  }, {
    pool: "Hong Kong Market-Based Loan",
    productType: "Loan",
    amount: "$150,000",
    apy: "11.2%",
    duration: "Flexible",
    startDate: "Jun 15, 2024",
    network: "Solana",
    status: "Active"
  }, {
    pool: "Multi-Family Housing Loan",
    productType: "Loan",
    amount: "$85,000",
    apy: "9.95%",
    duration: "Flexible",
    startDate: "Aug 1, 2024",
    network: "Ethereum",
    status: "Active"
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
                                {earnPositions.map((position, index) => <TableRow key={index} className="hover:bg-muted/50">
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
                                  </TableRow>)}
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