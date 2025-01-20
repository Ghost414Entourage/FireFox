// Enable or disable the Accessibility Object Model
// This setting specifies whether developers can use JavaScript to enhance custom elements for accessibility.
// Options:
// true = Enable the Accessibility Object Model
// false = Disable the Accessibility Object Model
// User preference:
user_pref("accessibility.AOM.enabled", false);

// Enable or disable ARIA element reflection
// This setting specifies whether JavaScript can reflect ARIA attributes on elements, improving interaction with ARIA properties.
// Options:
// true = Enable ARIA element reflection
// false = Disable ARIA element reflection
// User preference:
user_pref("accessibility.ARIAElementReflection.enabled", false);

// Enable or disable activation of elements by access keys
// This setting specifies whether pressing an access key immediately activates associated elements, improving accessibility navigation.
// Options:
// true = Enable activation of elements by access keys
// false = Disable activation of elements by access keys
// User preference:
user_pref("accessibility.accesskeycausesactivation", true);

// Enable or disable blocking of automatic page refreshes
// This setting specifies whether Firefox will block auto-refreshing pages, useful for screen readers or low-vision users.
// Options:
// true = Enable blocking of automatic page refreshes
// false = Disable blocking of automatic page refreshes
// User preference:
user_pref("accessibility.blockautorefresh", false);

// Enable or disable caret browsing
// This setting specifies whether caret browsing allows navigating web pages using a movable cursor, similar to a text editor.
// Options:
// true = Enable caret browsing
// false = Disable caret browsing
// User preference:
user_pref("accessibility.browsewithcaret", false);

// Enable or disable the shortcut for toggling caret browsing
// This setting specifies whether the F7 key can be used to toggle caret browsing on and off.
// Options:
// true = Enable the F7 shortcut for caret browsing
// false = Disable the F7 shortcut for caret browsing
// User preference:
user_pref("accessibility.browsewithcaret_shortcut.enabled", true);

// Enable or disable all accessibility services
// This setting specifies the level of accessibility services enabled.
// Options:
// 0 = Enabled
// 1 = Partially disabled
// 2 = Fully disabled (improves performance if not needed)
// User preference:
user_pref("accessibility.force_disabled", 0);

// Enable or disable mono audio output
// This setting specifies whether mono audio combines left and right audio channels, useful for users with hearing in one ear.
// Options:
// true = Enable mono audio output
// false = Disable mono audio output
// User preference:
user_pref("accessibility.monoaudio.enable", false);

// Control focus behavior for form controls with the mouse
// This setting specifies how form controls are focused when clicked with the mouse.
// Options:
// 0 = Default behavior
// 1 = Focus with any mouse click
// 2 = Focus with left mouse click only
// User preference:
user_pref("accessibility.mouse_focuses_formcontrol", 2);

// Configure tab key focus behavior
// This setting specifies the focus behavior of the tab key for various elements.
// Options:
// 1 = Text fields
// 2 = Other form controls
// 4 = Links
// User preference (setting to 7 enables focus for all):
user_pref("accessibility.tabfocus", 7);

// Enable or disable tab focus for XUL elements
// This setting specifies whether the tab key can focus on XUL elements (Firefox's internal UI elements).
// Options:
// true = Enable tab focus for XUL elements
// false = Disable tab focus for XUL elements
// User preference:
user_pref("accessibility.tabfocus_applies_to_xul", true);

// Enable or disable type-ahead find feature
// This setting specifies whether type-ahead find allows searching for text in the page by typing it directly.
// Options:
// true = Enable type-ahead find
// false = Disable type-ahead find
// User preference:
user_pref("accessibility.typeaheadfind", false);

// Automatically start type-ahead find when typing on a page
// This setting specifies whether type-ahead find is enabled to start automatically when typing.
// Options:
// true = Enable automatic start of type-ahead find
// false = Disable automatic start of type-ahead find
// User preference:
user_pref("accessibility.typeaheadfind.autostart", true);

// Set case sensitivity for type-ahead find
// This setting specifies the case sensitivity behavior for type-ahead find.
// Options:
// 0 = Case-insensitive
// 1 = Case-sensitive
// 2 = Smart-case sensitivity based on input
// User preference:
user_pref("accessibility.typeaheadfind.casesensitive", 0);

// Enable or disable sound notification when a match is found during type-ahead find
// This setting specifies whether a sound notification is enabled when a match is found.
// Options:
// true = Enable sound notification
// false = Disable sound notification
// User preference:
user_pref("accessibility.typeaheadfind.enablesound", true);

// Set whether the find bar should briefly flash to indicate matches
// This setting specifies the flashing behavior of the find bar to indicate matches.
// Options:
// 0 = No flash
// 1 = Flash once
// User preference:
user_pref("accessibility.typeaheadfind.flashBar", 1);

// Limit type-ahead find to only links on the page
// This setting specifies whether type-ahead find is limited to searching only links.
// Options:
// true = Limit to links only
// false = Search all text
// User preference:
user_pref("accessibility.typeaheadfind.linksonly", false);

// Allow manual activation of type-ahead find using a designated key
// This setting specifies whether manual activation of type-ahead find is enabled.
// Options:
// true = Enable manual activation
// false = Disable manual activation
// User preference:
user_pref("accessibility.typeaheadfind.manual", true);

// Set the maximum number of matches shown in the type-ahead find
// This setting specifies the limit on the number of matches displayed during type-ahead find.
// User preference (setting to 1000 limits to 1000 matches):
user_pref("accessibility.typeaheadfind.matchesCountLimit", 1000);

// Enable or disable pre-filling the find bar with the currently selected text
// This setting specifies whether the find bar is pre-filled with the currently selected text.
// Options:
// true = Enable pre-filling
// false = Disable pre-filling
// User preference:
user_pref("accessibility.typeaheadfind.prefillwithselection", false);

// Specify the sound URL for type-ahead find matches
// This setting specifies the sound to be played for type-ahead find matches; "beep" uses the system beep sound.
// User preference:
user_pref("accessibility.typeaheadfind.soundURL", "beep");

// Limit type-ahead find to starting only at links
// This setting specifies whether type-ahead find starts at links only.
// Options:
// true = Start at links only
// false = Search all text
// User preference:
user_pref("accessibility.typeaheadfind.startlinksonly", false);

// Set the timeout in milliseconds for the type-ahead find search
// This setting specifies the timeout duration for type-ahead find in milliseconds.
// User preference (setting to 5000 sets a 5-second timeout):
user_pref("accessibility.typeaheadfind.timeout", 5000);

// Enable or disable the UI Automation API, which aids screen readers
// This setting specifies whether the UI Automation API is enabled to assist screen readers.
// Options:
// false = Disable UI Automation API
// true = Enable UI Automation API
// User preference:
user_pref("accessibility.uia.enable", false);

// Show a warning when using caret browsing, which allows text cursor navigation
// This setting specifies whether a warning is displayed when caret browsing is used.
// Options:
// true = Show warning
// false = Disable warning
// User preference:
user_pref("accessibility.warn_on_browsewithcaret", true);

// Suppress certain UI elements after a clipboard copy on Windows
// This setting specifies the suppression level of UI elements after copying to the clipboard.
// Options:
// 0 = No suppression
// 1 = Minimal suppression
// 2 = Hide tooltips and pop-ups
// User preference:
user_pref("accessibility.windows.suppress-after-clipboard-copy", 2);

// Suppress specific UI elements during Snap Layout actions on Windows
// This setting specifies the suppression level of UI elements during Snap Layout actions.
// Options:
// 0 = No suppression
// 1 = Hide some elements
// 2 = Hide more UI popups and overlays
// User preference:
user_pref("accessibility.windows.suppress-for-snap-layout", 2);

// Show or hide favicons (website icons) in notifications
// This setting specifies whether favicons are shown in notifications.
// Options:
// false = Hide favicons
// true = Show favicons
// User preference:
user_pref("alerts.showFavicons", false);

// Use the system alert backend for notifications
// This setting specifies whether to use the system’s notification center for alerts.
// Options:
// true = Use system backend
// false = Use Firefox notifications
// User preference:
user_pref("alerts.useSystemBackend", true);

// URL for submitting feedback or ideas directly to Mozilla
// This setting specifies the URL where users can submit feedback or ideas to Mozilla.
// User preference:
user_pref("app.feedback.baseURL", "https://ideas.mozilla.org/");

// URL for accessing the Normandy service, which manages remote settings, studies, and rollouts in Firefox
// This setting specifies the API URL for the Normandy service used in Firefox.
// User preference:
user_pref("app.normandy.api_url", "https://normandy.cdn.mozilla.net/api/v1");

// Enable developer mode for Normandy, allowing custom experiments
// This setting specifies whether developer mode for Normandy is enabled.
// Options:
// false = Disable developer mode
// true = Enable developer mode
// User preference:
user_pref("app.normandy.dev_mode", false);

// Enable the Normandy experiment and settings system in Firefox
// This setting specifies whether the Normandy system, which allows running experiments and managing feature flags, is enabled.
// Options:
// true = Enable Normandy
// false = Disable Normandy
// User preference:
user_pref("app.normandy.enabled", true);

// Indicator of whether this is the first time Normandy is running on this profile
// This setting specifies whether it is the first run of Normandy on the current profile.
// Options:
// true = First run
// false = Not first run
// User preference:
user_pref("app.normandy.first_run", false);

// Last build ID detected by Normandy
// This setting specifies the last build ID seen by Normandy, which helps manage experiment compatibility and versioning.
// User preference:
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
user_pref("apz.mac.enable_double_tap_zoom_touchpad_gesture", true);

// Set the maximum time for a tap gesture in milliseconds (default: 300)
// Defines the duration that must be exceeded for a tap gesture to be recognized as a long press.
user_pref("apz.max_tap_time", 300);

// Set the maximum velocity in inches per millisecond (default: -1.0)
// Defines the maximum speed at which touch gestures can be recognized; negative means no limit.
user_pref("apz.max_velocity_inches_per_ms", -1.0);

// Set the size of the velocity queue (default: 5)
// Specifies the number of velocity entries to keep for touch gestures.
// This affects how accurately the touch input is interpreted.
user_pref("apz.max_velocity_queue_size", 5);

// Set the maximum zoom level (default: 10.0)
// Defines how much users can zoom in on content; higher values allow for more zoom.
user_pref("apz.max_zoom", 10.0);

// Set the minimum speed required for a skate gesture in pixels per second (default: 1.0)
// Determines the minimum velocity for a gesture to qualify as a skate gesture.
user_pref("apz.min_skate_speed", 1.0);

// Set the minimum zoom level (default: 0.25)
// Defines how much users can zoom out on content; lower values allow for less zoom.
user_pref("apz.min_zoom", 0.25);

// Enable or disable the minimap feature (false = disable, true = enable)
// When enabled (true), a minimap is displayed to provide a visual overview of the content.
user_pref("apz.minimap.enabled", false);

// Enable or disable one-touch pinch gestures (false = disable, true = enable)
// When enabled (true), users can use a one-finger pinch gesture to zoom.
user_pref("apz.one_touch_pinch.enabled", false);

// Set the damping factor for overscroll (default: 1.1)
// Controls how much the overscroll effect is damped during interactions.
user_pref("apz.overscroll.damping", 1.1);

// Enable or disable overscroll behavior (false = disable, true = enable)
// When enabled (true), allows content to overscroll beyond its boundaries during touch interactions.
user_pref("apz.overscroll.enabled", true);

// Set the maximum velocity for overscroll in pixels per second (default: 10.0)
// Defines the highest speed at which overscroll can occur during touch interactions.
user_pref("apz.overscroll.max_velocity", 10.0);

// Set the minimum pan distance ratio for overscroll (default: 1.0)
// Determines the minimum distance a user must pan before overscroll is activated.
user_pref("apz.overscroll.min_pan_distance_ratio", 1.0);

// Set the spring stiffness for overscroll behavior (default: 200.0)
// Controls how "springy" the overscroll effect feels; higher values create a stiffer effect.
user_pref("apz.overscroll.spring_stiffness", 200.0);

// Set the stop distance threshold for overscroll in pixels (default: 5.0)
// Defines the distance within which the overscroll effect will stop; smaller values lead to quicker stops.
user_pref("apz.overscroll.stop_distance_threshold", 5.0);

// Set the stop velocity threshold for overscroll in pixels per second (default: 0.01)
// Determines the minimum speed at which the overscroll effect will be considered as stopped.
user_pref("apz.overscroll.stop_velocity_threshold", 0.01);

// Set the stretch factor for overscroll (default: 0.35)
// Controls how much the overscroll content stretches beyond its bounds; higher values allow for more stretch.
user_pref("apz.overscroll.stretch_factor", 0.35);

// Enable or disable asynchronous scroll offset testing (false = disable, true = enable)
// When enabled (true), allows for testing of asynchronous scrolling behavior.
user_pref("apz.overscroll.test_async_scroll_offset.enabled", false);

// Enable or disable paint skipping (false = disable, true = enable)
// When enabled (true), allows Firefox to skip painting during certain touch interactions to improve performance.
user_pref("apz.paint_skipping.enabled", true);

// Set the maximum age for pinch lock buffer in milliseconds (default: 80)
// Defines how long the pinch lock state is maintained; longer durations can affect responsiveness.
user_pref("apz.pinch_lock.buffer_max_age", 80);

// Set the pinch lock mode (default: 2)
// Controls the behavior of pinch lock during touch interactions.
// Mode 0: Disabled; users can zoom freely.
// Mode 1: Enabled but less strict; allows some flexibility while zooming.
// Mode 2: Fully enabled and strict; limits zooming actions significantly to prevent unintended gestures.
user_pref("apz.pinch_lock.mode", 2);

// Set the threshold for scroll lock during pinch gestures (default: 0.0625)
// Defines how sensitive the scroll lock is during a pinch gesture; lower values mean easier activation.
user_pref("apz.pinch_lock.scroll_lock_threshold", 0.0625);

// Set the threshold for breaking out of a span lock during pinch gestures (default: 0.03125)
// Determines how much movement is required to break out of a locked pinch gesture.
user_pref("apz.pinch_lock.span_breakout_threshold", 0.03125);

// Set the threshold for locking spans during pinch gestures (default: 0.03125)
// Controls how much movement is required to maintain a locked span during pinch actions.
user_pref("apz.pinch_lock.span_lock_threshold", 0.03125);

// Enable or disable popups (false = disable, true = enable)
// When enabled (true), popups can appear as defined by the website.
user_pref("apz.popups.enabled", true);

// Enable or disable the preference for minimizing jank with smaller display ports (false = disable, true = enable)
// When enabled (true), the system prefers to maintain minimal display ports to reduce jank during scrolling.
user_pref("apz.prefer_jank_minimal_displayports", true);

// Enable or disable printing of the APZ tree for debugging purposes (false = disable, true = enable)
// When enabled (true), the APZ tree can be printed for analysis.
user_pref("apz.printtree", false);

// Enable or disable recording of checkerboarding events (false = disable, true = enable)
// When enabled (true), the system can record events related to checkerboarding, which is an optimization technique.
user_pref("apz.record_checkerboarding", false);

// Enable or disable the use of a rounded external scroll offset (false = disable, true = enable)
// When enabled (true), the external scroll offset can be rounded for visual consistency.
user_pref("apz.rounded_external_scroll_offset", false);

// Set the delay for repainting during scaling in milliseconds (default: 500)
// Controls how long to wait before repainting the screen during scale operations.
user_pref("apz.scale_repaint_delay_ms", 500);

// Enable or disable the repeat behavior for scrollbar buttons (false = disable, true = enable)
// When enabled (true), scrollbar buttons will repeat actions if held down.
user_pref("apz.scrollbarbuttonrepeat.enabled", true);

// Set the delay for the scrollend event in milliseconds (default: 100)
// Determines how long to wait after scrolling has stopped before firing the scrollend event.
user_pref("apz.scrollend-event.content.delay_ms", 100);

// Enable or disable recalculation of the scroll thumb position (false = disable, true = enable)
// When enabled (true), the system recalculates the position of the scroll thumb dynamically.
user_pref("apz.scrollthumb.recalc", true);

// Set the tolerance for the second tap in seconds (default: 0.5)
// Defines how close the second tap needs to be in time to register as a double tap.
user_pref("apz.second_tap_tolerance", 0.5);

// Enable or disable tests that fail with native injection (false = disable, true = enable)
// When enabled (true), allows tests to run that may not pass when using native event injection.
user_pref("apz.test.fails_with_native_injection", false);

// Enable or disable logging for test events (false = disable, true = enable)
// When enabled (true), the system will log test-related events for debugging purposes.
user_pref("apz.test.logging_enabled", false);

// Set the touch acceleration factor for the X axis (default: 1.0)
// Controls how much acceleration is applied to touch movements along the X axis.
user_pref("apz.touch_acceleration_factor_x", 1.0);

// Set the touch acceleration factor for the Y axis (default: 1.0)
// Controls how much acceleration is applied to touch movements along the Y axis.
user_pref("apz.touch_acceleration_factor_y", 1.0);

// Set the tolerance for touch movements in meters (default: 0.1)
// Defines how much movement is tolerated before it's considered a gesture.
user_pref("apz.touch_move_tolerance", 0.1);

// Set the tolerance for touch start in meters (default: 0.1)
// Defines how much movement is tolerated before the touch start is recognized.
user_pref("apz.touch_start_tolerance", 0.1);

// Set the velocity bias for touch events (default: 0.0)
// Adjusts the perceived velocity of touch movements to enhance responsiveness.
user_pref("apz.velocity_bias", 0.0);

// Set the relevance time for velocity calculations in milliseconds (default: 100)
// Defines how long to consider touch movements when calculating velocity.
user_pref("apz.velocity_relevance_time_ms", 100);

// Enable or disable checking for pan gesture conversion on Windows (false = disable, true = enable)
// When enabled (true), the system checks if touch gestures can be converted to pan gestures.
user_pref("apz.windows.check_for_pan_gesture_conversion", true);

// Enable or disable direct manipulation on Windows (false = disable, true = enable)
// When enabled (true), allows for direct manipulation of content using touch gestures.
user_pref("apz.windows.force_disable_direct_manipulation", false);

// Enable or disable the use of direct manipulation features on Windows (false = disable, true = enable)
// When enabled (true), the system uses direct manipulation techniques for touch interactions.
user_pref("apz.windows.use_direct_manipulation", true);

// Enable or disable activation of all scroll frames (false = disable, true = enable)
// When enabled (true), all scroll frames in the application will be activated for scrolling.
user_pref("apz.wr.activate_all_scroll_frames", false);

// Enable or disable activation of all scroll frames when fission is enabled (false = disable, true = enable)
// When enabled (true), all scroll frames will be activated for scrolling when fission is active.
user_pref("apz.wr.activate_all_scroll_frames_when_fission", true);

// Set the high-memory adjustment for the X-axis skate (default: 0.0)
// Adjusts the behavior of the X-axis skate when the system is in high memory usage conditions.
user_pref("apz.x_skate_highmem_adjust", 0.0);

// Set the size multiplier for X-axis skates (default: 1.25)
// Defines the scaling factor for the size of skates used for X-axis movements.
user_pref("apz.x_skate_size_multiplier", 1.25);

// Set the size multiplier for stationary elements on the X-axis (default: 1.5)
// Defines the scaling factor for stationary elements in the X direction.
user_pref("apz.x_stationary_size_multiplier", 1.5);

// Set the high-memory adjustment for the Y-axis skate (default: 0.0)
// Adjusts the behavior of the Y-axis skate when the system is in high memory usage conditions.
user_pref("apz.y_skate_highmem_adjust", 0.0);

// Set the size multiplier for the Y-axis skates (default: 3.5)
// Defines the scaling factor for the size of skates used for Y-axis movements.
user_pref("apz.y_skate_size_multiplier", 3.5);

// Set the size multiplier for stationary elements on the Y-axis (default: 3.5)
// Defines the scaling factor for stationary elements in the Y direction.
user_pref("apz.y_stationary_size_multiplier", 3.5);

// Enable or disable zooming to focused input (false = disable, true = enable)
// When enabled (true), the application will automatically zoom into focused input fields.
user_pref("apz.zoom-to-focused-input.enabled", true);

// Set the duration of zoom animations in milliseconds (default: 350)
// Defines how long the zoom animation will take when zooming into input fields.
user_pref("apz.zoom_animation_duration_ms", 350);



































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
user_pref("network.cookie.cookieBehavior", 5); 

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







// Set the URL for the hidden window interface in Firefox on Mac (default: "chrome://browser/content/hiddenWindowMac.xhtml")
// This preference specifies the location of the hidden window UI, which can be utilized by certain features or extensions 
// that require a background process without user interface interruption.
// It allows for specific layouts or functionalities that operate in the background, enabling seamless integration 
// of tasks without affecting the primary browsing experience.
// This setting can be particularly useful for developers creating extensions that need to run tasks discreetly.
pref("browser.hiddenWindowChromeURL", "chrome://browser/content/hiddenWindowMac.xhtml");

// Enable the abuse reporting feature for extensions in Firefox (true = enable, false = disable)
// When set to true, this preference allows users to report issues related to add-ons, such as malicious behavior or spam.
// This feature contributes to a safer and more secure browsing environment by helping Mozilla monitor and address abusive extensions.
// User reports can lead to the removal of harmful add-ons from the Firefox Add-ons site, thus protecting other users.
// Enabling this feature promotes community engagement in maintaining the quality of extensions available for Firefox.
pref("extensions.abuseReport.enabled", true);

// Enable or disable extra logging for the extension system in Firefox (true = enable, false = disable)
// When set to false, this preference prevents the generation of detailed logs related to the activities of extensions.
// While logging can be helpful for debugging and identifying issues, it may reduce overall browser performance, 
// especially when many extensions are installed and active.
// Disabling logging helps maintain a smoother and faster browsing experience for the user.
pref("extensions.logging.enabled", false);

// Enable or disable strict compatibility checks for extensions in Firefox (true = enable, false = disable)
// When set to false, this preference allows the installation of extensions that are marked as incompatible with the current version of Firefox.
// This flexibility can be beneficial for users who want to utilize specific extensions that may not have been updated for compatibility.
// However, it can also lead to potential instability if an extension does not function properly with the current browser version,
// as it may not have been tested against it.
pref("extensions.strictCompatibility", false);

// Enable or disable the new tab page in Firefox (true = enable, false = disable)
// When set to false, this preference disables the new tab page, which is typically displayed when users open a new tab.
// This setting may lead to a more minimalist browsing experience as it removes the default new tab interface,
// allowing users to focus solely on the content of their current tab or a customized new tab experience.
user_pref("browser.newtabpage.enabled", false);

// Enable or disable preloading of the new tab page (true = enable, false = disable)
// When set to false, this preference prevents Firefox from preloading the new tab page when the browser starts or a new tab is opened.
// Disabling this feature can improve startup performance and resource usage, especially on lower-end devices,
// as it reduces the background processes running when the browser is first launched.
user_pref("browser.newtab.preload", false);

// Enable or disable telemetry reporting for new tab page activity stream feeds (true = enable, false = disable)
// When set to false, this preference disables the collection of telemetry data related to the activity streams on the new tab page.
// This means that Firefox will not gather usage data to analyze how users interact with the various feeds displayed on the new tab page,
// potentially enhancing user privacy by limiting the data sent to Mozilla.
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);

// Enable or disable telemetry for the overall activity stream on the new tab page (true = enable, false = disable)
// When set to false, this preference stops the collection of telemetry data regarding the general activity stream on the new tab page.
// Users who are concerned about their data privacy may find this setting useful, as it limits the information sent back to Mozilla.
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Enable or disable snippets in the new tab page activity stream (true = enable, false = disable)
// When set to false, this preference disables the display of snippets—brief articles or updates—from Mozilla on the new tab page.
// This may lead to a more streamlined new tab experience without additional content that some users might find distracting.
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// Enable or disable the top stories feed in the new tab page activity stream (true = enable, false = disable)
// When set to false, this preference disables the section that displays top stories from various sources on the new tab page.
// Users may prefer a more focused experience without curated news articles, opting instead for a blank slate or custom content.
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Enable or disable inclusion of Pocket highlights in the new tab page activity stream (true = enable, false = disable)
// When set to false, this preference disables the integration of Pocket's saved articles and highlights in the new tab page.
// This may appeal to users who do not use Pocket or prefer not to see content from that service when opening a new tab.
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);

// Enable or disable the Discovery Stream feed on the new tab page (true = enable, false = disable)
// When set to false, this preference disables the discovery stream feature that suggests new content based on user interests.
// This allows users to have a less personalized new tab experience, focusing solely on their browsing without external recommendations.
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);

// Enable or disable sponsored content display on the new tab page (true = enable, false = disable)
// When set to false, this preference prevents Firefox from displaying sponsored content or ads on the new tab page.
// Users looking for an ad-free experience may find this setting beneficial, as it reduces distractions while browsing.
user_pref("browser.newtabpage.activity-stream.showSponsored", false);

// Enable or disable sponsored content in the top sites section of the new tab page (true = enable, false = disable)
// When set to false, this preference prevents sponsored content from being shown in the top sites section of the new tab page.
// This provides a cleaner and less commercialized view of frequently visited sites, focusing purely on user preferences.
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Set the default sites displayed on the new tab page (default: empty string)
// This preference defines which sites appear by default when opening a new tab. 
// Setting it to an empty string means no sites will be pre-loaded in the new tab page, 
// allowing users to customize their experience without predefined options.
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Enable or disable the use of the Windows location provider (true = enable, false = disable)
// When set to false, this preference disables the utilization of Windows' location services for geolocation in Firefox.
// Users who prefer not to share their location information or who have privacy concerns may find this setting useful.
// Disabling this may prevent sites from accessing location data based on the device's geolocation capabilities.
user_pref("geo.provider.ms-windows-location", false); 

// Enable or disable the use of macOS Core Location services for geolocation (true = enable, false = disable)
// When set to false, this preference disables Firefox's ability to use macOS's Core Location services to determine the user's geographic location.
// This is particularly useful for users who wish to maintain their privacy by preventing applications from accessing their location data.
user_pref("geo.provider.use_corelocation", false); 

// Enable or disable the use of GPSD (GPS Daemon) for geolocation on Linux (true = enable, false = disable)
// When set to false, this preference stops Firefox from utilizing GPSD, a service for accessing GPS data on Linux systems.
// This is relevant for users who may not want their location determined through GPS devices connected to their system.
user_pref("geo.provider.use_gpsd", false); 

// Enable or disable the use of Geoclue for geolocation on Linux (true = enable, false = disable)
// When set to false, this preference disables the use of Geoclue, which is a framework that provides location information on Linux.
// Disabling this may help users maintain privacy by ensuring that applications cannot determine their location using system resources.
user_pref("geo.provider.use_geoclue", false); 

// Set the URL for network region detection (default: empty string)
// When set to an empty string, this preference disables the automatic detection of the user's region via network methods.
// This means that Firefox will not attempt to determine the user's geographical region based on their IP address or network settings.
user_pref("browser.region.network.url", ""); 

// Enable or disable the automatic update of regional settings in Firefox (true = enable, false = disable)
// When set to false, this preference prevents Firefox from automatically checking for updates to regional settings.
// This is useful for users who want to maintain their current regional configuration without the browser attempting to modify it based on changes in their network location or other factors.
user_pref("browser.region.update.enabled", false);

// Set the accepted languages for web content (default: "en-US, en")
// This preference defines the languages that Firefox will present to web servers when requesting content.
// The value "en-US, en" indicates a preference for U.S. English as the primary language, with fallback to general English.
// This can affect how websites display content, including language, regional settings, and other localized features.
user_pref("intl.accept_languages", "en-US, en");

// Enable or disable the use of U.S. English locale for JavaScript (true = enable, false = disable)
// When set to true, this hidden preference forces Firefox to use the U.S. English locale in JavaScript contexts,
// regardless of the user's system or browser locale settings. This can be useful for ensuring consistent behavior
// in web applications that rely on JavaScript localization, particularly if they may misinterpret the user's locale.
user_pref("javascript.use_us_english_locale", true);

// Enable or disable background update scheduling (true = enable, false = disable) [Windows]
// When set to false, this preference disables the scheduling of background updates in Firefox on Windows.
// Users will not receive automatic updates in the background, which may require manual checks for updates.
// This can be useful for users who prefer to control when updates are applied, rather than having them happen automatically.
user_pref("app.update.background.scheduling.enabled", false);

// Enable or disable automatic updates (true = enable, false = disable) [Non-Windows]
// When set to false, this preference disables automatic updates for Firefox on non-Windows platforms.
// Users will need to manually check for and install updates, which can help avoid unexpected changes or potential issues
// related to new versions. This setting is particularly relevant for users who want to maintain control over their update process.
user_pref("app.update.auto", false);

// Enable or disable the Add-ons Manager pane visibility (true = enable, false = disable) [HIDDEN PREF]
// When set to false, this hidden preference prevents the Add-ons Manager pane from being displayed in the Firefox interface.
// Users will not be able to access or manage their extensions and themes through the typical add-ons pane,
// which can enhance privacy and limit exposure to potential unwanted add-on installations.
user_pref("extensions.getAddons.showPane", false);

// Enable or disable recommendations in the Add-ons Manager (true = enable, false = disable)
// When set to false, this preference disables the display of recommendations in the Firefox Add-ons Manager.
// This means users will not see suggested extensions or themes, which can help streamline the add-on experience and reduce distractions.
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Enable or disable the Discovery pane (true = enable, false = disable)
// When set to false, this preference disables the discovery features in Firefox, which can suggest new features and content to users.
// This setting can help improve user focus by eliminating notifications or suggestions that may not be relevant or desired.
user_pref("browser.discovery.enabled", false);

// Enable or disable data submission for reporting purposes (true = enable, false = disable)
// When set to false, this preference prevents Firefox from submitting data related to user activity and performance,
// helping to enhance user privacy by not sharing data with Mozilla for analysis.
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Enable or disable the Health Report upload feature (true = enable, false = disable)
// When set to false, this preference disables the automatic upload of health report data,
// which includes metrics about Firefox performance, user behavior, and other operational statistics.
user_pref("datareporting.healthreport.uploadEnabled", false);

