// Enable or disable the Accessibility Object Model (false = disable, true = enable)
// When enabled (true), developers can use JavaScript to enhance custom elements for accessibility.
user_pref("accessibility.AOM.enabled", false);

// Enable or disable ARIA element reflection (false = disable, true = enable)
// When enabled (true), allows JavaScript to reflect ARIA attributes on elements, improving interaction with ARIA properties.
user_pref("accessibility.ARIAElementReflection.enabled", false);

// Enable or disable activation of elements by access keys (false = disable, true = enable)
// When enabled (true), pressing an access key immediately activates associated elements, improving accessibility navigation.
user_pref("accessibility.accesskeycausesactivation", true);

// Enable or disable blocking of automatic page refreshes (false = disable blocking, true = enable blocking)
// When enabled (true), Firefox will block auto-refreshing pages, which can be useful for screen readers or low-vision users.
user_pref("accessibility.blockautorefresh", false);

// Enable or disable caret browsing (false = disable, true = enable)
// When enabled (true), caret browsing allows navigating web pages using a movable cursor, similar to a text editor.
user_pref("accessibility.browsewithcaret", false);

// Enable or disable the shortcut for toggling caret browsing (false = disable, true = enable)
// When enabled (true), the F7 key can be used to toggle caret browsing on and off.
user_pref("accessibility.browsewithcaret_shortcut.enabled", true);

// Enable or disable all accessibility services (0 = enabled, 1 = partially disabled, 2 = fully disabled)
// Setting this to 2 will fully disable accessibility services, which can improve performance if not needed.
user_pref("accessibility.force_disabled", 0);

// Enable or disable mono audio output (false = stereo, true = mono)
// When enabled (true), mono audio combines left and right audio channels, useful for users with hearing in one ear.
user_pref("accessibility.monoaudio.enable", false);

// Control focus behavior for form controls with the mouse (0 = default behavior, 1 = focus with any mouse click, 2 = focus with left mouse click)
// Setting this to 2 focuses form controls only when clicked with the left mouse button.
user_pref("accessibility.mouse_focuses_formcontrol", 2);

// Configure tab key focus behavior (value is a bitfield, 1 = text fields, 2 = other form controls, 4 = links)
// Setting this to 7 (1 + 2 + 4) makes the tab key navigate through all focusable elements (text fields, form controls, and links).
user_pref("accessibility.tabfocus", 7);

// Enable or disable tab focus for XUL elements (false = disable, true = enable)
// When enabled (true), the tab key can focus on XUL elements (Firefox's internal UI elements).
user_pref("accessibility.tabfocus_applies_to_xul", true);

// Enable or disable type-ahead find feature (false = disable, true = enable)
// When enabled (true), type-ahead find allows searching for text in the page by typing it directly.
user_pref("accessibility.typeaheadfind", false);

// Automatically start type-ahead find when typing on a page (true = enabled)
user_pref("accessibility.typeaheadfind.autostart", true);

// Set case sensitivity for type-ahead find 
// (0 = case-insensitive, 1 = case-sensitive, 2 = smart-case sensitivity based on input)
user_pref("accessibility.typeaheadfind.casesensitive", 0);

// Enable or disable sound notification when a match is found during type-ahead find (true = enabled)
user_pref("accessibility.typeaheadfind.enablesound", true);

// Set whether the find bar should briefly flash to indicate matches 
// (0 = no flash, 1 = flash once, etc.)
user_pref("accessibility.typeaheadfind.flashBar", 1);

// Limit type-ahead find to only links on the page (false = search all text, true = links only)
user_pref("accessibility.typeaheadfind.linksonly", false);

// Allow manual activation of type-ahead find using a designated key (true = enabled)
user_pref("accessibility.typeaheadfind.manual", true);

// Set the maximum number of matches shown in the type-ahead find (1000 = limit to 1000 matches)
user_pref("accessibility.typeaheadfind.matchesCountLimit", 1000);

// Enable or disable pre-filling the find bar with the currently selected text (false = disabled)
user_pref("accessibility.typeaheadfind.prefillwithselection", false);

// Specify the sound URL for type-ahead find matches; "beep" uses the system beep sound
user_pref("accessibility.typeaheadfind.soundURL", "beep");

// Limit type-ahead find to starting only at links (false = search all text, true = start at links only)
user_pref("accessibility.typeaheadfind.startlinksonly", false);

// Set the timeout in milliseconds for the type-ahead find search (5000 = 5 seconds)
user_pref("accessibility.typeaheadfind.timeout", 5000);

// Enable or disable the UI Automation API, which aids screen readers (false = disabled, true = enabled)
user_pref("accessibility.uia.enable", false);

// Show a warning when using caret browsing, which allows text cursor navigation (true = show warning, false = disable warning)
user_pref("accessibility.warn_on_browsewithcaret", true);

