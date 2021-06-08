const Scroll = require('react-scroll');

export function TopAnchor() {
  return <div name='back-to-top-anchor' />;
}

export function moveToTopAnchor() {
  Scroll.animateScroll.scrollToTop({
    duration: 1500,
    delay: 100,
    smooth: true,
    containerId: 'back-to-top-anchor',
    offset: 20,
  });
}
