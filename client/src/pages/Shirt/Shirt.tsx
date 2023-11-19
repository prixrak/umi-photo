import { FC } from 'react';
import { CanvasForModel } from '@components/CanvasForModel';
import { ShirtModel } from '@components/ShirtModel';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '@hooks/useStore';
import { Typography } from '@mui/material';
import { baseTransition } from '@helpers/motion';

interface Props {}

export const Shirt: FC<Props> = () => {
  const store = useStore();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <AnimatePresence>
        {!store.tabs.intro && (
          <>
            <motion.div
              {...{
                initial: { position: 'absolute', left: 0, top: '40%', opacity: 0 },
                animate: { position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', opacity: 1 },
                transition: baseTransition,
              }}
            >
              <Typography variant="h6">dsadsadsada</Typography>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <CanvasForModel>
        <ShirtModel />
      </CanvasForModel>
    </div>
  );
};
