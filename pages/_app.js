import * as React from 'react';
import './default/style/default.css';
import './default/style/customer.css';
import Header from './component/layout/Header';
export default function MyApp({ Component, pageProps }) {
    return <div>
        <Header />
        <Component {...pageProps} />
    </div>
}