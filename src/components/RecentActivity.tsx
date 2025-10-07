import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const RecentActivity = () => {
  const activities = [{
    id: 1,
    title: "Century City",
    description: "Upfront Capital Deposited to Wallet xxadly12kl.....",
    type: "deposit",
    icon: DollarSign
  }, {
    id: 2,
    title: "Atmosphere",
    description: "Request for Upfront Capital Submitted",
    type: "submitted",
    icon: Check
  }, {
    id: 3,
    title: "Atmosphere",
    description: "You have been pre-qualified for $500,000 upfront capital",
    type: "qualified"
  }, {
    id: 4,
    title: "Century City",
    description: "Request for Upfront Capital Approved",
    type: "approved",
    icon: Check
  }, {
    id: 5,
    title: "Juniper",
    description: "July 2025 Rent Received and Sent to Rentify",
    type: "rent"
  }];
  return;
};
export default RecentActivity;