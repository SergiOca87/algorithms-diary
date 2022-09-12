import Link from 'next/link';
import React from 'react';
import styles from './post-content.module.scss';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import Head from 'next/head';

SyntaxHighlighter.registerLanguage('js', js);

export default function PostContent({ post }) {
	const { title, content } = post;

	const customRenderers = {
		code(code) {
			const { className, children } = code;
			const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
			return (
				<SyntaxHighlighter style={atomDark} language={language}>
					{children}
				</SyntaxHighlighter>
			);
		},
	};

	return (
		<>
			<Head>
				<title>Algorithms Diary - {title}</title>
				<meta
					name="description"
					content="A personal Blog to store my algorithmic solutions to different problems from FreecodeCamp or Codewars"
				/>
			</Head>
			<article className={styles.post}>
				<div className="post__header">
					<h1>{title}</h1>
				</div>
				<div className="post__content">
					<ReactMarkdown components={customRenderers}>
						{content}
					</ReactMarkdown>
				</div>
				<Link href="/">← Back to all Posts</Link>
			</article>
		</>
	);
}
