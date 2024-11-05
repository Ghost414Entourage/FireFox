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
// When set to true, this preference activates Mozilla's Normandy system, which allows Firefox to run experiments and manage feature flags.
// Normandy can facilitate A/B testing, which means users may receive different versions of features or settings based on their assigned group.
// This helps Mozilla gather data on user behavior and preferences, allowing for informed decisions about which features to implement or improve.
// Additionally, it allows for more dynamic and granular control over settings that may not be immediately available through the standard Firefox preferences interface.
// By enabling Normandy, users may participate in experiments that could lead to enhanced user experiences or performance optimizations,
// although users may also encounter experimental features that are still in testing phases and not yet finalized for general release.
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
user_pref("geo.provider.ms-windows-location", false); // [Windows]

// Enable or disable the use of macOS Core Location services for geolocation (true = enable, false = disable)
// When set to false, this preference disables Firefox's ability to use macOS's Core Location services to determine the user's geographic location.
// This is particularly useful for users who wish to maintain their privacy by preventing applications from accessing their location data.
user_pref("geo.provider.use_corelocation", false); // [macOS]

// Enable or disable the use of GPSD (GPS Daemon) for geolocation on Linux (true = enable, false = disable)
// When set to false, this preference stops Firefox from utilizing GPSD, a service for accessing GPS data on Linux systems.
// This is relevant for users who may not want their location determined through GPS devices connected to their system.
user_pref("geo.provider.use_gpsd", false); // [Linux]

// Enable or disable the use of Geoclue for geolocation on Linux (true = enable, false = disable)
// When set to false, this preference disables the use of Geoclue, which is a framework that provides location information on Linux.
// Disabling this may help users maintain privacy by ensuring that applications cannot determine their location using system resources.
user_pref("geo.provider.use_geoclue", false); // [Linux]

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

















// Controls whether internationalized domain names (IDNs) are displayed in their ASCII (Punycode) form
// IDNs allow domain names to include non-ASCII characters (e.g., accents or scripts like Cyrillic).
// When set to "false," domain names appear in their native script, which may improve readability
// but can increase phishing risk, as visually similar characters may be used maliciously.
// Options:
// true = Display domain names in ASCII (Punycode) for security
// false = Show domain names in native script for readability
// User preference:
user_pref("network.IDN_show_punycode", false);

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

// Disables HTTP authentication for resources triggered by non-web content
// HTTP authentication prompts can sometimes be triggered by non-web content, 
// potentially leading to unintentional credential exposure. Disabling this enhances security.
// Options:
// true = Allow HTTP auth for non-web content resources
// false = Block HTTP auth for non-web content resources
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

// Sorts authentication challenges based on the challenge state
// Some systems may prioritize specific challenges for HTTP authentication 
// to ensure smoother access, and sorting them can help with compatibility.
// Options:
// true = Sort challenges to prioritize in-progress requests
// false = Do not sort challenges; use default ordering
// User preference:
user_pref("network.auth.sort_challenge_in_progress", false);

// Controls subresource HTTP authentication permissions, e.g., images, stylesheets
// Subresource HTTP authentication governs access to embedded content like images or CSS, 
// which may need to access restricted resources in certain contexts.
// Options:
// 0 = Disable subresource HTTP authentication
// 1 = Allow subresource HTTP auth only for same-origin resources
// 2 = Allow for cross-origin with restrictions
// User preference:
user_pref("network.auth.subresource-http-auth-allow", 2);

// Allows cross-origin HTTP authentication for subresource images
// This option can prevent credentials from being sent with cross-origin image requests, 
// reducing the risk of credential exposure across domains.
// Options:
// true = Allow cross-origin HTTP auth for images
// false = Disable for better security
// User preference:
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);

