/**
 * Original work Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Alias
 *
 * The Alias System feature of Fruits essentially allows one piece of text to be
 * substituted for another, so that keywords or keyphrases can be used to represent
 * other things – names, telephone numbers, physical addresses, web sites, account
 * numbers, email addresses, product SKU codes... almost anything you can think of.
 * @module core
 */
export interface Alias {
    account: string;
    accountRS: string;
    alias: string;
    aliasName: string;
    aliasURI: string;
    timestamp: number;
}
