import '../src/components/pages/App/sass/global.css';
import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.func.isRequired,
};

export default App;