// Suppresses HTTP authentication prompts when X-Frame-Options (XFO) check fails
// XFO helps prevent clickjacking by allowing content to specify if it should only be displayed in certain frames.
// Suppressing authentication prompts in these cases improves user experience but may impact access to content.
// Options:
// true = Suppress auth prompts on XFO failures
// false = Show auth prompts regardless of XFO failures
// User preference:
user_pref("network.auth.supress_auth_prompt_for_XFO_failures", true);

// Controls the use of HTTP redirects when retrying authentication requests
// Redirects may improve user flow by streamlining access on retry but could also cause security concerns 
// if misconfigured on some servers.
// Options:
// true = Use redirects for authentication retries
// false = Disable redirects for authentication retries
// User preference:
user_pref("network.auth.use_redirect_for_retries", false);

// Allows NTLM authentication for non-FQDN (fully qualified domain name) addresses
// Non-FQDN addresses are often local or private network addresses, and enabling this preference 
// allows NTLM authentication even without fully qualified domain names, but could risk exposing credentials.
// Options:
// true = Allow NTLM auth for non-FQDN addresses
// false = Restrict NTLM auth to FQDNs only
// User preference:
user_pref("network.automatic-ntlm-auth.allow-non-fqdn", false);

// Permits automatic NTLM authentication with proxy servers
// NTLM authentication with proxies can streamline secure network connections in corporate networks.
// Options:
// true = Allow NTLM auth for proxies
// false = Restrict NTLM auth; do not use with proxies
// User preference:
user_pref("network.automatic-ntlm-auth.allow-proxies", true);

// Lists trusted URIs for automatic NTLM authentication
// This is a comma-separated list of URLs where NTLM authentication is automatically attempted, 
// which can enhance user experience in trusted environments but may expose credentials if misconfigured.
// Example format: "https://example.com,https://anotherdomain.com"
// User preference:
user_pref("network.automatic-ntlm-auth.trusted-uris", "");

// Sets the count of network buffer cache
// This preference determines the number of buffer caches maintained, affecting network performance 
// depending on resource needs.
// Default value: 24
// User preference:
user_pref("network.buffer.cache.count", 24);

// Defines the size of each network buffer cache in bytes
// The buffer cache size can impact network performance and memory usage, especially with large data transfers.
// Default value: 32768 (32KB)
// User preference:
user_pref("network.buffer.cache.size", 32768);

// Manages a workaround for a network cache bug identified as bug 1708673
// This setting can enable or disable the specific fix for this bug. Consult release notes for more details.
// Options:
// true = Enable workaround for bug 1708673
// false = Disable workaround
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

// Enables the captive portal service
// Captive portal service helps identify networks requiring authentication, like those in cafes or airports.
// Options:
// true = Enable captive portal detection
// false = Disable captive portal detection
// User preference:
user_pref("network.captive-portal-service.enabled", true);

// Sets the maximum interval (in milliseconds) between captive portal detection attempts
// Defines the upper limit for time intervals in detecting captive portals to maintain network access.
// Default value: 1500000 (1,500 seconds)
// User preference:
user_pref("network.captive-portal-service.maxInterval", 1500000);

// Sets the minimum interval (in milliseconds) between captive portal detection attempts
// Determines the shortest allowed time between checks, optimizing response times when access issues arise.
// Default value: 60000 (60 seconds)
// User preference:
user_pref("network.captive-portal-service.minInterval", 60000);

// Specifies the domain for DNS-over-HTTPS (DoH) in connectivity service
// This is the domain used for DoH requests, ensuring secure, encrypted DNS lookups.
// Default value: cloudflare-dns.com
// User preference:
user_pref("network.connectivity-service.DNS_HTTPS.domain", "cloudflare-dns.com");

// Sets the domain for IPv4 DNS in connectivity service
// Used to verify network connectivity via DNS, which helps detect online status for IPv4-based connections.
// Default value: example.org
// User preference:
user_pref("network.connectivity-service.DNSv4.domain", "example.org");

// Sets the domain for IPv6 DNS in connectivity service
// Similar to IPv4, this domain is used to verify connectivity, specifically for IPv6 connections.
// Default value: example.org
// User preference:
user_pref("network.connectivity-service.DNSv6.domain", "example.org");

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

