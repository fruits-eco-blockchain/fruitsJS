import { loadEnvironment } from './helpers/environment';
import { ChainService } from '../../../service/chainService';
import { getContractsByAccount } from '../../factories/contract/getContractsByAccount';
import { getContract } from '../../factories/contract/getContract';
import { getAllContractIds, publishContract } from '../../factories/contract';
import { convertNumberToNQTString } from '@fruitsjs/util';
import { generateMasterKeys, getAccountIdFromPublicKey } from '@fruitsjs/crypto';

const environment = loadEnvironment();

jest.setTimeout(environment.timeout);

describe('[E2E] Contract Api', () => {

    const service = new ChainService({
        nodeHost: environment.testNetHost,
        apiRootUrl: environment.testNetApiPath
    });

    let senderKeys;
    let recipientKeys;
    let recipientId;

    beforeAll(() => {
        jest.setTimeout(environment.timeout);

        senderKeys = generateMasterKeys(environment.testPassphrase);
        recipientKeys = generateMasterKeys(environment.testRecipientPassphrase);
        recipientId = getAccountIdFromPublicKey(recipientKeys.publicKey);
    });

    it('should getContract', async () => {
        const contract = await getContract(service)(environment.testContractId);
        expect(contract).toBeDefined();
        expect(contract.at).toBe(environment.testContractId);
    });

    it('should getContractsByAccount', async () => {
        const contract = await getContractsByAccount(service)(environment.testContractCreatorId);
        expect(contract.ats.length).toBeGreaterThanOrEqual(1);
    });

    it('should getAllContractIds', async () => {
        const contractIdList = await getAllContractIds(service)();
        expect(contractIdList.atIds.length).toBeGreaterThan(0);
    });

    it('should publishContract', async () => {
        const transactionId = await publishContract(service)(
            {
                codeHex: environment.testContractCodeHex,
                activationAmountPlanck: convertNumberToNQTString(10),
                senderPublicKey: senderKeys.publicKey,
                senderPrivateKey: senderKeys.signPrivateKey,
                description: '[E2E] fruitsjs publishContract Test',
                name: 'Echo',
                isCIP20Active: true,
            }
        );
        expect(transactionId.transaction).toBeDefined();
    });
});
