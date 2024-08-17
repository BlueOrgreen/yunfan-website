import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiAntdesign,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRollupdotjs,
  SiStorybook,
  SiStyledcomponents,
  SiSwiper,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  'Artificial Intelligence': (
    <BsRobot size={iconSize} className='text-rose-500' />
  ),
  'Vue.js': <SiVuedotjs size={iconSize} className='vue' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  'Nest.js': <SiNestjs size={iconSize} className='text-rose-600' />,
  'Ant Design': <SiAntdesign size={iconSize} className='ant' />,
  Swiper: <SiSwiper size={iconSize} className='swiper' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  Rollup: <SiRollupdotjs size={iconSize} className='text-amber-500' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  Nginx: <SiNginx size={iconSize} className='text-green-500' />,
  Jest: <SiJest size={iconSize} className='text-red-600' />,
  Storybook: <SiStorybook size={iconSize} className='text-amber-500' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Express: <SiExpress size={iconSize} />,
  // TODO 把图标改为外链
  Vben: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 105 90'
      width={iconSize}
      height={iconSize}
    >
      <g strokeWidth='2' fill='none'>
        <path
          stroke='#c45ffc'
          vector-effect='non-scaling-stroke'
          d='M65.51 1.99L39.82 45.81'
        />
        <path
          stroke='#6655f6'
          vector-effect='non-scaling-stroke'
          d='M39.82 45.81l-25.7-.04'
        />
        <path
          stroke='#849de6'
          vector-effect='non-scaling-stroke'
          d='M65.29 45.82q-.7.17-.51.42'
        />
        <path
          stroke='#7a82fd'
          vector-effect='non-scaling-stroke'
          d='M64.78 46.24q-.45-.01-.75-.11-.77-.26-.93-.26-11.58-.2-23.28.04'
        />
        <path
          stroke='#7c6df6'
          vector-effect='non-scaling-stroke'
          d='M39.82 45.91v-.1'
        />
        <path
          stroke='#1c78f6'
          vector-effect='non-scaling-stroke'
          d='M39.82 45.91Q27.71 66.74 15.79 87.43c-.48.82-1.22 1.14-1.65 2.04'
        />
        <path
          stroke='#24a8e7'
          vector-effect='non-scaling-stroke'
          d='M64.78 46.24L40.61 87.93q-.2.35-.09.74.05.19.01.4-.09.48-.57.63l-.99.3'
        />
        <path
          stroke='#19e1d6'
          vector-effect='non-scaling-stroke'
          d='M90.52 46.28q-.7.4-.7 1.16a1.28 1.16-33.2 0 1-.17.65L65 90'
        />
      </g>
      <path
        fill='#ae47fc'
        d='M65.51 1.99L39.82 45.81l-25.7-.04 25.29-43.8a.76.76 0 0 1 .65-.37q12.19-.03 24.57 0c.33 0 .69.17.88.39z'
      />
      <path
        fill='#da76fc'
        d='M65.51 1.99l12.35 20.73a1.26 1.26 0 0 1 .01 1.29L65.29 45.82q-.7.17-.51.42-.45-.01-.75-.11-.77-.26-.93-.26-11.58-.2-23.28.04v-.1L65.51 1.99z'
      />
      <path
        fill='#1d63ef'
        d='M14.12 45.77l25.7.04v.1Q27.71 66.74 15.79 87.43c-.48.82-1.22 1.14-1.65 2.04q-.04-.04-.12-.06-.19-.07-.29-.25-5.88-10.44-11.9-21-.27-.48.01-.96l12.28-21.43z'
      />
      <path
        fill='#1a8dfd'
        d='M64.78 46.24L40.61 87.93q-.2.35-.09.74.05.19.01.4-.09.48-.57.63l-.99.3H15.02l-.88-.53c.43-.9 1.17-1.22 1.65-2.04q11.92-20.69 24.03-41.52 11.7-.24 23.28-.04.16 0 .93.26.3.1.75.11z'
      />
      <path
        fill='#2dc3d0'
        d='M65.29 45.82q11.97.06 23.96.03 1.08 0 1.27.43-.7.4-.7 1.16a1.28 1.16-33.2 0 1-.17.65L65 90H38.97l.99-.3q.48-.15.57-.63.04-.21-.01-.4-.11-.39.09-.74l24.17-41.69q-.19-.25.51-.42z'
      />
      <path
        fill='#04ffdb'
        d='M90.52 46.28q.15-.05.39.06.18.08.28.25 6.12 10.16 12.26 20.4.27.47 0 .94L90.64 90H65l24.65-41.91a1.28 1.16-33.2 0 0 .17-.65q0-.76.7-1.16z'
      />
    </svg>
  ),
};
