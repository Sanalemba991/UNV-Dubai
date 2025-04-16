async function getMod() {
						return import('./IPC3222SS-ADF40K-I1.Ckb3KS5X.js');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const collectedScripts = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts };

export { defaultMod as default };
