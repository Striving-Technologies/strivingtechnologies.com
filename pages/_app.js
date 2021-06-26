import 'antd/dist/antd.css';
import '../static/css/nprogress.css';
import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../components/tabs/tab.module.css';
import '../static/css/antdoverwrite.scss';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';

const showProgressBar = (delay) => {
  const timer = setTimeout(() => NProgress.start(), delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

const stopProgress = (timer) => {
  clearTimeout(timer);
  NProgress.done();
};

Router.events.on('routeChangeStart', () => showProgressBar(500));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='https://res.cloudinary.com/dsbogvjcc/image/upload/v1624716401/StriTech/Mobile-Logo_3x_te2dnx.png'
          />
          <meta property="og:image" content="https://res.cloudinary.com/dsbogvjcc/image/upload/v1624716379/StriTech/Complete-Logo_3x_ti8hxe.png" />
          <meta name="description" property="og:description" content="Custom Scalable Software, Web & Mobile App Design & Development Services."/>
          <meta name="keywords" property="og:keywords" content="Software, Web, Mobie, Artificial, Inteligence, Machine, Learning, Data, Science, Development, SAAS, Company, StriTech, Striving, Technologies" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
