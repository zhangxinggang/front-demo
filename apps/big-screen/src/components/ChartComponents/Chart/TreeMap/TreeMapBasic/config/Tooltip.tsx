import TooltipConfigCommon from '@/components/ChartComponents/Common/TooltipCommon';
import { useCallback } from 'react';
import { TTreeMapBasicConfig } from '../type';

const TooltipConfig = (props: {
  value: TTreeMapBasicConfig['tooltip'];
  onChange: ComponentData.ComponentConfigProps<TTreeMapBasicConfig>['onChange'];
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

  return <TooltipConfigCommon value={value} onChange={onKeyChange} />;
};

export default TooltipConfig;
