import { get } from 'lodash';
import { mergeWithoutArray } from '../../tool';
import { ComponentInputButtonWidthChange } from './ComponentInputButtonWidthChange';
import { ConditionChange } from './ConditionChange';
import { ScreenComponentConfigChangeTooltip } from './ScreenComponentConfigChangeTooltip';
import { ScreenThemeTypeChange } from './ScreenThemeTypeChange';

export * from './ComponentTransformOriginChange';

const BreakingChange: (
  screenData: ComponentData.TScreenData,
  version: string,
) => ComponentData.TScreenData = (screenData, version) => {
  const { components, config, ...nextScreenData } = screenData;

  // * breaking change 1.8
  let newVersionComponentList: ComponentData.TComponentData[] = ConditionChange(
    components,
    version,
  );

  // * breaking change 1.14
  const newTheme = ScreenThemeTypeChange(get(config, 'attr.theme'));

  // * breaking change 1.17
  newVersionComponentList = ComponentInputButtonWidthChange(
    components,
    version,
  );

  // * breaking change 1.21
  const configTooltipConfig1P21 = ScreenComponentConfigChangeTooltip(
    screenData,
    version,
  );

  return {
    ...nextScreenData,
    ...configTooltipConfig1P21,
    config: mergeWithoutArray({}, config, {
      attr: {
        theme: newTheme,
      },
    }),
    components: newVersionComponentList,
  };
};

export default BreakingChange;
