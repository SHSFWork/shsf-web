import { Link, Root, Text } from "mdast";
import { Plugin } from "unified";
import { visit } from "unist-util-visit";

const getUrlString = (url: string): string | null => {
  const urlString = url.startsWith("http") ? url : `https://${url}`;

  try {
    return new URL(urlString).toString();
  } catch {
    return null;
  }
};

type Options = object;

const mdxEmbedder: Plugin<[Options], Root> = () => (tree, file, done) => {
  const tasks: Promise<void>[] = [];

  visit(tree, "paragraph", (paragraphNode) => {
    if (paragraphNode.children.length !== 1) {
      return;
    }

    const { children } = paragraphNode;
    const node = children[0] as Link | Text;
    const isText = node.type === "text";

    const isValidLink =
      node.type === "link" &&
      !node.title &&
      node.children.length === 1 &&
      node.children[0].type === "text" &&
      node.children[0].value === node.url;
    if (!(isText || isValidLink)) {
      return;
    }

    const value = isText ? node.value : node.url;
    const urlString = getUrlString(value);
    if (!urlString) {
      return;
    }
  });

  Promise.all(tasks).then(() => done());
};

export default mdxEmbedder;