// Enables CHIPS (Cookies Having Independent Partitioned State) for enhanced cookie partitioning
// CHIPS aims to improve privacy by partitioning cookies for third-party sites to isolate data per site. 
// Disabling it may result in fewer privacy protections.
// Options:
// true = Enable CHIPS for cookie isolation
// false = Disable CHIPS
// User preference:
user_pref("network.cookie.CHIPS.enabled", false);

// Blocks cookies containing Unicode characters
// Unicode characters in cookies can cause issues in cross-domain contexts. Blocking them can prevent 
// potential security risks or data corruption when dealing with internationalized sites.
// Options:
// true = Block Unicode characters in cookies
// false = Allow Unicode characters
// User preference:
user_pref("network.cookie.blockUnicode", false);

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

// Enables partition limit for CHIPS, enforcing the set byte capacity
// When enabled, CHIPS enforces the byte limit for partitioned cookies, helping to control storage usage and 
// maintain privacy boundaries across sites.
// Options:
// true = Enforce byte limit
// false = No limit enforcement
// User preference:
user_pref("network.cookie.chips.partitionLimitEnabled", true);

// Configures the cookie behavior for regular browsing mode
// Determines how cookies are handled to balance privacy and functionality:
// 0 = Accept all cookies
// 1 = Block third-party cookies, only cookies from the originating server are allowed. 
// 2 = Block third-party cookies (with stricter restrictions) No cookies are allowed. 
// 3 = Third-party cookies are allowed only if that site has stored cookies already from a previous visit 
// 4 = Isolate cookies by first-party domain, New Cookie Jar policy (prevent storage access to trackers) 
// 5 = Restrict third-party tracking cookies
// Default: 5 (restrict tracking cookies)
// User preference:
user_pref("network.cookie.cookieBehavior", );

// Enables opt-in partitioning for cookie handling in normal browsing
// Opt-in partitioning allows cookies to be partitioned by the site, maintaining stricter privacy measures 
// by isolating cookie storage across different first-party sites.
// Options:
// true = Enable opt-in partitioning
// false = Disable opt-in partitioning
// User preference:
user_pref("network.cookie.cookieBehavior.optInPartitioning", false);

// Enables opt-in partitioning for cookie handling in private browsing mode
// Similar to regular browsing, this isolates cookies by partition in private browsing mode, but is opt-in.
// Options:
// true = Enable in private mode
// false = Disable in private mode
// User preference:
user_pref("network.cookie.cookieBehavior.optInPartitioning.pbmode", false);

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

// Caps the maximum age of cookies in seconds
// Limits how long cookies can remain in storage by setting an upper limit on their lifespan, which can improve 
// privacy and manage stale data.
// Default value: 34560000 seconds (approximately 400 days)
// User preference:
user_pref("network.cookie.maxageCap", 34560000);

// Disables persistent storage of cookies
// When set to true, cookies will not be stored persistently, meaning they will be session-only and cleared 
// upon browser close, enhancing privacy.
// Options:
// true = Disable persistent storage (session-only cookies)
// false = Enable persistent storage
// User preference:
user_pref("network.cookie.noPersistentStorage", false);

// Prevents cookies from being set via multipart responses
// Multipart responses can contain multiple parts in a single response. Blocking cookies from being set 
// in these responses can reduce tracking risks and improve security.
// Options:
// true = Block cookies from multipart responses
// false = Allow cookies from multipart responses
// User preference:
user_pref("network.cookie.prevent_set_cookie_from_multipart", true);

// Sets the quota for cookie storage per host in bytes
// Limits the amount of storage that cookies can consume per host, helping to manage storage efficiently 
// and avoid performance issues from excessive cookie storage.
// Default value: 150 bytes per host
// User preference:
user_pref("network.cookie.quotaPerHost", 150);

