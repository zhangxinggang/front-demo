import { usePrimaryColor } from '@/hooks';
import { Tooltip as AntTooltip } from 'antd';
import type { TooltipProps } from 'antd/es/tooltip';
import {} from 'react';

const Tooltip = (props: TooltipProps) => {
  const primaryColor = usePrimaryColor();

  return <AntTooltip color={primaryColor} {...props} />;
};

export default Tooltip;
