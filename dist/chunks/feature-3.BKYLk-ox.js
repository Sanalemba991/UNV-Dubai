import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":3,"title":"Top dealer UNV cameras","body":"At UNV Dubai Technology, we're more than just a distributor we're your partner in security. With a comprehensive range of UNV and Dahua CCTV cameras, along with complete security solutions, we offer peace of mind through proactive protection. From installation to ongoing support, count on us for all your security needs.","icon":"../icons/hikvision.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-3.md";
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
