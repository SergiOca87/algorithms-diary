import PostItem from './post-item';
import styles from './posts-grid.module.scss';

function PostsGrid({ posts }) {
	console.log(styles);
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
