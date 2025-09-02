import DebounceButton from '@/components/DebounceButton';
import Tooltip from '@/components/Tooltip';
import {
  EVENT_NAME_MAP,
  GLOBAL_EVENT_EMITTER,
} from '@/utils/Assist/EventEmitter';
import { BlockOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';

// 图层显示隐藏
const LayerShowIcon = (props: {}) => {
  const [visible, setVisible] = useState(false);

  const handleOpen = useCallback(() => {
    GLOBAL_EVENT_EMITTER.emit(
      EVENT_NAME_MAP.LAYER_VISIBLE_CHANGE,
      !visible,
      'LayerShowIcon',
    );
    setVisible(!visible);
  }, [visible]);

  const onLayerChange = useCallback((visible, target) => {
    if (target !== 'LayerShowIcon') setVisible(visible);
  }, []);

  useEffect(() => {
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
  }, [onLayerChange]);

  return (
    <Tooltip title="图层">
      <DebounceButton
        title="图层"
        icon={<BlockOutlined />}
        type={visible ? 'primary' : 'default'}
        onClick={handleOpen}></DebounceButton>
    </Tooltip>
  );
};

export default LayerShowIcon;
