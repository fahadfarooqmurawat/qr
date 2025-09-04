import {
  BarChart3Icon,
  GlobeIcon,
  SmartphoneIcon,
  UsersIcon,
} from "@/src/components/icons";

export const UseCase = () => {
  return (
    <section className='text-center'>
      <h2 className='text-3xl font-bold mb-4 text-balance'>
        Perfect for Every Use Case
      </h2>
      <p className='text-muted-foreground text-lg mb-12 text-pretty max-w-2xl mx-auto'>
        From personal projects to enterprise marketing campaigns, our QR code
        generator adapts to your needs
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='text-center space-y-3'>
          <div className='p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto'>
            <GlobeIcon className='h-8 w-8 text-blue-600 dark:text-blue-400' />
          </div>
          <h3 className='font-semibold'>Marketing Campaigns</h3>
          <p className='text-sm text-muted-foreground'>
            Drive traffic to landing pages and track campaign performance
          </p>
        </div>

        <div className='text-center space-y-3'>
          <div className='p-4 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto'>
            <UsersIcon className='h-8 w-8 text-green-600 dark:text-green-400' />
          </div>
          <h3 className='font-semibold'>Event Management</h3>
          <p className='text-sm text-muted-foreground'>
            Share event details, WiFi credentials, and contact information
          </p>
        </div>

        <div className='text-center space-y-3'>
          <div className='p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mx-auto'>
            <SmartphoneIcon className='h-8 w-8 text-purple-600 dark:text-purple-400' />
          </div>
          <h3 className='font-semibold'>Business Cards</h3>
          <p className='text-sm text-muted-foreground'>
            Modern networking with instant contact sharing
          </p>
        </div>

        <div className='text-center space-y-3'>
          <div className='p-4 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto'>
            <BarChart3Icon className='h-8 w-8 text-orange-600 dark:text-orange-400' />
          </div>
          <h3 className='font-semibold'>Analytics Tracking</h3>
          <p className='text-sm text-muted-foreground'>
            Monitor engagement and optimize your QR code strategy
          </p>
        </div>
      </div>
    </section>
  );
};