// Suppress certain UI elements after a clipboard copy on Windows (0 = no suppression, 1 = minimal suppression, 2 = hide tooltips and pop-ups)
user_pref("accessibility.windows.suppress-after-clipboard-copy", 2);

// Suppress specific UI elements during Snap Layout actions on Windows (0 = no suppression, 1 = hide some elements, 2 = hide more UI popups and overlays)
user_pref("accessibility.windows.suppress-for-snap-layout", 2);

// Show or hide favicons (website icons) in notifications (false = hide favicons, true = show favicons)
user_pref("alerts.showFavicons", false);

// Use the system alert backend for notifications, so alerts are displayed in the system’s notification center (true = use system backend, false = use Firefox notifications)
user_pref("alerts.useSystemBackend", true);

// URL for submitting feedback or ideas directly to Mozilla
user_pref("app.feedback.baseURL", "https://ideas.mozilla.org/");

// URL for accessing the Normandy service, which manages remote settings, studies, and rollouts in Firefox
user_pref("app.normandy.api_url", "https://normandy.cdn.mozilla.net/api/v1");

// Enable developer mode for Normandy, allowing custom experiments (false = disable, true = enable)
user_pref("app.normandy.dev_mode", false);

// Enable the Normandy experiment and settings system in Firefox (true = enable, false = disable)
user_pref("app.normandy.enabled", true);

// Indicator of whether this is the first time Normandy is running on this profile (true = first run, false = not first run)
user_pref("app.normandy.first_run", false);

// Last build ID detected by Normandy, which helps manage experiment compatibility and versioning (blank by default)
user_pref("app.normandy.last_seen_buildid", "");









// Set the startup page to a blank page (0 = blank page)
user_pref("browser.startup.page", 0); 

// Set the homepage to a blank page
user_pref("browser.startup.homepage", "about:blank"); 

// Enable or disable the new tab page feature (false = disable)
user_pref("browser.newtabpage.enabled", false); 

// Show or hide sponsored content in the new tab page (false = hide)
user_pref("browser.newtabpage.activity-stream.showSponsored", false); 

// Show or hide sponsored top sites in the new tab page (false = hide)
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); 

// Set default sites for the new tab page (empty = no sites)
user_pref("browser.newtabpage.activity-stream.default.sites", ""); 

// Enable or disable the use of Windows location provider (false = disable)
user_pref("geo.provider.ms-windows-location", false); 

// Enable or disable the use of Core Location for geolocation (false = disable)
user_pref("geo.provider.use_corelocation", false); 

// Enable or disable the use of Geoclue for geolocation (false = disable)
user_pref("geo.provider.use_geoclue", false); 

// Show or hide the Get Add-ons pane in the Add-ons Manager (false = hide)
user_pref("extensions.getAddons.showPane", false); 

// Enable or disable recommendations in the Add-ons Manager (false = disable)
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); 

// Enable or disable the discovery feature for new content (false = disable)
user_pref("browser.discovery.enabled", false); 

// Enable or disable data submission policy for reporting (false = disable)
user_pref("datareporting.policy.dataSubmissionEnabled", false); 

// Enable or disable health report uploads (false = disable)
user_pref("datareporting.healthreport.uploadEnabled", false); 

// Enable or disable unified telemetry (false = disable)
user_pref("toolkit.telemetry.unified", false); 

// Enable or disable telemetry collection (false = disable)
user_pref("toolkit.telemetry.enabled", false); 

// Set the telemetry server URL (data:, = no data sent)
user_pref("toolkit.telemetry.server", "data:,"); 

// Enable or disable telemetry archive (false = disable)
user_pref("toolkit.telemetry.archive.enabled", false); 

// Enable or disable the new profile ping feature (false = disable)
user_pref("toolkit.telemetry.newProfilePing.enabled", false); 

// Enable or disable shutdown ping sender (false = disable)
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); 

// Enable or disable update ping feature (false = disable)
user_pref("toolkit.telemetry.updatePing.enabled", false); 

// Enable or disable breakage health report ping (false = disable)
user_pref("toolkit.telemetry.bhrPing.enabled", false); 

// Enable or disable first shutdown ping (false = disable)
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); 

// Opt out of telemetry coverage data collection (true = opt-out)
user_pref("toolkit.telemetry.coverage.opt-out", true); 

// Opt out of coverage data collection (true = opt-out)
user_pref("toolkit.coverage.opt-out", true); 

// Set the base URL for coverage endpoint ("" = no endpoint set)
user_pref("toolkit.coverage.endpoint.base", ""); 

// Enable or disable telemetry for new tab page activity streams (false = disable)
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); 

// Enable or disable telemetry for new tab page activity (false = disable)
user_pref("browser.newtabpage.activity-stream.telemetry", false); 

