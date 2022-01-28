/** @param {NS} ns **/
export async function main(ns) {
	var i;
	for (i = 2; i > 1; i++) {
		while (true) {
			await ns.share();
		}
	}
}