import Link from 'next/link'
import Head from 'next/head';
import {getSortedPostsData} from '../lib/posts'
import Hobbies from '../components/index/Hobbies';
import Intro from '../components/index/Intro';
import Skills from '../components/index/Skills';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({allPostsData}) {
  return (
   <div>
      <Head>
          <title>Home</title>
      </Head>
      <Intro />
      <Hobbies />
      <Footer />
   </div> 
  )
}
