import Home from 'app/page';
import React from 'react';
import { BsCash, BsPeople } from 'react-icons/bs';
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
  MdToken,
} from 'react-icons/md';

const routes = [
  {
    name: 'Inicio PXO',
    layout: '/admin',
    path: 'inicio',
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: 'Invertir',
    layout: '/admin',
    path: 'invertir',
    icon: <MdToken className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: 'Historial',
    layout: '/admin',
    icon: <MdBarChart className="h-6 w-6" />,
    path: 'historial',
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
