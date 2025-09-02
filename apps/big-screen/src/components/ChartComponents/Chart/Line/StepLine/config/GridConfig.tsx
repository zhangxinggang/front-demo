import GridConfigCommon from '@/components/ChartComponents/Common/GridConfig';
import { useCallback } from 'react';
import { TStepLineConfig } from '../type';

const GridConfig = (props: {
  value: TStepLineConfig['grid'];
  onChange: ComponentData.ComponentConfigProps<TStepLineConfig>['onChange'];
}) => {
  const { value, onChange } = props;

  const onKeyChange = useCallback(
    (value: any) => {
      onChange({
        config: {
          options: {
            grid: value,
          },
        },
      });
    },
    [onChange],
  );

  return <GridConfigCommon value={value} onChange={onKeyChange} />;
};

export default GridConfig;