// Enable or disable participation in shield studies (false = disable)
user_pref("app.shield.optoutstudies.enabled", false); 

// Enable or disable Normandy experiments (false = disable)
user_pref("app.normandy.enabled", false); 

// Set the API URL for Normandy ("" = no URL set)
user_pref("app.normandy.api_url", ""); 

// Set the report URL for Breakpad ("" = no URL set)
user_pref("breakpad.reportURL", ""); 

// Enable or disable sending crash reports for tabs (false = disable)
user_pref("browser.tabs.crashReporting.sendReport", false); 

// Enable or disable the unsubmitted crash reports check (false = disable)
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); 

// Enable or disable auto-submission of unsubmitted crash reports (false = disable)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); 

// Enable or disable prefetching the next page (false = disable)
user_pref("network.prefetch-next", false); 

// Enable or disable DNS prefetching (true = disable)
user_pref("network.dns.disablePrefetch", true); 

// Enable or disable DNS prefetching from HTTPS pages (true = disable)
user_pref("network.dns.disablePrefetchFromHTTPS", true); 

// Enable or disable the network predictor (false = disable)
user_pref("network.predictor.enabled", false); 

// Enable or disable prefetching by the network predictor (false = disable)
user_pref("network.predictor.enable-prefetch", false); 

// Set the maximum number of speculative parallel connections (0 = no limit, 1 = limited to one, 2+ = limit to specified number)
user_pref("network.http.speculative-parallel-limit", 0); 

// Enable or disable speculative connections for places (false = disable)
user_pref("browser.places.speculativeConnect.enabled", false); 

// Enable or disable sending pings with links (false = disable)
user_pref("browser.send_pings", false); 

// Enable or disable using remote DNS with SOCKS proxies (true = enable)
user_pref("network.proxy.socks_remote_dns", true); 

// Enable or disable failover to direct connection when using a proxy (false = disable)
user_pref("network.proxy.failover_direct", false); 

// Enable or disable bypassing the proxy settings (false = disable)
user_pref("network.proxy.allow_bypass", false); 

// Set the mode for DNS-over-HTTPS (3 = DoH only, 0 = no DoH, 1 = system DNS, 2 = normal DNS)
user_pref("network.trr.mode", 3); 

// Set the URI for the DNS-over-HTTPS resolver
user_pref("network.trr.uri", "https://example.dns"); 

// Set the custom URI for the DNS-over-HTTPS resolver (if applicable)
user_pref("network.trr.custom_uri", "https://example.dns"); 

// Enable or disable quick suggest feature in the URL bar (false = disable)
user_pref("browser.urlbar.quicksuggest.enabled", false); 

// Enable or disable non-sponsored quick suggestions in the URL bar (false = disable)
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); 

// Enable or disable sponsored quick suggestions in the URL bar (false = disable)
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); 

// Enable or disable suggestions from the search engine in the URL bar (false = disable)
user_pref("browser.search.suggest.enabled", false); 

// Enable or disable search suggestions in the URL bar (false = disable)
user_pref("browser.urlbar.suggest.searches", false); 

// Enable or disable trending feature in the URL bar (false = disable)
user_pref("browser.urlbar.trending.featureGate", false); 

// Enable or disable the addons feature in the URL bar (false = disable)
user_pref("browser.urlbar.addons.featureGate", false); 

// Enable or disable the MDN feature for the URL bar (false = disable)
user_pref("browser.urlbar.mdn.featureGate", false); 

// Enable or disable the Pocket feature for the URL bar (false = disable)
user_pref("browser.urlbar.pocket.featureGate", false); 

// Enable or disable the Weather feature for the URL bar (false = disable)
user_pref("browser.urlbar.weather.featureGate", false); 

// Enable or disable the Yelp feature for the URL bar (false = disable)
user_pref("browser.urlbar.yelp.featureGate", false); 

// Enable or disable the Clipboard feature for the URL bar (false = disable)
user_pref("browser.urlbar.clipboard.featureGate", false); 

// Enable or disable recent searches feature in the URL bar (false = disable)
user_pref("browser.urlbar.recentsearches.featureGate", false); 

// Enable or disable form autofill functionality (false = disable)
user_pref("browser.formfill.enable", false); 

// Enable or disable suggestions from search engines in the URL bar (false = disable)
user_pref("browser.urlbar.suggest.engines", false); 

// Enable or disable styling for visited links (false = disable)
user_pref("layout.css.visited_links_enabled", false); 

// Separate the default search engine for private browsing (true = enable)
user_pref("browser.search.separatePrivateDefault", true); 

// Enable or disable the UI for separate private search defaults (true = enable)
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); 

// Enable or disable the autofill feature for forms (false = disable)
user_pref("signon.autofillForms", false); 

// Enable or disable the capture of formless sign-in (false = disable)
user_pref("signon.formlessCapture.enabled", false); 

