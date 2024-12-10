import Image from 'next/image';
import logo from '@/images/logos/WithMeLogo.webp';

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <div className="flex items-center gap-2 justify-center align-middle h-8">
        <Image
          src={logo}
          alt="WithMe Logo" 
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        <span className="font-roboto font-bold text-2xl">WithMe</span>
      </div>
    </div>
  );
}