import GridConfigCommon from '@/components/ChartComponents/Common/GridConfig';
import { useCallback } from 'react';
import { TRadialStackLineConfig } from '../type';

const GridConfig = (props: {
  value: TRadialStackLineConfig['grid'];
  onChange: ComponentData.ComponentConfigProps<TRadialStackLineConfig>['onChange'];
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
