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
      <div className="flex items-center gap-2 bg-white/5 dark:bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-2 py-2 shadow-lg">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={cn(
              "px-8 py-3 rounded-full font-medium transition-all text-base relative overflow-hidden",
              activeTab === tab.id
                ? "bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] text-white shadow-[0_4px_20px_rgba(0,255,255,0.3)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-50"
                : "text-foreground hover:bg-white/10 dark:hover:bg-white/5 backdrop-blur-sm"
            )}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <button 
        onClick={onWalletClick}
        className="absolute right-6 flex items-center gap-3 bg-white/5 dark:bg-white/10 backdrop-blur-xl border-2 border-[hsl(180,65%,45%)]/30 rounded-full px-6 py-3 hover:bg-white/10 dark:hover:bg-white/15 transition-all cursor-pointer shadow-lg hover:shadow-[0_4px_20px_rgba(0,255,255,0.2)]"
      >
        <span className="text-foreground font-medium text-base">Wallet</span>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(180,65%,45%)] to-[hsl(90,70%,60%)] flex items-center justify-center shadow-[0_2px_10px_rgba(0,255,255,0.4)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:to-transparent">
          <Home className="h-4 w-4 text-white relative z-10" />
        </div>
      </button>
    </div>
  );
};

export default TopNavigation;