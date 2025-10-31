'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

const WalletButton = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <Button onClick={() => disconnect()} variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </Button>
      </div>
    );
  }

  return <appkit-button />;
};

export default WalletButton;
