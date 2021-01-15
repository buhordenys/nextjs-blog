import PropTypes from 'prop-types';
import { withTranslation } from '../src/i18n/i18n';
import ErrorView from '../src/pages/Error/ErrorView';

function Error({ statusCode }) {
  return (
    <ErrorView statusCode={statusCode} />
  );
}

Error.getInitialProps = async (res, err) => (
  {
    namespacesRequired: ['common', 'error'],
    statusCode: res?.statusCode || err?.statusCode || 404
  }
);

Error.propTypes = {
  statusCode: PropTypes.number.isRequired
};

export default withTranslation('error')(Error);
