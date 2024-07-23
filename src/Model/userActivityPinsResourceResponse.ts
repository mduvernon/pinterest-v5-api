
export interface UserActivityPinsResourceResponse {
    resource_response: UserActivityPinsResourceResponse.ResourceResponse
    client_context: UserActivityPinsResourceResponse.ClientContext
    resource: UserActivityPinsResourceResponse.Resource
    request_identifier: string
}

export namespace UserActivityPinsResourceResponse {

    export interface ResourceResponse {
        status: string
        code: number
        message: string
        endpoint_name: string
        data: UserActivityPinsResourceData[]
        bookmark: string
        x_pinterest_sli_endpoint_name: string
        http_status: number
    }

    export interface UserActivityPinsResourceData {
        node_id: string
        image_crop: ImageCrop
        description: string
        price_value: number
        video_status: any
        images: Images
        is_video: boolean
        title: string
        is_oos_product: boolean
        promoted_lead_form: any
        dominant_color: string
        story_pin_data?: StoryPinData
        is_uploaded: boolean
        grid_description: string
        ad_match_reason: number
        view_tags: any[]
        native_creator: NativeCreator
        product_pin_data: any
        attribution: any
        board: Board
        is_eligible_for_web_closeup: boolean
        domain: string
        is_playable: boolean
        promoted_is_lead_ad: boolean
        call_to_action_text: any
        link?: string
        embed: any
        is_repin: boolean
        campaign_id: any
        description_html: string
        manual_interest_tags?: ManualInterestTags
        id: string
        is_whitelisted_for_tried_it: boolean
        method: string
        comments: Comments
        carousel_data: any
        is_stale_product: boolean
        promoter: any
        privacy: string
        debug_info_html: any
        comment_count: number
        insertion_id: any
        should_open_in_stream: boolean
        video_status_message: any
        rich_summary?: RichSummary
        repin_count: number
        alt_text?: string
        story_pin_data_id?: string
        is_eligible_for_related_products: boolean
        done_by_me: boolean
        reaction_counts: ReactionCounts
        has_required_attribution_provider: boolean
        is_promoted: boolean
        is_eligible_for_pdp: boolean
        shopping_flags: any[]
        additional_hide_reasons: any[]
        is_quick_promotable: boolean
        promoted_is_removable: boolean
        tracking_params: string
        grid_title: string
        is_native: boolean
        aggregated_pin_data: AggregatedPinData
        access: any[]
        price_currency: string
        creator_analytics: any
        sponsorship: any
        is_downstream_promotion: boolean
        collection_pin: any
        image_signature: string
        type: string
        created_at: string
        pinner: Pinner
        videos?: Videos
    }

    export interface ImageCrop {
        min_y: number
        max_y: number
    }

    export interface Images {
        "170x": N170x
        "136x136": N136x136
        "236x": N236x
        "474x": N474x
        "736x": N736x
        orig: Orig
    }

    export interface N170x {
        width: number
        height: number
        url: string
    }

    export interface N136x136 {
        width: number
        height: number
        url: string
    }

    export interface N236x {
        width: number
        height: number
        url: string
    }

    export interface N474x {
        width: number
        height: number
        url: string
    }

    export interface N736x {
        width: number
        height: number
        url: string
    }

    export interface Orig {
        width: number
        height: number
        url: string
    }

    export interface StoryPinData {
        node_id: string
        total_video_duration: number
        metadata: Metadata
        has_affiliate_products: boolean
        pages: Page[]
        page_count: number
        id: string
        last_edited: any
        type: string
        pages_preview: PagesPreview[]
        has_product_pins: boolean
        is_deleted: boolean
        static_page_count: number
    }

    export interface Metadata {
        root_user_id: string
        basics: any
        canvas_aspect_ratio: number
        showreel_data: any
        is_compatible: boolean
        recipe_data: any
        compatible_version: string
        diy_data: any
        root_pin_id: string
        is_editable: boolean
        is_promotable: boolean
        template_type: any
        version: string
        pin_title: string
        pin_image_signature: string
    }

    export interface Page {
        blocks: Block[]
    }

    export interface Block {
        video: Video
        block_type: number
    }

    export interface Video {
        video_list: VideoList
        id: string
        bitrates: any
    }

    export interface VideoList {
        V_EXP6: VExp6
        V_HLSV3_MOBILE: VHlsv3Mobile
        V_EXP3: VExp3
        V_EXP7: VExp7
        V_EXP4: VExp4
        V_EXP5: VExp5
    }

    export interface VExp6 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VHlsv3Mobile {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp3 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp7 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp4 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp5 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface PagesPreview {
        blocks: Block2[]
    }

    export interface Block2 {
        video: Video2
        block_type: number
    }

    export interface Video2 {
        video_list: VideoList2
        id: string
        bitrates: any
    }

    export interface VideoList2 {
        V_EXP6: VExp62
        V_HLSV3_MOBILE: VHlsv3Mobile2
        V_EXP3: VExp32
        V_EXP7: VExp72
        V_EXP4: VExp42
        V_EXP5: VExp52
    }

    export interface VExp62 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VHlsv3Mobile2 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp32 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp72 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp42 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface VExp52 {
        width: number
        height: number
        duration: number
        url: string
        thumbnail: string
        captions_urls: any
        best_captions_url: any
    }

