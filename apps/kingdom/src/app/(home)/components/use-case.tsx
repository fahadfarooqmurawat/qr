import {
  BarChart3Icon,
  GlobeIcon,
  SmartphoneIcon,
  UsersIcon,
} from "@/src/components/icons";
import Image from "next/image";
import marketingCampaign from "../../../../public/marketing_campaign_trans.png";
import eventManagement from "../../../../public/event_management_trans.png";
import businessCards from "../../../../public/business_cards_trans.png";
import analyticsTracking from "../../../../public/analytics_tracking_trans.png";

export const UseCase = () => {
  return (
    <section className='text-center mb-20'>
      <h2 className='text-3xl font-bold mb-4 text-balance'>
        Perfect for Every Use Case
      </h2>
      <p className='text-muted-foreground text-lg mb-12 text-pretty max-w-2xl mx-auto'>
        From personal projects to enterprise marketing campaigns, our QR code
        generator adapts to your needs
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='text-center space-y-3 flex flex-col items-center'>
          <Image src={marketingCampaign} alt='man blowing a horn' height={50} />
          <h3 className='font-semibold'>Marketing Campaigns</h3>
          <p className='text-sm text-muted-foreground'>
            Drive traffic to landing pages and track campaign performance
          </p>
        </div>

        <div className='text-center space-y-3 flex flex-col items-center'>
          <Image
            src={eventManagement}
            alt='large tent and people'
            height={50}
          />
          <h3 className='font-semibold'>Event Management</h3>
          <p className='text-sm text-muted-foreground'>
            Share event details, WiFi credentials, and contact information
          </p>
        </div>

        <div className='text-center space-y-3 flex flex-col items-center'>
          <Image
            src={businessCards}
            alt='medieval letter with stamp'
            height={50}
          />
          <h3 className='font-semibold'>Business Cards</h3>
          <p className='text-sm text-muted-foreground'>
            Modern networking with instant contact sharing
          </p>
        </div>

        <div className='text-center space-y-3 flex flex-col items-center'>
          <Image
            src={analyticsTracking}
            alt='medieval scroll showing a bar chart'
            height={50}
          />
          <h3 className='font-semibold'>Analytics Tracking</h3>
          <p className='text-sm text-muted-foreground'>
            Monitor engagement and optimize your QR code strategy
          </p>
        </div>
      </div>
    </section>
  );
};
