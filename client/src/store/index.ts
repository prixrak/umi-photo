import { Tabs } from '@enums/Tabs';
import { proxy } from 'valtio';

const state = proxy({
  tabs: Tabs.intro,
  main: {
    color: '#EFBD48',
  },
});

export default state;
