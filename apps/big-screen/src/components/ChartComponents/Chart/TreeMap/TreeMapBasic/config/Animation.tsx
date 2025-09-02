import AnimationConfigCommon from '@/components/ChartComponents/Common/AnimationConfig';
import { useCallback } from 'react';
import { TTreeMapBasicConfig } from '../type';

const AnimationConfig = (props: {
  value: TTreeMapBasicConfig['animation'];
  onChange: ComponentData.ComponentConfigProps<TTreeMapBasicConfig>['onChange'];
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
