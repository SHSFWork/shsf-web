interface CollectionUserRef {
  $ref: string;
  $id: number;
}

interface CollectionCreatorRef {
  _id: number;
  name: string;
  email: string;
}

interface CollectionAccess {
  for: number;
  level: number;
  root: boolean;
  draggable: boolean;
}

interface Collection {
  _id: number;
  title: string;
  description: string;
  user: CollectionUserRef;
  public: boolean;
  count: number;
  cover: string[];
  sort: number;
  expanded: boolean;
  creatorRef: CollectionCreatorRef;
  lastAction: string;
  created: string;
  lastUpdate: string;
  slug: string;
  view: string;
  color: string;
  access: CollectionAccess;
  author: boolean;
}

interface Collections {
  items: Collection[];
  count: number;
  result: boolean;
}

// Bookmark

interface BookmarkUserRef {
  $ref: string;
  $id: number;
}

interface BookmarkMedia {
  link: string;
  type: string;
}

interface BookmarkReminder {
  date: string | null;
}

interface BookmarkCollectionRef {
  $ref: string;
  $id: number;
  oid: number;
}

interface BookmarkCreatorRef {
  _id: number;
  name: string;
  avatar: string;
  email: string;
}

interface Bookmark {
  _id: number;
  link: string;
  title: string;
  excerpt: string;
  note: string;
  type: string;
  user: BookmarkUserRef;
  cover: string;
  media: BookmarkMedia[];
  tags: string[];
  important: boolean;
  reminder: BookmarkReminder;
  removed: boolean;
  created: string;
  collection: BookmarkCollectionRef;
  highlights: boolean[];
  lastUpdate: string;
  domain: string;
  creatorRef: BookmarkCreatorRef;
  sort: number;
  collectionId: number;
}

interface Bookmarks {
  items: Bookmark[];
  count: number;
  result: boolean;
  collectionId: number;
}
