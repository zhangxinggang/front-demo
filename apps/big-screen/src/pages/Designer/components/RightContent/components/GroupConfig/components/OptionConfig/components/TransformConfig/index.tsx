import ConfigList from '@/components/ChartComponents/Common/Structure/ConfigList';
import FullForm from '@/components/ChartComponents/Common/Structure/FullForm';
import { Switch } from 'antd';
import { useCallback } from 'react';
import ChildTransformConfig from './ChildTransformConfig';
import PerspectiveConfig from './PerspectiveConfig';

const { Item } = ConfigList;

const TransformConfig = (props: {
  onChange: ComponentData.ComponentConfigProps['onChange'];
  value: ComponentData.TGroupComponentTransformConfig;
  childComponents: ComponentData.TComponentData[];
}) => {
  const { onChange: propsOnChange, value, childComponents } = props;
  const { show, perspectiveOrigin, perspective } = value;

  const onChange = useCallback(
    (value: any) => {
      propsOnChange({
        config: {
          options: {
            transform: {
              ...value,
            },
          },
        },
      });
    },
    [propsOnChange],
  );

  return (
    <>
      <Item label="应用3d变换">
        <FullForm>
          <Switch
            checked={show}
            onChange={(value) =>
              onChange({
                show: value,
              })
            }
          />
        </FullForm>
      </Item>
      {show && (
        <>
          <ChildTransformConfig components={childComponents} />
          <PerspectiveConfig
            value={{
              perspectiveOrigin,
              perspective,
            }}
            onChange={onChange}
          />
        </>
      )}
    </>
  );
};

export default TransformConfig;
