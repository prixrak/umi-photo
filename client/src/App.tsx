 import { baseTransition } from '@helpers/motion';
import { useStore } from '@hooks/useStore';
import { Button } from '@mui/material';
import { Home } from '@pages/Home';
import { Shirt } from '@pages/Shirt';
import { Hoodie } from '@pages/Hoodie';
import { NikeTrainers } from '@pages/NikeTrainers';
import { AnimatePresence, motion } from 'framer-motion';
import state from './store';

const App = () => {
  const store = useStore();
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <Home />
      </div>
      <Hoodie />
      <AnimatePresence>
        {!store.tabs.intro && (
          <motion.div
            {...{
              initial: { position: 'absolute', right: 0, top: 0, opacity: 0 },
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
              onClick={() => (state.tabs.intro = true)}
            >
              GO BACK
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Shirt /> */}
      {/* <Welcome /> */}
      {/* <Customizer /> */}
    </main>
  );
};

export default App;
