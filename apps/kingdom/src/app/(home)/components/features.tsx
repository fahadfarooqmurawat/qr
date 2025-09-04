import {
  DownloadIcon,
  GlobeIcon,
  HistoryIcon,
  ShieldIcon,
  SmartphoneIcon,
  SwordIcon,
} from "@/src/components/icons";
import { Card } from "@workspace/ui/components/card";

export const Features = () => {
  return (
    <section className='text-center'>
      <h2 className='text-3xl font-bold mb-4 text-balance'>
        Why Choose Royal Scrolls?
      </h2>
      <p className='text-muted-foreground text-lg mb-12 text-pretty max-w-2xl mx-auto'>
        Create professional QR codes with the precision and reliability of the
        royal court's finest scribes
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Card className='p-6 text-center hover:shadow-lg transition-all'>
          <div className='p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4'>
            <SwordIcon className='h-6 w-6 text-primary' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Swift Creation</h3>
          <p className='text-muted-foreground'>
            Our royal scribes work with lightning speed to create your scrolls
            in seconds.
          </p>
        </Card>

        <Card className='p-6 text-center hover:shadow-lg transition-all'>
          <div className='p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4'>
            <ShieldIcon className='h-6 w-6 text-primary' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Royal Security</h3>
          <p className='text-muted-foreground'>
            Your information is protected by the kingdom's strongest defenses
            and never stored.
          </p>
        </Card>

        <Card className='p-6 text-center hover:shadow-lg transition-all'>
          <div className='p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4'>
            <GlobeIcon className='h-6 w-6 text-primary' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Multiple Formats</h3>
          <p className='text-muted-foreground'>
            Support for royal decrees, portals, messages, communications, and
            network spells.
          </p>
        </Card>

        <Card className='p-6 text-center hover:shadow-lg transition-all'>
          <div className='p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4'>
            <DownloadIcon />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Royal Quality</h3>
          <p className='text-muted-foreground'>
            Download in PNG or SVG format for perfect quality at any size.
          </p>
        </Card>

        <Card className='p-6 text-center hover:shadow-lg transition-all'>
          <div className='p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4'>
            <HistoryIcon className='h-5 w-5 text-primary' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Knight's Archive</h3>
          <p className='text-muted-foreground'>
            Knights can access their complete scroll history in the royal
            archives.
          </p>
        </Card>

        <Card className='p-6 text-center hover:shadow-lg transition-all'>
          <div className='p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4'>
            <SmartphoneIcon className='h-5 w-5 text-primary' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Kingdom Wide</h3>
          <p className='text-muted-foreground'>
            Works perfectly across all devices in the kingdom.
          </p>
        </Card>
      </div>
    </section>
  );
};
