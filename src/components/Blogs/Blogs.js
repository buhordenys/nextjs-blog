import Link from 'next/link';
import PropTypes from 'prop-types';
import Layout from '../../layout/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../Date/date';
import { getSortedPostsData } from '../../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

function Blogs({ allPostsData }) {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

Blogs.propTypes = {
  allPostsData: PropTypes.arrayOf(PropTypes.object)
};

Blogs.defaultProps = {
  allPostsData: []
};

export default Blogs;