// Ensures SameSite cookie policies for cross-site iframes
// Enforces that cross-site cookies in iframes respect SameSite policies, reducing potential tracking 
// and enhancing privacy by controlling cross-site data access.
// Options:
// true = Enforce SameSite policies in cross-site iframes
// false = Do not enforce
// User preference:
user_pref("network.cookie.sameSite.crossSiteIframeSetCheck", true);

// Makes Lax the default SameSite policy for cookies
// SameSite=Lax restricts cookies to be sent only with top-level navigation. When disabled, the default is None,
// allowing cookies in all contexts, but this can increase cross-site tracking risks.
// Options:
// true = Use Lax as the default
// false = Default to None
// User preference:
user_pref("network.cookie.sameSite.laxByDefault", false);

// Allows redirects through a boomerang-type request under SameSite=Lax
// Boomerang redirects are a special type of redirect, often used for analytics. Allowing them with Lax helps maintain 
// compatibility with these redirects while preserving some privacy.
// Options:
// true = Allow boomerang redirects
// false = Disallow boomerang redirects
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

// Requires secure connections for SameSite=None cookies
// Enforces that SameSite=None cookies are only sent over secure (HTTPS) connections to prevent cross-site 
// tracking over unencrypted channels.
// Options:
// true = Require secure for SameSite=None
// false = Do not require secure
// User preference:
user_pref("network.cookie.sameSite.noneRequiresSecure", true);

// Makes SameSite checks scheme-aware
// Schemeful SameSite treats cookies differently based on HTTP vs. HTTPS requests, adding a layer of security 
// and preventing unintended cross-protocol data sharing.
// Options:
// true = Enable scheme-aware SameSite checks
// false = Disable scheme-aware SameSite checks
// User preference:
user_pref("network.cookie.sameSite.schemeful", false);

// Sets the threshold time in seconds before a cookie is considered stale
// Determines how long a cookie can remain inactive before it is marked as "stale," 
// which may affect whether it's automatically updated or revalidated.
// Default value: 60 seconds
// User preference:
user_pref("network.cookie.staleThreshold", 60);

// Uses the server's timestamp for cookies instead of the local time
// This controls whether the browser should use the time from the server when setting 
// cookies, which can affect expiry times and consistency across time zones.
// Options:
// true = Use server time for cookies
// false = Use local time
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

// Allows CORS preflight requests to include client certificates
// Controls whether Cross-Origin Resource Sharing (CORS) preflight requests can 
// use client certificates, which are typically used for authentication and encryption.
// Options:
// true = Allow client certificates in preflight requests
// false = Do not allow
// User preference:
user_pref("network.cors_preflight.allow_client_cert", false);

// Covers authorization with wildcard requests in CORS preflight checks
// Simplifies authorization by allowing wildcard requests (*) to cover 
// authorization headers, streamlining CORS policy without compromising security.
// Options:
// true = Allow authorization with wildcards
// false = Require specific permissions
// User preference:
user_pref("network.cors_preflight.authorization_covered_by_wildcard", true);

// Enables decompression off the main thread
// Moves data decompression tasks off the main thread, which can improve 
// performance by reducing the load on the main processing thread.
// Options:
// true = Enable off-main-thread decompression
// false = Disable
// User preference:
user_pref("network.decompression_off_mainthread2", true);

// Sets the minimum data size in bytes for off-main-thread decompression
// Specifies the minimum amount of data (in bytes) for which off-main-thread decompression 
// will be used, improving performance for large data transfers.
// Default value: 512 bytes
// User preference:
user_pref("network.decompression_off_mainthread_min_size", 512);

// Enables offline mode on localhost
// Determines whether the browser should treat `localhost` as offline when in offline mode,
// which can affect local development and testing.
// Options:
// true = Disable localhost in offline mode
// false = Keep localhost accessible
// User preference:
user_pref("network.disable-localhost-when-offline", false);

