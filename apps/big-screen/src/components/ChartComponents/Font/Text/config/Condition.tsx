import ConditionConfigCommon from '@/components/ChartComponents/Common/ConditionConfig';
import { useCallback } from 'react';
import { TTextConfig } from '../type';

const ConditionConfig = (props: {
  value: TTextConfig['condition'];
  onChange: ComponentData.ComponentConfigProps<TTextConfig>['onChange'];
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
