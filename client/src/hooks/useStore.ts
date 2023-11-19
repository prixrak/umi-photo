import state from '@store/index';
import { useSnapshot } from 'valtio';

export const useStore = () => {
  return useSnapshot(state);
};
