import Link from "next/link";
import Head from 'next/head';

export default function FindMe() {
    return (
        <div>
            <Head>
                <title>Find Me</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to Home </Link>
            </h2>
        </div>
    )
  }