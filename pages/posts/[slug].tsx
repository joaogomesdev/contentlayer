import { allPosts, Post } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Image from 'next/image'


export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map(post => `/posts/${post._raw.flattenedPath}`)
  return { paths , fallback: false} 
}

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params!.slug
  const post = allPosts.find(post => post._raw.flattenedPath === slug)
  return {props: { post }}
}

const PostLayout: React.FC<{post: Post}> = ({ post }) => {
  return (
    <div className="bg-zinc-900 w-screen h-screen">

    <div className="mx-auto flex flex-col item-center max-w-4xl py-16 text-center ">
        <h1 className="text-6xl font-bold text-blue-500">{post.title}</h1> 
        <div className="mt-8 text-white" dangerouslySetInnerHTML={{__html: post.body.html}} />
    </div>
g
    {
      post?.image && (
        <div className='mx-auto mt-8 flex items-center w-full justify-center'>
          <Image src={post.image} width={300} height={300} alt={post.title}/>
        </div>
      )
    }

    </div>
  )
}



export default PostLayout
