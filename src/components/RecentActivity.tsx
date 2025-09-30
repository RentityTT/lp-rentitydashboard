import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Century City",
      description: "Upfront Capital Deposited to Wallet xxadly12kl.....",
      type: "deposit",
      icon: DollarSign,
    },
    {
      id: 2,
      title: "Atmosphere",
      description: "Request for Upfront Capital Submitted",
      type: "submitted",
      icon: Check,
    },
    {
      id: 3,
      title: "Atmosphere",
      description: "You have been pre-qualified for $500,000 upfront capital",
      type: "qualified",
    },
    {
      id: 4,
      title: "Century City",
      description: "Request for Upfront Capital Approved",
      type: "approved",
      icon: Check,
    },
    {
      id: 5,
      title: "Juniper",
      description: "July 2025 Rent Received and Sent to Rentify",
      type: "rent",
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
                {Icon ? (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'deposit' ? 'bg-success/10' :
                    activity.type === 'approved' || activity.type === 'submitted' ? 'bg-success/10' : 
                    'bg-muted'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      activity.type === 'deposit' ? 'text-success' :
                      activity.type === 'approved' || activity.type === 'submitted' ? 'text-success' : 
                      'text-muted-foreground'
                    }`} />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm">{activity.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
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