import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DWt4ZQvO.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Mashhod M.K","title":"Chief Operating Officer","avatar":{"src":"../../assets/images/Mashood-1.png","alt":"Mashsood Digital link"},"publishDate":"2022-11-07 15:39"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/teams/digi.md";
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
