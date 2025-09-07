import Link from "next/link";
import Image from "next/image";
import crown from "../../public/crown_shadow_trans.png";

export const Footer = () => {
  return (
    <footer className='border-t border-border bg-card/40 backdrop-blur-sm mt-24'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <Image src={crown} alt='crown' height={24} />
            <span className='text-xl font-bold text-foreground'>
              Royal Scrolls
            </span>
          </div>
          <p className='text-muted-foreground mb-6 text-pretty'>
            {`The kingdom's most trusted and reliable QR code scribes,
              serving the realm with honor`}
          </p>
          <div className='flex justify-center gap-6 text-sm text-muted-foreground'>
            <Link href='#' className='hover:text-accent transition-colors'>
              Royal Charter
            </Link>
            <Link href='#' className='hover:text-accent transition-colors'>
              Kingdom Terms
            </Link>
            <Link href='#' className='hover:text-accent transition-colors'>
              Contact the Court
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
