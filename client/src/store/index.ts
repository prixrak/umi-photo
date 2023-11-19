import { proxy } from 'valtio';

const state = proxy({
  tabs: {
    intro: true,
  },
  main: {
    color: '#EFBD48',
  },
});

export default state;
