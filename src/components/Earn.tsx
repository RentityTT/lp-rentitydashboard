import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Info, Minus, Plus, BarChart3, Rocket } from "lucide-react";
import usdcLogo from "@/assets/usdc-logo.png";

const Earn = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [lockupMonths, setLockupMonths] = useState(3);
  const [activeType, setActiveType] = useState<"bond" | "loan">("bond");
  
  const walletBalance = 50000;
  const baseAPY = 10;
  const multiplier = lockupMonths * 0.99;
  const estimatedYield = Number(depositAmount) * (baseAPY / 100);
  const estimatedRewardsPerDay = estimatedYield / 365;

  const handlePercentage = (percent: number) => {
    const amount = (walletBalance * percent).toFixed(2);
    setDepositAmount(amount);
  };

  const incrementMonths = () => {
    if (lockupMonths < 12) setLockupMonths(lockupMonths + 1);
  };

  const decrementMonths = () => {
    if (lockupMonths > 1) setLockupMonths(lockupMonths - 1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Earn with USDC Deposits</h1>
      
      <Card className="bg-card border-border">
        <CardContent className="p-8">
          {/* Type Selector */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveType("bond")}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeType === "bond"
                  ? "bg-primary/10 text-primary border-2 border-primary"
                  : "bg-muted text-muted-foreground border-2 border-transparent hover:bg-muted/80"
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Bond
            </button>
            <button
              onClick={() => setActiveType("loan")}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeType === "loan"
                  ? "bg-primary/10 text-primary border-2 border-primary"
                  : "bg-muted text-muted-foreground border-2 border-transparent hover:bg-muted/80"
              }`}
            >
              <Rocket className="w-5 h-5" />
              Loan
            </button>
          </div>

          {/* Deposit Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold">Deposit USDC</h2>
              <img src={usdcLogo} alt="USDC" className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-success">Aug {baseAPY}% APY</span>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Amount Input */}
          <div className="bg-muted/50 rounded-lg p-6 mb-6">
            <Input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="0.00"
              className="text-4xl font-bold bg-transparent border-none h-auto p-0 mb-4 focus-visible:ring-0"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => handlePercentage(0)}
              >
                Wallet {walletBalance.toLocaleString()}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePercentage(0.5)}
              >
                50%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePercentage(1)}
              >
                Max
              </Button>
            </div>
          </div>

          {/* Lockup Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold text-muted-foreground">
                Lockup to earn more $RENT Tokens
              </h3>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>

            <div className="bg-muted/30 rounded-lg p-6 flex items-center justify-between">
              <button
                onClick={decrementMonths}
                className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Minus className="w-5 h-5 text-primary" />
              </button>

              <div className="text-center">
                <div className="text-3xl font-bold mb-1">{lockupMonths} months</div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">{multiplier.toFixed(2)}x</span>
                <span className="text-2xl">🪙</span>
              </div>

              <button
                onClick={incrementMonths}
                className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Plus className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Estimates */}
          <div className="space-y-3 mb-8 p-4 bg-muted/30 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Est. annual yield</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  {estimatedYield.toFixed(2)}
                </span>
                <img src={usdcLogo} alt="USDC" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Est. $RENT Tokens</span>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">
                  {estimatedRewardsPerDay.toFixed(2)}/day
                </span>
                <span className="text-xl">🪙</span>
              </div>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <Button className="w-full py-6 text-lg bg-primary-gradient hover:opacity-90">
            Connect Wallet
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Earn;
