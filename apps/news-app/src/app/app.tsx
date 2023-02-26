// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { NewsMain } from '@data-snipper/news-main';
import { NewsTimeline } from '@data-snipper/news-timeline';

export function App() {
  return (
    <>
    <div className="app-layout">
        <NewsMain />
        <NewsTimeline />
      </div>
    </>
  );
}

export default App;
