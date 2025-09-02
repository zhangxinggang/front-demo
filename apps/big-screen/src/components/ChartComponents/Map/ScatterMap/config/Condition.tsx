import ConditionConfigCommon from '@/components/ChartComponents/Common/ConditionConfig';
import { useCallback } from 'react';
import { TScatterMapConfig } from '../type';

const ConditionConfig = (props: {
  value: TScatterMapConfig['condition'];
  onChange: ComponentData.ComponentConfigProps<TScatterMapConfig>['onChange'];
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
