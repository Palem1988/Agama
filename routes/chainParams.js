const chainParams = {
	SUPERNET: {
		ac_supply: 816061,
	},
	REVS: {
		ac_supply: 1300000,
	},
	WLC: {
		ac_supply: 210000000,
	},
	PANGEA: {
		ac_supply: 999999,
	},
	PGT: {
		ac_supply: 10000000,
		ac_end: 1,
	},
	DEX: {
		ac_supply: 999999,
	},
	JUMBLR: {
		ac_supply: 999999,
	},
	BET: {
		ac_supply: 999999,
	},
	CRYPTO: {
		ac_supply: 999999,
	},
	HODL: {
		ac_supply: 9999999,
	},
	MSHARK: {
		ac_supply: 1400000,
	},
	BOTS: {
		ac_supply: 999999,
	},
	MGW: {
		ac_supply: 999999,
	},
	MVP: {
		ac_supply: 1000000,
	},
	KV: {
		ac_supply: 1000000,
	},
	CEAL: {
		ac_supply: 366666666,
	},
	MESH: {
		ac_supply: 1000007,
	},
	COQUI: {
		ac_supply: 72000000,
		ac_ccactivate: 200000,
 	},
	KMDICE: {
		ac_supply: 10500000,
		ac_reward: 2500000000,
		ac_halving: 210000,
		ac_cc: 2,
		addressindex: 1,
		spentindex: 1,
		genproclimit: true
	},
	CHAIN: {
		ac_supply: 999999,
		addnode: '78.47.146.222',
	},
	GLXT: {
		ac_supply: 10000000000,
		addnode: '13.230.224.15',
	},
	EQL: {
		ac_supply: 500000000,
		addnode: '46.101.124.153',
	  ac_ccactivate: 205000,
	},
	MNZ: {
		ac_supply: 257142858,
	},
	AXO: {
		ac_supply: 200000000,
	},
	ETOMIC: {
		ac_supply: 100000000,
	},
	BTCH: {
		ac_supply: 20998641,
	},
	BEER: {
		ac_supply: 100000000,
		addnode: '24.54.206.138',
	},
	PIZZA: {
		ac_supply: 100000000,
		addnode: '24.54.206.138',
	},
	OOT: {
		ac_supply: 216000000,
		ac_sapling: 5000000,
		addnode: '174.138.107.226',
	},
	VOTE2018: {
		ac_supply: 600000000,
	},
	NINJA: {
		ac_supply: 100000000,
		addnode: '192.241.134.19',
	},
	BNTN: {
		ac_supply: 500000000,
		addnode: '94.130.169.205',
	},
	PRLPAY: {
		ac_supply: 500000000,
		addnode: '13.250.226.125',
	},
	ZILLA: {
		ac_supply: 11000000,
		ac_sapling: 5000000,
		addnode: '51.68.215.104',
	},
	DSEC: {
		ac_supply: 7000000,
		addnode: '185.148.147.30',
	},
	MGNX: {
		ac_supply: 12465003,
		ac_staked: 90,
		ac_reward: 2000000000,
		ac_halving: 525960,
		ac_cc: 2,
		ac_end: 2629800,
		addnode: '142.93.27.180',
		genproclimit: true,
	},
	CCL: {
		ac_supply: 200000000,
		ac_end: 1,
		ac_cc: 2,
		addressindex: 1, // is this necessary(?)
		spentindex: 1,
		addnode: [
			'142.93.136.89',
			'195.201.22.89',
		],
	},
	PIRATE: {
		ac_supply: 0,
		ac_reward: 25600000000,
		ac_halving: 77777,
		ac_private: 1,
		addnode: [
			'136.243.102.225',
			'78.47.205.239',
		],
		genproclimit: true,
	},
	KOIN: {
		ac_supply: 125000000,
		addnode: '3.0.32.10',
	},
	DION: {
		ac_supply: 3900000000,
		ac_reward: 22260000000,
		ac_staked: 100,
		ac_cc: 1,
		ac_end: 4300000000,
		addnode: '51.75.124.34',
		genproclimit: true,
	},
	PTX: {
		ac_supply: 12000000,
		ac_reward: 1500000000,
		ac_staked: 50,
		ac_end: 12000000,
		addnode: '142.11.199.63',
		genproclimit: true,
	},
	ZEX: {
		ac_reward: 13000000000,
		ac_halving: 525600,
		ac_pubkey: '039d4a50cc70d1184e462a22edb3b66385da97cc8059196f8305c184a3e21440af',
		ac_cc: 2,
		ac_founders: 1,
		addnode: '5.9.102.210',
  },
  VRSC: {
    ac_daemon: 'verusd',
    ac_algo: 'verushash',
    ac_cc: 1,
    ac_supply: 0,
    ac_eras: 3,
    ac_reward: '0,38400000000,2400000000',
    ac_halving: '1,43200,1051920',
    ac_decay: '100000000,0,0',
    ac_end: '10080,226080,0',
    ac_timelockgte: 19200000000,
    ac_timeunlockfrom: 129600,
    ac_timeunlockto: 1180800,
    ac_veruspos: 50,
  },
  VRSCTEST: {
    ac_daemon: 'verusd',
  },
  K64: {
    ac_supply: 64000777,
    ac_reward: 0,
    ac_staked: 10,
    addnode: ['18.197.20.211']
  },
	SPLTEST: {
		ac_supply: 5555555,
		ac_reward: 10000000000000,
		ac_cc: 2,
		addressindex: 1,
		spentindex: 1,
		addnode: [
			'54.36.126.42',
			'94.130.224.11',
		],
	},
        LUMBER: {
                ac_algo: 'verushash',
                ac_veruspos: 80,
                ac_cc: 2,
                ac_supply: 1260000,
                ac_reward: 470000000,
                ac_halving: 2100000,
                addnode: '149.202.84.141',
                genproclimit: true,
        },
};

module.exports = chainParams;
