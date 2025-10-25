import './icons';
import { useRoutes } from 'react-router-dom';
import RootLayout    from './pages/Root';
import GamePage      from './pages/Game';
import VocabPage     from './pages/Vocab';
import SettingsPage  from './pages/Settings';

const routes = [
  { path: '/',         element: <GamePage />     },
  { path: '/vocab',    element: <VocabPage />    },
  { path: '/settings', element: <SettingsPage /> }
];

export default function App() {
  const element = useRoutes(routes);
  return element ? <RootLayout children={element} /> : null;
}
