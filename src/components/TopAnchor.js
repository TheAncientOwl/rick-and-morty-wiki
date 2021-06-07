export function TopAnchor() {
  return <div id='back-to-top-anchor' />;
}

export function moveToTopAnchor() {
  const anchor = document.querySelector('#back-to-top-anchor');
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
