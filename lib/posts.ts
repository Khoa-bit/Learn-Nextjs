import * as path from "path";
import * as fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

interface postMatter {
  title: string;
  date: string;
}

interface postData extends postMatter {
  id: string;
}

interface validateMetadataParams extends Partial<postMatter> {
  id: string;
}

function validateMetadata({ id, title, date }: validateMetadataParams) {
  if (title === undefined || date === undefined) {
    throw Error(`Post ${id} is missing title or date.`);
  }
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: postData[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    validateMetadata({ id, ...matterResult.data });

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as postMatter),
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  validateMetadata({ id, ...matterResult.data });

  // Use remark to convert Markdown to HTML string
  const processesContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processesContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...(matterResult.data as postMatter),
  };
}
