import useHasMounted from '@/common/hooks/useHasMounted';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const Status = () => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();
  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  return (
    <div className='flex items-center gap-2'>
      <motion.div
        className='h-2 w-2 rounded-full bg-green-400'
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <span className=' text-neutral-600 dark:text-neutral-400 font-sora'>
        {isDarkTheme ? '打开灯!' : '关闭灯!'}
      </span>
    </div>
  );
};

export default Status;
