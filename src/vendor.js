/* This file contains references to the vbendor libraries
 we're using in this project. This is used by webpac
 in th eproduction build only*. A separate bundle for vendor
 code is useful since it's unliekly to change as often
 as the application's code. So all the libraries we reference
 here will be written to vendor.js so they can be
 cached until one of them change. So basically, this avoids
 customers having to download a huge JS file anytime a line
 of code changes. They only have to download vendor.js when
 a vendor liibrary changes which should be less frequent.
 Any files that aren't referenced here will be bundled into
 main.js for the production build.
*/

/* eslint-disable import/default */
/* eslint-disable no-unused-vars */

import fetch from "whatwg-fetch";