// Blocks DNS requests for `.onion` domains
// Prevents requests to `.onion` domains from being resolved via DNS, which is intended to 
// protect privacy and prevent accidental leaks of Tor-related connections.
// Options:
// true = Block `.onion` DNS requests
// false = Allow
// User preference:
user_pref("network.dns.blockDotOnion", true);

// Copies DNS request strings before calling the resolver
// Ensures that DNS request strings are copied before being passed to the DNS resolver, 
// which may reduce potential issues or conflicts during name resolution.
// Options:
// true = Enable DNS request string copying
// false = Disable
// User preference:
user_pref("network.dns.copy_string_before_call", true);

// Disables IPv6 DNS resolution
// Turns off DNS resolution over IPv6, which can be useful if IPv6 connectivity 
// is not stable or necessary in certain networks.
// Options:
// true = Disable IPv6 resolution
// false = Enable IPv6 resolution
// User preference:
user_pref("network.dns.disableIPv6", false);

// Disables DNS prefetching
// Prefetches DNS information for links in advance to reduce load times; disabling this 
// feature can reduce network requests and improve privacy.
// Options:
// true = Disable DNS prefetching
// false = Enable DNS prefetching
// User preference:
user_pref("network.dns.disablePrefetch", false);

// Disables DNS prefetching for HTTPS pages
// Controls whether DNS prefetching should be disabled specifically for HTTPS pages, 
// which can enhance privacy by avoiding unnecessary DNS lookups on secure pages.
// Options:
// true = Disable DNS prefetching for HTTPS
// false = Allow DNS prefetching for HTTPS
// User preference:
user_pref("network.dns.disablePrefetchFromHTTPS", false);

// Disables DNS resolution entirely
// Turns off DNS lookups in the browser, which can be used for privacy or testing 
// purposes but will prevent access to websites by their domain names.
// Options:
// true = Disable DNS resolution
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

// Enables Encrypted Client Hello (ECH) configuration
// Allows the browser to use ECH, which enhances privacy by encrypting DNS request 
// information, preventing exposure to intermediaries during the connection process.
// Options:
// true = Enable ECH
// false = Disable ECH
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

// Forces use of HTTPS records for DNS resolution
// Requires the browser to use HTTPS Resource Records (RR) when available, improving 
// security by using secure DNS over HTTPS (DoH) lookups exclusively.
// Options:
// true = Enforce HTTPS RR
// false = Allow other RR types
// User preference:
user_pref("network.dns.force_use_https_rr", false);

// Enables retrieval of Time-to-Live (TTL) information with DNS responses
// Allows the browser to obtain TTL data for DNS records, helping it determine how 
// long to cache the DNS information before refreshing it.
// Options:
// true = Enable TTL retrieval
// false = Disable TTL retrieval
// User preference:
user_pref("network.dns.get-ttl", true);

// Enables HTTP/3 compatibility for ECH configuration
// Allows ECH settings to work with the HTTP/3 protocol, optimizing secure DNS 
// configuration even when using newer, faster protocols.
// Options:
// true = Enable HTTP/3 compatibility for ECH
// false = Disable
// User preference:
user_pref("network.dns.http3_echconfig.enabled", true);

// Sets the fallback timeout for HTTP/3 fast fallback
// Defines the time in milliseconds that the browser waits before falling back from 
// HTTP/3 to an alternative protocol when the HTTPS RR query fails. Default is 50 ms.
// User preference:
user_pref("network.dns.httpssvc.http3_fast_fallback_timeout", 50);

// Resets the DNS HTTPS exclusion list
// Clears any exclusion list for HTTPS DNS queries, ensuring no domains are permanently 
// excluded from DNS-over-HTTPS (DoH) resolution.
// Options:
// true = Reset the exclusion list
// false = Do not reset
// User preference:
user_pref("network.dns.httpssvc.reset_exclustion_list", true);

// Specifies domains to be resolved only over IPv4
// This setting allows you to define specific domains that should exclusively use 
// IPv4 resolution, which may improve compatibility in IPv4-only environments.
// User preference (example format: "example.org,example.com"):
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

