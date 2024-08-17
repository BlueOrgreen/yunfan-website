import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  FiCode as SnippetsIcon,
  FiCoffee as ProjectIcon,
  FiLayers as WeeklyIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';

import { MenuItemProps } from '@/common/types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: '主页',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: '项目',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: '博客',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog',
    type: 'Pages',
  },
  {
    title: '代码',
    href: '/snippets',
    icon: <SnippetsIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Snippets',
    type: 'Pages',
  },
  {
    title: '周刊',
    href: '/weekly',
    icon: <WeeklyIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Weekly',
    type: 'Pages',
  },
  {
    title: '关于',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: '联系',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
  {
    title: 'JS面板',
    href: '/playground',
    icon: <SiJavascript size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Playground',
    type: 'Pages',
  },
];
