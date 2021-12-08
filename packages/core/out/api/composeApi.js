"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
const apiVersion_1 = require("../constants/apiVersion");
const apiComposer_1 = require("./apiComposer");
const block_1 = require("./factories/block");
const network_1 = require("./factories/network");
const message_1 = require("./factories/message");
const account_1 = require("./factories/account");
const alias_1 = require("./factories/alias");
const contract_1 = require("./factories/contract");
const transaction_1 = require("./factories/transaction");
const asset_1 = require("./factories/asset");
class ApiSettings {
    constructor(nodeHost, apiVersion = apiVersion_1.ApiVersion.V1, reliableNodeHosts, httpClientOptions) {
        this.nodeHost = nodeHost;
        this.apiVersion = apiVersion;
        this.reliableNodeHosts = reliableNodeHosts;
        this.httpClientOptions = httpClientOptions;
    }
}
exports.ApiSettings = ApiSettings;
function composeApi(settings) {
    const serviceSettings = Object.assign({}, settings);
    const service = new service_1.ChainService(serviceSettings);
    return apiComposer_1.ApiComposer
        .create(service)
        .withBlockApi({
        getBlockByTimestamp: block_1.getBlockByTimestamp,
        getBlockByHeight: block_1.getBlockByHeight,
        getBlockById: block_1.getBlockById,
        getBlockId: block_1.getBlockId,
        getBlocks: block_1.getBlocks,
    })
        .withNetworkApi({
        getBlockchainStatus: network_1.getBlockchainStatus,
        getServerStatus: network_1.getServerStatus,
        getSuggestedFees: network_1.getSuggestedFees,
        getPeers: network_1.getPeers,
        getPeer: network_1.getPeer,
        getTime: network_1.getTime,
    })
        .withTransactionApi({
        broadcastTransaction: transaction_1.broadcastTransaction,
        getTransaction: transaction_1.getTransaction,
        sendAmountToSingleRecipient: transaction_1.sendAmountToSingleRecipient,
        sendAmountToMultipleRecipients: transaction_1.sendAmountToMultipleRecipients,
        sendSameAmountToMultipleRecipients: transaction_1.sendSameAmountToMultipleRecipients,
        createSubscription: transaction_1.createSubscription,
        cancelSubscription: transaction_1.cancelSubscription,
        getSubscription: transaction_1.getSubscription,
        getUnconfirmedTransactions: transaction_1.getUnconfirmedTransactions,
        signAndBroadcastTransaction: transaction_1.signAndBroadcastTransaction,
    })
        .withMessageApi({
        sendMessage: message_1.sendMessage,
        sendEncryptedMessage: message_1.sendEncryptedMessage,
    })
        .withAccountApi({
        addCommitment: account_1.addCommitment,
        removeCommitment: account_1.removeCommitment,
        getAccountTransactions: account_1.getAccountTransactions,
        getUnconfirmedAccountTransactions: account_1.getUnconfirmedAccountTransactions,
        getAccountBalance: account_1.getAccountBalance,
        generateSendTransactionQRCode: account_1.generateSendTransactionQRCode,
        generateSendTransactionQRCodeAddress: account_1.generateSendTransactionQRCodeAddress,
        getAliases: account_1.getAliases,
        setAlias: account_1.setAlias,
        getAccount: account_1.getAccount,
        getAccountBlocks: account_1.getAccountBlocks,
        getAccountBlockIds: account_1.getAccountBlockIds,
        setAccountInfo: account_1.setAccountInfo,
        setRewardRecipient: account_1.setRewardRecipient,
        getAccountSubscriptions: account_1.getAccountSubscriptions,
        getSubscriptionsToAccount: account_1.getSubscriptionsToAccount,
        getRewardRecipient: account_1.getRewardRecipient,
        getAccountTransactionIds: account_1.getAccountTransactionIds
    }).withAliasApi({
        getAliasByName: alias_1.getAliasByName,
        getAliasById: alias_1.getAliasById,
        setAlias: account_1.setAlias
    }).withContractApi({
        getContract: contract_1.getContract,
        getContractsByAccount: contract_1.getContractsByAccount,
        getAllContractIds: contract_1.getAllContractIds,
        publishContract: contract_1.publishContract,
        callContractMethod: contract_1.callContractMethod,
    }).withAssetApi({
        getAsset: asset_1.getAsset,
        getAllAssets: asset_1.getAllAssets,
        issueAsset: asset_1.issueAsset,
        transferAsset: asset_1.transferAsset,
        placeAskOrder: asset_1.placeAskOrder,
        placeBidOrder: asset_1.placeBidOrder,
        cancelAskOrder: asset_1.cancelAskOrder,
        cancelBidOrder: asset_1.cancelBidOrder,
        getTrades: asset_1.getTrades,
    })
        .compose();
}
exports.composeApi = composeApi;
//# sourceMappingURL=composeApi.js.map