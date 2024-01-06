import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href='/' className="block w-14 h-14 relative overflow-hidden rounded-full">
            {/* <Image src='/logo.png' width={54} height={54} priority alt='logo'/> */}
            <Image src="/logo.png" alt="logo" layout="fill" objectFit="cover" priority />
        </Link>
    )
};

export default Logo;