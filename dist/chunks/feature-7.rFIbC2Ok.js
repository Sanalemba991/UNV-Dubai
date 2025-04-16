import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":7,"title":"Best service for UNV camera","body":"UNV cameras offer more than just surveillance they offer peace of mind. With advanced features like high-definition imaging and remote monitoring capabilities, UNV cameras empower you to stay connected and informed, no matter where you are. Trust UNV for reliable security solutions you can depend on.","icon":"../icons/unvicon.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-7.md";
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
