import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":3,"slider":"../slider/3.webp","sliderAlt":"seamless Integration:"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/slider/slider-3.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
