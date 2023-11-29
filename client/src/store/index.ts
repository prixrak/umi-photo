import { Tabs } from '@enums/Tabs';
import { proxy } from 'valtio';

const state = proxy<{
  tabs: Tabs;
  controllers: {
    color: string;
    imgFromUpload: string | null;
  };
  main: {
    color: string;
  };
}>({
  tabs: Tabs.intro,
  controllers: {
    color: 'black',
    imgFromUpload: null,
  },
  main: {
    color: '#EFBD48',
  },
});

export default state;