// Enable or disable telemetry data collection (true = enable, false = disable) [Default: false]
// When set to false, this preference prevents Firefox from collecting and sending telemetry data back to Mozilla.
// This helps users maintain their privacy by not sharing any usage data.
user_pref("toolkit.telemetry.enabled", false);

// Enable or disable unified telemetry features (true = enable, false = disable)
// When set to false, this preference disables the unified telemetry feature,
// which is responsible for collecting data across multiple aspects of Firefox's operation.
user_pref("toolkit.telemetry.unified", false);

// Set the telemetry server URL (default: "data:,")
// This preference configures the telemetry server to which Firefox sends data.
// Setting it to "data:," effectively disables data sending since no valid server URL is provided.
user_pref("toolkit.telemetry.server", "data:,");

// Enable or disable the telemetry archive feature (true = enable, false = disable)
// When set to false, this preference disables the archiving of telemetry data,
// which means collected data will not be stored for later analysis.
user_pref("toolkit.telemetry.archive.enabled", false);

// Enable or disable new profile ping reporting (true = enable, false = disable)
// When set to false, this preference prevents the collection of telemetry data during new profile creation.
user_pref("toolkit.telemetry.newProfilePing.enabled", false);

// Enable or disable telemetry data collection during shutdown (true = enable, false = disable)
// When set to false, this preference prevents the sending of telemetry data upon Firefox shutdown.
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);

// Enable or disable update ping reporting (true = enable, false = disable)
// When set to false, this preference disables the sending of telemetry data related to updates.
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Enable or disable BHR (Breakage Report) ping reporting (true = enable, false = disable)
// When set to false, this preference prevents the collection of data about browser crashes or issues.
user_pref("toolkit.telemetry.bhrPing.enabled", false);

// Enable or disable first shutdown ping reporting (true = enable, false = disable)
// When set to false, this preference prevents the sending of telemetry data on the first shutdown of the browser.
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

// Enable opt-out for coverage collection (true = enable, false = disable) [HIDDEN PREF]
// When set to true, this hidden preference allows users to opt-out of coverage data collection, enhancing privacy.
user_pref("toolkit.telemetry.coverage.opt-out", true);

// Enable opt-out for coverage collection endpoint (true = enable, false = disable) [HIDDEN PREF]
// When set to true, this hidden preference allows users to opt-out of coverage collection, enhancing privacy.
user_pref("toolkit.coverage.opt-out", true);

// Set the coverage endpoint base URL (default: "")
// This preference configures the endpoint for coverage data submissions. An empty value means no data will be sent.
user_pref("toolkit.coverage.endpoint.base", "");

// Enable or disable telemetry for ping center features (true = enable, false = disable)
// When set to false, this preference disables telemetry features related to the ping center, reducing data collection.
user_pref("browser.ping-centre.telemetry", false);

// Enable or disable the Beacon API (true = enable, false = disable)
// When set to false, this preference disables the Beacon API, which can be used for sending analytics and tracking data.
user_pref("beacon.enabled", false);

// Enable or disable participation in studies (true = enable, false = disable)
// When set to false, this preference opts the user out of any studies that Mozilla may conduct through the Shield system.
// This means that the user will not participate in experiments or receive experimental features, ensuring a more stable browsing experience.
user_pref("app.shield.optoutstudies.enabled", false);

// Enable or disable the Normandy and Shield systems in Firefox (true = enable, false = disable)
// When set to false, this preference disables the entire Normandy/Shield system, which is responsible for managing experiments and feature testing.
// This prevents Firefox from running any A/B tests or experimental features that may impact the user's experience.
user_pref("app.normandy.enabled", false);

// Set the API URL for the Normandy system (default: "")
// This preference specifies the API URL used by Normandy to fetch experiment data. Setting it to an empty string effectively disables communication with any Normandy server,
// meaning no experiments or feature updates will be received, further enhancing user control over their Firefox experience.
user_pref("app.normandy.api_url", "");

// Set the URL for sending crash reports to the Breakpad service (default: "")
// When set to an empty string, this preference disables the sending of crash reports to Mozilla's servers, 
// preventing any data related to crashes from being reported, which can enhance user privacy.
user_pref("breakpad.reportURL", "");

// Enable or disable the sending of crash reports from browser tabs (true = enable, false = disable)
// When set to false, this preference prevents Firefox from automatically sending crash reports 
// when a tab crashes, ensuring that no crash data is sent without the user's explicit consent.
user_pref("browser.tabs.crashReporting.sendReport", false);

// Set the canonical URL for captive portal detection (default: "")
// This preference can be used to specify a URL that will be checked to determine if the user is behind a captive portal.
// When set to an empty string, this effectively disables the canonical URL check for captive portal detection.
user_pref("captivedetect.canonicalURL", "");

// Enable or disable the captive portal detection service (true = enable, false = disable)
// When set to false, this preference disables the network captive portal detection service,
// preventing Firefox from checking for and notifying the user about captive portals that may restrict internet access.
user_pref("network.captive-portal-service.enabled", false);

// Enable or disable the network connectivity service (true = enable, false = disable)
// When set to false, this preference disables network connection checks that Firefox performs to assess 
// connectivity status. This may prevent the browser from checking for available network connections automatically.
user_pref("network.connectivity-service.enabled", false);

// Enable or disable the ability to override Safe Browsing warnings (true = enable, false = disable)
// When set to true, this preference allows users to bypass certain Safe Browsing warnings when they attempt 
// to access websites that are flagged as potentially dangerous or harmful. This means that users can choose 
// to proceed to a site despite the warnings, which may be useful in situations where they trust the site 
// or believe the warning is erroneous.
// However, enabling this preference can pose risks, as it diminishes the protective measures that Safe Browsing 
// provides against phishing and malware sites. It's generally advisable to leave this setting at its default 
// (false) to maintain optimal security while browsing.
user_pref("browser.safebrowsing.allowOverride", true);

// Disable link prefetching
// When set to false, this prevents Firefox from prefetching links that a user may visit, 
// which can help save bandwidth and enhance privacy by not loading pages before the user 
// actually clicks on them.
// User preference: 
user_pref("network.prefetch-next", false);

// Disable DNS prefetching
// When set to true, this disables DNS prefetching, which means Firefox will not resolve 
// domain names for links that users might click on in the future. This enhances privacy 
// by not revealing the user's browsing behavior to DNS servers ahead of time.
// User preference: 
user_pref("network.dns.disablePrefetch", true);

// Disable predictor
// When set to false, this disables the predictor, which can preload pages based on user 
// browsing habits. This can improve privacy by preventing Firefox from making assumptions 
// about the user's next moves and preloading pages without explicit action.
// User preference: 
user_pref("network.predictor.enabled", false);

// Disable link-mouseover opening connection to linked server
// When set to 0, this disables speculative connections when hovering over links, 
// preventing unnecessary connections and enhancing privacy. 
// Setting it to 1 or higher allows a limited number of connections based on the value set.
// User preference: 
user_pref("network.http.speculative-parallel-limit", 0);

// Disable mousedown speculative connections on bookmarks and history
// When set to false, this prevents Firefox from opening connections to bookmarks or 
// history entries when the mouse is pressed down, reducing unnecessary connections 
// and improving privacy.
// User preference: 
user_pref("browser.places.speculativeConnect.enabled", false);

// Disable IPv6
// When set to true, this disables IPv6 support in Firefox, which can prevent potential 
// privacy issues and network connectivity problems associated with the newer protocol.
// User preference: 
user_pref("network.dns.disableIPv6", true);

// Disable GIO protocols as a potential proxy bypass vector
// When set to an empty string, this disables the use of GIO protocols, which could potentially 
// bypass proxy settings, enhancing security.
// User preference: 
user_pref("network.gio.supported-protocols", "");

// Disable using UNC (Uniform Naming Convention) paths
// When set to true, this prevents Firefox from using UNC paths, which helps in avoiding 
// proxy bypass issues that might arise from such paths.
// User preference: 
user_pref("network.file.disable_unc_paths", true);

// Remove special permissions for certain Mozilla domains
// When set to an empty string, this resets any special permissions that might have been set 
// for specific Mozilla domains, ensuring a clean slate for permissions.
// User preference: 
user_pref("permissions.manager.defaultsUrl", "");

// Use Punycode in Internationalized Domain Names to eliminate possible spoofing
// When set to true, this forces Firefox to display Internationalized Domain Names (IDN) 
// in Punycode, reducing the risk of phishing attacks that utilize visually similar characters.
// User preference: 
user_pref("network.IDN_show_punycode", true);

// Disable search suggestions
// When set to false, this preference disables search suggestions in the search bar, 
// ensuring that Firefox does not provide autocomplete options based on previous searches.
// User preference: 
user_pref("browser.search.suggest.enabled", false);

// Disable search suggestions in the URL bar
// When set to false, this preference disables search-related suggestions from appearing 
// in the address bar when users type, enhancing privacy by not suggesting previous searches.
// User preference: 
user_pref("browser.urlbar.suggest.searches", false);

// Disable location bar domain guessing
// When set to false, this prevents Firefox from guessing alternate domains when a user 
// types an incomplete URL, which can help avoid unintended navigation and improve privacy.
// User preference: 
user_pref("browser.fixup.alternate.enabled", false);

// Display all parts of the URL in the bar
// When set to false, this preference forces Firefox to display the entire URL, including 
// the protocol and path, in the address bar, providing users with full transparency about 
// the site they are visiting.
// User preference: 
user_pref("browser.urlbar.trimURLs", false);

// Disable speculative connections from the location bar
// When set to false, this prevents Firefox from making speculative connections based on 
// what the user types in the location bar, which can reduce unnecessary network activity 
// and enhance privacy.
// User preference: 
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Disable form autofill
// When set to false, this disables Firefox's ability to automatically fill in forms with 
// previously entered information, providing users with more control over their data.
// User preference: 
user_pref("browser.formfill.enable", false);

// Disable address autofill in forms
// When set to false, this preference disables the autofill feature for address forms, 
// preventing Firefox from suggesting previously saved addresses when filling out forms.
// User preference: 
user_pref("extensions.formautofill.addresses.enabled", false);

// Turn off availability of form autofill
// When set to "off", this disables the autofill functionality entirely, ensuring no 
// address information is suggested or filled automatically in forms.
// User preference: 
user_pref("extensions.formautofill.available", "off");

// Disable credit card autofill functionality
// When set to false, this disables the autofill feature for credit card forms, providing 
// added security by preventing automatic entry of sensitive payment information.
// User preference: 
user_pref("extensions.formautofill.creditCards.available", false);

// Disable credit card autofill
// When set to false, this prevents Firefox from filling in credit card information 
// automatically in forms, reducing the risk of unintentional data sharing.
// User preference: 
user_pref("extensions.formautofill.creditCards.enabled", false);

// Disable heuristics for form autofill
// When set to false, this disables the heuristic methods Firefox uses to predict 
// what data to autofill in forms, providing a more manual approach to data entry.
// User preference: 
user_pref("extensions.formautofill.heuristics.enabled", false);

// Disable contextual suggestions in the location bar
// When set to "history", this restricts the suggestions shown in the URL bar to 
// only include historical data, disabling contextual suggestions based on other 
// browsing contexts like bookmarks or open tabs.
// User preference: 
user_pref("browser.urlbar.quicksuggest.scenario", "history");

// Disable quick suggest functionality in the location bar
// When set to false, this disables the quick suggest feature in the URL bar, preventing 
// suggestions from appearing based on what the user is typing.
// User preference: 
user_pref("browser.urlbar.quicksuggest.enabled", false);

// Disable non-sponsored quick suggest in the location bar
// When set to false, this prevents Firefox from showing non-sponsored suggestions in 
// the URL bar, allowing for a more controlled browsing experience without additional 
// suggestions from external sources.
// User preference: 
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);

// Disable sponsored quick suggest in the location bar
// When set to false, this prevents Firefox from displaying sponsored suggestions in 
// the URL bar, ensuring that users only see organic results without advertisements.
// User preference: 
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// Disable disk cache
// When set to false, this preference disables the disk cache in Firefox, 
// meaning that the browser will not store any cached files on the hard drive. 
// This can improve privacy but may result in slower loading times as the browser 
// has to fetch files from the internet each time.
// User preference: 
user_pref("browser.cache.disk.enable", false);

// Disable storing extra session data
// When set to 2, this preference configures Firefox to not store session data 
// at all, meaning that it will not save any extra information from the current 
// browsing session. This can help enhance privacy but may lead to loss of 
// session state during unexpected closures.
// User preference: 
// 0 = everywhere, 1 = unencrypted sites, 2 = nowhere
user_pref("browser.sessionstore.privacy_level", 2); 

// Disable resuming session from crash
// When set to false, this prevents Firefox from automatically restoring the previous 
// session if the browser crashes. This can enhance security by ensuring no 
// sensitive information is automatically restored after a crash.
// User preference: 
user_pref("browser.sessionstore.resume_from_crash", false);

// Disable page thumbnail collection
// When set to true, this preference disables the collection of page thumbnails 
// by Firefox. This means that the browser will not capture and store visual 
// snapshots of web pages, improving privacy as it won't keep a record of 
// visited pages visually.
// User preference: 
user_pref("browser.pagethumbnails.capturing_disabled", true); 

// Disable favicons in profile folder
// When set to false, this prevents Firefox from storing shortcut favicons in 
// the user's profile folder. This can help to minimize the amount of data 
// stored, particularly for users concerned about privacy.
// User preference: 
user_pref("browser.shell.shortcutFavicons", false);

// Delete temporary files opened with external apps
// When set to true, this preference ensures that any temporary files created 
// by Firefox and opened with external applications are deleted when the 
// browser is closed. This helps to maintain privacy by ensuring no leftover 
// temporary files remain after browsing sessions.
// User preference: 
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// Enable HTTPS-Only mode in all windows
// When set to true, this preference configures Firefox to always use HTTPS for 
// all web pages, enhancing security by preventing connections to unencrypted 
// HTTP sites. Users will be automatically redirected to the HTTPS version 
// if available, protecting their data from eavesdropping and man-in-the-middle 
// attacks.
// User preference: 
user_pref("dom.security.https_only_mode", true);

// Disable sending HTTP request for checking HTTPS support by the server
// When set to false, this prevents Firefox from sending an HTTP request in the 
// background to check if a site supports HTTPS. This can improve privacy by 
// not exposing the user's intention to connect to a specific site before 
// establishing a secure connection.
// User preference: 
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// Display advanced information on Insecure Connection warning pages
// When set to true, this preference allows users to see detailed information 
// about security errors on websites. This can help users understand why a 
// site is deemed insecure and make informed decisions about proceeding.
// User preference: 
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Disable TLS 1.3 0-RTT (round-trip time)
// When set to false, this disables the use of 0-RTT data in TLS 1.3 connections. 
// This can prevent potential security issues that arise from allowing data to 
// be sent before the secure connection is fully established, enhancing overall 
// security during the handshake process.
// User preference: 
user_pref("security.tls.enable_0rtt_data", false);

// Set OCSP to terminate the connection when a CA isn’t validated
// When set to true, this preference requires that a valid Online Certificate 
// Status Protocol (OCSP) response is received before establishing a secure 
// connection. If the CA (Certificate Authority) is not validated, the connection 
// is terminated, ensuring that only trustworthy certificates are accepted.
// User preference: 
user_pref("security.OCSP.require", true);

// Disable SHA-1 certificates
// When set to 1, this preference enforces that SHA-1 certificates are not 
// accepted by Firefox, as they are considered weak and vulnerable to attacks. 
// This enhances security by ensuring that only stronger, more secure certificate 
// signatures are used.
// User preference: 
user_pref("security.pki.sha1_enforcement_level", 1);

// Enable strict pinning (Public Key Pinning)
// When set to 2, this preference enables strict pinning, meaning that Firefox 
// will reject certificates that do not match the pinned keys for a site. This 
// helps protect against man-in-the-middle attacks by ensuring that only 
// specific certificates are trusted.
// Options:
// 0 = Disabled
// 1 = Allow user MiTM (i.e., your Antivirus)
// 2 = Strict
// User preference: 
user_pref("security.cert_pinning.enforcement_level", 2);

// Enable CRLite
// When set to true, this preference enables Certificate Revocation List (CRLite) 
// checks, which verify whether a certificate has been revoked. It allows Firefox 
// to consult CRLite when establishing secure connections, enhancing security 
// by ensuring that only valid certificates are accepted. If CRLite is enabled, 
// it also collects telemetry data to help improve the service.
// User preference: 
user_pref("security.remote_settings.crlite_filters.enabled", true);

// Set CRLite mode
// When set to 2, this preference configures CRLite to enforce both “Revoked” 
// and “Not Revoked” results when checking the status of certificates. 
// This ensures that Firefox only trusts certificates that are explicitly marked 
// as not revoked, enhancing security by minimizing the risk of accepting invalid 
// or compromised certificates.
// Options:
// 0 = Disabled
// 1 = Consult CRLite but only collect telemetry (default behavior)
// 2 = Consult CRLite and enforce both “Revoked” and “Not Revoked” results
// 3 = Consult CRLite and enforce “Not Revoked” results, but defer to OCSP for “Revoked”
// User preference: 
user_pref("security.pki.crlite_mode", 2);

// Control when to send a referer
// When set to 2, this preference configures Firefox to send a referer only 
// if the hosts match, enhancing privacy by limiting the sharing of 
// referer information across different domains. This helps reduce the 
// risk of tracking and exposure to third-party sites.
// Options:
// 0 = Always send the referer (default behavior)
// 1 = Only send if base domains match
// 2 = Only send if hosts match
// User preference: 
user_pref("network.http.referer.XOriginPolicy", 2);

// Control the amount of information to send
// When set to 2, this preference limits the referer information sent 
// to only the scheme, host, and port, which reduces the amount of 
// potentially sensitive data shared with the target site. This 
// enhances privacy by preventing the target site from seeing the 
// full URI of the referring page.
// Options:
// 0 = Send full URI (default): 
//    e.g., https://example.com:8888/foo/bar.html?id=1234
// 1 = Send scheme, host, port, and path: 
//    e.g., https://example.com:8888/foo/bar.html
// 2 = Send scheme, host, and port only: 
//    e.g., https://example.com:8888
// User preference: 
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Disable WebRTC
// When set to false, this preference disables WebRTC (Web Real-Time Communication) 
// functionality in Firefox, which can enhance privacy and security by preventing 
// potential IP leaks that may occur during peer-to-peer communications.
// User preference: 
user_pref("media.peerconnection.enabled", false);

// Force WebRTC inside the proxy
// When set to true, this preference configures WebRTC to only use a proxy 
// for connections if the user is behind a proxy. This helps to prevent 
// direct connections that could bypass the proxy and reveal the user's 
// actual IP address, enhancing security while using a proxy.
// User preference: 
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Force a single network interface for ICE candidates generation
// When set to true, this preference restricts WebRTC to generate ICE 
// candidates from a single network interface, which helps limit exposure 
// of local IP addresses during peer-to-peer connections.
// User preference: 
user_pref("media.peerconnection.ice.default_address_only", true);

// Force exclusion of private IPs from ICE candidates
// When set to true, this preference ensures that WebRTC does not include 
// private IP addresses in its ICE candidates, further enhancing user privacy 
// by preventing local network information from being exposed.
// User preference: 
user_pref("media.peerconnection.ice.no_host", true);

// Disable WebGL (Web Graphics Library)
// When set to true, this preference disables WebGL, a JavaScript API that 
// allows rendering of 2D and 3D graphics in the browser. Disabling WebGL 
// can enhance privacy and security by preventing fingerprinting techniques 
// that exploit the unique characteristics of a user's graphics hardware.
// User preference: 
user_pref("webgl.disabled", true);

// Disable autoplay of HTML5 media
// When set to 5, this preference blocks all autoplay of HTML5 media, 
// preventing media from automatically playing when a page loads. This can 
// improve user experience and control over media playback, as well as save 
// bandwidth. Other options include:
// 0 = Allow all media to autoplay
// 1 = Block non-muted media (default behavior)
// 5 = Block all media
// User preference: 
user_pref("media.autoplay.default", 5);

// Disable DRM Content
// When set to false, this preference disables the use of Digital Rights 
// Management (DRM) content in Firefox. This can enhance user control over 
// content playback and reduce reliance on proprietary technologies, which 
// may have privacy implications.
// User preference: 
user_pref("media.eme.enabled", false);

// Always ask you where to save files
// When set to false, this preference configures Firefox to always prompt the user 
// for a download location rather than automatically saving files to the default 
// download directory. This provides users with more control over their downloads 
// and helps ensure files are saved where intended.
// User preference: 
user_pref("browser.download.useDownloadDir", false);

// Disable adding downloads to system’s “recent documents” list
// When set to false, this preference prevents Firefox from adding downloaded 
// files to the operating system's "recent documents" list. This can enhance 
// privacy by reducing the visibility of recent activities to other users of 
// the system.
// User preference: 
user_pref("browser.download.manager.addToRecentDocs", false);

// Enable ETP (Enhanced Tracking Protection)
// When set to "strict," this preference activates Enhanced Tracking Protection in 
// Firefox, which blocks a wider range of trackers, including cross-site cookies. 
// In this mode, Total Cookie Protection is enabled, meaning that cookies are 
// partitioned by the site that created them, preventing tracking across different 
// sites and enhancing user privacy.
// User preference: 
user_pref("browser.contentblocking.category", "strict");

// Enable state partitioning of service workers
// When set to true, this preference enables state partitioning for service workers, 
// which ensures that service worker data is isolated by the first-party domain. 
// This prevents third-party services from accessing data stored in service workers 
// from other domains, enhancing privacy and security.
// User preference: 
user_pref("privacy.partition.serviceWorkers", true);

// Enable APS (Always Partitioning Storage)
// When set to true, this preference ensures that all third-party storage (not just 
// cookies) is partitioned by the first-party domain. This includes local storage, 
// IndexedDB, and cache storage, helping to prevent cross-site tracking and 
// enhancing user privacy by keeping third-party data siloed.
// User preference: 
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);

// Exempt session storage from APS
// When set to true, this preference configures Firefox to exempt session storage 
// from Always Partitioning Storage rules. This means that session storage can 
// be shared across different tabs or windows within the same session, providing 
// a balance between privacy and functionality for certain web applications.
// User preference: 
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", true);

// Block popup windows
// When set to true, this preference prevents websites from opening new popup 
// windows during page load events. This helps enhance the user experience by 
// minimizing intrusive popups that can disrupt browsing.
// User preference: 
user_pref("dom.disable_open_during_load", true);

// Limit events that can cause a popup
// This preference defines the events that are allowed to trigger popups in 
// Firefox. By specifying "click dblclick mousedown pointerdown," it restricts 
// popups to user-initiated actions, reducing unwanted popups from script 
// actions or other non-user interactions, thus improving user control.
// User preference: 
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

// Disable Pocket extension
// When set to false, this preference disables the Pocket extension in Firefox, 
// preventing users from saving webpages to their Pocket account directly from the 
// browser. This can enhance privacy and reduce clutter for users who do not 
// use Pocket.
// User preference: 
user_pref("extensions.pocket.enabled", false);

// Disable Screenshots extension
// When set to true, this preference disables the Screenshots feature in Firefox, 
// which allows users to take and share screenshots of webpages. Disabling this 
// feature can help streamline the browser and enhance privacy for users who 
// prefer not to use it.
// User preference: 
user_pref("extensions.Screenshots.disabled", true);

// Disable PDF.js scripting
// When set to false, this preference disables scripting for the PDF.js viewer 
// in Firefox. This means that any interactive elements within PDF documents 
// will not function, enhancing security by limiting potential attack vectors 
// while viewing PDFs in the browser.
// User preference: 
user_pref("pdfjs.enableScripting", false);

// Enable Containers and show the UI settings
// When set to true, this preference enables the use of container tabs in Firefox, 
// allowing users to isolate different browsing sessions. This enhances privacy 
// by preventing tracking across different sites and helps organize online activities 
// based on user-defined contexts. Additionally, it reveals the UI settings for 
// managing containers within the browser.
// User preference: 
user_pref("privacy.userContext.enabled", true);

// Set extensions to work on restricted domains, and their scope is to “profile+applications”
// When set to 5, this hidden preference allows extensions to operate on domains 
// that are normally restricted, giving them broader access across applications 
// and profiles. This can enhance functionality but may raise privacy and security 
// concerns, as it allows extensions to interact with more sites than usual.
// The options for this preference are:
// 0 = "none": Extensions cannot run in restricted domains.
// 1 = "profile": Extensions can run in the user's profile, but not in applications.
// 2 = "applications": Extensions can run in applications but not in the user's profile.
// 3 = "all": Extensions can run in both the user's profile and applications.
// 4 = "unrestricted": Extensions can run in all contexts, including restricted domains.
// 5 = "profile+applications": Extensions have the broadest access, operating in both 
// the profile and applications without restrictions, increasing functionality but also 
// potential risks.
// User preference: 
user_pref("extensions.enabledScopes", 5);  

// Set restricted domains for web extensions
// This preference allows you to specify a list of domains where web extensions 
// are restricted from running. When set to an empty string, it means no domains 
// are restricted, potentially increasing the risk of extension misuse but also 
// enhancing functionality across all sites.
// User preference: 
user_pref("extensions.webextensions.restrictedDomains", "");

// Display always the installation prompt
// When set to false, this preference disables the installation prompt for third-party 
// extensions, allowing them to be installed without user confirmation. This can 
// streamline the installation process but may pose security risks if malicious 
// extensions are introduced without user knowledge.
// User preference: 
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// Clear history, cookies, and site data when Firefox closes
// When set to 2, this preference configures Firefox to delete cookies and other site data 
// when it closes, enhancing privacy by ensuring that no residual data remains from the session.
// User preference:
// 0 = keep all data, 1 = keep only unencrypted site data, 2 = delete all site data
user_pref("network.cookie.lifetimePolicy", 2);

// Sanitize on shutdown
// When set to true, this preference enables the automatic clearing of private data 
// (like browsing history and cookies) when the browser is closed. This helps to protect 
// user privacy by preventing data retention between sessions.
// User preference: 
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// Clear cache on shutdown
// When set to true, this preference ensures that the disk cache is cleared when 
// Firefox closes. This can help to enhance privacy by preventing cached content 
// from being accessed in future sessions.
// User preference: 
user_pref("privacy.clearOnShutdown.cache", true);

// Clear cookies on shutdown
// When set to true, this preference ensures that all cookies are deleted when 
// Firefox closes, which helps in maintaining privacy by removing session and 
// tracking cookies that could be used for profiling.
// User preference: 
user_pref("privacy.clearOnShutdown.cookies", true);

// Clear downloads on shutdown
// When set to true, this preference will clear the download history when Firefox 
// is closed. This is useful for enhancing privacy as it removes records of downloaded files.
// User preference: 
user_pref("privacy.clearOnShutdown.downloads", true);

// Clear form data on shutdown
// When set to true, this preference ensures that saved form data is cleared 
// upon closing Firefox, which can help maintain privacy by preventing auto-fill data 
// from being accessible in future sessions.
// User preference: 
user_pref("privacy.clearOnShutdown.formdata", true);

// Clear browsing history on shutdown
// When set to true, this preference will clear the browsing history every time 
// Firefox is closed, enhancing privacy by ensuring that no record of visited sites 
// remains after the session ends.
// User preference: 
user_pref("privacy.clearOnShutdown.history", true);

// Clear offline apps data on shutdown
// When set to true, this preference will clear the data of offline applications 
// when Firefox closes, preventing stored information from being retained 
// between sessions and enhancing user privacy.
// User preference: 
user_pref("privacy.clearOnShutdown.offlineApps", true);

// Clear sessions on shutdown
// When set to true, this preference ensures that session data is cleared when 
// Firefox closes, preventing the restoration of tabs or windows upon the next 
// launch, which can enhance privacy.
// User preference: 
user_pref("privacy.clearOnShutdown.sessions", true);

// Clear site settings on shutdown
// When set to false, this preference keeps site settings intact when Firefox closes. 
// If set to true, site-specific settings like permissions and preferences will be cleared, 
// enhancing privacy but potentially disrupting user experience.
// User preference: 
user_pref("privacy.clearOnShutdown.sitesettings", true);

// Set time span for sanitization
// When set to 0, this preference specifies that all history, cookies, and site data 
// will be cleared when Firefox is closed. This ensures a fresh start for every session, 
// enhancing privacy at the cost of losing any saved session state.
// User preference: 
user_pref("privacy.sanitize.timeSpan", 0);

// Enable RFP (Resist Fingerprinting)
// When set to true, this preference enables the Resist Fingerprinting feature, 
// which helps to protect users from being tracked through unique browser characteristics 
// that can be used to identify and profile them. Enabling RFP aims to enhance 
// user privacy by minimizing the amount of information exposed to websites.
// User preference: 
user_pref("privacy.resistFingerprinting", true);

// Set new window size rounding max values
// When set to 1600 and 900, these preferences define the maximum width and height 
// for windows to which Firefox will round the dimensions. This is a part of the 
// fingerprinting resistance measures, as it prevents websites from accurately 
// determining the true size of a user's browser window, thus adding another layer 
// of obfuscation against tracking.
// User preferences:
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);

// Disable mozAddonManager Web API
// When set to true, this hidden preference blocks the use of the mozAddonManager 
// Web API, which can be exploited for fingerprinting purposes. This helps 
// to further enhance user privacy by reducing the ways in which a website can 
// gather information about the user's browser environment and installed extensions.
// User preference: 
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); 

// Disable using system colors
// When set to false, this preference configures Firefox to ignore system colors and 
// use its own color settings for the browser interface. This reduces the likelihood 
// of tracking based on the system color scheme, adding to the fingerprinting resistance.
// User preference: 
user_pref("browser.display.use_system_colors", false); 

