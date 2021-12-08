"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiImpl {
    constructor(service) {
        this.service = service;
    }
}
class ApiComposer {
    constructor(service) {
        this.service = service;
        this.api = new ApiImpl(service);
    }
    static create(service) {
        return new ApiComposer(service);
    }
    mapCreators(apiSection, creatorMap) {
        this.api[apiSection] = {};
        Object.keys(creatorMap)
            .forEach(creatorName => this.api[apiSection][creatorName] = creatorMap[creatorName](this.service));
    }
    withBlockApi(creatorMap) {
        this.mapCreators('block', creatorMap);
        return this;
    }
    withAccountApi(creatorMap) {
        this.mapCreators('account', creatorMap);
        return this;
    }
    withNetworkApi(creatorMap) {
        this.mapCreators('network', creatorMap);
        return this;
    }
    withMessageApi(creatorMap) {
        this.mapCreators('message', creatorMap);
        return this;
    }
    withTransactionApi(creatorMap) {
        this.mapCreators('transaction', creatorMap);
        return this;
    }
    withAliasApi(creatorMap) {
        this.mapCreators('alias', creatorMap);
        return this;
    }
    withAssetApi(creatorMap) {
        this.mapCreators('asset', creatorMap);
        return this;
    }
    withContractApi(creatorMap) {
        this.mapCreators('contract', creatorMap);
        return this;
    }
    compose() {
        return this.api;
    }
}
exports.ApiComposer = ApiComposer;
//# sourceMappingURL=apiComposer.js.map