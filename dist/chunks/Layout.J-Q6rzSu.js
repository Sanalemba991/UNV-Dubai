import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, s as spreadAttributes, u as unescapeHTML, b as renderComponent, m as maybeRenderHead, h as renderSlot, i as renderHead } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
/* empty css                        */
import 'clsx';
import slugify from 'limax';
import fs from 'fs';
import yaml from 'js-yaml';
import merge from 'lodash.merge';
import { isRemotePath } from '@astrojs/internal-helpers/path';
import { A as AstroError, f as NoImageMetadata, F as FailedToFetchRemoteImageDimensions, E as ExpectedImageOptions, g as ExpectedImage, h as ExpectedNotESMImage, r as resolveSrc, i as isRemoteImage, j as isESMImportedImage, k as isLocalService, D as DEFAULT_HASH_PROPS, l as InvalidImageService, m as ImageMissingAlt } from './astro/assets-service.f-hBXl1N.js';
import * as mime from 'mrmime';

const $$Astro$c = createAstro("https://unvdubai.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", undefined);

const $$Astro$b = createAstro("https://unvdubai.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", undefined);

const $$Astro$a = createAstro("https://unvdubai.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", undefined);

const $$Astro$9 = createAstro("https://unvdubai.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", undefined);

const $$Astro$8 = createAstro("https://unvdubai.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/components/ExtendedTags.astro", undefined);

const $$Astro$7 = createAstro("https://unvdubai.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/components/TwitterTags.astro", undefined);

const $$Astro$6 = createAstro("https://unvdubai.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", undefined);

const $$Astro$5 = createAstro("https://unvdubai.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? undefined) == undefined || (props.openGraph.basic.type ?? undefined) == undefined || (props.openGraph.basic.image ?? undefined) == undefined) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro-seo/src/SEO.astro", undefined);