// Enable optional permission prompts for extensions
// When set to true, this preference allows Firefox to display prompts for optional 
// permissions that an extension may request after it has been downloaded. This 
// enhances user awareness and control over what permissions are granted to extensions.
// User preference: 
user_pref("extensions.webextOptionalPermissionPrompts", true);

// If enabled, install origin permission verification happens after addons are downloaded
// When set to true, this preference ensures that Firefox verifies the permissions 
// requested by an extension only after the extension has been downloaded. This 
// approach may streamline the installation process while still keeping the user informed 
// about permission requirements.
// User preference: 
user_pref("extensions.postDownloadThirdPartyPrompt", true);

// Preferences for AMO (Add-ons Mozilla Organization) integration
// Enable caching for add-on searches
// When set to true, this preference allows Firefox to cache the results of add-on 
// searches, potentially speeding up the process when users look for extensions.
// User preference: 
user_pref("extensions.getAddons.cache.enabled", true);

// URL for fetching add-on information from AMO
// This preference defines the URL template for searching add-ons on the AMO site, 
// replacing placeholders with the respective values for GUIDs and user locale. 
// This facilitates the retrieval of add-on details.
// User preference: 
user_pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/api/v4/addons/search/?guid=%IDS%&lang=%LOCALE%");

// URL for browsing add-ons on AMO
// This preference specifies the URL for browsing add-ons on the AMO site, allowing users 
// to search for extensions directly. The URL includes placeholders for locale and search terms.
// User preference: 
user_pref("extensions.getAddons.search.browseURL", "https://addons.mozilla.org/%LOCALE%/firefox/search?q=%TERMS%&platform=%OS%&appver=%VERSION%");

// URL for general add-ons listings
// This preference sets the URL for the main page of Firefox add-ons, providing 
// a starting point for users to explore extensions.
// User preference: 
user_pref("extensions.getAddons.link.url", "https://addons.mozilla.org/%LOCALE%/firefox/");

// URL for fetching language packs from AMO
// This preference specifies the URL template for accessing language tools (language packs) 
// available on AMO, allowing users to customize Firefox language settings.
// User preference: 
user_pref("extensions.getAddons.langpacks.url", "https://services.addons.mozilla.org/api/v4/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%");

// URL for add-on discovery API
// This preference defines the URL for fetching discovery-related information about add-ons, 
// helping to personalize recommendations based on the user’s locale and distribution.
// User preference: 
user_pref("extensions.getAddons.discovery.api_url", "https://services.addons.mozilla.org/api/v4/discovery/?lang=%LOCALE%&edition=%DISTRIBUTION%");

// URL for browser mappings API
// This preference specifies the URL for the browser mappings API, which provides 
// compatibility information for extensions across different browsers.
// User preference: 
user_pref("extensions.getAddons.browserMappings.url", "https://services.addons.mozilla.org/api/v5/addons/browser-mappings/?browser=%BROWSER%");

// URL for the privacy policy related to recommended extensions
// This preference sets the URL for the privacy policy regarding the handling of 
// recommended extensions, ensuring users can review how their data is managed.
// User preference: 
user_pref("extensions.recommendations.privacyPolicyUrl", "https://www.mozilla.org/privacy/firefox/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=privacy-policy-link#addons");

// URL for Firefox Color recommendations
// This preference provides the URL for the Firefox Color customization tool, which 
// is recommended on the themes page in about:addons, allowing users to customize 
// their browser's appearance.
// User preference: 
user_pref("extensions.recommendations.themeRecommendationUrl", "https://color.firefox.com/?utm_source=firefox-browser&utm_medium=firefox-browser&utm_content=theme-footer-link");

// Enable automatic updates for extensions
// When set to true, this preference enables automatic updates for installed extensions, 
// ensuring that users receive the latest features and security updates without needing 
// to manually check for updates.
// User preference: 
user_pref("extensions.update.autoUpdateDefault", true);

// Check for updates to system add-ons
// This preference sets the URL for checking updates for system-installed add-ons, ensuring 
// that these essential components are kept up to date for optimal performance.
// User preference: 
user_pref("extensions.systemAddon.update.url", "https://aus5.mozilla.org/update/3/SystemAddons/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");

// Enable updates for system add-ons
// When set to true, this preference allows Firefox to automatically check for updates 
// to system add-ons, which are crucial for the browser's functionality and security.
// User preference: 
user_pref("extensions.systemAddon.update.enabled", true);

// Disable add-ons that are not installed by the user in all scopes by default
// When set to 15, this preference disables all add-ons not installed by the user across 
// all application scopes, enhancing security by preventing unwanted extensions from running.
// User preference: 
user_pref("extensions.autoDisableScopes", 15);

// Scopes to scan for changes at startup
// This preference defines the scopes that Firefox will check for changes to installed 
// extensions upon startup, ensuring that any newly added or removed extensions are 
// recognized immediately.
// User preference: 
user_pref("extensions.startupScanScopes", 0);


































































































































// Controls whether the Narrate feature, which provides text-to-speech functionality for web content, is enabled.
// When set to "true," the Narrate feature is active, allowing users to listen to the text on web pages.
// This can enhance accessibility for users with visual impairments or those who prefer auditory feedback.
// Options:
// true = Enable the Narrate feature for text-to-speech functionality
// false = Disable the Narrate feature
// User preference:
user_pref("narrate.enabled", true);

// Controls the filtering of available voices for the Narrate feature, which provides text-to-speech functionality.
// When set to "true," only voices that are suitable for the Narrate feature will be displayed to the user.
// This can help streamline the selection process by showing only relevant voices, improving user experience.
// Options:
// true = Filter and display only suitable voices for the Narrate feature
// false = Show all available voices, regardless of suitability
// User preference:
user_pref("narrate.filter-voices", true);

// Controls the speech rate for the Narrate feature, which provides text-to-speech functionality.
// This setting determines how fast the text is read aloud to the user.
// A higher value results in faster speech, while a lower value results in slower speech.
// The default value is typically set to a moderate rate, but users can adjust it to their preference.
// Options:
// Numeric value = Set the speech rate (e.g., 1.0 for normal speed, 0.5 for slower, 2.0 for faster)
// User preference:
user_pref("narrate.rate", 0);

// Controls whether the Narrate feature is in test mode.
// When set to "true," the Narrate feature may operate in a limited or experimental capacity,
// allowing users to test new functionalities or settings without affecting the main experience.
// Setting it to "false" disables test mode, enabling the full functionality of the Narrate feature.
// Options:
// true = Enable test mode for the Narrate feature
// false = Disable test mode and use the standard functionality
// User preference:
user_pref("narrate.test", false);

// Controls the default voice used by the Narrate feature, which provides text-to-speech functionality.
// This setting allows users to specify which voice should be used for reading text aloud.
// The value can be set to a specific voice name or to "automatic" to let the system choose the best available voice.
// Options:
// { "default": "automatic" } = Use the system's automatic voice selection
// { "default": "voice_name" } = Specify a particular voice by name
// User preference:
user_pref("narrate.voice", { "default": "automatic" });

// Controls additional characters that are allowed in internationalized domain names (IDNs).
// This setting enables users to specify extra characters beyond the standard ASCII set that can be included in IDNs.
// By customizing this list, users can accommodate specific languages or scripts that may not be covered by default.
// Options:
// String value = A string of characters that are allowed in IDNs (e.g., "ñ, é, ü")
// User preference:
user_pref("network.IDN.extra_allowed_chars", "");

// Controls additional characters that are blocked in internationalized domain names (IDNs).
// This setting allows users to specify extra characters beyond the standard ASCII set that should not be allowed in IDNs.
// By customizing this list, users can enhance security by preventing potentially harmful or confusing characters from being used in domain names.
// Options:
// String value = A string of characters that are blocked in IDNs (e.g., "0, O, l, I")
// User preference:
user_pref("network.IDN.extra_blocked_chars", "");

// Controls the restriction profile applied to internationalized domain names (IDNs).
// This setting determines the level of scrutiny and restrictions placed on IDNs to enhance security and prevent abuse.
// The "high" profile applies stricter rules, limiting the use of certain characters and scripts to reduce the risk of phishing and confusion.
// Options:
// "low" = Minimal restrictions on IDNs, allowing a wider range of characters
// "medium" = Moderate restrictions on IDNs, balancing usability and security
// "high" = Stricter restrictions on IDNs, enhancing security by limiting character usage
// User preference:
user_pref("network.IDN.restriction_profile", "high");

// Controls whether internationalized domain names (IDNs) are displayed in their ASCII (Punycode) form
// IDNs allow domain names to include non-ASCII characters (e.g., accents or scripts like Cyrillic).
// When set to "false," domain names appear in their native script, which may improve readability
// but can increase phishing risk, as visually similar characters may be used maliciously.
// Options:
// true = Display domain names in ASCII (Punycode) for security
// false = Show domain names in native script for readability
// User preference:
user_pref("network.IDN_show_punycode", true);

// Allows the socket thread to use a larger stack size for improved performance
// The socket thread manages networking functions for Firefox, and a larger stack size can 
// enhance performance on some systems but may use more memory.
// Options:
// true = Allow larger stack size for socket thread
// false = Use standard stack size for socket thread
// User preference:
user_pref("network.allow_large_stack_size_for_socket_thread", true);

// Enables raw socket access in content processes
// Raw sockets are low-level network connections that can bypass some security restrictions.
// Enabling this may allow more control over network operations but can increase security risks.
// Options:
// true = Allow raw socket access in content processes
// false = Deny raw socket access in content processes for security
// User preference:
user_pref("network.allow_raw_sockets_in_content_processes", false);

// Determines whether redirects to data URLs are allowed
// Data URLs allow embedding data directly within a URL, useful for small images or files.
// Allowing redirects to data URLs may lead to security risks, as data URLs can contain 
// malicious code or hidden content.
// Options:
// true = Allow redirects to data URLs
// false = Block redirects to data URLs for security
// User preference:
user_pref("network.allow_redirect_to_data", false);

// Whether to show anti-spoof confirmation prompts when navigating to a url with userinfo
// Enables confirmation prompts for HTTP authentication requests
// HTTP authentication prompts users to enter credentials for certain websites.
// Requiring confirmation provides additional security, ensuring the user approves 
// before credentials are sent.
// Options:
// true = Enable confirmation prompts for HTTP auth requests
// false = No confirmation prompts for HTTP auth requests
// User preference:
user_pref("network.auth.confirmAuth.enabled", false);

// Forces use of the generic NTLM (NT LAN Manager) authentication protocol
// NTLM is a protocol primarily used for Microsoft environments. Setting this to "true" 
// enforces a basic NTLM protocol that may improve compatibility with non-Windows platforms.
// Options:
// true = Force use of generic NTLM authentication
// false = Use standard NTLM protocol as needed
// User preference:
user_pref("network.auth.force-generic-ntlm", false);

// Forces use of the older NTLMv1 protocol for NTLM authentication
// NTLMv1 is an older version of the NTLM protocol, less secure than NTLMv2. 
// Enabling this may improve compatibility with legacy systems.
// Options:
// true = Force NTLMv1 for compatibility
// false = Use NTLMv2 for better security
// User preference:
user_pref("network.auth.force-generic-ntlm-v1", false);

// Resources that are triggered by some non-web-content
// True: They are allow to present http auth. dialog
// False: They are not allow to present http auth. dialog.
// Disables HTTP authentication for resources triggered by non-web content
// HTTP authentication prompts can sometimes be triggered by non-web content, 
// potentially leading to unintentional credential exposure. Disabling this enhances security.
// Options:
// True = Allow HTTP auth for non-web content resources
// False = Block HTTP auth for non-web content resources
// User preference:
user_pref("network.auth.non-web-content-triggered-resources-http-auth-allow", false);

// Enables Single Sign-On (SSO) support in private browsing mode
// SSO enables seamless access across sites using shared login credentials.
// This setting allows SSO even in private sessions but may introduce privacy risks if SSO tokens persist.
// Options:
// true = Allow SSO in private browsing
// false = Disable SSO in private browsing for enhanced privacy
// User preference:
user_pref("network.auth.private-browsing-sso", false);

// When true, authentication challenges will be sorted even if an authentication is already in progress. This may cause issues sometimes.
// Sorts authentication challenges based on the challenge state
// Some systems may prioritize specific challenges for HTTP authentication 
// to ensure smoother access, and sorting them can help with compatibility.
// Options:
// true = Sort challenges to prioritize in-progress requests
// false = Do not sort challenges; use default ordering
// User preference:
user_pref("network.auth.sort_challenge_in_progress", false);

// 0 - don't allow sub-resources to open HTTP authentication credentials dialogs.
// 1 - allow sub-resources to open HTTP authentication credentials dialogs, but don't allow it for cross-origin sub-resources. 
// 2 - allow the cross-origin authentication as well.
// Controls subresource HTTP authentication permissions, e.g., images, stylesheets
// Subresource HTTP authentication governs access to embedded content like images or CSS, 
// which may need to access restricted resources in certain contexts.
// This preference is about controlling HTTP authentication dialogs for subresources 
// (e.g., images or embedded content from other origins). 
// Setting this to 0 improves security by preventing cross-origin resources from prompting for credentials, 
// which helps avoid potential credential leaks across domains.
// Options:
// 0 = Disable subresource HTTP authentication
// 1 = Allow subresource HTTP auth only for same-origin resources
// 2 = Allow for cross-origin with restrictions
// User preference:
user_pref("network.auth.subresource-http-auth-allow", 2);

// Sub-resources HTTP-authentication for cross-origin images: 
// true: It is allowed to present http auth. dialog for cross-origin images. 
// false: It is not allowed. If network.auth.subresource-http-auth-allow has values 0 or 1 this pref does not have any effect.
// Allows cross-origin HTTP authentication for subresource images
// This option can prevent credentials from being sent with cross-origin image requests, 
// reducing the risk of credential exposure across domains.
// Options:
// true = Allow cross-origin HTTP auth for images
// false = Disable for better security
// User preference:
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);

// Whether to display auth prompts if X-Frame-Options header will block loading page
// Suppresses HTTP authentication prompts when X-Frame-Options (XFO) check fails
// XFO helps prevent clickjacking by allowing content to specify if it should only be displayed in certain frames.
// Suppressing authentication prompts in these cases improves user experience but may impact access to content.
// Options:
// true = Suppress auth prompts on XFO failures
// false = Show auth prompts regardless of XFO failures
// User preference:
user_pref("network.auth.supress_auth_prompt_for_XFO_failures", true);

// Sub-resources HTTP-authentication for cross-origin images:
// true: Allows HTTP authentication dialogs for cross-origin images.
// false: Disables HTTP authentication dialogs for cross-origin images.
// This option can prevent credentials from being sent with cross-origin image requests, 
// reducing the risk of credential exposure across domains.
// User preference:
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);

// Redirect retries on authentication challenges:
// true: Retries requests with redirects after a 401 Unauthorized response.
// false: Prevents retries via redirect for authentication challenges, 
// keeping the request on the original URL.
// Options:
// true = Retry with redirect for authentication challenges
// false = No redirects for retries on 401 responses (better control)
// User preference:
user_pref("network.auth.use_redirect_for_retries", false);

// HTTP redirection limit:
// Defines the maximum number of HTTP redirects Firefox will follow.
// Setting this to 0 disables all HTTP redirects, preventing any navigation 
// away from the original source due to redirection.
// Options:
// 0 = Disable redirects completely
// n = Set a limit 
// User preference:
user_pref("network.http.redirection-limit", 0);

// Meta refresh redirects:
// true: Blocks meta refresh tags from redirecting pages automatically.
// false: Allows meta refresh tags to redirect pages as defined by the website.
// Enabling this prevents meta refresh redirects, providing more control over navigation.
// User preference:
user_pref("accessibility.blockautorefresh", true);

// Automatic NTLM authentication for non-FQDN (Fully Qualified Domain Name) hosts:
// true: Allows NTLM (Windows Integrated Authentication) to occur automatically for hosts 
// without a fully qualified domain name, such as "intranet" instead of "intranet.example.com".
// false: Restricts NTLM authentication to only fully qualified domain names, enhancing security 
// by preventing automatic authentication to local network resources with ambiguous names.
// Options:
// true = Allow automatic NTLM auth for non-FQDN hosts
// false = Restrict NTLM auth to FQDN hosts only (better security)
// User preference:
user_pref("network.automatic-ntlm-auth.allow-non-fqdn", false);

// Automatic NTLM authentication for proxy servers:
// true: Allows NTLM (Windows Integrated Authentication) to occur automatically 
// for proxy servers. This setting is useful when the network proxy requires 
// authentication, allowing seamless access without prompting for credentials.
// false: Disables automatic NTLM authentication for proxy servers, which may 
// prompt the user for credentials when accessing resources through a proxy.
// Options:
// true = Allow automatic NTLM authentication for proxies
// false = Disable automatic NTLM authentication for proxies (more control)
// User preference:
user_pref("network.automatic-ntlm-auth.allow-proxies", true);

// NTLM Authentication Trusted URIs:
// Specifies which URLs or domains are trusted for automatic NTLM authentication, 
// typically used in enterprise or intranet environments.
// This setting allows single sign-on (SSO) using Windows credentials for specified sites, 
// without prompting the user for credentials.
// Format:
// A comma-separated list of domains or URLs (e.g., "intranet.company.com, portal.company.com").
// Example:
// "network.automatic-ntlm-auth.trusted-uris", "intranet.company.com, mydomain.com"
// User preference:
user_pref("network.automatic-ntlm-auth.trusted-uris", "");

// Network Buffer Cache Count:
// Controls the number of network buffers to keep in the cache, which can help optimize 
// network performance by storing data temporarily for faster access.
// This setting is generally managed by Firefox automatically, but adjusting it may be useful
// in environments with specific performance needs or limited resources.
// Options:
// An integer value indicating the number of buffers to maintain in the cache.
// Higher values may improve performance but use more memory, while lower values may conserve memory.
// User preference:
user_pref("network.buffer.cache.count", 24);

// Network Buffer Cache Size:
// Defines the size of each network buffer cache in bytes.
// Affects how much data can be stored in each buffer, impacting both network performance and memory usage,
// particularly during large data transfers.
// Options:
// An integer value specifying the buffer size in bytes.
// Higher values may improve performance with large data transfers, but increase memory usage.
// Default value: 32768 (32KB)
// User preference:
user_pref("network.buffer.cache.size", 32768);

// When this pref is true, AddStorageEntry will return an error if the
// OPEN_READONLY & OPEN_SECRETLY flags are passed and no entry exists.
// If no regressions occur this pref should be removed.
// Cache Bug 1708673:
// A special preference related to a specific bug identified in Firefox (Bug 1708673).
// This bug was related to a cache-related issue in the network component that impacted
// cache efficiency or behavior under certain conditions. This preference was introduced to
// control a workaround or fix for this bug.
// Options:
// - true: The workaround or fix for Bug 1708673 is enabled.
// - false: The workaround or fix for Bug 1708673 is disabled (default behavior).
// User preference:
user_pref("network.cache.bug1708673", false);

// Controls whether permanent HTTP redirects should be cached
// Caching permanent redirects can reduce repeated requests but may lead to outdated routing 
// if URLs change frequently.
// Options:
// true = Cache permanent HTTP redirects
// false = Do not cache permanent HTTP redirects
// User preference:
user_pref("network.cache.persist_permanent_redirects_http", false);

// Sets minimum progress for purging disk cache
// This is the minimum percentage of progress required for purging cached data from the disk, 
// helping manage disk usage efficiently.
// Default value: 0
// User preference:
user_pref("network.cache.purge_minprogress_disk", 0);

// Sets minimum progress for purging memory cache
// Similar to disk cache purging, this setting manages memory cache purging based on progress percentage.
// Default value: 32
// User preference:
user_pref("network.cache.purge_minprogress_memory", 32);

// Defines the wait time (in seconds) for purging cache on shutdown
// This controls how long the system waits before clearing cached data during shutdown to ensure data is removed.
// Default value: 10
// User preference:
user_pref("network.cache.shutdown_purge_folder_wait_seconds", 10);

// Enables background task to purge cache during shutdown
// This setting allows the system to clear cache asynchronously in a background task during shutdown, 
// potentially speeding up shutdown times but may delay complete cache clearing until the task finishes.
// Options:
// true = Enable background task for cache purging
// false = Purge cache synchronously during shutdown
// User preference:
user_pref("network.cache.shutdown_purge_in_background_task", false);

// Sets the backoff factor for captive portal detection retries
// This factor controls how quickly retry intervals increase when captive portal detection fails, 
// useful for networks requiring repeated login attempts.
// Default value: 5.0
// User preference:
user_pref("network.captive-portal-service.backoffFactor", 5.0);

// Controls whether the captive portal service is enabled in the browser.
// When set to "true," the browser actively checks for the presence of a captive portal when connecting to networks,
// allowing users to be notified if they need to interact with a login page or accept terms before accessing the internet.
// Disabling this feature may prevent the browser from detecting captive portals, which could lead to connectivity issues in certain environments.
// Options:
// true = Enable the captive portal service to check for and notify users of captive portals
// false = Disable the captive portal service
// User preference:
user_pref("network.captive-portal-service.enabled", true);

// Controls the maximum interval (in milliseconds) for checking the status of a captive portal.
// A captive portal is a web page that users must interact with before accessing the internet, often seen in public Wi-Fi networks.
// This setting determines how often the browser will check for the presence of a captive portal, with a higher value reducing the frequency of checks.
// Options:
// Numeric value = Maximum interval for captive portal checks in milliseconds (e.g., 1500000 for 25 minutes)
// User preference:
user_pref("network.captive-portal-service.maxInterval", 1500000);

// Sets the minimum interval (in milliseconds) between captive portal detection attempts
// Determines the shortest allowed time between checks, optimizing response times when access issues arise.
// Default value: 60000 (60 seconds)
// User preference:
user_pref("network.captive-portal-service.minInterval", 60000);

// Controls whether the browser allows truncated empty Brotli compressed responses.
// Brotli is a compression algorithm used to reduce the size of data transmitted over the web.
// When set to "true," the browser will accept Brotli responses that are truncated and empty, which may be useful for certain server configurations.
// However, allowing truncated responses could lead to unexpected behavior if the server does not handle them correctly.
// Options:
// true = Allow truncated empty Brotli compressed responses
// false = Disallow truncated empty Brotli compressed responses
// User preference:
user_pref("network.compress.allow_truncated_empty_brotli", true);

// Specifies the domain used for DNS over HTTPS (DoH) in the connectivity service.
// This setting allows the browser to use a specific DNS provider for secure DNS resolution, enhancing privacy and security.
// When set to "cloudflare-dns.com," the browser will use Cloudflare's DNS service for DNS over HTTPS requests.
// Options:
// String value = The domain for the DNS over HTTPS provider (e.g., "cloudflare-dns.com")
// User preference:
user_pref("network.connectivity-service.DNS_HTTPS.domain", "cloudflare-dns.com");

// Specifies the domain used for DNS (Domain Name System) resolution via IPv4 in the connectivity service.
// This setting allows the browser to use a specific DNS provider for resolving domain names over IPv4,
// which can enhance performance and reliability in network connectivity checks.
// When set to a specific domain, the browser will use that DNS service for DNS resolution tasks.
// Options:
// String value = The domain for the DNS provider (e.g., "example.com")
// User preference:
user_pref("network.connectivity-service.DNSv4.domain", "example.com");

// Specifies the domain used for DNS (Domain Name System) resolution via IPv6 in the connectivity service.
// This setting allows the browser to use a specific DNS provider for resolving domain names over IPv6,
// which can enhance performance and reliability in network connectivity checks.
// When set to a specific domain, the browser will use that DNS service for DNS resolution tasks.
// Options:
// String value = The domain for the DNS provider (e.g., "example.com")
// User preference:
user_pref("network.connectivity-service.DNSv6.domain", "example.com");

// Specifies the URL for IPv4 connectivity checks
// Connectivity service uses this URL to confirm IPv4 internet access by attempting to reach a known resource.
// Default value: http://detectportal.firefox.com/success.txt?ipv4
// User preference:
user_pref("network.connectivity-service.IPv4.url", "http://detectportal.firefox.com/success.txt?ipv4");

// Specifies the URL for IPv6 connectivity checks
// Similar to IPv4, this URL is used to verify internet connectivity specifically for IPv6-based connections.
// Default value: http://detectportal.firefox.com/success.txt?ipv6
// User preference:
user_pref("network.connectivity-service.IPv6.url", "http://detectportal.firefox.com/success.txt?ipv6");

// Enables the connectivity service
// Connectivity service monitors network status to determine whether the device is online or offline.
// Options:
// true = Enable connectivity monitoring
// false = Disable connectivity monitoring
// User preference:
user_pref("network.connectivity-service.enabled", true);

// Enables NAT64 check in the connectivity service
// NAT64 allows IPv6-only networks to communicate with IPv4 services, and this check confirms NAT64 support, 
// enhancing compatibility for IPv6 connections.
// Options:
// true = Enable NAT64 detection
// false = Disable NAT64 detection
// User preference:
user_pref("network.connectivity-service.nat64-check", true);

// Specifies the NAT64 prefix used by the connectivity service
// NAT64 allows IPv6-only networks to interact with IPv4 resources. This prefix helps the connectivity service identify 
// NAT64-supported IP addresses for seamless compatibility on such networks.
// Default value: (typically auto-configured, but can be set if known)
// User preference:
user_pref("network.connectivity-service.nat64-prefix", "");

// Controls whether the CHIPS (Client Hint for Privacy and Security) feature for cookies is enabled.
// CHIPS provides a mechanism for browsers to communicate user preferences regarding cookie behavior to servers,
// enhancing privacy and security by allowing users to control how cookies are handled, especially in cross-site contexts.
// When set to "true," the browser allows the use of CHIPS, which can help mitigate cross-site tracking by informing servers
// about the user's preferences for cookie usage, particularly regarding third-party cookies.
// Options:
// true = Enable CHIPS for enhanced cookie privacy and security
// false = Disable CHIPS, using standard cookie handling
// User preference:
user_pref("network.cookie.CHIPS.enabled", true);

// Controls whether the browser blocks the use of Unicode characters in cookie names and values.
// When set to "true," the browser will prevent cookies that contain Unicode characters, which can help mitigate
// potential security risks associated with malformed or malicious cookies that use non-ASCII characters.
// This setting can enhance compatibility and security, especially in environments where strict cookie handling is required.
// Options:
// true = Block the use of Unicode characters in cookie names and values
// false = Allow Unicode characters in cookie names and values
// User preference:
user_pref("network.cookie.blockUnicode", true);

// Sets the byte limit for CHIPS partitioned cookies
// Defines the maximum byte capacity for partitioned cookies under the CHIPS feature, managing storage for 
// isolated cookie states across sites.
// Default value: 10240 bytes (10KB)
// User preference:
user_pref("network.cookie.chips.partitionLimitByteCapacity", 10240);

// Enables a dry run for partition limit on CHIPS to monitor its effects without enforcing
// Allows testing of CHIPS partitioning limits to understand potential impacts on site functionality 
// without fully enforcing the limits.
// Options:
// true = Enable dry run
// false = Disable dry run
// User preference:
user_pref("network.cookie.chips.partitionLimitDryRun", true);

// Controls whether the partition limit for CHIPS (Client Hint for Privacy and Security) is enabled.
// When set to "true," the browser will enforce a limit on the number of partitions created for cookies based on the CHIPS settings,
// which helps manage the number of cookie partitions and can enhance performance while maintaining privacy.
// This setting is particularly relevant in scenarios where excessive partitioning could lead to resource overhead.
// Options:
// true = Enable partition limit for CHIPS to manage cookie partitions
// false = Disable partition limit for CHIPS, allowing unlimited cookie partitions
// User preference:
user_pref("network.cookie.chips.partitionLimitEnabled", true);

// Controls the cookie behavior policy for the browser.
// This setting determines how cookies are handled based on user preferences and privacy settings.
// The value can be set to different integers representing various cookie handling policies:
// 0 = Accept all cookies (default)
// 1 = Accept cookies from the originating site only (block third-party cookies)
// 2 = Accept cookies from the originating site and third-party cookies only if they are from the same site
// 3 = Block all cookies
// 4 = Block third-party cookies in private browsing mode
// 5 = Block all third-party cookies (including in private browsing mode)
// User preference:
user_pref("network.cookie.cookieBehavior", 5);

// Controls whether cookie partitioning is enabled for sites that require user opt-in.
// When set to "true," the browser will partition cookies based on the site, meaning that cookies set by a site
// will only be accessible when the user is actively visiting that site. This helps prevent cross-site tracking
// and enhances user privacy by ensuring that cookies cannot be shared across different sites unless explicitly allowed.
// Options:
// true = Enable opt-in cookie partitioning for enhanced privacy
// false = Disable opt-in cookie partitioning, allowing cookies to be shared across sites
// User preference:
user_pref("network.cookie.cookieBehavior.optInPartitioning", true);

// Controls whether cookie partitioning is enabled in private browsing mode for sites that require user opt-in.
// When set to "true," the browser will apply cookie partitioning in private browsing mode, meaning that cookies set by a site
// will only be accessible during that private session and will not be shared with other sites. This enhances privacy
// by ensuring that cookies cannot be tracked or accessed across different sites in private browsing mode.
// Options:
// true = Enable opt-in cookie partitioning in private browsing mode for enhanced privacy
// false = Disable opt-in cookie partitioning in private browsing mode, allowing cookies to be shared across sites
// User preference:
user_pref("network.cookie.cookieBehavior.optInPartitioning.pbmode", true);

// Configures the cookie behavior for private browsing mode
// Similar to regular browsing, this setting controls cookie acceptance and blocking in private browsing mode. 
// The options are the same as `cookieBehavior`.
// Default: 5 (restrict tracking cookies)
// User preference:
user_pref("network.cookie.cookieBehavior.pbmode", 5);

