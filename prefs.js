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

// Set the logging level for Normandy (default: 50)
// Controls the verbosity of logs generated by Normandy.
user_pref("app.normandy.logging.level", 50);

// Set the number of migrations applied by Normandy (default: 12)
// Tracks the number of migration steps that have been applied.
user_pref("app.normandy.migrationsApplied", 12);

// Set the skew time for synchronization in seconds (default: 600)
// Defines the time offset for synchronization with the server.
user_pref("app.normandy.onsync_skew_sec", 600);

// Set the interval for Normandy runs in seconds (default: 21600)
// Defines how often Normandy checks for updates or runs tasks.
user_pref("app.normandy.run_interval_seconds", 21600);

// Set the URL for learning more about Shield (default: a support page)
// Provides users with a link to learn more about Firefox Shield features.
user_pref("app.normandy.shieldLearnMoreUrl", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield");

// Set the user ID for Normandy (default: a UUID)
// Identifies the user for Normandy data collection.
user_pref("app.normandy.user_id", "d8f13846-8044-4162-a9c8-e988ea653f38");

// Set the URL for release notes (default: Mozilla release notes)
// Provides a link to the release notes for the current version of Firefox.
user_pref("app.releaseNotesURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");

// Set the URL for release notes in the about dialog (default: Mozilla release notes)
// Provides a link to the release notes specifically for the about dialog.
user_pref("app.releaseNotesURL.aboutDialog", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");

// Set the URL for release notes prompt (default: Mozilla release notes)
// Provides a link to the release notes when prompted for updates.
user_pref("app.releaseNotesURL.prompt", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=updateprompt");

// Enable or disable opting out of Shield studies (default: true)
// When enabled (true), users can choose to opt out of participating in Shield studies.
user_pref("app.shield.optoutstudies.enabled", true);

// Set the base URL for Firefox support (default: Mozilla support page)
// Provides the base URL for accessing support resources for the current version of Firefox.
user_pref("app.support.baseURL", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/");

// Enable or disable automatic updates (false = disable, true = enable)
// When enabled (true), Firefox will automatically check for and install updates.
user_pref("app.update.auto", true);

// Allow updates for unelevated installations (false = disable, true = enable)
// When false, updates will not be allowed for installations that lack administrative privileges.
user_pref("app.update.background.allowUpdatesForUnelevatedInstallations", false);

// Set the interval for background update checks in seconds (default: 25200)
// Defines how often Firefox checks for updates in the background.
user_pref("app.update.background.interval", 25200);

// Set the log level for background update checks (default: error)
// Controls the verbosity of logs generated during background update checks.
user_pref("app.update.background.loglevel", "error");

// Set the targeting snapshot interval for messaging in seconds (default: 3600)
// Defines how often the messaging system checks for update targeting conditions.
user_pref("app.update.background.messaging.targeting.snapshot.intervalSec", 3600);

// Set previous reasons for background update errors (default: array of reasons)
// Stores reasons for previous update failures in an array.
user_pref("app.update.background.previous.reasons", ["unsupported OS"]);

// Set the timeout for background update checks in seconds (default: 600)
// Defines how long Firefox will wait for a background update check before timing out.
user_pref("app.update.background.timeoutSec", 600);

// Track the number of background update errors (default: 1)
// Counts the number of errors encountered during background update checks.
user_pref("app.update.backgroundErrors", 1);

// Set the maximum number of background update errors (default: unspecified)
// Controls the limit for how many background update errors can occur before stopping attempts.
user_pref("app.update.backgroundMaxErrors", 5); // Example value, adjust as needed.

// Set the wait time for the update badge in seconds (default: 345600)
// Defines how long the update badge will be displayed before being hidden.
user_pref("app.update.badgeWaitTime", 345600);

// Set the update channel (default: release)
// Defines which update channel Firefox will use (e.g., release, beta, nightly).
user_pref("app.update.channel", "release");

// Enable or disable checking the installation time (false = disable, true = enable)
// When enabled (true), Firefox will check how long the current installation has been active.
user_pref("app.update.checkInstallTime", true);

// Set the number of days for checking installation time (default: 63)
// Defines how many days since installation are considered for updates.
user_pref("app.update.checkInstallTime.days", 63);

// Set the maximum number of download attempts for updates (default: 2)
// Controls how many times Firefox will attempt to download an update before giving up.
user_pref("app.update.download.maxAttempts", 2);

// Set the maximum number of elevation attempts for updates (default: 2)
// Defines how many times Firefox will try to elevate privileges for an update.
user_pref("app.update.elevate.maxAttempts", 2);

// Set the interval for checking updates in seconds (default: 21600)
// Defines how often Firefox will check for updates.
user_pref("app.update.interval", 21600);

// Enable or disable language pack updates (false = disable, true = enable)
// When enabled (true), Firefox will check for updates to installed language packs.
user_pref("app.update.langpack.enabled", true);

// Set the last update time for addon background updates (default: timestamp)
// Stores the last time an update check was performed for addons in the background.
user_pref("app.update.lastUpdateTime.addon-background-update-timer", 1730528426);

// Set the last update time for background updates (default: timestamp)
// Records the last time a background update check was completed.
user_pref("app.update.lastUpdateTime.background-update-timer", 1730578921);

// Set the last update time for browser cleanup of thumbnails (default: timestamp)
// Stores the last time a cleanup of browser thumbnails occurred.
user_pref("app.update.lastUpdateTime.browser-cleanup-thumbnails", 1730578921); // Example value, adjust as needed.

// Set the last update time for recipe client addon runs (default: timestamp)
// Records the last time the recipe client addon ran an update check.
user_pref("app.update.lastUpdateTime.recipe-client-addon-run", 1730578921);

// Set the last update time for region updates (default: timestamp)
// Stores the last time the region update check was performed.
user_pref("app.update.lastUpdateTime.region-update-timer", 1730528426);

// Set the last update time for the experiment loader timer (default: timestamp)
// Records the last time the experiment loader ran an update check.
user_pref("app.update.lastUpdateTime.rs-experiment-loader-timer", 1730578892);

// Set the last update time for polling changes in services settings (default: timestamp)
// Stores the last time a poll for changes in services settings occurred.
user_pref("app.update.lastUpdateTime.services-settings-poll-changes", 1730528426);

// Set the last update time for suggestion ingestion (default: timestamp)
// Records the last time suggestion ingestion was updated.
user_pref("app.update.lastUpdateTime.suggest-ingest", 1730528400);

// Set the last update time for telemetry modules pings (default: timestamp)
// Stores the last time telemetry modules sent a ping.
user_pref("app.update.lastUpdateTime.telemetry_modules_ping", 1730528456);

// Set the last update time for XPI signature verification (default: timestamp)
// Records the last time the verification of XPI signatures was performed.
user_pref("app.update.lastUpdateTime.xpi-signature-verification", 1730528426);

// Enable or disable update logging (false = disable, true = enable)
// When enabled (true), Firefox will log update activities to the console.
user_pref("app.update.log", false);

// Enable or disable logging to a specific file (false = disable, true = enable)
// When enabled (true), Firefox will log update activities to a specified file.
user_pref("app.update.log.file", false);

// Set the delay for auto restart after updates in milliseconds (default: unspecified)
// Defines how long Firefox will wait before automatically restarting after an update.
user_pref("app.update.noWindowAutoRestart.delayMs", 300000); // Example value, adjust as needed.

// Enable or disable auto restart without a window (false = disable, true = enable)
// When enabled (true), Firefox can restart without requiring a visible window.
user_pref("app.update.noWindowAutoRestart.enabled", true);

// Enable or disable notifications during downloads (false = disable, true = enable)
// When disabled (false), Firefox will not notify users during download updates.
user_pref("app.update.notifyDuringDownload", false);

// Set the wait time for update prompts in seconds (default: 691200)
// Defines how long Firefox will wait before prompting for updates.
user_pref("app.update.promptWaitTime", 691200);

// Enable or disable staging updates (false = disable, true = enable)
// When enabled (true), Firefox can stage updates before installation.
user_pref("app.update.staging.enabled", true);

// Set the first timer interval for update checks in milliseconds (default: 30000)
// Defines how long to wait before the first update check.
user_pref("app.update.timerFirstInterval", 30000);

// Set the minimum delay for update timers in seconds (default: 120)
// Controls the minimum delay between update checks.
user_pref("app.update.timerMinimumDelay", 120);

// Set the URL for update details (default: URL)
// Defines the URL for viewing more information about updates.
user_pref("app.update.url.details", "https://www.mozilla.org/%LOCALE%/firefox/notes");

// Set the manual update URL (default: URL)
// Defines the URL for manually updating Firefox.
user_pref("app.update.url.manual", "https://www.mozilla.org/%LOCALE%/firefox/new?reason=manual-update");

// Enable or disable double-tap zooming (false = disable, true = enable)
// When enabled (true), double-tap zooming is allowed on touch devices.
user_pref("apz.allow_double_tap_zooming", true);

// Enable or disable immediate handoff (false = disable, true = enable)
// When enabled (true), allows for immediate handoff of touch events.
user_pref("apz.allow_immediate_handoff", false); // Example value, adjust as needed.

// Enable or disable zooming (false = disable, true = enable)
// When enabled (true), users can zoom in on web content.
user_pref("apz.allow_zooming", true);

// Enable or disable zooming out (false = disable, true = enable)
// When disabled (false), users cannot zoom out of web content.
user_pref("apz.allow_zooming_out", false);

// Set the friction for fling physics (default: 0.015)
// Controls the friction applied during a fling gesture on touch devices.
user_pref("apz.android.chrome_fling_physics.friction", 0.015);

// Set the inflexion point for fling physics (default: 0.35)
// Determines how the speed of the fling gesture affects the deceleration.
user_pref("apz.android.chrome_fling_physics.inflexion", 0.35);

// Set the stop threshold for fling physics (default: 0.1)
// Defines the minimum velocity required for a fling gesture to be recognized.
user_pref("apz.android.chrome_fling_physics.stop_threshold", 0.1);

// Enable or disable autoscrolling (false = disable, true = enable)
// When enabled (true), allows for automatic scrolling while dragging.
user_pref("apz.autoscroll.enabled", true);

// Set the breakout angle for axis lock (default: 0.392699 radians)
// Determines the angle at which the axis lock can be overridden.
user_pref("apz.axis_lock.breakout_angle", 0.392699);

// Set the breakout threshold for axis lock (default: 0.03125)
// Defines the distance threshold to break out of axis lock.
user_pref("apz.axis_lock.breakout_threshold", 0.03125);

// Set the direct pan angle for axis lock (default: 1.0472 radians)
// Specifies the angle at which direct panning is allowed when locked.
user_pref("apz.axis_lock.direct_pan_angle", 1.0472);

// Set the lock angle for axis lock (default: 0.523599 radians)
// Defines the angle threshold for maintaining axis lock during panning.
user_pref("apz.axis_lock.lock_angle", 0.523599);

// Set the axis lock mode (default: 3)
// Determines the behavior of axis locking during panning and dragging.
// 0 - No locking
// 1 - Lock to X-axis
// 2 - Lock to Y-axis
// 3 - Lock to the closest axis (default)
user_pref("apz.axis_lock.mode", 3);

// Set the content response timeout in milliseconds (default: 400)
// Defines the maximum wait time for a response when handling content.
// This affects how long the system waits before timing out.
user_pref("apz.content_response_timeout", 400);

// Set the X coordinate for the danger zone (default: 50)
// Specifies the horizontal area for danger zone interactions, typically for touch inputs.
// Adjusts the sensitivity area for drag actions.
user_pref("apz.danger_zone_x", 50);

// Set the Y coordinate for the danger zone (default: 100)
// Specifies the vertical area for danger zone interactions, typically for touch inputs.
// Adjusts the sensitivity area for drag actions.
user_pref("apz.danger_zone_y", 100);

// Enable or disable effects linked to scrolling (false = disable, true = enable)
// When disabled (false), scrolling linked effects (such as momentum scrolling) will not be triggered.
user_pref("apz.disable_for_scroll_linked_effects", false);

// Set the expiry time for the display port in milliseconds (default: 15000)
// Defines how long the display port can remain active before being reset.
// Affects how long a display port is considered valid for rendering.
user_pref("apz.displayport_expiry_ms", 15000);

// Set the default zoom level for double-tap zooming (default: 1.2)
// Specifies the zoom level applied when a double-tap gesture is detected.
// The zoom factor can be adjusted based on user preference.
user_pref("apz.doubletapzoom.defaultzoomin", 1.2);

// Enable or disable dragging (false = disable, true = enable)
// When enabled (true), users can drag content within the application.
// Disabling this option will prevent any drag actions.
user_pref("apz.drag.enabled", true);

// Enable or disable touch-based dragging (false = disable, true = enable)
// When enabled (true), touch gestures can initiate dragging actions.
// Disabling this option will prevent touch interactions from dragging content.
user_pref("apz.drag.touch.enabled", true);

// Enable or disable enlarging the display port when clipped (false = disable, true = enable)
// When enabled (true), the display port will enlarge to prevent clipping of content.
// Disabling this option keeps the display port static, potentially causing clipping.
user_pref("apz.enlarge_displayport_when_clipped", false);

// Set the bottom margin override for fixed positioning (default: 0)
// Specifies the margin from the bottom for fixed position elements.
// Adjusts how fixed elements behave in relation to the viewport.
user_pref("apz.fixed-margin-override.bottom", 0);

// Enable or disable the fixed margin override (false = disable, true = enable)
// When enabled (true), custom margins for fixed elements can be applied.
// Disabling this option will ignore any custom margin settings.
user_pref("apz.fixed-margin-override.enabled", false);

// Set the top margin override for fixed positioning (default: 0)
// Specifies the margin from the top for fixed position elements.
// Adjusts how fixed elements behave in relation to the viewport.
user_pref("apz.fixed-margin-override.top", 0);

// Set the base multiplier for fling acceleration (default: 1.0)
// Defines the base factor for acceleration during fling gestures.
// Adjusting this affects how quickly the fling motion accelerates.
user_pref("apz.fling_accel_base_mult", 1.0);

// Set the maximum pause interval for fling acceleration in milliseconds (default: 50)
// Defines how long the system will wait during a fling before considering it a pause.
// A shorter interval makes the fling more responsive to user interactions.
user_pref("apz.fling_accel_max_pause_interval_ms", 50);

// Set the minimum fling velocity in pixels per second (default: 1.5)
// Defines the minimum speed required for a gesture to be recognized as a fling.
// Lower values may make it easier to trigger flings, while higher values require faster gestures.
user_pref("apz.fling_accel_min_fling_velocity", 1.5);

// Set the minimum pan velocity in pixels per second (default: 0.8)
// Defines the minimum speed required for a gesture to be recognized as a pan.
// Similar to fling velocity but applicable for panning actions.
user_pref("apz.fling_accel_min_pan_velocity", 0.8);

// Set the supplemental multiplier for fling acceleration (default: 1.0)
// Defines an additional factor for acceleration during fling gestures.
// Adjusts the responsiveness and feel of fling actions.
user_pref("apz.fling_accel_supplemental_mult", 1.0);

// Set the x1 value for the fling curve function (default: 0.0)
// Specifies the first control point for the cubic Bézier function used in fling animations.
// Adjusting this affects the acceleration curve of the fling gesture.
user_pref("apz.fling_curve_function_x1", 0.0);

// Set the x2 value for the fling curve function (default: 1.0)
// Specifies the second control point for the cubic Bézier function used in fling animations.
// Adjusting this affects the deceleration curve of the fling gesture.
user_pref("apz.fling_curve_function_x2", 1.0);

// Set the y1 value for the fling curve function (default: 0.0)
// Specifies the first control point for the cubic Bézier function used in fling animations.
// Adjusting this affects the vertical acceleration curve of the fling gesture.
user_pref("apz.fling_curve_function_y1", 0.0);

// Set the y2 value for the fling curve function (default: 1.0)
// Specifies the second control point for the cubic Bézier function used in fling animations.
// Adjusting this affects the vertical deceleration curve of the fling gesture.
user_pref("apz.fling_curve_function_y2", 1.0);

// Set the fling curve threshold in inches per millisecond (default: -1.0)
// Defines the threshold for fling gestures; a negative value means no threshold is applied.
// Positive values specify the minimum distance required to be considered a fling.
user_pref("apz.fling_curve_threshold_inches_per_ms", -1.0);

// Set the friction for fling gestures (default: 0.002)
// Defines the friction applied during fling gestures, affecting how quickly the fling decelerates.
user_pref("apz.fling_friction", 0.002);

// Set the minimum velocity threshold for flings in pixels per second (default: 0.5)
// Defines the minimum speed required for a gesture to be recognized as a fling.
// Lower values allow for more gestures to qualify as flings.
user_pref("apz.fling_min_velocity_threshold", 0.5);

// Set the threshold for stopping a fling on tap in pixels (default: 0.05)
// Defines the distance threshold for a tap to interrupt a fling gesture.
// Smaller values mean that lighter taps can stop a fling.
user_pref("apz.fling_stop_on_tap_threshold", 0.05);

// Set the threshold for considering a fling as stopped in pixels (default: 0.01)
// Defines the distance below which a fling is considered stopped.
// Helps determine when to end the fling interaction.
user_pref("apz.fling_stopped_threshold", 0.01);

// Enable or disable keyboard support (false = disable, true = enable)
// When enabled (true), keyboard input is supported in the application.
user_pref("apz.keyboard.enabled", true);

// Enable or disable passive event listeners for keyboard (false = disable, true = enable)
// When enabled (true), passive event listeners are used for keyboard events to improve performance.
user_pref("apz.keyboard.passive-listeners", true);

// Enable or disable double-tap zoom gesture on touchpad for Mac (false = disable, true = enable)
// When enabled (true), users can double-tap with two fingers on a touchpad to zoom in.
user_pref("apz.mac.enable_double_tap_zoom_



































// Enable or disable TRR mode (0 = Off, 1 = Reserved, 2 = First, 3 = Only, 4 = Reserved, 5 = Off by choice)
// Sets the resolver mode for DNS-over-HTTPS.
user_pref("network.trr.mode", 3);

// Set the URI for the DoH server (must be HTTPS)
// Specifies the URL Firefox will use for DNS-over-HTTPS requests.
user_pref("network.trr.uri", "");

// Set a list of potential resolvers for the user interface
// When enabled, the TRR service will always use the value of "network.trr.uri".
user_pref("network.trr.resolvers", "");

// Set credentials that will be used in the HTTP requests to the DoH end-point
// This is the value sent in the Authorization: request header.
user_pref("network.trr.credentials", "");

// Enable or disable waiting for captive portal detection before using TRR (false = disable, true = enable)
// When enabled (true), Firefox waits for portal detection before initiating TRR.
user_pref("network.trr.wait-for-portal", false);

// Allow or disallow RFC 1918 private addresses in TRR responses (false = disable, true = enable)
// When enabled (true), allows the use of private addresses in TRR responses.
user_pref("network.trr.allow-rfc1918", false);

// Enable or disable the use of GET requests instead of POST for DoH (false = disable, true = enable)
// When enabled (true), Firefox will use GET requests for DoH instead of POST.
user_pref("network.trr.useGET", false);

// Set the domain for TRR verification at startup (default is example.com)
// This preference sets which domain to check for a positive answer.
user_pref("network.trr.confirmationNS", "example.com");

// Set the bootstrap address for the DoH server (default is none)
// Use this to bypass the native resolver for the specified DoH server.
user_pref("network.trr.bootstrapAddress", "");

// Set the duration for a name to be kept in the TRR blocklist (in seconds)
// Default is 60 seconds; this controls how long to wait before retrying blocked names.
user_pref("network.trr.blacklist-duration", 60);

// Set the request timeout for DoH requests (in milliseconds)
// Default is 1500 ms; this determines how long to wait for a DoH response before failing.
user_pref("network.trr.request_timeout_ms", 1500);

// Set the request timeout for TRR-only mode (in milliseconds)
// Default is 30000 ms; this applies specifically in TRR-only mode.
user_pref("network.trr.request_timeout_mode_trronly_ms", 30000);

// Enable or disable early AAAA request handling (false = disable, true = enable)
// When enabled (true), Firefox will use A records as soon as they are received without waiting for AAAA.
user_pref("network.trr.early-AAAA", false);

// Enable or disable skipping AAAA requests when IPv6 is not supported (false = disable, true = enable)
// When true, it prevents AAAA requests if the system lacks IPv6 connectivity.
user_pref("network.trr.skip-AAAA-when-not-supported", true);

// Enable or disable waiting for both A and AAAA responses before notifying listeners (false = disable, true = enable)
// When true, this cancels early A record usage.
user_pref("network.trr.wait-for-A-and-AAAA", true);

// Set the maximum number of consecutive failures before TRR is considered broken
// Default is 5; this checks if the DoH server is functioning correctly.
user_pref("network.trr.max-fails", 5);

// Enable or disable ECS (EDNS Client Subnet) in TRR requests (false = disable, true = enable)
// When disabled (true), TRR will not include ECS in requests.
user_pref("network.trr.disable-ECS", true);

// Set domains to be resolved using the native resolver instead of TRR
// Users can specify a comma-separated list of domains to exclude from TRR.
user_pref("network.trr.excluded-domains", "");

// Set a built-in list of domains to be resolved using the native resolver instead of TRR
// Default includes 'localhost' and 'local'; used for captive portal detection.
user_pref("network.trr.builtin-excluded-domains", "localhost,local");

// Enable or disable TRR when a VPN is detected (false = disable, true = enable)
// When true, TRR will be enabled regardless of VPN status on Windows.
user_pref("network.trr.enable_when_vpn_detected", false);

// Enable or disable TRR when a Windows System Proxy is detected (false = disable, true = enable)
// When true, TRR will be enabled regardless of proxy status on Windows.
user_pref("network.trr.enable_when_proxy_detected", true);

// Enable or disable TRR when NRPT (Name Resolution Policy Table) is detected (false = disable, true = enable)
// When true, TRR will be enabled regardless of NRPT status on Windows.
user_pref("network.trr.enable_when_nrpt_detected", true);

// Enable or disable sending User-Agent headers in TRR requests (false = disable, true = enable)
// When false, the User-Agent header will not be included in TRR requests.
user_pref("network.trr.send_user-agent_headers", false);

// Enable or disable sending Accept-Language headers in TRR requests (false = disable, true = enable)
// When false, the Accept-Language header will not be included in TRR requests.
user_pref("network.trr.send_accept-language_headers", false);

// Enable or disable clearing the DNS+TRR cache on preference change (false = disable, true = enable)
// When true, the cache will be cleared when relevant TRR preferences change.
user_pref("network.trr.clear-cache-on-pref-change", true);












































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
