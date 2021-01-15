import PropTypes from 'prop-types';
import '../src/pages/App/sass/global.css';
import { appWithTranslation } from '../src/i18n/i18n';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]).isRequired
};

export default appWithTranslation(App);
