import { Footer } from '../components/Footer';
import { Header } from '../components/header';
import '../global.css';

export default function MyApp({ Component, pageProps }) {
    console.log('Component=', Component);
    return <>
        <Header />
        <main>
            <Component {...pageProps} />
        </main>
        <Footer />

    </>
}