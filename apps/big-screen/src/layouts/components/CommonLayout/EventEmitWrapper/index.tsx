import {
  presetRegisterEvent,
  presetUnRegisterEvent,
} from '@/utils/Assist/EventEmitter/PresetEmit';
import { useEffect } from 'react';

// 事件订阅
const EventEmitWrapper = (props: any) => {
  const { Component, ...nextProps } = props;
  useEffect(() => {
    presetRegisterEvent();
    return presetUnRegisterEvent;
  }, []);

  return <Component {...nextProps} />;
};

export default EventEmitWrapper;
