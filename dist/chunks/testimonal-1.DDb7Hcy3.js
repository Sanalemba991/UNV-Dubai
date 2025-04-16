import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":1,"content":"We've been UNV Dubai Technology's security systems for several years now, and we couldn't be happier with the results. The quality of their products is top-notch, and their customer service is second to none. Whenever we've had questions or needed assistance, their team has been there for us every step of the way. Thanks to UNV Dubai Technology, we feel confident that our properties are safe and secure.","author":"Raj Roy","role":"Project Manager","avatarSrc":"../../assets/images/ghh.jpeg","avatarAlt":"UNV Dubai technology"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/testimonials/testimonal-1.md";
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
