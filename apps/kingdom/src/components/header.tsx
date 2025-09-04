import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { CastleIcon, CrownIcon } from "./icons";

export const Header = () => {
  return (
    <header className='border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-primary rounded-lg transition-transform hover:scale-110'>
              <CastleIcon className='h-8 w-8 text-primary-foreground' />
            </div>
            <div>
              <h1 className='text-xl font-bold text-balance text-foreground'>
                Royal Scrolls
              </h1>
              <p className='text-sm text-muted-foreground'>
                {`Kingdom's finest QR code scribes`}
              </p>
            </div>
          </div>
          <nav className='flex items-center gap-4'>
            <Link
              href='/'
              className='text-sm font-medium hover:text-accent transition-colors'
            >
              Free QR Code
            </Link>
            <a
              href='/pricing'
              className='text-sm font-medium hover:text-accent transition-colors'
            >
              Pricing
            </a>
            <a
              href='/about'
              className='text-sm font-medium hover:text-accent transition-colors'
            >
              About
            </a>
            <Button
              variant='outline'
              size='sm'
              className='transition-all hover:scale-105 bg-primary text-primary-foreground border-primary hover:bg-primary/90'
            >
              <CrownIcon className='h-4 w-4 mr-2' />
              Dashboard (Pro)
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
