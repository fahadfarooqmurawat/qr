import {
  BarChart3Icon,
  CheckIcon,
  CrownIcon,
  EyeIcon,
  GlobeIcon,
  HistoryIcon,
  UsersIcon,
} from "@/src/components/icons";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export const Pricing = () => {
  return (
    <section className='text-center mb-20'>
      <h2 className='text-3xl font-bold mb-4 text-balance'>
        Simple, Transparent Pricing
      </h2>
      <p className='text-muted-foreground text-lg mb-12 text-pretty max-w-2xl mx-auto'>
        Start free and upgrade when you need advanced analytics and tracking
        features
      </p>

      <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
        <Card className='p-8 relative'>
          <CardHeader className='text-center pb-8'>
            <CardTitle className='text-2xl'>Free</CardTitle>
            <div className='text-4xl font-bold'>$0</div>
            <CardDescription>Perfect for personal use</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <CheckIcon />
                <span>Unlimited QR code generation</span>
              </div>
              <div className='flex items-center gap-3'>
                <CheckIcon />
                <span>Multiple content types</span>
              </div>
              <div className='flex items-center gap-3'>
                <CheckIcon />
                <span>PNG & SVG downloads</span>
              </div>
            </div>
            <Button variant='outline' className='w-full mt-8 bg-transparent'>
              Current Plan
            </Button>
          </CardContent>
        </Card>

        <Card className='p-8 relative border-amber-200 bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20'>
          <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
            <Badge className='bg-amber-600 text-white px-4 py-1'>
              Most Popular
            </Badge>
          </div>
          <CardHeader className='text-center pb-8'>
            <CardTitle className='text-2xl flex items-center justify-center gap-2'>
              <CrownIcon className='h-6 w-6 text-amber-600' />
              Pro
            </CardTitle>
            <div className='space-y-2'>
              <div className='text-4xl font-bold'>
                $4.99
                <span className='text-lg text-muted-foreground'>/month</span>
              </div>
              <div className='text-sm text-muted-foreground'>
                or $49.99/year{" "}
                <Badge variant='secondary' className='ml-1'>
                  Save 17%
                </Badge>
              </div>
            </div>
            <CardDescription>Advanced analytics and tracking</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <CheckIcon />
                <span>Everything in Free</span>
              </div>
              <div className='flex items-center gap-3'>
                <HistoryIcon className='h-5 w-5 text-amber-600' />
                <span>QR code history tracking</span>
              </div>
              <div className='flex items-center gap-3'>
                <BarChart3Icon className='h-5 w-5 text-amber-600' />
                <span>Detailed scan analytics</span>
              </div>
              <div className='flex items-center gap-3'>
                <EyeIcon className='h-5 w-5 text-amber-600' />
                <span>Real-time tracking</span>
              </div>
              <div className='flex items-center gap-3'>
                <UsersIcon className='h-5 w-5 text-amber-600' />
                <span>Audience insights</span>
              </div>
              <div className='flex items-center gap-3'>
                <GlobeIcon className='h-5 w-5 text-amber-600' />
                <span>Geographic data</span>
              </div>
            </div>
            <Button className='w-full mt-8 bg-amber-600 hover:bg-amber-700'>
              <CrownIcon className='h-4 w-4 mr-2' />
              Upgrade to Pro
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