// Fixes issues on cookie database load
// When enabled, attempts to automatically resolve inconsistencies or corruption issues found in the cookie 
// database on load, helping to maintain browser stability.
// Options:
// true = Enable fix on load
// false = Disable fix
// User preference:
user_pref("network.cookie.fixup_on_db_load", true);

// Sets the maximum number of cookies that can be stored
// Controls the overall limit of cookies stored in the browser, balancing storage capacity with privacy and 
// performance considerations.
// Default value: 3000
// User preference:
user_pref("network.cookie.maxNumber", 3000);

// Sets the maximum number of cookies per host
// Limits the number of cookies that can be stored by a single host, ensuring that storage is managed efficiently 
// and individual sites do not overwhelm the browser's cookie storage.
// Default value: 180 cookies per host
// User preference:
user_pref("network.cookie.maxPerHost", 180);

// Controls the maximum age (in seconds) for cookies that can be set with the Max-Age attribute.
// When set to a specific numeric value, this setting limits the maximum duration that cookies can persist,
// regardless of the value specified in the Max-Age attribute of the cookie. This can help enhance user privacy
// by preventing cookies from being stored for excessively long periods.
// Options:
// Numeric value = Maximum age for cookies in seconds (e.g., 3600 for 1 hour)
// User preference:
user_pref("network.cookie.maxageCap", 3600);

// Controls whether cookies are allowed to be stored persistently on the user's device.
// When set to "true," the browser will not store cookies persistently, meaning that cookies will only be kept for the duration of the session
// and will be deleted when the browser is closed. This setting enhances user privacy by preventing long-term tracking through persistent cookies.
// Options:
// true = Disable persistent storage of cookies; cookies will be session-only
// false = Allow cookies to be stored persistently on the device
// User preference:
user_pref("network.cookie.noPersistentStorage", true);

// Controls whether the browser prevents cookies from being set in response to multipart responses.
// When set to "true," the browser will block the setting of cookies that are included in multipart responses,
// which can help mitigate potential security risks associated with certain types of responses that may attempt to set cookies
// in an unintended or malicious manner. This setting enhances security by ensuring that cookies are only set in appropriate contexts.
// Options:
// true = Prevent cookies from being set in multipart responses
// false = Allow cookies to be set in multipart responses
// User preference:
user_pref("network.cookie.prevent_set_cookie_from_multipart", true);

// Sets the quota for cookie storage per host in bytes
// Limits the amount of storage that cookies can consume per host, helping to manage storage efficiently 
// and avoid performance issues from excessive cookie storage.
// Default value: 150 bytes per host
// User preference:
user_pref("network.cookie.quotaPerHost", 150);

// Controls whether the browser checks for SameSite cookie settings when cookies are set from cross-site iframes.
// When set to "true," the browser will enforce SameSite cookie policies for cookies that are set from within cross-site iframes,
// ensuring that such cookies adhere to the SameSite attribute rules. This helps prevent potential security risks, such as
// cross-site request forgery (CSRF) attacks, by restricting how cookies can be used in cross-origin contexts.
// Options:
// true = Enforce SameSite cookie policies for cookies set from cross-site iframes
// false = Do not enforce SameSite cookie policies for cross-site iframe cookie settings
// User preference:
user_pref("network.cookie.sameSite.crossSiteIframeSetCheck", true);

// Controls whether the SameSite=Lax attribute is applied by default to cookies that do not specify a SameSite attribute.
// When set to "true," cookies that are created without an explicit SameSite attribute will automatically be treated as SameSite=Lax,
// which means they will be sent with top-level navigations and will be sent along with GET requests initiated by third-party websites.
// This setting enhances privacy by preventing cookies from being sent in cross-site contexts unless explicitly allowed.
// Options:
// true = Apply SameSite=Lax by default to cookies without a specified SameSite attribute
// false = Do not apply SameSite=Lax by default; cookies will be treated as SameSite=None unless specified otherwise
// User preference:
user_pref("network.cookie.sameSite.laxByDefault", true);

// Controls whether cookies with the SameSite=Lax attribute are allowed to be sent in the context of boomerang redirects.
// A boomerang redirect occurs when a request is redirected back to the original site, which can happen in certain authentication flows.
// When set to "true," cookies marked as SameSite=Lax can be sent during these types of redirects, allowing for smoother user experiences
// in scenarios where authentication or session management is involved.
// Options:
// true = Allow SameSite=Lax cookies to be sent during boomerang redirects
// false = Disallow SameSite=Lax cookies during boomerang redirects
// User preference:
user_pref("network.cookie.sameSite.laxByDefault.allowBoomerangRedirect", true);

// Hosts for which the SameSite=Lax default is disabled
// Specifies domains for which the SameSite=Lax default policy does not apply, allowing these hosts to set 
// cookies with less restriction.
// Default: (typically empty, users can add specific hosts)
// User preference:
user_pref("network.cookie.sameSite.laxByDefault.disabledHosts", "");

// Timeout for SameSite=Lax cookies to allow POST requests
// Sets the time in seconds after a POST request that a SameSite=Lax cookie will continue to be sent, allowing 
// follow-up actions to occur within a reasonable period.
// Default value: 120 seconds
// User preference:
user_pref("network.cookie.sameSite.laxPlusPOST.timeout", 120);

// Controls whether cookies with the SameSite=None attribute are required to be marked as Secure.
// When set to "true," cookies that are designated with SameSite=None must also have the Secure attribute,
// meaning they can only be sent over HTTPS connections. This enhances security by ensuring that cross-site cookies
// are only transmitted in secure contexts, reducing the risk of interception or misuse.
// Options:
// true = Require SameSite=None cookies to be marked as Secure
// false = Allow SameSite=None cookies without the Secure attribute
// User preference:
user_pref("network.cookie.sameSite.noneRequiresSecure", true);

// Controls whether the SameSite attribute for cookies is enforced in a schemeful manner.
// When set to "true," the browser treats cookies as SameSite based on the scheme (HTTP or HTTPS) of the requesting site,
// meaning that cookies set by a site using HTTPS will only be sent in requests to other HTTPS sites, and vice versa for HTTP.
// This enhances security by preventing cross-site request forgery (CSRF) attacks and ensuring that cookies are only sent
// in appropriate contexts based on the scheme of the URL.
// Options:
// true = Enforce SameSite attribute based on the scheme of the requesting site
// false = Do not enforce schemeful SameSite behavior
// User preference:
user_pref("network.cookie.sameSite.schemeful", true);

// Sets the threshold time in seconds before a cookie is considered stale
// Determines how long a cookie can remain inactive before it is marked as "stale," 
// which may affect whether it's automatically updated or revalidated.
// Default value: 60 seconds
// User preference:
user_pref("network.cookie.staleThreshold", 60);

// Controls whether third-party cookies are restricted to non-secure (HTTP) sessions only.
// When set to "true," third-party cookies will only be allowed in non-secure contexts, meaning they can be set and accessed
// only when the user is visiting sites that do not use HTTPS. This setting enhances security by preventing third-party cookies
// from being used in secure (HTTPS) contexts, which can help mitigate tracking and privacy concerns.
// Options:
// true = Allow third-party cookies only in non-secure (HTTP) sessions
// false = Allow third-party cookies in both secure (HTTPS) and non-secure (HTTP) sessions
// User preference:
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// Controls whether third-party cookies are restricted to session-only storage.
// When set to "true," third-party cookies will only be stored for the duration of the browsing session,
// meaning they will be deleted when the browser is closed. This setting enhances user privacy by preventing
// third-party cookies from being stored persistently on the user's device, thereby reducing the potential for tracking.
// Options:
// true = Allow third-party cookies only for the current session; they will not persist after the browser is closed
// false = Allow third-party cookies to be stored persistently across sessions
// User preference:
user_pref("network.cookie.thirdparty.sessionOnly", true);

// Controls whether the browser uses the server's time for cookie expiration instead of the local system time.
// When set to "true," the browser will rely on the time provided by the server when determining the expiration of cookies,
// which can help ensure that cookies are managed consistently across different clients and servers.
// This setting can be useful in scenarios where the local system time may not be accurate or synchronized.
// Options:
// true = Use the server's time for cookie expiration
// false = Use the local system time for cookie expiration
// User preference:
user_pref("network.cookie.useServerTime", false);

// Enables testing mode for unblocking all cookies
// Allows cookies to be unblocked specifically for testing purposes, regardless 
// of regular cookie settings or restrictions.
// Options:
// true = Unblock cookies for testing
// false = Keep standard cookie restrictions
// User preference:
user_pref("network.cookieJarSettings.unblocked_for_testing", false);

// Controls whether client certificates are allowed in CORS (Cross-Origin Resource Sharing) preflight requests.
// When set to "true," the browser will include client certificates in CORS preflight requests, which can be necessary
// for certain secure APIs that require client authentication. This setting can enhance security by allowing
// authenticated requests to be made across different origins.
// Options:
// true = Allow client certificates in CORS preflight requests
// false = Disallow client certificates in CORS preflight requests
// User preference:
user_pref("network.cors_preflight.allow_client_cert", false);

// Controls whether the Authorization header is considered covered by a wildcard in CORS (Cross-Origin Resource Sharing) preflight requests.
// When set to "true," the browser will treat the Authorization header as being allowed when a wildcard (*) is used in the Access-Control-Allow-Headers response header.
// This setting can simplify CORS configurations for APIs that use the Authorization header while still allowing for flexible access control.
// Options:
// true = Treat the Authorization header as covered by a wildcard in CORS preflight requests
// false = Do not treat the Authorization header as covered by a wildcard; explicit listing is required
// User preference:
user_pref("network.cors_preflight.authorization_covered_by_wildcard", true);

// Controls whether the browser performs decompression of network responses off the main thread.
// When set to "true," the browser will handle decompression of network data in a separate thread,
// which can improve performance and responsiveness by preventing the main thread from being blocked during decompression.
// This setting is particularly beneficial for handling large responses or when using compression algorithms.
// Options:
// true = Enable off-main-thread decompression for network responses
// false = Disable off-main-thread decompression, handling it on the main thread
// User preference:
user_pref("network.decompression_off_mainthread2", true);

// Sets the minimum data size in bytes for off-main-thread decompression
// Specifies the minimum amount of data (in bytes) for which off-main-thread decompression 
// will be used, improving performance for large data transfers.
// Default value: 512 bytes
// User preference:
user_pref("network.decompression_off_mainthread_min_size", 512);

// Controls whether access to localhost is allowed when the browser is in offline mode.
// When set to "true," the browser will disable access to localhost while offline, preventing any local network requests.
// This setting can enhance security by ensuring that local resources are not accessible when the browser is not connected to the internet.
// Options:
// true = Disable access to localhost when the browser is offline
// false = Allow access to localhost even when the browser is offline
// User preference:
user_pref("network.disable-localhost-when-offline", false);

// Controls whether the browser blocks DNS resolution for .onion addresses, which are used for accessing services on the Tor network.
// When set to "true," the browser will prevent DNS lookups for .onion domains, enhancing security and privacy by ensuring that
// users cannot inadvertently access hidden services that may not be secure or trustworthy.
// Options:
// true = Block DNS resolution for .onion addresses
// false = Allow DNS resolution for .onion addresses
// User preference:
user_pref("network.dns.blockDotOnion", true);

// Controls whether the browser makes a copy of the DNS query string before making the DNS resolution call.
// When set to "true," the browser will create a copy of the DNS query string, which can help prevent potential
// issues related to string manipulation or modification during the DNS resolution process.
// This setting can enhance stability and reliability in DNS operations.
// Options:
// true = Make a copy of the DNS query string before the DNS resolution call
// false = Do not make a copy; use the original string directly
// User preference:
user_pref("network.dns.copy_string_before_call", true);

// Controls whether the browser disables DNS resolution for IPv6 addresses.
// When set to "true," the browser will not attempt to resolve DNS queries for IPv6 addresses,
// effectively disabling IPv6 support for DNS lookups. This can be useful in environments where IPv6 is not supported
// or causes connectivity issues. However, disabling IPv6 may limit access to resources that are only available over IPv6.
// Options:
// true = Disable DNS resolution for IPv6 addresses
// false = Enable DNS resolution for IPv6 addresses
// User preference:
user_pref("network.dns.disableIPv6", false);

// Controls whether DNS prefetching is enabled in the browser.
// When set to "true," the browser will disable DNS prefetching, which is a feature that allows the browser to resolve domain names
// in advance of a user clicking on a link. This can improve page load times but may also lead to privacy concerns
// as it can expose browsing behavior to DNS servers. Disabling prefetching can enhance privacy at the cost of potential performance benefits.
// Options:
// true = Disable DNS prefetching
// false = Enable DNS prefetching
// User preference:
user_pref("network.dns.disablePrefetch", false);

// Controls whether DNS prefetching is allowed for HTTPS links in the browser.
// When set to "true," the browser will disable DNS prefetching specifically for links that use HTTPS,
// which can help enhance privacy by preventing the browser from resolving domain names for secure links before the user clicks on them.
// This setting can reduce the risk of exposing browsing behavior to DNS servers, but may also impact performance
// by delaying the resolution of secure links until they are actually accessed.
// Options:
// true = Disable DNS prefetching for HTTPS links
// false = Enable DNS prefetching for HTTPS links
// User preference:
user_pref("network.dns.disablePrefetchFromHTTPS", false);

// Controls whether DNS resolution is completely disabled in the browser.
// When set to "true," the browser will not perform any DNS lookups, effectively disabling all DNS functionality.
// This can be useful for testing or in environments where DNS resolution is handled externally or through alternative means.
// However, disabling DNS will prevent the browser from resolving domain names, which can lead to connectivity issues.
// Options:
// true = Disable DNS resolution entirely
// false = Enable DNS resolution
// User preference:
user_pref("network.dns.disabled", false);

// Restricts DNS queries to single-label names
// Prevents DNS resolution for single-label names (e.g., "localhost"), which is 
// primarily used in local networks and intranet setups.
// Options:
// true = Restrict to single-label queries
// false = Allow all label queries
// User preference:
user_pref("network.dns.dns_query_single_label", false);

// Controls whether the browser enables DNS Encryption Client Hello (ECH) configuration.
// When set to "true," the browser will support and use ECH, which enhances privacy by encrypting the DNS Client Hello message
// sent to DNS resolvers. This helps protect user information from being exposed during the DNS resolution process.
// Enabling ECH can improve security and privacy for users, especially in environments where DNS queries may be monitored.
// Options:
// true = Enable DNS Encryption Client Hello (ECH) configuration
// false = Disable DNS Encryption Client Hello (ECH) configuration
// User preference:
user_pref("network.dns.echconfig.enabled", true);

// Enables fallback to original server when ECH fails
// If ECH configuration attempts fail, this setting allows the browser to revert to the 
// origin server, ensuring connectivity even if ECH fails.
// Options:
// true = Allow fallback
// false = Do not allow fallback
// User preference:
user_pref("network.dns.echconfig.fallback_to_origin_when_all_failed", true);

// Forces DNS to resolve a specific hostname to a specified IP address
// Allows manual resolution of a hostname to an IP address for testing or specific 
// configurations, bypassing normal DNS resolution. This preference should be set with a 
// value such as "example.com=127.0.0.1" for the desired hostname-IP pair.
// User preference:
user_pref("network.dns.forceResolve", "");

// Controls whether the browser forces the use of HTTPS Resource Records (HTTPS RR) for DNS resolution.
// When set to "true," the browser will prioritize the use of HTTPS RRs when resolving domain names,
// which can enhance security by ensuring that DNS queries are resolved using secure methods.
// This setting is particularly useful for domains that support HTTPS DNS resolution, providing an additional layer of security
// against DNS spoofing and other attacks.
// Options:
// true = Force the use of HTTPS Resource Records for DNS resolution
// false = Do not force the use of HTTPS Resource Records; use standard DNS resolution
// User preference:
user_pref("network.dns.force_use_https_rr", false);

// Controls whether the browser retrieves the Time-To-Live (TTL) value for DNS records.
// When set to "true," the browser will obtain the TTL value associated with DNS records during resolution,
// which indicates how long the record can be cached before it should be refreshed. This can help optimize DNS caching
// behavior and improve performance by ensuring that the browser respects the TTL values provided by DNS servers.
// Options:
// true = Retrieve the TTL value for DNS records during resolution
// false = Do not retrieve the TTL value; use default caching behavior
// User preference:
user_pref("network.dns.get-ttl", true);

// Controls whether the browser enables DNS Encryption Client Hello (ECH) configuration for HTTP/3.
// When set to "true," the browser will support and utilize ECH for DNS queries made over HTTP/3,
// enhancing privacy by encrypting the DNS Client Hello message sent to DNS resolvers. This helps protect user information
// from being exposed during the DNS resolution process, particularly in environments where HTTP/3 is used.
// Options:
// true = Enable DNS Encryption Client Hello (ECH) configuration for HTTP/3
// false = Disable DNS Encryption Client Hello (ECH) configuration for HTTP/3
// User preference:
user_pref("network.dns.http3_echconfig.enabled", true);

// Sets the fallback timeout for HTTP/3 fast fallback
// Defines the time in milliseconds that the browser waits before falling back from 
// HTTP/3 to an alternative protocol when the HTTPS RR query fails. Default is 50 ms.
// User preference:
user_pref("network.dns.httpssvc.http3_fast_fallback_timeout", 50);

// Controls whether the browser resets the exclusion list for DNS HTTPS service (HTTPSsvc) when the browser starts.
// When set to "true," the browser will clear any previously defined exclusion list for DNS HTTPS service,
// ensuring that all domains are eligible for HTTPS DNS resolution. This can be useful for maintaining a fresh state
// and ensuring that any changes to the exclusion list are applied at the start of each session.
// Options:
// true = Reset the exclusion list for DNS HTTPS service on startup
// false = Do not reset the exclusion list; retain the existing exclusions
// User preference:
user_pref("network.dns.httpssvc.reset_exclusion_list", true);

// Specifies a list of domains for which only IPv4 addresses should be used for DNS resolution.
// When set, the browser will resolve these specified domains using only IPv4, ignoring any available IPv6 addresses.
// This can be useful in environments where IPv6 is not supported or where specific domains are known to have issues with IPv6 resolution.
// The value should be a comma-separated list of domain names.
// User preference:
user_pref("network.dns.ipv4OnlyDomains", "");

// Specifies local domains for custom DNS handling
// Defines domains that are resolved only within the local network, allowing for internal 
// hostname management separate from the global DNS system. Useful for intranet setups 
// and networked resources.
// User preference (example: "internal.company.com,localserver"):
user_pref("network.dns.localDomains", "");

// Sets maximum threads for low-priority DNS queries
// Controls the number of threads that can handle "ANY" priority DNS queries. Increasing 
// this can improve response times for background queries.
// User preference:
user_pref("network.dns.max_any_priority_threads", 24);

// Sets maximum threads for high-priority DNS queries
// Controls the maximum number of threads dedicated to high-priority DNS requests, which 
// can improve performance for time-sensitive DNS lookups.
// User preference:
user_pref("network.dns.max_high_priority_threads", 40);

// Specifies a domain to be used for mocking HTTPS Resource Records (HTTPS RR) during DNS resolution.
// When set, the browser will use this specified domain to simulate the presence of HTTPS RRs, which can be useful for testing
// or development purposes. This allows developers to verify how their applications handle DNS queries that involve HTTPS RRs
// without needing to rely on actual DNS infrastructure.
// User preference:
user_pref("network.dns.mock_HTTPS_RR_domain", "");

// Controls whether the browser treats native DNS resolution of certain domains as localhost.
// When set to "true," the browser will consider DNS resolutions that return addresses typically associated with localhost
// (such as 127.0.0.1 or ::1) as local, even if they are not explicitly defined in the local hosts file.
// This can help ensure that requests to these addresses are handled as local traffic, enhancing privacy and security.
// Options:
// true = Treat native DNS resolutions of certain addresses as localhost
// false = Do not treat native DNS resolutions as localhost; use standard resolution behavior
// User preference:
user_pref("network.dns.native-is-localhost", true);

// Controls whether the browser uses DNS over HTTPS (DoH) for DNS queries.
// When set to "true," the browser will perform DNS resolution over HTTPS,
// enhancing privacy and security by encrypting DNS requests and preventing eavesdropping
// or tampering during the DNS resolution process.
// Options:
// true = Enable DNS over HTTPS (DoH) for DNS queries
// false = Disable DNS over HTTPS (DoH) for DNS queries
// User preference:
user_pref("network.dns.native_https_query", true);

// Controls whether the browser enables native DNS over HTTPS (DoH) for automated environments.
// When set to "true," the browser will support and utilize native DoH for DNS queries
// in automated testing or headless modes, enhancing privacy and security by encrypting
// DNS requests even when running in automated scenarios.
// Options:
// true = Enable native DNS over HTTPS (DoH) for automated environments
// false = Disable native DNS over HTTPS (DoH) for automated environments
// User preference:
user_pref("network.dns.native_https_query_in_automation", true);

// Controls whether the browser uses native DNS over HTTPS (DoH) specifically for Windows 10.
// When set to "true," the browser will perform DNS resolution using native HTTPS on Windows 10,
// enhancing privacy and security by encrypting DNS requests and preventing eavesdropping
// or tampering during the DNS resolution process on this operating system.
// Options:
// true = Enable native DNS over HTTPS (DoH) for Windows 10
// false = Disable native DNS over HTTPS (DoH) for Windows 10
// User preference:
user_pref("network.dns.native_https_query_win10", true);

// Sets the timeout for native HTTPS queries on Android (ms)
// Configures the timeout duration in milliseconds for HTTPS DNS queries on Android 
// devices, adjusting to network speed and reliability.
// User preference:
user_pref("network.dns.native_https_timeout_android", 20000);

// Sets negative TTL for specific DNS record types
// Configures the Time-to-Live (TTL) duration in seconds for negative caching, affecting 
// how long failed DNS lookups for specific record types are cached.
// User preference:
user_pref("network.dns.negative_ttl_for_type_record", 300);

// Controls whether the browser allows DNS resolution for localhost when offline.
// When set to "true," the browser will still resolve DNS queries for "localhost"
// even if there is no internet connection available. This is useful for local development
// and testing, ensuring that requests to localhost are handled correctly regardless of
// the network status.
// Options:
// true = Allow DNS resolution for localhost when offline
// false = Do not allow DNS resolution for localhost when offline
// User preference:
user_pref("network.dns.offline-localhost", true);

// Controls whether the browser refreshes DNS records only on fresh connections.
// When set to "true," the browser will only refresh DNS records when a new connection
// is established, rather than refreshing them periodically or on every request.
// This can help reduce unnecessary DNS lookups and improve performance, especially
// in scenarios where connections are reused.
// Options:
// true = Refresh DNS records only on fresh connections
// false = Refresh DNS records more frequently, regardless of connection status
// User preference:
user_pref("network.dns.only_refresh_on_fresh_connection", true);

// Controls whether the browser uses port-prefixed QNAME for DNS over HTTPS (DoH) queries.
// When set to "true," the browser will include the port number in the QNAME for DNS queries
// sent over HTTPS, which can help distinguish between different services running on the same
// domain but on different ports. This can enhance the accuracy of DNS resolution in certain
// scenarios where multiple services are hosted on the same domain.
// Options:
// true = Use port-prefixed QNAME for DNS over HTTPS (DoH) queries
// false = Do not use port-prefixed QNAME for DNS over HTTPS (DoH) queries
// User preference:
user_pref("network.dns.port_prefixed_qname_https_rr", true);

// Controls whether the browser prefers IPv6 addresses over IPv4 addresses for DNS resolution.
// When set to "true," the browser will prioritize IPv6 addresses when both IPv4 and IPv6
// addresses are available for a given domain. This can enhance performance and support for
// modern networking, as IPv6 is designed to replace IPv4 and offers a larger address space.
// Options:
// true = Prefer IPv6 addresses over IPv4 addresses for DNS resolution
// false = Prefer IPv4 addresses over IPv6 addresses for DNS resolution
// User preference:
user_pref("network.dns.preferIPv6", false);

// Controls whether the browser allows DNS prefetching through a proxy server.
// When set to "true," the browser will perform DNS prefetching for URLs that are
// likely to be visited, using the configured proxy server for DNS resolution.
// This can improve loading times for websites by resolving DNS names in advance,
// but it may also lead to privacy concerns if the proxy server logs these requests.
// Options:
// true = Allow DNS prefetching via proxy
// false = Do not allow DNS prefetching via proxy
// User preference:
user_pref("network.dns.prefetch_via_proxy", true);

// Sets extra idle time for DNS resolver threads (seconds)
// Configures the additional idle time in seconds before DNS resolver threads are 
// terminated when not in use, helping to manage resource allocation and performance.
// User preference:
user_pref("network.dns.resolver-thread-extra-idle-time-seconds", 60);

// Sets shutdown timeout for DNS resolver (milliseconds)
// Defines the maximum duration in milliseconds that the DNS resolver will wait before 
// shutting down its threads, influencing how quickly resources are released on 
// application closure.
// User preference:
user_pref("network.dns.resolver_shutdown_timeout_ms", 2000);

// Controls whether the browser upgrades DNS queries to HTTPS when an HTTPS Resource Record (RR) is available.
// When set to "true," the browser will attempt to upgrade DNS queries to use DNS over HTTPS (DoH)
// if the DNS response includes an HTTPS Resource Record, enhancing privacy and security by encrypting
// DNS requests and preventing eavesdropping or tampering during the DNS resolution process.
// Options:
// true = Upgrade DNS queries to HTTPS when an HTTPS Resource Record is available
// false = Do not upgrade DNS queries to HTTPS, even if an HTTPS Resource Record is available
// User preference:
user_pref("network.dns.upgrade_with_https_rr", true);

// Controls whether the browser uses HTTPS Resource Records (RR) as alternative service (Alt-Svc) indicators.
// When set to "true," the browser will consider HTTPS Resource Records in DNS responses as potential
// alternative service endpoints, allowing it to connect to services over different protocols or ports
// as specified by the DNS response. This can enhance performance by enabling the use of alternative
// services that may be more efficient or faster.
// Options:
// true = Use HTTPS Resource Records as alternative service indicators
// false = Do not use HTTPS Resource Records as alternative service indicators
// User preference:
user_pref("network.dns.use_https_rr_as_altsvc", true);

// Sets the number of entries in the DNS cache
// Controls the maximum number of DNS entries that can be stored in the cache, which 
// affects how quickly previously resolved domains can be accessed without new queries.
// User preference:
user_pref("network.dnsCacheEntries", 400);

// Specifies the expiration time for DNS cache entries (seconds)
// Determines how long a DNS entry remains valid in the cache before it needs to be 
// resolved again, impacting performance and freshness of DNS data.
// User preference:
user_pref("network.dnsCacheExpiration", 60);

// Specifies the grace period for DNS cache expiration (seconds)
// Defines the additional time period in seconds after the initial expiration during 
// which cached DNS entries may still be considered valid, allowing for a smoother 
// resolution experience.
// User preference:
user_pref("network.dnsCacheExpirationGracePeriod", 60);

// Controls whether the browser supports Early Hints (HTTP Status Code 103).
// When set to "true," the browser will enable support for Early Hints, allowing servers
// to send hints to the browser about resources that may be needed for a page before the
// final response is sent. This can improve loading times by allowing the browser to start
// fetching resources earlier in the page load process.
// Options:
// true = Enable support for Early Hints (HTTP 103)
// false = Disable support for Early Hints (HTTP 103)
// User preference:
user_pref("network.early-hints.enabled", true);

// Controls whether the browser supports Early Hints (HTTP Status Code 103) over HTTP/1.1.
// When set to "true," the browser will enable support for receiving Early Hints from servers
// that communicate using the HTTP/1.1 protocol. This allows the browser to start fetching
// resources earlier in the page load process, even when the server does not support HTTP/2 or HTTP/3.
// Options:
// true = Enable support for Early Hints over HTTP/1.1
// false = Disable support for Early Hints over HTTP/1.1
// User preference:
user_pref("network.early-hints.over-http-v1-1.enabled", true);

// Sets the timeout for parent connection in early hints (milliseconds)
// Configures the maximum duration to wait for a connection to a parent resource 
// when processing early hints, which can impact how quickly resources are fetched 
// and displayed to the user.
// User preference:
user_pref("network.early-hints.parent-connect-timeout", 10000);

// Controls whether the browser supports preconnecting to origins based on Early Hints (HTTP Status Code 103).
// When set to "true," the browser will initiate preconnections to specified origins as indicated by
// Early Hints from the server. This allows the browser to establish connections to resources before
// they are actually needed, potentially improving loading times for web pages.
// Options:
// true = Enable preconnecting to origins based on Early Hints
// false = Disable preconnecting to origins based on Early Hints
// User preference:
user_pref("network.early-hints.preconnect.enabled", true);

// Sets the maximum number of preconnections for early hints
// Defines the upper limit of simultaneous connections that can be preestablished 
// to resources based on early hints, helping to balance resource usage and load 
// performance.
// User preference:
user_pref("network.early-hints.preconnect.max_connections", 10);

// Controls whether the browser partitions the cache for cross-origin fetch requests.
// When set to "true," the browser will create separate cache entries for fetch requests
// made to different origins, preventing cross-origin data from being shared. This enhances
// privacy by ensuring that resources fetched from different origins do not interfere with
// each other's cache entries.
// Options:
// true = Enable cache partitioning for cross-origin fetch requests
// false = Disable cache partitioning for cross-origin fetch requests
// User preference:
user_pref("network.fetch.cache_partition_cross_origin", true);

// Controls whether the browser defaults to omitting credentials in fetch requests.
// When set to "true," the browser will not include credentials (such as cookies, HTTP authentication,
// or client-side SSL certificates) in fetch requests by default. This can enhance privacy and security
// by preventing unintended credential exposure when making cross-origin requests.
// Options:
// true = Default to omitting credentials in fetch requests
// false = Include credentials in fetch requests by default
// User preference:
user_pref("network.fetch.systemDefaultsToOmittingCredentials", true);

