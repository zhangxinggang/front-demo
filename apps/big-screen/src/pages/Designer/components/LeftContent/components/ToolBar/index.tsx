import classnames from 'classnames';
import {
  CallbackIcon,
  ConstantIcon,
  LensConfig,
  LocalConfigIcon,
  RedoIcon,
  RequestDefaultConfig,
  TCommonProps,
  ThemeConfig,
  UndoIcon,
} from './action.map';
import styles from './index.less';

const ToolBar = (props: TCommonProps) => {
  const { ...nextProps } = props;

  return (
    <div
      className={classnames(
        styles['page-design-left-tool-bar'],
        'border-r-8',
        'ali-cen',
        'dis-flex-column',
        'border-1',
        'normal-background',
        'pos-sti',
        'page-design-left-tool-bar',
        'zero-scrollbar',
      )}>
      <UndoIcon {...nextProps} />
      <RedoIcon {...nextProps} />
      <CallbackIcon {...nextProps} />
      <RequestDefaultConfig {...nextProps} />
      <ConstantIcon {...nextProps} />
      <LocalConfigIcon {...nextProps} />
      <LensConfig {...nextProps} />
      <ThemeConfig {...nextProps} />
    </div>
  );
};

export default ToolBar;
