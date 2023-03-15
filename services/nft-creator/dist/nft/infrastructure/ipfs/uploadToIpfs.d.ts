import { ImageMetadata } from "src/nft/models/imageMetadata";
import { IpfsRepo } from "./ipfs.repository";
export declare function uploadToIpfs(this: IpfsRepo, imageName: string, imageMetadata: ImageMetadata): Promise<void>;
