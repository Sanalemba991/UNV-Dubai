import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, h as renderSlot } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://unvdubai.com");
const $$Sections = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sections;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/Sections.astro", undefined);

export { $$Sections as $ };
