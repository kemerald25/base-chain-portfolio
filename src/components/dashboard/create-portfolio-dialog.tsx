import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

interface CreatePortfolioDialogProps {
    children: React.ReactNode;
}

const CreatePortfolioDialog = ({ children }: CreatePortfolioDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a Sharable Portfolio</DialogTitle>
          <DialogDescription>
            Enter the details below to create a new portfolio that you can share with others.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="e.g., DeFi Degen" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea id="description" placeholder="Strategy, goals, etc." className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="wallets" className="text-right">
              Wallets
            </Label>
            <Textarea id="wallets" placeholder="Enter wallet addresses, one per line" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="is-public" className="text-right">
              Public
            </Label>
            <div className='col-span-3 flex items-center space-x-2'>
              <Switch id="is-public" />
              <Label htmlFor="is-public" className="text-sm text-muted-foreground">Make this portfolio visible to others</Label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Portfolio</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePortfolioDialog;
