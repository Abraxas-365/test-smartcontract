import { ImageMetadata } from 'src/nft/models/imageMetadata';
import { IpfsRepo } from './ipfs.repository';
export declare function uploadMetadata(this: IpfsRepo, imageMetadata: ImageMetadata): Promise<string>;
