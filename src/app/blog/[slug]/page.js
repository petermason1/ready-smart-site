export const dynamic = 'force-dynamic';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from '../Blog.module.css';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage(props) {
  const { slug } = await props.params;    // ← await here
  if (!slug) notFound();

  const post = await getPostBySlug(slug);
  if (!post?.content) notFound();

  return (
    <main className={styles.blogWrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </p>
      </header>

      <article className={`mdxContent ${styles.mdxContent}`}>
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