// Controls whether the browser adjusts the urgency of fetch requests based on their priority.
// When set to "true," the browser will modify the urgency of fetch requests according to their
// specified priority levels, allowing for more efficient resource loading and better performance
// by ensuring that higher-priority requests are processed first.
// Options:
// true = Enable adjustment of fetch request urgency based on priority
// false = Disable adjustment of fetch request urgency based on priority
// User preference:
user_pref("network.fetchpriority.adjust_urgency", true);

// Adjusts fetch priority for async or deferred scripts (auto)
// Configures the urgency adjustment for asynchronous or deferred scripts, 
// determining how they are prioritized in the fetch queue.
// User preference:
user_pref("network.fetchpriority.adjustments.async-or-defer-script.auto", 0);

// Adjusts fetch priority for high urgency async or deferred scripts
// Sets the priority adjustment for high-urgency asynchronous or deferred scripts, 
// influencing the order in which resources are fetched.
// User preference:
user_pref("network.fetchpriority.adjustments.async-or-defer-script.high", -10);

// Adjusts fetch priority for low urgency async or deferred scripts
// Configures the priority adjustment for low-urgency asynchronous or deferred 
// scripts, potentially delaying their fetching relative to others.
// User preference:
user_pref("network.fetchpriority.adjustments.async-or-defer-script.low", 10);

// Adjusts fetch priority for deferred styles (auto)
// Sets the priority adjustment for styles that are deferred, impacting their 
// loading and rendering behavior on the page.
// User preference:
user_pref("network.fetchpriority.adjustments.deferred-style.auto", 0);

// Adjusts fetch priority for high urgency deferred styles
// Configures the priority adjustment for high-urgency deferred styles, which can 
// help in rendering performance by prioritizing critical styles.
// User preference:
user_pref("network.fetchpriority.adjustments.deferred-style.high", 0);

// Adjusts fetch priority for low urgency deferred styles
// Sets the priority adjustment for low-urgency deferred styles, potentially 
// affecting the timing of their application to the document.
// User preference:
user_pref("network.fetchpriority.adjustments.deferred-style.low", 10);

// Adjusts fetch priority for global fetch API requests (auto)
// Configures the priority adjustment for global fetch API requests that do not 
// fall into any specific category, helping to manage resource loading more effectively.
// User preference:
user_pref("network.fetchpriority.adjustments.global-fetch-api.auto", 0);

// Adjusts fetch priority for high urgency global fetch API requests
// Sets the priority adjustment for high-urgency global fetch API requests, allowing 
// critical resources to be fetched sooner for improved performance.
// User preference:
user_pref("network.fetchpriority.adjustments.global-fetch-api.high", -10);

// Adjusts fetch priority for low urgency global fetch API requests
// Configures the priority adjustment for low-urgency global fetch API requests, 
// potentially delaying their fetching to optimize loading performance.
// User preference:
user_pref("network.fetchpriority.adjustments.global-fetch-api.low", 10);

// Adjusts fetch priority for image fetch requests (auto)
// Sets the priority adjustment for image fetch requests that do not have a 
// specified priority, influencing how quickly images are loaded relative to other 
// resources on the page.
// User preference:
user_pref("network.fetchpriority.adjustments.images.auto", 0);

// Adjusts fetch priority for high urgency image fetch requests
// Configures the priority adjustment for high-urgency image fetch requests, 
// ensuring that important images are loaded promptly to enhance user experience.
// User preference:
user_pref("network.fetchpriority.adjustments.images.high", -20);

// Adjusts fetch priority for low urgency image fetch requests
// Sets the priority adjustment for low-urgency image fetch requests, which may 
// result in their fetching being delayed compared to other resources.
// User preference:
user_pref("network.fetchpriority.adjustments.images.low", 10);

// Adjusts fetch priority for link preload fetch requests (auto)
// Configures the priority adjustment for link preload fetch requests that do 
// not have a defined priority, impacting how preloaded resources are handled.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-fetch.auto", 0);

// Adjusts fetch priority for high urgency link preload fetch requests
// Sets the priority adjustment for high-urgency link preload fetch requests, 
// ensuring that crucial resources are preloaded in a timely manner.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-fetch.high", -10);

// Adjusts fetch priority for low urgency link preload fetch requests
// Configures the priority adjustment for low-urgency link preload fetch requests, 
// potentially delaying their fetching to optimize resource loading.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-fetch.low", 10);

// Adjusts fetch priority for link preload font fetch requests (auto)
// Sets the priority adjustment for link preload font fetch requests that do 
// not have a specified priority, helping to manage font loading efficiency.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-font.auto", 0);

// Adjusts fetch priority for high urgency link preload font fetch requests
// Configures the priority adjustment for high-urgency link preload font fetch 
// requests, ensuring that important fonts are loaded quickly for rendering.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-font.high", 0);

// Adjusts fetch priority for low urgency link preload font fetch requests
// Sets the priority adjustment for low-urgency link preload font fetch requests, 
// potentially delaying their loading to prioritize more critical resources.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-font.low", 20);

// Adjusts fetch priority for link preload script fetch requests (auto)
// Configures the priority adjustment for link preload script fetch requests 
// that do not have a specified priority, influencing how quickly scripts are loaded.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-script.auto", 0);

// Adjusts fetch priority for high urgency link preload script fetch requests
// Sets the priority adjustment for high-urgency link preload script fetch requests, 
// ensuring that critical scripts are loaded promptly to enhance performance.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-script.high", 0);

// Adjusts fetch priority for low urgency link preload script fetch requests
// Configures the priority adjustment for low-urgency link preload script fetch requests, 
// which may result in their fetching being delayed compared to other resources.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-script.low", 30);

// Adjusts fetch priority for link preload style fetch requests (auto)
// Configures the priority adjustment for link preload style fetch requests that do 
// not have a defined priority, impacting how preloaded styles are handled.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-style.auto", 0);

// Adjusts fetch priority for high urgency link preload style fetch requests
// Sets the priority adjustment for high-urgency link preload style fetch requests, 
// ensuring that essential styles are loaded quickly for rendering.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-style.high", 0);

// Adjusts fetch priority for low urgency link preload style fetch requests
// Configures the priority adjustment for low-urgency link preload style fetch requests, 
// which may delay their fetching to optimize loading performance.
// User preference:
user_pref("network.fetchpriority.adjustments.link-preload-style.low", 10);

// Adjusts fetch priority for media fetch requests (auto)
// Sets the priority adjustment for media fetch requests that do not have a specified 
// priority, influencing the loading behavior of media resources like images and videos.
// User preference:
user_pref("network.fetchpriority.adjustments.media.auto", 0);

// Adjusts fetch priority for high urgency media fetch requests
// Configures the priority adjustment for high-urgency media fetch requests, 
// ensuring that critical media resources are loaded quickly to improve user experience.
// User preference:
user_pref("network.fetchpriority.adjustments.media.high", 0);

// Adjusts fetch priority for low urgency media fetch requests
// Sets the priority adjustment for low-urgency media fetch requests, which may 
// result in their fetching being delayed compared to other resources.
// User preference:
user_pref("network.fetchpriority.adjustments.media.low", 10);

// Adjusts fetch priority for module script fetch requests (auto)
// Configures the priority adjustment for module script fetch requests that do not 
// have a specified priority, impacting how quickly module scripts are loaded.
// User preference:
user_pref("network.fetchpriority.adjustments.module-script.auto", 0);

// Adjusts fetch priority for high urgency module script fetch requests
// Sets the priority adjustment for high-urgency module script fetch requests, 
// ensuring that important module scripts are loaded promptly for execution.
// User preference:
user_pref("network.fetchpriority.adjustments.module-script.high", -10);

// Adjusts fetch priority for low urgency module script fetch requests
// Configures the priority adjustment for low-urgency module script fetch requests, 
// potentially delaying their loading to prioritize more critical resources.
// User preference:
user_pref("network.fetchpriority.adjustments.module-script.low", 10);

// Adjusts fetch priority for non-deferred style fetch requests (auto)
// Configures the priority adjustment for non-deferred style fetch requests that do 
// not have a specified priority, impacting how quickly these styles are loaded.
// User preference:
user_pref("network.fetchpriority.adjustments.non-deferred-style.auto", 0);

// Adjusts fetch priority for high urgency non-deferred style fetch requests
// Sets the priority adjustment for high-urgency non-deferred style fetch requests, 
// ensuring that critical styles are loaded promptly to enhance rendering performance.
// User preference:
user_pref("network.fetchpriority.adjustments.non-deferred-style.high", -20);

// Adjusts fetch priority for low urgency non-deferred style fetch requests
// Configures the priority adjustment for low-urgency non-deferred style fetch requests, 
// which may delay their fetching to optimize loading performance.
// User preference:
user_pref("network.fetchpriority.adjustments.non-deferred-style.low", 0);

// Adjusts fetch priority for other script fetch requests (auto)
// Configures the priority adjustment for other script fetch requests that do not 
// have a specified priority, influencing their loading behavior.
// User preference:
user_pref("network.fetchpriority.adjustments.other-script.auto", 0);

// Adjusts fetch priority for high urgency other script fetch requests
// Sets the priority adjustment for high-urgency other script fetch requests, 
// ensuring that important scripts are loaded quickly for execution.
// User preference:
user_pref("network.fetchpriority.adjustments.other-script.high", -10);

// Adjusts fetch priority for low urgency other script fetch requests
// Configures the priority adjustment for low-urgency other script fetch requests, 
// potentially delaying their loading to prioritize more critical resources.
// User preference:
user_pref("network.fetchpriority.adjustments.other-script.low", 10);

// Adjusts fetch priority for script in head fetch requests (auto)
// Configures the priority adjustment for script fetch requests that are located 
// in the head of a document and do not have a specified priority, impacting how 
// quickly these scripts are loaded.
// User preference:
user_pref("network.fetchpriority.adjustments.script-in-head.auto", 0);

// Adjusts fetch priority for high urgency script in head fetch requests
// Sets the priority adjustment for high-urgency script fetch requests located in 
// the head of the document, ensuring that essential scripts are loaded promptly.
// User preference:
user_pref("network.fetchpriority.adjustments.script-in-head.high", -10);

// Adjusts fetch priority for low urgency script in head fetch requests
// Configures the priority adjustment for low-urgency script fetch requests located 
// in the head of the document, potentially delaying their loading to prioritize 
// more critical resources.
// User preference:
user_pref("network.fetchpriority.adjustments.script-in-head.low", 10);

// Controls whether the browser supports fetch priority for resource loading.
// When set to "true," the browser will enable the use of fetch priority, allowing developers
// to specify the priority of fetch requests. This can help optimize resource loading by
// ensuring that higher-priority requests are processed before lower-priority ones.
// Options:
// true = Enable fetch priority for resource loading
// false = Disable fetch priority for resource loading
// User preference:
user_pref("network.fetchpriority.enabled", true);

// Specifies the workstation name for NTLM authentication
// Sets the name of the workstation used during NTLM authentication, which may be 
// required for proper authentication in certain network environments.
// User preference:
user_pref("network.generic-ntlm-auth.workstation", "WORKSTATION");

// Controls the value of the "Accept" HTTP header sent by the browser in requests.
// This header indicates the media types that the browser is willing to accept from the server.
// When set, it can help the server determine the appropriate content type to return.
// The default value typically includes a list of common media types, such as:
// "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
// Options:
// The value can be customized to specify different media types as needed.
// User preference:
user_pref("network.http.accept", "");

// Controls the value of the "Accept-Encoding" HTTP header sent by the browser in requests.
// This header indicates the content-encoding methods that the browser supports and is willing to accept
// from the server. Common encodings include gzip, deflate, and br (Brotli).
// The default value typically includes:
// "gzip, deflate, br"
// Options:
// The value can be customized to specify different encoding methods as needed.
// User preference:
user_pref("network.http.accept-encoding", "gzip, deflate, br");

// Controls the value of the "Accept-Encoding" HTTP header sent by the browser in secure (HTTPS) requests.
// This header indicates the content-encoding methods that the browser supports and is willing to accept
// from the server specifically for secure connections. Common encodings include gzip, deflate, and br (Brotli).
// The default value typically includes:
// "gzip, deflate, br"
// Options:
// The value can be customized to specify different encoding methods as needed for secure requests.
// User preference:
user_pref("network.http.accept-encoding.secure", "gzip, deflate, br, zstd");

// Controls whether the browser includes images in the "Accept" HTTP header sent in requests.
// When set to "true," the browser will include image content types (such as image/png, image/jpeg)
// in the "Accept" header, indicating to the server that it can return images as part of the response.
// Options:
// true = Include images in the "Accept" header
// false = Do not include images in the "Accept" header
// User preference:
user_pref("network.http.accept_include_images", true);

// Controls whether the browser prioritizes network requests from the active tab.
// When set to "true," the browser will give higher priority to network requests originating
// from the currently active tab, ensuring that resources for the active tab load faster
// compared to those from background tabs. This can enhance the user experience by reducing
// loading times for the tab that the user is currently interacting with.
// Options:
// true = Enable active tab priority for network requests
// false = Disable active tab priority for network requests
// User preference:
user_pref("network.http.active_tab_priority", true);






// Controls whether the browser supports Alternative Services (Alt-Svc) for HTTP requests.
// When set to "true," the browser will enable the use of the Alt-Svc HTTP header, which allows
// servers to indicate that a resource can be accessed using a different protocol or port.
// This can improve performance by enabling the browser to connect to alternative services
// that may be more efficient or faster than the original request.
// Options:
// true = Enable support for Alternative Services (Alt-Svc)
// false = Disable support for Alternative Services (Alt-Svc)
// User preference:
user_pref("network.http.altsvc.enabled", true);

// Controls whether the browser uses the Alt-Svc (Alternative Services) HTTP header for origin-encoded (OE) requests.
// When set to "true," the browser will enable the use of Alt-Svc for requests that are origin-encoded,
// allowing it to connect to alternative services specified by the server for those requests.
// This can enhance performance by enabling the browser to utilize more efficient protocols or ports
// for resources that are served from the same origin.
// Options:
// true = Enable Alt-Svc for origin-encoded requests
// false = Disable Alt-Svc for origin-encoded requests
// User preference:
user_pref("network.http.altsvc.oe", true);

// Controls whether the browser performs proxy checks for Alternative Services (Alt-Svc).
// When set to "true," the browser will check if the alternative service specified in the
// Alt-Svc header is accessible through the configured proxy settings. This ensures that
// the browser can successfully connect to the alternative service when using a proxy.
// Options:
// true = Enable proxy checks for Alternative Services (Alt-Svc)
// false = Disable proxy checks for Alternative Services (Alt-Svc)
// User preference:
user_pref("network.http.altsvc.proxy_checks", true);

// Controls whether the browser enforces the use of associated requests for HTTP/2 and HTTP/3.
// When set to "true," the browser will enforce the use of associated requests, which allows
// multiple requests to be sent together in a single HTTP/2 or HTTP/3 connection. This can
// improve performance by reducing latency and optimizing resource loading.
// Options:
// true = Enforce the use of associated requests for HTTP/2 and HTTP/3
// false = Do not enforce associated requests for HTTP/2 and HTTP/3
// User preference:
user_pref("network.http.assoc-req.enforce", true);

// Sets the timeout for retrying HTTP connections
// Configures the timeout duration (in milliseconds) for retrying failed HTTP 
// connections, impacting how quickly the client attempts to re-establish a 
// connection after a failure.
// User preference:
user_pref("network.http.connection-retry-timeout", 250);

// Sets the connection timeout for HTTP requests
// Configures the duration (in seconds) before an HTTP connection attempt is 
// considered timed out, affecting how long the client waits before giving up 
// on a connection.
// User preference:
user_pref("network.http.connection-timeout", 90);

// Controls the default socket type used for HTTP connections.
// This setting determines whether the browser uses a plain socket (for HTTP) or a secure socket (for HTTPS)
// when establishing connections. The value can typically be set to either "default" or "ssl".
// Options:
// "default" = Use plain sockets for HTTP connections
// "ssl" = Use secure sockets for HTTPS connections
// User preference:
user_pref("network.http.default-socket-type", "");

// Controls whether the browser enables diagnostic logging for HTTP requests.
// When set to "true," the browser will log detailed information about HTTP requests and responses,
// which can be useful for debugging and troubleshooting network issues. This may include information
// such as request headers, response headers, and timing information.
// Options:
// true = Enable HTTP diagnostics logging
// false = Disable HTTP diagnostics logging
// User preference:
user_pref("network.http.diagnostics", false);

// Sets the length of the nonce used in HTTP Digest Authentication
// Specifies the length of the client nonce (cnonce) generated for HTTP Digest 
// Authentication, which helps to ensure the uniqueness of authentication 
// requests, enhancing security against replay attacks.
// Options:
// Integer value defining the length of the nonce
// User preference:
user_pref("network.http.digest_auth_cnonce_length", 16);

// Controls whether the browser disables the use of early data in HTTP/3 connections upon encountering an error.
// When set to "true," the browser will stop using early data for HTTP/3 requests if an error occurs during
// the connection process. This can help prevent issues related to sending data prematurely before the connection
// is fully established and secure.
// Options:
// true = Disable early data on error for HTTP/3 connections
// false = Continue using early data even if an error occurs
// User preference:
user_pref("network.http.early_data_disable_on_error", true);

// Sets the maximum number of errors allowed before disabling early data
// Configures the threshold for the maximum number of errors allowed before 
// the early data feature in HTTP/3 connections is disabled, which can help 
// maintain a stable connection by preventing excessive retries on failure.
// Options:
// Integer value indicating the maximum number of errors before disabling early data
// User preference:
user_pref("network.http.early_data_max_error", 5);

// Controls whether the browser treats the "trustworthy" encoding for HTTP requests as secure when using HTTPS.
// When set to "true," the browser will consider the encoding of requests made over HTTPS as trustworthy,
// allowing for certain optimizations or behaviors that may not be applied to non-secure requests.
// Options:
// true = Treat HTTPS request encoding as trustworthy
// false = Do not treat HTTPS request encoding as trustworthy
// User preference:
user_pref("network.http.encoding.trustworthy_is_https", true);

// Controls whether the browser enforces framing for HTTP/1.1 requests.
// When set to "true," the browser will enforce the use of framing for HTTP/1.1 connections,
// which can help ensure that responses are properly framed and processed according to the HTTP/1.1 specification.
// This can improve compatibility with servers that expect framed responses.
// Options:
// true = Enforce framing for HTTP/1.1 requests
// false = Do not enforce framing for HTTP/1.1 requests
// User preference:
user_pref("network.http.enforce-framing.http1", true);

// Controls whether the browser enforces soft framing for HTTP/1.1 requests.
// When set to "true," the browser will apply soft framing rules for HTTP/1.1 connections,
// which allows for more lenient handling of framing issues. This can help improve compatibility
// with servers that may not strictly adhere to the HTTP/1.1 specification while still attempting
// to maintain proper framing behavior.
// Options:
// true = Enable soft framing enforcement for HTTP/1.1 requests
// false = Disable soft framing enforcement for HTTP/1.1 requests
// User preference:
user_pref("network.http.enforce-framing.soft", true);

// Controls whether the browser enforces strict chunked encoding for HTTP/1.1 requests.
// When set to "true," the browser will enforce strict adherence to the chunked transfer encoding
// rules as defined in the HTTP/1.1 specification. This means that the browser will expect chunked
// responses to be formatted correctly and will reject responses that do not comply with the standard.
// Options:
// true = Enforce strict chunked encoding for HTTP/1.1 requests
// false = Do not enforce strict chunked encoding for HTTP/1.1 requests
// User preference:
user_pref("network.http.enforce-framing.strict_chunked_encoding", true);

// Sets the fallback connection timeout for HTTP requests
// Configures the timeout duration (in seconds) for falling back to alternative 
// connection methods (e.g., IPv4) when initial connection attempts fail, 
// improving robustness in network connectivity.
// Options:
// Integer value indicating the timeout duration in seconds
// User preference:
user_pref("network.http.fallback-connection-timeout", 5);

// Controls whether the browser quickly falls back to IPv4 when IPv6 connections fail.
// When set to "true," the browser will attempt to connect using IPv6 first, and if that fails,
// it will quickly fall back to using IPv4. This can improve connection times in environments where
// IPv6 is not fully supported or operational.
// Options:
// true = Enable fast fallback to IPv4 when IPv6 connections fail
// false = Do not enable fast fallback to IPv4; the browser will wait longer before trying IPv4
// User preference:
user_pref("network.http.fast-fallback-to-IPv4", true);

































// Sets the ratio of transactions for the focused window
// Configures the transaction ratio for HTTP requests originating from the 
// currently focused window, allowing for prioritization of requests based on 
// user activity and enhancing perceived performance.
// Options:
// Float value between 0.0 and 1.0 indicating the ratio of focused window transactions
// User preference:
user_pref("network.http.focused_window_transaction_ratio", 0.9);

// Enables aggressive coalescing for HTTP/2 connections
// Controls whether aggressive coalescing of HTTP/2 connections is enabled, 
// which can improve connection management by merging streams for better 
// performance but may also introduce complexity in handling requests.
// Options:
// true = Enable aggressive coalescing
// false = Do not enable aggressive coalescing
// User preference:
user_pref("network.http.http2.aggressive_coalescing", false);

// Disables HTTP/2 server push feature
// Configures whether the HTTP/2 server push feature is allowed, which can 
// preemptively send resources to the client based on anticipated needs, 
// potentially improving load times but also increasing unnecessary data transfer.
// Options:
// true = Allow server push
// false = Disallow server push
// User preference:
user_pref("network.http.http2.allow-push", false);

// Sets the chunk size for HTTP/2 connections
// Configures the size of the data chunks sent over HTTP/2 connections, 
// impacting the efficiency of data transmission and potentially 
// affecting performance for large payloads.
// Options:
// Integer value indicating the chunk size in bytes
// User preference:
user_pref("network.http.http2.chunk-size", 16000);

// Enables hostname coalescing for HTTP/2 connections
// Controls whether HTTP/2 connections are allowed to share the same 
// hostname to improve connection reuse and reduce latency by 
// coalescing requests to the same server.
// Options:
// true = Enable hostname coalescing
// false = Disable hostname coalescing
// User preference:
user_pref("network.http.http2.coalesce-hostnames", true);

// Sets the default number of concurrent streams for HTTP/2 connections
// Configures the maximum number of concurrent streams allowed for 
// each HTTP/2 connection, influencing the performance of 
// multiplexing and resource loading.
// Options:
// Integer value indicating the default concurrent streams
// User preference:
user_pref("network.http.http2.default-concurrent", 100);

// Sets the default HPACK buffer size for HTTP/2 connections
// Configures the default size of the HPACK buffer used for 
// header compression in HTTP/2, affecting the efficiency of 
// header encoding and decoding during requests and responses.
// Options:
// Integer value indicating the default HPACK buffer size in bytes
// User preference:
user_pref("network.http.http2.default-hpack-buffer", 65536);

// Enables HPACK dump for HTTP/2 connections
// Controls whether to enable the dumping of HPACK headers for 
// debugging purposes, allowing developers to analyze header 
// compression and decompression behavior in HTTP/2.
// Options:
// true = Enable HPACK dumping
// false = Disable HPACK dumping
// User preference:
user_pref("network.http.http2.enable-hpack-dump", false);

// Enables HTTP/2 protocol support
// Controls whether the HTTP/2 protocol is enabled, allowing for 
// enhanced performance and reduced latency in web communication 
// through multiplexing and header compression.
// Options:
// true = Enable HTTP/2 support
// false = Disable HTTP/2 support
// User preference:
user_pref("network.http.http2.enabled", true);

// Enables dependencies for HTTP/2 protocol
// Controls whether dependencies related to HTTP/2 protocol are enabled, 
// which can affect compatibility and feature availability for connections.
// Options:
// true = Enable HTTP/2 dependencies
// false = Disable HTTP/2 dependencies
// User preference:
user_pref("network.http.http2.enabled.deps", false);

// Enforces TLS profile for HTTP/2 connections
// Configures whether to enforce a specific TLS profile for 
// HTTP/2 connections, improving security by ensuring 
// strong cryptographic practices are followed.
// Options:
// true = Enforce TLS profile
// false = Do not enforce TLS profile
// User preference:
user_pref("network.http.http2.enforce-tls-profile", true);

// Moves connections to the pending list after a network change
// Controls whether HTTP/2 connections should be moved to a 
// pending list when a network change is detected, allowing 
// for smoother transitions and reconnections.
// Options:
// true = Move to pending list after network change
// false = Do not move to pending list after network change
// User preference:
user_pref("network.http.http2.move_to_pending_list_after_network_change", true);

// Sets the ping threshold for HTTP/2 connections
// Configures the threshold value for pings in HTTP/2 connections, 
// which can affect connection health checks and timeout behaviors.
// Options:
// Integer value indicating the ping threshold
// User preference:
user_pref("network.http.http2.ping-threshold", 58);

// Sets the timeout duration for HTTP/2 pings
// Configures the timeout duration (in seconds) for HTTP/2 
// ping responses, influencing connection maintenance and 
// performance in scenarios with delayed acknowledgments.
// Options:
// Integer value indicating the ping timeout in seconds
// User preference:
user_pref("network.http.http2.ping-timeout", 8);

// Sets the pull allowance for HTTP/2 connections
// Configures the amount of data (in bytes) that can be pulled 
// in a single HTTP/2 stream, impacting the flow control and 
// resource management within connections.
// Options:
// Integer value indicating the pull allowance in bytes
// User preference:
user_pref("network.http.http2.pull-allowance", 12582912);

// Sets the push allowance for HTTP/2 connections
// Configures the amount of data (in bytes) that can be pushed 
// to a client in a single HTTP/2 stream, impacting the efficiency 
// of server push functionality for preloading resources.
// Options:
// Integer value indicating the push allowance in bytes
// User preference:
user_pref("network.http.http2.push-allowance", 131072);

// Enables priority updates for HTTP/2 server push
// Controls whether priority updates are allowed for server push 
// responses in HTTP/2, affecting how pushed resources are managed 
// based on their importance.
// Options:
// true = Enable priority updates for server push
// false = Disable priority updates for server push
// User preference:
user_pref("network.http.http2.push_priority_update", false);

// Sets the send buffer size for HTTP/2 connections
// Configures the size of the buffer used for sending data over 
// HTTP/2 connections, which can impact performance and latency 
// for data transmission.
// Options:
// Integer value indicating the send buffer size in bytes (0 = default)
// User preference:
user_pref("network.http.http2.send-buffer-size", 0);

// Enables maximum concurrent frames for HTTP/2 server push
// Controls whether the maximum number of concurrent frames 
// for server push responses is limited, affecting the 
// efficiency of resource delivery to clients.
// Options:
// true = Enable limit on maximum concurrent frames
// false = Disable limit on maximum concurrent frames
// User preference:
user_pref("network.http.http2.send-push-max-concurrent-frame", false);

// Enables sending of NO_RFC7540_PRI for HTTP/2 connections
// Controls whether to send the NO_RFC7540_PRI header in HTTP/2 
// connections, affecting compatibility with various clients and 
// potential push resource prioritization.
// Options:
// true = Send NO_RFC7540_PRI header
// false = Do not send NO_RFC7540_PRI header
// User preference:
user_pref("network.http.http2.send_NO_RFC7540_PRI", true);

// Sets the timeout duration for HTTP/2 connections
// Configures the duration (in seconds) before an HTTP/2 
// connection is considered timed out, influencing connection 
// stability and responsiveness.
// Options:
// Integer value indicating the timeout duration in seconds
// User preference:
user_pref("network.http.http2.timeout", 170);

// Enables WebSockets support for HTTP/2
// Controls whether WebSockets are supported over HTTP/2 connections, 
// allowing for full-duplex communication channels over a single 
// connection, enhancing performance for certain applications.
// Options:
// true = Enable WebSockets support for HTTP/2
// false = Disable WebSockets support for HTTP/2
// User preference:
user_pref("network.http.http2.websockets", true);

// Sets the alt-svc mapping for testing in HTTP/3
// Configures the alternate service (alt-svc) mapping for HTTP/3, 
// which can be used for testing purposes to determine connection 
// fallbacks or enhancements during development.
// Options:
// String value indicating the alt-svc mapping
// User preference:
user_pref("network.http.http3.alt-svc-mapping-for-testing", "");

// Sets the backup timer delay for HTTP/3 connections
// Configures the delay (in milliseconds) for the backup timer in 
// HTTP/3 connections, which can affect the timing of connection 
// establishment and fallback mechanisms.
// Options:
// Integer value indicating the backup timer delay in milliseconds
// User preference:
user_pref("network.http.http3.backup_timer_delay", 100);

// Blocks loopback IPv6 addresses for HTTP/3 connections
// Controls whether loopback IPv6 addresses are blocked for 
// HTTP/3 connections, potentially affecting connectivity for 
// local services using IPv6.
// Options:
// true = Block loopback IPv6 addresses
// false = Allow loopback IPv6 addresses
// User preference:
user_pref("network.http.http3.block_loopback_ipv6_addr", false);

// Sets the congestion control algorithm for HTTP/3 connections
// Configures the congestion control algorithm used for 
// HTTP/3 connections, affecting how data is transmitted over 
// the network and optimizing for various conditions.
// Options:
// Integer value indicating the congestion control algorithm (1 = default)
// User preference:
user_pref("network.http.http3.cc_algorithm", 1);

// Sets the default maximum stream blocked for HTTP/3 connections
// Configures the maximum number of streams that can be blocked 
// in HTTP/3 connections before the server takes action, impacting 
// flow control and resource management.
// Options:
// Integer value indicating the default maximum stream blocked
// User preference:
user_pref("network.http.http3.default-max-stream-blocked", 20);

// Sets the default QPACK table size for HTTP/3 connections
// Configures the size (in bytes) of the QPACK compression table 
// used in HTTP/3, which affects how effectively headers can be 
// compressed and transmitted, potentially optimizing performance.
// Options:
// Integer value indicating the default QPACK table size in bytes
// User preference:
user_pref("network.http.http3.default-qpack-table-size", 65536);

