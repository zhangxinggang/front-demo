import { usePanelFocus } from '@/hooks';
import CopyAndPasteUtil from '@/utils/Assist/CopyAndPaste';
import { Options } from 'ahooks/es/useFocusWithin';
import { CSSProperties, ReactNode, useEffect, useRef } from 'react';

// * 还有一个地方在 ComponentSelect 那边

const FocusWrapper = (props: {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  options?: Options;
  force?: boolean;
  [key: string]: any;
}) => {
  const { options = {}, force, ...nextProps } = props;

  const ref = useRef<HTMLDivElement>(null);

  usePanelFocus(ref, options, typeof force === 'undefined');

  useEffect(() => {
    if (typeof force === 'boolean') {
      if (force) {
        CopyAndPasteUtil.forceFocus();
      } else {
        CopyAndPasteUtil.forceUnFocus();
      }
    }
  }, [force]);

  return <div {...nextProps} ref={ref} />;
};

export default FocusWrapper;
