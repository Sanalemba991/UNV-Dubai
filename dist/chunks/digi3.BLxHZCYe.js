import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Haneefa Aboobakker","title":"Channel Accounts Manager","avatar":{"src":"../../assets/images/haneefa.png","alt":"Digi Haneefa"},"publishDate":"2022-11-07 15:39"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/teams/digi3.md";
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
