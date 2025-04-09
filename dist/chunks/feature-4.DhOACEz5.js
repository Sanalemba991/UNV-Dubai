import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DWt4ZQvO.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":4,"title":"Authorized dealer UNV","body":"Invest in the best with UNV cameras, designed to meet the highest standards of reliability and performance. Our surveillance solutions empower you to keep a watchful eye on your property, whether you're at home or away. With UNV, you can trust that your security is in capable hands.","icon":"../icons/magvi.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-4.md";
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
