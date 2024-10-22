import { motion } from 'framer-motion';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';
import css from './NavButton.module.css';

const icons = {
          '/': 'chess-rook',
  '/settings': 'gear'
}

const labels = {
          '/': 'Spiel',
  '/settings': 'Optionen'
}

export default function NavButton({ path }: { path: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <NavLink
      className={`${css['nav-link']} ${isActive ? css['active'] : ''}`}
      to={path}
    >
      <FontAwesomeIcon icon={icons[path as keyof IconProp]} size='2x' />
      {labels[path as keyof typeof labels]}
      {isActive && <motion.div layoutId='tab-indicator' className={css['active-tab']} />}
    </NavLink>
  );
}