// Mock domain for HTTPS Resource Record (RR) tests
// Used for testing or simulation purposes to override HTTPS RR settings for a specific 
// domain, simulating HTTPS DNS resolution behavior without affecting live settings.
// User preference (example: "testdomain.com"):
user_pref("network.dns.mock_HTTPS_RR_domain", "");

// Determines whether the local DNS resolver treats "localhost" as native
// When true, treats "localhost" as an internal address, useful for setups where local 
// testing and development environments rely on "localhost" resolution.
// Options:
// true = Treat as native
// false = Do not treat as native
// User preference:
user_pref("network.dns.native-is-localhost", false);

// Enables native HTTPS queries for DNS
// Allows the DNS resolver to directly handle HTTPS queries, improving privacy and 
// potentially bypassing intermediaries.
// Options:
// true = Enable native HTTPS queries
// false = Disable
// User preference:
user_pref("network.dns.native_https_query", false);

// Allows native HTTPS queries in automated environments
// Specifically enables native HTTPS DNS handling in automated testing environments, 
// ensuring that DNS queries use HTTPS in CI/CD or test setups.
// Options:
// true = Enable in automation
// false = Disable in automation
// User preference:
user_pref("network.dns.native_https_query_in_automation", false);

// Enables native HTTPS queries on Windows 10 and later
// Uses the native DNS resolver for HTTPS queries in Windows 10+, which can improve 
// performance by reducing reliance on third-party DNS services.
// Options:
// true = Enable on Windows 10+
// false = Disable
// User preference:
user_pref("network.dns.native_https_query_win10", false);

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

// Enables local DNS resolution while offline
// Allows localhost-related DNS queries to resolve even if the network connection is 
// offline, useful for local development or testing.
// Options:
// true = Enable localhost resolution offline
// false = Disable
// User preference:
user_pref("network.dns.offline-localhost", true);

// Refreshes DNS cache only when a fresh connection is made
// Limits DNS cache refreshes to instances where a new connection is established, which 
// helps reduce DNS query traffic and improve efficiency.
// Options:
// true = Only refresh on new connections
// false = Refresh more frequently
// User preference:
user_pref("network.dns.only_refresh_on_fresh_connection", true);

// Enables port-prefixed QNAME HTTPS Resource Record (RR) handling
// When true, allows DNS queries to include the port in the QNAME format for HTTPS RR 
// lookups, potentially enhancing routing and security for applications that utilize 
// specific ports for HTTPS services.
// Options:
// true = Enable port-prefixed QNAME handling
// false = Disable
// User preference:
user_pref("network.dns.port_prefixed_qname_https_rr", false);

// Specifies preference for IPv6 over IPv4
// Controls whether the system prioritizes IPv6 addresses when available. Setting this 
// to true can improve connectivity for networks that support IPv6, but may introduce 
// compatibility issues with IPv4-only services.
// Options:
// true = Prefer IPv6
// false = Prefer IPv4
// User preference:
user_pref("network.dns.preferIPv6", false);

// Controls DNS prefetching via proxy
// When enabled, allows the use of a proxy for DNS prefetching, which can speed up 
// web browsing by resolving domain names in advance, but may raise privacy concerns 
// if not managed carefully.
// Options:
// true = Enable prefetch via proxy
// false = Disable
// User preference:
user_pref("network.dns.prefetch_via_proxy", false);

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

// Enables upgrade of DNS responses with HTTPS Resource Records (RR)
// When true, permits the use of HTTPS RR for upgrading existing DNS connections to 
// secure ones, improving security and privacy for DNS lookups.
// Options:
// true = Enable upgrade with HTTPS RR
// false = Disable
// User preference:
user_pref("network.dns.upgrade_with_https_rr", true);

// Allows the use of HTTPS RR as alternative service (AltSvc)
// Configures whether HTTPS Resource Records can be utilized for alternative service 
// resolutions, allowing for flexible handling of service requests and improving 
// connectivity options.
// Options:
// true = Use HTTPS RR as AltSvc
// false = Do not use
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

