import { useDebounceFn } from 'ahooks';
import type { ButtonProps } from 'antd';
import { Button } from 'antd';

const DebounceButton = (props: ButtonProps & { wait?: number }) => {
  const { onClick: propsOnClick, wait = 100, ...nextProps } = props;

  const { run } = useDebounceFn(
    (e) => {
      propsOnClick?.(e);
    },
    { wait: 200 },
  );

  return <Button onClick={run} {...nextProps} />;
};

export default DebounceButton;
