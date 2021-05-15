import {AppProps} from "next/app";
import React from "react";

import 'codemirror/lib/codemirror.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
