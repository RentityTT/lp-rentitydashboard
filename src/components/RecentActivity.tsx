import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Withdrawal",
      description: "$50,000 USDC to wallet 0x742d...3f8a",
      amount: "-$50,000",
      type: "withdrawal",
      icon: ArrowUpRight,
    },
    {
      id: 2,
      title: "Deposit",
      description: "$100,000 USDC deposited to Atmosphere Pool",
      amount: "+$100,000",
      type: "deposit",
      icon: ArrowDownLeft,
    },
    {
      id: 3,
      title: "Earnings",
      description: "Monthly staking rewards from Century City",
      amount: "+$3,250",
      type: "earnings",
      icon: DollarSign,
    },
    {
      id: 4,
      title: "Transfer",
      description: "Transferred between pools (Juniper → Atmosphere)",
      amount: "$25,000",
      type: "transfer",
      icon: ArrowLeftRight,
    },
    {
      id: 5,
      title: "Earnings",
      description: "Bonus $RENT tokens distributed",
      amount: "+450 RENT",
      type: "earnings",
      icon: DollarSign,
    },
  ];

  return (
    <Card className="w-80 h-fit p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent</h2>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          
          return (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'deposit' ? 'bg-success/10' :
                  activity.type === 'earnings' ? 'bg-success/10' : 
                  activity.type === 'withdrawal' ? 'bg-destructive/10' :
                  'bg-muted'
                }`}>
                  <Icon className={`w-4 h-4 ${
                    activity.type === 'deposit' ? 'text-success' :
                    activity.type === 'earnings' ? 'text-success' : 
                    activity.type === 'withdrawal' ? 'text-destructive' :
                    'text-muted-foreground'
                  }`} />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-sm">{activity.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  <span className={`text-sm font-medium whitespace-nowrap ${
                    activity.type === 'withdrawal' ? 'text-destructive' :
                    activity.type === 'deposit' || activity.type === 'earnings' ? 'text-success' :
                    'text-foreground'
                  }`}>
                    {activity.amount}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <Button variant="outline" className="w-full mt-6">
        See More
      </Button>
    </Card>
  );
};

export default RecentActivity;