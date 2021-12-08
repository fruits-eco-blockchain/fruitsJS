import { BlockchainStatus } from '../blockchainStatus';
import { ServerStatus } from '../serverStatus';
import { SuggestedFees } from '../suggestedFees';
import { Peer } from '../peer';
import { PeerAddressList } from '../peerAddressList';
import { ChainTimestamp } from '../chainTimestamp';
export interface NetworkApi {
    getBlockchainStatus: () => Promise<BlockchainStatus>;
    getServerStatus: () => Promise<ServerStatus>;
    getSuggestedFees: () => Promise<SuggestedFees>;
    getPeer: (address: string) => Promise<Peer>;
    getPeers: (active?: boolean) => Promise<PeerAddressList>;
    getTime: () => Promise<ChainTimestamp>;
}
