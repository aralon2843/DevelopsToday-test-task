import React, { FC } from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/globalStyles';
import { wrapper } from '../store';

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
};

export default wrapper.withRedux(App);
