import Head from 'next/head';
import Hero from '../components/homepage/hero';
import PostsGrid from '../components/posts/posts-grid';
import { getAllPosts } from '../lib/util';

function HomePage({ posts }) {
	return (
		<>
			<Head>
				<title>Algorithms Diary</title>
				<meta
					name="description"
					content="A personal Blog to store my algorithmic solutions to different problems from FreecodeCamp or Codewars"
				/>
			</Head>
			<Hero />
			<PostsGrid posts={posts} />
		</>
	);
}

export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
	};
}

export default HomePage;
