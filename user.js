/*
 * ================================
 * BEGIN 12BYTES.ORG CUSTOMIZATIONS
 * ================================
 *
 * name     : 12bytes.org atomGit/ghacks-user.js
 * credit   : ghacksuserjs/ghacks-user.js (https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js)
 * web      : Firefox/Gecko Configuration Guide for Privacy Freaks and Performance Buffs (http://12bytes.org/articles/tech/firefox-gecko-config-for-privacy-freaks-and-and-performance-buffs)
 * code     : https://github.com/atomGit/ghacks-user.js
 * version  : 56r1 (based on Firefox v56)
 * author   : 12bytes.org
 *
 * IMPORTANT: this user.js is a suppliment that is intended to be appended to the ghacksuserjs/ghacks-user.js user.js file (https://github.com/ghacksuserjs/ghacks-user.js/blob/master/user.js)
 *
 * IMPORTANT: any changes to this file should be made in your custom preferences section at the end of this file between "BEGIN USER CUSTOMIZATIONS" and "END USER CUSTOMIZATIONS"
 *
*/

/*
 * === 12BYTES.ORG GHACKS DIFFS *** TEMPORARY *** ===
 *
 * these settings are temporary changes to the ghacks prefs which, in my case at least, cause problems
*/

user_pref("_user.js.parrot", "syntax error @ 12BYTES.ORG GHACKS DIFFS *** TEMPORARY ***");

user_pref("privacy.firstparty.isolate", false);           // 'true' breaks functionality of apparently several add-ons that deal with deleting cookies, local and indexDB storage
user_pref("ui.use_standins_for_native_colors", false);    // 'true' cause tool-tip text to be the same color as the background color, at least on Linux

/*
 * === 12BYTES.ORG GHACKS DIFFS ===
 *
 * these prefs are duplicates of the ghacks settings above, but ones which i set differently
*/

user_pref("_user.js.parrot", "syntax error @ 12BYTES.ORG GHACKS DIFFS");

user_pref("browser.bookmarks.max_backups", 5);                  // i don't mind keeping a few extra backups of my bookmarks
user_pref("browser.display.use_document_fonts", 1);             // '0' breaks the display of uBlock and uMatrix on Linux
user_pref("browser.download.forbid_open_with", false);          // allow the `open with` option when downloading a file
user_pref("browser.formfill.enable", true);                     // remember form and search history
user_pref("browser.sessionstore.interval", 15000000);           // essentially disable session store (restore session after browser crash) to reduce disk writes
user_pref("browser.sessionstore.max_tabs_undo", 3);             // allow to restore closed tabs
user_pref("browser.urlbar.autoFill", true);                     // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.autoFill.typed", true);               // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.suggest.bookmark", true);             // allow auto-complete of text entered in the address bar
user_pref("browser.urlbar.suggest.history", true);              // allow auto-complete of text entered in the address bar
user_pref("dom.event.clipboardevents.enabled", true);           // `false' breaks TinyMCE editor paste (Ctrl+V) such as is used by WordPress, possibly others
user_pref("dom.popup_allowed_events", "change click dblclick mouseup notificationclick reset submit touchend");  // allow all default JS pop-up events
user_pref("dom.workers.enabled", true);                         // unbreak coin-hive.com login, some other sites
user_pref("full-screen-api.enabled", true);                     // enable full-screen video capability
user_pref("layout.css.visited_links_enabled", true);            // though it is a privacy trade-off, differentiating between visited and not visited links is important to me
user_pref("layout.spellcheckDefault", 2);                       // enable spell-check for single line inputs
//user_pref("javascript.options.wasm", true);                   // unbreak coin-hive.com login
user_pref("media.autoplay.enabled", true);                      // `false' breaks Vimeo video playback, possibly others
user_pref("network.cookie.cookieBehavior", 1);                  // allow all 1st party cookies by default and control them with an add-on
user_pref("privacy.clearOnShutdown.history", false);            // keep history on shutdown
user_pref("privacy.clearOnShutdown.formdata", false);           // keep form data on shutdown
user_pref("privacy.cpd.formdata", false);                       // don't select form data when clearing history manually
user_pref("privacy.cpd.history", false);                        // don't select history item when clearing history manually
user_pref("security.tls.version.min", 1);                       // in my case a value of '3' breaks cPanel login
user_pref("security.OCSP.enabled", 0);                          // disable on-line verification of SSL certificates (can cause sites to load slower or not at all if the service is down - you should typically NOT disable this)
user_pref("webgl.disabled", false);                             // `true` will break some sites including Google Earth Street View on Google Maps - WenGL appears to be dependant upon JS being enabled (which should be disabled globally by default) so if you trust a site enough to enable JS, you may as well enable WebGL as well since the security risks with WebGL appear to be far less of a problem than JS
user_pref("webgl.disable-extensions", false);                   // 'true' breaks Google Earth Street View on Google Maps
user_pref("webgl.min_capability_mode", false);                  // 'true' breaks Google Earth Street View on Google Maps

