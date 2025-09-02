import { Switch as AntSwitch } from 'antd';
import { SwitchProps } from 'antd/es/switch';
import classnames from 'classnames';
import {} from 'react';
import styles from './index.less';

const Switch = (props: SwitchProps) => {
  return (
    <span className={classnames(styles['design-config-switch'])}>
      <AntSwitch {...props} />
    </span>
  );
};

export default Switch;
