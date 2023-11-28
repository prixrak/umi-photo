import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Stack, Typography } from '@mui/material';
import state from '@store/index';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '@helpers/motion';
import Logo from '@assets/logo.png';
import { useStore } from '@hooks/useStore';
import { Tabs } from '@enums/Tabs';

export const Home: FC = () => {
  const store = useStore();

  return (
    <AnimatePresence>
      {store.tabs === Tabs.intro && (
        <motion.section {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <Box
              component="img"
              src={Logo}
              alt="logo"
              sx={{
                width: 120,
                height: 120,
              }}
            />
          </motion.header>

          <motion.div {...headContainerAnimation}>
            <Stack
              sx={{
                marginLeft: '40px',
              }}
              rowGap="40px"
            >
              <motion.div {...headTextAnimation}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Wanna be hot? <br />
                  Dress up with us
                </Typography>
              </motion.div>
              <motion.div {...headContentAnimation}>
                <Typography variant="h5">
                  Create your unique and exclusive shirt with our brand-new 3D customization tool.
                  <br />
                  <strong>Unleash your imagination</strong> and define your own style.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    marginTop: '40px',
                    background: 'black',

                    '&:hover': {
                      background: 'white',
                      color: 'black',
                    },
                  }}
                  onClick={() => (state.tabs = Tabs.shirt)}
                >
                  Customize It
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
