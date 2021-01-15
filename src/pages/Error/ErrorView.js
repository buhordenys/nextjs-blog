import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n/i18n';
import Layout from '../../layout/layout';

import { NOT_FOUND } from '../../constants/httpStatusCodes';
import styles from './sass/Error.module.scss';

const ErrorView = ({ statusCode, t }) => {
  return (
    <Layout>
      <div className={styles.errorBody}>
        <>
          {t(statusCode === NOT_FOUND ? 'pageNotFound' : 'internalServerError')}
        </>
      </div>
    </Layout>
  );
};

ErrorView.propTypes = {
  t: PropTypes.func.isRequired,
  statusCode: PropTypes.number.isRequired
};

export default withTranslation('error')(ErrorView);
