void ScrollViewComponentInstance::onEmitOnScrollEndDragEvent() {
  if (m_disableIntervalMomentum) {
    disableIntervalMomentum();
  }
  auto scrollViewMetrics = getScrollViewMetrics();
  if (m_eventEmitter) {
    m_eventEmitter->onScrollEndDrag(scrollViewMetrics);
  }
  updateStateWithContentOffset(scrollViewMetrics.contentOffset);
}

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//  Called from PullToRefresh

void ScrollViewComponentInstance::onPullToRefreshOffsetChange(float offsetY) {
  m_onPullToRefreshOffsetY = offsetY;
  m_internalState->onScroll();
}

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//  ScrollNodeDelegate

void ScrollViewComponentInstance::onScrollStart() {
  m_internalState->onScrollStart();
  m_allowNextScrollEvent = false;
}
