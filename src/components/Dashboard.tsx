import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopNavigation from "./TopNavigation";
import CapitalCard from "./CapitalCard";
import PropertiesTable from "./PropertiesTable";
import RecentActivity from "./RecentActivity";
import Analytics from "./Analytics";
import Wallet from "./Wallet";
import DeFi from "./DeFi";
import Tokenization from "./Tokenization";
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
      case "wallet":
        setShowWallet(true);
        break;
      case "settings":
        setActiveTab("settings");
        break;
      case "juniper-tower":
      case "century-city":
      case "atmosphere":
        setActiveTab("tokenization");
        navigate(`/properties/${item}`);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (slug) {
      setActiveItem(slug as string);
      setActiveTab("tokenization");
      setShowWallet(false);
    }
  }, [slug]);
  const earnPositions = [{
    pool: "Residential Prime Pool",
    amount: "$275,500",
    apy: "6.82%",
    duration: "Flexible",
    startDate: "Apr 1, 2024",
    network: "Solana",
    status: "Active"
  }, {
    pool: "Hong Kong Market-Based Pool",
    amount: "$150,000",
    apy: "9.2%",
    duration: "Flexible",
    startDate: "Jun 15, 2024",
    network: "Solana",
    status: "Active"
  }, {
    pool: "Multi-Family Housing",
    amount: "$85,000",
    apy: "6.95%",
    duration: "Flexible",
    startDate: "Aug 1, 2024",
    network: "Solana",
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
          <div className="max-w-7xl mx-auto">
            {showWallet ? <Wallet /> : <>
                {activeTab === "portfolio" && <>
                    <h1 className="text-2xl font-bold mb-8">Hello Johnny 👋</h1>
                    
                    <div className="flex gap-8 mb-8">
                      <div className="flex-1">
                        <CapitalCard />
                        <PropertiesTable />
                      </div>
                      
                      <RecentActivity />
                    </div>

                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>My Positions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Total Liquidity Provided</p>
                              <p className="text-2xl font-bold flex items-center gap-2">
                                $510,500
                                <TrendingUp className="w-4 h-4 text-green-500" />
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Average APY</p>
                              <p className="text-2xl font-bold text-green-500">7.32%</p>
                            </div>
                          </div>

                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Pool</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>APY</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Start Date</TableHead>
                                <TableHead>Network</TableHead>
                                <TableHead>Status</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {earnPositions.map((position, index) => <TableRow key={index}>
                                  <TableCell className="font-medium">{position.pool}</TableCell>
                                  <TableCell>{position.amount}</TableCell>
                                  <TableCell className="text-green-500">{position.apy}</TableCell>
                                  <TableCell>{position.duration}</TableCell>
                                  <TableCell>{position.startDate}</TableCell>
                                  <TableCell>{position.network}</TableCell>
                                  <TableCell>
                                    <Badge variant="default">{position.status}</Badge>
                                  </TableCell>
                                </TableRow>)}
                              <TableRow className="border-t-2 font-bold bg-muted/50">
                                <TableCell className="text-lg">TOTAL</TableCell>
                                <TableCell className="text-lg">$510,500</TableCell>
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

                    <div className="mt-8">
                      <BlockchainPaymentHistory />
                    </div>
                  </>}
                
                {activeTab === "earn" && <Analytics />}
                
                {activeTab === "tokenization" && <Tokenization />}
                
                {activeTab === "defi" && <DeFi />}
                
                {activeTab === "settings" && <Settings />}
              </>}
          </div>
        </main>
      </div>
    </div>;
};
export default Dashboard;