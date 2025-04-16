import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":5,"title":"UNV camera supplier in Dubai","body":"UNV Dubai Technology seamlessly integrates various data, audio, and video signals over a single cable, eliminating the need for multiple cables and connectors. This streamlined approach simplifies installation processes and reduces clutter, resulting in cost savings and enhanced aesthetics.","icon":"../icons/western.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-5.md";
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