// Disables HTTP/3 when third-party roots are found
// Controls whether HTTP/3 connections are disabled if third-party 
// root certificates are detected, which may be a security measure 
// to prevent potential vulnerabilities.
// Options:
// true = Disable HTTP/3 if third-party roots are found
// false = Allow HTTP/3 even if third-party roots are present
// User preference:
user_pref("network.http.http3.disable_when_third_party_roots_found", false);

// Enables Explicit Congestion Notification (ECN) for HTTP/3 connections
// Controls whether Explicit Congestion Notification is enabled 
// for HTTP/3, which can help optimize network performance by 
// signaling congestion without dropping packets.
// Options:
// true = Enable ECN for HTTP/3
// false = Disable ECN for HTTP/3
// User preference:
user_pref("network.http.http3.ecn", false);

// Enables HTTP/3 support
// Controls whether HTTP/3 protocol is enabled, allowing the browser 
// to use this newer protocol for enhanced performance and security.
// Options:
// true = Enable HTTP/3 support
// false = Disable HTTP/3 support
// User preference:
user_pref("network.http.http3.enable", true);

// Enables 0-RTT for HTTP/3 connections
// Controls whether 0-RTT (zero round-trip time) is enabled for 
// HTTP/3 connections, which can improve performance by allowing 
// immediate data transmission before the handshake is complete.
// Options:
// true = Enable 0-RTT for HTTP/3
// false = Disable 0-RTT for HTTP/3
// User preference:
user_pref("network.http.http3.enable_0rtt", true);

// Enables Kyber post-quantum cryptography for HTTP/3
// Controls whether Kyber, a post-quantum key encapsulation mechanism, 
// is enabled for HTTP/3 connections, potentially enhancing security 
// against quantum computing threats.
// Options:
// true = Enable Kyber for HTTP/3
// false = Disable Kyber for HTTP/3
// User preference:
user_pref("network.http.http3.enable_kyber", false);

// Enables QLOG for HTTP/3 connections
// Controls whether QLOG (an experimental logging format for QUIC) 
// is enabled for HTTP/3 connections, which can assist in debugging 
// and analyzing performance issues.
// Options:
// true = Enable QLOG for HTTP/3
// false = Disable QLOG for HTTP/3
// User preference:
user_pref("network.http.http3.enable_qlog", false);

// Indicates if third-party roots were found during automation
// This preference tracks whether third-party root certificates 
// were detected during automated processes, which could affect 
// security considerations.
// Options:
// true = Third-party roots found in automation
// false = No third-party roots found in automation
// User preference:
user_pref("network.http.http3.has_third_party_roots_found_in_automation", false);

// Sets the maximum accumulated time for HTTP/3 connections
// Configures the maximum time (in milliseconds) that can be 
// accumulated for HTTP/3 connections, potentially influencing 
// performance thresholds.
// Options:
// Integer value indicating the maximum accumulated time in milliseconds
// User preference:
user_pref("network.http.http3.max_accumlated_time_ms", 1);

// Sets the maximum amount of data for HTTP/3 connections
// Configures the maximum amount of data (in bytes) that can be 
// sent over HTTP/3 connections, which may affect throughput 
// and performance.
// Options:
// Integer value indicating the maximum data size in bytes
// User preference:
user_pref("network.http.http3.max_data", 25165824);

// Sets the maximum stream data size for HTTP/3 connections
// Configures the maximum amount of data (in bytes) that can be 
// sent in a single stream for HTTP/3, impacting the efficiency 
// of data transmission across multiple streams.
// Options:
// Integer value indicating the maximum stream data size in bytes
// User preference:
user_pref("network.http.http3.max_stream_data", 12582912);

// Sets the limit on parallel fallback connections for HTTP/3
// Configures the maximum number of parallel fallback connections 
// that can be established for HTTP/3, which may influence 
// connection reliability and performance during fallback scenarios.
// Options:
// Integer value indicating the parallel fallback connection limit
// User preference:
user_pref("network.http.http3.parallel_fallback_conn_limit", 32);

// Enables HTTP/3 priority handling
// Controls whether HTTP/3 priority settings are enabled, which can influence
// how resources are prioritized and transmitted over HTTP/3 connections.
// Options:
// true = Enable priority handling for HTTP/3
// false = Disable priority handling for HTTP/3
// User preference:
user_pref("network.http.http3.priority", true);

// Sets the receive buffer size for HTTP/3 connections
// Configures the size (in bytes) of the receive buffer used for 
// HTTP/3 connections, which can impact the efficiency of data 
// transmission and handling of incoming data streams.
// Options:
// Integer value indicating the receive buffer size in bytes
// User preference:
user_pref("network.http.http3.recvBufferSize", 1048576);

// Allows retrying HTTP/3 connections with a different IP family
// Controls whether HTTP/3 connections are retried using a different
// IP family (IPv4 or IPv6) if the initial connection fails, 
// potentially improving connectivity options.
// Options:
// true = Retry HTTP/3 connections with a different IP family
// false = Do not retry with a different IP family
// User preference:
user_pref("network.http.http3.retry_different_ip_family", false);

// Controls prioritization of background tabs for HTTP/3 connections
// When set to "false," HTTP/3 connections initiated from background 
// tabs will not be deprioritized, potentially improving loading 
// times for resources from inactive tabs.
// Options:
// true = Deprioritize background tabs for HTTP/3 connections
// false = Do not deprioritize background tabs for HTTP/3 connections
// User preference:
user_pref("network.http.http3.send_background_tabs_deprioritization", false);

// Supports HTTP/3 version 1
// Controls whether support for version 1 of HTTP/3 is enabled, 
// allowing the browser to utilize the features and optimizations 
// associated with this version.
// Options:
// true = Enable support for HTTP/3 version 1
// false = Disable support for HTTP/3 version 1
// User preference:
user_pref("network.http.http3.support_version1", true);

// Uses NSPR for I/O operations in HTTP/3
// Controls whether the Netscape Portable Runtime (NSPR) is used 
// for input/output operations in HTTP/3, potentially impacting 
// performance and compatibility with certain I/O operations.
// Options:
// true = Use NSPR for I/O in HTTP/3
// false = Do not use NSPR for I/O in HTTP/3
// User preference:
user_pref("network.http.http3.use_nspr_for_io", true);

// Enables version negotiation for HTTP/3
// Controls whether version negotiation for HTTP/3 is enabled, 
// allowing the client and server to agree on the HTTP/3 version 
// to be used during communication.
// Options:
// true = Enable version negotiation for HTTP/3
// false = Disable version negotiation for HTTP/3
// User preference:
user_pref("network.http.http3.version_negotiation.enabled", false);

// Sets the timeout for HTTP keep-alive connections
// Configures the time (in seconds) that HTTP keep-alive connections 
// remain open before being closed, which can influence the performance 
// of persistent connections.
// Options:
// Integer value indicating the keep-alive timeout in seconds
// User preference:
user_pref("network.http.keep-alive.timeout", 115);

// Sets the large keep-alive factor for HTTP connections
// Configures the factor by which to increase the maximum number of 
// keep-alive connections for large responses, which can optimize 
// resource utilization in certain scenarios.
// Options:
// Integer value indicating the large keep-alive factor
// User preference:
user_pref("network.http.largeKeepaliveFactor", 20);

// Sets the maximum number of HTTP connections
// Configures the maximum number of simultaneous HTTP connections 
// that can be opened by the browser, potentially affecting overall 
// performance and resource usage.
// Options:
// Integer value indicating the maximum number of connections
// User preference:
user_pref("network.http.max-connections", 900);

// Sets the maximum number of persistent connections per proxy
// Configures the maximum number of persistent connections that can 
// be maintained to a single proxy server, influencing how many 
// simultaneous requests can be sent through that proxy.
// Options:
// Integer value indicating the maximum persistent connections per proxy
// User preference:
user_pref("network.http.max-persistent-connections-per-proxy", 32);

// Sets the maximum number of persistent connections per server
// Configures the maximum number of persistent connections that can 
// be maintained to a single server, which can impact how resources 
// are loaded and served.
// Options:
// Integer value indicating the maximum persistent connections per server
// User preference:
user_pref("network.http.max-persistent-connections-per-server", 6);

// Sets the maximum number of excessive urgent start connections per host
// Configures the maximum number of connections that can be started 
// urgently (out of the normal request queue) to a single host. 
// This setting helps manage resource allocation and can influence 
// how requests are prioritized and handled.
// Options:
// Integer value indicating the maximum urgent start connections per host
// User preference:
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 3);

// Sets the maximum response header size
// Configures the maximum size (in bytes) for response headers 
// that the browser can accept. This can help prevent issues 
// with excessively large headers that may impact performance.
// Options:
// Integer value indicating the maximum response header size in bytes
// User preference:
user_pref("network.http.max_response_header_size", 393216);

// Enables Microsoft Entra SSO container for authentication
// Controls whether the Microsoft Entra Single Sign-On (SSO) container 
// is enabled for handling authentication processes.
// Options:
// true = Enable the Microsoft Entra SSO container
// false = Disable the Microsoft Entra SSO container
// User preference:
user_pref("network.http.microsoft-entra-sso.container-enabled.0", true);

// Enables Microsoft Entra SSO functionality
// Controls whether Microsoft Entra SSO functionality is enabled, 
// allowing for seamless authentication across services that support it.
// Options:
// true = Enable Microsoft Entra SSO
// false = Disable Microsoft Entra SSO
// User preference:
user_pref("network.http.microsoft-entra-sso.enabled", false);

// Sets the timeout for network change events
// Configures the time (in seconds) to wait before considering 
// a network change event to be completed. This can affect how 
// quickly the browser adapts to network changes.
// Options:
// Integer value indicating the network change timeout in seconds
// User preference:
user_pref("network.http.network-changed.timeout", 5);

// Enables network access on socket process
// Controls whether network access is allowed in the socket process, 
// which can influence how connections and requests are managed.
// Options:
// true = Enable network access on socket process
// false = Disable network access on socket process
// User preference:
user_pref("network.http.network_access_on_socket_process.enabled", false);

// Enables network error logging
// Controls whether network error logging is enabled, which can 
// help diagnose connectivity issues by logging relevant errors.
// Options:
// true = Enable network error logging
// false = Disable network error logging
// User preference:
user_pref("network.http.network_error_logging.enabled", false);

// Sets the priority for on-click network requests
// Controls whether requests triggered by user clicks are given 
// priority over other requests, potentially improving responsiveness 
// for user interactions.
// Options:
// true = Enable priority for on-click requests
// false = Disable priority for on-click requests
// User preference:
user_pref("network.http.on_click_priority", true);

// Controls origin redirect for tainted requests
// Determines whether to allow redirects for "tainted" requests, 
// which are requests that have been affected by cross-origin policies.
// Options:
// true = Allow redirects for tainted requests
// false = Block redirects for tainted requests
// User preference:
user_pref("network.http.origin.redirectTainted", true);

// Sets the burst size for pacing HTTP requests
// Configures the number of requests that can be sent in a burst 
// to the server, which can help manage server load and improve 
// overall performance.
// Options:
// Integer value indicating the burst size for requests
// User preference:
user_pref("network.http.pacing.requests.burst", 10);

// Enables pacing for HTTP requests
// Controls whether pacing is applied to HTTP requests, which can 
// help manage the flow of outgoing requests and prevent overwhelming 
// the server.
// Options:
// true = Enable pacing for HTTP requests
// false = Disable pacing for HTTP requests
// User preference:
user_pref("network.http.pacing.requests.enabled", true);

// Sets the frequency of pacing for HTTP requests
// Configures the frequency (in requests per second) at which 
// requests can be sent to the server, helping to balance load 
// and performance.
// Options:
// Integer value indicating the requests per second for pacing
// User preference:
user_pref("network.http.pacing.requests.hz", 80);

// Sets minimum parallelism for pacing HTTP requests
// Defines the minimum number of parallel connections to maintain 
// when pacing HTTP requests, ensuring a certain level of concurrency 
// to optimize loading times.
// Options:
// Integer value specifying minimum parallel connections
// User preference:
user_pref("network.http.pacing.requests.min-parallelism", 6);

// Enables HTTP priority headers
// Controls whether HTTP/2 and HTTP/3 requests include the `priority` 
// header, which allows servers to prioritize requests more effectively.
// Options:
// true = Enable priority header
// false = Disable priority header
// User preference:
user_pref("network.http.priority_header.enabled", true);

// Controls prompts for temporary redirects
// Determines whether users are prompted when encountering temporary redirects, 
// which may provide transparency but interrupt the browsing experience.
// Options:
// true = Prompt for temporary redirects
// false = Do not prompt for temporary redirects
// User preference:
user_pref("network.http.prompt-temp-redirect", false);

// Enables conservative proxy behavior
// Controls whether the browser respects conservative proxy settings, 
// which may limit aggressive request handling to avoid overloading 
// proxy servers.
// Options:
// true = Respect conservative proxy settings
// false = Do not respect conservative proxy settings
// User preference:
user_pref("network.http.proxy.respect-be-conservative", true);

// Sets HTTP proxy version
// Specifies the version of HTTP protocol to use when communicating with proxies.
// Options:
// "1.1" = Use HTTP/1.1 for proxy communication
// "2.0" = Use HTTP/2 for proxy communication
// User preference:
user_pref("network.http.proxy.version", "1.1");

// Sets the Quality of Service (QoS) level for HTTP requests
// Configures the QoS level, which can affect the priority 
// of packets on the network, potentially improving performance 
// under network congestion.
// Options:
// Integer value representing the QoS level (0-63)
// User preference:
user_pref("network.http.qos", 0);

// Sets the normal threshold for RCWN cache queue
// Configures the threshold for requests that RCWN (Race Cache With Network) 
// will treat as "normal" priority in the cache queue, helping manage 
// request prioritization.
// Options:
// Integer value for the normal threshold
// User preference:
user_pref("network.http.rcwn.cache_queue_normal_threshold", 8);

// Sets the priority threshold for RCWN cache queue
// Configures the threshold for requests that RCWN will treat as 
// high priority in the cache queue, optimizing resource usage 
// for important requests.
// Options:
// Integer value for the priority threshold
// User preference:
user_pref("network.http.rcwn.cache_queue_priority_threshold", 2);

// Enables RCWN (Race Cache With Network)
// Controls whether RCWN is enabled, allowing the browser to race 
// cache and network resources, which can improve load times 
// for frequently accessed resources.
// Options:
// true = Enable RCWN
// false = Disable RCWN
// User preference:
user_pref("network.http.rcwn.enabled", true);

// Sets maximum wait time before racing in RCWN
// Configures the maximum time (in milliseconds) the browser will 
// wait before allowing RCWN to race a cache request with a 
// network request, improving responsiveness for cached resources.
// Options:
// Integer value for maximum wait in milliseconds
// User preference:
user_pref("network.http.rcwn.max_wait_before_racing_ms", 500);

// Sets minimum wait time before racing in RCWN
// Configures the minimum time (in milliseconds) before RCWN will 
// begin racing cache and network requests, allowing some delay 
// to utilize cached data before using network resources.
// Options:
// Integer value for minimum wait in milliseconds
// User preference:
user_pref("network.http.rcwn.min_wait_before_racing_ms", 0);

// Defines small resource size threshold for RCWN
// Sets the threshold size (in kilobytes) for resources considered 
// "small" by RCWN, allowing these to be prioritized for cache 
// access over larger resources.
// Options:
// Integer value indicating the threshold size in KB
// User preference:
user_pref("network.http.rcwn.small_resource_size_kb", 256);

// Sets the maximum number of HTTP redirects allowed in a chain
// Defines how many redirects are permitted before the browser stops
// following additional redirects. Prevents excessive redirects that 
// could lead to infinite loops or resource exhaustion.
// Options:
// Integer value representing the redirect limit
// User preference:
user_pref("network.http.redirection-limit", 20);

// Configures the `Referer` header policy across different origins
// Controls whether the `Referer` header is included in requests made to
// different origins, enhancing privacy by limiting the referrer information.
// Options:
// 0 = Send `Referer` header with all requests
// 1 = Send `Referer` header only for same-origin requests
// 2 = Send `Referer` header only if both origins share the same base domain
// User preference:
user_pref("network.http.referer.XOriginPolicy", 0);

// Configures trimming of the `Referer` header when sent across origins
// Determines how much information is sent in the `Referer` header for requests
// to different origins, balancing privacy and debugging needs.
// Options:
// 0 = Send full URL in the `Referer` header
// 1 = Trim to origin (scheme, host, and port)
// 2 = Send only scheme and host in the `Referer` header
// User preference:
user_pref("network.http.referer.XOriginTrimmingPolicy", 0);

// Sets the default `Referer` policy for non-tracking requests
// Specifies the level of detail sent in the `Referer` header by default for
// non-tracking content, with stricter policies enhancing privacy.
// Options:
// 0 = Send full URL
// 1 = Trim to origin only
// 2 = Send only scheme and host
// User preference:
user_pref("network.http.referer.defaultPolicy", 2);

// Sets the `Referer` policy for private browsing mode
// Adjusts the default `Referer` header policy for private browsing mode, providing
// a stricter level of privacy for incognito sessions.
// Options:
// 0 = Send full URL
// 1 = Trim to origin only
// 2 = Send only scheme and host
// User preference:
user_pref("network.http.referer.defaultPolicy.pbmode", 2);

// Configures the default `Referer` policy for tracker requests
// Sets a stricter `Referer` policy for content identified as tracking,
// enhancing privacy by limiting the `Referer` header details shared with trackers.
// Options:
// 0 = Send full URL
// 1 = Trim to origin only
// 2 = Send only scheme and host
// User preference:
user_pref("network.http.referer.defaultPolicy.trackers", 2);

// Configures the `Referer` policy for trackers in private browsing mode
// Similar to `defaultPolicy.trackers`, but specifically for private browsing mode,
// this setting limits `Referer` details for trackers in incognito sessions.
// Options:
// 0 = Send full URL
// 1 = Trim to origin only
// 2 = Send only scheme and host
// User preference:
user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 2);

// Disallows relaxed `Referer` policy for cross-site requests by default
// Prevents the `Referer` header from being relaxed for cross-site requests,
// improving privacy by maintaining stricter referrer policies across different origins.
// Options:
// true = Disallow relaxed referrer policy
// false = Allow relaxed referrer policy
// User preference:
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);

// Controls relaxed `Referer` policy for cross-site requests in private browsing
// Ensures stricter `Referer` settings in private browsing, disallowing relaxation
// of referrer details in cross-origin requests for enhanced privacy.
// Options:
// true = Disallow relaxed referrer policy in private mode
// false = Allow relaxed referrer policy in private mode
// User preference:
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode", true);

// Controls relaxed `Referer` policy for top-level cross-site navigation in private browsing
// Enforces stricter `Referer` policies for top-level navigation across origins in private mode,
// which can help prevent information leakage between sites.
// Options:
// true = Disallow relaxed referrer policy for top navigation in private mode
// false = Allow relaxed referrer policy for top navigation in private mode
// User preference:
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation", true);

// Controls relaxed `Referer` policy for top-level cross-site navigation
// Regulates the `Referer` header details for cross-origin top-level navigation,
// affecting how much information is passed between sites.
// Options:
// true = Disallow relaxed referrer policy for top navigation
// false = Allow relaxed referrer policy for top navigation
// User preference:
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", false);

// Hides `.onion` source information in the `Referer` header for privacy
// Prevents revealing `.onion` source domains in the `Referer` header,
// protecting users accessing sites via the Tor network or similar systems.
// Options:
// true = Hide `.onion` source in `Referer` header
// false = Show `.onion` source in `Referer` header
// User preference:
user_pref("network.http.referer.hideOnionSource", true);

// Sets the maximum length for the `Referer` header
// Limits the size of the `Referer` header to avoid sending excessively long URLs,
// which can improve performance and reduce data leakage risks.
// Options:
// Integer value representing the maximum length in characters
// User preference:
user_pref("network.http.referer.referrerLengthLimit", 4096);

// Spoofs the source of the `Referer` header
// Controls whether the `Referer` header source is modified to show a different URL,
// enhancing privacy but potentially causing issues with sites requiring the actual referrer.
// Options:
// true = Spoof the `Referer` header source
// false = Send the actual `Referer` header source
// User preference:
user_pref("network.http.referer.spoofSource", false);

// Determines the level of trimming for the `Referer` header
// Configures how much detail to include in the `Referer` header, affecting privacy and compatibility.
// Options:
// 0 = Send full URL
// 1 = Trim to origin only (scheme, host, and port)
// 2 = Send only scheme and host
// User preference:
user_pref("network.http.referer.trimmingPolicy", 0);

// Removes the session resumption token on early data failure
// Ensures the session token is invalidated if early data (0-RTT) fails, improving security
// by preventing reuse of the token after a failure.
// Options:
// true = Remove token on early data failure
// false = Retain token on early data failure
// User preference:
user_pref("network.http.remove_resumption_token_when_early_data_failed", true);

// Prioritizes rendering-critical HTTP requests
// Allows prioritization of requests critical for rendering the page, improving load times for visible content.
// Options:
// true = Enable rendering-critical request prioritization
// false = Disable rendering-critical request prioritization
// User preference:
user_pref("network.http.rendering-critical-requests-prioritization", true);

// Sets the maximum number of attempts for a single HTTP request
// Limits the number of retries for a request to prevent excessive load on servers and reduce wait time.
// Options:
// Integer value representing the maximum retry attempts
// User preference:
user_pref("network.http.request.max-attempts", 10);

// Sets the maximum delay before an HTTP request starts
// Limits the wait time before initiating an HTTP request, which can improve perceived responsiveness.
// Options:
// Integer value in seconds for the maximum delay
// User preference:
user_pref("network.http.request.max-start-delay", 10);

// Sets the timeout for HTTP responses
// Defines the maximum time (in seconds) to wait for a response from a server before aborting the request.
// Options:
// Integer value in seconds representing the timeout duration
// User preference:
user_pref("network.http.response.timeout", 300);

// Sanitizes headers in logs to protect sensitive information
// Prevents sensitive header data from being logged, enhancing security and privacy.
// Options:
// true = Sanitize headers in logs
// false = Do not sanitize headers in logs
// User preference:
user_pref("network.http.sanitize-headers-in-logs", true);

// Configures the `Origin` header for cross-origin requests
// Controls when the `Origin` header is sent, which can improve privacy by not revealing unnecessary origin data.
// Options:
// 0 = Never send `Origin` header
// 1 = Send `Origin` header for cross-origin requests only
// 2 = Send `Origin` header for same-origin and cross-origin requests
// User preference:
user_pref("network.http.sendOriginHeader", 2);

// Configures when the `Referer` header is sent
// Controls the inclusion of the `Referer` header in requests, balancing privacy with site compatibility.
// Options:
// 0 = Never send `Referer` header
// 1 = Send `Referer` header for cross-origin requests only
// 2 = Send `Referer` header for same-origin and cross-origin requests
// User preference:
user_pref("network.http.sendRefererHeader", 2);

// Sets the window size for sending HTTP data
// Determines the size of the send window, optimizing how much data is sent before waiting for acknowledgment.
// Options:
// Integer value in bytes for the send window size
// User preference:
user_pref("network.http.send_window_size", 1024);

// Sets the limit for speculative parallel connections
// Defines the maximum number of speculative connections that can be opened in parallel,
// which may speed up connection setup for resources likely to be requested.
// Options:
// Integer value representing the limit of speculative connections
// User preference:
user_pref("network.http.speculative-parallel-limit", 20);

// Enables stale-while-revalidate caching
// Allows the use of stale cached responses while revalidating in the background,
// improving perceived performance when loading cached resources.
// Options:
// true = Enable stale-while-revalidate caching
// false = Disable stale-while-revalidate caching
// User preference:
user_pref("network.http.stale_while_revalidate.enabled", true);

// Sets the maximum delay for HTTP request tailing
// Limits the maximum delay for tailing HTTP requests, which helps manage network congestion
// and improves the load order of critical resources.
// Options:
// Integer value in milliseconds representing the maximum delay
// User preference:
user_pref("network.http.tailing.delay-max", 6000);

// Sets the incremental delay for tailing requests
// Configures the delay increment used for each request in the tailing queue,
// balancing network usage and resource prioritization.
// Options:
// Integer value in milliseconds representing the incremental delay
// User preference:
user_pref("network.http.tailing.delay-quantum", 600);

// Sets the delay for tailing requests after `DOMContentLoaded`
// Specifies a shorter delay for requests tailing after the `DOMContentLoaded` event,
// allowing background requests to continue without blocking visible content.
// Options:
// Integer value in milliseconds representing the delay
// User preference:
user_pref("network.http.tailing.delay-quantum-after-domcontentloaded", 100);

// Enables HTTP request tailing
// Allows tailing of lower-priority HTTP requests to manage network load efficiently.
// Options:
// true = Enable HTTP request tailing
// false = Disable HTTP request tailing
// User preference:
user_pref("network.http.tailing.enabled", true);

// Sets the total maximum delay for all tailing requests
// Configures the cumulative delay threshold for all requests in the tailing queue,
// helping to balance network efficiency and responsiveness.
// Options:
// Integer value in milliseconds representing the total maximum delay
// User preference:
user_pref("network.http.tailing.total-max", 45000);

// Sets the urgency level for HTTP request tailing
// Defines the priority level for tailing requests to help prioritize critical resources over lower-priority ones.
// Options:
// Integer value representing urgency level (higher values indicate higher priority)
// User preference:
user_pref("network.http.tailing.urgency", 6);

// Enables TCP keep-alive for long-lived HTTP connections
// Maintains long-lived connections by sending periodic keep-alive signals,
// which can improve connection reliability and prevent timeouts.
// Options:
// true = Enable TCP keep-alive for long-lived connections
// false = Disable TCP keep-alive for long-lived connections
// User preference:
user_pref("network.http.tcp_keepalive.long_lived_connections", true);

// Sets idle time for TCP keep-alive on long-lived connections
// Specifies the duration of inactivity (in seconds) before sending a keep-alive packet
// for long-lived connections, helping prevent server-side timeouts.
// Options:
// Integer value in seconds representing idle time
// User preference:
user_pref("network.http.tcp_keepalive.long_lived_idle_time", 600);

// Enables TCP keep-alive for short-lived HTTP connections
// Keeps short-lived connections alive by sending periodic keep-alive signals,
// improving reliability during brief idle periods.
// Options:
// true = Enable TCP keep-alive for short-lived connections
// false = Disable TCP keep-alive for short-lived connections
// User preference:
user_pref("network.http.tcp_keepalive.short_lived_connections", true);

// Sets idle time for TCP keep-alive on short-lived connections
// Specifies the idle duration (in seconds) before sending a keep-alive packet
// for short-lived connections, helping reduce unnecessary reconnections.
// Options:
// Integer value in seconds representing idle time
// User preference:
user_pref("network.http.tcp_keepalive.short_lived_idle_time", 10);

// Sets idle time before TCP keep-alive for short-lived connections
// Defines the time (in seconds) that a short-lived connection should remain idle
// before initiating keep-alive to maintain connection stability.
// Options:
// Integer value in seconds representing idle time for short-lived connections
// User preference:
user_pref("network.http.tcp_keepalive.short_lived_time", 60);

// Enables HTTP request throttling
// Controls whether throttling of HTTP requests is active to manage bandwidth
// and reduce network congestion, especially for background tasks.
// Options:
// true = Enable HTTP throttling
// false = Disable HTTP throttling
// User preference:
user_pref("network.http.throttle.enable", false);

// Sets hold time for HTTP throttling
// Specifies the time (in milliseconds) during which a request is held back as part of throttling,
// allowing critical tasks to take precedence on the network.
// Options:
// Integer value in milliseconds representing hold time
// User preference:
user_pref("network.http.throttle.hold-time-ms", 800);

// Sets maximum duration for HTTP throttling
// Defines the upper limit (in milliseconds) for how long a request can be delayed due to throttling,
// balancing responsiveness with network management.
// Options:
// Integer value in milliseconds representing maximum throttle time
// User preference:
user_pref("network.http.throttle.max-time-ms", 500);

// Sets read interval for throttled HTTP requests
// Controls the interval (in milliseconds) at which throttled requests are allowed to read data,
// maintaining network efficiency while reducing congestion.
// Options:
// Integer value in milliseconds for read interval
// User preference:
user_pref("network.http.throttle.read-interval-ms", 500);

// Sets read limit for throttled HTTP requests
// Defines the maximum number of bytes that throttled requests can read at each interval,
// managing bandwidth while allowing steady data flow for background processes.
// Options:
// Integer value in bytes representing the read limit
// User preference:
user_pref("network.http.throttle.read-limit-bytes", 8000);

// Sets duration for resuming throttled HTTP requests
// Specifies the time (in milliseconds) for which a throttled request is temporarily resumed
// to allow it to catch up before being suspended again.
// Options:
// Integer value in milliseconds representing resume time
// User preference:
user_pref("network.http.throttle.resume-for", 100);

// Sets suspend time for throttled HTTP requests
// Configures the time (in milliseconds) a throttled request is suspended to reduce network load
// before resuming, helping manage congestion without blocking critical traffic.
// Options:
// Integer value in milliseconds representing suspend time
// User preference:
user_pref("network.http.throttle.suspend-for", 900);

// Sets HTTP throttling version
// Specifies the version of the HTTP throttling implementation in use,
// allowing for potential updates or changes in throttling strategy.
// Options:
// Integer value representing the version
// User preference:
user_pref("network.http.throttle.version", 1);

// Sets the TLS handshake timeout for HTTP connections
// Defines the maximum time (in seconds) allowed for the TLS handshake process,
// ensuring quick fallback if the handshake cannot be completed.
// Options:
// Integer value in seconds representing the timeout
// User preference:
user_pref("network.http.tls-handshake-timeout", 30);

