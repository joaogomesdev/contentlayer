import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'


export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return { props: { posts } }
}

const PostCard: React.FC<Post> = ({date , url, title}: Post) => {
  return (
    <div className="mb-6">
    <time dateTime={date} className="block text-sm text-slate-600">
      {format(parseISO(date), 'LLLL d, yyyy')}
    </time>
    <h2 className="text-lg">
      <Link href={url} className="text-blue-700 hover:text-blue-900">
        {title}
      </Link>
    </h2> 
  </div>
  )
}

const Home: React.FC<{posts: Post[]}> = ({ posts }) => {
  return (
    
    <div className="bg-zinc-900 w-screen h-screen">
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold text-white">Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
    </div>
  )
} 

export default Home
