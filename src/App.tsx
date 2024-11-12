import { useRoutes } from 'react-router-dom';
import RootLayout from './pages/Root';
import GamePage from './pages/Game';
import VocabPage from './pages/Vocab';
import SettingsPage from './pages/Settings';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; // import brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // import regular icons

library.add(fab, fas, far);

export default function App() {
  const element = useRoutes(
    [
      { path: '/',         element: <GamePage /> },
      { path: '/vocab',    element: <VocabPage /> },
      { path: '/settings', element: <SettingsPage /> }
    ]
  );

  if (!element) return null;

  return <RootLayout>{element}</RootLayout>;
}
