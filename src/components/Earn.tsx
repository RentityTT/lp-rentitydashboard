import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Info, TrendingUp, Coins } from "lucide-react";
import usdcLogo from "@/assets/usdc-logo.png";
const Earn = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [lockupMonths, setLockupMonths] = useState(3);
  const [activeType, setActiveType] = useState<"bond" | "loan">("bond");
  const [stakeAmount, setStakeAmount] = useState("");
  const [purchaseAmount, setPurchaseAmount] = useState("");
  const walletBalance = 50000;
  const rentTokenBalance = 125000;
  const baseAPY = activeType === "bond" ? 7.82 : 11.2;
  const estimatedYield = Number(depositAmount) * (baseAPY / 100);
  const rentTokenBonus = Number(depositAmount) / 10000 * lockupMonths * 100;
  const apyBoost = Number(stakeAmount) / 10000 * 0.1;
  const rentTokenPrice = 0.15;
  const handlePercentage = (percent: number) => {
    const amount = (walletBalance * percent).toFixed(2);
    setDepositAmount(amount);
  };
  return <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Deposit Funds</h1>
        <p className="text-muted-foreground">Choose your investment type and earn competitive returns</p>
      </div>

      {/* Product Type Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Product Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setActiveType("bond")} className={`p-6 rounded-lg border-2 transition-all ${activeType === "bond" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
              <div className="text-left space-y-2">
                <div className="font-semibold text-lg">Rent Bond</div>
                <div className="text-sm text-muted-foreground">Fixed term, stable returns</div>
                <Badge variant="outline" className="text-success border-success">7.82% APY</Badge>
              </div>
            </button>
            <button onClick={() => setActiveType("loan")} className={`p-6 rounded-lg border-2 transition-all ${activeType === "loan" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}>
              <div className="text-left space-y-2">
                <div className="font-semibold text-lg">Loan</div>
                <div className="text-sm text-muted-foreground">Flexible, higher returns</div>
                <Badge variant="outline" className="text-success border-success">11.2% APY</Badge>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Deposit Amount */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Deposit Amount
            <img src={usdcLogo} alt="USDC" className="w-5 h-5" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input type="number" value={depositAmount} onChange={e => setDepositAmount(e.target.value)} placeholder="0.00" className="text-2xl h-16 font-mono" />
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-muted-foreground">
                Wallet Balance: ${walletBalance.toLocaleString()}
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handlePercentage(0.5)}>
                  50%
                </Button>
                <Button variant="outline" size="sm" onClick={() => handlePercentage(1)}>
                  Max
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lockup Period */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Lockup Period
            <Badge variant="secondary">{lockupMonths} months</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={[lockupMonths]} onValueChange={value => setLockupMonths(value[0])} min={1} max={12} step={1} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>1 month</span>
            <span>12 months</span>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Earn {rentTokenBonus.toFixed(0)} bonus $RENT tokens</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Annual APY</span>
              <span className="text-xl font-bold text-success">{baseAPY}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Estimated Annual Yield</span>
              <span className="text-xl font-bold">${estimatedYield.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Bonus $RENT Tokens</span>
              <span className="text-xl font-bold text-primary">{rentTokenBonus.toFixed(0)}</span>
            </div>
          </div>
          <Button className="w-full mt-6" size="lg">
            Deposit Funds
          </Button>
        </CardContent>
      </Card>

      {/* Staking Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">$RENT Token Staking</h2>
        <p className="text-muted-foreground mb-4">Boost your APY by staking $RENT tokens</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Purchase $RENT */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="w-5 h-5" />
              Purchase $RENT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Amount (USDC)</Label>
              <Input
                type="number"
                value={purchaseAmount}
                onChange={e => setPurchaseAmount(e.target.value)}
                placeholder="0.00"
                className="text-xl h-12 font-mono mt-2"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">
                  Current Price: ${rentTokenPrice} per $RENT
                </span>
                <span className="text-sm font-medium">
                  ≈ {(Number(purchaseAmount) / rentTokenPrice).toFixed(0)} $RENT
                </span>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              Purchase $RENT Tokens
            </Button>
          </CardContent>
        </Card>

        {/* Stake $RENT */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Stake $RENT
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Stake Amount</Label>
              <Input
                type="number"
                value={stakeAmount}
                onChange={e => setStakeAmount(e.target.value)}
                placeholder="0"
                className="text-xl h-12 font-mono mt-2"
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">
                  Available: {rentTokenBalance.toLocaleString()} $RENT
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStakeAmount(rentTokenBalance.toString())}
                >
                  Max
                </Button>
              </div>
            </div>
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="font-semibold text-primary">
                  +{apyBoost.toFixed(2)}% APY Boost
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                10,000 $RENT tokens = +0.1% APY bonus
              </p>
            </div>
            <Button className="w-full">
              Stake $RENT Tokens
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Earn;