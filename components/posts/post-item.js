import Link from 'next/link';
import styles from '../../styles/post-item.module.scss';

function PostItem({ post }) {
	const { title, excerpt, slug } = post;

	return (
		<li className={styles.post_item}>
			<Link href={`/posts/${slug}`}>
				<a>
					<h3>{title}</h3>
					<p>{excerpt}</p>
				</a>
			</Link>
		</li>
	);
}

export default PostItem;
