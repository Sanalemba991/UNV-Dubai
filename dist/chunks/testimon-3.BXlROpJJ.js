import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":3,"content":"As a business owner, security is a top priority for me. That's why I chose UNV Dubai Technology to provide surveillance cameras and access control systems for my premises. Their team took the time to understand my specific requirements and recommended the perfect solution to meet my needs and budget. The installation was smooth, and the after-sales support has been excellent. I can't thank UNV Dubai Technology enough for giving me peace of mind knowing that my business is well-protected.","author":"Jacob Thomas","role":"Sales Director","avatarSrc":"../../assets/images/gafoor2.jpeg","avatarAlt":"UNV Dubai technology"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/testimonials/testimon-3.md";
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
