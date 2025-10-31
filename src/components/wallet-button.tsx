'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Wallet, LogOut, ChevronDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  const handleConnect = () => {
    setIsConnected(true);
    toast({
      title: 'Wallet Connected',
      description: 'You have successfully connected your wallet.',
    });
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    toast({
      title: 'Wallet Disconnected',
    });
  };

  if (!isConnected) {
    return (
      <Button onClick={handleConnect}>
        <Wallet className="mr-2 h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://i.pravatar.cc/150?u=wallet" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="font-mono">0x1a2b...c3d4</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDisconnect}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Disconnect</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletButton;
