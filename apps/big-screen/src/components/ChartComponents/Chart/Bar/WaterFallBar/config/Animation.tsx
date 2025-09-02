import AnimationConfigCommon from '@/components/ChartComponents/Common/AnimationConfig';
import { useCallback } from 'react';
import { TWaterFallBarConfig } from '../type';

const AnimationConfig = (props: {
  value: TWaterFallBarConfig['animation'];
  onChange: ComponentData.ComponentConfigProps<TWaterFallBarConfig>['onChange'];
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