/*
 * === 12BYTES.ORG LINUX SPECIFIC ===
 *
 * these settings are specific to Linux Mint, but should work with any Debian based distro which uses the APT (Advanced Package Tool) package manager - if you`re not running a Debian-based distro, or not running Linux, comment these out
*/

user_pref("_user.js.parrot", "syntax error @ 12BYTES.ORG LINUX SPECIFIC");

user_pref("network.protocol-handler.app.apt", "/usr/bin/apturl");       // path to APT URL handler
user_pref("network.protocol-handler.app.apt+http", "/usr/bin/apturl");  // path to APT URL handler
user_pref("network.protocol-handler.warn-external.apt", true);
user_pref("network.protocol-handler.warn-external.apt+http", true);

/*
 * === 12BYTES.ORG MISC ===
*/

user_pref("_user.js.parrot", "syntax error @ 12BYTES.ORG MISC");

user_pref("accessibility.typeaheadfind", false);                        // whether to open the find bar to search for text as soon as you start typing
user_pref("browser.feeds.showFirstRunUI", false);                       // don't show feed intro when first subscribing to a news feed
user_pref("browser.startup.homepage", "http://12bytes.org/");           // page to display when clicking the Home button
user_pref("browser.startup.page", 3);                                   // page to display on startup - 1=home, 2=blank, 3=restore last session
user_pref("browser.triple_click_selects_paragraph", false);             // whether to select paragraphs when triple clicked
user_pref("browser.urlbar.formatting.enabled", false);                  // disable domain highlighting in the location bar
user_pref("devtools.toolbox.zoomValue", "1.3");                         // font size for the Developers Toolbox
user_pref("dom.event.contextmenu.enabled", false);                      // avoids having to press Shift key to display the browser context menu which may be replaced by JS
user_pref("extensions.systemAddon.update.url", "");                     // disallow updates for system add-ons (Firefox Features) that ship with the browser - should probably not make this change if you use system add-ons
user_pref("full-screen-api.warning.timeout", 0);                        // disable full-screen warning
user_pref("full-screen-api.warning.delay", 0);                          // how long to display a warning ("YouTube is now Fullscreen") when a site enters full-screen mode - `0` disables the warning
user_pref("general.autoScroll", false);                                 // Whether to enable auto-scrolling (middle-click on a page to display scroll map)
user_pref("image.animation_mode", "once");                              // disable repetitive image (GIF) animation
user_pref("layout.css.devPixelsPerPx", "1.3");                          // global UI zoom level - this affects toolbars, icons, web pages, etc.
user_pref("layout.word_select.eat_space_to_next_word", false);          // whether to include spaces after a word when double clicking to select the word
user_pref("layout.word_select.stop_at_punctuation", true);              // whether to stop selection at a punctuation when double clicking to select a word
user_pref("mousewheel.with_shift.action", 0);                           // don't do anything when the Shift key is used with the mouse wheel
user_pref("nglayout.enable_drag_images", false);                        // whether images can be dragged - also seems to have an effect on highlighting and dragging text - this feature can be very annoying, especially for website editors/admins
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);  // allow WebExtensions to work on websites operated by Mozilla (FF 57 +)
user_pref("reader.parse-on-load.enabled", false);                       // disable Reader

/*
 * === 12BYTES.ORG TABS ===
*/

user_pref("_user.js.parrot", "syntax error @ 12BYTES.ORG TABS");

user_pref("accessibility.tabfocus", 3);                         // 3: Tab key focuses text fields and all other form elements
user_pref("browser.link.open_newwindow", 1);                    // controls when a new window/tab should be opened - 1=open links that open in a new window in the current tab, 2=open links that open in a new window in a new window, 3=open links that open in a new window in a new tab in the current window
user_pref("browser.link.open_newwindow.override.external", 3);  // open links from external programs in: -1=default, 1=the current tab, 2=a new window, 3=a new tab
user_pref("browser.sessionhistory.max_entries", 5);             // tab specific max number of pages that can be traversed when moving forward/backward in history - affects total memory consumption
user_pref("browser.tabs.closeWindowWithLastTab", false);        // don't quit the browser when the last tab is closed
user_pref("browser.tabs.loadDivertedInBackground", true);       // cause links opened from external programs to open in a new background tab
user_pref("browser.tabs.loadInBackground", false);              // focus new tabs instead of loading them in the background

