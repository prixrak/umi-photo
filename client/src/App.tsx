import { Home } from '@pages/Home';
import { ModelsView } from '@pages/ModelsView';
import 'filepond/dist/filepond.min.css';
import '@pqina/pintura/pintura.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css';

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
