// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Provider } from "react-redux";
import { newsStore } from '@data-snipper/store';
import { FeatureMain } from '@data-snipper/feature-main';
import { Routes, Route } from 'react-router-dom';
import { NewsItemDetails } from '@data-snipper/news-item-details';


export function App() {
  return (
    <Provider store={newsStore}>
        <Routes>
          <Route path="/" element={<FeatureMain />} />
          <Route path="/:id" element={<NewsItemDetails />} />
        </Routes>
    </Provider>
  );
}

export default App;
