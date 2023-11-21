import Image from 'next/image';
import Link from 'next/link';
import Button from '../common/Button';

type ProjectProps = {
    ImageSrc: string;
    ImageAlt: string;
    Title: string;
    Description: string;
    ButtonLabel: string;
    ButtonLink: string;
};

export default function Project({ ImageSrc, ImageAlt, Title, Description, ButtonLabel, ButtonLink }: ProjectProps) {
    return (
        <div className="bg-quinary rounded-[36px] p-5 m-auto h-full flex flex-col">
            <Image className="w-full rounded-[20px]" src={ImageSrc} alt={ImageAlt} width={1000} height={1000} />
            <h3 className="text-xl font-bold my-5">{Title}</h3>
            <p>{Description}</p>
            <Link rel="noreferrer" target="_blank" href={ButtonLink} className="mt-auto">
                <Button text={ButtonLabel} className="m-auto my-5" />
            </Link>
        </div>
    );
}
