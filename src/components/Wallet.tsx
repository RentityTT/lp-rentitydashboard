import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet as WalletIcon, ArrowRight } from "lucide-react";
import usdcLogo from "@/assets/usdc-logo.png";

const Wallet = () => {
  const [depositAmount, setDepositAmount] = useState("100,000");
  const [earnAmount, setEarnAmount] = useState("100,000");

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Deposit</h1>
          <p className="text-muted-foreground">
            Earn $RENT rewards for participating in Rentity's liquidity pool
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="p-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-center">Deposit Liquidity</h2>

              {/* From/To Wallets */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <p className="text-sm text-muted-foreground">From</p>
                  <div className="flex items-center gap-2 px-4 py-3 border-2 border-primary/50 rounded-full bg-card">
                    <span className="text-sm font-medium truncate">eiuekm2...</span>
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <WalletIcon className="h-3 w-3 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <ArrowRight className="h-5 w-5 text-muted-foreground mt-8" />

                <div className="flex-1 space-y-2">
                  <p className="text-sm text-muted-foreground">To</p>
                  <div className="flex items-center gap-2 px-4 py-3 border-2 border-success rounded-full bg-card">
                    <span className="text-sm font-medium truncate">fidlkam34...</span>
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                      <WalletIcon className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Deposit and Earn Amounts */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Deposit</p>
                  <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <img src={usdcLogo} alt="USDC" className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-bold">${depositAmount}</span>
                  </div>
                    <p className="text-xs text-muted-foreground pl-10">USDC</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Earn</p>
                  <div className="space-y-1">
                    <span className="text-3xl font-bold block">{earnAmount}</span>
                    <p className="text-xs text-muted-foreground">$RENT</p>
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              <Button 
                className="w-full h-12 text-base font-medium bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] hover:opacity-90 transition-opacity"
                size="lg"
              >
                Confirm
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Balance Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Available Balance</p>
                <p className="text-2xl font-bold">$247,500 USDC</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Staked</p>
                <p className="text-2xl font-bold">$100,000 USDC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
