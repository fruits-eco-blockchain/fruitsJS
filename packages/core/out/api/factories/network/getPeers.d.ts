import { ChainService } from '../../../service/chainService';
import { PeerAddressList } from '../../../typings/peerAddressList';
export declare const getPeers: (service: ChainService) => (active: boolean) => Promise<PeerAddressList>;
