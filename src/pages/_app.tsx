import {AppProps} from "next/app";
import React from "react";
// import '@public/styles/globals.css'
import '@public/styles/codemirror.css'
import { BrowserRouter } from 'react-router-dom'
// @ts-ignore
function SafeHydrate({ children }) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <SafeHydrate>
            <Component {...pageProps} />
        </SafeHydrate>
        )
}
MyApp.getInitialProps = async (context: { Component: any; ctx: any; }) =>{
    const { Component, ctx } = context;
    const { store, isServer } = ctx; //
    // restore = store;
    console.log((store))
    console.log(isServer)
    const pageProps = (await Component.getInitialProps?.(ctx)) || {};

    return {pageProps}
}

export default MyApp
