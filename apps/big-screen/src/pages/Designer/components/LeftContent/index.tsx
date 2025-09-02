import FocusWrapper from '@/components/FocusWrapper';
import {
  EVENT_NAME_MAP,
  GLOBAL_EVENT_EMITTER,
} from '@/utils/Assist/EventEmitter';
import { useGetState } from 'ahooks';
import classnames from 'classnames';
import { useCallback, useEffect, useRef } from 'react';
import ComponentSearchList from './components/ComponentList/SearchList';
import ComponentTypeList from './components/ComponentTypeList';
import ComponentTypeListStyles from './components/ComponentTypeList/index.less';
import LayerManage from './components/LayerManage';
import { LayerManageRef } from './components/LayerManage/type';
import ToolBar from './components/ToolBar';
import styles from './index.less';

const LeftContent = () => {
  const [layerVisible, setLayerVisible, getLayerVisible] =
    useGetState<boolean>(false);

  const layerRef = useRef<LayerManageRef>(null);

  const handleClick = useCallback((type) => {
    // TODO
  }, []);

  const handleClose = useCallback(() => {
    setLayerVisible(false);
    GLOBAL_EVENT_EMITTER.emit(
      EVENT_NAME_MAP.LAYER_VISIBLE_CHANGE,
      false,
      'LeftContent',
    );
  }, []);

  useEffect(() => {
    const onLayerChange = (visible: boolean, target: string) => {
      if (target === 'LeftContent') return;
      visible ? layerRef.current?.open() : layerRef.current?.close();
      setLayerVisible(visible);
    };
    GLOBAL_EVENT_EMITTER.addListener(
      EVENT_NAME_MAP.LAYER_VISIBLE_CHANGE,
      onLayerChange,
    );
    return () => {
      GLOBAL_EVENT_EMITTER.removeListener(
        EVENT_NAME_MAP.LAYER_VISIBLE_CHANGE,
        onLayerChange,
      );
    };
  }, []);

  return (
    <FocusWrapper className={classnames(styles['design-page-left'], 'pos-re')}>
      <div
        className={classnames(
          'p-lr-24',
          'dis-flex',
          'w-100',
          'pos-re',
          styles['design-page-left-content'],
        )}
        id="design-page-left-content">
        <ToolBar onClick={handleClick} />
        <LayerManage ref={layerRef} onClose={handleClose} />
        <ComponentTypeList
          menuClass={
            layerVisible
              ? ComponentTypeListStyles[
                  'page-design-left-component-list-content-border'
                ]
              : ''
          }
        />
        <ComponentSearchList />
      </div>
    </FocusWrapper>
  );
};

export default LeftContent;