// Specifies the HTTP protocol version
// Sets the default HTTP version for requests, commonly used are 1.1 and 2,
// with 1.1 typically being the fallback or standard for older servers.
// Options:
// String value representing the HTTP version ("1.1" or "2")
// User preference:
user_pref("network.http.version", "1.1");

// Enables Windows SSO (Single Sign-On) support for HTTP in container environments
// Allows automatic authentication with Windows accounts in containerized environments,
// simplifying access control in managed network setups.
// Options:
// true = Enable Windows SSO in containers
// false = Disable Windows SSO in containers
// User preference:
user_pref("network.http.windows-sso.container-enabled.0", true);

// Enables Windows SSO for HTTP requests
// Controls the integration of Windows Single Sign-On (SSO) for HTTP requests,
// providing seamless authentication using Windows credentials.
// Options:
// true = Enable Windows SSO
// false = Disable Windows SSO
// User preference:
user_pref("network.http.windows-sso.enabled", false);

// Defines allowed schemes for HTTP index format
// Restricts the acceptable URL schemes for HTTP index format,
// enhancing security by only allowing specific schemes.
// Options:
// Comma-separated list of schemes (e.g., "file,moz-gio")
// User preference:
user_pref("network.http_index_format.allowed_schemes", "file,moz-gio");

// Enforces Punycode for Cyrillic domain names
// Uses Punycode encoding for Cyrillic domain names to prevent phishing by
// avoiding visually similar characters that could be used maliciously.
// Options:
// true = Encode Cyrillic domains in Punycode
// false = Display Cyrillic domains in their native form
// User preference:
user_pref("network.idn.punycode_cyrillic_confusables", true);

// Sets maximum available size for JAR files
// Limits the maximum size (in bytes) for JAR files that can be loaded,
// managing resource usage and preventing excessive memory consumption.
// Options:
// Integer value in bytes representing maximum size
// User preference:
user_pref("network.jar.max_available_size", 268435456);

// Sets maximum entry size within JAR files
// Limits the maximum size (in bytes) of individual entries in JAR files,
// controlling resource usage for large files.
// Options:
// Integer value in bytes representing maximum entry size
// User preference:
user_pref("network.jar.max_entry_size", 268435456);

// Enables recording of failure reasons for JAR files
// Logs the reasons for any JAR file loading failures, aiding in diagnostics and troubleshooting.
// Options:
// true = Record failure reasons
// false = Do not record failure reasons
// User preference:
user_pref("network.jar.record_failure_reason", false);

// Manages offline status automatically
// Allows the system to automatically set the offline status based on network availability,
// streamlining connectivity management.
// Options:
// true = Enable automatic offline status management
// false = Disable automatic offline status management
// User preference:
user_pref("network.manage-offline-status", true);

// Sets max failure count for socket processes
// Limits the number of failed socket process attempts before flagging an error,
// optimizing network stability by capping retries.
// Options:
// Integer value for the number of allowable failures
// User preference:
user_pref("network.max_socket_process_failed_count", 1);

// Lists trusted authorities for Microsoft SSO
// Defines trusted domains for Microsoft Single Sign-On (SSO), ensuring
// requests to these domains can utilize SSO for authentication.
// Options:
// Comma-separated list of Microsoft SSO domains
// User preference:
user_pref("network.microsoft-sso-authority-list", "login.microsoft.com, login.microsoftonline.com, sts.windows.net, login.partner.microsoftonline.cn, login.chinacloudapi.cn, login.microsoftonline.us, login-us.microsoftonline.com");

// Enables module preloading
// Allows preloading of JavaScript modules to improve page load performance
// by fetching modules in advance.
// Options:
// true = Enable module preloading
// false = Disable module preloading
// User preference:
user_pref("network.modulepreload", true);

// Allows non-fully qualified domain names for negotiate authentication
// Controls whether authentication is allowed for non-fully qualified domain names (non-FQDN),
// providing flexibility in internal or simplified network environments.
// Options:
// true = Allow non-FQDNs for authentication
// false = Require FQDNs for authentication
// User preference:
user_pref("network.negotiate-auth.allow-non-fqdn", false);

// Allows negotiate authentication for proxies
// Enables negotiate authentication for proxy connections,
// enhancing security by permitting SSO authentication through proxies.
// Options:
// true = Enable negotiate auth for proxies
// false = Disable negotiate auth for proxies
// User preference:
user_pref("network.negotiate-auth.allow-proxies", true);

// Specifies URIs for delegation in negotiate-auth
// Defines a list of URIs where delegation of credentials is allowed in negotiate-auth,
// useful for specific trusted domains requiring credential delegation.
// Options:
// Comma-separated list of URIs
// User preference:
user_pref("network.negotiate-auth.delegation-uris", "");

// Specifies GSSAPI library for negotiate-auth
// Defines the path to a custom GSSAPI library for negotiate-auth,
// allowing customization of the GSSAPI library used for authentication.
// Options:
// String path to GSSAPI library
// User preference:
user_pref("network.negotiate-auth.gsslib", "");

// Specifies trusted URIs for negotiate-auth
// Lists URIs where negotiate-authentication is trusted and enabled,
// enhancing security by restricting negotiate-auth to specified domains.
// Options:
// Comma-separated list of trusted URIs
// User preference:
user_pref("network.negotiate-auth.trusted-uris", "");

// Uses native GSSAPI library for negotiate-auth
// Controls the use of the operating system’s native GSSAPI library for negotiate-auth
// for seamless, integrated authentication on supported systems.
// Options:
// true = Use native GSSAPI library
// false = Do not use native GSSAPI library
// User preference:
user_pref("network.negotiate-auth.using-native-gsslib", true);

// Enables IPv6 change notifications
// Notifies the application of changes to IPv6 network status,
// ensuring it is aware of and can respond to IPv6 network changes.
// Options:
// true = Enable IPv6 change notifications
// false = Disable IPv6 change notifications
// User preference:
user_pref("network.notify.IPv6", true);

// Enables general network change notifications
// Triggers notifications for changes in network configuration or status,
// enabling dynamic responses to network changes (e.g., Wi-Fi or Ethernet status).
// Options:
// true = Enable network change notifications
// false = Disable network change notifications
// User preference:
user_pref("network.notify.changed", true);

// Checks for Name Resolution Policy Table (NRPT) updates
// Verifies and updates network configuration using the Name Resolution Policy Table,
// especially useful in enterprise or managed network environments.
// Options:
// true = Enable NRPT checks
// false = Disable NRPT checks
// User preference:
user_pref("network.notify.checkForNRPT", true);

// Checks for proxy settings
// Regularly checks for updates in network proxy settings,
// allowing the application to dynamically adjust its proxy configuration.
// Options:
// true = Enable proxy check
// false = Disable proxy check
// User preference:
user_pref("network.notify.checkForProxies", true);

// Enables DNS suffix list updates
// Monitors changes to the DNS suffix list, allowing applications
// to recognize new or modified DNS configurations.
// Options:
// true = Enable DNS suffix list updates
// false = Disable DNS suffix list updates
// User preference:
user_pref("network.notify.dnsSuffixList", true);

// Initiates initial network check
// Performs an initial call to check network status when the application starts,
// ensuring accurate network state detection on startup.
// Options:
// true = Enable initial network call
// false = Disable initial network call
// User preference:
user_pref("network.notify.initial_call", true);

// Enables resolver checks for network status
// Ensures that resolver checks are performed to confirm network connectivity,
// supporting accurate connection state monitoring.
// Options:
// true = Enable resolver checks
// false = Disable resolver checks
// User preference:
user_pref("network.notify.resolvers", true);

// Disables offline mirrors when connected
// Prevents using offline mirrors when online connectivity is detected,
// prioritizing live network data over cached/offline resources.
// Options:
// true = Enable offline mirrors when connected
// false = Disable offline mirrors when connected
// User preference:
user_pref("network.offline-mirrors-connectivity", false);

// Controls online status
// Sets the online status of the application, which can be used to simulate
// offline conditions or enforce online connectivity in specific scenarios.
// Options:
// true = Application is online
// false = Application is offline
// User preference:
user_pref("network.online", true);

// Cached state for parental controls
// Determines whether parental controls' state is cached,
// which may enhance performance by reducing checks for control status.
// Options:
// true = Cache parental controls state
// false = Do not cache parental controls state
// User preference:
user_pref("network.parental_controls_cached_state", false);

// Enables preconnect
// Preemptively establishes network connections to servers for expected resources,
// reducing latency and improving load times for frequently accessed content.
// Options:
// true = Enable preconnect
// false = Disable preconnect
// User preference:
user_pref("network.preconnect", true);

// Disables predictor testing
// Stops any testing processes related to network predictor functionality,
// which may be used for diagnostic or optimization purposes.
// Options:
// true = Enable predictor testing
// false = Disable predictor testing
// User preference:
user_pref("network.predictor.doing-tests", false);

// Disables prefetching on SSL connections during hover
// Prevents prefetching when hovering over links on SSL-protected pages,
// which can avoid unwanted requests and maintain data privacy.
// Options:
// true = Enable prefetch on SSL hover
// false = Disable prefetch on SSL hover
// User preference:
user_pref("network.predictor.enable-hover-on-ssl", false);

// Disables general prefetching
// Disables prefetching of resources based on predicted user behavior,
// reducing bandwidth usage but potentially impacting page load performance.
// Options:
// true = Enable prefetching
// false = Disable prefetching
// User preference:
user_pref("network.predictor.enable-prefetch", false);

// Enables network predictor
// Activates the network predictor, which analyzes browsing patterns
// to predict and prepare resources for faster loading of frequently visited pages.
// Options:
// true = Enable network predictor
// false = Disable network predictor
// User preference:
user_pref("network.predictor.enabled", true);

// Sets max resources per predictor entry
// Limits the maximum number of resources that can be cached or preloaded
// for a single predictor entry, optimizing memory and bandwidth usage.
// Options:
// Integer value for maximum resources
// User preference:
user_pref("network.predictor.max-resources-per-entry", 100);

// Sets max URI length for predictor
// Defines the maximum length of URIs the predictor will consider,
// ensuring that excessively long URLs do not affect performance.
// Options:
// Integer value for URI length limit
// User preference:
user_pref("network.predictor.max-uri-length", 500);

// Configures daily page degradation threshold for predictor
// Sets the number of times a page load must be degraded in a single day
// before it is deprioritized by the predictor.
// Options:
// Integer value for daily degradation threshold
// User preference:
user_pref("network.predictor.page-degradation.day", 0);

// Configures max degradation threshold for predictor
// Sets the total threshold for page load degradation
// before the page is deprioritized for network prediction.
// Options:
// Integer value for maximum degradation threshold
// User preference:
user_pref("network.predictor.page-degradation.max", 50);

// Configures monthly page degradation threshold for predictor
// Limits the amount of degradation in a month before a page
// is deprioritized by the network predictor.
// Options:
// Integer value for monthly degradation threshold
// User preference:
user_pref("network.predictor.page-degradation.month", 10);

// Configures weekly page degradation threshold for predictor
// Limits the number of times a page load must be degraded in a single week
// before it is deprioritized by the predictor.
// Options:
// Integer value for weekly degradation threshold
// User preference:
user_pref("network.predictor.page-degradation.week", 5);

// Configures yearly page degradation threshold for predictor
// Sets the total threshold for page load degradation over the course of a year
// before the page is deprioritized for network prediction.
// Options:
// Integer value for yearly degradation threshold
// User preference:
user_pref("network.predictor.page-degradation.year", 25);

// Sets minimum confidence for preconnect
// Determines the minimum confidence level required for the predictor
// to attempt a preconnect action for a given resource.
// Options:
// Integer value for minimum confidence percentage (0-100)
// User preference:
user_pref("network.predictor.preconnect-min-confidence", 90);

// Sets how long prefetch should be considered valid
// Configures the duration (in seconds) that a prefetched resource
// is deemed valid before it is re-evaluated or discarded.
// Options:
// Integer value for duration in seconds
// User preference:
user_pref("network.predictor.prefetch-force-valid-for", 10);

// Sets minimum confidence for prefetch
// Specifies the minimum confidence level necessary for the predictor
// to proceed with prefetching a resource.
// Options:
// Integer value for minimum confidence percentage (0-100)
// User preference:
user_pref("network.predictor.prefetch-min-confidence", 100);

// Configures the count of rolling loads for prefetch
// Sets the number of load requests that can be actively prefetched
// based on current browsing behavior.
// Options:
// Integer value for the maximum rolling load count
// User preference:
user_pref("network.predictor.prefetch-rolling-load-count", 10);

// Sets minimum confidence for preresolve
// Defines the minimum confidence level that must be met for the predictor
// to initiate a DNS pre-resolution for a resource.
// Options:
// Integer value for minimum confidence percentage (0-100)
// User preference:
user_pref("network.predictor.preresolve-min-confidence", 60);

// Configures daily subresource degradation threshold for predictor
// Sets the maximum number of times a subresource load must be degraded
// in a single day before it is deprioritized for network prediction.
// Options:
// Integer value for daily subresource degradation threshold
// User preference:
user_pref("network.predictor.subresource-degradation.day", 1);

// Configures maximum subresource degradation threshold for predictor
// Limits the total threshold for subresource load degradation
// before it is deprioritized by the network predictor.
// Options:
// Integer value for maximum degradation threshold
// User preference:
user_pref("network.predictor.subresource-degradation.max", 100);

// Configures monthly subresource degradation threshold for predictor
// Limits the amount of degradation in a month before a subresource
// is deprioritized by the network predictor.
// Options:
// Integer value for monthly degradation threshold
// User preference:
user_pref("network.predictor.subresource-degradation.month", 25);

// Configures weekly subresource degradation threshold for predictor
// Limits the number of times a subresource load must be degraded in a single week
// before it is deprioritized by the predictor.
// Options:
// Integer value for weekly degradation threshold
// User preference:
user_pref("network.predictor.subresource-degradation.week", 10);

// Configures yearly subresource degradation threshold for predictor
// Sets the total threshold for subresource load degradation over the course of a year
// before the subresource is deprioritized for network prediction.
// Options:
// Integer value for yearly degradation threshold
// User preference:
user_pref("network.predictor.subresource-degradation.year", 50);

// Enables prefetching for the next resource
// This setting allows the browser to prefetch the next resource
// it anticipates the user will request, enhancing performance.
// Options:
// true = Enable prefetching for next resource
// false = Disable prefetching for next resource
// User preference:
user_pref("network.prefetch-next", true);

// Enables the processing of network requests
// This setting determines if the browser processes network requests
// normally, impacting user experience and performance.
// Options:
// true = Enable processing
// false = Disable processing
// User preference:
user_pref("network.process.enabled", true);

// Exposes all protocol handlers
// This preference controls whether the browser exposes all protocol
// handlers, impacting how external applications interact with the browser.
// Options:
// true = Expose all protocol handlers
// false = Do not expose all protocol handlers
// User preference:
user_pref("network.protocol-handler.expose-all", true);

// Exposes the mailto protocol handler
// This setting controls if the browser will expose the mailto protocol
// handler to external applications.
// Options:
// true = Expose mailto handler
// false = Do not expose mailto handler
// User preference:
user_pref("network.protocol-handler.expose.mailto", false);

// Exposes the news protocol handler
// This setting determines if the news protocol handler is exposed
// to external applications.
// Options:
// true = Expose news handler
// false = Do not expose news handler
// User preference:
user_pref("network.protocol-handler.expose.news", false);

// Exposes the nntp protocol handler
// This preference controls whether the NNTP (Network News Transfer Protocol)
// handler is exposed to external applications.
// Options:
// true = Expose nntp handler
// false = Do not expose nntp handler
// User preference:
user_pref("network.protocol-handler.expose.nntp", false);

// Exposes the snews protocol handler
// This setting determines if the snews protocol handler is exposed
// to external applications.
// Options:
// true = Expose snews handler
// false = Do not expose snews handler
// User preference:
user_pref("network.protocol-handler.expose.snews", false);

// Uses external default protocol handler
// This setting determines if the browser should use the external
// default protocol handler for specific actions.
// Options:
// true = Use external default handler
// false = Do not use external default handler
// User preference:
user_pref("network.protocol-handler.external-default", true);

// Exposes the AFP (Apple Filing Protocol) handler
// This preference controls whether the AFP protocol handler is exposed
// to external applications.
// Options:
// true = Expose AFP handler
// false = Do not expose AFP handler
// User preference:
user_pref("network.protocol-handler.external.afp", false);

// Exposes the data protocol handler
// This setting determines if the data protocol handler is exposed
// to external applications.
// Options:
// true = Expose data handler
// false = Do not expose data handler
// User preference:
user_pref("network.protocol-handler.external.data", false);

// Exposes the disk protocol handler
// This preference controls whether the disk protocol handler is exposed
// to external applications.
// Options:
// true = Expose disk handler
// false = Do not expose disk handler
// User preference:
user_pref("network.protocol-handler.external.disk", false);

// Exposes the disks protocol handler
// This setting determines if the disks protocol handler is exposed
// to external applications.
// Options:
// true = Expose disks handler
// false = Do not expose disks handler
// User preference:
user_pref("network.protocol-handler.external.disks", false);

// Exposes the HCP (Hypertext Control Protocol) handler
// This setting determines if the HCP protocol handler is exposed
// to external applications.
// Options:
// true = Expose HCP handler
// false = Do not expose HCP handler
// User preference:
user_pref("network.protocol-handler.external.hcp", false);

// Exposes the Help protocol handler
// This preference controls whether the Help protocol handler is exposed
// to external applications.
// Options:
// true = Expose Help handler
// false = Do not expose Help handler
// User preference:
user_pref("network.protocol-handler.external.help", false);

// Exposes the HTP (Hypertext Transfer Protocol) handler
// This setting determines if the HTP protocol handler is exposed
// to external applications.
// Options:
// true = Expose HTP handler
// false = Do not expose HTP handler
// User preference:
user_pref("network.protocol-handler.external.htp", false);

// Exposes the HTPS (HTTP Secure) handler
// This preference controls whether the HTPS protocol handler is exposed
// to external applications.
// Options:
// true = Expose HTPS handler
// false = Do not expose HTPS handler
// User preference:
user_pref("network.protocol-handler.external.htps", false);

// Exposes the Internet Explorer HTTP protocol handler
// This setting determines if the IE HTTP protocol handler is exposed
// to external applications.
// Options:
// true = Expose IE HTTP handler
// false = Do not expose IE HTTP handler
// User preference:
user_pref("network.protocol-handler.external.ie.http", false);

// Exposes the Internet Explorer History protocol handler
// This preference controls whether the IE History protocol handler is exposed
// to external applications.
// Options:
// true = Expose IE History handler
// false = Do not expose IE History handler
// User preference:
user_pref("network.protocol-handler.external.iehistory", false);

// Exposes the Internet Explorer RSS protocol handler
// This setting determines if the IE RSS protocol handler is exposed
// to external applications.
// Options:
// true = Expose IE RSS handler
// false = Do not expose IE RSS handler
// User preference:
user_pref("network.protocol-handler.external.ierss", false);

// Exposes the ILE (Internet Locator Service) handler
// This preference controls whether the ILE protocol handler is exposed
// to external applications.
// Options:
// true = Expose ILE handler
// false = Do not expose ILE handler
// User preference:
user_pref("network.protocol-handler.external.ile", false);

// Exposes the JavaScript protocol handler
// This setting determines if the JavaScript protocol handler is exposed
// to external applications.
// Options:
// true = Expose JavaScript handler
// false = Do not expose JavaScript handler
// User preference:
user_pref("network.protocol-handler.external.javascript", false);

// Exposes the LE (Link Exchange) handler
// This preference controls whether the LE protocol handler is exposed
// to external applications.
// Options:
// true = Expose LE handler
// false = Do not expose LE handler
// User preference:
user_pref("network.protocol-handler.external.le", false);

// Exposes the mailto protocol handler
// This setting controls if the browser will expose the mailto protocol
// handler to external applications.
// Options:
// true = Expose mailto handler
// false = Do not expose mailto handler
// User preference:
user_pref("network.protocol-handler.external.mailto", true);

// Exposes the MK (Make Directory) protocol handler
// This preference controls whether the MK protocol handler is exposed
// to external applications.
// Options:
// true = Expose MK handler
// false = Do not expose MK handler
// User preference:
user_pref("network.protocol-handler.external.mk", false);

// Exposes the MozIcon protocol handler
// This setting determines if the MozIcon protocol handler is exposed
// to external applications.
// Options:
// true = Expose MozIcon handler
// false = Do not expose MozIcon handler
// User preference:
user_pref("network.protocol-handler.external.moz-icon", false);

// Exposes the MS-CXH (Microsoft Context Help) protocol handler
// This preference controls whether the MS-CXH protocol handler is exposed
// to external applications.
// Options:
// true = Expose MS-CXH handler
// false = Do not expose MS-CXH handler
// User preference:
user_pref("network.protocol-handler.external.ms-cxh", false);

// Exposes the MS-CXH-Full protocol handler
// This setting determines if the MS-CXH-Full protocol handler is exposed
// to external applications.
// Options:
// true = Expose MS-CXH-Full handler
// false = Do not expose MS-CXH-Full handler
// User preference:
user_pref("network.protocol-handler.external.ms-cxh-full", false);

// Exposes the MS-Help protocol handler
// This preference controls whether the MS-Help protocol handler is exposed
// to external applications.
// Options:
// true = Expose MS-Help handler
// false = Do not expose MS-Help handler
// User preference:
user_pref("network.protocol-handler.external.ms-help", false);

// Exposes the MS-MSDT (Microsoft Support Diagnostic Tool) protocol handler
// This setting determines if the MS-MSDT protocol handler is exposed
// to external applications.
// Options:
// true = Expose MS-MSDT handler
// false = Do not expose MS-MSDT handler
// User preference:
user_pref("network.protocol-handler.external.ms-msdt", false);

// Exposes the PS (PostScript) protocol handler
// This preference controls whether the PS protocol handler is exposed
// to external applications.
// Options:
// true = Expose PS handler
// false = Do not expose PS handler
// User preference:
user_pref("network.protocol-handler.external.ps", false);

// Exposes the RES (Resource) protocol handler
// This setting determines if the RES protocol handler is exposed
// to external applications.
// Options:
// true = Expose RES handler
// false = Do not expose RES handler
// User preference:
user_pref("network.protocol-handler.external.res", false);

// Exposes the Search protocol handler
// This preference controls whether the Search protocol handler is exposed
// to external applications.
// Options:
// true = Expose Search handler
// false = Do not expose Search handler
// User preference:
user_pref("network.protocol-handler.external.search", false);

// Exposes the Search-MS protocol handler
// This setting determines if the Search-MS protocol handler is exposed
// to external applications.
// Options:
// true = Expose Search-MS handler
// false = Do not expose Search-MS handler
// User preference:
user_pref("network.protocol-handler.external.search-ms", false);

// Exposes the Shell protocol handler
// This preference controls whether the Shell protocol handler is exposed
// to external applications.
// Options:
// true = Expose Shell handler
// false = Do not expose Shell handler
// User preference:
user_pref("network.protocol-handler.external.shell", false);

// Exposes the TPS (Third Party Services) protocol handler
// This setting determines if the TPS protocol handler is exposed
// to external applications.
// Options:
// true = Expose TPS handler
// false = Do not expose TPS handler
// User preference:
user_pref("network.protocol-handler.external.tps", false);

// Exposes the TTP (Third-Party Protocol) protocol handler
// This preference controls whether the TTP protocol handler is exposed
// to external applications.
// Options:
// true = Expose TTP handler
// false = Do not expose TTP handler
// User preference:
user_pref("network.protocol-handler.external.ttp", false);

// Exposes the TTPS (Third Party Secure) protocol handler
// This setting determines if the TTPS protocol handler is exposed
// to external applications.
// Options:
// true = Expose TTPS handler
// false = Do not expose TTPS handler
// User preference:
user_pref("network.protocol-handler.external.ttps", false);

// Exposes the VBScript protocol handler
// This preference controls whether the VBScript protocol handler is exposed
// to external applications.
// Options:
// true = Expose VBScript handler
// false = Do not expose VBScript handler
// User preference:
user_pref("network.protocol-handler.external.vbscript", false);

// Exposes the VND.MS.Radio (Microsoft Radio) protocol handler
// This setting determines if the VND.MS.Radio protocol handler is exposed
// to external applications.
// Options:
// true = Expose VND.MS.Radio handler
// false = Do not expose VND.MS.Radio handler
// User preference:
user_pref("network.protocol-handler.external.vnd.ms.radio", false);

// Warns when an external protocol is requested
// This preference determines whether to show a warning when an external
// protocol handler is invoked.
// Options:
// true = Show warning for all external protocols
// false = Do not show warning
// User preference:
user_pref("network.protocol-handler.warn-external-default", true);

// Warns when the mailto protocol is requested externally
// This setting determines whether to show a warning for the mailto
// protocol when invoked externally.
// Options:
// true = Show warning for mailto protocol
// false = Do not show warning
// User preference:
user_pref("network.protocol-handler.warn-external.mailto", false);

// Allows bypassing of proxy settings for local addresses
// This preference controls whether local addresses can bypass proxy settings.
// Options:
// true = Allow bypass for local addresses
// false = Do not allow bypass for local addresses
// User preference:
user_pref("network.proxy.allow_bypass", true);

// Prevents hijacking of localhost by proxy settings
// This setting determines whether localhost can be hijacked by proxy settings.
// Options:
// true = Allow hijacking of localhost
// false = Do not allow hijacking of localhost
// User preference:
user_pref("network.proxy.allow_hijacking_localhost", false);

// Maximum retry interval for automatic proxy configuration
// This preference sets the maximum retry interval (in seconds) for
// automatic proxy configuration URL requests.
// Options:
// Integer value for maximum retry interval in seconds
// User preference:
user_pref("network.proxy.autoconfig_retry_interval_max", 300);

// Minimum retry interval for automatic proxy configuration
// This preference sets the minimum retry interval (in seconds) for
// automatic proxy configuration URL requests.
// Options:
// Integer value for minimum retry interval in seconds
// User preference:
user_pref("network.proxy.autoconfig_retry_interval_min", 5);

// URL for automatic proxy configuration
// This preference allows the specification of a URL for automatic proxy
// configuration (PAC file). Leave empty if not used.
// User preference:
user_pref("network.proxy.autoconfig_url", "");

// Includes path in automatic proxy configuration URL
// This setting determines whether to include the path in the automatic
// proxy configuration URL.
// Options:
// true = Include path
// false = Do not include path
// User preference:
user_pref("network.proxy.autoconfig_url.include_path", false);

// Default SOCKS version for PAC script
// This preference specifies the default SOCKS version (4 or 5) for PAC scripts.
// Options:
// Integer value for SOCKS version
// User preference:
user_pref("network.proxy.default_pac_script_socks_version", 4);

// Detects system proxy changes
// This preference controls whether the application checks for changes in the
// system's proxy settings automatically.
// Options:
// true = Enable detection of system proxy changes
// false = Disable detection of system proxy changes
// User preference:
user_pref("network.proxy.detect_system_proxy_changes", false);

// Enables WPAD (Web Proxy Auto-Discovery) over DHCP
// This setting determines whether to enable the detection of proxies using
// WPAD via DHCP.
// Options:
// true = Enable WPAD over DHCP
// false = Disable WPAD over DHCP
// User preference:
user_pref("network.proxy.enable_wpad_over_dhcp", true);

// Enables failover to a direct connection
// This preference determines whether the application should automatically
// attempt to connect directly if proxy connections fail.
// Options:
// true = Enable failover to direct connection
// false = Disable failover to direct connection
// User preference:
user_pref("network.proxy.failover_direct", true);

// Timeout for failover to a direct connection (in seconds)
// This setting specifies the time (in seconds) to wait before failing
// over to a direct connection when proxy attempts fail.
// Options:
// Integer value for timeout duration
// User preference:
user_pref("network.proxy.failover_timeout", 1800);

// Proxy server for HTTP connections
// This preference allows the specification of a proxy server for HTTP
// connections. Leave empty if not used.
// User preference:
user_pref("network.proxy.http", "");

// Port number for HTTP proxy server
// This preference specifies the port number to use for the HTTP proxy server.
// Options:
// Integer value for port number (0 = use default port)
// User preference:
user_pref("network.proxy.http_port", 0);

// No proxy settings for specified addresses
// This preference allows the specification of addresses that should bypass
// the proxy settings. Use commas to separate multiple entries.
// User preference:
user_pref("network.proxy.no_proxies_on", "");

// Parses PAC files on socket process
// This setting determines whether to parse PAC files on the socket process.
// Options:
// true = Enable parsing of PAC files on socket process
// false = Disable parsing of PAC files on socket process
// User preference:
user_pref("network.proxy.parse_pac_on_socket_process", false);

// Enables proxy connections over TLS
// This preference controls whether to use TLS for proxy connections.
// Options:
// true = Enable proxy connections over TLS
// false = Disable proxy connections over TLS
// User preference:
user_pref("network.proxy.proxy_over_tls", true);

// Delay before reloading PAC file (in milliseconds)
// This preference specifies the delay (in milliseconds) before reloading
// the PAC file.
// Options:
// Integer value for delay duration
// User preference:
user_pref("network.proxy.reload_pac_delay", 2000);

// Retries failed proxy connections
// This setting determines whether the application should retry connections
// to proxies that fail.
// Options:
// true = Enable retry for failed proxies
// false = Disable retry for failed proxies
// User preference:
user_pref("network.proxy.retry_failed_proxies", true);

// Shares proxy settings between different applications
// This preference controls whether to share the proxy settings across
// multiple applications. If enabled, changes to the proxy settings
// will affect all applications that support this feature.
// Options:
// true = Enable sharing of proxy settings
// false = Disable sharing of proxy settings
// User preference:
user_pref("network.proxy.share_proxy_settings", false);

// Proxy server for SOCKS connections
// This preference allows the specification of a proxy server for SOCKS
// connections. Leave empty if not used.
// User preference:
user_pref("network.proxy.socks", "");

