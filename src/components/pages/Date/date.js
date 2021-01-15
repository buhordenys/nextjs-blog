import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>;
}

Date.propTypes = {
  dateString: PropTypes.string
};

Date.defaultProps = {
  dateString: ''
};

export default Date;
