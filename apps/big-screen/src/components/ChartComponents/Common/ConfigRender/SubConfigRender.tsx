import { Tabs } from 'antd';
import { useCallback, useMemo } from 'react';
import { SingleCollapse as Collapse } from '../Collapse';
import styles from '../global.less';
import ConfigList from '../Structure/ConfigList';
import { SubConfigRenderProps } from './type';
import { getForm } from './utils';

export const SubConfigRender = (props: SubConfigRenderProps) => {
  const {
    value,
    onChange: propsOnChange,
    schema,
    key,
    label,
    ...nextProps
  } = props;

  const [valueKey, valueData] = value;

  const hasShow = typeof valueData.show === 'boolean';

  const onChange = useCallback(
    (value: SuperPartial<typeof valueData>) => {
      propsOnChange({
        config: {
          options: {
            [valueKey]: value,
          },
        },
      });
    },
    [propsOnChange, valueKey],
  );

  const onKeyChange = useCallback(
    (key: string, value: any) => {
      onChange({
        [key]: value,
      });
    },
    [onChange],
  );

  const schemaRender = useMemo(() => {
    return getForm(schema, valueData, onKeyChange);
  }, [schema, valueData, onKeyChange]);

  // 有show则是Collapse
  if (hasShow) {
    return (
      <Collapse
        {...nextProps}
        child={{
          header: label,
          key,
          visibleRender: true,
          onChange: onKeyChange.bind(null, 'show'),
          value: valueData.show,
          ...nextProps.child,
        }}>
        {schemaRender}
      </Collapse>
    );
  }

  return <ConfigList {...nextProps}>{schemaRender}</ConfigList>;
};

export const SubMultipleConfigRender = (props: SubConfigRenderProps) => {
  const { value, onChange, schema } = props;

  return <Tabs type="card" className={styles['axis-config']} items={[]} />;
};
