import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export default function Home({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={"text-blue-500 font-bold"}>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <div className="max-w-lg mx-auto p-8">
        <details
          className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
          open
        >
          <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
            {" "}
            Why do they call it Ovaltine?
          </summary>
          <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>
              The mug is round. The jar is round. They should call it Roundtine.
            </p>
          </div>
        </details>
      </div>
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
      <article
        className={
          "prose prose-slate prose-headings:underline prose-a:text-blue-600 dark:prose-invert lg:prose-xl"
        }
      >
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </Layout>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
