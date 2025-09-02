import TooltipAnimationConfig from '@/components/ChartComponents/Common/TooltipAnimationConfig';
import TooltipConfigCommon from '@/components/ChartComponents/Common/TooltipCommon';
import { useCallback } from 'react';
import { TLineBasicConfig } from '../type';

const TooltipConfig = (props: {
  value: TLineBasicConfig['tooltip'];
  onChange: ComponentData.ComponentConfigProps<TLineBasicConfig>['onChange'];
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
