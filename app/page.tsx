import Image from 'next/image';
import Header from './header';
import Footer from './footer';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <Header />
        <div className='bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
          <div>Test</div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
