import Image from 'next/image';
import logo from '@/images/logos/WithMeLogo.webp';
export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center gap-2 justify-center align-middle h-8" {...props}>
      <Image
        src={logo}
        alt="WithMe Logo"
        style={{ marginTop: '-10px' }}
        className="h-8 w-auto inline-block"
      />
      <span className="font-roboto font-bold inline-block text-2xl ml-2">WithMe</span>
    </div>
  );
}