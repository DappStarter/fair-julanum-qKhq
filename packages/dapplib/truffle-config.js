require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food point renew mad solid honey light army genius'; 
let testAccounts = [
"0x5c22264c719f35a4597ca47800ee7a3ed9cbe62c3e53bf327f5ad91ddd0133f8",
"0x7b2065c4ad0871c496183c0d66b2f3aaf716904f7801264ae58b1f730f87fb02",
"0x7c13abe9bba8e7cbdf75df98dbffcb39330117a7191d12ca97ae1faf4a1e1449",
"0x1135a6bdca4b12880e9fbe46a749f3386d0b1a9fba13f0a9daabb72fac21f36e",
"0x9dcf4ce90a8a5f55ff0faeb398cfb9f36b16034b46d0925364ec6e4e0010083b",
"0x8c2509405415c1900d0e4a77729c260085a774622ed8e2eb09b3ba8aad3d8f7e",
"0x862345b18e74c3600b2ba5a4d7f9e4e4e2311e6a7e2849131710ef819da5f454",
"0xaf08666d80f4aaa8d519bdddf0074728b7651ca971685de10b63aad4758e76c4",
"0xad0077e9f4d45d3f27077343fd7843e4f829b24d682d687a52c65fe38bbdf27b",
"0xfe6666cdeeb11a20dde28415ed5d7c7a38f66defb4f1ea9c67266fa45a908611"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


