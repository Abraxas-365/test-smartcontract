import { ImageMetadata } from '../models/imageMetadata';
import { NftService } from './nft.service';
export declare function uploadNftMetadata(this: NftService, metadata: ImageMetadata): Promise<string>;
