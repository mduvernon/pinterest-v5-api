import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { Board } from '../../Model/board';
import { BoardSection } from '../../Model/boardSection';
import { BoardSectionsList200Response } from '../../Model/boardSectionsList200Response';
import { BoardUpdate } from '../../Model/boardUpdate';
import { BoardsList200Response } from '../../Model/boardsList200Response';
import { BoardsListPins200Response } from '../../Model/boardsListPins200Response';

export class BoardsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.BoardsService';

    constructor(
        serviceName: string,
        client: ApiClient,
        oAuth2: OAuth2ApiService
    ) {
        super(serviceName, client, oAuth2);
    }

    get basePath() {
        return 'https://api.pinterest.com/v5';
    }

    /**
     * Create board section
     * Create a board section on a board owned by the "operation user_account" - or on a group board that has been shared with this account. Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param boardSection Create a board section.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardSectionsCreate(boardId: string, boardSection: BoardSection, adAccountId?: string): Promise<BoardSection> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardSectionsCreate.');
        }

        if (boardSection === null || boardSection === undefined) {
            throw new Error('Required parameter boardSection was null or undefined when calling boardSectionsCreate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: BoardSection = await this.post(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}/sections?${queryParameters.join('&')}`,
            boardSection,
        )

        return response;
    }

    /**
     * Delete board section
     * Delete a board section on a board owned by the "operation user_account" - or on a group board that has been shared with this account. Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param sectionId Unique identifier of a board section.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardSectionsDelete(boardId: string, sectionId: string, adAccountId?: string): Promise<any> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardSectionsDelete.');
        }

        if (sectionId === null || sectionId === undefined) {
            throw new Error('Required parameter sectionId was null or undefined when calling boardSectionsDelete.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: any = await this.delete(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}/sections/${encodeURIComponent(String(sectionId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List board sections
     * Get a list of all board sections from a board owned by the "operation user_account" - or a group board that has been shared with this account. Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async boardSectionsList(boardId: string, adAccountId?: string, bookmark?: string, pageSize?: number): Promise<BoardSectionsList200Response> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardSectionsList.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: BoardSectionsList200Response = await this.get(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}/sections?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List Pins on board section
     * Get a list of the Pins on a board section of a board owned by the "operation user_account" - or on a group board that has been shared with this account. Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param sectionId Unique identifier of a board section.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async boardSectionsListPins(boardId: string, sectionId: string, adAccountId?: string, bookmark?: string, pageSize?: number): Promise<BoardsListPins200Response> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardSectionsListPins.');
        }

        if (sectionId === null || sectionId === undefined) {
            throw new Error('Required parameter sectionId was null or undefined when calling boardSectionsListPins.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: BoardsListPins200Response = await this.get(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}/sections/${encodeURIComponent(String(sectionId))}/pins?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update board section
     * Update a board section on a board owned by the "operation user_account" - or on a group board that has been shared with this account. Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param sectionId Unique identifier of a board section.
     * @param boardSection Update a board section.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardSectionsUpdate(boardId: string, sectionId: string, boardSection: BoardSection, adAccountId?: string): Promise<BoardSection> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardSectionsUpdate.');
        }

        if (sectionId === null || sectionId === undefined) {
            throw new Error('Required parameter sectionId was null or undefined when calling boardSectionsUpdate.');
        }

        if (boardSection === null || boardSection === undefined) {
            throw new Error('Required parameter boardSection was null or undefined when calling boardSectionsUpdate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: BoardSection = await this.patch(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}/sections/${encodeURIComponent(String(sectionId))}?${queryParameters.join('&')}`,
            boardSection,
        )

        return response;
    }

    /**
     * Create board
     * Create a board owned by the "operation user_account".
     * Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account".
     * - By default, the "operation user_account" is the token user_account.
     * @param board Create a board using a single board json object.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardsCreate(board: Board, adAccountId?: string): Promise<Board> {
        if (board === null || board === undefined) {
            throw new Error('Required parameter board was null or undefined when calling boardsCreate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Board = await this.post(
            `${this.basePath}/boards?${queryParameters.join('&')}`,
            board,
        )

        return response;
    }

    /**
     * Delete board
     * Delete a board owned by the "operation user_account". - Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardsDelete(boardId: string, adAccountId?: string): Promise<any> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardsDelete.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: any = await this.delete(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Get board
     * Get a board owned by the operation user_account - or a group board that has been shared with this account. - Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardsGet(boardId: string, adAccountId?: string): Promise<Board> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardsGet.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Board = await this.get(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List boards
     * Get a list of the boards owned by the "operation user_account" + group boards where this account is a collaborator Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". Optional: Specify a privacy type (public, protected, or secret) to indicate which boards to return. - If no privacy is specified, all boards that can be returned (based on the scopes of the token and ad_account role if applicable) will be returned.
     * @param adAccountId Unique identifier of an ad account.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param privacy Privacy setting for a board.
     */
    public async boardsList(adAccountId?: string, bookmark?: string, pageSize?: number, privacy?: 'ALL' | 'PROTECTED' | 'PUBLIC' | 'SECRET' | 'PUBLIC_AND_SECRET'): Promise<BoardsList200Response> {
        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (privacy !== undefined) {
            queryParameters.push('privacy=' + encodeURIComponent(String(privacy)));
        }

        const response: BoardsList200Response = await this.get(
            `${this.basePath}/boards?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List Pins on board
     * Get a list of the Pins on a board owned by the "operation user_account" - or on a group board that has been shared with this account. - Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     * @param creativeTypes Pin creative types filter. &lt;/p&gt;&lt;strong&gt;Note:&lt;/strong&gt; SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.
     * @param adAccountId Unique identifier of an ad account.
     * @param pinMetrics Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before &lt;code&gt;2023-03-20&lt;/code&gt; lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.
     */
    public async boardsListPins(boardId: string, bookmark?: string, pageSize?: number, creativeTypes?: Array<'REGULAR' | 'VIDEO' | 'SHOPPING' | 'CAROUSEL' | 'MAX_VIDEO' | 'SHOP_THE_PIN' | 'COLLECTION' | 'IDEA'>, adAccountId?: string, pinMetrics?: boolean): Promise<BoardsListPins200Response> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardsListPins.');
        }

        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }
        if (creativeTypes) {
            creativeTypes.forEach((element) => {
                queryParameters.push('creativeTypes=' + encodeURIComponent(String(element)));
            })
        }
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }
        if (pinMetrics !== undefined) {
            queryParameters.push('pinMetrics=' + encodeURIComponent(String(pinMetrics)));
        }

        const response: BoardsListPins200Response = await this.get(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}/pins?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * Update board
     * Update a board owned by the "operating user_account". - Optional: Business Access: Specify an ad_account_id to use the owner of that ad_account as the "operation user_account". - By default, the "operation user_account" is the token user_account.
     * @param boardId Unique identifier of a board.
     * @param boardUpdate Update a board.
     * @param adAccountId Unique identifier of an ad account.
     */
    public async boardsUpdate(boardId: string, boardUpdate: BoardUpdate, adAccountId?: string): Promise<Board> {
        if (boardId === null || boardId === undefined) {
            throw new Error('Required parameter boardId was null or undefined when calling boardsUpdate.');
        }

        if (boardUpdate === null || boardUpdate === undefined) {
            throw new Error('Required parameter boardUpdate was null or undefined when calling boardsUpdate.');
        }

        let queryParameters: string[] = [];
        if (adAccountId !== undefined) {
            queryParameters.push('adAccountId=' + encodeURIComponent(String(adAccountId)));
        }

        const response: Board = await this.patch(
            `${this.basePath}/boards/${encodeURIComponent(String(boardId))}?${queryParameters.join('&')}`,
            boardUpdate,
        )

        return response;
    }

}