// Control HTTP authentication for subresources (1 = allow for subresources)
// 0 = disallow for subresources, 1 = allow for subresources, 2 = allow only if the main resource is authenticated
user_pref("network.auth.subresource-http-auth-allow", 1); 

// Enable or disable Windows Single Sign-On for HTTP (false = disable)
user_pref("network.http.windows-sso.enabled", false); 

// Enable or disable disk caching (false = disable caching)
// true = enable caching, false = disable caching
user_pref("browser.cache.disk.enable", false); 

// Force the media cache to use memory in private browsing (true = enable)
// true = use memory cache in private browsing, false = use disk cache
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); 

// Set the maximum size of the media memory cache (in kilobytes)
// Specifies the maximum size for media cache in memory (default is usually smaller)
user_pref("media.memory_cache_max_size", 65536); 

// Set the privacy level for session store (2 = use private browsing mode)
// 0 = store all session data, 1 = store data in private browsing mode, 2 = strict private browsing
user_pref("browser.sessionstore.privacy_level", 2); 

// Enable or disable the application restart registration on Windows (false = disable)
// true = enable restart registration, false = disable
user_pref("toolkit.winRegisterApplicationRestart", false); 

// Enable or disable showing shortcut favicons in the browser shell (false = disable)
// true = show favicons, false = hide favicons
user_pref("browser.shell.shortcutFavicons", false); 

// Require safe negotiation for SSL connections (true = require)
// true = require safe negotiation, false = allow unsafe negotiation
user_pref("security.ssl.require_safe_negotiation", true); 

// Enable OCSP (Online Certificate Status Protocol) checking (1 = enable)
// 0 = disable OCSP checking, 1 = enable checking, 2 = enable with soft fail
user_pref("security.OCSP.enabled", 1); 

// Require OCSP checking for certificate validation (true = require)
// true = require OCSP, false = do not require
user_pref("security.OCSP.require", true); 

// Set the enforcement level for certificate pinning (0 = no enforcement, 1 = soft enforcement, 2 = strict enforcement)
user_pref("security.cert_pinning.enforcement_level", 2); 

// Set the CRLite mode (0 = disabled, 1 = soft mode, 2 = strict mode)
user_pref("security.pki.crlite_mode", 2); 

// Enable or disable blocking display content with mixed content (true = enable)
user_pref("security.mixed_content.block_display_content", true); 

// Enable or disable HTTPS-only mode (true = enable)
user_pref("dom.security.https_only_mode", true); 

// Enable or disable HTTPS-only mode in private browsing (true = enable)
user_pref("dom.security.https_only_mode_pbm", true); 

// Enable or disable upgrading local HTTP connections to HTTPS (true = enable)
user_pref("dom.security.https_only_mode.upgrade_local", true); 

// Enable or disable sending HTTP background requests in HTTPS-only mode (false = disable)
user_pref("dom.security.https_only_mode_send_http_background_request", false); 

// Treat unsafe SSL negotiation as broken (true = enable)
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); 

// Show expert error pages for bad certificates (true = enable)
user_pref("browser.xul.error_pages.expert_bad_cert", true); 

// Enable or disable user context feature (true = enable)
user_pref("privacy.userContext.enabled", true); 

// Enable or disable the user context UI (true = enable)
user_pref("privacy.userContext.ui.enabled", true); 

// Enable or disable opening a new tab container on left-click (true = enable)
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true); 

// Force the use of the default user context ID for external links (true = enable)
user_pref("browser.link.force_default_user_context_id_for_external_opens", true); 

// Enable or disable the GMP (Gecko Media Plugins) provider (false = disable)
user_pref("media.gmp-provider.enabled", false); 

// Enable or disable the ability to move or resize windows via script (true = disable)
user_pref("dom.disable_window_move_resize", true); 

// Enable or disable the UI tour feature (false = disable)
user_pref("browser.uitour.enabled", false); 

// Set the URL for the UI tour (empty = disable)
user_pref("browser.uitour.url", ""); 

// Disable the remote debugging for developer tools (false = disable)
user_pref("devtools.debugger.remote-enabled", false); 

// Set the default permissions for shortcuts (0 = block, 1 = allow, 2 = use default)
user_pref("permissions.default.shortcuts", 2); 

// Set the URL for the default permissions manager (empty = default)
user_pref("permissions.manager.defaultsUrl", ""); 

// Set the allowed object URL whitelist for web channels (empty = no restrictions)
user_pref("webchannel.allowObject.urlWhitelist", ""); 

// Show Punycode for IDN (true = enable)
user_pref("network.IDN_show_punycode", true); 

// Enable or disable the PDF.js viewer (false = disable)
user_pref("pdfjs.disabled", false); 

// Enable or disable scripting in the PDF viewer (false = disable scripting)
user_pref("pdfjs.enableScripting", false); 