// Enables early hints for resource loading
// When enabled, allows the server to send early hints for resources that may be needed 
// for a page, potentially improving loading speed and user experience.
// Options:
// true = Enable early hints
// false = Disable
// User preference:
user_pref("network.early-hints.enabled", true);

// Enables early hints over HTTP/1.1
// Configures support for early hints when using HTTP/1.1, facilitating improved 
// performance by pre-loading certain resources.
// Options:
// true = Enable early hints over HTTP/1.1
// false = Disable
// User preference:
user_pref("network.early-hints.over-http-v1-1.enabled", true);

// Sets the timeout for parent connection in early hints (milliseconds)
// Configures the maximum duration to wait for a connection to a parent resource 
// when processing early hints, which can impact how quickly resources are fetched 
// and displayed to the user.
// User preference:
user_pref("network.early-hints.parent-connect-timeout", 10000);

// Enables preconnecting to resources for early hints
// When true, allows the browser to pre-establish connections to resources that are 
// hinted by the server, potentially improving page load performance by reducing 
// connection time when the resource is needed.
// Options:
// true = Enable preconnect for early hints
// false = Disable
// User preference:
user_pref("network.early-hints.preconnect.enabled", true);

// Sets the maximum number of preconnections for early hints
// Defines the upper limit of simultaneous connections that can be preestablished 
// to resources based on early hints, helping to balance resource usage and load 
// performance.
// User preference:
user_pref("network.early-hints.preconnect.max_connections", 10);

// Enables cache partitioning for cross-origin fetch requests
// When enabled, ensures that cached resources are partitioned based on their 
// origin, improving privacy and security by preventing cross-origin data leakage 
// during fetch operations.
// Options:
// true = Enable cache partitioning for cross-origin
// false = Disable
// User preference:
user_pref("network.fetch.cache_partition_cross_origin", true);

// Configures fetch API to omit credentials by default
// When true, specifies that the fetch API will not include credentials (such as 
// cookies or HTTP authentication) in requests by default, which can enhance 
// security but may require adjustments for certain sites.
// Options:
// true = Omit credentials by default
// false = Include credentials by default
// User preference:
user_pref("network.fetch.systemDefaultsToOmittingCredentials", true);

// Adjusts urgency for fetch priority
// When enabled, allows the system to modify the urgency level of fetch requests 
// based on their context, improving the responsiveness of network operations and 
// resource loading.
// Options:
// true = Adjust urgency
// false = Do not adjust
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

// Enables fetch priority adjustments
// Controls whether fetch priority adjustments are enabled, allowing the browser to 
// optimize resource loading based on specified priority rules.
// User preference:
user_pref("network.fetchpriority.enabled", true);

// Specifies the workstation name for NTLM authentication
// Sets the name of the workstation used during NTLM authentication, which may be 
// required for proper authentication in certain network environments.
// User preference:
user_pref("network.generic-ntlm-auth.workstation", "WORKSTATION");

// Sets the HTTP Accept header
// Configures the Accept HTTP header, which tells the server which content types 
// the client can understand, affecting how responses are formatted by the server.
// User preference:
user_pref("network.http.accept", "");

// Specifies the HTTP Accept-Encoding header for requests
// Configures the Accept-Encoding HTTP header, indicating the content-encoding 
// methods (like gzip and deflate) that the client supports, allowing the server 
// to compress responses accordingly.
// User preference:
user_pref("network.http.accept-encoding", "gzip, deflate");

// Specifies the HTTP Accept-Encoding header for secure requests
// Configures the Accept-Encoding HTTP header for secure (HTTPS) requests, 
// indicating additional compression methods (like br for Brotli and zstd) that 
// the client can handle, optimizing data transfer over secure connections.
// User preference:
user_pref("network.http.accept-encoding.secure", "gzip, deflate, br, zstd");

