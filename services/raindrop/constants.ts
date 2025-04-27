export const USE_MOCK = process.env.USE_MOCK_DATA_FOR_DEVELOPMENT === "true";
export const RAINDROP_API_URL = "https://api.raindrop.io/rest/v1";

export const CACHE_DURATION = 60 * 60 * 1.5;

export const DEFAULT_COLLECTIONS: Collections = {
  result: true,
  items: [
    {
      _id: 45184820,
      title: "unarkhive",
      description: "",
      user: {
        $ref: "users",
        $id: 2228929,
      },
      public: false,
      count: 392,
      cover: [
        "https://up.raindrop.io/collection/thumbs/451/848/20/a7556c0699c16a9ff63836171e38a2d8.png",
      ],
      sort: 0,
      expanded: true,
      creatorRef: {
        _id: 2228929,
        name: "stack",
        email: "",
      },
      lastAction: "2025-04-20T11:37:15.716Z",
      created: "2024-06-16T05:56:45.423Z",
      lastUpdate: "2025-04-20T11:36:13.978Z",
      slug: "unarkhive",
      view: "list",
      color: "#5c809e",
      access: {
        for: 2228929,
        level: 4,
        root: false,
        draggable: true,
      },
      author: true,
    },
  ],
  count: 1,
};

export const DEFAULT_BOOKMARKS: Bookmarks = {
  result: true,
  items: [
    {
      _id: 1019443643,
      link: "https://www.shsf.work/starter-kits",
      title: "Starter Kits",
      excerpt:
        "Browse a selection of fully built starter kits designed to kickstart your projects.",
      note: "",
      type: "link",
      user: {
        $ref: "users",
        $id: 2228929,
      },
      cover:
        "https://shsf.work/og?title=Starter%20Kits&description=Browse%20a%20selection%20of%20fully%20built%20starter%20kits%20designed%20to%20kickstart%20your%20projects.",
      media: [
        {
          link: "https://shsf.work/og?title=Starter%20Kits&description=Browse%20a%20selection%20of%20fully%20built%20starter%20kits%20designed%20to%20kickstart%20your%20projects.",
          type: "image",
        },
      ],
      tags: ["open-source"],
      important: false,
      reminder: {
        date: null,
      },
      removed: false,
      created: "2025-04-20T11:36:09.733Z",
      collection: {
        $ref: "collections",
        $id: 45184820,
        oid: 45184820,
      },
      highlights: [],
      lastUpdate: "2025-04-20T11:36:13.948Z",
      domain: "shsf.work",
      creatorRef: {
        _id: 2228929,
        name: "stack",
        avatar: "",
        email: "",
      },
      sort: 1019443643,
      collectionId: 45184820,
    },
  ],
  count: 1,
  collectionId: 0,
};
