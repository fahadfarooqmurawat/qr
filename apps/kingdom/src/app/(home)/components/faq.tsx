import { Card } from "@workspace/ui/components/card";

export const FAQ = () => {
  return (
    <section className='max-w-3xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-12 text-balance'>
        Frequently Asked Questions
      </h2>

      <div className='space-y-6'>
        <Card className='p-6'>
          <h3 className='font-semibold mb-2'>
            What types of content can I encode in QR codes?
          </h3>
          <p className='text-muted-foreground'>
            You can create QR codes for plain text, website URLs, email
            addresses, phone numbers, and WiFi network credentials. Our
            generator automatically formats the content for optimal scanning.
          </p>
        </Card>

        <Card className='p-6'>
          <h3 className='font-semibold mb-2'>
            Are the QR codes free to use commercially?
          </h3>
          <p className='text-muted-foreground'>
            Yes! All QR codes generated with our free plan can be used for
            personal and commercial purposes without any restrictions. The Pro
            plan adds analytics and tracking features.
          </p>
        </Card>

        <Card className='p-6'>
          <h3 className='font-semibold mb-2'>How long do QR codes last?</h3>
          <p className='text-muted-foreground'>
            QR codes themselves don't expire. However, if you're linking to a
            website or online content, make sure those destinations remain
            active for the QR code to work properly.
          </p>
        </Card>

        <Card className='p-6'>
          <h3 className='font-semibold mb-2'>
            What's included in the Pro analytics?
          </h3>
          <p className='text-muted-foreground'>
            Pro analytics include scan counts, geographic data, device types,
            scan times, and audience insights. Perfect for measuring campaign
            effectiveness and understanding your audience.
          </p>
        </Card>
      </div>
    </section>
  );
};
