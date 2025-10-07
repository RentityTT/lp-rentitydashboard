import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopNavigationProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  onWalletClick: () => void;
}

const TopNavigation = ({
  activeTab,
  onTabClick,
  onWalletClick
}: TopNavigationProps) => {
  const tabs = [
    { id: "portfolio", label: "Portfolio" },
    { id: "earn", label: "Earn" },
    { id: "defi", label: "DeFi" }
  ];

  return (
    <div className="flex items-center justify-center p-6 bg-background relative">
      <div className="flex items-center gap-2 bg-card border border-border rounded-full px-2 py-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={cn(
              "px-8 py-3 rounded-full font-medium transition-all text-base",
              activeTab === tab.id
                ? "bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white"
                : "text-foreground hover:text-foreground/80"
            )}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <button 
        onClick={onWalletClick}
        className="absolute right-6 flex items-center gap-3 bg-card border-2 border-[hsl(180,65%,45%)] rounded-full px-6 py-3 hover:bg-accent transition-colors cursor-pointer"
      >
        <span className="text-foreground font-medium text-base">Wallet</span>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] flex items-center justify-center">
          <Home className="h-4 w-4 text-white" />
        </div>
      </button>
    </div>
  );
};

export default TopNavigation;