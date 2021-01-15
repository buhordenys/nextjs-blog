import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Date from '../src/pages/Date/date';
import Layout, { siteTitle } from '../src/layout/layout';
import utilStyles from '../src/styles/utils.module.css';
import { withTranslation } from '../src/i18n/i18n';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello, I&apos;m Den.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
          .)
        </p>
      </section>

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

Home.propTypes = {
  allPostsData: PropTypes.arrayOf(PropTypes.object)
};

Home.defaultProps = {
  allPostsData: []
};

Home.getInitialProps = async () => (
  { namespacesRequired: ['common', 'home'] }
);

export default withTranslation('home')(Home);