    export interface NativeCreator {
        node_id: string
        explicitly_followed_by_me: boolean
        is_ads_only_profile: boolean
        username: string
        ads_only_profile_site: any
        id: string
        blocked_by_me: boolean
        full_name: string
        type: string
        image_small_url: string
        image_large_url: string
    }

    export interface Board {
        node_id: string
        is_collaborative: boolean
        url: string
        owner: Owner
        id: string
        privacy: string
        layout: string
        type: string
        collaborated_by_me: boolean
        followed_by_me: boolean
        name: string
        image_thumbnail_url: string
    }

    export interface Owner {
        node_id: string
        explicitly_followed_by_me: boolean
        is_ads_only_profile: boolean
        username: string
        ads_only_profile_site: any
        id: string
        blocked_by_me: boolean
        full_name: string
        type: string
        image_small_url: string
        image_large_url: string
    }

    export interface ManualInterestTags {
        "913687294118": string
        "922485100073": string
        "917168129833": string
        "958576677329"?: string
        "931931967798"?: string
        "894641378234": string
        "960425232993"?: string
    }

    export interface Comments {
        uri: string
        data: any[]
        bookmark: any
    }

    export interface RichSummary {
        url: string
        site_name: string
        products: any[]
        favicon_images: FaviconImages
        type: string
        apple_touch_icon_images: AppleTouchIconImages
        apple_touch_icon_link: string
        display_name: string
        type_name: string
        id: string
        actions: any[]
        favicon_link: string
        display_description: string
        is_hard_404?: boolean
    }

    export interface FaviconImages {
        orig: string
        "50x"?: string
    }

    export interface AppleTouchIconImages {
        orig: string
        "50x"?: string
    }

    export interface ReactionCounts {
        "1"?: number
    }

    export interface AggregatedPinData {
        node_id: string
        has_xy_tags: boolean
        id: string
        creator_analytics: any
        aggregated_stats: AggregatedStats
        did_it_data: DidItData
        is_shop_the_look: boolean
    }

    export interface AggregatedStats {
        saves?: number
        done: number
    }

    export interface DidItData {
        rating: number
        recommend_scores: RecommendScore[]
        details_count: number
        user_count: number
        videos_count: number
        responses_count: number
        tags: any[]
        recommended_count: number
        type: string
        images_count: number
    }

    export interface RecommendScore {
        score: number
        count: number
    }

    export interface Pinner {
        node_id: string
        explicitly_followed_by_me: boolean
        is_ads_only_profile: boolean
        username: string
        ads_only_profile_site: any
        id: string
        blocked_by_me: boolean
        full_name: string
        type: string
        image_small_url: string
        image_large_url: string
    }

    export interface Videos {
        node_id: string
        id: string
        video_list: VideoList3
    }

    export interface VideoList3 {
        V_HLSV4: VHlsv4
        V_720P: V720P
        V_HLSV3_MOBILE: VHlsv3Mobile3
    }

    export interface VHlsv4 {
        url: string
        width: number
        height: number
        duration: number
        thumbnail: string
        captions_urls: CaptionsUrls
    }

    export interface CaptionsUrls { }

    export interface V720P {
        url: string
        width: number
        height: number
        duration: number
        thumbnail: string
        captions_urls: CaptionsUrls2
    }

    export interface CaptionsUrls2 { }

    export interface VHlsv3Mobile3 {
        url: string
        width: number
        height: number
        duration: number
        thumbnail: string
        captions_urls: CaptionsUrls3
    }

    export interface CaptionsUrls3 { }

    export interface ClientContext {
        analysis_ua: AnalysisUa
        app_type_detailed: number
        app_version: string
        batch_exp: boolean
        browser_locale: string
        browser_name: string
        browser_type: number
        browser_version: string
        country: string
        country_from_hostname: string
        country_from_ip: string
        csp_nonce: string
        current_url: string
        debug: boolean
        deep_link: string
        enabled_advertiser_countries: string[]
        facebook_token: any
        full_path: string
        http_referrer: string
        impersonator_user_id: any
        invite_code: string
        invite_sender_id: string
        is_authenticated: boolean
        is_bot: string
        is_internal_ip: boolean
        is_full_page: boolean
        is_mobile_agent: boolean
        is_sterling_on_steroids: boolean
        is_tablet_agent: boolean
        language: string
        locale: string
        origin: string
        path: string
        placed_experiences: any
        referrer: any
        region_from_ip: string
        request_host: string
        request_identifier: string
        social_bot: string
        stage: string
        sterling_on_steroids_ldap: any
        sterling_on_steroids_user_type: any
        unauth_id: string
        seo_debug: boolean
        user_agent_can_use_native_app: boolean
        user_agent_platform: string
        user_agent_platform_version: any
        user_agent: string
        user: User
        utm_campaign: any
        visible_url: string
    }

    export interface AnalysisUa {
        app_type: number
        browser_name: string
        browser_version: string
        device_type: any
        device: string
        os_name: string
        os_version: string
    }

    export interface User {
        unauth_id: string
        ip_country: string
        ip_region: string
    }

    export interface Resource {
        name: string
        options: Options
    }

    export interface Options {
        bookmarks: string[]
        exclude_add_pin_rep: boolean
        field_set_key: string
        is_own_profile_pins: boolean
        redux_normalize_feed: boolean
        user_id: string
        username: string
    }
}
