/** @param {NS} ns **/
export async function main(ns) {
	//server list// 
	var servers = ["n00dles", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "silver-helix", "netlink", "omega-net", "johnson-ortho", "summit-uni", "rho-construction", "aerocorp", "alpha-ent", "galactic-cyber", "global-pharm", "millenium-fitness", "nectar-net", "neo-net", "comptek", "rothman-uni", "syscore", "I.I.I.I", "lexo-corp", "crush-fitness", "avmnite-02h", "zb-institute", "catalyst", "aevum-police", "zer0", "phantasy", "the-hub", "foodnstuff", "CSEC", "snap-fitness", "unitalife", "solaris", "zeus-med", "univ-energy", "deltaone", "icarus", "omnia", "defcomm", "taiyang-digital", "zb-def", "nova-med", "titan-labs", "applied-energetics", "microdyne", "run4theh111z", "fulcrumtech", "stormtech", "helios", "vitalife", "kuai-gong", ".", "omnitek", "4sigma", "clarkinc", "powerhouse-fitness", "b-and-a", "blade", "nwo", "ecorp", "megacorp", "fulcrumassets", "The-Cave"];
	var amount = xxxx // change xxxx with amount of threads the script should use
	//release the bull begin//
	ns.tprint("------------------------")
	ns.tprint("|    created by Ant    |")
	ns.tprint("|      weakenall.js    |")
	ns.tprint("|   weak, grow, hack   |")
	ns.tprint("|     threads: xxxx    |")
	ns.tprint("------------------------")
	//------------------------------------------------------------------------------------------------------------------------//
	var i; //defines i
	for (i = 0; i < servers.length; i++)  //servers.length
	{	var hackTime = (ns.getHackTime(servers[i]));
		var growTime = (ns.getGrowTime(servers[i]));
		var weakenTime = (ns.getWeakenTime(servers[i]));
		if (ns.getServerMoneyAvailable(servers[i]) == (ns.getServerMaxMoney(servers[i]))) 
		{
			if (ns.getServerSecurityLevel(servers[i]) == (ns.getServerMinSecurityLevel(servers[i]))) 
			{
				await ns.hack((servers[i]), { threads: (amount) });
			} 
			else 
			{
			await ns.weaken((servers[i]), { threads: (amount) });//decrease with 0.050
			}
		}
		else
		{await ns.grow((servers[i]), { threads: (amount) });}
		while (ns.getServerSecurityLevel(servers[i]) > (ns.getServerMinSecurityLevel(servers[i]))) 
			{
				await ns.weaken((servers[i]), { threads: (amount) });
			}
		while (ns.getServerMoneyAvailable(servers[i]) < (ns.getServerMaxMoney(servers[i]))) 
			{
				await ns.grow((servers[i]), { threads: (amount) });
				await ns.weaken((servers[i]), { threads: (amount) });
			}
		if (ns.getServerMoneyAvailable(servers[i]) == (ns.getServerMaxMoney(servers[i])))
			{
				await ns.hack((servers[i]), { threads: (amount) });// 0.005
			}
			else
			{
				await ns.grow((servers[i]), { threads: (amount) });
			}
			ns.toast(`weakend ${servers[i]}`, "success", 6000);
		}
	}