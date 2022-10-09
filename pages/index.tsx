import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta name='theme-color' content='#000000'></meta>
                <title>Ahmed Maanis</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>

            <div className='container'>
                <main className='main '>
                    <div className='hero'>
                        <div className='inline-flex'>
                            <h1 className='anim-typewriter '>hello world.</h1>
                        </div>
                    </div>
                </main>
                <p>Developer based in Maldives 🇲🇻.</p>

                <div className='contactlinks'>
                    <div>
                        <Link href={'https://github.com/0mns'}>
                            Github &#8599;
                        </Link>
                    </div>
                    <div>
                        <Link href={'mailto:manis16@outlook.com'}>
                            e-mail &#8599;
                        </Link>
                    </div>
                    <div>
                        <Link href={'https://instagram.com/ahmedmanis'}>
                            Instagram &#8599;
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
