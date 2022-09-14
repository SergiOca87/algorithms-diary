import styles from './hero.module.scss';
import { BiCodeAlt } from 'react-icons/bi';
import { FaBrain } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<h1>Algorithms Diary</h1>
				<p>
					A personal Blog to store my algorithmic solutions to
					different problems from{' '}
					<a
						href="https://www.freecodecamp.org/"
						target="_blank"
						rel="noreferrer"
					>
						FreecodeCamp
					</a>{' '}
					or{' '}
					<a
						href="https://www.codewars.com"
						target="_blank"
						rel="noreferrer"
					>
						Codewars
					</a>
				</p>

				<IconContext.Provider
					value={{
						color: '#66fcf1',
						className: `${styles.left_icon}`,
					}}
				>
					<BiCodeAlt />
				</IconContext.Provider>
				<IconContext.Provider
					value={{
						color: '#66fcf1',
						className: `${styles.right_icon}`,
					}}
				>
					<FaBrain />
				</IconContext.Provider>
			</div>
		</section>
	);
}

export default Hero;
