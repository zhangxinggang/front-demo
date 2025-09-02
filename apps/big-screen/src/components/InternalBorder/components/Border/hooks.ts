import { DEFAULT_THEME_COLOR_LIST } from '@/components/ChartComponents/Common/Constants/defaultConfig';
import { getRgbaString } from '@/utils/Assist/Theme';
import classnames from 'classnames';
import { merge } from 'lodash';
import { CSSProperties, useMemo } from 'react';
import commonStyles from './index.less';
import { CommonBorderProps } from './type';

// @ts-ignore
export { default as useAutoResize } from './autoResize';

export function useBorderWrapper<T extends object = {}>(
  props: CommonBorderProps & T,
  key: string,
  options: Partial<{
    colorType: 'item' | 'list';
  }>,
) {
  const { className, style, width, padding, ...nextProps } = props;
  const { colorType = 'item' } = options;

  const newClassName = useMemo(() => {
    return classnames(key, commonStyles['internal-border-common'], className);
  }, [className, key]);

  const originColor = useMemo(() => {
    const colorList = DEFAULT_THEME_COLOR_LIST();
    if (colorType === 'item') return colorList[0];
    return colorList;
  }, [colorType]);

  const color = useMemo(() => {
    return Array.isArray(originColor)
      ? originColor.map((item) => getRgbaString(item))
      : getRgbaString(originColor);
  }, [originColor]);

  const newStyle: CSSProperties = useMemo(() => {
    return merge(
      {
        [`--${key}-width`]: width + 'px',
        padding: padding.map((item) => `${item}px`).join(' '),
        ...(Array.isArray(color)
          ? color.reduce((acc, cur, index) => {
              (acc as any)[`--${key}-color-${index}`] = cur;
              return acc;
            }, {})
          : {
              [`--${key}-color`]: color,
            }),
      },
      style,
    );
  }, [style, key, width, color]);

  return {
    origin: {
      props,
      options,
      color: originColor,
      stringColor: Array.isArray(color) ? color : [color],
    },
    className: newClassName,
    style: newStyle,
    ...nextProps,
  };
}
