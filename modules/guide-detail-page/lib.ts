import { type Guide, allGuides } from "content-collections";
import { compareDesc } from "date-fns";

export const createPrevAndNext = (guide: Guide) => {
  const guides = allGuides.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  const index = guides.findIndex((p) => p === guide);
  const next = index > 0 ? guides[index - 1] : null;
  const prev = index + 1 < guides.length ? guides[index + 1] : null;
  return {
    next,
    prev,
  };
};
