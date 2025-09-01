import { Drawer } from 'antd';
import { useState } from 'react';
import { Center } from 'react-layout-kit';

import Sidebar from '../../slots/Slidebar'
import { useStyles } from './style';

const Burger = () => {
  const [opened, setOpened] = useState(false);
  const { styles, cx } = useStyles();

  return (
    <Center
      className={styles.container}
      onClick={() => {
        setOpened(!opened);
      }}
    >
      <div className={cx(styles.icon, opened ? styles.active : '')} />

      <Drawer
        open={opened}
        placement={'left'}
        closeIcon={null}
        rootClassName={styles.drawerRoot}
        className={styles.drawer}
        width={'100vw'}
        headerStyle={{ display: 'none' }}
        bodyStyle={{ padding: 0 }}
      >
        <div style={{ height: 24 }} className={styles.rect} />
        <Sidebar />
        <div style={{ flex: 1 }} className={styles.rect} />
      </Drawer>
    </Center>
  );
};

export default Burger;
