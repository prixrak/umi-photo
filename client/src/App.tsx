import { Home } from '@pages/Home';
import { ModelsView } from '@pages/ModelsView';


const App = () => {
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
      <ModelsView />
    </main>
  );
};

export default App;
