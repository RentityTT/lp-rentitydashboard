import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import usdcIcon from "@/assets/usdc-icon.png";
import usdtLogo from "@/assets/usdt-logo.png";
import cadcLogo from "@/assets/cadc-logo.png";
const InvestmentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const property = location.state?.property;
  const [selectedCoin, setSelectedCoin] = useState<string>("USDC");
  const [amount, setAmount] = useState<string>("");
  if (!property) {
    return <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Property not found</p>
            <Button onClick={() => navigate("/")} className="w-full mt-4">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>;
  }
  const stablecoins = [{
    symbol: "USDC",
    name: "USD Coin",
    icon: usdcIcon
  }, {
    symbol: "USDT",
    name: "Tether",
    icon: usdtLogo
  }, {
    symbol: "CADC",
    name: "Canadian Dollar Coin",
    icon: cadcLogo
  }];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Property Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Investment Details</h1>
              <p className="text-muted-foreground">Review property details and complete your investment</p>
            </div>

            <Card>
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge variant={property.status === "Active" ? "default" : "outline"} className={property.status === "Active" ? "bg-success/90 text-white" : "bg-muted/90 text-muted-foreground"}>
                    {property.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
                  <p className="text-muted-foreground mb-3">{property.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{property.location}</span>
                    <span>•</span>
                    <span>{property.propertyType}</span>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Loan Amount</p>
                    <p className="font-semibold">{property.loanAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">APY</p>
                    <p className="font-semibold text-success">{property.apy}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LTV</p>
                    <p className="font-semibold">{property.ltv}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Term</p>
                    <p className="font-semibold">{property.term}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Property Value</p>
                    <p className="font-semibold">{property.propertyValue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Loan Type</p>
                    <p className="font-semibold">{property.loanType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Investment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Choose Stablecoin */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Step 1: Choose Your Stablecoin</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {stablecoins.map(coin => <button key={coin.symbol} onClick={() => setSelectedCoin(coin.symbol)} className={`p-4 rounded-lg border-2 transition-all hover:border-primary/50 ${selectedCoin === coin.symbol ? "border-primary bg-primary/5" : "border-border"}`}>
                        <div className="flex flex-col items-center gap-2">
                          <img src={coin.icon} alt={coin.symbol} className="h-8 w-8" />
                          <span className="font-semibold text-sm">{coin.symbol}</span>
                        </div>
                      </button>)}
                  </div>
                </div>

                <Separator />

                {/* Step 2: Enter Amount */}
                <div className="space-y-3">
                  <Label htmlFor="amount" className="text-base font-semibold">Step 2: Enter Investment Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <Input id="amount" type="number" placeholder="0.00" value={amount} onChange={e => setAmount(e.target.value)} className="pl-7 text-lg h-12" />
                  </div>
                  <p className="text-xs text-muted-foreground">Minimum investment: $1,000</p>
                  <div className="bg-muted/30 rounded-lg p-3 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">Estimated Annual Yield</p>
                    <p className="text-2xl font-bold text-success">
                      ${amount && parseFloat(amount) > 0 ? (parseFloat(amount) * parseFloat(property.apy.replace('%', '')) / 100).toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }) : '0.00'}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Based on {property.apy} APY</p>
                  </div>
                </div>

                <Separator />

                {/* Monthly Repayment Schedule for Rent-Backed Bonds */}
                {property.loanType === "Rent-Backed Bond" && amount && parseFloat(amount) > 0 && (
                  <>
                    <Separator />
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Monthly Repayment Schedule</Label>
                      <p className="text-sm text-muted-foreground">Based on rental income collections</p>
                      <div className="bg-muted/30 rounded-lg p-4 space-y-3 max-h-64 overflow-y-auto">
                        {Array.from({ length: 12 }, (_, i) => {
                          const monthlyReturn = parseFloat(amount) * (parseFloat(property.apy.replace('%', '')) / 100 / 12);
                          const principal = parseFloat(amount) / 12;
                          const total = monthlyReturn + principal;
                          const date = new Date();
                          date.setMonth(date.getMonth() + i + 1);
                          
                          return (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                              <div>
                                <p className="font-medium text-sm">
                                  {date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Principal: ${principal.toFixed(2)} + Return: ${monthlyReturn.toFixed(2)}
                                </p>
                              </div>
                              <p className="font-semibold text-success">
                                ${total.toFixed(2)}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                        <div className="flex justify-between items-center">
                          <p className="font-semibold">Total Repayment (12 months)</p>
                          <p className="text-lg font-bold text-success">
                            ${(parseFloat(amount) * (1 + parseFloat(property.apy.replace('%', '')) / 100)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <Separator />

                {/* Investment Process Info */}
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-sm">How It Works</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <p>Once ready to invest, simply choose your stablecoin — USDC, USDT, or CADC — and allocate the amount.</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <p>The smart contract automatically mints Rentity Loan Tokens (RLTs) representing your proportional ownership of the underlying loan.</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <p>All funds are held in escrow through our regulated MSB partners and custodians for compliance and transparency.</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 h-12" disabled={!amount || parseFloat(amount) < 1000}>
                    Confirm Investment
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default InvestmentPage;