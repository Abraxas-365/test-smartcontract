// const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
// const web3 = createAlchemyWeb3("https://polygon-mumbai.g.alchemy.com/v2/eF5ZSdI_QN11xi7VnLxT3LwpOYI4bM2B")//alchemy api
// const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
// const contractAddress = "0x0A3A06b98c59Fb69653D4686709F8d722E953FE3"
// const publicKey = "0xA74Fd97Ed4561eA7e37EB0B22005f2Bd57Ec6b56"
// const privateKey = "f12968a9fbf37694f2265d1360fa7f9f06fba26181d4a0340a35c8ad9497e6e5"
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

// async function mintNFT(tokenURI: any) {
//     const nonce = await web3.eth.getTransactionCount(publicKey, 'latest'); //get latest nonce

//     //the transaction
//     const tx = {
//         'from': publicKey,
//         'to': contractAddress,
//         'nonce': nonce,
//         'gas': 500000,
//         'data': nftContract.methods.safeMint(publicKey, tokenURI).encodeABI()
//     };
//     const signPromise = web3.eth.accounts.signTransaction(tx, privateKey)
//     signPromise
//         .then((signedTx: any) => {
//             web3.eth.sendSignedTransaction(
//                 signedTx.rawTransaction,
//                 function (err: any, hash: any) {
//                     if (!err) {
//                         console.log(
//                             "The hash of your transaction is: ",
//                             hash,
//                             "\nCheck Alchemy's Mempool to view the status of your transaction!"
//                         )
//                     } else {
//                         console.log(
//                             "Something went wrong when submitting your transaction:",
//                             err
//                         )
//                     }
//                 }
//             )
//         })
//         .catch((err: any) => {
//             console.log(" Promise failed:", err)
//         })
// }

// //direccion de pinata metadata
// mintNFT("ipfs://QmW4ZxxGmN1WQnNMeycEJbAgbjVSJcGr9cnVjBWLWd8sCS")