// Enable or disable middle-clicking to search clipboard contents in new tabs (false = disable)
user_pref("browser.tabs.searchclipboardfor.middleclick", false); 

// Enable or disable content analysis features (false = disable)
user_pref("browser.contentanalysis.enabled", false); 

// Set the default result for content analysis (0 = disable, other values may define specific actions)
user_pref("browser.contentanalysis.default_result", 0); 

// Enable or disable the prompt before handling new download types (true = ask before handling)
user_pref("browser.download.always_ask_before_handling_new_types", true); 

// Set restricted domains for web extensions (empty = no restrictions)
user_pref("extensions.webextensions.restrictedDomains", ""); 

// Set the content blocking category (strict = enable strict tracking protection)
user_pref("browser.contentblocking.category", "strict"); 

// Enable or disable web compatibility for anti-tracking features (true = enable)
user_pref("privacy.antitracking.enableWebcompat", true); 

// Enable or disable sanitizing on shutdown (true = enable)
user_pref("privacy.sanitize.sanitizeOnShutdown", true); 

// Enable or disable clearing the cache on shutdown (true = enable)
user_pref("privacy.clearOnShutdown.cache", true); 

// Enable or disable clearing the cache on shutdown (version 2) (true = enable)
user_pref("privacy.clearOnShutdown_v2.cache", true); 

// Enable or disable clearing downloads on shutdown (true = enable)
user_pref("privacy.clearOnShutdown.downloads", true); 

// Enable or disable clearing form data on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown.formdata", true); 

// Enable or disable clearing browsing history on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown.history", true); 

// Enable or disable clearing history, form data, and downloads on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); 

// Enable or disable clearing site settings on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown.siteSettings", true); 

// Enable or disable clearing site settings on shutdown (version 2) (true = enable, false = disable)
user_pref("privacy.clearOnShutdown_v2.siteSettings", true); 

// Enable or disable clearing open windows on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown.openWindows", true); 

// Enable or disable clearing cookies on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown.cookies", true); 

// Enable or disable clearing offline applications on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown.offlineApps", true); 

// Enable or disable clearing sessions on shutdown (true = enable, false = disable)
user_pref("privacy.clearOnShutdown.sessions", true); 

// Enable or disable clearing cookies and storage on shutdown (version 2) (true = enable, false = disable)
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); 

// Enable or disable clearing the cache when clearing site data (true = enable, false = disable)
user_pref("privacy.clearSiteData.cache", true); 

// Enable or disable clearing cookies and storage when clearing site data (true = enable, false = disable)
user_pref("privacy.clearSiteData.cookiesAndStorage", true); 

// Enable or disable clearing of history, form data, and downloads when clearing site data (true = enable, false = disable)
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true); 

// Enable or disable clearing of site settings when clearing site data (true = enable, false = disable)
user_pref("privacy.clearSiteData.siteSettings", true); 

// Enable or disable clearing the cache when using clear private data (true = enable, false = disable)
user_pref("privacy.cpd.cache", true); 

// Enable or disable clearing the cache from history clearing options (true = enable, false = disable)
user_pref("privacy.clearHistory.cache", true); 

// Enable or disable clearing form data from history clearing options (true = enable, false = disable)
user_pref("privacy.cpd.formdata", true); 

// Enable or disable clearing browsing history from history clearing options (true = enable, false = disable)
user_pref("privacy.cpd.history", true); 

// Enable or disable clearing downloads from history clearing options (true = enable, false = disable)
user_pref("privacy.cpd.downloads", true); 

// Enable or disable clearing history, form data, and downloads from history clearing options (true = enable, false = disable)
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true); 

// Enable or disable clearing cookies when using clear private data (false = disable, true = enable)
user_pref("privacy.cpd.cookies", true); 

// Enable or disable clearing sessions when using clear private data (true = enable, false = disable)
user_pref("privacy.cpd.sessions", true); 

// Enable or disable clearing offline applications when using clear private data (false = disable, true = enable)
user_pref("privacy.cpd.offlineApps", true); 

// Enable or disable clearing cookies and storage when clearing history (false = disable, true = enable)
user_pref("privacy.clearHistory.cookiesAndStorage", true); 

// Enable or disable clearing open windows when using clear private data (false = disable, true = enable)
user_pref("privacy.cpd.openWindows", true); 

// Enable or disable clearing saved passwords when using clear private data (false = disable, true = enable)
user_pref("privacy.cpd.passwords", true); 

// Enable or disable clearing site settings when using clear private data (false = disable, true = enable)
user_pref("privacy.cpd.siteSettings", true); 

// Enable or disable clearing site settings when clearing history (false = disable, true = enable)
user_pref("privacy.clearHistory.siteSettings", true); 

