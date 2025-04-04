import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { a as $$Image, $ as $$Layout } from '../../chunks/Layout.CcPZnjuo.js';
import '@astrojs/internal-helpers/path';
/* empty css                                    */
import 'clsx';
import { g as getCollection } from '../../chunks/_astro_content.n6qxTNle.js';
export { renderers } from '../../renderers.mjs';

const $$Astro$4 = createAstro("https://unvdubai.com");
const $$AvatarBlogLarge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AvatarBlogLarge;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "size-10 rounded-full sm:h-14 sm:w-14", "src": blogEntry.data.authorImage, "alt": blogEntry.data.authorImageAlt, "draggable": "false", "format": "avif" })} </div>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ui/AvatarBlogLarge.astro", undefined);

function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}
function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const $$Astro$3 = createAstro("https://unvdubai.com");
const $$CardRelated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardRelated;
  const { blogEntry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="group relative block overflow-hidden rounded-xl outline-none transition-all duration-300 focus-visible:ring ring-zinc-500 dark:ring-zinc-200 border-2 border-zinc-300 dark:border-zinc-600 hover:border-blue-500 dark:hover:border-blue-400"${addAttribute(`/blog/${blogEntry.slug}/`, "href")} data-astro-prefetch data-astro-cid-pt4igzmd> <div class="overflow-hidden rounded-t-xl" data-astro-cid-pt4igzmd> ${renderComponent($$result, "Image", $$Image, { "class": "aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105", "src": blogEntry.data.cardImage, "alt": blogEntry.data.cardImageAlt, "draggable": "false", "format": "avif", "data-astro-cid-pt4igzmd": true })} <!-- Removed the gradient overlay --> </div> <div class="p-5" data-astro-cid-pt4igzmd> <!-- The title of the blog post --> <h3 class="text-balance text-xl font-medium text-neutral-800 group-hover:text-blue-500 dark:text-neutral-300 dark:group-hover:text-blue-300 transition-colors duration-300" data-astro-cid-pt4igzmd> ${blogEntry.data.title} </h3> <!-- The formatted publication date of the blog post --> <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400 opacity-80" data-astro-cid-pt4igzmd> <span class="inline-block transition-colors duration-300" data-astro-cid-pt4igzmd> ${formatDate(blogEntry.data.pubDate)} </span> </p> <!-- Simple read more text that changes color on hover --> <div class="mt-4" data-astro-cid-pt4igzmd> <span class="inline-flex items-center text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300 font-medium" data-astro-cid-pt4igzmd>
Read more
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-pt4igzmd> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-pt4igzmd></path> </svg> </span> </div> </div> </a> `;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/blogs/CardRelated.astro", undefined);

const $$Bookmark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button type="button" class="focus-visible:ring-secondary group inline-flex items-center rounded-lg p-2.5 text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus:outline-none focus-visible:outline-none focus-visible:ring-1 dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700" data-bookmark-button="bookmark-button"> <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-none transition duration-300"> <path stroke-linecap="round" stroke-linejoin="round" class="fill-current text-neutral-500 transition duration-300 group-hover:text-red-400 group-hover:dark:text-red-400" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path> </svg> </button> `;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ui/blog/Bookmark.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://unvdubai.com");
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { pageTitle } = Astro2.props;
  const socialPlatforms = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/share.php?u=${Astro2.url}&title=${pageTitle}`,
      svg: `<svg
          role="img"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="size-4 flex-shrink-0 fill-current"
          ><title>Facebook</title><path
            d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
          ></path></svg
        >`
    },
    {
      name: "X",
      url: `https://twitter.com/home/?status=${pageTitle}${Astro2.url}`,
      svg: `<svg
          role="img"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="size-4 flex-shrink-0 fill-current"
          ><title>X</title><path
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          ></path></svg
        >`
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${Astro2.url}&title=${pageTitle}`,
      svg: `<svg
          role="img"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="size-4 flex-shrink-0 fill-current"
          ><title>LinkedIn</title><path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          ></path></svg
        >`
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<div class="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:top-left]"> <button id="hs-dropup" type="button" class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg px-4 py-3 text-sm font-medium text-neutral-600 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 hover:text-neutral-700 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:outline-none"> <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 group-hover:text-neutral-700"> <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"></path> </svg>\nShare\n</button> <div class="hs-dropdown-menu duration z-10 hidden w-72 divide-y divide-neutral-200 rounded-lg bg-neutral-50 p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800" aria-labelledby="hs-dropup"> <div class="py-2 first:pt-0 last:pb-0"> ', ' </div> <div class="py-2 first:pt-0 last:pb-0"> <button type="button" class="js-clipboard hover:text-dark focus-visible:ring-secondary group inline-flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100 focus:outline-none focus-visible:outline-none focus-visible:ring-1 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" data-clipboard-success-text="Copied"> <svg class="js-clipboard-default h-4 w-4 transition group-hover:rotate-6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path> </svg> <svg class="js-clipboard-success text-primary-accent-light dark:text-primary-accent-dark hidden h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> <span class="js-clipboard-success-text">Copy link</span> </button> </div> </div> </div> <!--Import the necessary Dropdown and Clipboard plugins--> <!--https://preline.co/plugins/html/dropdown.html--> <script src="/scripts/vendor/preline/dropdown/index.js"><\/script> <!-- https://clipboardjs.com/ --> <script src="/scripts/vendor/clipboard.min.js"><\/script> <script>\n  // Initialization of Clipboard\n  (function () {\n    window.addEventListener("load", () => {\n      const $clipboards = document.querySelectorAll(".js-clipboard");\n      $clipboards.forEach((el) => {\n        const clipboard = new ClipboardJS(el, {\n          text: () => {\n            return window.location.href;\n          },\n        });\n        clipboard.on("success", () => {\n          const $default = el.querySelector(".js-clipboard-default");\n          const $success = el.querySelector(".js-clipboard-success");\n          const $successText = el.querySelector(".js-clipboard-success-text");\n          const successText = el.dataset.clipboardSuccessText || "";\n          let oldSuccessText;\n\n          if ($successText) {\n            oldSuccessText = $successText.textContent;\n            $successText.textContent = successText;\n          }\n          if ($default && $success) {\n            $default.style.display = "none";\n            $success.style.display = "block";\n          }\n\n          setTimeout(function () {\n            if ($successText && oldSuccessText)\n              $successText.textContent = oldSuccessText;\n            if ($default && $success) {\n              $success.style.display = "";\n              $default.style.display = "";\n            }\n          }, 800);\n        });\n      });\n    });\n  })();\n<\/script>'])), maybeRenderHead(), socialPlatforms.map((platform) => renderTemplate`<a class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-100  focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 "${addAttribute(platform.url, "href")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(platform.svg)}` })}
Share on ${platform.name} </a>`));
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ui/blog/SocialShare.astro", undefined);

const $$Astro$1 = createAstro("https://unvdubai.com");
const $$PostFeedback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostFeedback;
  const { title, firstChoice, secondChoice } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-12 flex items-center justify-center gap-x-2"> <h3 class="text-neutral-700 dark:text-neutral-300">${title}</h3> <button type="button" class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-800 hover:border-yellow-500 hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-500 dark:border-neutral-500 dark:text-neutral-50 dark:hover:bg-yellow-500 dark:hover:text-neutral-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"> <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path></svg> ${firstChoice} </button> <button type="button" class="group inline-flex items-center gap-x-2 rounded-lg border border-neutral-400 px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-400 dark:border-neutral-500 dark:text-neutral-50 dark:hover:bg-neutral-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"> <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-y-1 group-focus-visible:translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path></svg> ${secondChoice} </button> </div>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ui/blog/PostFeedback.astro", undefined);

const $$Astro = createAstro("https://unvdubai.com");
async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const allBlogPosts = await getCollection("blog");
  const relatedPosts = allBlogPosts.filter((blogEntry) => blogEntry.slug !== post.slug).slice(0, 4);
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.data.title} | UNV camera dubai` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 pb-12 pt-6 sm:pt-10 md:pt-12 lg:pt-16 transition-all duration-700 sm:px-6 lg:px-8 animate-[fadeIn_0.7s_ease-in-out]"> <div class="max-w-2xl mt-10 sm:mt-12 md:mt-0"> <!-- Author and date info with slide-in animation --> <div class="mb-6 flex items-center justify-between animate-[slideInRight_0.6s_ease-out]"> <div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3"> <div class="transition-transform duration-300 hover:scale-105"> ${renderComponent($$result2, "AvatarBlogLarge", $$AvatarBlogLarge, { "blogEntry": post })} </div> <div class="grow"> <div class="flex items-center justify-between gap-x-2"> <div> <div class="hs-tooltip inline-block [--placement:bottom] [--trigger:hover]"> <span class="font-bold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"> ${post.data.author} </span> </div> <ul class="text-xs text-neutral-500"> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${formatDate(post.data.pubDate)} </li> <li class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-neutral-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"> ${post.data.readTime} min read
</li> </ul> </div> </div> </div> </div> </div> <!-- Blog post title with gradient effect --> <h2 class="mb-3 text-2xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent transition-all duration-700 animate-[fadeInUp_0.8s_ease-out] dark:from-neutral-200 dark:to-neutral-400 md:text-3xl"> ${post.data.title} </h2> <!-- Blog post contents with staggered animations --> <div class="mb-5 space-y-5 md:mb-8 md:space-y-8"> ${post.data.contents.map((content, index) => index === 1 ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <p class="text-pretty text-lg text-neutral-700 dark:text-neutral-300 animate-[fadeInUp_0.7s_ease-out] [animation-delay:200ms] [animation-fill-mode:both]"> ${content} </p>  <div class="overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl animate-[fadeInUp_0.7s_ease-out] [animation-delay:400ms] [animation-fill-mode:both]"> <img class="w-full object-cover transition-transform duration-500 hover:scale-105 rounded-xl"${addAttribute(post.data.cardImage.src, "src")}${addAttribute(post.data.cardImageAlt, "alt")} draggable="false" width="800" height="450" loading="lazy"> </div> ` })}` : renderTemplate`<p${addAttribute(`text-pretty text-lg text-neutral-700 dark:text-neutral-300 animate-[fadeInUp_0.7s_ease-out] [animation-delay:${(index + 1) * 200}ms] [animation-fill-mode:both]`, "class")}> ${content} </p>`)} </div> <!-- Tags and social sharing with slide-up animation --> <div class="mx-auto grid max-w-screen-lg gap-y-5 sm:flex sm:items-center sm:justify-between sm:gap-y-0 animate-[fadeInUp_0.7s_ease-out] [animation-delay:600ms] [animation-fill-mode:both]"> <!-- Blog post tags with hover effect --> <div class="flex flex-wrap gap-x-2 gap-y-1 sm:flex-nowrap sm:items-center sm:gap-y-0"> ${post.data.tags?.map((tag) => renderTemplate`<span class="inline-flex items-center gap-x-1.5 rounded-lg bg-neutral-400/30 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-all duration-300 hover:bg-neutral-400/50 hover:scale-105 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring dark:bg-neutral-700/60 dark:text-neutral-300 dark:hover:bg-neutral-700/80"> ${capitalize(tag)} </span>`)} </div> <!-- Bookmark and Share buttons with hover effects --> <div class="flex items-center justify-end gap-x-1.5"> <div class="transition-transform duration-300 hover:scale-110"> ${renderComponent($$result2, "Bookmark", $$Bookmark, {})} </div> <div class="mx-3 block h-4 border-e border-neutral-400 dark:border-neutral-500"></div> <div class="inline-flex transition-transform duration-300 hover:scale-110"> ${renderComponent($$result2, "SocialShare", $$SocialShare, { "pageTitle": post.data.title })} </div> </div> </div> </div> <!-- Post feedback section with delay animation --> <div class="animate-[fadeIn_0.7s_ease-out] [animation-delay:800ms] [animation-fill-mode:both] mt-8 sm:mt-10"> ${renderComponent($$result2, "PostFeedback", $$PostFeedback, { "title": "Was this post helpful?", "firstChoice": "Yes", "secondChoice": "No" })} </div> </section>  ${relatedPosts.length > 0 && renderTemplate`<section class="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 animate-[fadeIn_1s_ease-out] [animation-delay:1000ms] [animation-fill-mode:both] mt-12 sm:mt-16"> <div class="mb-10 max-w-2xl"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent dark:from-neutral-200 dark:to-neutral-400">
Related articles
</h2> </div> <!-- Related posts grid with staggered animations --> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2"> ${relatedPosts.map((entry, i) => renderTemplate`<div${addAttribute(`transition-all duration-500 hover:scale-[1.03] hover:shadow-lg rounded-xl animate-[fadeInUp_0.7s_ease-out] [animation-delay:${(i + 1) * 200 + 1e3}ms] [animation-fill-mode:both]`, "class")}> ${renderComponent($$result2, "CardRelated", $$CardRelated, { "blogEntry": entry })} </div>`)} </div> </section>`} <div class="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-neutral-900 opacity-50"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)]"></div> </div>   ` })}`;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/blog/[...slug].astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
