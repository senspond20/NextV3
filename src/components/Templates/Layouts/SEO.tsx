import Head from 'next/head'
import React from "react";

type Props ={
    title? : string
    description? : string
}

const SEO = (props : Props)=>(
    <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description"  content={props.description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
)


export default SEO;