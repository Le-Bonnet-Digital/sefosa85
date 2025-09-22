export interface ScrollLocation {
  pathname: string;
  hash?: string | null;
  search?: string;
}

export type ScrollInvoker = (options: ScrollToOptions) => void;

export function shouldScrollToTop(
  previous: ScrollLocation | null,
  next: ScrollLocation
): boolean {
  if (!previous) {
    return false;
  }

  const prevHash = previous.hash ?? '';
  const nextHash = next.hash ?? '';
  const prevSearch = previous.search ?? '';
  const nextSearch = next.search ?? '';

  const pathnameChanged = previous.pathname !== next.pathname;
  const searchChanged = prevSearch !== nextSearch;
  const hashRemoved = prevHash.length > 0 && nextHash.length === 0;

  if (!pathnameChanged && !searchChanged && !hashRemoved) {
    return false;
  }

  if (nextHash.length > 0) {
    return false;
  }

  return pathnameChanged || searchChanged || hashRemoved;
}

export function scrollToTop(scrollFn?: ScrollInvoker): boolean {
  if (typeof scrollFn === 'function') {
    scrollFn({ top: 0, left: 0, behavior: 'smooth' });
    return true;
  }

  if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return true;
  }

  return false;
}
