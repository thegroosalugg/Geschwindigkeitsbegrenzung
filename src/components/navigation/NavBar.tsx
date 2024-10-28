import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavButton from './NavButton';
import css from './NavBar.module.css';

export default function NavBar() {
  const navigate = useNavigate();
  const [isDebouncing, setIsDebouncing] = useState(false);

  function navTo(path: string) {
    if (!isDebouncing) {
      setIsDebouncing(true);
      navigate(path);

      setTimeout(() => {
        setIsDebouncing(false);
      }, 1000);
    }
  }

  return (
    <nav className={css['nav']}>
      <NavButton path='/'         navFn={navTo} isDebouncing={isDebouncing} />
      <NavButton path='/settings' navFn={navTo} isDebouncing={isDebouncing} />
    </nav>
  );
}
