import PostContent from '../../components/posts/post-content';
import { getPostData, getPostFiles } from '../../lib/util';

function PostDetailPage({ post }) {
	return <PostContent post={post} />;
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
	};
}

export function getStaticPaths() {
	const postFileNames = getPostFiles();

	const slugs = postFileNames.map((fileName) =>
		fileName.replace(/\.md$/, '')
	);

	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default PostDetailPage;
