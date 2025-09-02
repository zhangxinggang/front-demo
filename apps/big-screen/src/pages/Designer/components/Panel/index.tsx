import classnames from 'classnames';
import { CSSProperties } from 'react';
import Painter from './components/Painter';
import PanelWrapper from './components/PanelWrapper';
import ReactSelecto from './components/ReactSelecto';
import ToolBar from './components/ToolBar';
import styles from './index.less';

const Panel = (props: { style?: CSSProperties; className?: string }) => {
  const { style, className } = props;

  return (
    <div
      className={classnames(
        styles['design-panel-content'],
        'dis-flex-column',
        'zero-scrollbar',
        className,
      )}
      style={{
        ...style,
      }}>
      <PanelWrapper>
        <ReactSelecto />
        <Painter />
      </PanelWrapper>
      <ToolBar />
    </div>
  );
};

export default Panel;
