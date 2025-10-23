import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet as WalletIcon, ArrowRight, Plus, Minus } from "lucide-react";
import usdcLogo from "@/assets/usdc-logo.png";
const Wallet = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  
  // Calculate earn amount based on deposit (1:1 ratio)
  const earnAmount = depositAmount ? parseFloat(depositAmount.replace(/,/g, '')).toLocaleString() : "0";
  return <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Wallet</h1>
          <p className="text-muted-foreground">
            Add or withdraw liquidity and earn $RENT rewards
          </p>
        </div>

        <Card className="border-2">
          <CardContent className="p-8">
            <Tabs defaultValue="add" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="add" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Liquidity
                </TabsTrigger>
                <TabsTrigger value="withdraw" className="gap-2">
                  <Minus className="h-4 w-4" />
                  Withdraw
                </TabsTrigger>
              </TabsList>

              <TabsContent value="add" className="space-y-6 mt-0">

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
                    <p className="text-sm text-muted-foreground">To Pool</p>
                    <div className="flex items-center gap-2 px-4 py-3 border-2 border-success rounded-full bg-card">
                      <span className="text-sm font-medium truncate">Residential Prime</span>
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
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <img src={usdcLogo} alt="USDC" className="w-5 h-5" />
                        </div>
                        <span className="text-3xl font-bold">$</span>
                        <input
                          type="text"
                          placeholder="0"
                          value={depositAmount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              setDepositAmount(parseFloat(value).toLocaleString());
                            } else {
                              setDepositAmount('');
                            }
                          }}
                          className="text-3xl font-bold bg-transparent border-none outline-none focus:outline-none w-full"
                        />
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
                <Button className="w-full h-12 text-base font-medium bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] hover:opacity-90 transition-opacity" size="lg">
                  Add Liquidity
                </Button>
              </TabsContent>

              <TabsContent value="withdraw" className="space-y-6 mt-0">
                {/* From/To Wallets */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <p className="text-sm text-muted-foreground">From Pool</p>
                    <div className="flex items-center gap-2 px-4 py-3 border-2 border-success rounded-full bg-card">
                      <span className="text-sm font-medium truncate">Residential Prime</span>
                      <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                        <WalletIcon className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="h-5 w-5 text-muted-foreground mt-8" />

                  <div className="flex-1 space-y-2">
                    <p className="text-sm text-muted-foreground">To Wallet</p>
                    <div className="flex items-center gap-2 px-4 py-3 border-2 border-primary/50 rounded-full bg-card">
                      <span className="text-sm font-medium truncate">eiuekm2...</span>
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <WalletIcon className="h-3 w-3 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Withdraw Amount */}
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Withdraw Amount</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <img src={usdcLogo} alt="USDC" className="w-5 h-5" />
                        </div>
                        <span className="text-3xl font-bold">$</span>
                        <input
                          type="text"
                          placeholder="0"
                          value={withdrawAmount}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '');
                            if (value) {
                              setWithdrawAmount(parseFloat(value).toLocaleString());
                            } else {
                              setWithdrawAmount('');
                            }
                          }}
                          className="text-3xl font-bold bg-transparent border-none outline-none focus:outline-none w-full"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground pl-10">USDC</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Staked Balance</span>
                      <span className="text-sm font-medium">$100,000 USDC</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">After Withdrawal</span>
                      <span className="text-sm font-medium">
                        ${withdrawAmount ? 
                          (100000 - parseFloat(withdrawAmount.replace(/,/g, ''))).toLocaleString() : 
                          '100,000'
                        } USDC
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confirm Button */}
                <Button className="w-full h-12 text-base font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition-opacity" size="lg">
                  Withdraw Liquidity
                </Button>
              </TabsContent>
            </Tabs>
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
    </div>;
};
export default Wallet;