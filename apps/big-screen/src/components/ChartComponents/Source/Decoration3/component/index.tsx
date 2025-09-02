import ColorSelect from '@/components/ColorSelect';
import InternalDecoration from '@/components/Decoration/Decoration3';
import classnames from 'classnames';
import { merge, uniqueId } from 'lodash';
import { useMemo, useRef } from 'react';
import { CHART_ID } from '../id';
import { TDecoration3Config } from '../type';
import styles from './index.less';

const { getRgbaString } = ColorSelect;

const Decoration = (
  props: ComponentData.CommonComponentProps<TDecoration3Config>,
) => {
  const { className, style, value, children, wrapper: Wrapper } = props;

  const {
    config: {
      options,
      style: { border },
    },
  } = value;
  const { color } = options;

  const chartId = useRef<string>(uniqueId(CHART_ID));

  const componentClassName = useMemo(() => {
    return classnames(
      className,
      'dis-flex',
      styles['component-source-decoration-3'],
    );
  }, [className]);

  return (
    <div
      className={componentClassName}
      style={merge(
        {
          width: '100%',
          height: '100%',
        },
        style,
      )}
      id={chartId.current}>
      <Wrapper border={border}>
        {children}
        <InternalDecoration
          className={'w-100 h-100'}
          color={color.map((item) => getRgbaString(item))}></InternalDecoration>
      </Wrapper>
    </div>
  );
};

const WrapperDecoration: typeof Decoration & {
  id: ComponentData.TComponentSelfType;
} = Decoration as any;

WrapperDecoration.id = CHART_ID;

export default WrapperDecoration;
