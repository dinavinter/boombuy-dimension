import React from "react";
import Link from 'next/link'
import Head from "next/head"

export default function Post( ) {
    return (
        <main>
            <Head>
                <title>lite</title>
            </Head>

            <h1>lite</h1>


            <Link href="/">
                <a>Go back to home</a>
            </Link>
        </main>
    )
}
