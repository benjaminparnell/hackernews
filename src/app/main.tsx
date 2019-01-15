import * as React from 'react';
import { render } from 'react-dom';
import Loading from './components/Loading';

const App = React.lazy(() => import('./app'));

render(
  <React.Suspense fallback={<Loading />}>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
