import { useDebounceFn, useSize, useUpdateEffect } from 'ahooks';
import type { ECharts } from 'echarts';
import { useEffect, useRef } from 'react';
import EventEmitter from '../EventEmitter';

export function useChartComponentResize(instance: ECharts) {
  const size = useSize(instance?.getDom());
  const domSizeChanged = useRef(false);

  const { run } = useDebounceFn(() => {
    instance && instance.resize();
  });

  useUpdateEffect(() => {
    if (!domSizeChanged.current) {
      domSizeChanged.current = true;
      return;
    }
    run();
  }, [size]);

  useEffect(() => {
    instance && EventEmitter.push(instance);
    return () => {
      return EventEmitter.pop(instance);
    };
  }, [instance]);
}
