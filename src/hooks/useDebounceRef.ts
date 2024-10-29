import { useRef } from "react";

export default function useDebounceRef() {
  const isThrottling = useRef(false);

  const throttleRefFn = (callback: () => void, timeout: number) => {
    if (!isThrottling.current) {
      isThrottling.current = true;
      callback();

      setTimeout(() => {
        isThrottling.current = false;
      }, timeout);
    }
  };

  return { isThrottling: isThrottling.current, throttleRefFn }
}