/*
 * === 12BYTES.ORG SEARCH ENGINES ===
*/

user_pref("browser.search.param.yahoo-fr", "");     // sanitize Yahoo
user_pref("browser.search.param.yahoo-fr-ja", "");  // ^

/*
 * === 12BYTES.ORG FONTS ===
*/

user_pref("font.minimum-size.x-western", 14);    // minimum font size
user_pref("font.size.fixed.x-western", 16);      // monospace font size
user_pref("font.size.variable.x-western", 18);   // default font size

/*
 * === 12BYTES.ORG SMOOTH SCROLLING ===
 *
 * these settings provide silky-smooth scrolling that adjusts dynamically according to mouse wheel speed
*/

user_pref("_user.js.parrot", "syntax error @ 12BYTES.ORG SMOOTH SCROLLING");

user_pref("general.smoothScroll", true);                            // enable/disable smooth scrolling
user_pref("general.smoothScroll.lines", true);                      // enable/disable smooth line scrolling (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMaxMS", 400);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.lines.durationMinMS", 200);         // smooth the start/end of line scrolling operations in ms (up/down arrow/page keys)
user_pref("general.smoothScroll.mouseWheel", true);                 // enable/disable smooth scrolling with mouse wheel
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 300);    // smooth the start/end of scrolling operations in ms
user_pref("general.smoothScroll.other", true);                      // enable/disable other smooth scrolling (Home/End keys)
user_pref("general.smoothScroll.other.durationMaxMS", 400);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.other.durationMinMS", 200);         // smooth the start/end of other scrolling operations in ms
user_pref("general.smoothScroll.pages", true);                      // enable/disable page smooth scrolling (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMaxMS", 400);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("general.smoothScroll.pages.durationMinMS", 200);         // smooth the start/end of page scrolling operations in ms (PgUp/PgDn keys)
user_pref("mousewheel.acceleration.factor", 10);                    // sets acceleration factor if mouse wheel.acceleration.start > -1
user_pref("mousewheel.acceleration.start", 0);                      // when to apply mouse wheel.acceleration.factor (after how many scroll clicks of mouse wheel) - value must be greater than -1
user_pref("mousewheel.default.delta_multiplier_y", 85);             // sets the vertical step size
user_pref("mousewheel.min_line_scroll_amount", 10);                 // if the CSS line height is smaller than this value in pixels, each scroll click will scroll this amount

/*
 * following is the preference you want to check in `about:config` (_user.js.parrot) - the value will be `12bytes.org settings loaded` if everything up to this point loaded correctly
*/

user_pref("_user.js.parrot", "12bytes.org settings loaded");

/*
 * ==============================
 * END 12BYTES.ORG CUSTOMIZATIONS
 * ==============================
*/

/*
 * =========================
 * BEGIN USER CUSTOMIZATIONS
 * =========================
*/

/*
 * any changes you make to this file should be made in your custom preferences section here between "BEGIN USER CUSTOMIZATIONS" and "END USER CUSTOMIZATIONS"
 *
 * insert your own custom preferences below and uncomment the troubleshooting preferences (_user.js.parrot)
 *
 * test for syntax erors in your code by entering `about:config` in the browser address bar, then searching for the preference `_user.js.parrot`, the value of which should be whatever you set it to below (currently "user settings loaded") if there are no errors in your code
 *
 * for example, if you wanted to change the preference "browser.tabs.warnOnClose" to "true" to receive a warning when you close the browser with multiple tabs still open, then you would copy the preference from above and paste it here, without the two leading comment slashes of course...
*/
//user_pref("browser.tabs.warnOnClose", true);  // optionally, you could wite a description here of what this preference is for

// troubleshooting preference below - if you mess up your code the value of this preference will be "syntax error @ BEGIN USER CUSTOMIZATIONS" when you check it in `about:config` - uncomment to use
//user_pref("_user.js.parrot", "syntax error @ BEGIN USER CUSTOMIZATIONS");

// add your preferences here between the two troubleshooting preferences

// troubleshooting preference below - if there are no errors in your code, the value of this preference will be - "user settings loaded" when you check it in `about:config` - uncomment to use
//user_pref("_user.js.parrot", "user settings loaded");

/*
 * =======================
 * END USER CUSTOMIZATIONS
 * =======================
*/
