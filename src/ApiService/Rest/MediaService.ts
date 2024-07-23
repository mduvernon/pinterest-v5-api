import { AbstractRestApiService } from '../Abstract/AbstractRestApiService';
import { OAuth2ApiService } from '../Auth/OAuth2ApiService';
import { ApiClient } from '../../Client/ApiClient';

import { MediaList200Response } from '../../Model/mediaList200Response';
import { MediaUpload } from '../../Model/mediaUpload';
import { MediaUploadDetails } from '../../Model/mediaUploadDetails';
import { MediaUploadRequest } from '../../Model/mediaUploadRequest';

export class MediaService extends AbstractRestApiService {

    public static readonly id = 'pinterest_api.MediaService';

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
     * Register media upload
     * Register your intent to upload media  The response includes all of the information needed to upload the media to Pinterest.  To upload the media, make an HTTP POST request (using &lt;tt&gt;curl&lt;/tt&gt;, for example) to &lt;tt&gt;upload_url&lt;/tt&gt; using the &lt;tt&gt;Content-Type&lt;/tt&gt; header value. Send the media file\&#39;s contents as the request\&#39;s &lt;tt&gt;file&lt;/tt&gt; parameter and also include all of the parameters from &lt;tt&gt;upload_parameters&lt;/tt&gt;.  &lt;strong&gt;@see /docs/content/content-creation/#Creating%20video%20Pins : Learn more&lt;/strong&gt; about video Pin creation.
     * @param mediaUploadRequest Create a media upload request
     */
    public async mediaCreate(mediaUploadRequest: MediaUploadRequest): Promise<MediaUpload> {
        if (mediaUploadRequest === null || mediaUploadRequest === undefined) {
            throw new Error('Required parameter mediaUploadRequest was null or undefined when calling mediaCreate.');
        }

        const response: MediaUpload = await this.post(
            `${this.basePath}/media`,
            mediaUploadRequest,
        )

        return response;
    }

    /**
     * Get media upload details
     * Get details for a registered media upload, including its current status.  &lt;strong&gt;@see /docs/content/content-creation/#Creating%20video%20Pins : Learn more&lt;/strong&gt; about video Pin creation.
     * @param mediaId Media identifier
     */
    public async mediaGet(mediaId: string): Promise<MediaUploadDetails> {
        if (mediaId === null || mediaId === undefined) {
            throw new Error('Required parameter mediaId was null or undefined when calling mediaGet.');
        }

        const response: MediaUploadDetails = await this.get(
            `${this.basePath}/media/${encodeURIComponent(String(mediaId))}`,
        )

        return response;
    }

    /**
     * List media uploads
     * List media uploads filtered by given parameters.  &lt;strong&gt;@see /docs/content/content-creation/#Creating%20video%20Pins : Learn more&lt;/strong&gt; about video Pin creation.
     * @param bookmark Cursor used to fetch the next page of items
     * @param pageSize Maximum number of items to include in a single page of the response. See documentation on @see /docs/getting-started/pagination/ : Pagination for more information.
     */
    public async mediaList(bookmark?: string, pageSize?: number): Promise<MediaList200Response> {
        let queryParameters: string[] = [];
        if (bookmark !== undefined) {
            queryParameters.push('bookmark=' + encodeURIComponent(String(bookmark)));
        }
        if (pageSize !== undefined) {
            queryParameters.push('pageSize=' + encodeURIComponent(String(pageSize)));
        }

        const response: MediaList200Response = await this.get(
            `${this.basePath}/media?${queryParameters.join('&')}`,
        )

        return response;
    }

}
