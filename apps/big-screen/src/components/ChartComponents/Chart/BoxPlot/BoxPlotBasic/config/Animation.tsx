import AnimationConfigCommon from '@/components/ChartComponents/Common/AnimationConfig';
import { useCallback } from 'react';
import { TBoxPlotBasicConfig } from '../type';

const AnimationConfig = (props: {
  value: TBoxPlotBasicConfig['animation'];
  onChange: ComponentData.ComponentConfigProps<TBoxPlotBasicConfig>['onChange'];
}) => {
  const { value, onChange } = props;

  const onKeyChange = useCallback(
    (value: any) => {
      onChange({
        config: {
          options: {
            animation: value,
          },
        },
      });
    },
    [onChange],
  );

  return <AnimationConfigCommon value={value} onChange={onKeyChange} />;
};

export default AnimationConfig;
