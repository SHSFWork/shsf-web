import { type Blog, allBlogs } from "content-collections";
import { compareDesc } from "date-fns";

export const createPrevAndNext = (blog: Blog) => {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  const index = blogs.findIndex((p) => p === blog);
  const next = index > 0 ? blogs[index - 1] : null;
  const prev = index + 1 < blogs.length ? blogs[index + 1] : null;
  return {
    next,
    prev,
  };
};
