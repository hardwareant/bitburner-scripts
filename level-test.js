/** @param {NS} ns **/
export async function main(ns) {

    const hackPrograms = ['BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe']
    const servers = ["n00dles", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "silver-helix", "netlink", "omega-net", "johnson-ortho", "summit-uni", "rho-construction", "aerocorp", "alpha-ent", "galactic-cyber", "global-pharm", "millenium-fitness", "nectar-net", "neo-net", "comptek", "rothman-uni", "syscore", "I.I.I.I", "lexo-corp", "crush-fitness", "avmnite-02h", "zb-institute", "catalyst", "aevum-police", "zer0", "phantasy", "the-hub", "foodnstuff", "CSEC", "snap-fitness", "unitalife", "solaris", "zeus-med", "univ-energy", "deltaone", "icarus", "omnia", "defcomm", "taiyang-digital", "zb-def", "nova-med", "titan-labs", "applied-energetics", "microdyne", "run4theh111z", "fulcrumtech", "stormtech", "helios", "vitalife", "kuai-gong", ".", "omnitek", "4sigma", "clarkinc", "powerhouse-fitness", "b-and-a", "blade", "nwo", "ecorp", "megacorp", "fulcrumassets", "The-Cave"];
    const lowservers = ["n00dles", "sigma-cosmetics", "joesguns", "foodnstuff", "hong-fang-tea", "harakiri-sushi", "iron-gym"];
    let portHacks = 0
    var i;
    hackPrograms.forEach((hackProgram) => {
      if (ns.fileExists(hackProgram, 'home')) {
        portHacks += 1
      }
      return {
        portHacks,
      }
    });
    for (i = 0; i < servers.length; i++) {
    
      if (ns.hasRootAccess(servers[i]) == (true)) {
        continue
      } else
      if ((portHacks) == (0)) {
        ns.tprint("u need to buy BruteSSH.exe first");
        ns.tprint("run nuke.exe on servers with 0 ports needed");
        ns.connect(servers[i]);
        ns.nuke(servers[i]);
        await ns.installBackdoor((servers[i]), 1);
        ns.connect("home");
      } else
        if ((portHacks) == (1)) {
          var i1;
          ns.print("1 poort open");
  
          for (i1 = 0; i1 < servers.length; i1++) {
            ns.brutessh(servers[i1]);
            if (ns.getServerNumPortsRequired(servers[i1]) <= (1)) {
              ns.nuke(servers[i1]);
              //ns.connect(servers[i1]); cant connect because the server is to far away
              //await ns.installBackdoor((servers[i]), 1); 
              //ns.connect("home");
            }
          }
        } else
          if ((portHacks) == (2)) {
            var i2;
            ns.print("2 poorten open")
            for (i2 = 0; i2 < servers.length; i2++) {
              ns.brutessh(servers[i2]);
              ns.ftpcrack(servers[i2]);
              if (ns.getServerNumPortsRequired(servers[i2]) <= (2)) {
                ns.nuke(servers[i2]);
                //ns.connect(servers[i2]);
                //await ns.installBackdoor((servers[i]), 1)
                //ns.connect("home")
              }
            }
          } else
            if ((portHacks) == (3)) {
              var i3;
              ns.print("3 poorten open")
              for (i3 = 0; i3 < servers.length; i3++) {
                ns.brutessh(servers[i3]);
                ns.ftpcrack(servers[i3]);
                ns.relaysmtp(servers[i3]);
                if (ns.getServerNumPortsRequired(servers[i3]) <= (3)) {
                  ns.nuke(servers[i3]);
                  //ns.connect(servers[i3]);
                  //await ns.installBackdoor((servers[i]), 1)
                  //ns.connect("home")
                }
              }
            } else
              if ((portHacks) == (4)) {
                var i4;
                ns.print("4 poorten open")
                for (i4 = 0; i4 < servers.length; i4++) {
                  ns.brutessh(servers[i4]);
                  ns.ftpcrack(servers[i4]);
                  ns.relaysmtp(servers[i4]);
                  ns.httpworm(servers[i4]);
                  if (ns.getServerNumPortsRequired(servers[i4]) <= (4)) {
                    ns.nuke(servers[i4]);
                    //ns.connect(servers[i4]);
                    //await ns.installBackdoor((servers[i]), 1)
                    //ns.connect("home")
                  }
                }
  
              } else
                if ((portHacks) == (5)) {
                  var i5;
                  ns.print("5 poorten open")
                  for (i5 = 0; i5 < servers.length; i5++) {
                    ns.brutessh(servers[i5]);
                    ns.ftpcrack(servers[i5]);
                    ns.relaysmtp(servers[i5]);
                    ns.httpworm(servers[i5]);
                    ns.sqlinject(servers[i5]);
                    if (ns.getServerNumPortsRequired(servers[i5]) <= (5)) {
                      ns.nuke(servers[i5]);
                      //ns.connect(servers[i5]);
                      //await ns.installBackdoor((servers[i]), 1)
                      //ns.connect("home")
                    }
                  }
                } else {
                  ns.tprint("something is wrong")
                }
    }
}