const $$Astro$4 = createAstro("https://unvdubai.com");
const $$FooterSocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FooterSocialLink;
  const { url } = Astro2.props;
  const linkClass = "inline-flex h-10 w-10 items-center justify-center gap-x-2 rounded-lg border border-transparent text-sm font-bold text-neutral-700 outline-none ring-zinc-500 hover:bg-neutral-500/10 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:hover:bg-neutral-50/10 dark:focus:outline-none";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(linkClass, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ui/FooterSocialLink.astro", undefined);

const $$Astro$3 = createAstro("https://unvdubai.com");
const $$EmailFooterInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EmailFooterInput;
  const {
    label = "Search",
    title = "Subscribe",
    id = "footer-input"
  } = Astro2.props;
  return renderTemplate`<!-- Footer Container -->${maybeRenderHead()}<div class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 dark:bg-neutral-800 sm:flex-row sm:gap-3"> <!-- Input Section --> <div class="w-full"> <!-- Label for accessibility (hidden visually) --> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <!-- Input Field --> <input type="text"${addAttribute(id, "id")} name="footer-input" class="block w-full rounded-lg border-transparent bg-neutral-100 px-4 py-3 text-sm text-neutral-600 focus:border-[#fa5a15] focus:ring-[#0b377d] disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-gray-300 dark:placeholder:text-neutral-300 hover:border-blue-700 focus:border-blue-700 focus:ring-blue-700" placeholder="Enter your email"> </div> <!-- Subscribe Button --> <a class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg border border-transparent bg-blue-500 p-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-blue-700 focus:bg-blue-700 focus-visible:ring disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1 sm:w-auto" href="#"> ${title} </a> </div>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ui/EmailFooterInput.astro", undefined);

const config = yaml.load(fs.readFileSync("src/config.yaml", "utf8"));
const DEFAULT_SITE_NAME = "Website";
const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: undefined,
    base: "/",
    trailingSlash: false,
    googleSiteVerificationId: ""
  };
  return merge({}, _default, config?.site ?? {});
};
const getMetadata = () => {
  const siteConfig = getSite();
  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: "%s"
    },
    description: "",
    robots: {
      index: false,
      follow: false
    },
    openGraph: {
      type: "website"
    }
  };
  return merge({}, _default, config?.metadata ?? {});
};
const getI18N = () => {
  const _default = {
    language: "en",
    textDirection: "ltr"
  };
  const value = merge({}, _default, config?.i18n ?? {});
  return Object.assign(value, {
    dateFormatter: new Intl.DateTimeFormat(value.language, {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    })
  });
};
const getAppBlog = () => {
  const _default = {
    isEnabled: false,
    postsPerPage: 6,
    isRelatedPostsEnabled: false,
    relatedPostsCount: 4,
    post: {
      isEnabled: true,
      permalink: "/blog/%slug%",
      robots: {
        index: true,
        follow: true
      }
    },
    list: {
      isEnabled: true,
      pathname: "blog",
      robots: {
        index: true,
        follow: true
      }
    },
    category: {
      isEnabled: true,
      pathname: "category",
      robots: {
        index: true,
        follow: true
      }
    },
    tag: {
      isEnabled: true,
      pathname: "tag",
      robots: {
        index: false,
        follow: true
      }
    }
  };
  return merge({}, _default, config?.apps?.blog ?? {});
};
const getUI = () => {
  const _default = {
    theme: "system",
    classes: {},
    tokens: {}
  };
  return merge({}, _default, config?.ui ?? {});
};
const getAnalytics = () => {
  const _default = {
    vendors: {
      googleAnalytics: {
        id: undefined,
        partytown: true
      }
    }
  };
  return merge({}, _default, config?.analytics ?? {});
};
const SITE = getSite();
getI18N();
getMetadata();
const APP_BLOG = getAppBlog();
getUI();
getAnalytics();

const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) => {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return "/" + paths + (SITE.trailingSlash && paths ? "/" : "");
};
const BASE_PATHNAME = SITE.base || "/";
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);
const getPermalink = (slug = "", type = "page") => {
  let permalink;
  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }
  return definitivePermalink(permalink);
};
const getHomePermalink = () => getPermalink("/");
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);

({
  links: [
    {
      text: 'Homes',
     href: getHomePermalink()
    },
    {
      text: 'Products',
      href: getPermalink('categories')
      // links: [
      //   {
      //     text: 'Features (Anchor Link)',
      //     href: getPermalink('/#features'),
      //   },
      //   {
      //     text: 'Services',
      //     href: getPermalink('/services'),
      //   },
      //   {
      //     text: 'Pricing',
      //     href: getPermalink('/pricing'),
      //   },
      //   {
      //     text: 'About us',
      //     href: getPermalink('/about'),
      //   },
      //   {
      //     text: 'Contact',
      //     href: getPermalink('/contact'),
      //   },
      //   {
      //     text: 'Terms',
      //     href: getPermalink('/terms'),
      //   },
      //   {
      //     text: 'Privacy policy',
      //     href: getPermalink('/privacy'),
      //   },
      // ],
    },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: 'Blog',

      href: getBlogPermalink()
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
    {
      text: 'About',
      href: getPermalink('about'),
    },
    {
      text: 'Contact',
      href: getPermalink('contact'),
    },
  ]});

const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/contact' },
        { text: 'Team', href: 'about' },
        { text: 'Home', href: '/' },
        { text: 'Resources', href: 'blog' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'about' },
        { text: 'Blog', href: 'blog' },
        // { text: 'Careers', href: '#' },
        { text: 'Contact', href: 'contact' },
        
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ]};

// An array of links for navigation bar
// An object of links for social icons
const socialLinks = {
  google: "https://g.co/kgs/yq4CrN8",
  linkedin:"https://www.linkedin.com/company/univiewuae/"
};

const Logo = new Proxy({"src":"/_astro/UNVLOGO.B2902jCZ.png","width":201,"height":75,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sanalemba/UNV-Dubai/src/assets/images/UNVLOGO.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/sanalemba/UNV-Dubai/src/assets/images/UNVLOGO.png");
							return target[name];
						}
					});

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(i);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return undefined;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.includes(type)) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== undefined) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  try {
    const result = lookup(data);
    if (!result.height || !result.width || !result.type) {
      throw new AstroError({
        ...NoImageMetadata,
        message: NoImageMetadata.message(src)
      });
    }
    const { width, height, type, orientation } = result;
    const isPortrait = (orientation || 0) >= 5;
    return {
      width: isPortrait ? height : width,
      height: isPortrait ? width : height,
      format: type,
      orientation
    };
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service.f-hBXl1N.js'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : undefined;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== undefined ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$2 = createAstro("https://unvdubai.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === undefined || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro/components/Image.astro", undefined);

const $$Astro$1 = createAstro("https://unvdubai.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === undefined || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/sanalemba/UNV-Dubai/node_modules/astro/components/Picture.astro", undefined);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white"> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "loading": "eager", "alt": "Your Logo", "width": "97", "height": "87", "loading": "eager" })} </span>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/Logo.astro", undefined);

const $$FooterSection = createComponent(($$result, $$props, $$slots) => {
  const sectionThreeTitle = "Stay up to date";
  const sectionThreeContent = "Stay updated with the latest security tips.";
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-neutral-300 dark:bg-neutral-900"> <div class="mx-auto w-full max-w-[85rem] px-4 py-12 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl"> <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5"> <div class="col-span-full lg:col-span-1"> ${renderComponent($$result, "Logo", $$Logo, { "class": "w-32 h-auto" })} </div> <!-- An array of links for Product and Company sections --> ${footerData.links.map((title) => renderTemplate`<div class="col-span-1"> <p class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 mb-4"> ${title.title} </p> <ul class="mt-3 space-y-3"> ${title.links.map((link, index) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="inline-flex gap-x-2 rounded-lg text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:text-blue-600 hover:underline hover:underline-offset-4 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-300 dark:focus:outline-none dark:focus:ring-1"> ${link.text} </a> ${title.title === "Company" && index === 2 ? renderTemplate`<span class="ms-1 inline rounded-lg bg-blue-500 px-2 py-1 text-xs font-bold text-neutral-50 hover:bg-blue-600 transition duration-300">
We're hiring!
</span>` : null} </li>`)} </ul> </div>`)} <div class="col-span-2"> <h3 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 mb-4"> ${sectionThreeTitle} </h3> <form class="space-y-4"> ${renderComponent($$result, "EmailFooterInput", $$EmailFooterInput, {})} <p class="mt-3 text-lg text-neutral-600 dark:text-neutral-400"> ${sectionThreeContent} </p> </form> </div> </div> <div class="mt-12 border-t border-neutral-400 dark:border-neutral-700 pt-8 grid gap-y-4 sm:flex sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex items-center justify-between"> <p class="text-sm text-neutral-600 dark:text-neutral-400">
© <span id="current-year"></span> UNV Dubai Technology
</p> </div> <div class="flex space-x-4"> ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": socialLinks.linkedin }, { "default": ($$result2) => renderTemplate` <svg class="h-5 w-5 flex-shrink-0 fill-current text-neutral-700 dark:text-neutral-400 hover:text-blue-700 dark:hover:text-blue-400 transition duration-300" fill="currentColor" role="img" viewBox="0 0 24 24"> <title>LinkedIn</title> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.038-1.852-3.038-1.853 0-2.136 1.446-2.136 2.939v5.668h-3.554V9h3.414v1.561h.049c.477-.901 1.637-1.852 3.368-1.852 3.598 0 4.264 2.368 4.264 5.451v6.292zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07s.926-2.07 2.07-2.07c1.144 0 2.07.926 2.07 2.07s-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"></path> </svg> ` })} ${renderComponent($$result, "FooterSocialLink", $$FooterSocialLink, { "url": socialLinks.google }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="w-5 h-5"> <path fill="#4285F4" d="M533.5 278.4c0-17.5-1.6-35.3-5.2-52.2H272v98.8h146.9c-6.4 34.2-25.7 63.2-54.9 82.6l89 69.2c52-48 80.5-118.8 80.5-198.4z"></path> <path fill="#34A853" d="M272 544.3c73.6 0 135.3-24.4 180.4-66.4l-89-69.2c-24.8 16.5-56.6 26-91.4 26-70.1 0-129.4-47.2-150.7-110.5H28.1v69.5C73.4 475.1 166.5 544.3 272 544.3z"></path> <path fill="#FBBC05" d="M121.3 324.2c-10.3-30.3-10.3-63.1 0-93.4v-69.5H28.1c-34.4 68.7-34.4 153.7 0 222.4l93.2-59.5z"></path> <path fill="#EA4335" d="M272 107.6c39.9 0 75.8 13.7 104 40.7l77.8-77.8C407.3 24.6 345.6 0 272 0 166.5 0 73.4 69.2 28.1 162.8l93.2 69.5C142.6 154.8 201.9 107.6 272 107.6z"></path> </svg> ` })} </div> </div>  </div> </footer>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/FooterSection.astro", undefined);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<!-- Fixed Navigation Bar -->", '<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-gray-200/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300 shadow-sm"> <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3"> <!-- Logo --> <a href="/" class="flex items-center group"> ', ' </a> <!-- Contact Info - Desktop --> <!-- Desktop Navigation --> <div class="hidden lg:flex flex-1 justify-center"> <ul class="flex space-x-10 xl:space-x-8 text-base items-center"> <li> <a href="/" class="nav-link"> <span class="nav-link-text">Home</span> </a> </li> <li> <a href="/about" class="nav-link"> <span class="nav-link-text">About</span> </a> </li> <li class="relative group/dropdown"> <!-- Main Products Navigation Link --> <a href="/products" class="nav-link flex items-center px-3 py-2.5 rounded-lg transition-all duration-200  dark:group-hover/dropdown:bg-gray-800/50"> <span class="nav-link-text mr-1">Products</span> <svg class="w-4 h-4 transition-transform duration-200 group-hover/dropdown:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </a> <!-- Mega Dropdown Menu - Only visible on hover --> <div class="fixed left-0 right-0 mt-2 mx-auto w-full max-w-7xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl opacity-0 invisible transition-all duration-300 z-50 border border-gray-200 dark:border-gray-700 group-hover/dropdown:opacity-100 group-hover/dropdown:visible translate-y-1 group-hover/dropdown:translate-y-0 overflow-hidden" id="dropdown-container"> <div class="grid grid-cols-4 h-[80vh] overflow-y-auto"> <!-- Left Sidebar - Categories --> <div class="col-span-1 bg-gray-50 dark:bg-gray-700/30 p-5 border-r border-gray-200 dark:border-gray-700"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-5">Product Categories</h3> <ul class="space-y-2"> <li class="group/category"> <a href="/categories/ip-cameras" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="ip-cameras"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg>\nNetwork Cameras\n</a> </li> <li class="group/category"> <a href="/categories/analog-cameras" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="analog-cameras"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg>\nAnalog Cameras\n</a> </li> <li class="group/category"> <a href="/categories/ptz-cameras" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="ptz-cameras"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path> </svg>\nPTZ Cameras\n</a> </li> <li class="group/category"> <a href="/categories/dvr" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="dvr"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path> </svg>\nDVR Systems\n</a> </li> </ul> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"> ', ` </div> </div> <!-- Main Content Area --> <div class="col-span-3 p-8 overflow-y-auto" id="dropdown-content-container"> <!-- Dynamic content will load here based on selected category --> </div> </div> </div>  </li> <template id="network-cameras-content"> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured Network Cameras
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/ip-cameras/ipc2122lb-af2840-a2" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ip-cameras/IPC2122LB-AF28(40)-A2/Network4 (1).png" alt="IPC2122LB-AF28(40)A2" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC2122LB-AF28(40)A2</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">2MP Cam with Human Detection, H.265, 30m IR.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">Best Seller</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">2 MP</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/ip-cameras/ipc8544ea-km-i1" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ip-cameras/IPC8544EA-KM-I1/Network2 (3).png" alt="UAC-T142-AF2840LM-DL" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC8544EA-KM-I1</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">16MP LightHunter OmniView Fixed IR Network Camera.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">16 MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">512 GB</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/ip-cameras" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All Network Cameras</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
            from { 
                opacity: 0;
                transform: translateY(10px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fade-in {
            animation: fade-in 0.7s ease-out forwards;
        }
        
        .animate-fade-in-up {
            animation: fade-in-up 0.7s ease-out forwards;
        }
    </style> </template> <!-- Add similar templates for other categories --><template id="analog-cameras-content"> <!-- Featured Product Section --> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured Analog Cameras
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/analog-cameras/uac-b115-af2840-w" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/analog-cameras/UAC-B115-AF28(40)-W.png" alt="UAC-B115-AF2840-W" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">UAC-B115-AF2840-W</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">5MP ColorHunter Bullet with 24/7 color.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">5MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">N/A</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/analog-cameras/uac-t142-af2840lm-dl" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/analog-cameras/UAC-T142-AF28LM-DL/UAC-T142-AF28(40)LM-DL1.png" alt="UAC-T142-AF2840LM-DL" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">UAC-T142-AF2840LM-DL</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">2MP ColorHunter Turret with dual light.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">2 MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">N/A</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/analog-cameras" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All Analog Cameras</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
            from { 
                opacity: 0;
                transform: translateY(10px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fade-in {
            animation: fade-in 0.7s ease-out forwards;
        }
        
        .animate-fade-in-up {
            animation: fade-in-up 0.7s ease-out forwards;
        }
    </style> </template> <!-- PTZ Cameras Content --> <template id="ptz-cameras-content"> <!-- Featured Product Section --> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured PTZ Cameras
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/ptz-cameras/ipc6325lfw-ax5c-vg" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ptz-cameras/IPC6325LFW-AX5C-VG/IPC6325LFW-AX5C-VG1.png" alt="IPC6325LFW-AX5C-VG" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC6325LFW-AX5C-VG</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">5MP 5X ColorHunter Tri-Guard Dual-light Network PTZ Camera</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">5MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">512 GB</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/ptz-cameras/ipc7628el-l-x41-vh1" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ptz-cameras/IPC7628EL-L-X41-VH1/IPC7628EL-L-X41-VH12.png" alt="IPC7628EL-L-X41-VH1" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC7628EL-L-X41-VH1</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">8MP 41X PTZ with smart features and 1000m IR.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">8 MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">256 GB</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/ptz-cameras" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All PTZ Cameras</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from { 
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.7s ease-out forwards;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.7s ease-out forwards;
                }
            </style> </template> <!-- DVR Systems Content --> <template id="dvr-systems-content"> <!-- Featured Product Section --> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured DVR Systems
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/dvr/xvr301-04u3-p4" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/dvr/XVR301-04U3-P4/XVR301-04U3-P4.png" alt="IPC6325LFW-AX5C-VG" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">XVR301-04U3-P4</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">4 HDDs 32-Ch 2U Digital Video Recorder.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">4 HDD</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">32 Channel BNC Input</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/dvr/xvr301-f-series" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/dvr/XVR301-04F/XVR301-F Series.png" alt="IPC7628EL-L-X41-VH1" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">XVR301-F Series</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">1 HDD 4-Ch 1U Digital Video Recorder</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">1 HDD</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">16 Channel BNC Input</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/dvr" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All DVR Systems</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from { 
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.7s ease-out forwards;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.7s ease-out forwards;
                }
            </style> </template> <!-- JavaScript to handle dynamic content loading -->  <!-- End of Products dropdown --> <li> <a href="/blog" class="nav-link"> <span class="nav-link-text">Blog</span> </a> </li> <li> <a href="/insights" class="nav-link"> <span class="nav-link-text">Insights</span> </a> </li> <li> <a href="/contact" class="nav-link"> <span class="nav-link-text">Contact</span> </a> </li> </ul> </div> <div class="hidden lg:flex items-center space-x-6"> <!-- Email --> <a href="mailto:sales@unvdubai.com" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span class="text-sm">sales@unvdubai.com</span> </a> <!-- Phone --> <a href="tel:+971552929644" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-sm">+971552929644</span> </a> <!-- Social Media Links --> <div class="flex items-center space-x-3 ml-2"> <!-- LinkedIn --> <a href="https://www.linkedin.com/company/univiewuae/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <!-- Google (Business/Reviews) --> <a href="https://g.co/kgs/yq4CrN8" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="w-5 h-5"> <path fill="#4285F4" d="M533.5 278.4c0-17.5-1.6-35.3-5.2-52.2H272v98.8h146.9c-6.4 34.2-25.7 63.2-54.9 82.6l89 69.2c52-48 80.5-118.8 80.5-198.4z"></path> <path fill="#34A853" d="M272 544.3c73.6 0 135.3-24.4 180.4-66.4l-89-69.2c-24.8 16.5-56.6 26-91.4 26-70.1 0-129.4-47.2-150.7-110.5H28.1v69.5C73.4 475.1 166.5 544.3 272 544.3z"></path> <path fill="#FBBC05" d="M121.3 324.2c-10.3-30.3-10.3-63.1 0-93.4v-69.5H28.1c-34.4 68.7-34.4 153.7 0 222.4l93.2-59.5z"></path> <path fill="#EA4335" d="M272 107.6c39.9 0 75.8 13.7 104 40.7l77.8-77.8C407.3 24.6 345.6 0 272 0 166.5 0 73.4 69.2 28.1 162.8l93.2 69.5C142.6 154.8 201.9 107.6 272 107.6z"></path> </svg> </a> </div> </div> <!-- Mobile Menu Button --> <button id="menu-toggle" class="lg:hidden flex flex-col h-10 w-10 rounded justify-center items-center group focus:outline-none" aria-label="Toggle navigation" aria-expanded="false"> <span class="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5 transition-all duration-300 transform group-aria-expanded:rotate-45 group-aria-expanded:translate-y-2"></span> <span class="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5 transition-all duration-300 opacity-100 group-aria-expanded:opacity-0"></span> <span class="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 transform group-aria-expanded:-rotate-45 group-aria-expanded:-translate-y-2"></span> </button> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="lg:hidden bg-gray-100/95 dark:bg-gray-800/95 overflow-hidden transition-all duration-500 ease-in-out max-h-0 shadow-lg backdrop-blur-sm" aria-hidden="true"> <div class="px-4 py-2 space-y-1"> <a href="/" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg> <span>Home</span> </a> <a href="/about" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span>About</span> </a> <!-- Simple Products link (no dropdown) --> <a href="/products" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path> </svg> <span>Products</span> </a> <a href="/blog" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> <span>Blog</span> </a> <a href="/insights" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> <span>Insights</span> </a> <a href="/contact" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>Contact</span> </a> </div> <!-- Mobile Contact Info --> <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700"> <div class="space-y-2"> <!-- Email --> <a href="mailto:sales@unvdubai.com" class="flex items-center text-gray-700 dark:text-gray-300 text-sm"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
sales@unvdubai.com
</a> <!-- Phone --> <a href="tel:+971552929644" class="flex items-center text-gray-700 dark:text-gray-300 text-sm"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
+971552929644
</a> <!-- Social Media Links --> <div class="flex space-x-4 pt-2"> <a href="https://www.linkedin.com/company/univiewuae/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a href="https://g.co/kgs/yq4CrN8" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="w-5 h-5"> <path fill="#4285F4" d="M533.5 278.4c0-17.5-1.6-35.3-5.2-52.2H272v98.8h146.9c-6.4 34.2-25.7 63.2-54.9 82.6l89 69.2c52-48 80.5-118.8 80.5-198.4z"></path> <path fill="#34A853" d="M272 544.3c73.6 0 135.3-24.4 180.4-66.4l-89-69.2c-24.8 16.5-56.6 26-91.4 26-70.1 0-129.4-47.2-150.7-110.5H28.1v69.5C73.4 475.1 166.5 544.3 272 544.3z"></path> <path fill="#FBBC05" d="M121.3 324.2c-10.3-30.3-10.3-63.1 0-93.4v-69.5H28.1c-34.4 68.7-34.4 153.7 0 222.4l93.2-59.5z"></path> <path fill="#EA4335" d="M272 107.6c39.9 0 75.8 13.7 104 40.7l77.8-77.8C407.3 24.6 345.6 0 272 0 166.5 0 73.4 69.2 28.1 162.8l93.2 69.5C142.6 154.8 201.9 107.6 272 107.6z"></path> </svg> </a> </div> </div> </div> </div></nav> <!-- Spacer to offset fixed navbar --> <div class="mt-16 sm:mt-14"></div>  <script>
    document.addEventListener('DOMContentLoaded', () => {
        const nav = document.getElementById('main-nav');
        const toggleButton = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Get all the nav links (both desktop and mobile)
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        // Set active link based on current URL
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Check for exact match or starts with (for nested pages)
            // Fixed condition for home page - special handling for both "/" and "/home"
            if ((href === '/' && (currentPath === '/' || currentPath === '/home')) || 
                (href !== '/' && currentPath.startsWith(href) && href !== '')) {
                link.classList.add('active');
                
                // For mobile nav links, also highlight the icon
                if (link.classList.contains('mobile-nav-link')) {
                    const icon = link.querySelector('.mobile-nav-icon');
                    if (icon) {
                        icon.classList.add('text-blue-600', 'dark:text-blue-400');
                    }
                }
            }
        });

        // Toggle mobile menu with improved height calculation
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            toggleButton.setAttribute('aria-expanded', String(!isExpanded));
            
            if (!isExpanded) {
                mobileMenu.setAttribute('aria-hidden', 'false');
                // Calculate the full height of the menu
                mobileMenu.style.display = 'block';
                const height = mobileMenu.scrollHeight;
                mobileMenu.style.display = '';
                // Set the calculated height
                mobileMenu.style.maxHeight = height + 'px';
            } else {
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenu.style.maxHeight = '0';
            }
        });

        // Fix for desktop dropdown menus
        const dropdownItems = document.querySelectorAll('.group\\\\/dropdown');
        dropdownItems.forEach(item => {
            // Get the dropdown menu element
            const dropdownMenu = item.querySelector('.dropdown-menu');
            
            // Ensure visibility on hover
            item.addEventListener('mouseenter', () => {
                if (dropdownMenu) {
                    dropdownMenu.classList.add('opacity-100', 'visible');
                    dropdownMenu.classList.remove('opacity-0', 'invisible');
                   
                }
            });
            
            // Reset on mouse leave
            item.addEventListener('mouseleave', () => {
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('opacity-100', 'visible');
                    dropdownMenu.classList.add('opacity-0', 'invisible');
                
                }
            });
        });

        // Close menu when clicking on links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                toggleButton.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenu.style.maxHeight = '0';
            });
        });

        // Add shadow on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-lg', 'bg-gray-200', 'dark:bg-gray-900');
                nav.classList.remove('shadow-sm', 'bg-gray-200/90', 'dark:bg-gray-900/90');
            } else {
                nav.classList.remove('shadow-lg', 'bg-gray-200', 'dark:bg-gray-900');
                nav.classList.add('shadow-sm', 'bg-gray-200/90', 'dark:bg-gray-900/90');
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                // Reset mobile menu state on desktop view
                toggleButton.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenu.style.maxHeight = '0';
            }
        });
    });
