import AnimationConfigCommon from '@/components/ChartComponents/Common/AnimationConfig';
import { useCallback } from 'react';
import { TPictorialBarBasicConfig } from '../type';

const AnimationConfig = (props: {
  value: TPictorialBarBasicConfig['animation'];
  onChange: ComponentData.ComponentConfigProps<TPictorialBarBasicConfig>['onChange'];
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
