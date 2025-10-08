import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface CapitalCardProps {
  onStakeClick?: () => void;
}

const CapitalCard = ({ onStakeClick }: CapitalCardProps) => {
  const rentTokens = 125000;
  const apyBoost = (rentTokens / 10000) * 0.1;
  return <Card className="p-6 mb-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg">
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <div>
            <h1 className="text-4xl font-bold mb-2">$1,026,050</h1>
            <p className="text-lg opacity-90">Funds Available for Use</p>
          </div>
          <Button 
            variant="secondary" 
            className="bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 backdrop-blur-sm"
            onClick={onStakeClick}
          >
            Stake For Rewards
          </Button>
        </div>
        <div className="text-right space-y-3">
          <div>
            <div className="text-3xl font-bold mb-1">{rentTokens.toLocaleString()}</div>
            <p className="text-sm opacity-90">$RENT Tokens Available</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-end gap-2 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-2xl font-bold">+{apyBoost.toFixed(2)}%</span>
            </div>
            <p className="text-xs opacity-80">Current APY Boost</p>
            <p className="text-xs opacity-60 mt-1">10,000 tokens = +0.1% APY</p>
          </div>
        </div>
      </div>
    </Card>;
};
export default CapitalCard;