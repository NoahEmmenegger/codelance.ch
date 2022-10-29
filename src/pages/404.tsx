import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/common/Button';

export default function FourOhFour() {
    return (
        <div className="my-10">
            <div className="h-96 relative">
                <Image src="/images/page_not_found.svg" alt="404" layout="fill" />
            </div>
            <h1 className="text-4xl font-bold text-center pt-10">Page Not Found</h1>
            <Link href="/">
                <a>
                    <Button text="Go Home" className="m-auto mt-10"></Button>
                </a>
            </Link>
        </div>
    );
}
