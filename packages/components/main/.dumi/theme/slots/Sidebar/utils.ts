interface IResponse {
  label: React.ReactNode;
  key?: React.Key | null;
  icon?: React.ReactNode;
  children?: any[];
  type?: 'group';
  order?: number;
}
const getSidebarMenus = (routes: any = []): any => {
  const menus: IResponse[] = [];
  const openKeysObj: any = {};
  const sortFun = (arrData: any[]) => {
    arrData.sort((a: any, b: any) => {
      return a.order - b.order > 0 ? 1 : -1;
    });
  };
  routes.forEach((item: any, index: number) => {
    const rootKey = 'root_' + index;
    const children = item.children || [];
    const allSecondGroup: any = {};
    children.forEach((item1: any) => {
      const { secondGroup } = item1.frontmatter;
      if (secondGroup) {
        const newMenu = allSecondGroup[secondGroup.title];
        if (!newMenu) {
          allSecondGroup[secondGroup.title] = [];
        }
        allSecondGroup[secondGroup.title].push({
          ...item1,
          key: item1.link,
          label: item1.title,
        });
      }
    });
    const cItem = children.map((item1: any) => {
      const { secondGroup = {} } = item1.frontmatter;
      const newItem: any = {
        ...item1,
        label: item1.title,
        key: item1.link,
      };
      if (secondGroup.title) {
        return null;
      }
      openKeysObj[item1.link] = [rootKey];
      return newItem;
    });
    const sItem = Object.keys(allSecondGroup).map(
      (key: string, index1: number) => {
        const item = allSecondGroup[key];
        const subKey = 'root_sub_' + index + index1;
        let order = 0;
        item.forEach((item1: any) => {
          const { secondGroup } = item1.frontmatter;
          order = secondGroup.order || order;
          openKeysObj[item1.link] = [rootKey, subKey];
        });
        sortFun(item);
        return {
          order,
          label: key,
          key: subKey,
          children: item,
        };
      },
    );
    const totalData = [...cItem, ...sItem].filter((item) => item);
    sortFun(totalData);
    if (!item.title) {
      menus.push(...totalData);
    } else {
      menus.push({
        order: item.order,
        key: rootKey,
        label: item.title,
        children: totalData,
      });
    }
  });
  sortFun(menus);
  return menus;
};

const getAllChildrenKeys = (menus: any[]) => {
  const openKeys: string[] = [];
  const getKeys = (arr: any) => {
    arr.forEach((item: any) => {
      if (item.children) {
        openKeys.push(item.key);
        getKeys(item.children);
      }
    });
  };
  getKeys(menus);
  return openKeys;
};

export { getAllChildrenKeys, getSidebarMenus };