<\/script>`], ["<!-- Fixed Navigation Bar -->", '<nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-gray-200/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300 shadow-sm"> <div class="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3"> <!-- Logo --> <a href="/" class="flex items-center group"> ', ' </a> <!-- Contact Info - Desktop --> <!-- Desktop Navigation --> <div class="hidden lg:flex flex-1 justify-center"> <ul class="flex space-x-10 xl:space-x-8 text-base items-center"> <li> <a href="/" class="nav-link"> <span class="nav-link-text">Home</span> </a> </li> <li> <a href="/about" class="nav-link"> <span class="nav-link-text">About</span> </a> </li> <li class="relative group/dropdown"> <!-- Main Products Navigation Link --> <a href="/products" class="nav-link flex items-center px-3 py-2.5 rounded-lg transition-all duration-200  dark:group-hover/dropdown:bg-gray-800/50"> <span class="nav-link-text mr-1">Products</span> <svg class="w-4 h-4 transition-transform duration-200 group-hover/dropdown:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </a> <!-- Mega Dropdown Menu - Only visible on hover --> <div class="fixed left-0 right-0 mt-2 mx-auto w-full max-w-7xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl opacity-0 invisible transition-all duration-300 z-50 border border-gray-200 dark:border-gray-700 group-hover/dropdown:opacity-100 group-hover/dropdown:visible translate-y-1 group-hover/dropdown:translate-y-0 overflow-hidden" id="dropdown-container"> <div class="grid grid-cols-4 h-[80vh] overflow-y-auto"> <!-- Left Sidebar - Categories --> <div class="col-span-1 bg-gray-50 dark:bg-gray-700/30 p-5 border-r border-gray-200 dark:border-gray-700"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-5">Product Categories</h3> <ul class="space-y-2"> <li class="group/category"> <a href="/categories/ip-cameras" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="ip-cameras"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg>\nNetwork Cameras\n</a> </li> <li class="group/category"> <a href="/categories/analog-cameras" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="analog-cameras"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg>\nAnalog Cameras\n</a> </li> <li class="group/category"> <a href="/categories/ptz-cameras" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="ptz-cameras"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path> </svg>\nPTZ Cameras\n</a> </li> <li class="group/category"> <a href="/categories/dvr" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300 font-medium dropdown-category" data-category="dvr"> <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path> </svg>\nDVR Systems\n</a> </li> </ul> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"> ', ` </div> </div> <!-- Main Content Area --> <div class="col-span-3 p-8 overflow-y-auto" id="dropdown-content-container"> <!-- Dynamic content will load here based on selected category --> </div> </div> </div>  </li> <template id="network-cameras-content"> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured Network Cameras
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/ip-cameras/ipc2122lb-af2840-a2" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ip-cameras/IPC2122LB-AF28(40)-A2/Network4 (1).png" alt="IPC2122LB-AF28(40)A2" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC2122LB-AF28(40)A2</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">2MP Cam with Human Detection, H.265, 30m IR.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">Best Seller</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">2 MP</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/ip-cameras/ipc8544ea-km-i1" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ip-cameras/IPC8544EA-KM-I1/Network2 (3).png" alt="UAC-T142-AF2840LM-DL" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC8544EA-KM-I1</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">16MP LightHunter OmniView Fixed IR Network Camera.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">16 MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">512 GB</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/ip-cameras" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All Network Cameras</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
            from { 
                opacity: 0;
                transform: translateY(10px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fade-in {
            animation: fade-in 0.7s ease-out forwards;
        }
        
        .animate-fade-in-up {
            animation: fade-in-up 0.7s ease-out forwards;
        }
    </style> </template> <!-- Add similar templates for other categories --><template id="analog-cameras-content"> <!-- Featured Product Section --> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured Analog Cameras
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/analog-cameras/uac-b115-af2840-w" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/analog-cameras/UAC-B115-AF28(40)-W.png" alt="UAC-B115-AF2840-W" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">UAC-B115-AF2840-W</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">5MP ColorHunter Bullet with 24/7 color.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">5MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">N/A</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/analog-cameras/uac-t142-af2840lm-dl" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/analog-cameras/UAC-T142-AF28LM-DL/UAC-T142-AF28(40)LM-DL1.png" alt="UAC-T142-AF2840LM-DL" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">UAC-T142-AF2840LM-DL</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">2MP ColorHunter Turret with dual light.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">2 MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">N/A</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/analog-cameras" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All Analog Cameras</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
            from { 
                opacity: 0;
                transform: translateY(10px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fade-in {
            animation: fade-in 0.7s ease-out forwards;
        }
        
        .animate-fade-in-up {
            animation: fade-in-up 0.7s ease-out forwards;
        }
    </style> </template> <!-- PTZ Cameras Content --> <template id="ptz-cameras-content"> <!-- Featured Product Section --> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured PTZ Cameras
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/ptz-cameras/ipc6325lfw-ax5c-vg" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ptz-cameras/IPC6325LFW-AX5C-VG/IPC6325LFW-AX5C-VG1.png" alt="IPC6325LFW-AX5C-VG" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC6325LFW-AX5C-VG</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">5MP 5X ColorHunter Tri-Guard Dual-light Network PTZ Camera</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">5MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">512 GB</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/ptz-cameras/ipc7628el-l-x41-vh1" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/ptz-cameras/IPC7628EL-L-X41-VH1/IPC7628EL-L-X41-VH12.png" alt="IPC7628EL-L-X41-VH1" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">IPC7628EL-L-X41-VH1</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">8MP 41X PTZ with smart features and 1000m IR.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">8 MP</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">256 GB</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/ptz-cameras" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All PTZ Cameras</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from { 
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.7s ease-out forwards;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.7s ease-out forwards;
                }
            </style> </template> <!-- DVR Systems Content --> <template id="dvr-systems-content"> <!-- Featured Product Section --> <div class="mb-8"> <!-- Title with fade-in transition --> <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-all duration-700 ease-out opacity-0 animate-fade-in [animation-fill-mode:forwards]">
Featured DVR Systems
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <!-- Featured Product 1 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:100ms]"> <a href="/categories/dvr/xvr301-04u3-p4" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/dvr/XVR301-04U3-P4/XVR301-04U3-P4.png" alt="IPC6325LFW-AX5C-VG" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">XVR301-04U3-P4</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">4 HDDs 32-Ch 2U Digital Video Recorder.</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">4 HDD</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">32 Channel BNC Input</span> </div> </div> </a> </div> <!-- Featured Product 2 - with staggered animation --> <div class="group/featured transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:-translate-y-1 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] [animation-delay:200ms]"> <a href="/categories/dvr/xvr301-f-series" class="block"> <div class="relative h-56 w-full mb-3 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 group-hover/featured:shadow-md"> <img src="/images/categories/products/dvr/XVR301-04F/XVR301-F Series.png" alt="IPC7628EL-L-X41-VH1" class="absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover/featured:scale-105 group-hover/featured:rotate-1"> <div class="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-500 ease-in-out"></div> <div class="absolute bottom-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium translate-y-8 opacity-0 group-hover/featured:opacity-100 group-hover/featured:translate-y-0 transition-all duration-500 ease-out">View Details</div> </div> <div class="px-1"> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors duration-300 ease-in-out">XVR301-F Series</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-1 transition-all duration-500 ease-in-out group-hover/featured:translate-x-1">1 HDD 4-Ch 1U Digital Video Recorder</p> <div class="flex items-center space-x-1"> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">1 HDD</span> <span class="inline-block px-1.5 py-0.5 text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full transition-all duration-300 ease-in-out group-hover/featured:scale-105 group-hover/featured:-translate-y-0.5">16 Channel BNC Input</span> </div> </div> </a> </div> </div> <!-- View All button with delayed animation --> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-all duration-300 hover:border-blue-400/30 opacity-0 animate-fade-in [animation-fill-mode:forwards] [animation-delay:300ms]"> <a href="/categories/dvr" class="group inline-flex items-center justify-center px-5 py-2 relative overflow-hidden rounded-md text-sm font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"> <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-600"></span> <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span> <span class="relative flex items-center"> <span class="mr-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1">View All DVR Systems</span> <svg class="w-4 h-4 transform transition-all duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </div> </div> <style>
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes fade-in-up {
                    from { 
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.7s ease-out forwards;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.7s ease-out forwards;
                }
            </style> </template> <!-- JavaScript to handle dynamic content loading -->  <!-- End of Products dropdown --> <li> <a href="/blog" class="nav-link"> <span class="nav-link-text">Blog</span> </a> </li> <li> <a href="/insights" class="nav-link"> <span class="nav-link-text">Insights</span> </a> </li> <li> <a href="/contact" class="nav-link"> <span class="nav-link-text">Contact</span> </a> </li> </ul> </div> <div class="hidden lg:flex items-center space-x-6"> <!-- Email --> <a href="mailto:sales@unvdubai.com" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span class="text-sm">sales@unvdubai.com</span> </a> <!-- Phone --> <a href="tel:+971552929644" class="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-sm">+971552929644</span> </a> <!-- Social Media Links --> <div class="flex items-center space-x-3 ml-2"> <!-- LinkedIn --> <a href="https://www.linkedin.com/company/univiewuae/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <!-- Google (Business/Reviews) --> <a href="https://g.co/kgs/yq4CrN8" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="w-5 h-5"> <path fill="#4285F4" d="M533.5 278.4c0-17.5-1.6-35.3-5.2-52.2H272v98.8h146.9c-6.4 34.2-25.7 63.2-54.9 82.6l89 69.2c52-48 80.5-118.8 80.5-198.4z"></path> <path fill="#34A853" d="M272 544.3c73.6 0 135.3-24.4 180.4-66.4l-89-69.2c-24.8 16.5-56.6 26-91.4 26-70.1 0-129.4-47.2-150.7-110.5H28.1v69.5C73.4 475.1 166.5 544.3 272 544.3z"></path> <path fill="#FBBC05" d="M121.3 324.2c-10.3-30.3-10.3-63.1 0-93.4v-69.5H28.1c-34.4 68.7-34.4 153.7 0 222.4l93.2-59.5z"></path> <path fill="#EA4335" d="M272 107.6c39.9 0 75.8 13.7 104 40.7l77.8-77.8C407.3 24.6 345.6 0 272 0 166.5 0 73.4 69.2 28.1 162.8l93.2 69.5C142.6 154.8 201.9 107.6 272 107.6z"></path> </svg> </a> </div> </div> <!-- Mobile Menu Button --> <button id="menu-toggle" class="lg:hidden flex flex-col h-10 w-10 rounded justify-center items-center group focus:outline-none" aria-label="Toggle navigation" aria-expanded="false"> <span class="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5 transition-all duration-300 transform group-aria-expanded:rotate-45 group-aria-expanded:translate-y-2"></span> <span class="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 mb-1.5 transition-all duration-300 opacity-100 group-aria-expanded:opacity-0"></span> <span class="w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-all duration-300 transform group-aria-expanded:-rotate-45 group-aria-expanded:-translate-y-2"></span> </button> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="lg:hidden bg-gray-100/95 dark:bg-gray-800/95 overflow-hidden transition-all duration-500 ease-in-out max-h-0 shadow-lg backdrop-blur-sm" aria-hidden="true"> <div class="px-4 py-2 space-y-1"> <a href="/" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg> <span>Home</span> </a> <a href="/about" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> <span>About</span> </a> <!-- Simple Products link (no dropdown) --> <a href="/products" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path> </svg> <span>Products</span> </a> <a href="/blog" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path> </svg> <span>Blog</span> </a> <a href="/insights" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> <span>Insights</span> </a> <a href="/contact" class="mobile-nav-link"> <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>Contact</span> </a> </div> <!-- Mobile Contact Info --> <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700"> <div class="space-y-2"> <!-- Email --> <a href="mailto:sales@unvdubai.com" class="flex items-center text-gray-700 dark:text-gray-300 text-sm"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
sales@unvdubai.com
</a> <!-- Phone --> <a href="tel:+971552929644" class="flex items-center text-gray-700 dark:text-gray-300 text-sm"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
+971552929644
</a> <!-- Social Media Links --> <div class="flex space-x-4 pt-2"> <a href="https://www.linkedin.com/company/univiewuae/posts/?feedView=all" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a href="https://g.co/kgs/yq4CrN8" target="_blank" rel="noopener noreferrer" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="w-5 h-5"> <path fill="#4285F4" d="M533.5 278.4c0-17.5-1.6-35.3-5.2-52.2H272v98.8h146.9c-6.4 34.2-25.7 63.2-54.9 82.6l89 69.2c52-48 80.5-118.8 80.5-198.4z"></path> <path fill="#34A853" d="M272 544.3c73.6 0 135.3-24.4 180.4-66.4l-89-69.2c-24.8 16.5-56.6 26-91.4 26-70.1 0-129.4-47.2-150.7-110.5H28.1v69.5C73.4 475.1 166.5 544.3 272 544.3z"></path> <path fill="#FBBC05" d="M121.3 324.2c-10.3-30.3-10.3-63.1 0-93.4v-69.5H28.1c-34.4 68.7-34.4 153.7 0 222.4l93.2-59.5z"></path> <path fill="#EA4335" d="M272 107.6c39.9 0 75.8 13.7 104 40.7l77.8-77.8C407.3 24.6 345.6 0 272 0 166.5 0 73.4 69.2 28.1 162.8l93.2 69.5C142.6 154.8 201.9 107.6 272 107.6z"></path> </svg> </a> </div> </div> </div> </div></nav> <!-- Spacer to offset fixed navbar --> <div class="mt-16 sm:mt-14"></div>  <script>
    document.addEventListener('DOMContentLoaded', () => {
        const nav = document.getElementById('main-nav');
        const toggleButton = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        // Get all the nav links (both desktop and mobile)
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        // Set active link based on current URL
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Check for exact match or starts with (for nested pages)
            // Fixed condition for home page - special handling for both "/" and "/home"
            if ((href === '/' && (currentPath === '/' || currentPath === '/home')) || 
                (href !== '/' && currentPath.startsWith(href) && href !== '')) {
                link.classList.add('active');
                
                // For mobile nav links, also highlight the icon
                if (link.classList.contains('mobile-nav-link')) {
                    const icon = link.querySelector('.mobile-nav-icon');
                    if (icon) {
                        icon.classList.add('text-blue-600', 'dark:text-blue-400');
                    }
                }
            }
        });

        // Toggle mobile menu with improved height calculation
        toggleButton.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            toggleButton.setAttribute('aria-expanded', String(!isExpanded));
            
            if (!isExpanded) {
                mobileMenu.setAttribute('aria-hidden', 'false');
                // Calculate the full height of the menu
                mobileMenu.style.display = 'block';
                const height = mobileMenu.scrollHeight;
                mobileMenu.style.display = '';
                // Set the calculated height
                mobileMenu.style.maxHeight = height + 'px';
            } else {
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenu.style.maxHeight = '0';
            }
        });

        // Fix for desktop dropdown menus
        const dropdownItems = document.querySelectorAll('.group\\\\\\\\/dropdown');
        dropdownItems.forEach(item => {
            // Get the dropdown menu element
            const dropdownMenu = item.querySelector('.dropdown-menu');
            
            // Ensure visibility on hover
            item.addEventListener('mouseenter', () => {
                if (dropdownMenu) {
                    dropdownMenu.classList.add('opacity-100', 'visible');
                    dropdownMenu.classList.remove('opacity-0', 'invisible');
                   
                }
            });
            
            // Reset on mouse leave
            item.addEventListener('mouseleave', () => {
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('opacity-100', 'visible');
                    dropdownMenu.classList.add('opacity-0', 'invisible');
                
                }
            });
        });

        // Close menu when clicking on links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                toggleButton.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenu.style.maxHeight = '0';
            });
        });

        // Add shadow on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-lg', 'bg-gray-200', 'dark:bg-gray-900');
                nav.classList.remove('shadow-sm', 'bg-gray-200/90', 'dark:bg-gray-900/90');
            } else {
                nav.classList.remove('shadow-lg', 'bg-gray-200', 'dark:bg-gray-900');
                nav.classList.add('shadow-sm', 'bg-gray-200/90', 'dark:bg-gray-900/90');
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                // Reset mobile menu state on desktop view
                toggleButton.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                mobileMenu.style.maxHeight = '0';
            }
        });
    });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Digital Link Technology", "width": 120, "height": 40, "class": "h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" }), renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Digital Link Technology", "width": 120, "height": 40, "class": "h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" }));
}, "C:/Users/sanalemba/UNV-Dubai/src/components/Navbar.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-S419ZWENMS"><\/script> <script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S419ZWENMS');
<\/script> <!-- Google Tag Manager --><!-- End Google Tag Manager -->`])));
}, "C:/Users/sanalemba/UNV-Dubai/src/components/GoogleAnalytics.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://unvdubai.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, structuredData, keywords } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap" href="/sitemap-index.xml"><meta name="robots" content="index, follow"><link rel="icon" type="image/png" href="/favicon.png">${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, {})}${structuredData && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData)))}${renderComponent($$result, "SEO", $$SEO, { "title": title ?? "UNV Authorized distributor in Dubai,U.A.E", "description": description ?? "unvdubai is an authorized distributor of UNV products in Dubai, UAE", "canonical": canonicalURL, "openGraph": {
    basic: {
      title: title ?? "UNV Authorized distributor in Dubai,U.A.E",
      type: "article",
      image: "https://unvdubai.com/digi.png"
    },
    optional: {
      description: description ?? "Unvdubai is an authorized distributor of UNV products in Dubai, UAE",
      siteName: "unv distributor in Dubai",
      locale: "en_Us"
    }
  }, "twitter": {
    card: "summary_large_image",
    creator: "@unvdubai",
    site: "@Unvdubai",
    title: title ?? "UNV Authorized distributor in Dubai,U.A.E",
    image: "https://unvdubai.com/digi.png",
    imageAlt: "unvdubai",
    description: description ?? "unvdubai is an authorized distributor of UNV products in Dubai, UAE."
  }, "extend": {
    meta: [
      {
        name: "keywords",
        content: "UNV distributor, Dubai, UAE, surveillance, security" + keywords
      },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "Author", content: "Digiimpact" },
      {
        name: "organization",
        content: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "unvdubai",
          url: "https://unvdubai.com/",
          logo: "https://dubai-hikvision.com/logo.jpg",
          description: description ?? "unvdubai is an authorized distributor of UNV products in Dubai, UAE.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Market, Naif, Deira",
            addressLocality: "Dubai",
            addressRegion: "Dubai",
            postalCode: "123241",
            addressCountry: "AE"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971 4 224 1977",
            contactType: "Sales"
          }
        })
      }
    ]
  } })}${renderHead()}</head> <body class="dark:bg-neutral-800"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Content Container --> <div class="mx-auto px-4 sm:px-6 lg:px-8"> <main> ${renderSlot($$result, $$slots["default"])} </main> </div> <!-- Footer Section --> ${renderComponent($$result, "FooterSection", $$FooterSection, {})} </body></html>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/layouts/Layout.astro", undefined);

export { $$Layout as $, $$Image as a };
