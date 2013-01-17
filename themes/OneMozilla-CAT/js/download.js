/**
 * A javascript file used to detect the current browser's platform.  Offers a couple
 * of utility functions for modifying the mozilla.com pages to offer the best
 * downloads for visitors.
 *
 */


/*
 * Do platform detection
 */
var PLATFORM_OTHER    = 0;
var PLATFORM_WINDOWS  = 1;
var PLATFORM_LINUX    = 2;
var PLATFORM_MACOSX   = 3;
var PLATFORM_MAC      = 4;

var gPlatform = PLATFORM_WINDOWS;

if (navigator.platform.indexOf("Win32") != -1 || navigator.platform.indexOf("Win64") != -1)
  gPlatform = PLATFORM_WINDOWS;
else if (navigator.platform.indexOf("Linux") != -1)
  gPlatform = PLATFORM_LINUX;
else if (navigator.userAgent.indexOf("Mac OS X") != -1)
  gPlatform = PLATFORM_MACOSX;
else if (navigator.userAgent.indexOf("MSIE 5.2") != -1)
  gPlatform = PLATFORM_MACOSX;
else if (navigator.platform.indexOf("Mac") != -1)
  gPlatform = PLATFORM_MAC;
else
  gPlatform = PLATFORM_OTHER;

/**
 * Gets whether or not the client is an officially unsupported platform
 *
 * Officially unsupported platforms are Windows 95, 98, ME and NT 4.x
 *
 * The regular expression matches:
 *
 *  - Win16
 *  - Win9x
 *  - Win95
 *  - Win98
 *  - WinNT (not followed by version or followed bu version < 5)
 *  - Windows ME
 *  - Windows CE
 *  - Windows 9x
 *  - Windows 95
 *  - Windows 98
 *  - Windows 3.1
 *  - Windows 4.10
 *  - Windows NT (not followed by version or followed by version < 5)
 *  - Windows_95
 */
var gPlatformUnsupported = /(Win(16|9[x58]|NT( [1234]| [^0-9]|[^ ]|$))|Windows ([MC]E|9[x58]|3\.1|4\.10|NT( [1234]| [^0-9]|[^ ]|$))|Windows_95)/.test(navigator.userAgent);

/**
 * When a user comes to our download page, we try to detect their platform.  If
 * successful, this function will hide all the links for other platforms in an effort
 * to give people the best choice to download.
 *
 * @param string tag ID to search for <ul>'s in that we want to adjust (normally, this is main-feature)
 */


function offerBestDownloadLink(tagId) {

    var parent = document.getElementById(tagId);

    if (parent && gPlatform) {
        switch (gPlatform) {

            case PLATFORM_WINDOWS:
                setDownloadListClass(parent, 'os_windows');
                break;
            case PLATFORM_LINUX:
                setDownloadListClass(parent, 'os_linux');
                break;
            case PLATFORM_MACOSX:
                setDownloadListClass(parent, 'os_osx');
                break;
            default:
                // Leave all the links present and let the user choose
                break;
        }
    }
}

/**
 * Will set the download class to the input.  Used for hiding links to download for
 * other platforms.
 *
 * @param object the parent class for the download's <ul>
 * @param string class to add
 */
function setDownloadListClass(parent, cssClass) {

    if (parent) {
        var lists = parent.getElementsByTagName('ul');
        for (var i=0; i < lists.length; i++) {
            if (lists[i].getAttribute('class') && lists[i].getAttribute('class').indexOf('home-download') != -1) {
                lists[i].setAttribute('class', lists[i].getAttribute('class') + " " + cssClass);
            }

            // For IE
            if (lists[i].getAttribute('className') && lists[i].getAttribute('className').indexOf('home-download') != -1) {
                lists[i].setAttribute('className', lists[i].getAttribute('className') + " " + cssClass);
            }
                    
        }
    }
}

/**
 * Internet Explorer throws up the privacy bar if we try to offer a download after
 * the page is loaded.  This means by default we offer a direct link to the download,
 * and if they are using a browser that is not IE, we'll replace the download link to
 * the friendly "Thanks for downloading <3" page.
 * 
 * @param id string id of the tag to look in
 */
function replaceDownloadLinksForId(id) {

    if ((window.location.protocol == "file:") ||                // Testing locally
        (window.navigator.userAgent.indexOf("SV1") != -1) ||    // IE6/SP2
        (window.navigator.userAgent.indexOf("MSIE 7") != -1)) // IE7
      // Don't mess with the download URL.
      return;

    var element = document.getElementById(id);

    if (element) {
        var links = element.getElementsByTagName('a');

        // For each link, split on the question mark and replace the beginning with a
        // local page instead of the download.mozilla.org hostname.  
        for (var i=0; i < links.length; i++) {
            var href = links[i].getAttribute('href');

            if (href.indexOf('?') != -1) {
                var temp = href.split('?');
                if (temp[0].indexOf('http://download.mozilla.org') == 0) {
                    links[i].setAttribute('href','/products/download.html?' + temp[1]);
                }
            }

        }
    }
}

/**
 * A special function for IE.  Without this hack there is no prompt to download after they click.  sigh.
 * bug 393263
 *
 * @param string direct link to download URL
 *
 * We also put our omniture tracking code for downloads counting here
 */
function init_download(link) {

    // commented out because we don't have transition pages for downloads on mozilla-europe.org and thus are not affected by the IE bug
    //~ if (navigator.appVersion.indexOf('MSIE') != -1) {
    //~ window.open(link, 'download_window', 'toolbar=0,location=no,directories=0,status=0,scrollbars=0,resizeable=0,width=1,height=1,top=0,left=0');
    //~ window.focus();
    //~ }

    str = link.split('?');
    queryArray = str[1].split('&');

    var f = [];
    for (var i = 0; i < queryArray.length; i++){
        var x = queryArray[ i ].split('=');
        f[x[0]] = x[1];
    }

    omn_fake_lnk = 'Download Click: ' + f['product'] + ' / ' + f['lang'] + ' / ' + f['os'] ;

    var s = s_gi('mozillaeu');
    s.linkTrackVars = 'prop8,prop9';
    s.prop8 = 'Download Button - ' + f['lang']; 
    s.tl(this,'o', omn_fake_lnk);
}

function detectaso() {

	var value = 0;

	switch(gPlatform) {
		case PLATFORM_WINDOWS:
			break;
        	case PLATFORM_LINUX:
			break;
            	case PLATFORM_MACOSX:
			break;
		default:
			break;
	}

}
function canviafons (nombre, llista, sistema) {

	if (llista == sistema) {
	    	var llistacanvi = document.getElementById(llista);
		llistacanvi.style.cssText="background-color:#b0ad9c;color:#ffffff;";
		llistacanvi.setAttribute("style", "background-color:#b0ad9c;color:#ffffff;");
		var csstxt = '#'+llista+' .dwnimage img {display: inline;}\n#'+llista+' a {color:#ffffff;}\n#'+llista+' a:hover {color:#ffffff;}</style>';
		var cssintern = document.createElement('style');
		cssintern.setAttribute("type", "text/css");
		if(cssintern.styleSheet){// IE
			cssintern.styleSheet.cssText = csstxt;
		} else {// w3c
			var cssText = document.createTextNode(csstxt);
			cssintern.appendChild(cssText);
		}
		llistacanvi.appendChild(cssintern);
	}
}

