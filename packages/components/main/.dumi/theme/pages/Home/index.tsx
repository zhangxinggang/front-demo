import { Helmet, useOutlet } from 'dumi';
import { memo, type FC } from 'react';
import { Flexbox } from 'react-layout-kit';

import Features from 'dumi/theme/slots/Features';
import Footer from 'dumi/theme/slots/Footer';
import Header from 'dumi/theme/slots/Header';
import Hero from 'dumi/theme/slots/Hero';

import {
  showHeroPageCustomContent,
  siteTitleSel,
  useSiteStore,
} from '../../store';
import { useStyles } from './styles';

const Home: FC = memo(() => {
  const siteTitle = useSiteStore(siteTitleSel);
  const outlet = useOutlet();
  const showCustomContent = useSiteStore(showHeroPageCustomContent);
  const { styles } = useStyles();

  return (
    <div className={styles.home}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Flexbox
        align={'center'}
        gap={60}
        style={{
          overflowY: 'auto',
          height: 'calc(100% - 66px)',
          paddingBottom: 20,
        }}>
        <Header />
        <Hero />
        <Features />
        {showCustomContent && <div className={styles.container}>{outlet}</div>}
        <Footer />
      </Flexbox>
    </div>
  );
});

export default Home;
