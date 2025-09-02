import TooltipAnimationConfig from '@/components/ChartComponents/Common/TooltipAnimationConfig';
import TooltipConfigCommon from '@/components/ChartComponents/Common/TooltipCommon';
import { useCallback } from 'react';
import { TBubbleScatterConfig } from '../type';

const TooltipConfig = (props: {
  value: TBubbleScatterConfig['tooltip'];
  onChange: ComponentData.ComponentConfigProps<TBubbleScatterConfig>['onChange'];
}) => {
  const { value, onChange } = props;

  const onKeyChange = useCallback(
    (value: any) => {
      onChange({
        config: {
          options: {
            tooltip: value,
          },
        },
      });
    },
    [onChange],
  );

  return (
    <TooltipConfigCommon value={value} onChange={onKeyChange}>
      <TooltipAnimationConfig
        value={value.animation}
        onChange={(value) => {
          onKeyChange({
            animation: value,
          });
        }}
      />
    </TooltipConfigCommon>
  );
};

export default TooltipConfig;