// Includes images in the Accept header
// Controls whether image types are included in the Accept HTTP header sent to 
// the server, affecting how the server responds with images and other resources.
// User preference:
user_pref("network.http.accept_include_images", false);

// Enables active tab priority for HTTP requests
// Controls whether HTTP requests from the currently active tab are prioritized 
// over those from background tabs, enhancing the perceived performance of the 
// active tab's content loading.
// User preference:
user_pref("network.http.active_tab_priority", true);

// Enables ALTSVC (Alternative Services) support
// Configures whether the ALTSVC HTTP/2 feature is enabled, allowing a server 
// to specify alternative connection options to improve load balancing and 
// performance.
// User preference:
user_pref("network.http.altsvc.enabled", true);

// Disables ALTSVC origin error checking
// Controls whether to perform origin error checking for ALTSVC, which can 
// help ensure that the alternative service is from the expected origin, 
// increasing security. 
// User preference:
user_pref("network.http.altsvc.oe", false);

// Enables proxy checks for ALTSVC
// Configures whether to check the proxy settings before using ALTSVC, 
// ensuring that alternative services are compatible with the current proxy 
// configuration.
// User preference:
user_pref("network.http.altsvc.proxy_checks", true);

// Enforces HTTP association requests
// Controls whether to enforce the association request policy, which governs 
// how clients request related resources, potentially improving the efficiency 
// of resource loading.
// User preference:
user_pref("network.http.assoc-req.enforce", false);

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

// Specifies the default socket type for HTTP connections
// Allows the specification of the default socket type used for HTTP connections, 
// affecting how the network stack manages connections.
// User preference:
user_pref("network.http.default-socket-type", "");

// Enables HTTP diagnostics
// Controls whether HTTP diagnostic features are enabled, which can assist 
// developers in troubleshooting network issues by providing detailed 
// connection information.
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

// Disables early data on HTTP/3 connections upon errors
// Controls whether to disable the use of early data in HTTP/3 connections 
// if an error occurs, improving security by preventing potential issues with 
// request processing during early data transmissions.
// Options:
// true = Disable early data on error
// false = Allow early data even if errors occur
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

// Trusts HTTP encoding when using HTTPS
// Controls whether HTTP encoding (e.g., content encoding like gzip) is considered 
// trustworthy only when using HTTPS, ensuring that potentially unsafe encodings 
// are not accepted over insecure connections.
// Options:
// true = Trust HTTP encodings only over HTTPS
// false = Trust HTTP encodings regardless of the protocol
// User preference:
user_pref("network.http.encoding.trustworthy_is_https", true);

// Enforces framing rules for HTTP/1.1 connections
// Configures the enforcement of framing rules for HTTP/1.1 connections, 
// which can impact how data is framed and processed between client and server.
// Options:
// true = Enforce strict framing rules
// false = Do not enforce strict framing rules
// User preference:
user_pref("network.http.enforce-framing.http1", false);

// Allows soft framing enforcement for HTTP connections
// Configures whether to apply soft framing rules, which are less strict than 
// hard enforcement, allowing for more flexible handling of HTTP framing while 
// still maintaining some level of compliance.
// Options:
// true = Apply soft framing rules
// false = Do not apply soft framing rules
// User preference:
user_pref("network.http.enforce-framing.soft", true);

// Enforces strict chunked encoding for HTTP connections
// Controls whether strict chunked encoding rules are enforced in HTTP responses, 
// which can ensure that data is properly chunked for transmission and enhance 
// compatibility with various clients and servers.
// Options:
// true = Enforce strict chunked encoding
// false = Do not enforce strict chunked encoding
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

// Enables fast fallback to IPv4 connections
// Controls whether the client should quickly switch to IPv4 connections 
// when IPv6 connectivity issues are detected, enhancing the likelihood of 
// establishing successful connections in dual-stack environments.
// Options:
// true = Enable fast fallback to IPv4
// false = Do not enable fast fallback to IPv4
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
