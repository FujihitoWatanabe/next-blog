import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout, { siteTitle } from '@/components/Layout'

import Link from 'next/link/'
import utilStyle from "../styles/utils.module.css"
import {getPostsData} from "../lib/post"

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  }
}

//SSRの場合
// export async function getServerSideProps(context) {

//  return {
//   props: {
//     // コンポーネントに渡すためのprops
//   }
//  }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
          <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
          Next.jsの練習用に作成しました。Next.jsで基本を抑えつつブログライクなデザインを表現してみました。
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`} >
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <Image src={`${thumbnail}`} className={styles.thumbnailImage} alt={`${title}`} width={580} />
            </Link>
            <Link href={`/posts/${id}`} legacyBehavior>
              <a className={utilStyle.boldText}>{`${title}`}</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{`${date}`}</small>
          </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
