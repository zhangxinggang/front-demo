import ConditionConfigCommon from '@/components/ChartComponents/Common/ConditionConfig';
import { useCallback } from 'react';
import { TRadialStackLineConfig } from '../type';

const ConditionConfig = (props: {
  value: TRadialStackLineConfig['condition'];
  onChange: ComponentData.ComponentConfigProps<TRadialStackLineConfig>['onChange'];
}) => {
  const { value, onChange } = props;

  const onKeyChange = useCallback(
    (value: any) => {
      onChange({
        config: {
          options: {
            condition: value,
          },
        },
      });
    },
    [onChange],
  );

  return <ConditionConfigCommon value={value} onChange={onKeyChange} />;
};

export default ConditionConfig;
