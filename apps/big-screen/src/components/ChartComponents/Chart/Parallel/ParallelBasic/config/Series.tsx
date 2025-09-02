import LineStyleGroupConfig from '@/components/ChartComponents/Common/LineStyleGroupConfig';
import MultipleSeriesConfig from '@/components/ChartComponents/Common/MultipleSeriesConfig';
import ConfigList from '@/components/ChartComponents/Common/Structure/ConfigList';
import FullForm from '@/components/ChartComponents/Common/Structure/FullForm';
import GlobalConfig from '@/utils/Assist/GlobalConfig';
import ThemeUtil from '@/utils/Assist/Theme';
import { Switch } from 'antd';
import { useCallback, useMemo } from 'react';
import { DEFAULT_LINE_STYLE } from '../defaultConfig';
import { TParallelBasicConfig } from '../type';

const { Item } = ConfigList;

const SeriesConfig = (props: {
  value: TParallelBasicConfig['series'];
  onChange: ComponentData.ComponentConfigProps<TParallelBasicConfig>['onChange'];
}) => {
  const { value, onChange } = props;
  const { smooth, lineStyle } = value;

  const onKeyChange = useCallback(
    (key: keyof TParallelBasicConfig['series'], value: any) => {
      onChange({
        config: {
          options: {
            series: {
              [key]: value,
            },
          },
        },
      });
    },
    [onChange],
  );

  const smoothConfig = useMemo(() => {
    return (
      <Item label="平滑曲线">
        <FullForm>
          <Switch
            checked={smooth}
            onChange={onKeyChange.bind(null, 'smooth')}
          />
        </FullForm>
      </Item>
    );
  }, [smooth, onKeyChange]);

  const itemStyleConfig = useMemo(() => {
    const counter = lineStyle.length;
    return (
      <MultipleSeriesConfig
        counter={counter}
        renderContent={(index) => {
          const targetLineStyle = lineStyle[index];
          return (
            <>
              <LineStyleGroupConfig
                value={targetLineStyle}
                onChange={(value) => {
                  const newColor = [...lineStyle];
                  newColor.splice(index, 1, {
                    ...targetLineStyle,
                    ...value,
                  });
                  onChange({
                    config: {
                      options: {
                        series: {
                          lineStyle: newColor,
                        },
                      },
                    },
                  });
                }}
              />
            </>
          );
        }}
        onAdd={() => {
          onKeyChange('lineStyle', [
            ...lineStyle,
            {
              ...DEFAULT_LINE_STYLE,
              color: ThemeUtil.generateNextColor4CurrentTheme(counter),
            } as any,
          ]);
        }}
        onRemove={(index) => {
          const newLineStyle = [...lineStyle];
          newLineStyle.splice(index, 1);

          onKeyChange('lineStyle', newLineStyle);
        }}
        max={GlobalConfig.getChartSeriesCounter('PARALLEL_BASIC')}
      />
    );
  }, [lineStyle, onKeyChange]);

  return (
    <ConfigList>
      {smoothConfig}
      {itemStyleConfig}
    </ConfigList>
  );
};

export default SeriesConfig;
