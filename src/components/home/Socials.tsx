import Link from 'next/link';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaGitlab,
} from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/M4SooD', name: 'GitHub' },
  { icon: <FaGitlab />, path: 'https://gitlab.com/M4SooD', name: 'GitLab' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/masood-moosavi/',
    name: 'LinkedIn',
  },
  { icon: <FaTwitter />, path: 'https://x.com/Mas_Morale', name: 'Twitter' },
  { icon: <FaTelegram />, path: 'https://t.me/M4SooD', name: 'Telegram' },
];
interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
