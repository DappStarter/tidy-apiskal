require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food blade cruise soap history history light army gaze'; 
let testAccounts = [
"0x5f7e419c9ca143279fa78b891498729e78323e61171e06562ef6ab24f925d0fa",
"0xfa72d6eaffd377ed303ad2e246bcd3300628a5b5c1ec04fcb0af94065efaaef2",
"0x4fe5c3f7e475ebc9586b8f360bfd6ac21e75e1f7c931ab284c240df35d68d8cb",
"0x745e37eb848a6263d35b265045ec64e4135ade7bdd7012b30fd8d4a2d82e1cb3",
"0xd566a3baf71664b771e3e68785a225ec6f917ccc1ead50e19c57a7145025a19f",
"0x46365c9723b94e49cec04f25c27b6ae45f3ebfcb8c3b87f8db206697ab2774b8",
"0x7e27584eb8efca2d81a1826e369563e865f730063f1eb17f58bcbddc643b242e",
"0x050fde33fe242bd0244ef325f8e2b22c0e20622ad1843c619d32823cb9439353",
"0xb77e777313c03ab4caf39f03cf27fd39547be9f236025fff3f0300dd5282b786",
"0x2e40663a35ace62a727f28acd2cf3ff31c3eeeb9b1677664fb397124bb7f3277"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
