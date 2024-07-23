import { inject, injectable } from "inversify";

import { TYPES } from "../Resources/Types";

import { ApiFactory } from './ApiFactory';

import { OAuth2ApiService } from "./Auth/OAuth2ApiService";
import { ApiClient } from "../Client/ApiClient";

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

@injectable()
export default class PinterestApiService {

    /**
     * Service name
     *
     * @type {string}
     */
    public readonly name: string;

    /**
     * The factory to create the api services
     *
     * @type {ApiFactory}
     * @private
     * @readonly
     */
    private readonly factory: ApiFactory;

    /**
     * The OAuth2 Api Service
     *
     * @type {OAuth2ApiService}
     * @private
     * @readonly
     */
    private readonly _oAuth2: OAuth2ApiService;

    /**
     * @param {ApiClient} client the client
     * @param {AuthApiService} oAuth2  the oAuth2 service
     */
    constructor(
        @inject(TYPES.ApiClient) client: ApiClient,
        @inject(TYPES.OAuth2ApiService) oAuth2: OAuth2ApiService,
    ) {
        this.name = 'pinterest_api.PinterestApiService';

        this._oAuth2 = oAuth2;

        this.factory = new ApiFactory(
            client,
            oAuth2
        );
    }

    get oAuth2(): OAuth2ApiService {
        return this._oAuth2;
    }

    get adAccounts(): AdAccountsService {
        return this.factory.createApiServices().adAccounts;
    }

    get adGroups(): AdGroupsService {
        return this.factory.createApiServices().adGroups;
    }

    get ads(): AdsService {
        return this.factory.createApiServices().ads;
    }

    get audienceInsights(): AudienceInsightsService {
        return this.factory.createApiServices().audienceInsights;
    }

    get audiences(): AudiencesService {
        return this.factory.createApiServices().audiences;
    }

    get billing(): BillingService {
        return this.factory.createApiServices().billing;
    }

    get boards(): BoardsService {
        return this.factory.createApiServices().boards;
    }

    get browseResource(): BrowseResourceService {
        return this.factory.createApiServices().browseResource;
    }

    get bulk(): BulkService {
        return this.factory.createApiServices().bulk;
    }

    get businessAccessAssets(): BusinessAccessAssetsService {
        return this.factory.createApiServices().businessAccessAssets;
    }

    get businessAccessInvite(): BusinessAccessInviteService {
        return this.factory.createApiServices().businessAccessInvite;
    }

    get businessAccessRelationships(): BusinessAccessRelationshipsService {
        return this.factory.createApiServices().businessAccessRelationships;
    }

    get campaigns(): CampaignsService {
        return this.factory.createApiServices().campaigns;
    }

    get catalogs(): CatalogsService {
        return this.factory.createApiServices().catalogs;
    }

    get conversionEvents(): ConversionEventsService {
        return this.factory.createApiServices().conversionEvents;
    }

    get conversionTags(): ConversionTagsService {
        return this.factory.createApiServices().conversionTags;
    }

    get customerLists(): CustomerListsService {
        return this.factory.createApiServices().customerLists;
    }

    get integrations(): IntegrationsService {
        return this.factory.createApiServices().integrations;
    }

    get keywords(): KeywordsService {
        return this.factory.createApiServices().keywords;
    }

    get leadAds(): LeadAdsService {
        return this.factory.createApiServices().leadAds;
    }

    get leadForms(): LeadFormsService {
        return this.factory.createApiServices().leadForms;
    }

    get media(): MediaService {
        return this.factory.createApiServices().media;
    }

    get orderLines(): OrderLinesService {
        return this.factory.createApiServices().orderLines;
    }

    get pins(): PinsService {
        return this.factory.createApiServices().pins;
    }

    get productGroupPromotions(): ProductGroupPromotionsService {
        return this.factory.createApiServices().productGroupPromotions;
    }

    get productGroups(): ProductGroupsService {
        return this.factory.createApiServices().productGroups;
    }

    get resources(): ResourcesService {
        return this.factory.createApiServices().resources;
    }

    get search(): SearchService {
        return this.factory.createApiServices().search;
    }

    get targetingTemplate(): TargetingTemplateService {
        return this.factory.createApiServices().targetingTemplate;
    }

    get terms(): TermsService {
        return this.factory.createApiServices().terms;
    }

    get termsOfService(): TermsOfServiceService {
        return this.factory.createApiServices().termsOfService;
    }

    get userAccount(): UserAccountService {
        return this.factory.createApiServices().userAccount;
    }
}

export { PinterestApiService };
