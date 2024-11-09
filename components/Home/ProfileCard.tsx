import clsx from 'clsx';
import Image from 'next/image';
import { slugify } from '../Blog/utils';

export interface ProfileCardProps {
  name: string;
  role: string;
  descriptions: {
    icon: React.ReactNode;
    text: string;
  }[];
  cardBg?: string;
  iconBg?: string;
  iconColor?: string;
}

const ProfileCard = ({ name, role, descriptions, cardBg, iconBg, iconColor }: ProfileCardProps) => {
  return (
    <div className={clsx('mx-auto rounded-xl px-5 py-6 lg:p-8', cardBg || 'bg-gray-100')}>
      <div className="mb-5 flex flex-col items-center border-b border-gray-200 pb-5">
        <Image
          src={`/images/avatar/${slugify(name)}-1.png`}
          alt={`${name}의 프로필`}
          width={100}
          height={100}
          className="rounded-full bg-white"
        />
        <div className="mt-3 text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-1 text-slate-500">{role}</p>
        </div>
      </div>
      <ul className="flex flex-col gap-6 py-2 text-slate-700">
        {descriptions.map((description) => (
          <li key={description.text} className="flex items-center gap-4">
            <div
              className={clsx(
                'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg p-2',
                iconBg || 'bg-gray-200',
                iconColor || 'fill-current',
              )}
            >
              {description.icon}
            </div>
            <p>{description.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
