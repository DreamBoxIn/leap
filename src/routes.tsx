import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { HiHand } from 'react-icons/hi';
import { IoOptions } from 'react-icons/io5';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdHealthAndSafety,
  MdHealing,
  MdLiveHelp,
  MdYard,
} from 'react-icons/md';

const routes = [
  {
    name: 'Mi energía',
    layout: '/admin',
    path: 'energia',
    icon: <MdYard className="h-6 w-6" />,
  },
  {
    name: 'Sanación',
    layout: '/admin',
    path: 'sanacion',
    icon: <HiHand className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Mi progreso',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'progreso',
  },
  {
    name: 'Perfil',
    layout: '/admin',
    path: 'perfil',
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-6 w-6" />,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: 'rtl-default',
    icon: <MdHome className="h-6 w-6" />,
  },
];
export default routes;
