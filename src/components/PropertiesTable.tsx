import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import centuryCityImg from "@/assets/century-city.jpg";
import juniperTowerImg from "@/assets/juniper-tower.jpg";
import atmosphereImg from "@/assets/atmosphere.jpg";
const PropertiesTable = () => {
  const properties = [{
    id: "century-city",
    name: "Century City",
    image: centuryCityImg,
    upfrontCapital: "$750,550",
    termRemaining: "12 Months",
    cost: "7.1%",
    status: "Available"
  }, {
    id: "juniper-tower",
    name: "Juniper Tower",
    image: juniperTowerImg,
    upfrontCapital: "$275,500",
    termRemaining: "6 Months",
    cost: "6.5%",
    status: "Available"
  }, {
    id: "atmosphere",
    name: "Atmosphere",
    image: atmosphereImg,
    upfrontCapital: "$249,750",
    termRemaining: "12 Months",
    cost: "8.0%",
    status: "Pending"
  }];
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Available":
        return "default";
      case "Pending":
        return "secondary";
      default:
        return "outline";
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-success text-success-foreground";
      case "Pending":
        return "bg-pending text-warning-foreground";
      default:
        return "";
    }
  };
  const totalCapital = "$1,275,800";
  return <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Tokenized Properties</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-2 font-medium text-muted-foreground">Property</th>
              <th className="text-left py-4 px-2 font-medium text-muted-foreground">Upfront Capital</th>
              <th className="text-left py-4 px-2 font-medium text-muted-foreground">Term Remaining</th>
              <th className="text-left py-4 px-2 font-medium text-muted-foreground">Cost</th>
              <th className="text-left py-4 px-2 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(property => <tr key={property.id} className="border-b border-border last:border-0">
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <img src={property.image} alt={property.name} className="w-12 h-12 rounded-lg object-cover" />
                    <span className="font-medium">{property.name}</span>
                  </div>
                </td>
                <td className="py-4 px-2 font-medium">{property.upfrontCapital}</td>
                <td className="py-4 px-2 text-muted-foreground">{property.termRemaining}</td>
                <td className="py-4 px-2 text-muted-foreground">{property.cost}</td>
                <td className="py-4 px-2">
                  <Badge className={getStatusColor(property.status)} variant={getStatusVariant(property.status)}>
                    {property.status}
                  </Badge>
                </td>
              </tr>)}
            <tr className="border-t-2 border-border">
              <td className="py-4 px-2 font-bold text-lg">TOTAL</td>
              <td className="py-4 px-2 font-bold text-lg">{totalCapital}</td>
              <td className="py-4 px-2"></td>
              <td className="py-4 px-2"></td>
              <td className="py-4 px-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>;
};
export default PropertiesTable;