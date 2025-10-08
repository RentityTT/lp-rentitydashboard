import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
const BlockchainPaymentHistory = () => {
  const {
    toast
  } = useToast();
  const transactions = [{
    date: "2024-12-15 14:23:45",
    type: "Deposit",
    pool: "Hong Kong Market-Based Pool",
    amount: "$150,000",
    network: "Solana",
    txHash: "0x7f3a...c8d2",
    status: "Confirmed"
  }, {
    date: "2024-11-28 09:15:32",
    type: "Deposit",
    pool: "Residential Prime Pool",
    amount: "$275,500",
    network: "Solana",
    txHash: "0x4b2e...9a1f",
    status: "Confirmed"
  }, {
    date: "2024-11-10 16:42:18",
    type: "Deposit",
    pool: "Multi-Family Housing",
    amount: "$85,000",
    network: "Solana",
    txHash: "0x9c1d...3e5b",
    status: "Confirmed"
  }, {
    date: "2024-10-22 11:30:05",
    type: "Withdrawal",
    pool: "Commercial Property Pool",
    amount: "$50,000",
    network: "Solana",
    txHash: "0x2a8f...7d4c",
    status: "Confirmed"
  }, {
    date: "2024-10-05 13:55:22",
    type: "Reward Claim",
    pool: "Residential Prime Pool",
    amount: "$12,450",
    network: "Ethereum",
    txHash: "0x6e3b...4f9a",
    status: "Confirmed"
  }];
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Transaction hash copied to clipboard"
    });
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Deposit":
        return "bg-success/20 text-success";
      case "Withdrawal":
        return "bg-[hsl(180,65%,45%)]/20 text-[hsl(180,65%,45%)]";
      case "Reward Claim":
        return "bg-[hsl(90,70%,60%)]/20 text-[hsl(90,70%,60%)]";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  return <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Transaction History</span>
          <span className="text-sm font-normal text-muted-foreground">
            Last 5 Transactions
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Pool/Property</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Network</TableHead>
              <TableHead>Transaction Hash</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx, index) => <TableRow key={index} className="hover:bg-muted/50">
                <TableCell className="text-sm text-muted-foreground">
                  {tx.date}
                </TableCell>
                <TableCell>
                  <Badge className={getTypeColor(tx.type)} variant="secondary">
                    {tx.type}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">{tx.pool}</TableCell>
                <TableCell className="text-right font-mono text-sm">
                  {tx.amount}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {tx.network}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-muted px-2 py-1 rounded">
                      {tx.txHash}
                    </code>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => copyToClipboard(tx.txHash)}>
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0" asChild>
                      <a href={`https://etherscan.io/tx/${tx.txHash}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="default" className="bg-success/20 text-success">
                    {tx.status}
                  </Badge>
                </TableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </CardContent>
    </Card>;
};
export default BlockchainPaymentHistory;