// Set the time span for privacy sanitization (0 = everything, other values may limit to recent history)
user_pref("privacy.sanitize.timeSpan", 0); 

// Enable or disable fingerprinting protection in private browsing mode (true = enable, false = disable)
user_pref("privacy.fingerprintingProtection.pbmode", true); 

// Set overrides for fingerprinting protection (empty = no overrides; specify domains or rules if desired)
user_pref("privacy.fingerprintingProtection.overrides", ""); 

// Set granular overrides for fingerprinting protection (empty = no granular overrides)
user_pref("privacy.fingerprintingProtection.granularOverrides", ""); 

// Enable or disable remote overrides for fingerprinting protection (false = disable, true = enable)
user_pref("privacy.fingerprintingProtection.remoteOverrides.enabled", false); 

// Enable or disable resistance to fingerprinting (true = enable resistance, false = disable)
user_pref("privacy.resistFingerprinting", true); 

// Enable or disable resistance to fingerprinting in private browsing mode (true = enable, false = disable)
user_pref("privacy.resistFingerprinting.pbmode", true); 

// Set the maximum inner width for the browser window (in pixels)
user_pref("privacy.window.maxInnerWidth", 1600); 

// Set the maximum inner height for the browser window (in pixels)
user_pref("privacy.window.maxInnerHeight", 900); 

// Block access to the Mozilla Add-on Manager for fingerprinting resistance (true = block, false = allow)
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); 

// Enable or disable letterboxing as a fingerprinting protection method (true = enable, false = disable)
user_pref("privacy.resistFingerprinting.letterboxing", true); 

// Set dimensions for letterboxing (empty = use default dimensions)
user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); 

// Specify exempted domains for fingerprinting resistance (wildcard format)
user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid"); 

// Set the language spoofing level (1 = spoof to English, 0 = no spoofing)
user_pref("privacy.spoof_english", 1); 

// Enable or disable the use of system colors in the browser (false = disable system colors, true = enable)
user_pref("browser.display.use_system_colors", false); 

// Set the behavior for opening new windows (3 = open in a new tab, 1 = open in a new window, 2 = open in the same window)
user_pref("browser.link.open_newwindow", 3); 

// Enable or disable WebGL (true = enable WebGL, false = disable)
user_pref("webgl.disabled", true); 

// Enable or disable automatic private browsing mode on startup (true = enable, false = disable)
user_pref("browser.privatebrowsing.autostart", true); 

// Enable or disable in-memory caching (false = disable, true = enable)
user_pref("browser.cache.memory.enable", false); 

// Set whether to remember sign-ons (false = do not remember, true = remember)
user_pref("signon.rememberSignons", false); 

// Enable or disable memory-only permissions (true = enable, false = disable)
user_pref("permissions.memory_only", true); 

// Enable or disable the use of a certificate database (true = disable, false = enable)
user_pref("security.nocertdb", true); 

// Enable or disable site icons in the browser chrome (false = disable icons, true = enable icons)
user_pref("browser.chrome.site_icons", false); 

// Set the maximum number of tabs to undo (0 = disable undo feature)
user_pref("browser.sessionstore.max_tabs_undo", 0); 

// Enable or disable resuming from a crash (false = do not resume, true = resume)
user_pref("browser.sessionstore.resume_from_crash", false); 

// Forbid opening files with specific applications (true = forbid, false = allow)
user_pref("browser.download.forbid_open_with", true); 

// Enable or disable URL bar suggestions from history (false = disable, true = enable)
user_pref("browser.urlbar.suggest.history", false); 

// Enable or disable URL bar suggestions from bookmarks (false = disable, true = enable)
user_pref("browser.urlbar.suggest.bookmark", false); 

// Enable or disable URL bar suggestions from open pages (false = disable, true = enable)
user_pref("browser.urlbar.suggest.openpage", false); 

// Enable or disable URL bar suggestions from top sites (false = disable, true = enable)
user_pref("browser.urlbar.suggest.topsites", false); 

// Set the maximum number of rich results in the URL bar (0 = disable rich results)
user_pref("browser.urlbar.maxRichResults", 0); 

// Enable or disable auto-fill in the URL bar (false = disable, true = enable)
user_pref("browser.urlbar.autoFill", false); 

// Enable or disable browsing history (false = disable history tracking, true = enable)
user_pref("places.history.enabled", false); 

// Enable or disable taskbar lists (false = disable taskbar integration, true = enable)
user_pref("browser.taskbar.lists.enabled", false); 

// Enable or disable frequent sites in taskbar lists (false = disable, true = enable)
user_pref("browser.taskbar.lists.frequent.enabled", false); 

// Enable or disable recent sites in taskbar lists (false = disable, true = enable)
user_pref("browser.taskbar.lists.recent.enabled", false); 

// Enable or disable tasks in taskbar lists (false = disable, true = enable)
user_pref("browser.taskbar.lists.tasks.enabled", false); 

