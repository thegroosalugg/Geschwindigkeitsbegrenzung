import { motion } from 'framer-motion';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import css from './NavButton.module.css';

const icons = {
          '/': 'chess-rook',
  '/settings': 'gear'
}

const labels = {
          '/': 'Spiel',
  '/settings': 'Optionen'
}

interface NavProps {
          path: string;
         navFn: (path: string) => void;
  isDebouncing: boolean
}

export default function NavButton({ path, navFn, isDebouncing }: NavProps) {
  const { pathname } = useLocation();
  const isActive = pathname === path;
  const classes = `${css['nav-button']} ${isActive ? css['active'] : ''} ${isMobile ? css['mobile'] : ''}`;

  return (
    <button
      className={classes}
      onClick={() => navFn(path)}
      style={isDebouncing ? { pointerEvents: 'none', opacity: 0.6 } : {}}
    >
      <FontAwesomeIcon icon={icons[path as keyof IconProp]} size='2x' />
      {labels[path as keyof typeof labels]}
      {isActive && <motion.div layoutId='tab-indicator' className={css['active-tab']} />}
    </button>
  );
}
