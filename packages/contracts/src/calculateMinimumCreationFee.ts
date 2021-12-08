/**
 * Original Work Copyright (c) 2019 Fruits Dev team
 */

import { Amount, FeeQuantPlanck, OneFruitPlanck } from '@fruitsjs/util';
import { countCodePages } from './countCodePages';

/**
 * Calculates the minimum creation fee of the contract
 *
 * @param hexCode The contracts code in hex form
 * @param isCIP20active If is true, the fee calculation for active CIP20 is applied (lowered fees),
 * otherwise the legacy calculation is applied
 * @return The minimum fee
 * @module contracts
 */
export function calculateMinimumCreationFee(hexCode: string, isCIP20active: boolean = false): Amount {
    const DataPages = 1; // no data supported yet, so we put minimum value
    const baseFee = Amount.fromPlanck((isCIP20active ? FeeQuantPlanck * 10 : OneFruitPlanck).toString(10));
    return baseFee.multiply(2 + countCodePages(hexCode) + DataPages);
}
