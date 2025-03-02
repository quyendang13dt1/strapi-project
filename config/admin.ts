export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: ["http://localhost:4200/"],
      // http://147.93.107.27:8888

      async handler(uid, { documentId, locale, status }) {
        // const document = await strapi.documents(uid).findOne({ documentId });
        const pathname = getPreviewPathname(uid, documentId);
        return `http://localhost:4200${pathname}?status=${status ? status : "published"}`;
      },
    },
  },
});

const getPreviewPathname = (uid, documentId): string => {
  // const { slug } = document;
  // Handle different content types with their specific URL patterns
  switch (uid) {
    // Handle pages with predefined routes
    case "api::knowledge.knowledge": {
      return "/knowledge-hub";
    }
    // switch (slug) {
    //   case "homepage":
    //     return `/${locale}`; // Localized homepage
    //   case "pricing":
    //     return "/pricing"; // Pricing page
    //   case "contact":
    //     return "/contact"; // Contact page
    //   case "faq":
    //     return "/faq"; // FAQ page
    // }
    // Handle product pages
    // case "api::product.product": {
    //   if (!slug) {
    //     return "/products"; // Products listing page
    //   }
    //   return `/products/${slug}`; // Individual product page
    // }
    // Handle blog articles
    case "api::article.article": {
      return `/detail/${documentId}`; // Individual article page
    }
    default: {
      return null;
    }
  }
};
