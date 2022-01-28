/** @param {NS} ns **/
export async function main(ns) {
	//server list// 
	var servers = ["n00dles"]// "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "silver-helix", "netlink", "omega-net", "johnson-ortho", "summit-uni", "rho-construction", "aerocorp", "alpha-ent", "galactic-cyber", "global-pharm", "millenium-fitness", "nectar-net", "neo-net", "comptek", "rothman-uni", "syscore", "I.I.I.I", "lexo-corp", "crush-fitness", "avmnite-02h", "zb-institute", "catalyst", "aevum-police", "zer0", "phantasy", "the-hub", "foodnstuff", "CSEC", "snap-fitness", "unitalife", "solaris", "zeus-med", "univ-energy", "deltaone", "icarus", "omnia", "defcomm", "taiyang-digital", "zb-def", "nova-med", "titan-labs", "applied-energetics", "microdyne", "run4theh111z", "fulcrumtech", "stormtech", "helios", "vitalife", "kuai-gong", ".", "omnitek", "4sigma", "clarkinc", "powerhouse-fitness", "b-and-a", "blade", "nwo", "ecorp", "megacorp", "fulcrumassets", "The-Cave"];
	var amount = 1000
	
	
	//release//
	ns.tprint("------------------------")
	ns.tprint("|    created by Ant    |")
	ns.tprint("|   weaken-noodles.js  |")
	ns.tprint("|   weak, grow, hack   |")
	ns.tprint("|     threads: xxxx    |")
	ns.tprint("------------------------")
	//------------------------------------------------------------------------------------------------------------------------//
	var i; //defines i
	for (i = 0; i < 100000; i++)  //servers.length
	{	var hackTime = (ns.getHackTime(servers));
		var growTime = (ns.getGrowTime(servers));
		var weakenTime = (ns.getWeakenTime(servers));
		if (ns.getServerMoneyAvailable(servers) == (ns.getServerMaxMoney(servers))) 
		{
			if (ns.getServerSecurityLevel(servers) == (ns.getServerMinSecurityLevel(servers))) 
			{
				await ns.hack((servers), { threads: (amount) });
			} 
			else 
			{
			await ns.weaken((servers), { threads: (amount) });//sec decrease with 0.050
			}
		}
		else
		{await ns.grow((servers), { threads: (amount) });}
		while (ns.getServerSecurityLevel(servers) > (ns.getServerMinSecurityLevel(servers))) 
			{
				await ns.weaken((servers), { threads: (amount) });
			}
		while (ns.getServerMoneyAvailable(servers) < (ns.getServerMaxMoney(servers))) 
			{
				await ns.grow((servers), { threads: (amount) }); // sec increase with 0.1
				await ns.weaken((servers), { threads: (amount) });
			}
		if (ns.getServerMoneyAvailable(servers) == (ns.getServerMaxMoney(servers)))
			{
				await ns.hack((servers), { threads: (amount) });// sec decrease with 0.005
			}
			else
			{
				await ns.grow((servers), { threads: (amount) });
			}
			//ns.toast(`weakend ${servers}`, "success", 6000);
		}
	}