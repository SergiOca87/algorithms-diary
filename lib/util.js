import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// root + directory name where our posts are located
const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostFiles() {
	return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
	// Create the post slug
	const postSlug = postIdentifier.replace(/\.md$/, ''); // Removes the file extension

	// Get the path of the file
	const filePath = path.join(postsDirectory, `${postSlug}.md`);

	// Get the file content
	const fileContent = fs.readFileSync(filePath, 'utf-8');

	// Extract Metadata with Gray Matter
	const { data, content } = matter(fileContent);

	const postData = {
		slug: postSlug,
		...data,
		content,
	};

	return postData;
}

export function getAllPosts() {
	// Read the contents of a directory, returns Array of Strings
	const postFiles = getPostFiles();

	// Creates an Array with all of the post data
	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	// Sorting function for posts would go here

	return allPosts;
}
