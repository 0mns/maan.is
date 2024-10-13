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

            <div className='container mx-auto px-2 mt-40'>
                <div className='flex flex-col min-h-screen'>

                <main className=' '>
                    <div className=''>
                        <div className=''>
                            <h1 className='uppercase text-9xl'>Ahmed Maanis</h1>
                        </div>
                    </div>
                </main>
                <div className='mt-10 py-2 border-b border-t border-black '>

                <p className='text-2xl'>Visual communication & story telling</p>
                </div>

                <div className='contactlinks mt-32'>
                    <div>
                        <Link href={'https://be.net/maanis'}>
                            behance &#8599;
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
                <footer className='mt-auto'>
                &copy; 2024 | BASED IN MALDIVES
                </footer>
                </div>

               
            </div>
        </>
    );
};

export default Home;
