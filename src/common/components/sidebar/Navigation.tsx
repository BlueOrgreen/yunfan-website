import { useContext } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';
import { MENU_ITEMS } from '@/contents/menu';

import Menu from './Menu';

const Navigation = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);
  const { width } = useWindowSize();
  const isMobile = width < 480;
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  const handleOpenCommandPalette = () => {
    setIsOpen(true);
  };

  const cn = 'group-hover:-rotate-12 transition-all duration-300';

  return (
    <div>
      <Menu list={filterdMenu} />
      {/* <div className='pt-1'>
        <MenuItem
          title={isMobile ? 'Command' : 'cmd + k'}
          href='#'
          icon={<CommandIcon className={cn} size={20} />}
          isExternal={false}
          onClick={() => handleOpenCommandPalette()}
        >
          
        </MenuItem>
      </div> */}
    </div>
  );
};

export default Navigation;
