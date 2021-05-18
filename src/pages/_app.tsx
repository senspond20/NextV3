import {AppProps} from "next/app";
import React from "react";
import '@public/styles/globals.css'
import '@public/styles/codemirror.css'



function MyApp({ Component, pageProps }: AppProps) {
    return(
        <Component {...pageProps} />
        )
}

export default MyApp
