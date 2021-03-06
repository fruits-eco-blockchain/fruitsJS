
/**
 * Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Peer Interface
 * @module core
 * */
export interface Peer {
    announcedAddress: string;
    application: string;
    blacklisted: boolean;
    downloadedVolume: number;
    lastUpdated: number;
    platform: string;
    requestProcessingTime: number;
    shareAddress: boolean;
    state: number;
    uploadedVolume: boolean;
    version: string;
}
