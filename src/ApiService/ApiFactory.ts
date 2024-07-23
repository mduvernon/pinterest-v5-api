import { AbstractRestApiService, IRestApiService } from './Abstract/AbstractRestApiService';
import { OAuth2ApiService } from './Auth/OAuth2ApiService';
import { ApiClient } from '../Client/ApiClient';
import {
    AdAccountsService,
    AdGroupsService,
    AdsService,
    AudienceInsightsService,
    AudiencesService,
    BillingService,
    BoardsService,
    BrowseResourceService,
    BulkService,
    BusinessAccessAssetsService,
    BusinessAccessInviteService,
    BusinessAccessRelationshipsService,
    CampaignsService,
    CatalogsService,
    ConversionEventsService,
    ConversionTagsService,
    CustomerListsService,
    IntegrationsService,
    KeywordsService,
    LeadAdsService,
    LeadFormsService,
    MediaService,
    OrderLinesService,
    PinsService,
    ProductGroupPromotionsService,
    ProductGroupsService,
    ResourcesService,
    SearchService,
    TargetingTemplateService,
    TermsService,
    TermsOfServiceService,
    UserAccountService
} from './Rest';

/**
 * Factory class to create RESTFul API.
 */
export class ApiFactory {

    /**
     * ApiClient
     *
     * @type {ApiClient}
     */
    public readonly client: ApiClient;

    /**
     * OAuth2ApiService
     *
     * @type {OAuth2ApiService}
     */
    public readonly oAuth2: OAuth2ApiService;

    /**
     * _restful
     *  - Restful API service collection instances
     *
     * @private
     */
    private _restful: { [key: string]: any } = {};

    /**
     * Constructor
     *
     * @param client
     * @param oAuth2
     */
    constructor(
        client: ApiClient,
        oAuth2: OAuth2ApiService
    ) {
        this.client = client;
        this.oAuth2 = oAuth2;
    }

    /**
     * Create API services
     */
    public createApiServices() {
        return {
            adAccounts: this.createRestApiService<AdAccountsService>(AdAccountsService),
            adGroups: this.createRestApiService<AdGroupsService>(AdGroupsService),
            ads: this.createRestApiService<AdsService>(AdsService),
            audienceInsights: this.createRestApiService<AudienceInsightsService>(AudienceInsightsService),
            audiences: this.createRestApiService<AudiencesService>(AudiencesService),
            billing: this.createRestApiService<BillingService>(BillingService),
            boards: this.createRestApiService<BoardsService>(BoardsService),
            browseResource: this.createRestApiService<BrowseResourceService>(BrowseResourceService),
            bulk: this.createRestApiService<BulkService>(BulkService),
            businessAccessAssets: this.createRestApiService<BusinessAccessAssetsService>(BusinessAccessAssetsService),
            businessAccessInvite: this.createRestApiService<BusinessAccessInviteService>(BusinessAccessInviteService),
            businessAccessRelationships: this.createRestApiService<BusinessAccessRelationshipsService>(BusinessAccessRelationshipsService),
            campaigns: this.createRestApiService<CampaignsService>(CampaignsService),
            catalogs: this.createRestApiService<CatalogsService>(CatalogsService),
            conversionEvents: this.createRestApiService<ConversionEventsService>(ConversionEventsService),
            conversionTags: this.createRestApiService<ConversionTagsService>(ConversionTagsService),
            customerLists: this.createRestApiService<CustomerListsService>(CustomerListsService),
            integrations: this.createRestApiService<IntegrationsService>(IntegrationsService),
            keywords: this.createRestApiService<KeywordsService>(KeywordsService),
            leadAds: this.createRestApiService<LeadAdsService>(LeadAdsService),
            leadForms: this.createRestApiService<LeadFormsService>(LeadFormsService),
            media: this.createRestApiService<MediaService>(MediaService),
            orderLines: this.createRestApiService<OrderLinesService>(OrderLinesService),
            pins: this.createRestApiService<PinsService>(PinsService),
            productGroupPromotions: this.createRestApiService<ProductGroupPromotionsService>(ProductGroupPromotionsService),
            productGroups: this.createRestApiService<ProductGroupsService>(ProductGroupsService),
            resources: this.createRestApiService<ResourcesService>(ResourcesService),
            search: this.createRestApiService<SearchService>(SearchService),
            targetingTemplate: this.createRestApiService<TargetingTemplateService>(TargetingTemplateService),
            terms: this.createRestApiService<TermsService>(TermsService),
            termsOfService: this.createRestApiService<TermsOfServiceService>(TermsOfServiceService),
            userAccount: this.createRestApiService<UserAccountService>(UserAccountService),
        };
    }

    /**
     * Create Restful API service
     *
     * @param serviceName
     * @param RestfulApiClass
     */
    private createRestApiService<T extends AbstractRestApiService>(RestfulApiClass: IRestApiService): T {
        const id = RestfulApiClass.id;
        return (
            this._restful[id] || (this._restful[id] = new RestfulApiClass(id, this.client, this.oAuth2))
        );
    }
}
