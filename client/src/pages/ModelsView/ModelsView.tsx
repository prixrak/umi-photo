import { FC } from 'react';
import { CanvasForModel } from '@components/CanvasForModel';
import { ShirtModel } from '@components/ShirtModel';
import { useStore } from '@hooks/useStore';
import { Tabs } from '@enums/Tabs';
import { HoodieModel } from '@components/HoodieModel';
import { NewBalance574Model } from '@components/NewBalance574Model';
import { NikeTrainersModel } from '@components/NikeTrainersModel';
import { ReebokSneakersModel } from '@components/ReebokSneakersModel';
import { Controllers } from './components/Controllers/Controllers';

export const ModelsView: FC = () => {
  const store = useStore();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <CanvasForModel>
        {store.tabs === Tabs.shirt || store.tabs === Tabs.intro ? (
          <ShirtModel />
        ) : store.tabs === Tabs.hoodie ? (
          <HoodieModel />
        ) : store.tabs === Tabs.newBalance ? (
          <NewBalance574Model />
        ) : store.tabs === Tabs.nike ? (
          <NikeTrainersModel />
        ) : store.tabs === Tabs.reebok ? (
          <ReebokSneakersModel />
        ) : null}
      </CanvasForModel>
      <Controllers />
    </div>
  );
};
