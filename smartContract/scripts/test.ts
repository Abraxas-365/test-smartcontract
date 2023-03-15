const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3("https://polygon-mumbai.g.alchemy.com/v2/eF5ZSdI_QN11xi7VnLxT3LwpOYI4bM2B")//alchemy api
const contract = require("/Users/abraxas/Chamba/magia-contract/smartContract/artifacts/contracts/NewNFT.sol/MyToken.json")
const contractAddress = "0x39Ff9A906C79Cf4502b58d551D65440B43B8C800"
const publicKey = "0xA74Fd97Ed4561eA7e37EB0B22005f2Bd57Ec6b56"
const privateKey = "f12968a9fbf37694f2265d1360fa7f9f06fba26181d4a0340a35c8ad9497e6e5"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)


export async function revoke(nftId: number): Promise<any> {
    web3.eth.accounts.wallet.add(privateKey);

    const account = web3.eth.accounts.wallet[0].address;
    console.log(account)

    let res = await nftContract.methods.revoke(0).send({ from: account, gas: 500000 })
    console.log(res)

    // const { rawTransaction } = await web3.eth.accounts.signTransaction(tx, privateKey);

    // let transactionId = await web3.eth.sendSignedTransaction(rawTransaction)
    // return transactionId.transactionHash
}
//direccion de pinata
revoke(2)


// export async function getIdCount(): Promise<void> {
//     let numberOfNfts = await nftContract.methods.getIdCount().call();
//     console.log(numberOfNfts)
// }
// getIdCount()
