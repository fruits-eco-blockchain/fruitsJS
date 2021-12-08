/**
 *Copyright (c) 2019 Fruits Dev Team
 */

/**
 * Http Response
 *
 * Returned by Http request
 * @module http
 */
export class HttpResponse {
    constructor(public status: number, public response: any) {}
}
