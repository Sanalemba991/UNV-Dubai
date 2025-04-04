import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"SSD-256G-P3-M2","description":"256GB PCIe 3.0 NVMe SSD designed for high-performance storage applications with fast read/write speeds and reliable TLC storage technology","image":"/images/categories/products/storage/SSD-256G-P3-M2.png","features":["High-speed PCIe 3.0 x4 interface","Fast 3100MB/s sequential read speeds","1300MB/s sequential write performance","Reliable TLC NAND flash memory","128TB Total Bytes Written (TBW) endurance","Compact M.2 form factor","Ideal for enterprise storage applications"],"specifications":{"capacity":"256GB","interface":"PCIe 3.0 x4","formFactor":"M.2","transferRate":"3100MB/s read, 1300MB/s write","reliability":"128TB TBW (Total Bytes Written)","powerConsumption":"Active: 5.5W, Idle: 0.5W","warranty":"3 years","dimensions":"80mm x 22mm x 3.5mm"},"price":"Contact Sales"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/storage/SSD-256G-P3-M2.md";
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
