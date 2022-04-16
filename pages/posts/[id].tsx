import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyle from "../../styles/utils.module.css";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export default function Post({
  postData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyle.headingXl}>
        {postData.title} :3 {":< :V"}
      </h1>
      <div className={utilStyle.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const postData = await getPostData(context.params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};
