import ConditionConfigCommon from '@/components/ChartComponents/Common/ConditionConfig';
import { useCallback } from 'react';
import { TStackBarConfig } from '../type';

const ConditionConfig = (props: {
  value: TStackBarConfig['condition'];
  onChange: ComponentData.ComponentConfigProps<TStackBarConfig>['onChange'];
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
