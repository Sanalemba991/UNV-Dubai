import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"UAC-T112-F28-W-X","description":"2MP ColourHunter Fixed Turret Analog Camera.","image":"/images/categories/products/analog-cameras/UAC-T112-F28-W-X/UAC-T112-F28-W-X2.png","images":[{"url":"/images/categories/products/analog-cameras/UAC-T112-F28-W-X/UAC-T112-F28-W-X.png","caption":"Front view"},{"url":"/images/categories/products/analog-cameras/UAC-T112-F28-W-X/UAC-T112-F28-W-X1.png","caption":"Side view"},{"url":"/images/categories/products/analog-cameras/UAC-T112-F28-W-X/UAC-T112-F28-W-X2.png","caption":"Back view"}],"features":["2MP high quality image","TVI/AHD/CVI/CVBS","Supports white light illumination, 24/7 full-color imaging","Supports 180° horizontal flip, 180° vertical flip","OSD configuration menu, easy to operate","IP67 waterproof and dustproof design, high reliability","OSD configuration menu in 11 languages","3D noise reduction technology delivers clean and sharp images","3-Axis"],"price":"Contact Sales","specifications":{"sensor":"1/3.0\" CMOS","resolution":"\t1080P: 1920(H)×1080(V) 720P: 1280(H) ×720(V)","focalLength":"N/A","irRange":"N/A","powerSupply":"\tDC 12 V±25%","protection":"IP67","storage":"N/A","dimensions":"\tΦ118mm*96mm (diameter*height)"},"certifications":["CE-EMC","FCC","CE-LVD","CE-RoHS","WEEE"]};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/analog-cameras/UAC-T112-F28-W-X.md";
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
