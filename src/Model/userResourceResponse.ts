export interface UserResourceResponse {
    resource_response: UserResourceResponse.ResourceResponse
    client_context: UserResourceResponse.ClientContext
    resource: UserResourceResponse.Resource
    request_identifier: string
}

export namespace UserResourceResponse {

    export interface ResourceResponse {
        status: string
        code: number
        message: string
        endpoint_name: string
        data: UserResourceData
        x_pinterest_sli_endpoint_name: string
        http_status: number
    }

    export interface UserResourceData {
        node_id: string
        is_partner: boolean
        storefront_search_enabled: boolean
        seo_noindex_reason: any
        has_shopping_showcase: boolean
        follower_count: number
        domain_verified: boolean
        seo_description: string
        storefront_management_enabled: boolean
        is_primary_website_verified: boolean
        native_pin_count: number
        has_showcase: boolean
        image_xlarge_url: string
        following_count: number
        image_large_url: string
        has_published_pins: boolean
        joined_communities_count: number
        pin_count: number
        first_name: string
        last_pin_save_time: string
        show_discovered_feed: boolean
        group_board_count: number
        is_ads_only_profile: boolean
        type: string
        pins_done_count: number
        should_show_messaging: boolean
        is_inspirational_merchant: boolean
        indexed: boolean
        partner: Partner
        should_default_comments_off: boolean
        has_catalog: boolean
        show_impressum: boolean
        board_count: number
        story_pin_count: number
        verified_identity: VerifiedIdentity
        is_tastemaker: boolean
        image_medium_url: string
        ads_only_profile_site: any
        listed_website_url: any
        username: string
        profile_views: number
        interest_following_count: any
        is_private_profile: boolean
        profile_reach: number
        show_engagement_tab: boolean
        explicit_user_following_count: number
        domain_url: any
        seo_title: string
        profile_discovered_public: boolean
        has_custom_board_sorting_order: boolean
        seo_canonical_domain: string
        profile_cover: ProfileCover
        website_url: any
        id: string
        video_pin_count: number
        image_small_url: string
        eligible_profile_tabs: EligibleProfileTab[]
        about: string
        explicitly_followed_by_me: boolean
        pronouns: any[]
        full_name: string
        blocked_by_me: boolean
        show_creator_profile: boolean
        impressum_url: any
        last_name: string
        instagram_data: any
        is_verified_merchant: boolean
    }

    export interface Partner {
        node_id: string
        enable_profile_message: boolean
        contact_phone_country: ContactPhoneCountry
        profile_place: any
        contact_email: string
        enable_profile_address: boolean
        contact_phone: string
    }

    export interface ContactPhoneCountry {
        code: string
        phone_code: string
    }

    export interface VerifiedIdentity { }

    export interface ProfileCover {
        images: Images
        type: string
        source_id: any
        video: any
        source: string
    }

    export interface Images {
        originals: Originals
        "1200x": N1200x
        "750x": N750x
        "736x": N736x
        "474x": N474x
    }

    export interface Originals {
        url: string
        width: number
        height: number
    }

    export interface N1200x {
        url: string
        width: number
        height: number
    }

    export interface N750x {
        url: string
        width: number
        height: number
    }

    export interface N736x {
        url: string
        width: number
        height: number
    }

    export interface N474x {
        url: string
        width: number
        height: number
    }

    export interface EligibleProfileTab {
        id: string
        type: string
        tab_type: number
        name: string
        is_default: boolean
    }

    export interface ClientContext {
        analysis_ua: AnalysisUa
        app_type_detailed: number
        app_version: string
        batch_exp: boolean
        browser_locale: string
        browser_name: string
        browser_type: any
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
        username: string
        field_set_key: string
    }
}
