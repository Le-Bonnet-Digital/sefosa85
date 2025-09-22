import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import type { ScrollLocation } from '../../utils/scroll';
import { shouldScrollToTop, scrollToTop } from '../../utils/scroll';

const ScrollToTop = () => {
  const location = useLocation();
  const previousLocationRef = useRef<ScrollLocation | null>(null);

  useEffect(() => {
    const current: ScrollLocation = {
      pathname: location.pathname,
      hash: location.hash,
      search: location.search
    };

    if (shouldScrollToTop(previousLocationRef.current, current)) {
      scrollToTop();
    }

    previousLocationRef.current = current;
  }, [location.pathname, location.hash, location.search]);

  return null;
};

export default ScrollToTop;
