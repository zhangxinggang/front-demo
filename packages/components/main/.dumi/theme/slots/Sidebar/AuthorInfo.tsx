import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useStyles } from './style';

const AuthorInfo = ({ pathInfo }: any) => {
  const { styles } = useStyles();
  const [haveInfo, setHaveInfo] = useState(false);
  const dom = document.getElementById('author-info');
  useEffect(() => {
    if (pathInfo?.author) {
      setHaveInfo(true);
    } else {
      setHaveInfo(false);
    }
  }, [pathInfo]);

  if (!haveInfo || !dom || !pathInfo) return null;

  return createPortal(
    <div className={styles.authorInfo}>作者：{pathInfo.author}</div>,
    dom,
  );
};

export default AuthorInfo;
