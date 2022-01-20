import * as React from 'react';
import './default/style/default.css';
import './default/style/customer.css';
export default function MyApp({ Component, pageProps }) {
    return <div>
        <Component {...pageProps} />
    </div>
}