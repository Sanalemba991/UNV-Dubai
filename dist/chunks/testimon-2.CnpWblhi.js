import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":2,"content":"UNV Dubai Technology has been our trusted partner for all our security system needs. Their professionalism, expertise, and dedication to customer satisfaction are unparalleled. From helping us choose the right products to providing seamless installation and support, they have consistently exceeded our expectations. I highly recommend UNV Dubai Technology to anyone in need of top-notch security solutions.","author":"Ahmed Salih","role":"Security Analyst","avatarSrc":"../../assets/images/testimonial/digiimpact.avif","avatarAlt":"digital link technology"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/testimonials/testimon-2.md";
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
