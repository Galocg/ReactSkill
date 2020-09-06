(…)
import { HelmetProvider } from ‘react-helmet-async‘;


(…)



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById(‘root‘),
);



serviceWorker.unregister();