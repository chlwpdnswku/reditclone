import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Axios from 'axios';
import { AuthProvider } from '../context/auth';

export default function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api';
  //이거를 기본적으로 추가하면 다른곳에다 추가 안해도됨
  Axios.defaults.withCredentials = true;
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
