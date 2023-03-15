const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('d9c398e5ee7b8ce69567', 'a3bface20eb99edd3ae4d7c9e26d882d043054041c1e6e632eaa35305596a5e5');
const fs = require('fs');
const readableStreamForFile = fs.createReadStream('/Users/abraxas/Chamba/magia-contract/smartContract/scripts/foto1.jpg');

interface IPinataResp {
    IpfsHash: string,
    PinSize: number,
    Timestamp: string,
    isDuplicate: boolean

}

async function uploadFileToIpfs() {
    try {
        let imageResult: IPinataResp = await pinata.pinFileToIPFS(readableStreamForFile)
        console.log(imageResult)
        const metadata = {
            "attributes": [
                {
                    "type": "Diploma",
                    "emitted": "2022",
                    "by": "luisfernando",
                    "to": "luisfernando"
                }
            ],
            "description": "digital diplomas test",
            "image": `ipfs://${imageResult.IpfsHash}`,
            "name": "Diploma"
        };
        const options = {
            pinataMetadata: {
                name: "diploma",
            }
        };
        let metadataResult = await pinata.pinJSONToIPFS(metadata, options)
        console.log("metadata", metadataResult)

    } catch (err: unknown) {
        console.log(err)
    }
}
uploadFileToIpfs()
