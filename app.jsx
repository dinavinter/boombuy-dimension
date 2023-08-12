import React from 'react';
import './ie.polyfills';

 import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./router/Router";
import Layout from "./layout/Layout";
import {GigyaProvider} from "./gigya";

function App({ Component, pageProps }) {

    return <div>
        <GigyaProvider apiKey={"3_WKO1lFJ4yMz4MtnHK0d5AqgOCaU3KdYerHvETiMWD5IZ9qv5ccQmyC7qkICVchrQ"}
                       domain={"gigya.com"}>

            <Router>
                <Layout>
                    <Routes />
                    <Component {...pageProps} />
                </Layout>
            </Router>
        </GigyaProvider>
    </div>
}
 
export default App;
