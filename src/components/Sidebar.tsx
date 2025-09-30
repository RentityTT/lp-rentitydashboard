import { ChevronDown, Home, Building, Wallet, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/rentity-logo.png";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar = ({ activeItem, onItemClick }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "properties", label: "Properties", icon: Building, hasSubItems: true },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const propertyItems = [
    { id: "century-city", label: "Century City" },
    { id: "juniper-tower", label: "Juniper Tower" },
    { id: "atmosphere", label: "Atmosphere" },
  ];

  return (
    <div className="w-64 h-screen bg-card border-r border-border">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Rentity Logo" className="w-10 h-10 rounded-lg" />
          <div>
            <h2 className="font-semibold text-foreground">Greystone</h2>
            <p className="text-sm text-muted-foreground">Properties</p>
          </div>
        </div>
      </div>

      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <div key={item.id}>
              <Button
                variant={isActive && !item.hasSubItems ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 mb-1",
                  isActive && !item.hasSubItems && "bg-primary text-primary-foreground"
                )}
                onClick={() => onItemClick(item.id)}
              >
                <Icon className="h-4 w-4" />
                {item.label}
                {item.hasSubItems && (
                  <ChevronDown className="ml-auto h-4 w-4" />
                )}
              </Button>
              
              {item.hasSubItems && item.id === "properties" && (
                <div className="ml-6 space-y-1">
                  {propertyItems.map((subItem) => (
                    <Button
                      key={subItem.id}
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "w-full justify-start text-sm",
                        activeItem === subItem.id && "bg-muted"
                      )}
                      onClick={() => onItemClick(subItem.id)}
                    >
                      {subItem.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;