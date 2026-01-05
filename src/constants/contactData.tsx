import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ReactNode } from 'react';

export interface InfoItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export const info: InfoItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+98) 916 823 8775',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'masood.m.dev@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Tehran, Shariati, Police Street',
  },
];