// Enables remote DNS resolution for SOCKS5 proxy
// This setting specifies whether to use remote DNS resolution for
// SOCKS5 connections, allowing the proxy to handle DNS queries.
// Options:
// true = Enable remote DNS resolution
// false = Disable remote DNS resolution
// User preference:
user_pref("network.proxy.socks5_remote_dns", true);

// Port number for SOCKS proxy server
// This preference specifies the port number to use for the SOCKS
// proxy server. A value of 0 indicates the default port.
// Options:
// Integer value for port number (0 = use default port)
// User preference:
user_pref("network.proxy.socks_port", 0);

// Enables remote DNS resolution for SOCKS proxy
// This setting specifies whether to use remote DNS resolution for
// SOCKS connections. If enabled, DNS queries will be sent to the proxy
// server instead of the local resolver.
// Options:
// true = Enable remote DNS resolution
// false = Disable remote DNS resolution
// User preference:
user_pref("network.proxy.socks_remote_dns", false);

// Version of the SOCKS protocol to use
// This preference sets the version of the SOCKS protocol to be used
// for connections. The default is SOCKS5, which provides better support
// for authentication and IPv6.
// Options:
// 4 = SOCKS4
// 5 = SOCKS5
// User preference:
user_pref("network.proxy.socks_version", 5);

// Proxy server for SSL connections
// This preference allows the specification of a proxy server for SSL
// connections. Leave empty if not used.
// User preference:
user_pref("network.proxy.ssl", "");

// Port number for SSL proxy server
// This preference specifies the port number to use for the SSL proxy server.
// A value of 0 indicates the default port.
// Options:
// Integer value for port number (0 = use default port)
// User preference:
user_pref("network.proxy.ssl_port", 0);

// Enables WPAD (Web Proxy Auto-Discovery) for system settings
// This setting specifies whether to enable the use of WPAD for
// automatically configuring proxy settings in the system.
// Options:
// true = Enable WPAD
// false = Disable WPAD
// User preference:
user_pref("network.proxy.system_wpad", false);

// Allows WPAD settings to be applied
// This preference determines whether WPAD settings are allowed to be
// applied. If set to false, WPAD will be ignored even if enabled.
// Options:
// true = Allow WPAD settings
// false = Disallow WPAD settings
// User preference:
user_pref("network.proxy.system_wpad.allowed", false);

// Tests whether localhost is secure when hijacked
// This setting checks whether localhost connections are considered
// secure when proxy hijacking is in effect.
// Options:
// true = Treat localhost as secure when hijacked
// false = Treat localhost as insecure when hijacked
// User preference:
user_pref("network.proxy.testing_localhost_is_secure_when_hijacked", false);

// Sets the type of proxy configuration
// This preference determines the proxy configuration type being used.
// Options:
// 0 = No proxy
// 1 = Manual proxy configuration
// 2 = Auto-detect proxy settings
// 3 = Automatic proxy configuration (PAC)
// 4 = Use system proxy settings
// 5 = Proxy settings are specified via URL
// User preference:
user_pref("network.proxy.type", 5);

// Notifies on updates to the Public Suffix List (PSL)
// This setting controls whether the browser sends notifications
// when the Public Suffix List is updated. The PSL is used for
// determining domain ownership and cookie restrictions.
// Options:
// true = Enable notifications on PSL updates
// false = Disable notifications on PSL updates
// User preference:
user_pref("network.psl.onUpdate_notify", false);

// Sends ODA (OnDataAvailable) notifications directly to content
// This setting determines whether the OnDataAvailable events are sent
// directly to content, which may improve performance in certain scenarios.
// Options:
// true = Send ODA directly to content
// false = Do not send ODA directly to content
// User preference:
user_pref("network.send_ODA_to_content_directly", true);

// Sends OnDataFinished notifications
// This setting controls whether OnDataFinished notifications are sent
// to content when data transfer is completed. This can help with
// managing resource loading and completion tracking.
// Options:
// true = Send OnDataFinished notifications
// false = Do not send OnDataFinished notifications
// User preference:
user_pref("network.send_OnDataFinished", true);

// Sends OnDataFinished notifications for CSS Loader
// This option specifies whether to send OnDataFinished notifications
// specifically for CSS loading processes.
// Options:
// true = Enable notifications for CSS loading
// false = Disable notifications for CSS loading
// User preference:
user_pref("network.send_OnDataFinished.cssLoader", true);

// Sends OnDataFinished notifications for HTML5 parser
// This option specifies whether to send OnDataFinished notifications
// specifically for the HTML5 parsing process.
// Options:
// true = Enable notifications for HTML5 parsing
// false = Disable notifications for HTML5 parsing
// User preference:
user_pref("network.send_OnDataFinished.html5parser", true);

// Sends OnDataFinished notifications for nsInputStreamPump
// This setting controls whether OnDataFinished notifications are sent
// for the nsInputStreamPump component, which handles streaming data.
// Options:
// true = Enable notifications for nsInputStreamPump
// false = Disable notifications for nsInputStreamPump
// User preference:
user_pref("network.send_OnDataFinished.nsInputStreamPump", true);

// Sends OnDataFinished notifications after progress updates
// This setting controls whether OnDataFinished notifications are sent
// after progress updates have occurred during data transfer.
// Options:
// true = Send notifications after progress updates
// false = Do not send notifications after progress updates
// User preference:
user_pref("network.send_OnDataFinished_after_progress_updates", false);

// Forces a specific port for socket connections
// This preference allows the user to specify a forced port for socket
// connections. Leave empty if not used.
// User preference:
user_pref("network.socket.forcePort", "");

// Disables using IP address any (0.0.0.0) for socket connections
// This setting determines whether to disable the use of the "any" IP
// address in socket connections, which can affect binding and listening.
// Options:
// true = Disable use of IP address any
// false = Enable use of IP address any
// User preference:
user_pref("network.socket.ip_addr_any.disabled", false);

// Capacity of the SSL tokens cache
// This setting specifies the maximum number of SSL tokens that can
// be cached in memory. This cache is used for session resumption
// and other SSL-related optimizations.
// User preference:
user_pref("network.ssl_tokens_cache_capacity", 2048);

// Number of cache records per entry for SSL tokens
// This setting specifies how many cache records should be kept
// for each SSL token entry in the cache. This can help manage
// memory usage and performance.
// User preference:
user_pref("network.ssl_tokens_cache_records_per_entry", 2);

// Maximum length of standard URLs
// This setting defines the maximum length for standard URLs in
// the browser, helping to prevent excessively long URLs from causing
// issues or security risks.
// User preference:
user_pref("network.standard-url.max-length", 1048576);

// Enables standard content type parsing for response headers
// This setting determines whether the browser should parse and
// handle standard content types present in HTTP response headers.
// Options:
// true = Enable standard content type parsing
// false = Disable standard content type parsing
// User preference:
user_pref("network.standard_content_type_parsing.response_headers", true);

// Enables the Strict Transport Security (HSTS) preload list
// This setting determines whether the browser should use the
// predefined HSTS preload list, which helps enforce secure connections
// to known domains automatically.
// Options:
// true = Enable HSTS preload list
// false = Disable HSTS preload list
// User preference:
user_pref("network.stricttransportsecurity.preloadlist", true);

// Maximum time for events between two polls in STS
// This setting specifies the maximum duration allowed for events
// to occur between polling operations in Strict Transport Security (STS).
// User preference:
user_pref("network.sts.max_time_for_events_between_two_polls", 100);

// Maximum time for connection closure during shutdown in STS
// This setting determines how long the system will wait for
// connections to close during shutdown in the context of STS.
// User preference:
user_pref("network.sts.max_time_for_pr_close_during_shutdown", 5000);

// Poll busy wait period in milliseconds
// This setting specifies the duration the system will wait
// in busy mode while polling for STS events.
// User preference:
user_pref("network.sts.poll_busy_wait_period", 50);

// Timeout for busy wait period during polling in STS
// This setting specifies the maximum time allowed for busy
// waiting while polling for events in STS before timing out.
// User preference:
user_pref("network.sts.poll_busy_wait_period_timeout", 7);

// Timeout for polling STS events
// This setting determines how long the polling for STS events
// will continue before it is considered to have timed out.
// User preference:
user_pref("network.sts.pollable_event_timeout", 6);

// Enables TCP keepalive feature
// This setting specifies whether to enable the TCP keepalive feature,
// which helps to maintain persistent connections by periodically
// sending keepalive packets.
// Options:
// true = Enable TCP keepalive
// false = Disable TCP keepalive
// User preference:
user_pref("network.tcp.keepalive.enabled", true);

// Idle time for TCP keepalive in seconds
// This setting determines the idle time before a keepalive packet
// is sent on a TCP connection to verify if the connection is still active.
// User preference:
user_pref("network.tcp.keepalive.idle_time", 600);

// Delay before tickling Wi-Fi in milliseconds
// This setting specifies the time to wait before sending a tickle
// request to Wi-Fi, which can help keep the connection alive.
// User preference:
user_pref("network.tickle-wifi.delay", 16);

// Duration of the tickle Wi-Fi action in milliseconds
// This setting specifies how long the tickle action should last
// when keeping the Wi-Fi connection active.
// User preference:
user_pref("network.tickle-wifi.duration", 400);

// Enables or disables the tickle Wi-Fi feature
// This setting determines whether the tickle Wi-Fi feature is active,
// which is used to keep the Wi-Fi connection alive by periodically
// sending signals to the network.
// Options:
// true = Enable tickle Wi-Fi
// false = Disable tickle Wi-Fi
// User preference:
user_pref("network.tickle-wifi.enabled", false);

// Enables the traffic analyzer feature
// This setting allows the browser to collect and analyze traffic data,
// which can be useful for performance optimization and monitoring.
// Options:
// true = Enable traffic analyzer
// false = Disable traffic analyzer
// User preference:
user_pref("network.traffic_analyzer.enabled", true);

// Allows additional DNS records to be added for TRR
// This setting determines whether the browser should allow
// the addition of extra DNS records in the Trusted Recursive Resolver (TRR).
// Options:
// true = Allow additional records
// false = Disallow additional records
// User preference:
user_pref("network.trr.add_additional_records", true);

// Allows TRR queries for RFC1918 addresses
// This setting specifies whether the browser should allow
// DNS queries for private network addresses defined in RFC1918
// when using TRR.
// Options:
// true = Allow RFC1918 queries
// false = Disallow RFC1918 queries
// User preference:
user_pref("network.trr.allow-rfc1918", false);

// Enables or disables asynchronous connection information for TRR
// This setting specifies whether connection information should be
// handled asynchronously when using TRR.
// Options:
// true = Enable async connection info
// false = Disable async connection info
// User preference:
user_pref("network.trr.async_connInfo", false);

// Attempts TRR resolution when retrying confirmation
// This setting determines whether the browser should attempt
// TRR resolution when confirming a connection after a failure.
// Options:
// true = Attempt TRR on retry
// false = Do not attempt TRR on retry
// User preference:
user_pref("network.trr.attempt-when-retrying-confirmation", false);

// Bootstrap address for TRR queries
// This setting specifies the initial address that will be used for
// DNS queries when using TRR.
// User preference:
user_pref("network.trr.bootstrapAddress", "");

// List of built-in excluded domains for TRR
// This setting specifies domains that will be excluded from TRR resolution
// by default, such as localhost and local domains.
// User preference:
user_pref("network.trr.builtin-excluded-domains", "localhost,local");

// Clears TRR cache on preference change
// This setting specifies whether to clear the TRR cache when
// related preferences are changed.
// Options:
// true = Clear cache on change
// false = Do not clear cache on change
// User preference:
user_pref("network.trr.clear-cache-on-pref-change", true);

// Confirmation nameserver for TRR
// This setting specifies the nameserver to be used for confirmation
// when validating DNS queries.
// User preference:
user_pref("network.trr.confirmationNS", "example.com");

// Enables or disables confirmation telemetry for TRR
// This setting determines whether to send telemetry data related
// to TRR confirmation processes.
// Options:
// true = Enable confirmation telemetry
// false = Disable confirmation telemetry
// User preference:
user_pref("network.trr.confirmation_telemetry_enabled", true);

// Timeout for confirmation in milliseconds for TRR
// This setting specifies how long the browser will wait for a
// confirmation response when using TRR before timing out.
// User preference:
user_pref("network.trr.confirmation_timeout_ms", 6000);

// Credentials for TRR queries
// This setting specifies the credentials (such as an API key or token)
// to be used when making DNS queries via the Trusted Recursive Resolver (TRR).
// User preference:
user_pref("network.trr.credentials", "");

// Custom URI for TRR queries
// This setting allows the user to define a custom URI for TRR queries,
// which can be useful for connecting to a specific DNS resolver.
// User preference:
user_pref("network.trr.custom_uri", "");

// Default provider URI for TRR queries
// This setting specifies the default URI to be used for TRR queries,
// which is the fallback resolver if no other settings are specified.
// User preference:
user_pref("network.trr.default_provider_uri", "");

// Disables EDNS Client Subnet (ECS) for TRR
// This setting specifies whether to disable ECS when making DNS queries
// through TRR, which can help improve privacy by preventing the resolver
// from knowing the user's location.
// Options:
// true = Disable ECS
// false = Enable ECS
// User preference:
user_pref("network.trr.disable-ECS", true);

// Displays fallback warning for TRR
// This setting determines whether a fallback warning should be displayed
// when TRR is not functioning as expected.
// Options:
// true = Display warning
// false = Do not display warning
// User preference:
user_pref("network.trr.display_fallback_warning", false);

// Enables TRR when a VPN is detected
// This setting allows TRR to be used when a VPN is active,
// ensuring DNS queries are routed through the TRR resolver even under a VPN.
// Options:
// true = Enable TRR with VPN
// false = Disable TRR with VPN
// User preference:
user_pref("network.trr.enable_when_vpn_detected", true);

// Excludes /etc/hosts entries from TRR resolution
// This setting specifies whether to exclude the entries in the /etc/hosts
// file from TRR resolution, which may help in environments where local
// DNS resolution is critical.
// Options:
// true = Exclude /etc/hosts
// false = Include /etc/hosts
// User preference:
user_pref("network.trr.exclude-etc-hosts", true);

// List of excluded domains for TRR
// This setting allows specifying domains that should be excluded from
// TRR resolution, which can help ensure that certain local or internal
// domains are resolved normally instead of through TRR.
// User preference:
user_pref("network.trr.excluded-domains", "");

// Fallback on zero response for TRR
// This setting determines whether to fallback to an alternative resolver
// if a TRR query receives a zero response.
// Options:
// true = Fallback on zero response
// false = Do not fallback on zero response
// User preference:
user_pref("network.trr.fallback-on-zero-response", false);

// Heuristic list for fallback warning in TRR
// This setting specifies the heuristic list used to trigger a fallback
// warning for TRR, helping to identify potential issues with the resolver.
// User preference:
user_pref("network.trr.fallback_warning_heuristic_list", "canary");

// Hard fail on extended error for TRR
// This setting specifies whether to hard fail TRR resolution on extended errors,
// which can be useful for quickly diagnosing issues with the resolver.
// Options:
// true = Hard fail on extended error
// false = Soft fail on extended error
// User preference:
user_pref("network.trr.hard_fail_on_extended_error", true);

// Maximum number of fails before giving up on TRR
// This setting specifies the maximum number of consecutive failures
// that can occur before the browser stops trying to use TRR.
// User preference:
user_pref("network.trr.max-fails", 15);

// Maximum retry timeout for TRR in milliseconds
// This setting specifies the maximum duration to wait for a TRR request
// to be retried before giving up. A longer timeout can be useful in
// unstable network environments.
// User preference:
user_pref("network.trr.max-retry-timeout-ms", 64000);

// Mode for TRR operation
// This setting specifies the operational mode for TRR, allowing users
// to define how the TRR feature behaves. Different values correspond to
// different operational behaviors.
// Options:
// 0 = Off
// 1 = Default
// 2 = Native
// 3 = TRR only
// User preference:
user_pref("network.trr.mode", 3);

// Configuration URI for the TRR over HTTP
// This setting allows users to specify a configuration URI for TRR
// over HTTP, which can be useful for custom DNS resolver setups.
// User preference:
user_pref("network.trr.ohttp.config_uri", "");

// Relay URI for TRR over HTTP
// This setting specifies the relay URI for TRR over HTTP, which can
// be used to connect to a specific relay server.
// User preference:
user_pref("network.trr.ohttp.relay_uri", "");

// Main URI for TRR over HTTP
// This setting specifies the main URI for TRR over HTTP, which directs
// where DNS queries should be sent.
// User preference:
user_pref("network.trr.ohttp.uri", "");

// Padding for TRR requests
// This setting specifies whether padding should be used for TRR requests,
// which can help obfuscate the content of DNS queries for enhanced privacy.
// Options:
// true = Enable padding
// false = Disable padding
// User preference:
user_pref("network.trr.padding", true);

// Length of padding for TRR requests in bytes
// This setting specifies the length of padding to be added to TRR requests,
// which can help further obscure query patterns.
// User preference:
user_pref("network.trr.padding.length", 128);

// Timeout for TRR pings in milliseconds
// This setting specifies the maximum time to wait for a TRR ping response
// before considering it failed. Shorter timeouts can help with quicker
// recoveries in case of network issues.
// User preference:
user_pref("network.trr.ping_timeout", 3000);

// Request timeout mode for TRR only in milliseconds
// This setting specifies the timeout duration for TRR requests
// when TRR is the only mode used, helping to control how long to wait
// before considering a TRR request failed.
// User preference:
user_pref("network.trr.request_timeout_mode_trronly_ms", 30000);

// General request timeout for TRR in milliseconds
// This setting specifies the general timeout duration for all TRR requests,
// helping to manage how long to wait for responses before retrying.
// User preference:
user_pref("network.trr.request_timeout_ms", 1500);

// Retry timeout for TRR requests in milliseconds
// This setting specifies the timeout for retrying TRR requests,
// which can be important for maintaining responsiveness in case of temporary
// network issues.
// User preference:
user_pref("network.trr.retry-timeout-ms", 125);

// Retry on recoverable errors for TRR
// This setting specifies whether to retry TRR requests when a recoverable
// error occurs, which can help ensure more robust DNS resolution.
// Options:
// true = Enable retries on recoverable errors
// false = Disable retries on recoverable errors
// User preference:
user_pref("network.trr.retry_on_recoverable_errors", true);

// Send Accept-Language headers with TRR requests
// This setting specifies whether to include Accept-Language headers in TRR
// requests, which can influence content negotiation on the server side.
// Options:
// true = Enable sending Accept-Language headers
// false = Disable sending Accept-Language headers
// User preference:
user_pref("network.trr.send_accept-language_headers", false);

// Send empty Accept-Encoding headers with TRR requests
// This setting specifies whether to send empty Accept-Encoding headers with
// TRR requests. This can be useful for certain compatibility scenarios.
// Options:
// true = Send empty Accept-Encoding headers
// false = Do not send empty Accept-Encoding headers
// User preference:
user_pref("network.trr.send_empty_accept-encoding_headers", true);

// Send User-Agent headers with TRR requests
// This setting specifies whether to include User-Agent headers in TRR
// requests, which can affect how the server responds to the request.
// Options:
// true = Enable sending User-Agent headers
// false = Disable sending User-Agent headers
// User preference:
user_pref("network.trr.send_user-agent_headers", false);

// Skip AAAA records when not supported
// This setting specifies whether to skip AAAA records in TRR requests
// if they are not supported by the resolver, potentially improving compatibility.
// Options:
// true = Skip AAAA records when not supported
// false = Do not skip AAAA records
// User preference:
user_pref("network.trr.skip-AAAA-when-not-supported", true);

// Skip checking for blocked hosts
// This setting specifies whether to bypass checks for blocked hosts
// during TRR resolution, which can be useful in certain situations.
// Options:
// true = Skip checks for blocked hosts
// false = Do not skip checks for blocked hosts
// User preference:
user_pref("network.trr.skip-check-for-blocked-host", false);

// Split-horizon mitigations for TRR
// This setting specifies whether to enable mitigations for split-horizon DNS
// scenarios, which can help ensure proper resolution in complex networks.
// Options:
// true = Enable split-horizon mitigations
// false = Disable split-horizon mitigations
// User preference:
user_pref("network.trr.split_horizon_mitigations", true);

// Strict fallback request timeout for TRR in milliseconds
// This setting specifies the timeout duration for strict fallback requests
// in TRR. This can help manage how quickly to fail over to alternate
// resolvers if the primary fails to respond.
// User preference:
user_pref("network.trr.strict_fallback_request_timeout_ms", 6000);

// Strict native fallback
// This setting specifies whether to enforce strict native fallback behavior
// in TRR, affecting how the system handles native DNS queries.
// Options:
// true = Enable strict native fallback
// false = Disable strict native fallback
// User preference:
user_pref("network.trr.strict_native_fallback", false);

// Allow timeouts during strict native fallback
// This setting specifies whether to allow timeouts when using strict
// native fallback for TRR requests.
// Options:
// true = Allow timeouts
// false = Do not allow timeouts
// User preference:
user_pref("network.trr.strict_native_fallback_allow_timeouts", true);

// Temporary blocklist for TRR
// This setting specifies whether to enable a temporary blocklist for TRR,
// which can be used to prevent specific domains from being resolved.
// Options:
// true = Enable temporary blocklist
// false = Disable temporary blocklist
// User preference:
user_pref("network.trr.temp_blocklist", true);

// Duration for temporary blocklist entries in seconds
// This setting specifies how long entries remain in the temporary blocklist,
// allowing for more dynamic management of domain resolution.
// User preference:
user_pref("network.trr.temp_blocklist_duration_sec", 60);

// URI for the TRR service
// This setting specifies the URI of the DNS resolver to use for TRR
// requests, directing where to send DNS queries.
// User preference:
user_pref("network.trr.uri", "");

// Use GET method for TRR requests
// This setting specifies whether to use the GET method for TRR requests,
// which can affect how DNS queries are transmitted to the resolver.
// Options:
// true = Use GET method for TRR requests
// false = Do not use GET method
// User preference:
user_pref("network.trr.useGET", false);

// Use OHTTP for TRR requests
// This setting specifies whether to enable OHTTP (Obfuscated HTTP)
// for TRR requests, enhancing privacy and security.
// Options:
// true = Enable OHTTP
// false = Disable OHTTP
// User preference:
user_pref("network.trr.use_ohttp", false);

// Wait for TRR confirmation
// This setting specifies whether to wait for confirmation before
// resolving DNS requests via TRR, potentially improving accuracy.
// Options:
// true = Wait for confirmation
// false = Do not wait for confirmation
// User preference:
user_pref("network.trr.wait-for-confirmation", false);

// Wait for portal detection
// This setting specifies whether to wait for portal detection
// before resolving DNS requests, which can be useful in captive portal
// scenarios.
// Options:
// true = Wait for portal detection
// false = Do not wait for portal detection
// User preference:
user_pref("network.trr.wait-for-portal", false);

// Show fallback warning option in the TRR UI
// This setting specifies whether to display an option in the TRR user interface
// for showing fallback warnings to users.
// Options:
// true = Show fallback warning option
// false = Do not show fallback warning option
// User preference:
user_pref("network.trr_ui.show_fallback_warning_option", false);

// URL maximum length
// This setting specifies the maximum length for URLs processed by the network
// system, preventing excessively long URLs from causing issues.
// User preference:
user_pref("network.url.max-length", 33554432);

// Simple URI schemes
// This setting can be used to specify simple URI schemes that should be handled
// differently within the network system. It may include custom or less common schemes.
// User preference:
user_pref("network.url.simple_uri_schemes", "");

// Some schemes bypass default URI fallback
// This setting specifies whether certain URI schemes should bypass the
// default URI fallback mechanism, allowing for more flexible handling
// of specific schemes.
// Options:
// true = Allow bypass for some schemes
// false = Do not allow bypass
// User preference:
user_pref("network.url.some_schemes_bypass_defaultURI_fallback", true);

// Strict data URL base64 placement
// This setting specifies whether to enforce strict placement of base64
// data in data URLs, improving compliance with standards.
// Options:
// true = Enable strict placement
// false = Disable strict placement
// User preference:
user_pref("network.url.strict_data_url_base64_placement", true);

// Use default URI for network requests
// This setting specifies whether to use a default URI for network requests
// if no specific URI is provided.
// Options:
// true = Use default URI
// false = Do not use default URI
// User preference:
user_pref("network.url.useDefaultURI", false);

// Allow insecure WebSocket connections from HTTPS pages
// This setting specifies whether to allow insecure WebSocket connections
// (ws://) to be established from secure pages (https://).
// Options:
// true = Allow insecure connections
// false = Do not allow insecure connections
// User preference:
user_pref("network.websocket.allowInsecureFromHTTPS", false);

// Delay failed WebSocket reconnects
// This setting specifies whether to introduce a delay before attempting to
// reconnect a failed WebSocket connection, helping to avoid rapid reconnection
// attempts that could overload the server.
// Options:
// true = Delay failed reconnects
// false = Do not delay
// User preference:
user_pref("network.websocket.delay-failed-reconnects", true);

// Maximum number of WebSocket connections
// This setting specifies the maximum number of simultaneous WebSocket
// connections allowed by the network system.
// User preference:
user_pref("network.websocket.max-connections", 200);

// Maximum size of WebSocket messages
// This setting specifies the maximum size (in bytes) for messages sent
// over WebSocket connections, helping to manage resource usage and
// prevent overload.
// User preference:
user_pref("network.websocket.max-message-size", 2147483647);

// WebSocket close timeout in seconds
// This setting specifies the timeout duration for closing WebSocket connections.
// User preference:
user_pref("network.websocket.timeout.close", 20);

// WebSocket open timeout in seconds
// This setting specifies the timeout duration for opening WebSocket connections.
// User preference:
user_pref("network.websocket.timeout.open", 20);

// WebSocket ping request timeout in milliseconds
// This setting specifies the timeout duration for ping requests sent
// over WebSocket connections.
// User preference:
user_pref("network.websocket.timeout.ping.request", 0);

// WebSocket ping response timeout in seconds
// This setting specifies the timeout duration for waiting for a ping
// response from WebSocket connections.
// User preference:
user_pref("network.websocket.timeout.ping.response", 10);

// WebTransport datagram size in bytes
// This setting specifies the maximum size for datagrams sent using
// WebTransport, allowing for efficient data transmission.
// User preference:
user_pref("network.webtransport.datagram_size", 1200);

// Enable WebTransport datagrams
// This setting specifies whether to enable the use of datagrams in WebTransport
// connections, allowing for more flexible data handling.
// Options:
// true = Enable WebTransport datagrams
// false = Disable WebTransport datagrams
// User preference:
user_pref("network.webtransport.datagrams.enabled", true);

// Enable WebTransport
// This setting specifies whether to enable WebTransport support in the network
// system, allowing for advanced transport capabilities.
// Options:
// true = Enable WebTransport
// false = Disable WebTransport
// User preference:
user_pref("network.webtransport.enabled", true);

// Enable WebTransport redirects
// This setting specifies whether to allow redirects in WebTransport connections,
// which can be useful for handling different transport scenarios.
// Options:
// true = Enable WebTransport redirects
// false = Disable WebTransport redirects
// User preference:
user_pref("network.webtransport.redirect.enabled", false);

// Wi-Fi scanning period in milliseconds
// This setting specifies the period for scanning available Wi-Fi networks,
// allowing for timely updates on connectivity.
// User preference:
user_pref("network.wifi.scanning_period", 60000);

// Partition network state for privacy
// This setting specifies whether to partition the network state for enhanced
// privacy, preventing data leakage between different browsing contexts.
// Options:
// true = Enable partitioned network state
// false = Disable partitioned network state
// User preference:
user_pref("privacy.partition.network_state", true);

// Partition network state for connections with a proxy
// This setting specifies whether to partition the network state for connections
// made through a proxy, enhancing privacy and preventing data leakage.
// Options:
// true = Enable partitioned network state for proxy connections
// false = Disable partitioned network state for proxy connections
// User preference:
user_pref("privacy.partition.network_state.connection_with_proxy", false);

// Partition network state for OCSP cache
// This setting specifies whether to partition the OCSP (Online Certificate Status
// Protocol) cache for enhanced privacy, preventing data leakage between
// different browsing contexts.
// Options:
// true = Enable partitioned OCSP cache
// false = Disable partitioned OCSP cache
// User preference:
user_pref("privacy.partition.network_state.ocsp_cache", true);

// Partition network state for OCSP cache in private mode
// This setting specifies whether to partition the OCSP cache for private
// browsing mode, enhancing privacy during sensitive sessions.
// Options:
// true = Enable partitioned OCSP cache in private mode
// false = Disable partitioned OCSP cache in private mode
// User preference:
user_pref("privacy.partition.network_state.ocsp_cache.pbmode", true);

// Lower network priority for tracking protection
// This setting specifies whether to lower network priority for tracking
// protection features, potentially affecting performance in favor of
// enhanced privacy.
// Options:
// true = Enable lower network priority for tracking protection
// false = Disable lower network priority
// User preference:
user_pref("privacy.trackingprotection.lower_network_priority", false);

// Sync cookie behavior preferences with Firefox Sync
// This setting specifies whether to synchronize cookie behavior preferences
// with Firefox Sync, ensuring consistent behavior across devices.
// Options:
// true = Enable sync for cookie behavior
// false = Disable sync for cookie behavior
// User preference:
user_pref("services.sync.prefs.sync.network.cookie.cookieBehavior", true);

// URL for learning more about TRR skip reasons
// This setting specifies the URL for the "Learn More" page regarding
// reasons for skipping TRR (Trusted Recursive Resolver) requests, providing
// users with information about different scenarios.
// User preference:
user_pref("network.trr_ui.skip_reason_learn_more_url", "https://firefox-source-docs.mozilla.org/networking/dns/trr-skip-reasons.html#");









