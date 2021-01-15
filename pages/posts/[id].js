import Head from 'next/head';
import PropTypes from 'prop-types';
import utilStyle from '../../src/components/styles/utils.module.css';
import Layout from '../../src/components/layout/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../src/components/pages/Date/date';

function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyle.headingXl}>{postData.title}</h1>
        <div className={utilStyle.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}

Post.propTypes = {
  postData: PropTypes.objectOf(PropTypes.string)
};

Post.defaultProps = {
  postData: {}
};

export default Post;
