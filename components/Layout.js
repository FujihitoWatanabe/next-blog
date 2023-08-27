import Head from "next/head";
import { Children } from "react";
import styles from "./layout.module.css"
import utilsStyles from "../styles/utils.module.css"
import Link from "next/link";
import Image from "next/image"

const name="Shin Code";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image src="/images/profile.png" className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`} width={50} height={50} alt={siteTitle} />
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ):(
                    <>
                        <Image src="/images/profile.png" className={utilsStyles.borderCircle} width={40} height={40} alt={siteTitle} />
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">← ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;