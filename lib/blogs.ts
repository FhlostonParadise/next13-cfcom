import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Blog } from '../interfaces/blog';

const getDir = (path: string) => join(process.cwd(), path);
const BLOG_DIR = getDir('/posts');

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
};

const getItemInPath = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return { ...data, content } as Blog;
};

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames();

  const items = names.map((name) => getItemInPath(join(BLOG_DIR, name)));

  return items;
};

export { getBlogFileNames, getBlogs };
