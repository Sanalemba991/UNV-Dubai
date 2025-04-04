async function getMod() {
						return import('./NVR501-04B-P4-A.SeeAU5LL.js');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
