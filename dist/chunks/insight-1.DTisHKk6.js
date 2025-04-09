import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DWt4ZQvO.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":1,"pubDate":"2024-03-19T00:00:00.000Z","title":"4K HD Intelligent ColorHunter Fixed Bullet Network Camera ","description":"Experience the pinnacle of surveillance technology with the 4K HD Intelligent Color Hunter UNV Camera. Engineered to deliver unparalleled clarity, precision, and reliability, this cutting-edge camera redefines what's possible in video surveillance.","cardImage":"../../assets/images/insights/uni.jpeg","cardImageAlt":"Top view mechanical tools arrangement","contents":["High quality image with 8MP,1/1.8CMOS sensor","3840*2160@30fps in the main stream","Ultra 265, H.265, H.264, MJPEG","Smart intrusion prevention, support false alarm filtering, include Cross Line, Intrusion, Enter Area, Leave Area detection","LightHunter technology ensures ultra-high image quality in low illumination environment","Up to 120 dB Optical WDR (Wide Dynamic Range)","Audio 1 in and 1 out, Alarm 2 in and 1 out","Smart IR, up to 100m(328ft) IR distance"]};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/insights/insight-1.md";
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
