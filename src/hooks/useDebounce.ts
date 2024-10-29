import { useState } from 'react';
export interface DebounceProps {
     style: React.CSSProperties;
  disabled: boolean;
}

export default function useDebounce() {
  const [isDebouncing, setIsDebouncing] = useState(false);

  const throttleFn = (callback: () => void, timeout: number) => {
    if (!isDebouncing) {
      setIsDebouncing(true);
      callback();

      setTimeout(() => {
        setIsDebouncing(false);
      }, timeout);
    }
  }

  const debounceProps: DebounceProps = {
       style: isDebouncing ? { pointerEvents: 'none', opacity: 0.6 } : {},
    disabled: isDebouncing,
  };

  return { debounceProps, throttleFn }
}
