import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://unvdubai.com");
const $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const { title, description, imageUrl, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="group relative block overflow-hidden rounded-lg"> <div class="relative h-64"> <!-- Overlay text that appears on hover --> <div class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 z-10"> <h3 class="text-2xl font-semibold text-white text-center px-4"> ${title} </h3> </div> <!-- Image --> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"> </div> <div class="bg-white dark:bg-neutral-800 p-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> ${title} </h3> <p class="mt-1 text-gray-500 dark:text-gray-400"> ${description} </p> </div> </a>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/CategoryCard.astro", undefined);

export { $$CategoryCard as $ };
