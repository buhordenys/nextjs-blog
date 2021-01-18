import Head from 'next/head';
import Layout, { siteTitle } from '../../layout/layout';
import Blogs from '../../components/Blogs/Blogs';
import utilStyles from '../../styles/utils.module.css';

function HomeView() {
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
          <a href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>  
      <Blogs />
    </Layout>
  );
}

export default HomeView;
