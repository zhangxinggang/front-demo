import { useIdPathMap } from '@/hooks';
import { ArrowDownOutlined } from '@ant-design/icons';
import { useCallback } from 'react';
import { CommonActionType } from './type';
import useChildren from './useChildren';

const NextOrderAction = (props: CommonActionType) => {
  const { value, setComponent, select, onClick, childrenType, disabled } =
    props;
  const { id } = value;

  const handleClick = useCallback(
    (e: any) => {
      e.stopPropagation();
      const idPathMap = useIdPathMap();

      const updateComponent = select.reduce<
        ComponentMethod.SetComponentMethodParamsData[]
      >((acc, cur) => {
        const target = idPathMap[cur];
        if (target) {
          const { path, id } = target;
          acc.push({
            path,
            id,
            action: 'move',
            index: 'next',
            value: {},
          });
        }
        return acc;
      }, []);
      setComponent(updateComponent);
      onClick();
    },
    [id, select, onClick],
  );

  const children = useChildren(childrenType, {
    title: '下一个',
    icon: <ArrowDownOutlined />,
    key: 'next_order',
    onClick: handleClick,
    disabled,
  });

  return children;
};

export default NextOrderAction;