// Set the download folder location (2 = use the desktop, 0 = default, 1 = custom location)
user_pref("browser.download.folderList", 2); 

// Enable or disable autofill for addresses in forms (false = disable, true = enable)
user_pref("extensions.formautofill.addresses.enabled", false); 

// Enable or disable autofill for credit cards in forms (false = disable, true = enable)
user_pref("extensions.formautofill.creditCards.enabled", false); 

// Specify allowed events for popups (string of events, e.g., "click dblclick")
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown"); 

// Enable or disable page thumbnail capturing (true = disable capturing, false = enable)
user_pref("browser.pagethumbnails.capturing_disabled", true); 

// Enable or disable using the system backend for notifications (false = disable, true = enable)
user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false); 

// Keep Both Disabled: If you prefer not to use EME (often for reasons related to privacy or avoiding DRM.
// Enable or disable Encrypted Media Extensions (false = disable EME, true = enable EME)
user_pref("media.eme.enabled", false); 

// Enable or disable the UI for Encrypted Media Extensions (false = disable UI, true = enable UI)
user_pref("browser.eme.ui.enabled", false); 

// https://wiki.mozilla.org/Security/Referrer 
// Never send the Referer header (0 = never send the header, 1 = send only on links, 2 = send on all requests)
user_pref("network.http.sendRefererHeader", 0);

// Send a trimmed Referer URL (only origin) regardless of origin (0 = full URL, 1 = without query string, 2 = only the origin)
user_pref("network.http.referer.trimmingPolicy", 2); 

// Send a trimmed Referer URL (only origin) across origins (0 = full URL, 1 = without query string, 2 = only the origin)
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); 

// Send a Referer only when the base domains are the same across origins (0 = full referrer in all cases, 1 = same base domain, 2 = same-origin only)
user_pref("network.http.referer.XOriginPolicy", 1); 

// Spoof the source URL as the Referer (true = send the target URL as the referrer)
user_pref("network.http.referer.spoofSource", true); 

// Set default referrer policy to no-referrer (0 = no-referrer, 1 = same-origin, 2 = strict-origin-when-cross-origin, 3 = no-referrer-when-downgrade)
user_pref("network.http.referer.defaultPolicy", 0); 

// Set default referrer policy in Private Browsing to no-referrer (same as above but for Private Browsing)
user_pref("network.http.referer.defaultPolicy.pbmode", 0); 

// Strip out the referrer for .onion addresses (true = strip referrer for .onion addresses)
user_pref("network.http.referer.hideOnionSource", true); 


// user_pref("network.trr.bootstrapAddr", "10.0.0.1"); 


// Enable or disable the extensions blocklist (true = enable blocklist, false = disable blocklist)
user_pref("extensions.blocklist.enabled", true); 

// Enable or disable first-party isolation (false = disable isolation, true = enable isolation)
user_pref("privacy.firstparty.isolate", true); 

// Enable or disable WebCompat shims for better compatibility (true = enable shims, false = disable shims)
user_pref("extensions.webcompat.enable_shims", true); 

// Enable or disable geolocation (false = disable geolocation, true = enable geolocation)
user_pref("geo.enabled", false); 

// Enable or disable full-screen API (false = disable full-screen API, true = enable full-screen API)
user_pref("full-screen-api.enabled", false); 

// Default permissions for geolocation (0 = prompt, 1 = allow, 2 = block)
user_pref("permissions.default.geo", 0); 

// Default permissions for camera access (0 = prompt, 1 = allow, 2 = block)
user_pref("permissions.default.camera", 0); 

// Default permissions for microphone access (0 = prompt, 1 = allow, 2 = block)
user_pref("permissions.default.microphone", 0); 

// Default permissions for desktop notifications (0 = prompt, 1 = allow, 2 = block)
user_pref("permissions.default.desktop-notification", 0); 

// Default permissions for XR (0 = prompt, 1 = allow, 2 = block)
user_pref("permissions.default.xr", 0); 

// Allow or disallow access to .onion sites in secure contexts (true = allow, false = disallow)
user_pref("dom.securecontext.allowlist_onions", true); 

// Hide referrer when accessing .onion addresses (true = strip referrer, false = include referrer)
user_pref("network.http.referer.hideOnionSource", true); 

// Enable or disable context menu events (false = disable context menu, true = enable context menu)
user_pref("dom.event.contextmenu.enabled", false); 

// Enable or disable clipboard events (false = disable clipboard events, true = enable clipboard events)
user_pref("dom.event.clipboardevents.enabled", false); 

// Enable or disable the Do Not Track header (true = enable header, false = disable header)
user_pref("privacy.donottrackheader.enabled", true); 

// Control cookie behavior (1 = block third-party cookies, 0 = allow all, 2 = block all)
user_pref("network.cookie.cookieBehavior", 1); 

