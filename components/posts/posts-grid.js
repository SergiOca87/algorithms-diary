import PostItem from './post-item';
import styles from '../../styles/posts-grid.module.scss';

function PostsGrid({ posts }) {
	return (
		<section className={styles.container}>
			<div className={styles.container_inner}>
				<ul>
					{posts.map((post) => (
						<PostItem key={post.slug} post={post} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default PostsGrid;
