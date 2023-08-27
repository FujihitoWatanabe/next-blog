import Link from "next/link";
import Head from "next/head";

export default function firstPost () {
    return (
        <div>
            <Head>
                <title>最初の投稿</title>
            </Head>
            <h1>最初の投稿</h1>
            <Link href="/">ホームへ戻る</Link>
        </div>
    );
}