import { Checkbox as AntCheckbox } from 'antd';
import { CheckboxProps } from 'antd/es/checkbox';
import classnames from 'classnames';
import {} from 'react';
import styles from './index.less';

const Switch = (props: CheckboxProps) => {
  return (
    <AntCheckbox
      {...props}
      className={classnames(styles['design-config-checkbox'], props.className)}
    />
  );
};

export default Switch;
