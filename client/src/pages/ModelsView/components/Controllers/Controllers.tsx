import { FC } from 'react';
import { baseTransition } from '@helpers/motion';
import { Box, Button, Grid } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import HoodieSvg from '@assets/tabs/hoodie.svg';
import ShoeSvg from '@assets/tabs/shoe.svg';
import ShirtSvg from '@assets/tabs/shirt.svg';
import state from '@store/index';
import { useStore } from '@hooks/useStore';
import { Tabs } from '@enums/Tabs';
import { Customizer } from '../Customizer/Customizer';

export const Controllers: FC = () => {
  const store = useStore();

  return (
    <div>
      <AnimatePresence>
        {store.tabs !== Tabs.intro && (
          <>
            <motion.div
              {...{
                initial: { position: 'absolute', right: 0, top: 0, opacity: 0, zIndex: 100 },
                animate: { position: 'absolute', right: 60, top: 40, opacity: 1 },
                transition: baseTransition,
              }}
            >
              <Button
                sx={{
                  color: 'white',
                  backgroundColor: 'black',

                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid black',
                  },
                }}
                onClick={() => (state.tabs = Tabs.intro)}
              >
                GO BACK
              </Button>
            </motion.div>
            <motion.div
              {...{
                initial: {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: 0,
                  opacity: 0,
                  zIndex: 100,
                },
                animate: { position: 'absolute', bottom: 40, opacity: 1 },
                transition: baseTransition,
              }}
            >
              <Grid
                sx={{
                  columnGap: '16px',
                }}
              >
                {[
                  { tab: Tabs.shirt, src: ShirtSvg },
                  { tab: Tabs.hoodie, src: HoodieSvg },
                  { tab: Tabs.nike, src: ShoeSvg },
                ].map(({ tab, src }) => (
                  <Button
                    sx={{
                      backgroundColor: store.tabs === tab ? '#f0f0f5' : 'transparent',
                    }}
                    key={tab}
                    onClick={() => (state.tabs = tab)}
                  >
                    <Box
                      sx={{
                        width: '40px',
                        height: '40px',
                      }}
                      component="img"
                      src={src}
                    />
                  </Button>
                ))}
              </Grid>
            </motion.div>
            <Customizer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
