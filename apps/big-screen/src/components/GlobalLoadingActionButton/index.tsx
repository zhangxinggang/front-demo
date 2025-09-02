import { IsGlobalActionLoadingParams, useGlobalLoading } from '@/hooks';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';
import { useCallback, useMemo } from 'react';

const GlobalLoadingActonButton = (
  props: Omit<ButtonProps, 'onClick'> & {
    onClick?: IsGlobalActionLoadingParams['globalLoadingAction'];
    Component?: any;
    triggerName?: string;
    [key: string]: any;
  } & Omit<IsGlobalActionLoadingParams, 'globalLoadingAction'>,
) => {
  const {
    onClick,
    Component,
    needLoading = true,
    force = false,
    triggerName = 'onClick',
    ...nextProps
  } = props;

  const { isGlobalActionLoading } = useGlobalLoading();

  const handleClick = useCallback(async () => {
    return isGlobalActionLoading({
      globalLoadingAction: async () => {
        try {
          return onClick?.();
        } catch (err) {}
      },
      needLoading,
      force,
    });
  }, [onClick, needLoading, force]);

  const Comp = useMemo(() => {
    return Component || Button;
  }, [Component]);

  return (
    <Comp
      {...nextProps}
      {...{
        [triggerName]: handleClick,
      }}
    />
  );
};

export default GlobalLoadingActonButton;
