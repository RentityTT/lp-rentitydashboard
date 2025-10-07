import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const CapitalCard = () => {
  return <Card className="p-8 mb-8 bg-primary-gradient text-primary-foreground border-0 shadow-lg">
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold mb-2">$1,026,050</h1>
          <p className="text-lg opacity-90">Funds Available for Use</p>
        </div>
        
        <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
          Get More Capital
        </Button>
      </div>
    </Card>;
};
export default CapitalCard;