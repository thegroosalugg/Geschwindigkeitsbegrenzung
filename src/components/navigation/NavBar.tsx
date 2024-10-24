import NavButton from './NavButton';
import css from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={css['nav']}>
      <NavButton path='/' />
      <NavButton path='/settings' />
    </nav>
  );
}
