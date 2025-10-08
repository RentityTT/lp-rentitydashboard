import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Info, TrendingUp, Coins, Wallet } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
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

  // User's wallet data
  const totalBalance = 1026050;
  const totalYieldEarned = 24161;

  // Historical balance and yield data
  const balanceChartData = [{
    month: 'Apr',
    balance: 926050,
    yield: 0,
    positions: 310500
  }, {
    month: 'May',
    balance: 936750,
    yield: 3250,
    positions: 320750
  }, {
    month: 'Jun',
    balance: 948100,
    yield: 6850,
    positions: 332100
  }, {
    month: 'Jul',
    balance: 960500,
    yield: 10800,
    positions: 344500
  }, {
    month: 'Aug',
    balance: 974200,
    yield: 14900,
    positions: 358200
  }, {
    month: 'Sep',
    balance: 989100,
    yield: 18650,
    positions: 373100
  }, {
    month: 'Oct',
    balance: 1004500,
    yield: 21500,
    positions: 388500
  }, {
    month: 'Nov',
    balance: 1015300,
    yield: 23100,
    positions: 399300
  }, {
    month: 'Dec',
    balance: 1026050,
    yield: 24161,
    positions: 410500
  }];
  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`;
  };
  const handlePercentage = (percent: number) => {
    const amount = (walletBalance * percent).toFixed(2);
    setDepositAmount(amount);
  };
  return <div className="space-y-8">
      {/* My Wallet Section */}
      <div className="space-y-4">
        <div className="pb-2">
          <h2 className="text-2xl font-bold">My Wallet</h2>
          <p className="text-sm text-muted-foreground">Your balance and yield overview</p>
        </div>
        <Card>
          <CardHeader className="pb-2">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Total Balance</div>
              <div className="text-3xl font-bold">${totalBalance.toLocaleString()}</div>
              <div className="text-sm text-success mt-1">
                +${totalYieldEarned.toLocaleString()} yield earned
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Total Positions</div>
              <div className="text-3xl font-bold">$410,500</div>
              <div className="text-sm text-muted-foreground mt-1">
                Across 3 active pools
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">$RENT Tokens</div>
              <div className="text-3xl font-bold">{rentTokenBalance.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">
                ≈ ${(rentTokenBalance * rentTokenPrice).toLocaleString()} USDC
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex gap-4 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(180,65%,45%)]" />
              <span className="text-muted-foreground">Balance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(158,64%,52%)]" />
              <span className="text-muted-foreground">Yield</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(270,70%,60%)]" />
              <span className="text-muted-foreground">Positions</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={balanceChartData}>
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(180, 65%, 45%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(158, 64%, 52%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="positionsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={formatCurrency} />
              <Tooltip formatter={(value: number) => formatCurrency(value)} contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} />
              <Area type="monotone" dataKey="balance" stroke="hsl(180, 65%, 45%)" strokeWidth={2} fill="url(#balanceGradient)" />
              <Area type="monotone" dataKey="yield" stroke="hsl(158, 64%, 52%)" strokeWidth={2} fill="url(#yieldGradient)" />
              <Area type="monotone" dataKey="positions" stroke="hsl(270, 70%, 60%)" strokeWidth={2} fill="url(#positionsGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
        </Card>
      </div>

      {/* Deposit Funds Section */}
      <div className="space-y-4">
        <div className="pb-2">
          <h2 className="text-2xl font-bold">Deposit Funds</h2>
          <p className="text-sm text-muted-foreground">Choose your investment type and earn competitive returns in Rentity's general pools.</p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
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
                <Button className="w-full mt-6 bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full" size="lg">
                  Deposit Funds
                </Button>
              </CardContent>
            </Card>
          </div>
        </Card>
      </div>

      {/* Staking Section */}
      <div className="space-y-4">
        <div className="pb-2">
          <h2 className="text-2xl font-bold">Staking</h2>
          <p className="text-sm text-muted-foreground">Purchase and stake $RENT tokens to boost your APY</p>
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
              <Input type="number" value={purchaseAmount} onChange={e => setPurchaseAmount(e.target.value)} placeholder="0.00" className="text-xl h-12 font-mono mt-2" />
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
              <Input type="number" value={stakeAmount} onChange={e => setStakeAmount(e.target.value)} placeholder="0" className="text-xl h-12 font-mono mt-2" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">
                  Available: {rentTokenBalance.toLocaleString()} $RENT
                </span>
                <Button variant="outline" size="sm" onClick={() => setStakeAmount(rentTokenBalance.toString())}>
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
            <Button className="w-full bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white hover:opacity-90 rounded-full">
              Stake $RENT Tokens
            </Button>
          </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Earn;