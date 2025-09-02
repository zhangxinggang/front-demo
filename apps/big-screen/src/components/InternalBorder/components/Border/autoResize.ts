import { useDebounceEffect, useSize } from 'ahooks';
import { useCallback, useImperativeHandle, useRef, useState } from 'react';

export default function useAutoResize(ref: any) {
  const [state, setState] = useState({ width: 0, height: 0 });

  const domRef = useRef(null);

  const { width = 0, height = 0 } = useSize(domRef.current) || {};

  const setWH = useCallback(() => {
    const { clientWidth, clientHeight } = domRef.current || {
      clientWidth: 0,
      clientHeight: 0,
    };
    setState({ width: clientWidth, height: clientHeight });
  }, []);

  useImperativeHandle(ref, () => ({ setWH }), []);

  useDebounceEffect(() => {
    setState({ width, height });
  }, [width, height]);

  return { ...state, domRef, setWH };
}
