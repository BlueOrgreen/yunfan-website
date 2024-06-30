import { MenuContext } from '@/common/context/MenuContext';
import { MenuItemProps } from '@/common/types/menu';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

const MenuItem = ({
  title,
  href,
  icon,
  onClick,
  className = '',
  children,
  hideIcon = false,
}: MenuItemProps) => {
  const { hideNavbar } = useContext(MenuContext);
  const [isHovered, setIsHovered] = useState(false);
  const isExternalUrl = href?.includes('http');
  const isHashLink = href === '#';
  const router = useRouter();

  const isActiveRoute = router.pathname === href;

  const activeClasses = `flex font-sora items-center gap-2 py-2 px-4 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 rounded-lg group
    ${
      router.pathname === href
        ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:!text-neutral-200'
        : ''
    }
  `;

  const elementProps = {
    className: `${activeClasses} ${className}`,
  };

  const handleClick = () => {
    hideNavbar();
    if (onClick) onClick();
  };

  const itemComponent = () => {
    return (
      <div {...elementProps}>
        {!hideIcon && (
          <div
            className={clsx(
              'group-hover:-rotate-12 transition-all duration-300',
              isActiveRoute && '-rotate-12'
            )}
          >
            {icon}
          </div>
        )}
        <div className='flex-grow ml-0.5 text-xl'>{title}</div>
      </div>
    );
  };

  return isHashLink ? (
    <div className='cursor-pointer'>{itemComponent()}</div>
  ) : (
    <Link
      href={href}
      target={isExternalUrl ? '_blank' : ''}
      onClick={handleClick}
    >
      {itemComponent()}
    </Link>
  );
};

export default MenuItem;