// Enable or disable fingerprinting protection (true = enable protection, false = disable protection)
user_pref("privacy.fingerprintingProtection", true); 

// Disallow relaxing the default cross-site referrer settings (true = enforce strict rules, false = allow relaxing)
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true); 

// Disallow relaxing the default cross-site referrer for top navigation (true = enforce strict rules, false = allow relaxing)
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); 

// Enable or disable partitioning of the OCSP cache (true = enable partitioning, false = disable partitioning)
user_pref("privacy.partition.network_state.ocsp_cache", true); 

// Enable or disable query stripping (true = enable stripping, false = disable stripping)
user_pref("privacy.query_stripping.enabled", true); 

// Enable or disable tracking protection (true = enable protection, false = disable protection)
user_pref("privacy.trackingprotection.enabled", true); 

// Enable or disable social tracking protection (true = enable protection, false = disable protection)
user_pref("privacy.trackingprotection.socialtracking.enabled", true); 

// Enable or disable cryptomining tracking protection (true = enable protection, false = disable protection)
user_pref("privacy.trackingprotection.cryptomining.enabled", true); 

// Enable or disable fingerprinting tracking protection (true = enable protection, false = disable protection)
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); 

// Enable or disable service workers (false = disable service workers, true = enable service workers)
user_pref("dom.serviceWorkers.enabled", false); 

// Enable or disable web notifications (false = disable notifications, true = enable notifications)
user_pref("dom.webnotifications.enabled", false); 

// Enable or disable push notifications (false = disable push, true = enable push)
user_pref("dom.push.enabled", false); 

// Enable or disable WebRTC peer connections (false = disable peer connections, true = enable peer connections)
user_pref("media.peerconnection.enabled", false); 

// Enable or disable global privacy control (true = enable control, false = disable control)
user_pref("privacy.globalprivacycontrol.enabled", true); 

// Disable custom fonts
user_pref("browser.display.use_document_fonts", false); 

// Disable site-specific zoom
user_pref("browser.zoom.siteSpecific", false); 

// Disable access to device sensors
user_pref("device.sensors.enabled", false); 

// Disable performance metrics
user_pref("dom.enable_performance", false); 

// Disable resource timing
user_pref("dom.enable_resource_timing", false); 

// Disable gamepad access
user_pref("dom.gamepad.enabled", false); 

// Limit CPU core info
user_pref("dom.maxHardwareConcurrency", false); 

// Disable touch events
user_pref("dom.w3c_touch_events.enabled", false); 

// Disable Web Audio API
user_pref("dom.webaudio.enabled", false); 

// Reset system font whitelist
user_pref("font.system.whitelist", ""); 

// Reset app name
user_pref("general.appname.override", ""); 

// Reset app version
user_pref("general.appversion.override", ""); 

// Reset build ID
user_pref("general.buildID.override", ""); 

// Reset OS CPU info
user_pref("general.oscpu.override", ""); 

// Reset platform info
user_pref("general.platform.override", ""); 

// Reset user agent
user_pref("general.useragent.override", ""); 

// Disable media device access
user_pref("media.navigator.enabled", false); 

// Disable device change events
user_pref("media.ondevicechange.enabled", false); 

// Disable video statistics
user_pref("media.video_stats.enabled", false); 

// Disable speech synthesis
user_pref("media.webspeech.synth.enabled", false); 

// Use standins for native colors
user_pref("ui.use_standins_for_native_colors", false); 

// Disable debug info in WebGL
user_pref("webgl.enable-debug-renderer-info", false); 

// Ignore the homepage override for the current version (true = honor version, "ignore" = ignore version)
user_pref("browser.startup.homepage_override.mstone", "ignore"); 

// Enable or disable CFR for addons on the new tab page (false = disable, true = enable)
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); 

// Enable or disable CFR for features on the new tab page (false = disable, true = enable)
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); 

// Set the Family Safety mode (0 = off, 1 = on, 2 = restricted)
user_pref("security.family_safety.mode", 0); 

// Enable or disable service worker support for web notifications (false = disable, true = enable)
user_pref("dom.webnotifications.serviceworker.enabled", false); 

// Use US English locale for JavaScript (true = use US English, false = use system locale)
user_pref("javascript.use_us_english_locale", true); 

// Skip DNS over HTTPS when parental controls are enabled (false = do not skip, true = skip)
user_pref("network.dns.skipTRR-when-parental-control-enabled", false); 

// Enable or disable telemetry for the ping center (false = disable telemetry, true = enable telemetry)
user_pref("browser.ping-centre.telemetry", false); 

// Enable or disable the "What's New" panel in the messaging system (false = disable, true = enable)
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); 

// Default content analysis allowance (false = block, true = allow)
user_pref("browser.contentanalysis.default_allow", false); 
