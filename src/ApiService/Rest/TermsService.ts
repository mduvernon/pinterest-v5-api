import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { RelatedTerms } from '../../Model/relatedTerms';

export class TermsService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.TermsService';

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
     * List related terms
     * Get a list of terms logically related to each input term. &lt;p/&gt; Example: the term \&#39;workout\&#39; would list related terms like \&#39;one song workout\&#39;, \&#39;yoga workout\&#39;, \&#39;workout motivation\&#39;, etc.
     * @param terms List of input terms.
     */
    public async termsRelatedList(terms: Array<string>): Promise<RelatedTerms> {
        if (terms === null || terms === undefined) {
            throw new Error('Required parameter terms was null or undefined when calling termsRelatedList.');
        }

        let queryParameters: string[] = [];
        if (terms) {
            terms.forEach((element) => {
                queryParameters.push('terms=' + encodeURIComponent(String(element)));
            })
        }

        const response: RelatedTerms = await this.get(
            `${this.basePath}/terms/related?${queryParameters.join('&')}`,
        )

        return response;
    }

    /**
     * List suggested terms
     * Get popular search terms that begin with your input term. &lt;p/&gt; Example: \&#39;sport\&#39; would return popular terms like \&#39;sports bar\&#39; and \&#39;sportswear\&#39;, but not \&#39;motor sports\&#39; since the phrase does not begin with the given term.
     * @param term Input term.
     * @param limit Max suggested terms to return.
     */
    public async termsSuggestedList(term: string, limit?: number): Promise<Array<string>> {
        if (term === null || term === undefined) {
            throw new Error('Required parameter term was null or undefined when calling termsSuggestedList.');
        }

        let queryParameters: string[] = [];
        if (term !== undefined) {
            queryParameters.push('term=' + encodeURIComponent(String(term)));
        }
        if (limit !== undefined) {
            queryParameters.push('limit=' + encodeURIComponent(String(limit)));
        }

        const response: Array<string> = await this.get(
            `${this.basePath}/terms/suggested?${queryParameters.join('&')}`,
        )

        return response;
    }

}
