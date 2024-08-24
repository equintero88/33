var CABLES;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ core)
});

// NAMESPACE OBJECT: ./src/core/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  b64decTypedArray: () => (b64decTypedArray),
  b64encTypesArray: () => (b64encTypesArray),
  base64Chars: () => (base64Chars),
  base64lookup: () => (base64lookup)
});

// NAMESPACE OBJECT: ./src/core/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, {
  UTILS: () => (UTILS),
  ajax: () => (ajax),
  ajaxSync: () => (ajaxSync),
  basename: () => (basename),
  cacheBust: () => (cacheBust),
  clamp: () => (clamp),
  cleanJson: () => (cleanJson),
  copyArray: () => (copyArray),
  filename: () => (filename),
  generateUUID: () => (generateUUID),
  getShortOpName: () => (getShortOpName),
  keyCodeToName: () => (keyCodeToName),
  logStack: () => (logStack),
  map: () => (map),
  prefixedHash: () => (prefixedHash),
  request: () => (request),
  shortId: () => (shortId),
  shuffleArray: () => (shuffleArray),
  simpleId: () => (simpleId),
  smoothStep: () => (smoothStep),
  smootherStep: () => (smootherStep),
  uuid: () => (uuid)
});

// NAMESPACE OBJECT: ./src/core/anim.js
var anim_namespaceObject = {};
__webpack_require__.r(anim_namespaceObject);
__webpack_require__.d(anim_namespaceObject, {
  ANIM: () => (ANIM),
  Anim: () => (Anim)
});

;// CONCATENATED MODULE: ./src/core/base64.js
const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// Use a lookup table to find the index.
const _base64lookup = new Uint8Array(256);
for (let i = 0; i < base64Chars.length; i++) _base64lookup[base64Chars.charCodeAt(i)] = i;

const base64lookup = _base64lookup;

const b64encTypesArray = function (arraybuffer)
{
    if (arraybuffer.buffer) arraybuffer = arraybuffer.buffer;
    let bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3)
    {
        base64 += base64Chars[bytes[i] >> 2];
        base64 += base64Chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += base64Chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += base64Chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";

    return base64;
};

const b64decTypedArray = function (base64)
{
    let bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=")
    {
        bufferLength--;
        if (base64[base64.length - 2] === "=") bufferLength--;
    }

    let arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4)
    {
        encoded1 = base64lookup[base64.charCodeAt(i)];
        encoded2 = base64lookup[base64.charCodeAt(i + 1)];
        encoded3 = base64lookup[base64.charCodeAt(i + 2)];
        encoded4 = base64lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
};

;// CONCATENATED MODULE: ./src/core/constants.js
const CONSTANTS = {
    "ANIM": {
        "EASINGS": [
            "linear",
            "absolute",
            "smoothstep",
            "smootherstep",
            "Cubic In",
            "Cubic Out",
            "Cubic In Out",
            "Expo In",
            "Expo Out",
            "Expo In Out",
            "Sin In",
            "Sin Out",
            "Sin In Out",
            "Quart In",
            "Quart Out",
            "Quart In Out",
            "Quint In",
            "Quint Out",
            "Quint In Out",
            "Back In",
            "Back Out",
            "Back In Out",
            "Elastic In",
            "Elastic Out",
            "Bounce In",
            "Bounce Out",
        ],
        "EASING_LINEAR": 0,
        "EASING_ABSOLUTE": 1,
        "EASING_SMOOTHSTEP": 2,
        "EASING_SMOOTHERSTEP": 3,
        "EASING_CUBICSPLINE": 4,

        "EASING_CUBIC_IN": 5,
        "EASING_CUBIC_OUT": 6,
        "EASING_CUBIC_INOUT": 7,

        "EASING_EXPO_IN": 8,
        "EASING_EXPO_OUT": 9,
        "EASING_EXPO_INOUT": 10,

        "EASING_SIN_IN": 11,
        "EASING_SIN_OUT": 12,
        "EASING_SIN_INOUT": 13,

        "EASING_BACK_IN": 14,
        "EASING_BACK_OUT": 15,
        "EASING_BACK_INOUT": 16,

        "EASING_ELASTIC_IN": 17,
        "EASING_ELASTIC_OUT": 18,

        "EASING_BOUNCE_IN": 19,
        "EASING_BOUNCE_OUT": 21,

        "EASING_QUART_IN": 22,
        "EASING_QUART_OUT": 23,
        "EASING_QUART_INOUT": 24,

        "EASING_QUINT_IN": 25,
        "EASING_QUINT_OUT": 26,
        "EASING_QUINT_INOUT": 27,
    },

    "OP": {
        "OP_PORT_TYPE_VALUE": 0,
        "OP_PORT_TYPE_NUMBER": 0,
        "OP_PORT_TYPE_FUNCTION": 1,
        "OP_PORT_TYPE_TRIGGER": 1,
        "OP_PORT_TYPE_OBJECT": 2,
        "OP_PORT_TYPE_TEXTURE": 2,
        "OP_PORT_TYPE_ARRAY": 3,
        "OP_PORT_TYPE_DYNAMIC": 4,
        "OP_PORT_TYPE_STRING": 5,

        "OP_VERSION_PREFIX": "_v",
    },

    "PORT": {
        "PORT_DIR_IN": 0,
        "PORT_DIR_OUT": 1,
    },

    "PACO": {
        "PACO_CLEAR": 0,
        "PACO_VALUECHANGE": 1,
        "PACO_OP_DELETE": 2,
        "PACO_UNLINK": 3,
        "PACO_LINK": 4,
        "PACO_LOAD": 5,
        "PACO_OP_CREATE": 6,
        "PACO_OP_ENABLE": 7,
        "PACO_OP_DISABLE": 8,
        "PACO_UIATTRIBS": 9,
        "PACO_VARIABLES": 10,
        "PACO_TRIGGERS": 11,
        "PACO_PORT_SETVARIABLE": 12,
        "PACO_PORT_SETANIMATED": 13,
        "PACO_PORT_ANIM_UPDATED": 14,
        "PACO_DESERIALIZE": 15

    },
};

;// CONCATENATED MODULE: ./src/core/utils.js

/**
 * @namespace external:CABLES#Utils
 */



const UTILS = {};
/**
 * Merge two Float32Arrays.
 * @function float32Concat
 * @memberof Utils
 * @param {Float32Array} first Left-hand side array
 * @param {Float32Array} second Right-hand side array
 * @return {Float32Array}
 * @static
 */
UTILS.float32Concat = function (first, second)
{
    if (!(first instanceof Float32Array)) first = new Float32Array(first);
    if (!(second instanceof Float32Array)) second = new Float32Array(second);

    const result = new Float32Array(first.length + second.length);

    result.set(first);
    result.set(second, first.length);

    return result;
};

/**
 * get op shortname: only last part of fullname and without version
 * @function getShortOpName
 * @memberof CABLES
 * @param {string} fullname full op name
 * @static
 */
const getShortOpName = function (fullname)
{
    let name = fullname.split(".")[fullname.split(".").length - 1];

    if (name.contains(CONSTANTS.OP.OP_VERSION_PREFIX))
    {
        const n = name.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];
        name = name.substring(0, name.length - (CONSTANTS.OP.OP_VERSION_PREFIX + n).length);
    }
    return name;
};

/**
 * randomize order of an array
 * @function shuffleArray
 * @memberof Utils
 * @param {Array|Float32Array} array {Array} original
 * @return {Array|Float32Array} shuffled array
 * @static
 */
const shuffleArray = function (array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.seededRandom() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};


/**
 * generate a short "relativly unique" id
 * @function shortId
 * @memberof Utils
 * @return {String} generated ID
 * @static
 */

const _shortIds = {};
const _shortId = function ()
{
    let str = Math.random().toString(36).substr(2, 9);

    if (_shortIds.hasOwnProperty(str)) str = _shortId();
    _shortIds[str] = true;
    return str;
};
const shortId = _shortId;


/**
 * generate a UUID
 * @function uuid
 * @memberof Utils
 * @return {String} generated UUID
 * @static
 */
const _uuid = function ()
{
    let d = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
};
const uuid = _uuid;
const generateUUID = _uuid;



function cleanJson(obj)
{
    for (const i in obj)
    {
        if (obj[i] && typeof objValue === "object" && obj[i].constructor === Object) obj[i] = cleanJson(obj[i]);

        if (obj[i] === null || obj[i] === undefined) delete obj[i];
        else if (Array.isArray(obj[i]) && obj[i].length == 0) delete obj[i];
    }

    return obj;
}


/**
 * @see http://stackoverflow.com/q/7616461/940217
 * @memberof Utils
 * @param str
 * @param prefix
 * @return {string}
 */
const _prefixedHash = function (str, prefix = "id")
{
    let hash = 0;
    if (Array.prototype.reduce)
    {
        hash = str.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    }
    else
    {
        if (str.length > 0)
        {
            for (let i = 0; i < str.length; i++)
            {
                let character = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + character;
                hash &= hash; // Convert to 32bit integer
            }
        }
    }
    return prefix + "" + hash;
};
const prefixedHash = _prefixedHash;

/**
 * generate a simple ID
 * @function simpleId
 * @memberof Utils
 * @return {Number} new id
 * @static
 */
let simpleIdCounter = 0;
const simpleId = function ()
{
    simpleIdCounter++;
    return simpleIdCounter;
};

/**
 * smoothStep a value
 * @function smoothStep
 * @memberof Utils
 * @function
 * @param {Number} perc value value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smoothStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * (3 - 2 * x); // smoothstep
    return perc;
};

/**
 * smootherstep a value
 * @function smootherStep
 * @memberof Utils
 * @param {Number} perc value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smootherStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return perc;
};


/**
 * clamp number / make sure its between min/max
 * @function clamp
 * @memberof Utils
 * @param {Number} value value to be mapped
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @static
 */
const clamp = function (value, min, max)
{
    return Math.min(Math.max(value, min), max);
};

/**
 * map a value in a range to a value in another range
 * @function map
 * @memberof Utils
 * @param {Number} x value to be mapped
 * @param {Number} _oldMin old range minimum value
 * @param {Number} _oldMax old range maximum value
 * @param {Number} _newMin new range minimum value
 * @param {Number} _newMax new range maximum value
 * @param {Number} _easing
 * @return {Number} mapped value
 * @static
 */
const map = function (x, _oldMin, _oldMax, _newMin, _newMax, _easing)
{
    if (x >= _oldMax) return _newMax;
    if (x <= _oldMin) return _newMin;

    let reverseInput = false;
    const oldMin = Math.min(_oldMin, _oldMax);
    const oldMax = Math.max(_oldMin, _oldMax);
    if (oldMin != _oldMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(_newMin, _newMax);
    const newMax = Math.max(_newMin, _newMax);
    if (newMin != _newMin) reverseOutput = true;

    let portion = 0;
    let r = 0;

    if (reverseInput) portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
    else portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (!_easing) return r;
    if (_easing == 1)
    {
        // smoothstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * (3 - 2 * x) * (_newMax - _newMin);
    }
    if (_easing == 2)
    {
        // smootherstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * x * (x * (x * 6 - 15) + 10) * (_newMax - _newMin);
    }

    return r;
};

/**
 * @namespace Math
 */
/**
 * set random seed for seededRandom()
 * @memberof Math
 * @type Number
 * @static
 */
Math.randomSeed = 1;


Math.setRandomSeed = function (seed)
{
    // https://github.com/cables-gl/cables_docs/issues/622
    Math.randomSeed = seed * 50728129;
    if (seed != 0)
    {
        Math.randomSeed = Math.seededRandom() * 17624813;
        Math.randomSeed = Math.seededRandom() * 9737333;
    }
};


/**
 * generate a seeded random number
 * @function seededRandom
 * @memberof Math
 * @param {Number} max minimum possible random number
 * @param {Number} min maximum possible random number
 * @return {Number} random value
 * @static
 */
Math.seededRandom = function (max, min)
{
    if (Math.randomSeed === 0) Math.randomSeed = Math.random() * 999;
    max = max || 1;
    min = min || 0;

    Math.randomSeed = (Math.randomSeed * 9301 + 49297) % 233280;
    const rnd = Math.randomSeed / 233280.0;

    return min + rnd * (max - min);
};


// ----------------------------------------------------------------

/**
 * returns true if parameter is a number
 * @function isNumeric
 * @memberof Utils
 * @param {Any} n value The value to check.
 * @return {Boolean}
 * @static
 */
UTILS.isNumeric = function (n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * returns true if parameter is array
 * @function isArray
 * @param {Any} v value Value to check
 * @memberof Utils
 * @return {Boolean}
 * @static
 */
UTILS.isArray = function (v)
{
    return Object.prototype.toString.call(v) === "[object Array]";
};

/**
 * @namespace String
 */

/**
 * append a linebreak to a string
 * @function endl
 * @memberof String
 * @return {String} string with newline break appended ('\n')
 */
String.prototype.endl = function ()
{
    return this + "\n";
};

/**
 * return true if string starts with prefix
 * @function startsWith
 * @memberof String
 * @param {String} prefix The prefix to check.
 * @return {Boolean}
 */
String.prototype.startsWith = function (prefix)
{
    return this.indexOf(prefix) === 0;
};

/**
 * return true if string ends with suffix
 * @function endsWith
 * @memberof String
 * @param {String} suffix
 * @return {Boolean}
 */
String.prototype.endsWith = String.prototype.endsWith || function (suffix)
{
    return this.match(suffix + "$") == suffix;
};

/**
 * return true if string contains string
 * @function contains
 * @memberof String
 * @param {String} searchStr
 * @return {Boolean}
 */
String.prototype.contains = String.prototype.contains || function (searchStr)
{
    return this.indexOf(searchStr) > -1;
};



// ----------------------------------------------------------------

/**
 * append a unique/random parameter to a url, so the browser is forced to reload the file, even if its cached
 * @function cacheBust
 * @static
 * @memberof Utils
 * @param {String} url The url to append the cachebuster parameter to.
 * @return {String} url with cachebuster parameter
 */
const cacheBust = function (url = "")
{
    if (!url) return "";
    if (url.startsWith("data:")) return;
    if (url.contains("?")) url += "&";
    else url += "?";
    return url + "cache=" + CABLES.uuid();
};

/**
 * copy the content of an array
 * @function copyArray
 * @static
 * @memberof Utils
 * @param {Array} src sourceArray
 * @param {Array} dst optional
 * @return {Array} dst
 */
const copyArray = function (src, dst)
{
    if (!src) return null;
    dst = dst || [];
    dst.length = src.length;
    for (let i = 0; i < src.length; i++)
    {
        dst[i] = src[i];
    }

    return dst;
};


/**
 * return the filename part of a url without extension
 * @function basename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const basename = function (url)
{
    let name = CABLES.filename(url);

    const parts2 = name.split(".");
    name = parts2[0];

    return name;
};

/**
 * output a stacktrace to the console
 * @function logStack
 * @static
 * @memberof Utils
 */
const logStack = function ()
{
    console.log("logstack", (new Error()).stack);
};

/**
 * return the filename part of a url
 * @function filename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const filename = function (url)
{
    let name = "";
    if (!url) return "";

    if (url.startsWith("data:") && url.contains(":"))
    {
        const parts = url.split(",");
        return parts[0];
    }

    let parts = (url + "").split("/");
    if (parts.length > 0)
    {
        const str = parts[parts.length - 1];
        let parts2 = str.split("?");
        name = parts2[0];
    }

    return name || "";
};


const ajaxSync = function (url, cb, method, post, contenttype)
{
    request({
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": true,
    });
};

/**
 * make an ajax request
 * @static
 * @function ajax
 * @param url
 * @param cb
 * @param method
 * @param post
 * @param contenttype
 * @param jsonP
 * @param headers
 * @param options
 */
const ajax = function (url, cb, method, post, contenttype, jsonP, headers = {}, options = {})
{
    const requestOptions = {
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": false,
        "jsonP": jsonP,
        "headers": headers,
    };
    if (options && options.credentials) requestOptions.credentials = options.credentials;
    request(requestOptions);
};

const request = function (options)
{
    if (!options.hasOwnProperty("asynch")) options.asynch = true;

    let xhr;
    try
    {
        xhr = new XMLHttpRequest();
    }
    catch (e) {}

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState != 4) return;

        if (options.cb)
        {
            if (xhr.status == 200 || xhr.status == 0) options.cb(false, xhr.responseText, xhr);
            else options.cb(true, xhr.responseText, xhr);
        }
    };

    try
    {
        xhr.open(options.method ? options.method.toUpperCase() : "GET", options.url, !options.sync);
    }
    catch (e)
    {
        if (options.cb && e) options.cb(true, e.msg, xhr);
    }

    if (typeof options.headers === "object")
    {
        if (options.headers)
        {
            const keys = Object.keys(options.headers);
            for (let i = 0; i < keys.length; i++)
            {
                const name = keys[i];
                const value = options.headers[name];
                xhr.setRequestHeader(name, value);
            }
        }
    }

    if (options.credentials && options.credentials !== "omit")
    {
        xhr.withCredentials = true;
    }

    try
    {
        if (!options.post && !options.data)
        {
            xhr.send();
        }
        else
        {
            xhr.setRequestHeader(
                "Content-type",
                options.contenttype ? options.contenttype : "application/x-www-form-urlencoded",
            );
            xhr.send(options.data || options.post);
        }
    }
    catch (e)
    {
        if (options.cb) options.cb(true, e.msg, xhr);
    }
};


const keyCodeToName = function (keyCode)
{
    if (!keyCode && keyCode !== 0) return "Unidentified";
    const keys = {
        "8": "Backspace",
        "9": "Tab",
        "12": "Clear",
        "13": "Enter",
        "16": "Shift",
        "17": "Control",
        "18": "Alt",
        "19": "Pause",
        "20": "CapsLock",
        "27": "Escape",
        "32": "Space",
        "33": "PageUp",
        "34": "PageDown",
        "35": "End",
        "36": "Home",
        "37": "ArrowLeft",
        "38": "ArrowUp",
        "39": "ArrowRight",
        "40": "ArrowDown",
        "45": "Insert",
        "46": "Delete",
        "112": "F1",
        "113": "F2",
        "114": "F3",
        "115": "F4",
        "116": "F5",
        "117": "F6",
        "118": "F7",
        "119": "F8",
        "120": "F9",
        "121": "F10",
        "122": "F11",
        "123": "F12",
        "144": "NumLock",
        "145": "ScrollLock",
        "224": "Meta"
    };
    if (keys[keyCode])
    {
        return keys[keyCode];
    }
    else
    {
        return String.fromCharCode(keyCode);
    }
};
// ----------------------------------------------------------------

window.performance = window.performance || {
    "offset": Date.now(),
    "now": function now()
    {
        return Date.now() - this.offset;
    },
};



;// CONCATENATED MODULE: ../shared/client/src/logger.js
/* eslint-disable no-console */

class Logger
{
    constructor(initiator)
    {
        this.initiator = initiator;
    }

    stack(t)
    {
        console.info("[" + this.initiator + "] ", t);
        console.log((new Error()).stack);
    }

    groupCollapsed(t)
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent) console.log("[" + this.initiator + "]", ...arguments);

        console.groupCollapsed("[" + this.initiator + "] " + t);
    }

    table(t)
    {
        console.table(t);
    }

    groupEnd()
    {
        console.groupEnd();
    }

    error()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments)) || !CABLES.logSilent)
            console.error("[" + this.initiator + "]", ...arguments);
    }

    errorGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments);
    }

    warn()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 1 }, ...arguments)) || !CABLES.logSilent)
            console.warn("[" + this.initiator + "]", ...arguments);
    }

    verbose()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    info()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.info("[" + this.initiator + "]", ...arguments);
    }

    log()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    logGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments);
    }

    userInteraction(text)
    {
        // this.log({ "initiator": "userinteraction", "text": text });
    }
}

;// CONCATENATED MODULE: ./src/core/anim_key.js


const Key = function (obj)
{
    this.time = 0.0;
    this.value = 0.0;
    // this.ui = null;
    this.onChange = null;
    this._easing = 0;
    // this.bezTangIn = 0;
    // this.bezTangOut = 0;
    // this.bezTime = 0.5;
    // this.bezValue = 0;
    // this.bezTimeIn = -0.5;
    // this.bezValueIn = 0;

    this.cb = null;
    this.cbTriggered = false;

    // const bezierAnim = null;
    // this._updateBezier = false;

    this.setEasing(CONSTANTS.ANIM.EASING_LINEAR);
    this.set(obj);
};

Key.cubicSpline = function (perc, key1, key2)
{
    let
        previousPoint = key1.value,
        previousTangent = key1.bezTangOut,
        nextPoint = key2.value,
        nextTangent = key2.bezTangIn;
    let t = perc;
    let t2 = t * t;
    let t3 = t2 * t;

    return (2 * t3 - 3 * t2 + 1) * previousPoint + (t3 - 2 * t2 + t) * previousTangent + (-2 * t3 + 3 * t2) * nextPoint + (t3 - t2) * nextTangent;
};

Key.easeCubicSpline = function (perc, key2)
{
    return Key.cubicSpline(perc, this, key2);
};


Key.linear = function (perc, key1, key2)
{
    return parseFloat(key1.value) + parseFloat(key2.value - key1.value) * perc;
};

Key.easeLinear = function (perc, key2)
{
    return Key.linear(perc, this, key2);
};

Key.easeAbsolute = function (perc, key2)
{
    return this.value;
};

const easeExpoIn = function (t)
{
    return (t = 2 ** (10 * (t - 1)));
};

Key.easeExpoIn = function (t, key2)
{
    t = easeExpoIn(t);
    return Key.linear(t, this, key2);
};

const easeExpoOut = function (t)
{
    t = -(2 ** (-10 * t)) + 1;
    return t;
};

Key.easeExpoOut = function (t, key2)
{
    t = easeExpoOut(t);
    return Key.linear(t, this, key2);
};

const easeExpoInOut = function (t)
{
    t *= 2;
    if (t < 1)
    {
        t = 0.5 * 2 ** (10 * (t - 1));
    }
    else
    {
        t--;
        t = 0.5 * (-(2 ** (-10 * t)) + 2);
    }
    return t;
};

Key.easeExpoInOut = function (t, key2)
{
    t = easeExpoInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSinIn = function (t, key2)
{
    t = -1 * Math.cos((t * Math.PI) / 2) + 1;
    return Key.linear(t, this, key2);
};

Key.easeSinOut = function (t, key2)
{
    t = Math.sin((t * Math.PI) / 2);
    return Key.linear(t, this, key2);
};

Key.easeSinInOut = function (t, key2)
{
    t = -0.5 * (Math.cos(Math.PI * t) - 1.0);
    return Key.linear(t, this, key2);
};

const easeCubicIn = function (t)
{
    t = t * t * t;
    return t;
};

Key.easeCubicIn = function (t, key2)
{
    t = easeCubicIn(t);
    return Key.linear(t, this, key2);
};


// b 0
// c 1/2 or 1
// d always 1
// easeOutCubic: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t + 1) + b;

Key.easeInQuint = function (t, key2)
{
    t = t * t * t * t * t;
    return Key.linear(t, this, key2);
};
Key.easeOutQuint = function (t, key2)
{
    t = (t -= 1) * t * t * t * t + 1;
    return Key.linear(t, this, key2);
};
Key.easeInOutQuint = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t * t;
    else t = 0.5 * ((t -= 2) * t * t * t * t + 2);
    return Key.linear(t, this, key2);
};

Key.easeInQuart = function (t, key2)
{
    t = t * t * t * t;
    return Key.linear(t, this, key2);
};

Key.easeOutQuart = function (t, key2)
{
    // return -c * ((t=t/d-1)*t*t*t - 1) + b;
    t = -1 * ((t -= 1) * t * t * t - 1);
    return Key.linear(t, this, key2);
};

Key.easeInOutQuart = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t;
    else t = -0.5 * ((t -= 2) * t * t * t - 2);
    return Key.linear(t, this, key2);
};

Key.bounce = function (t)
{
    if ((t /= 1) < 1 / 2.75) t = 7.5625 * t * t;
    else if (t < 2 / 2.75) t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    else if (t < 2.5 / 2.75) t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    else t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    return t;
};

Key.easeInBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
    // return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d);
};

Key.easeOutBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
};

Key.easeInElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }

    return Key.linear(t, this, key2);
};


Key.easeOutElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    }

    return Key.linear(t, this, key2);
};

Key.easeInBack = function (t, key2)
{
    const s = 1.70158;
    t = t * t * ((s + 1) * t - s);

    return Key.linear(t, this, key2);
};

Key.easeOutBack = function (t, key2)
{
    const s = 1.70158;
    t = (t = t / 1 - 1) * t * ((s + 1) * t + s) + 1;

    return Key.linear(t, this, key2);
};

Key.easeInOutBack = function (t, key2)
{
    let s = 1.70158;
    const c = 1 / 2;
    if ((t /= 1 / 2) < 1) t = c * (t * t * (((s *= 1.525) + 1) * t - s));
    else t = c * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);

    return Key.linear(t, this, key2);
};

const easeCubicOut = function (t)
{
    t--;
    t = t * t * t + 1;
    return t;
};

Key.easeCubicOut = function (t, key2)
{
    t = easeCubicOut(t);
    return Key.linear(t, this, key2);
};

const easeCubicInOut = function (t)
{
    t *= 2;
    if (t < 1) t = 0.5 * t * t * t;
    else
    {
        t -= 2;
        t = 0.5 * (t * t * t + 2);
    }
    return t;
};

Key.easeCubicInOut = function (t, key2)
{
    t = easeCubicInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSmoothStep = function (perc, key2)
{
    // var x = Math.max(0, Math.min(1, (perc-0)/(1-0)));
    const x = Math.max(0, Math.min(1, perc));
    perc = x * x * (3 - 2 * x); // smoothstep
    return Key.linear(perc, this, key2);
};

Key.easeSmootherStep = function (perc, key2)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return Key.linear(perc, this, key2);
};

Key.prototype.setEasing = function (e)
{
    this._easing = e;

    if (this._easing == CONSTANTS.ANIM.EASING_LINEAR) this.ease = Key.easeLinear;
    else if (this._easing == CONSTANTS.ANIM.EASING_ABSOLUTE) this.ease = Key.easeAbsolute;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHSTEP) this.ease = Key.easeSmoothStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHERSTEP) this.ease = Key.easeSmootherStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_IN) this.ease = Key.easeCubicIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_OUT) this.ease = Key.easeCubicOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_INOUT) this.ease = Key.easeCubicInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_IN) this.ease = Key.easeExpoIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_OUT) this.ease = Key.easeExpoOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_INOUT) this.ease = Key.easeExpoInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_IN) this.ease = Key.easeSinIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_OUT) this.ease = Key.easeSinOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_INOUT) this.ease = Key.easeSinInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_OUT) this.ease = Key.easeOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_IN) this.ease = Key.easeInBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_INOUT) this.ease = Key.easeInOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_IN) this.ease = Key.easeInElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_OUT) this.ease = Key.easeOutElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_INOUT) this.ease = Key.easeElasticInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_IN) this.ease = Key.easeInBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_OUT) this.ease = Key.easeOutBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_OUT) this.ease = Key.easeOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_IN) this.ease = Key.easeInQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_INOUT) this.ease = Key.easeInOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_OUT) this.ease = Key.easeOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_IN) this.ease = Key.easeInQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_INOUT) this.ease = Key.easeInOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE)
    {
        // this._updateBezier = true;
        this.ease = Key.easeCubicSpline;
    }
    else
    {
        this._easing = CONSTANTS.ANIM.EASING_LINEAR;
        this.ease = Key.easeLinear;
    }
};

Key.prototype.trigger = function ()
{
    this.cb();
    this.cbTriggered = true;
};

Key.prototype.setValue = function (v)
{
    this.value = v;
    // this._updateBezier = true;
    if (this.onChange !== null) this.onChange();
};

Key.prototype.set = function (obj)
{
    if (obj)
    {
        if (obj.e) this.setEasing(obj.e);
        if (obj.cb)
        {
            this.cb = obj.cb;
            this.cbTriggered = false;
        }

        if (obj.b)
        {
            // this.bezTime = obj.b[0];
            // this.bezValue = obj.b[1];
            // this.bezTimeIn = obj.b[2];
            // this.bezValueIn = obj.b[3];
            // this._updateBezier = true;
        }

        if (obj.hasOwnProperty("t")) this.time = obj.t;
        if (obj.hasOwnProperty("time")) this.time = obj.time;
        if (obj.hasOwnProperty("v")) this.value = obj.v;
        else if (obj.hasOwnProperty("value")) this.value = obj.value;
    }
    if (this.onChange !== null) this.onChange();
};

Key.prototype.getSerialized = function ()
{
    const obj = {};
    obj.t = this.time;
    obj.v = this.value;
    obj.e = this._easing;
    // if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE) obj.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn];

    return obj;
};

Key.prototype.getEasing = function ()
{
    return this._easing;
};



;// CONCATENATED MODULE: ./src/core/eventtarget.js


const EventTarget = function ()
{
    this._log = new Logger("eventtarget");
    this._eventCallbacks = {};
    this._logName = "";
    this._logEvents = false;
    this._listeners = {};

    this.addEventListener = this.on = function (which, cb, idPrefix)
    {
        const event =
        {
            "id": (idPrefix || "") + CABLES.simpleId(),
            "name": which,
            "cb": cb,
        };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    };

    this.hasEventListener = function (which, cb)
    {
        if (which && !cb)
        {
            // check by id
            if (this._listeners[which]) return true;
            else return false;
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (which && cb)
            {
                if (this._eventCallbacks[which])
                {
                    const idx = this._eventCallbacks[which].indexOf(cb);
                    if (idx == -1) return false;
                    return true;
                }
            }
        }
    };

    this.hasListenerForEventName = function (eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    };

    this.removeEventListener = this.off = function (which, cb)
    {
        if (which === null || which === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[which];
            if (!event)
            {
                this._log.log("could not find event...");
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.startsWith(which)) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[which];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[which].length; i++)
            if (this._eventCallbacks[which][i].cb == cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + which);
    };

    this.logEvents = function (enabled, name)
    {
        this._logEvents = enabled;
        this._logName = name;
    };

    this.emitEvent = function (which, param1, param2, param3, param4, param5, param6)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    };
};



;// CONCATENATED MODULE: ./src/core/anim.js





/**
 * Keyframed interpolated animation.
 *
 * Available Easings:
 * <code>
 * CONSTANTS.ANIM.EASING_LINEAR
 * CONSTANTS.ANIM.EASING_ABSOLUTE
 * CONSTANTS.ANIM.EASING_SMOOTHSTEP
 * CONSTANTS.ANIM.EASING_SMOOTHERSTEP
 * CONSTANTS.ANIM.EASING_CUBICSPLINE

 * CONSTANTS.ANIM.EASING_CUBIC_IN
 * CONSTANTS.ANIM.EASING_CUBIC_OUT
 * CONSTANTS.ANIM.EASING_CUBIC_INOUT

 * CONSTANTS.ANIM.EASING_EXPO_IN
 * CONSTANTS.ANIM.EASING_EXPO_OUT
 * CONSTANTS.ANIM.EASING_EXPO_INOUT

 * CONSTANTS.ANIM.EASING_SIN_IN
 * CONSTANTS.ANIM.EASING_SIN_OUT
 * CONSTANTS.ANIM.EASING_SIN_INOUT

 * CONSTANTS.ANIM.EASING_BACK_IN
 * CONSTANTS.ANIM.EASING_BACK_OUT
 * CONSTANTS.ANIM.EASING_BACK_INOUT

 * CONSTANTS.ANIM.EASING_ELASTIC_IN
 * CONSTANTS.ANIM.EASING_ELASTIC_OUT

 * CONSTANTS.ANIM.EASING_BOUNCE_IN
 * CONSTANTS.ANIM.EASING_BOUNCE_OUT

 * CONSTANTS.ANIM.EASING_QUART_IN
 * CONSTANTS.ANIM.EASING_QUART_OUT
 * CONSTANTS.ANIM.EASING_QUART_INOUT

 * CONSTANTS.ANIM.EASING_QUINT_IN
 * CONSTANTS.ANIM.EASING_QUINT_OUT
 * CONSTANTS.ANIM.EASING_QUINT_INOUT
 * </code>
 * @class
 * @param cfg
 * @example
 * var anim=new CABLES.Anim();
 * anim.setValue(0,0);  // set value 0 at 0 seconds
 * anim.setValue(10,1); // set value 1 at 10 seconds
 * anim.getValue(5);    // get value at 5 seconds - this returns 0.5
 */

const Anim = function (cfg)
{
    EventTarget.apply(this);

    cfg = cfg || {};
    this.keys = [];
    this.onChange = null;
    this.stayInTimeline = false;
    this.loop = false;
    this._log = new Logger("Anim");
    this._lastKeyIndex = 0;
    this._cachedIndex = 0;
    this.name = cfg.name || null;

    /**
     * @member defaultEasing
     * @memberof Anim
     * @instance
     * @type {Number}
     */
    this.defaultEasing = cfg.defaultEasing || CONSTANTS.ANIM.EASING_LINEAR;
    this.onLooped = null;

    this._timesLooped = 0;
    this._needsSort = false;
};

Anim.prototype.forceChangeCallback = function ()
{
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.getLoop = function ()
{
    return this.loop;
};

Anim.prototype.setLoop = function (target)
{
    this.loop = target;
    this.emitEvent("onChange", this);
};

/**
 * returns true if animation has ended at @time
 * checks if last key time is < time
 * @param {Number} time
 * @returns {Boolean}
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.hasEnded = function (time)
{
    if (this.keys.length === 0) return true;
    if (this.keys[this._lastKeyIndex].time <= time) return true;
    return false;
};

Anim.prototype.isRising = function (time)
{
    if (this.hasEnded(time)) return false;
    const ki = this.getKeyIndex(time);
    if (this.keys[ki].value < this.keys[ki + 1].value) return true;
    return false;
};

/**
 * remove all keys from animation before time
 * @param {Number} time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clearBefore = function (time)
{
    const v = this.getValue(time);
    const ki = this.getKeyIndex(time);

    this.setValue(time, v);

    if (ki > 1) this.keys.splice(0, ki);
    this._updateLastIndex();
};
/**
 * remove all keys from animation
 * @param {Number} [time=0] set a new key at time with the old value at time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clear = function (time)
{
    let v = 0;
    if (time) v = this.getValue(time);
    this.keys.length = 0;
    this._updateLastIndex();
    if (time) this.setValue(time, v);
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.sortKeys = function ()
{
    this.keys.sort((a, b) => { return parseFloat(a.time) - parseFloat(b.time); });
    this._updateLastIndex();
    this._needsSort = false;
    if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
};

Anim.prototype.getLength = function ()
{
    if (this.keys.length === 0) return 0;
    return this.keys[this.keys.length - 1].time;
};

Anim.prototype.getKeyIndex = function (time)
{
    let index = 0;
    let start = 0;
    if (this._cachedIndex && this.keys.length > this._cachedIndex && time >= this.keys[this._cachedIndex].time) start = this._cachedIndex;
    for (let i = start; i < this.keys.length; i++)
    {
        if (time >= this.keys[i].time) index = i;
        if (this.keys[i].time > time)
        {
            if (time != 0) this._cachedIndex = index;
            return index;
        }
    }

    return index;
};

/**
 * set value at time
 * @function setValue
 * @memberof Anim
 * @instance
 * @param {Number} time
 * @param {Number} value
 * @param {Function} cb callback
 */
Anim.prototype.setValue = function (time, value, cb)
{
    let found = null;

    if (this.keys.length == 0 || time <= this.keys[this.keys.length - 1].time)
        for (let i = 0; i < this.keys.length; i++)
            if (this.keys[i].time == time)
            {
                found = this.keys[i];
                this.keys[i].setValue(value);
                this.keys[i].cb = cb;
                break;
            }

    if (!found)
    {
        found = new Key(
            {
                "time": time,
                "value": value,
                "e": this.defaultEasing,
                "cb": cb,
            });
        this.keys.push(found);

        // if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
        this._updateLastIndex();
    }

    if (this.onChange) this.onChange();
    this.emitEvent("onChange", this);
    this._needsSort = true;
    return found;
};

Anim.prototype.setKeyEasing = function (index, e)
{
    if (this.keys[index])
    {
        this.keys[index].setEasing(e);
        this.emitEvent("onChange", this);
    }
};

Anim.prototype.getSerialized = function ()
{
    const obj = {};
    obj.keys = [];
    obj.loop = this.loop;

    for (let i = 0; i < this.keys.length; i++)
        obj.keys.push(this.keys[i].getSerialized());

    return obj;
};

Anim.prototype.getKey = function (time)
{
    const index = this.getKeyIndex(time);
    return this.keys[index];
};

Anim.prototype.getNextKey = function (time)
{
    let index = this.getKeyIndex(time) + 1;
    if (index >= this.keys.length) index = this.keys.length - 1;

    return this.keys[index];
};

Anim.prototype.isFinished = function (time)
{
    if (this.keys.length <= 0) return true;
    return time > this.keys[this.keys.length - 1].time;
};

Anim.prototype.isStarted = function (time)
{
    if (this.keys.length <= 0) return false;
    return time >= this.keys[0].time;
};

/**
 * get value at time
 * @function getValue
 * @memberof Anim
 * @instance
 * @param {Number} [time] time
 * @returns {Number} interpolated value at time
 */
Anim.prototype.getValue = function (time)
{
    if (this.keys.length === 0)
    {
        return 0;
    }
    if (this._needsSort) this.sortKeys();

    if (!this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }

    if (time < this.keys[0].time)
    {
        // if (this.name)console.log("A");

        return this.keys[0].value;
    }

    if (this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        const currentLoop = time / this.keys[this._lastKeyIndex].time;
        if (currentLoop > this._timesLooped)
        {
            this._timesLooped++;
            if (this.onLooped) this.onLooped();
        }
        time = (time - this.keys[0].time) % (this.keys[this._lastKeyIndex].time - this.keys[0].time);
        time += this.keys[0].time;
    }

    const index = this.getKeyIndex(time);
    if (index >= this._lastKeyIndex)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }


    const index2 = index + 1;
    const key1 = this.keys[index];
    const key2 = this.keys[index2];

    if (key1.cb && !key1.cbTriggered) key1.trigger();

    if (!key2) return -1;

    const perc = (time - key1.time) / (key2.time - key1.time);

    if (!key1.ease) this.log._warn("has no ease", key1, key2);

    return key1.ease(perc, key2);
};

Anim.prototype._updateLastIndex = function ()
{
    this._lastKeyIndex = this.keys.length - 1;
};

Anim.prototype.addKey = function (k)
{
    if (k.time === undefined)
    {
        this.log.warn("key time undefined, ignoring!");
    }
    else
    {
        this.keys.push(k);
        if (this.onChange !== null) this.onChange();
        this.emitEvent("onChange", this);
    }
    this._updateLastIndex();
};

Anim.prototype.easingFromString = function (str)
{
    if (str == "linear") return CONSTANTS.ANIM.EASING_LINEAR;
    if (str == "absolute") return CONSTANTS.ANIM.EASING_ABSOLUTE;
    if (str == "smoothstep") return CONSTANTS.ANIM.EASING_SMOOTHSTEP;
    if (str == "smootherstep") return CONSTANTS.ANIM.EASING_SMOOTHERSTEP;

    if (str == "Cubic In") return CONSTANTS.ANIM.EASING_CUBIC_IN;
    if (str == "Cubic Out") return CONSTANTS.ANIM.EASING_CUBIC_OUT;
    if (str == "Cubic In Out") return CONSTANTS.ANIM.EASING_CUBIC_INOUT;

    if (str == "Expo In") return CONSTANTS.ANIM.EASING_EXPO_IN;
    if (str == "Expo Out") return CONSTANTS.ANIM.EASING_EXPO_OUT;
    if (str == "Expo In Out") return CONSTANTS.ANIM.EASING_EXPO_INOUT;

    if (str == "Sin In") return CONSTANTS.ANIM.EASING_SIN_IN;
    if (str == "Sin Out") return CONSTANTS.ANIM.EASING_SIN_OUT;
    if (str == "Sin In Out") return CONSTANTS.ANIM.EASING_SIN_INOUT;

    if (str == "Back In") return CONSTANTS.ANIM.EASING_BACK_IN;
    if (str == "Back Out") return CONSTANTS.ANIM.EASING_BACK_OUT;
    if (str == "Back In Out") return CONSTANTS.ANIM.EASING_BACK_INOUT;

    if (str == "Elastic In") return CONSTANTS.ANIM.EASING_ELASTIC_IN;
    if (str == "Elastic Out") return CONSTANTS.ANIM.EASING_ELASTIC_OUT;

    if (str == "Bounce In") return CONSTANTS.ANIM.EASING_BOUNCE_IN;
    if (str == "Bounce Out") return CONSTANTS.ANIM.EASING_BOUNCE_OUT;

    if (str == "Quart Out") return CONSTANTS.ANIM.EASING_QUART_OUT;
    if (str == "Quart In") return CONSTANTS.ANIM.EASING_QUART_IN;
    if (str == "Quart In Out") return CONSTANTS.ANIM.EASING_QUART_INOUT;

    if (str == "Quint Out") return CONSTANTS.ANIM.EASING_QUINT_OUT;
    if (str == "Quint In") return CONSTANTS.ANIM.EASING_QUINT_IN;
    if (str == "Quint In Out") return CONSTANTS.ANIM.EASING_QUINT_INOUT;
};

Anim.prototype.createPort = function (op, title, cb)
{
    const port = op.inDropDown(title, CONSTANTS.ANIM.EASINGS, "Cubic Out");

    // const port = op.addInPort(
    //     new Port(op, title, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
    //         "display": "dropdown",
    //         "values": CONSTANTS.ANIM.EASINGS,
    //     }),
    // );

    port.set("linear");
    port.defaultValue = "linear";

    port.onChange = function ()
    {
        this.defaultEasing = this.easingFromString(port.get());
        this.emitEvent("onChangeDefaultEasing", this);

        if (cb) cb();
    }.bind(this);

    return port;
};

// ------------------------------

Anim.slerpQuaternion = function (time, q, animx, animy, animz, animw)
{
    if (!Anim.slerpQuaternion.q1)
    {
        Anim.slerpQuaternion.q1 = quat.create();
        Anim.slerpQuaternion.q2 = quat.create();
    }

    const i1 = animx.getKeyIndex(time);
    let i2 = i1 + 1;
    if (i2 >= animx.keys.length) i2 = animx.keys.length - 1;

    if (i1 == i2)
    {
        quat.set(q, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);
    }
    else
    {
        const key1Time = animx.keys[i1].time;
        const key2Time = animx.keys[i2].time;
        const perc = (time - key1Time) / (key2Time - key1Time);

        quat.set(Anim.slerpQuaternion.q1, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);

        quat.set(Anim.slerpQuaternion.q2, animx.keys[i2].value, animy.keys[i2].value, animz.keys[i2].value, animw.keys[i2].value);

        quat.slerp(q, Anim.slerpQuaternion.q1, Anim.slerpQuaternion.q2, perc);
    }
    return q;
};

const ANIM = { "Key": Key };




;// CONCATENATED MODULE: ./src/core/core_link.js



/**
 * @namespace external:CABLES#Link
 * @param {Object} scene The patch object
 * @description a link is a connection between two ops/ports -> one input and one output port
 * @hideconstructor
 * @class
 */
const Link = function (scene)
{
    EventTarget.apply(this);

    this.id = CABLES.simpleId();
    this.portIn = null;
    this.portOut = null;
    this.scene = scene; // todo: make private and rename to patch
    this.activityCounter = 0;
    this.ignoreInSerialize = false;
};

Link.prototype.setValue = function (v)
{
    if (v === undefined) this._setValue();
    else this.portIn.set(v);
};

Link.prototype.activity = function ()
{
    this.activityCounter++;
    // if(Date.now()-this.lastTime>100)
    // {
    //     // this.lastTime=Date.now();
    //     // this.changesPerSecond=this.changesCounter*10;
    //     this.changesCounter=0;
    // }
};

Link.prototype._setValue = function ()
{
    if (!this.portOut)
    {
        this.remove();
        return;
    }
    const v = this.portOut.get();

    if (v == v) // NaN is the only JavaScript value that is treated as unequal to itself
    {
        if (this.portIn.type != CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) this.activity();

        if (this.portIn.get() !== v)
        {
            this.portIn.set(v);
        }
        else
        {
            if (this.portIn.changeAlways) this.portIn.set(v);
            if (this.portOut.forceRefChange) this.portIn.forceChange();
        }
    }
};

/**
 * @function getOtherPort
 * @memberof Link
 * @instance
 * @param {Port} p port
 * @description returns the port of the link, which is not port
 */
Link.prototype.getOtherPort = function (p)
{
    if (p == this.portIn) return this.portOut;
    return this.portIn;
};

/**
 * @function remove
 * @memberof Link
 * @instance
 * @description unlink/remove this link from all ports
 */
Link.prototype.remove = function ()
{
    if (this.portIn) this.portIn.removeLink(this);
    if (this.portOut) this.portOut.removeLink(this);
    if (this.scene)
    {
        this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this);
    }

    if (this.portIn && (this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT || this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY))
    {
        this.portIn.set(null);
        if (this.portIn.links.length > 0) this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get());
    }

    if (this.portIn) this.portIn.op._checkLinksNeededToWork();
    if (this.portOut) this.portOut.op._checkLinksNeededToWork();

    this.portIn = null;
    this.portOut = null;
    this.scene = null;
};

/**
 * @function link
 * @memberof Link
 * @instance
 * @description link those two ports
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.prototype.link = function (p1, p2)
{
    if (!Link.canLink(p1, p2))
    {
        console.warn("[core_link] cannot link ports!", p1, p2);
        return false;
    }

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        this.portIn = p1;
        this.portOut = p2;
    }
    else
    {
        this.portIn = p2;
        this.portOut = p1;
    }

    p1.addLink(this);
    p2.addLink(this);

    this.setValue();

    if (p1.onLink) p1.onLink(this);
    if (p2.onLink) p2.onLink(this);

    p1.op._checkLinksNeededToWork();
    p2.op._checkLinksNeededToWork();
};

Link.prototype.getSerialized = function ()
{
    const obj = {};

    obj.portIn = this.portIn.getName();
    obj.portOut = this.portOut.getName();
    obj.objIn = this.portIn.op.id;
    obj.objOut = this.portOut.op.id;

    return obj;
};

// --------------------------------------------

/**
 * @function canLinkText
 * @memberof Link
 * @instance
 * @description return a text message with human readable reason if ports can not be linked, or can be
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.canLinkText = function (p1, p2)
{
    if (p1.direction == p2.direction)
    {
        let txt = "(out)";
        if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN) txt = "(in)";
        return "can not link: same direction " + txt;
    }
    if (p1.op == p2.op) return "can not link: same op";
    if (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)
    {
        if (p1.type != p2.type) return "can not link: different type";
    }

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return "incompatible objects";
    }


    if (!p1) return "can not link: port 1 invalid";
    if (!p2) return "can not link: port 2 invalid";

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return "can not link: is animated";
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return "can not link: is animated";

    // if(p1.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p1.links.length>0)return 'input port already busy';
    // if(p2.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p2.links.length>0)return 'input port already busy';
    if (p1.isLinkedTo(p2)) return "ports already linked";

    if ((p1.canLink && !p1.canLink(p2)) || (p2.canLink && !p2.canLink(p1))) return "Incompatible";

    return "can link";
};

/**
 * @function canLink
 * @memberof Link
 * @instance
 * @description return true if ports can be linked
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 * @returns {Boolean}
 */
Link.canLink = function (p1, p2)
{
    if (!p1) return false;
    if (!p2) return false;
    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return false;
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return false;

    if (p1.isHidden() || p2.isHidden()) return false;

    if (p1.isLinkedTo(p2)) return false;

    if (p1.direction == p2.direction) return false;

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
        {
            if (p1.uiAttribs.objType.indexOf("sg_") == 0 && p2.uiAttribs.objType.indexOf("sg_") == 0) return true;
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return false;
        }
    }

    if (p1.type != p2.type && (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)) return false;
    if (p1.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC || p2.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;

    if (p1.op == p2.op) return false;

    if (p1.canLink && !p1.canLink(p2)) return false;
    if (p2.canLink && !p2.canLink(p1)) return false;

    return true;
};



;// CONCATENATED MODULE: ./src/core/core_port.js







/**
 * data is coming into and out of ops through input and output ports
 * @namespace external:CABLES#Port
 * @class
 * @hideconstructor
 * @param ___op
 * @param name
 * @param type
 * @param uiAttribs
 * @example
 * const myPort=op.inString("String Port");
 */
const Port = function (___op, name, type, uiAttribs)
{
    EventTarget.apply(this);

    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this._log = new Logger("core_port");
    /**
     * @type {Number}
     * @name direction
     * @instance
     * @memberof Port
     * @description direction of port (input(0) or output(1))
     */
    this.direction = CONSTANTS.PORT.PORT_DIR_IN;
    this.id = String(CABLES.simpleId());
    this._op = ___op;

    /**
     * @type {Array<Link>}
     * @name links
     * @instance
     * @memberof Port
     * @description links of port
     */
    this.links = [];
    this.value = 0.0;
    this.name = name;
    this.type = type || CONSTANTS.OP.OP_PORT_TYPE_VALUE;
    this.uiAttribs = uiAttribs || {};
    this.anim = null;
    this._oldAnimVal = -5711;
    this.defaultValue = null;


    this._uiActiveState = true;
    this.ignoreValueSerialize = false;
    this.onLinkChanged = null;
    this.crashed = false;

    this._valueBeforeLink = null;
    this._lastAnimFrame = -1;
    this._animated = false;

    this.onValueChanged = null;
    this.onTriggered = null;
    this.onUiActiveStateChange = null;
    this.changeAlways = false;
    this.forceRefChange = false;

    this._useVariableName = null;

    this.activityCounter = 0;
    this.apf = 0;
    this.activityCounterStartFrame = 0;

    this._tempLastUiValue = null;

    Object.defineProperty(this, "title", {
        get()
        {
            return this.uiAttribs.title || this.name;
        } });

    Object.defineProperty(this, "parent", {
        get()
        {
            this._log.stack("use port.op, not .parent");
            return this._op;
        } });

    Object.defineProperty(this, "op", {
        get()
        {
            return this._op;
        } });

    Object.defineProperty(this, "val", {
        get()
        {
            this._log.warn("val getter deprecated!", this);
            this._log.stack("val getter deprecated");
            return this.get();
        },
        set(v)
        {
            this._log.warn("val setter deprecated!", this);
            this._log.stack("val setter deprecated");
            this.setValue(v);
        }
    });
};


/**
 * copy over a uiattrib from an external connected port to another port
 * @function copyLinkedUiAttrib
 * @memberof Port
 * @param {string} which attrib name
 * @param {Port} port source port
 * @instance
 * @example

inArray.onLinkChanged=()=>
{
    if(inArray) inArray.copyLinkedUiAttrib("stride", outArray);
};

 */
Port.prototype.copyLinkedUiAttrib = function (which, port)
{
    if (!CABLES.UI) return;
    if (!this.isLinked()) return;

    const attr = {};
    attr[which] = this.links[0].getOtherPort(this).getUiAttrib(which);
    port.setUiAttribs(attr);
};


// TODO make extend class for ports, like for ops only for ui
Port.prototype.getValueForDisplay = function ()
{
    let str = this.value;

    if (typeof this.value === "string" || this.value instanceof String)
    {
        if (str.length > 1000)
        {
            str = str.substring(0, 999);
            str += "...";
        }
        if (this.uiAttribs && (this.uiAttribs.display == "boolnum"))
        {
            str += " - ";

            if (!this.value) str += "false";
            else str += "true";
        }

        str = str.replace(/[\u00A0-\u9999<>\&]/g, function (i)
        {
            return "&#" + i.charCodeAt(0) + ";";
        });


        if (str.length > 100) str = str.substring(0, 100);
    }
    else
    {
        str = this.value;
    }
    return str;
};

/**
 * change listener for input value ports, overwrite to react to changes
 * @function onChange
 * @memberof Port
 * @instance
 * @example
 * const myPort=op.inString("MyPort");
 * myPort.onChange=function()
 * {
 *   console.log("was changed to: ",myPort.get());
 * }
 *
 */
Port.prototype.onAnimToggle = function () {};
Port.prototype._onAnimToggle = function ()
{
    this.onAnimToggle();
};


/**
 * @function remove
 * @memberof Port
 * @instance
 * @description remove port
 */
Port.prototype.remove = function ()
{
    // this.setUiAttribs({ "hidePort": true });
    this.removeLinks();
    this._op.removePort(this);
};

/**
 * set ui attributes
 * @function setUiAttribs
 * @memberof Port
 * @instance
 * @param {Object} newAttribs
 * <pre>
 * title - overwrite title of port (by default this is portname)
 * greyout - port paramater will appear greyed out, can not be
 * hidePort - port will be hidden from op
 * hideParam - port params will be hidden from parameter panel
 * showIndex - only for dropdowns - show value index (e.g. `0 - normal` )
 * editorSyntax - set syntax highlighting theme for editor port
 * ignoreObjTypeErrors - do not auto check object types
 * </pre>
 * @example
 * myPort.setUiAttribs({greyout:true});
 */
Port.prototype.setUiAttribs = function (newAttribs)
{
    let changed = false;
    if (!this.uiAttribs) this.uiAttribs = {};

    for (const p in newAttribs)
    {
        if (newAttribs[p] === undefined)
        {
            // delete newAttribs[p];
            delete this.uiAttribs[p];
            continue;
        }
        if (this.uiAttribs[p] != newAttribs[p]) changed = true;
        this.uiAttribs[p] = newAttribs[p];

        if (p == "group" && this.indexPort) this.indexPort.setUiAttribs({ "group": newAttribs[p] });
    }

    if (newAttribs.hasOwnProperty("expose")) this._op.patch.emitEvent("subpatchExpose", this._op.uiAttribs.subPatch);

    if (changed) this.emitEvent("onUiAttrChange", newAttribs, this);
};

/**
 * get ui attributes
 * @function getUiAttribs
 * @memberof Port
 * @example
 * myPort.getUiAttribs();
 */
Port.prototype.getUiAttribs = function ()
{
    return this.uiAttribs;
};

/**
 * get ui attribute
 * @function getUiAttrib
 * @memberof Port
 * @instance
 * @param {String} attribName
 * <pre>
 * attribName - return value of the ui-attribute, or null on unknown attribute
 * </pre>
 * @example
 * myPort.setUiAttribs("values");
 */
Port.prototype.getUiAttrib = function (attribName)
{
    if (!this.uiAttribs || !this.uiAttribs.hasOwnProperty(attribName))
    {
        return null;
    }
    return this.uiAttribs[attribName];
};

/**
 * @function get
 * @memberof Port
 * @instance
 * @description get value of port
 */
Port.prototype.get = function ()
{
    if (this._animated && this._lastAnimFrame != this._op.patch.getFrameNum())
    {
        this._lastAnimFrame = this._op.patch.getFrameNum();
        this.value = this.anim.getValue(this._op.patch.timer.getTime());

        this._oldAnimVal = this.value;
        this.forceChange();
    }

    return this.value;
};

Port.prototype.setRef = function (v)
{
    this.forceRefChange = true;
    this.set(v);
};

/**
 * @function setValue
 * @memberof Port
 * @instance
 * @description set value of port / will send value to all linked ports (only for output ports)
 */
Port.prototype.set = Port.prototype.setValue = function (v)
{
    if (v === undefined) v = null;

    if (this._op.enabled && !this.crashed)
    {
        if (v !== this.value || this.changeAlways || this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE || this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY)
        {
            if (this._animated)
            {
                this.anim.setValue(this._op.patch.timer.getTime(), v);
            }
            else
            {
                try
                {
                    this.value = v;
                    this.forceChange();
                }
                catch (ex)
                {
                    this.crashed = true;

                    this.setValue = function (_v) {};
                    this.onTriggered = function () {};

                    this._log.error("exception in ", this._op);
                    this._log.error(ex);

                    this._op.patch.emitEvent("exception", ex, this._op);
                }

                if (this._op && this._op.patch && this._op.patch.isEditorMode() && this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) gui.texturePreview().updateTexturePort(this);
            }

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) for (let i = 0; i < this.links.length; ++i) this.links[i].setValue();
        }
    }
};

Port.prototype.updateAnim = function ()
{
    if (this._animated)
    {
        this.value = this.get();

        if (this._oldAnimVal != this.value || this.changeAlways)
        {
            this._oldAnimVal = this.value;
            this.forceChange();
        }
        this._oldAnimVal = this.value;
    }
};

Port.prototype.forceChange = function ()
{
    if (this.onValueChanged || this.onChange)
    {
        // very temporary: deprecated warning!!!!!!!!!
        // if(params.length>0) this._log.warn('TOM: port has onchange params!',this._op.objName,this.name);
    }
    this._activity();
    this.emitEvent("change", this.value, this);

    // try
    // {
    if (this.onChange) this.onChange(this, this.value);
    else if (this.onValueChanged) this.onValueChanged(this, this.value); // deprecated
    // }
    // catch (e)
    // {
    //     console.log(e);
    // }
};

/**
 * @function getTypeString
 * @memberof Port
 * @instance
 * @description get port type as string, e.g. "Function","Value"...
 * @return {String} type
 */
Port.prototype.getTypeString = function ()
{
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "Number";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "Trigger";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "Object";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "Dynamic";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "Array";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "String";
    return "Unknown";
};

Port.prototype.deSerializeSettings = function (objPort)
{
    if (!objPort) return;
    if (objPort.animated) this.setAnimated(objPort.animated);
    if (objPort.useVariable) this.setVariableName(objPort.useVariable);
    if (objPort.title) this.setUiAttribs({ "title": objPort.title });
    if (objPort.expose) this.setUiAttribs({ "expose": true });
    if (objPort.order) this.setUiAttribs({ "order": objPort.order });

    if (objPort.multiPortManual) this.setUiAttribs({ "multiPortManual": objPort.multiPortManual });
    if (objPort.multiPortNum) this.setUiAttribs({ "multiPortNum": objPort.multiPortNum });

    if (objPort.anim)
    {
        if (!this.anim) this.anim = new Anim({ "name": "port " + this.name });
        this._op._hasAnimPort = true;
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
        if (objPort.anim.loop) this.anim.loop = objPort.anim.loop;
        for (const ani in objPort.anim.keys)
        {
            this.anim.keys.push(new ANIM.Key(objPort.anim.keys[ani]));
        }
        this.anim.sortKeys();
    }
};


Port.prototype.setInitialValue = function (v)
{
    if (this.op.preservedPortLinks[this.name])
    {
        for (let i = 0; i < this.op.preservedPortLinks[this.name].length; i++)
        {
            const lobj = this.op.preservedPortLinks[this.name][i];
            this.op.patch._addLink(
                lobj.objIn,
                lobj.objOut,
                lobj.portIn,
                lobj.portOut);
        }
    }


    if (this.op.preservedPortValues && this.op.preservedPortValues.hasOwnProperty(this.name) && this.op.preservedPortValues[this.name] !== undefined)
    {
        this.set(this.op.preservedPortValues[this.name]);
    }
    else
    if (v !== undefined) this.set(v);
    if (v !== undefined) this.defaultValue = v;
};




Port.prototype.getSerialized = function ()
{
    let obj = { "name": this.getName() };


    if (!this.ignoreValueSerialize && this.links.length === 0)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) {}
        else obj.value = this.value;
    }
    if (this._useVariableName) obj.useVariable = this._useVariableName;
    if (this._animated) obj.animated = true;
    if (this.anim) obj.anim = this.anim.getSerialized();
    if (this.uiAttribs.multiPortNum) obj.multiPortNum = this.uiAttribs.multiPortNum;
    if (this.uiAttribs.multiPortManual) obj.multiPortManual = this.uiAttribs.multiPortManual;

    if (this.uiAttribs.display == "file") obj.display = this.uiAttribs.display;
    if (this.uiAttribs.expose)
    {
        obj.expose = true;
        if (this.uiAttribs.hasOwnProperty("order")) obj.order = this.uiAttribs.order;
    }
    if (this.uiAttribs.title) obj.title = this.uiAttribs.title;
    if ((this.preserveLinks || this.direction == CONSTANTS.PORT.PORT_DIR_OUT) && this.links.length > 0)
    {
        obj.links = [];
        for (const i in this.links)
        {
            if (!this.links[i].ignoreInSerialize && (this.links[i].portIn && this.links[i].portOut)) obj.links.push(this.links[i].getSerialized());
        }
    }

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN && this.links.length > 0)
    {
        for (const i in this.links)
        {
            if (!this.links[i].portIn || !this.links[i].portOut) continue;

            const otherp = this.links[i].getOtherPort(this);
            // check if functions exist, are defined in core_extend_ops code in ui
            if (otherp.op.isInBlueprint2 && this.op.isInBlueprint2)
            {
                if (otherp.op.isInBlueprint2() && !this.op.isInBlueprint2())
                {
                    obj.links = obj.links || [];
                    obj.links.push(this.links[i].getSerialized());
                }
            }
        }
    }

    if (obj.links && obj.links.length == 0) delete obj.links;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) delete obj.value;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION && this.links.length == 0) obj = null;
    if (obj && Object.keys(obj).length == 1 && obj.name)obj = null; // obj is null if there is no real information other than name

    // console.log(obj);
    cleanJson(obj);

    return obj;
};

Port.prototype.shouldLink = function ()
{
    return true;
};

/**
 * @function removeLinks
 * @memberof Port
 * @instance
 * @description remove all links from port
 */
Port.prototype.removeLinks = function ()
{
    let count = 0;
    while (this.links.length > 0)
    {
        count++;
        if (count > 5000)
        {
            this._log.warn("could not delete links... / infinite loop");
            this.links.length = 0;
            break;
        }
        this.links[0].remove();
    }
};

/**
 * @function removeLink
 * @memberof Port
 * @instance
 * @description remove all link from port
 * @param {CABLES.Link} link
 */
Port.prototype.removeLink = function (link)
{
    for (const i in this.links)
        if (this.links[i] == link)
            this.links.splice(i, 1);

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) this.setValue(this._valueBeforeLink || 0);
        else this.setValue(this._valueBeforeLink || null);
    }

    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    if (this.onLinkChanged) this.onLinkChanged();
    this.emitEvent("onLinkChanged");
    this.emitEvent("onLinkRemoved");
    this._op.emitEvent("onLinkChanged");
};

/**
 * @function getName
 * @memberof Port
 * @instance
 * @description return port name
 */
Port.prototype.getName = function ()
{
    return this.name;
};

/**
 * @function getTitle
 * @memberof Port
 * @instance
 * @description return port name or title
 */
Port.prototype.getTitle = function ()
{
    if (this.uiAttribs.title) return this.uiAttribs.title;
    return this.name;
};

Port.prototype.addLink = function (l)
{
    this._valueBeforeLink = this.value;
    this.links.push(l);
    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    if (this.onLinkChanged) this.onLinkChanged();
    this.emitEvent("onLinkChanged");
    this._op.emitEvent("onLinkChanged");
};

/**
 * @function getLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description return link, which is linked to otherPort
 */
Port.prototype.getLinkTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return this.links[i];
};

/**
 * @function removeLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description removes link, which is linked to otherPort
 */
Port.prototype.removeLinkTo = function (p2)
{
    for (const i in this.links)
    {
        if (this.links[i].portIn == p2 || this.links[i].portOut == p2)
        {
            this.links[i].remove();
            if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

            if (this.onLinkChanged) this.onLinkChanged();
            this.emitEvent("onLinkChanged");
            this.emitEvent("onLinkRemoved");
            return;
        }
    }
};

/**
 * @function isLinkedTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description returns true if port is linked to otherPort
 */
Port.prototype.isLinkedTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return true;

    return false;
};

Port.prototype._activity = function ()
{
    this.activityCounter++;
};

/**
 * @function trigger
 * @memberof Port
 * @instance
 * @description trigger the linked port (usually invoked on an output function port)
 */
Port.prototype.trigger = function ()
{
    const linksLength = this.links.length;

    this._activity();
    if (linksLength === 0) return;
    if (!this._op.enabled) return;

    let portTriggered = null;
    try
    {
        for (let i = 0; i < linksLength; ++i)
        {
            if (this.links[i].portIn)
            {
                portTriggered = this.links[i].portIn;

                portTriggered.op.patch.pushTriggerStack(portTriggered);
                portTriggered._onTriggered();

                portTriggered.op.patch.popTriggerStack();
            }
            if (this.links[i]) this.links[i].activity();
        }
    }
    catch (ex)
    {
        portTriggered.op.enabled = false;

        if (this._op.patch.isEditorMode())
        {
            // this._op.patch.emitEvent("exception", ex, portTriggered.op);
            // this._op.patch.emitEvent("opcrash", portTriggered);
            // console.log("crash", portTriggered.op.objName);

            if (portTriggered.op.onError) portTriggered.op.onError(ex);
        }
        this._log.error("exception in port: " + portTriggered.op.name, portTriggered.op);
        this._log.error(ex);
    }
};

Port.prototype.call = function ()
{
    this._log.warn("call deprecated - use trigger() ");
    this.trigger();
};

Port.prototype.execute = function ()
{
    this._log.warn("### execute port: " + this.getName(), this.goals.length);
};

Port.prototype.setVariableName = function (n)
{
    this._useVariableName = n;


    this._op.patch.on("variableRename", (oldname, newname) =>
    {
        if (oldname != this._useVariableName) return;
        this._useVariableName = newname;
    });
};

Port.prototype.getVariableName = function ()
{
    return this._useVariableName;
};

Port.prototype.setVariable = function (v)
{
    this.setAnimated(false);
    const attr = { "useVariable": false };

    if (this._variableIn && this._varChangeListenerId)
    {
        this._variableIn.off(this._varChangeListenerId);
        this._variableIn = null;
    }

    if (v)
    {
        this._variableIn = this._op.patch.getVar(v);

        if (!this._variableIn)
        {
            this._log.warn("PORT VAR NOT FOUND!!!", v);
        }
        else
        {
            if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
            {
                this._varChangeListenerId = this._variableIn.on("change", () => { this.set(null); this.set(this._variableIn.getValue()); });
            }
            else
            {
                this._varChangeListenerId = this._variableIn.on("change", this.set.bind(this));
            }
            this.set(this._variableIn.getValue());
        }
        this._useVariableName = v;
        attr.useVariable = true;
        attr.variableName = this._useVariableName;
    }
    else
    {
        attr.variableName = this._useVariableName = null;
        attr.useVariable = false;
    }

    this.setUiAttribs(attr);
    this._op.patch.emitEvent("portSetVariable", this._op, this, v);
};

Port.prototype._handleNoTriggerOpAnimUpdates = function (a)
{
    let hasTriggerPort = false;
    for (let i = 0; i < this._op.portsIn.length; i++)
    {
        if (this._op.portsIn.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        {
            hasTriggerPort = true;
            break;
        }
    }

    if (!hasTriggerPort)
    {
        if (a) this._notriggerAnimUpdate = this._op.patch.on("onRenderFrame",
            () =>
            {
                this.updateAnim();
            });
        else this._op.patch.removeEventListener(this._notriggerAnimUpdate);
    }
};

Port.prototype.setAnimated = function (a)
{
    if (this._animated != a)
    {
        this._animated = a;
        this._op._hasAnimPort = true;

        if (this._animated && !this.anim)
        {
            this.anim = new Anim({ "name": "port " + this.name });
            this.anim.addEventListener("onChange", () =>
            {
                this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
            });
        }
        this._onAnimToggle();
    }

    this._handleNoTriggerOpAnimUpdates(a);
    if (!a)
    {
        this.anim = null;
    }

    this.setUiAttribs({ "isAnimated": this._animated });
};

Port.prototype.toggleAnim = function ()
{
    this._animated = !this._animated;
    if (this._animated && !this.anim)
    {
        this.anim = new Anim({ "name": "port " + this.name });
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
    }
    this.setAnimated(this._animated);
    this._onAnimToggle();
    this.setUiAttribs({ "isAnimated": this._animated });
};

/**
 * <pre>
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_VALUE = 0;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_FUNCTION = 1;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_TEXTURE = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_ARRAY = 3;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC = 4;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_STRING = 5;
 * </pre>
 * @function getType
 * @memberof Port
 * @instance
 * @return {Number} type of port
 */
Port.prototype.getType = function ()
{
    return this.type;
};

/**
 * @function isLinked
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is linked
 */
Port.prototype.isLinked = function ()
{
    return this.links.length > 0 || this._animated || this._useVariableName != null;
};

Port.prototype.isBoundToVar = function ()
{
    const b = this._useVariableName != null;
    this.uiAttribs.boundToVar = b;
    return b;
};
/**
 * @function isAnimated
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is animated
 */
Port.prototype.isAnimated = function ()
{
    return this._animated;
};

/**
 * @function isHidden
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is hidden
 */
Port.prototype.isHidden = function ()
{
    return this.uiAttribs.hidePort;
};

/**
 * @function onTriggered
 * @memberof Port
 * @instance
 * @param {function} a onTriggeredCallback
 * @description set callback, which will be executed when port was triggered (usually output port)
 */
Port.prototype._onTriggered = function (a)
{
    this._activity();
    this._op.updateAnims();
    if (this._op.enabled && this.onTriggered) this.onTriggered(a);

    if (this._op.enabled) this.emitEvent("trigger");
};

Port.prototype._onSetProfiling = function (v)
{
    this._op.patch.profiler.add("port", this);
    this.setValue(v);
    this._op.patch.profiler.add("port", null);
};

Port.prototype._onTriggeredProfiling = function ()
{
    if (this._op.enabled && this.onTriggered)
    {
        this._op.patch.profiler.add("port", this);
        this.onTriggered();
        this._op.patch.profiler.add("port", null);
    }
};



Port.prototype.getUiActiveState = function ()
{
    return this._uiActiveState;
};

Port.prototype.setUiActiveState = function (onoff)
{
    this._uiActiveState = onoff;
    if (this.onUiActiveStateChange) this.onUiActiveStateChange();
};

/**
 * @deprecated
 * @param {function} cb
 */
Port.prototype.onValueChange = function (cb)
{
    this.onChange = cb;
};

/**
 * @deprecated
 */
Port.prototype.hidePort = function () {};


/**
 * Returns the port type string, e.g. "value" based on the port type number
 * @function portTypeNumberToString
 * @instance
 * @memberof Port
 * @param {Number} type - The port type number
 * @returns {String} - The port type as string
 */
Port.portTypeNumberToString = function (type)
{
    if (type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "value";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "function";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "object";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "array";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "string";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "dynamic";
    return "unknown";
};



;// CONCATENATED MODULE: ./src/core/core_port_switch.js




class SwitchPort extends Port
{
    constructor(__parent, name, type, uiAttribs, indexPort)
    {
        super(__parent, name, type, uiAttribs);

        this.get = () =>
        {
            let s = super.get();

            if (CABLES.UI)
            {
                if (
                    s === "" ||
                    s === null ||
                    s === undefined ||
                    (uiAttribs.values && uiAttribs.values.indexOf(String(s)) === -1)
                )
                {
                    this.op.setUiError("invalidswitch", "Invalid Value [" + this.name + "]: \"" + s + "\"", 1);
                }
                else this.op.setUiError("invalidswitch", null);
            }

            if (s === null || s === undefined)s = "";

            return s;
        };

        this.indexPort = indexPort;
        this.indexPort.set = (value) =>
        {
            const values = uiAttribs.values;

            if (!values)
            {
                // console.log("switch port has no values", this);
                return;
            }

            let intValue = Math.floor(value);

            intValue = Math.min(intValue, values.length - 1);
            intValue = Math.max(intValue, 0);

            this.indexPort.setValue(intValue);
            this.set(values[intValue]);

            if (this.op.patch.isEditorMode() && performance.now() - (this.lastTime || 0) > 100 && window.gui && gui.patchView.isCurrentOp(this.op))
            {
                gui.opParams.show(this.op);
                this.lastTime = performance.now();
            }
        };
    }

    setUiAttribs(attribs)
    {
        const hidePort = attribs.hidePort;
        attribs.hidePort = true;
        super.setUiAttribs(attribs);
        if (typeof hidePort !== "undefined")
        {
            this.indexPort.setUiAttribs({ hidePort });
        }
    }
}



;// CONCATENATED MODULE: ./src/core/core_port_select.js




class ValueSelectPort extends SwitchPort
{
    setUiAttribs(newAttribs)
    {
        // never unhide valuePort when indexPort is linked
        if (this.indexPort.isLinked())
        {
            for (const p in newAttribs)
            {
                if (p == "greyout" && !newAttribs[p]) newAttribs[p] = "true";
            }
        }
        super.setUiAttribs(newAttribs);
    }
}





;// CONCATENATED MODULE: ./src/core/core_port_multi.js



const MIN_NUM_PORTS = 2;

class MultiPort extends Port
{
    constructor(__parent, name, type, dir, uiAttribs, uiAttribsPorts)
    {
        super(__parent, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, uiAttribs);

        this.setUiAttribs({ "multiPort": true, "group": this.name, "order": -1 });
        this.ports = [];
        this.direction = dir;
        this._uiAttribsPorts = uiAttribsPorts;

        // console.log("uiattribs", uiAttribs);

        const updateArray = () =>
        {
            const arr = [];

            let ll = 1;
            if (this.uiAttribs.multiPortManual)ll = 0;

            for (let i = 0; i < this.ports.length - ll; i++)
                arr[i] = this.ports[i];

            this.setRef(arr);
        };

        const updateUi = () =>
        {
            let grey = !this.uiAttribs.multiPortManual || undefined;

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT)grey = false;

            for (let i = 0; i < this.ports.length; i++)
            {
                let lp; // undefined to remove/not set it
                // let opacity;// undefined to remove/not set it
                // let grey;// undefined to remove/not set it
                let addPort = false;
                let title;
                let o = {};


                // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
                if (this.op.preservedPortTitles && this.op.preservedPortTitles[this.ports[i].name]) title = this.op.preservedPortTitles[this.ports[i].name];


                // if (!this.uiAttribs.multiPortManual)grey = true;
                if (i == 0) lp = this.ports.length;

                if (!this.uiAttribs.multiPortManual)
                    if (i == this.ports.length - 1)
                    {
                        title = "add port";
                        addPort = true;
                        grey = true;
                    }

                for (const attin in this._uiAttribsPorts)
                {
                    o[attin] = this._uiAttribsPorts[attin];
                }

                o.addPort = addPort;
                o.longPort = lp;
                o.title = title;
                o.greyout = grey;
                o.group = this.name;

                this.ports[i].setUiAttribs(o);
            }
        };

        this.removeInvalidPorts = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                if (!this.ports[i]) this.ports.splice(i, 1);
            }

            if (!this.uiAttribs.multiPortManual)
            {
                if (this.ports.length > MIN_NUM_PORTS)

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (!this.ports[i].isLinked()) this.uiAttribs.multiPortNum = i;
                        else break;
                    }
            }

            updateArray();
        };

        this.countPorts = () =>
        {
            if (CABLES.UI && !gui.isRemoteClient && gui.patchView && gui.patchView.patchRenderer && gui.patchView.patchRenderer.isDraggingPort())
            {
                clearTimeout(this.retryTo);
                this.retryTo = setTimeout(this.countPorts.bind(this));
                return;
            }
            this.retryTo = null;

            let redo = false;
            this.removeListeners();
            this.removeInvalidPorts();

            for (let i = 0; i < this.ports.length; i++)
            {
                if (this.ports[i] && this.ports[i].links.length > 1)
                {
                    const po = this.ports[i + 1];
                    const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);

                    if (!po || !otherPort)
                    {
                        this._log.warn("no port found?", po.name);
                    }
                    else
                    {
                        this.ports[i].links[0].remove();
                        this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                        redo = true;
                    }
                    break;
                }
            }

            if (!this.uiAttribs.multiPortManual)
            {
                let foundHole = true;
                while (foundHole)
                {
                    // console.log("search holes...");
                    foundHole = false;

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (this.ports[i] && this.ports[i].links.length > 0 && this.ports[i - 1].links.length == 0)
                        {
                            // console.log("found hole!");

                            // found hole
                            const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);
                            this.ports[i].links[0].remove();

                            const po = this.ports[i - 1];

                            if (po && this.ports[i])
                            {
                                // console.log("move ", this.ports[i].name, "to", po.name);
                                this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                                foundHole = true;
                                redo = true;
                                break;
                            }
                        }
                    }


                    // this.checkNum();
                }

                // this.removeInvalidPorts();
            }


            if (!this.uiAttribs.multiPortManual) // if auto
            {
                while (this.ports.length > MIN_NUM_PORTS && !this.ports[this.ports.length - 1].isLinked() && !this.ports[this.ports.length - 2].isLinked())
                {
                    let i = this.ports.length - 1;
                    if (!this.ports[i].isLinked() && this.ports[i - 1] && !this.ports[i - 1].isLinked())
                    {
                        this.ports[i].setUiAttribs({ "removed": true });
                        this.ports[i].remove();
                        // this.ports[i] = null;
                        this.ports.splice(i, 1);
                    }
                }
            }

            this.removeInvalidPorts();

            if (!this.uiAttribs.multiPortManual && this.ports.length > 0 && this.ports[this.ports.length - 1].isLinked()) this.newPort();

            updateArray();
            updateUi();

            if (redo) this.countPorts();
            else this.addListeners();
        };

        this.removeListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
            }
        };

        this.addListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                const idx = i;

                if (po.multiPortChangeListener)po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiPortChangeListener = po.on("change", updateArray.bind(this));


                if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                po.multiPortTriggerListener = po.on("trigger", () => { this._onTriggered(idx); });


                // if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                // po.multiPortTriggerListener = po.on("trigger", this.trigger());

                if (po.multiLinkChangeListener)po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
                po.multiLinkChangeListener = po.on("onLinkChanged", () =>
                {
                    this.countPorts();
                    this.emitEvent("onLinkChanged");
                });

                if (po.multiLinkRemoveListener)po.multiLinkRemoveListener = po.off(po.multiLinkRemoveListener);
                po.multiLinkRemoveListener = po.on("onLinkRemoved", () =>
                {
                    // this.removeInvalidPorts();
                    // this.checkNum();
                    // this.countPorts();
                    updateUi();
                    this.emitEvent("onLinkChanged");
                    // this.countPorts.bind(this);
                });
            }
        };

        this.newPort = () =>
        {
            const attrs = {};
            // if (type == CABLES.OP_PORT_TYPE_STRING) attrs.type = "string";
            attrs.type = type;
            const po = new Port(this.op, name + "_" + this.ports.length, type, attrs);

            po.direction = dir;
            this.ports.push(po);
            // console.log("CONSTANTS.PORT_DIR_OUT", CONSTANTS.PORT.PORT_DIR_OUT, this.direction);
            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) this.op.addOutPort(po);
            else this.op.addInPort(po);

            if (type == CONSTANTS.OP.OP_PORT_TYPE_NUMBER) po.setInitialValue(0);
            else if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) po.setInitialValue("");

            this.addListeners();

            updateUi();
            updateArray();
            this.emitEvent("onLinkChanged");
            // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
            if (this.op.preservedPortTitles && this.op.preservedPortTitles[po.name]) po.setUiAttribs({ "title": this.op.preservedPortTitles[po.name] });

            return po;
        };

        this.initPorts = () =>
        {
            for (let i = 0; i < MIN_NUM_PORTS; i++) this.newPort();
            updateArray();
            updateUi();
        };

        this.checkNum = () =>
        {
            this.uiAttribs.multiPortNum = Math.max(MIN_NUM_PORTS, this.uiAttribs.multiPortNum);

            while (this.ports.length < this.uiAttribs.multiPortNum) this.newPort();
            while (this.ports.length > this.uiAttribs.multiPortNum) if (this.ports[this.ports.length - 1]) this.ports.pop().remove();

            this.removeInvalidPorts();
        };

        this.incDec = (incDir) =>
        {
            this.uiAttribs.multiPortNum = this.uiAttribs.multiPortNum || MIN_NUM_PORTS;
            // console.log("this.uiAttribs.multiPortNum", this.uiAttribs.multiPortNum, this.uiAttribs.multiPortNum + incDir);
            this.setUiAttribs({ "multiPortNum": this.uiAttribs.multiPortNum + incDir });
            this.checkNum();

            updateUi();
        };

        this.toggleManual = () =>
        {
            this.setUiAttribs({ "multiPortManual": !this.uiAttribs.multiPortManual });
            this.op.refreshParams();
        };

        this.on("onUiAttrChange", (attribs) =>
        {
            if (attribs.hasOwnProperty("multiPortManual"))
            {
                updateUi();
                this.removeInvalidPorts();
                this.checkNum();
                this.countPorts();
                updateUi();
            }
        });


        this.on("onUiAttrChange", this.checkNum.bind(this));
        this.checkNum();
        this.countPorts();
        this.removeInvalidPorts();
        updateUi();
    }
}





;// CONCATENATED MODULE: ./src/core/core_op.js









/**
 * op the class of all operators
 * @namespace external:CABLES#Op
 * @hideconstructor
 */

/**
 * @type {Object}
 * @name attachments
 * @instance
 * @memberof Op
 * @description access file attachments as String values
 * @example
 * // set shader source to attached files (files are called shader.vert / shader.frag)
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */

const Ops = {};

const Op = function ()
{
    EventTarget.apply(this);

    this._log = new Logger("core_op");
    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this.storage = {}; // op-specific data to be included in export
    this.__objName = "";
    this.portsOut = [];
    this.portsIn = [];
    this.portsInData = []; // original loaded patch data
    this.opId = ""; // unique op id
    this.uiAttribs = {};
    this.enabled = true;
    this.patch = arguments[0];
    this._name = arguments[1];
    this.preservedPortTitles = {};
    this.preservedPortValues = {};
    this.preservedPortLinks = {};

    this._linkTimeRules = {
        "needsLinkedToWork": [],
        "needsParentOp": null
    };

    this.shouldWork = {};
    this.hasUiErrors = false;
    this._uiErrors = {};
    this._hasAnimPort = false;

    if (arguments[1])
    {
        this._shortOpName = CABLES.getShortOpName(arguments[1]);
        this.getTitle();
    }

    this.id = arguments[2] || shortId(); // instance id
    this.onAddPort = null;
    this.onCreate = null;
    this.onResize = null;
    this.onLoaded = null;
    this.onDelete = null;
    this.onError = null;

    this._instances = null;

    /**
     * overwrite this to prerender shader and meshes / will be called by op `loadingStatus`
     * @function preRender
     * @memberof Op
     * @instance
     */
    this.preRender = null;

    /**
     * overwrite this to initialize your op
     * @function init
     * @memberof Op
     * @instance
     */
    this.init = null;

    Object.defineProperty(this, "name", {
        get() { return this.getTitle(); },
        set(v)
        {
            this.setTitle(v);
        }
    });

    Object.defineProperty(this, "_objName", { set(on)
    {
        this.__objName = on; this._log = new Logger("op " + on);
    } });

    Object.defineProperty(this, "objName", { get() { return this.__objName; } });
    Object.defineProperty(this, "shortName", { get() { return this._shortOpName; } });

    if (this.initUi) this.initUi();
};

{
    Op.prototype.clearUiAttrib = function (name)
    {
        const obj = {};
        // obj.name = null;
        this.uiAttrib(obj);
    };

    Op.prototype.checkMainloopExists = function ()
    {
        if (!CABLES.UI) return;
        if (!this.patch.cgl.mainloopOp) this.setUiError("nomainloop", "patch should have a mainloop to use this op");
        else this.setUiError("nomainloop", null);
    };

    Op.prototype.getTitle = function ()
    {
        if (!this.uiAttribs) return "nouiattribs" + this._name;

        // if ((this.uiAttribs.title === undefined || this.uiAttribs.title === "") && this.objName.indexOf("Ops.Ui.") == -1)
        //     this.uiAttribs.title = this._shortOpName;

        return this.uiAttribs.title || this._shortOpName;
    };

    Op.prototype.setTitle = function (title)
    {
        // this._log.log("settitle", title);
        // this._log.log(
        //     (new Error()).stack
        // );

        if (title != this.getTitle()) this.uiAttr({ "title": title });
    };

    Op.prototype.setStorage = function (newAttribs)
    {
        if (!newAttribs) return;
        this.storage = this.storage || {};

        let changed = false;
        for (const p in newAttribs)
        {
            if (this.storage[p] != newAttribs[p]) changed = true;
            this.storage[p] = newAttribs[p];
        }

        if (changed) this.emitEvent("onStorageChange", newAttribs);
    };

    Op.prototype.isSubPatchOp = function ()
    {
        if (this.storage) return (this.storage.subPatchVer || 0);
    };

    const _setUiAttrib = function (newAttribs)
    {
        if (!newAttribs) return;

        if (newAttribs.error || newAttribs.warning || newAttribs.hint)
        {
            this._log.warn("old ui error/warning attribute in " + this._name + ", use op.setUiError !", newAttribs);
        }


        if (typeof newAttribs != "object") this._log.error("op.uiAttrib attribs are not of type object");
        if (!this.uiAttribs) this.uiAttribs = {};

        let changed = false;
        let emitMove = false;
        if (
            CABLES.UI &&
            newAttribs.hasOwnProperty("translate") &&
            (
                !this.uiAttribs.translate ||
                this.uiAttribs.translate.x != newAttribs.translate.x ||
                this.uiAttribs.translate.y != newAttribs.translate.y
            )) emitMove = true;


        if (newAttribs.hasOwnProperty("title") && newAttribs.title != this.uiAttribs.title)
        {
            // const doEmitEvent = newAttribs.title != this.getTitle();
            this.uiAttribs.title = newAttribs.title;
            // if (doEmitEvent) this.emitEvent("onTitleChange", newAttribs.title);
            changed = true;
            // this.setTitle(newAttribs.title);
        }

        if (newAttribs.hasOwnProperty("disabled")) this.setEnabled(!newAttribs.disabled);

        for (const p in newAttribs)
        {
            if (this.uiAttribs[p] != newAttribs[p]) changed = true;
            this.uiAttribs[p] = newAttribs[p];
        }


        if (this.uiAttribs.hasOwnProperty("selected") && this.uiAttribs.selected == false) delete this.uiAttribs.selected;


        if (changed)
        {
            this.emitEvent("onUiAttribsChange", newAttribs);
            this.patch.emitEvent("onUiAttribsChange", this, newAttribs);
        }


        if (emitMove) this.emitEvent("move");
    };
    /**
     * setUiAttrib
     * possible values:
     * <pre>
     * warning - warning message - showing up in op parameter panel
     * error - error message - showing up in op parameter panel
     * extendTitle - op title extension, e.g. [ + ]
     * </pre>
     * @function setUiAttrib
     * @param {Object} newAttribs, e.g. {"attrib":value}
     * @memberof Op
     * @instance
     * @example
     * op.setUiAttrib({"extendTitle":str});
     */
    Op.prototype.setUiAttribs = Op.prototype.setUiAttrib = Op.prototype.uiAttr = _setUiAttrib;

    Op.prototype.getName = function ()
    {
        if (this.uiAttribs.name) return this.uiAttribs.name;
        return this._name;
    };

    Op.prototype.addOutPort = function (p)
    {
        p.direction = CONSTANTS.PORT.PORT_DIR_OUT;
        p._op = this;
        this.portsOut.push(p);
        this.emitEvent("onPortAdd", p);
        return p;
    };

    Op.prototype.hasDynamicPort = function ()
    {
        let i = 0;
        for (i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsIn[i].getName() == "dyn") return true;
        }
        for (i = 0; i < this.portsOut.length; i++)
        {
            if (this.portsOut[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsOut[i].getName() == "dyn") return true;
        }

        return false;
    };

    Op.prototype.addInPort = function (p)
    {
        if (!(p instanceof Port)) throw new Error("parameter is not a port!");

        p.direction = CONSTANTS.PORT.PORT_DIR_IN;
        p._op = this;

        this.portsIn.push(p);
        this.emitEvent("onPortAdd", p);

        return p;
    };

    /**
     * create a trigger input port
     * @function inTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     *
     */
    Op.prototype.inFunction = Op.prototype.inTrigger = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create multiple UI trigger buttons
     * @function inTriggerButton
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Array} names
     * @return {Port} created port
     */
    Op.prototype.inFunctionButton = Op.prototype.inTriggerButton = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "button"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inFunctionButton = Op.prototype.inUiTriggerButtons = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "buttons"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };



    /**
     * create a number value input port
     * @function inFloat
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Number} value
     * @return {Port} created port
     */
    Op.prototype.inValueFloat = Op.prototype.inValue = Op.prototype.inFloat = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));

        p.setInitialValue(v);

        return p;
    };

    /**
     * create a boolean input port, displayed as a checkbox
     * @function inBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Boolean} value
     * @return {Port} created port
     */
    Op.prototype.inValueBool = Op.prototype.inBool = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "display": "bool"
            })
        );

        if (v === true)v = 1;
        if (v === false)v = 0;
        p.setInitialValue(v);

        return p;
    };


    Op.prototype.inMultiPort = function (name, type)
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_IN,
            {
                "addPort": true,
                "hidePort": true
            }
        );
        p.ignoreValueSerialize = true;

        this.addInPort(p);
        p.initPorts();

        return p;
    };

    Op.prototype.outMultiPort = function (name, type, uiAttribsPort = {})
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_OUT,
            {
                "display": "multiport",
                "hidePort": true
            },
            uiAttribsPort
        );
        p.ignoreValueSerialize = true;

        this.addOutPort(p);
        p.initPorts();

        return p;
    };



    Op.prototype.inValueString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port
     * @function inString
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        v = v || "";
        // p.value = v;

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port displayed as TextArea
     * @function inValueText
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueText = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        // if (v !== undefined)
        // {
        //     p.set(v);
        //     p.defaultValue = v;
        // }
        return p;
    };

    Op.prototype.inTextarea = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a String value input port displayed as editor
     * @function inStringEditor
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    // new string
    Op.prototype.inStringEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "editor",
                "editShortcut": true,
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            }));

        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    // old
    Op.prototype.inValueEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "type": "string",
                "display": "editor",
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a string select box
     * @function inDropDown
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueSelect = Op.prototype.inDropDown = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "increment": "integer",
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const valuePort = new ValueSelectPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_NUMBER,
                {
                    "display": "dropdown",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            valuePort.indexPort = indexPort;

            valuePort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                valuePort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };

            p = this.addInPort(valuePort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const valuePort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "dropdown",
                "hidePort": true,
                "type": "string",
                values
            });

            p = this.addInPort(valuePort);
        }

        return p;
    };

    /**
     * create a string switch box
     * @function inSwitch
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inSwitch = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            if (!v)v = values[0];
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer",
                "values": values,
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const switchPort = new SwitchPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_STRING,
                {
                    "display": "switch",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            switchPort.indexPort = indexPort;

            switchPort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                switchPort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };
            p = this.addInPort(switchPort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const switchPort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "switch",
                "hidePort": true,
                "type": "string",
                "values": values
            });
            p = this.addInPort(switchPort);
        }

        return p;
    };

    /**
     * create a integer input port
     * @function inInt
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueInt = Op.prototype.inInt = function (name, v)
    {
        // old
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer"
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a file/URL input port
     * @function inURL
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inFile = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.inUrl = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a texture input port
     * @function inTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inTexture = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "display": "texture",
                "objType": "texture",
                "preview": true
            })
        );
        p.ignoreValueSerialize = true;
        if (v !== undefined) p.set(v);
        return p;
    };


    /**
     * create a object input port
     * @function inObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inObject = function (name, v, objType)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType }));
        p.ignoreValueSerialize = true;

        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inGradient = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "gradient"
                // "hidePort": true
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };


    Op.prototype.getPortVisibleIndex = function (p)
    {
        let ports = this.portsIn;
        if (p.direction == CONSTANTS.PORT_DIR_OUT)ports = this.portsOut;

        let index = 0;
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i].uiAttribs.hidePort) continue;
            index++;
            if (ports[i] == p) return index;
        }
    };

    /**
     * create a array input port
     * @function inArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));

        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        // if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create a value slider input port
     * @function inFloatSlider
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} defaultvalue
     * @param {number} min
     * @param {number} max
     * @return {Port} created port
     */
    Op.prototype.inValueSlider = Op.prototype.inFloatSlider = function (name, v, min, max)
    {
        const uiattribs = { "display": "range" };

        if (min != undefined && max != undefined)
        {
            uiattribs.min = min;
            uiattribs.max = max;
        }

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, uiattribs));
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create output trigger port
     * @function outTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outFunction = Op.prototype.outTrigger = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create output value port
     * @function outNumber
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} default value
     * @return {Port} created port
     */
    Op.prototype.outValue = Op.prototype.outNumber = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * deprecated create output boolean port
     * @deprecated
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueBool = Op.prototype.outBool = function (name, v)
    {
        // old: use outBoolNum
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "bool"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output boolean port,value will be converted to 0 or 1
     * @function outBoolNum
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outBoolNum = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "boolnum"
            })
        );

        p.set = function (b)
        {
            this.setValue(b ? 1 : 0);
            // this._log.log("bool set", b, this.get());
        }.bind(p);

        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output string port
     * @function outString
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };
    Op.prototype.outString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set("");
        return p;
    };

    /**
     * create output object port
     * @function outObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outObject = function (name, v, objType)
    {
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType || null }));
        p.set(v || null);
        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output array port
     * @function outArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));
        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output texture port
     * @function outTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outTexture = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "preview": true,
                "objType": "texture",
                "display": "texture"
            })
        );
        if (v !== undefined) p.set(v || CGL.Texture.getEmptyTexture(this.patch.cgl));

        p.ignoreValueSerialize = true;
        return p;
    };

    Op.prototype.inDynamic = function (name, filter, options, v)
    {
        const p = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC, options);

        p.shouldLink = function (p1, p2)
        {
            if (filter && UTILS.isArray(filter))
            {
                for (let i = 0; i < filter.length; i++)
                {
                    if (p1 == this && p2.type === filter[i]) return true;
                    if (p2 == this && p1.type === filter[i]) return true;
                }
                return false; // types do not match
            }
            return true; // no filter set
        };

        this.addInPort(p);
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.removeLinks = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].removeLinks();
        for (let i = 0; i < this.portsOut.length; i++) this.portsOut[i].removeLinks();
    };

    Op.prototype.getSerialized = function ()
    {
        const opObj = {};

        if (this.opId) opObj.opId = this.opId;
        if (this.patch.storeObjNames) opObj.objName = this.objName;

        opObj.id = this.id;
        opObj.uiAttribs = JSON.parse(JSON.stringify(this.uiAttribs)) || {};

        if (this.storage && Object.keys(this.storage).length > 0) opObj.storage = JSON.parse(JSON.stringify(this.storage));
        if (this.uiAttribs.hasOwnProperty("working") && this.uiAttribs.working == true) delete this.uiAttribs.working;
        if (opObj.uiAttribs.hasOwnProperty("uierrors")) delete opObj.uiAttribs.uierrors;

        if (opObj.uiAttribs.title === "") delete opObj.uiAttribs.title;
        if (opObj.uiAttribs.color === null) delete opObj.uiAttribs.color;
        if (opObj.uiAttribs.comment === null) delete opObj.uiAttribs.comment;

        if (opObj.uiAttribs.title == this._shortOpName ||
            (this.uiAttribs.title || "").toLowerCase() == this._shortOpName.toLowerCase()) delete opObj.uiAttribs.title;

        opObj.portsIn = [];
        opObj.portsOut = [];

        for (let i = 0; i < this.portsIn.length; i++)
        {
            const s = this.portsIn[i].getSerialized();
            if (s) opObj.portsIn.push(s);
        }

        for (let i = 0; i < this.portsOut.length; i++)
        {
            const s = this.portsOut[i].getSerialized();
            if (s) opObj.portsOut.push(s);
        }

        if (opObj.portsIn.length == 0) delete opObj.portsIn;
        if (opObj.portsOut.length == 0) delete opObj.portsOut;
        cleanJson(opObj);

        return opObj;
    };

    Op.prototype.getFirstOutPortByType = function (type)
    {
        for (const ipo in this.portsOut) if (this.portsOut[ipo].type == type) return this.portsOut[ipo];
    };

    Op.prototype.getFirstInPortByType = function (type)
    {
        for (const ipo in this.portsIn) if (this.portsIn[ipo].type == type) return this.portsIn[ipo];
    };

    /**
     * return port by the name portName
     * @function getPort
     * @instance
     * @memberof Op
     * @param {String} portName
     * @return {Port}
     */
    Op.prototype.getPort = Op.prototype.getPortByName = function (name, lowerCase)
    {
        if (lowerCase)
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName().toLowerCase() == name || this.portsIn[ipi].id.toLowerCase() == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName().toLowerCase() == name || this.portsOut[ipo].id.toLowerCase() == name)
                    return this.portsOut[ipo];
        }
        else
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName() == name || this.portsIn[ipi].id == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName() == name || this.portsOut[ipo].id == name)
                    return this.portsOut[ipo];
        }
    };


    /**
     * return port by the name id
     * @function getPortById
     * @instance
     * @memberof Op
     * @param {String} id
     * @return {Port}
     */
    Op.prototype.getPortById = function (id)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++) if (this.portsIn[ipi].id == id) return this.portsIn[ipi];
        for (let ipo = 0; ipo < this.portsOut.length; ipo++) if (this.portsOut[ipo].id == id) return this.portsOut[ipo];
    };

    Op.prototype.updateAnims = function ()
    {
        if (this._hasAnimPort)
            for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].updateAnim();
    };

    Op.prototype.log = function ()
    {
        this._log.log(...arguments);
    };

    Op.prototype.error = Op.prototype.logError = function ()
    {
        // if (!this)
        // {
        //     this._log.error("no this...!!!");
        //     debugger;
        //     return;
        // }
        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 2 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.error, [console, args]);// eslint-disable-line
        // if (window.gui) window.gui.emitEvent("opLogEvent", this.objName, "error", arguments);
        this._log.error(...arguments);
    };

    Op.prototype.warn = Op.prototype.logWarn = function ()
    {
        this._log.warn(...arguments);

        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 1 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.warn, [console, args]);// eslint-disable-line
    };

    Op.prototype.verbose = Op.prototype.logVerbose = function ()
    {
        // const initiator = "op " + CABLES.getShortOpName(this.objName);
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 0 }, ...arguments)) return;

        // if (!CABLES.UI && this.patch.silent) return;

        // const args = ["[" + initiator + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.info, [console, args]);// eslint-disable-line
        this._log.verbose(...arguments);
    };


    Op.prototype.profile = function (enable)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            this.portsIn[ipi]._onTriggered = this.portsIn[ipi]._onTriggeredProfiling;
            this.portsIn[ipi].set = this.portsIn[ipi]._onSetProfiling;
        }
    };

    Op.prototype.findParent = function (objName)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi].isLinked())
            {
                if (this.portsIn[ipi].links[0].portOut.parent.objName == objName)
                    return this.portsIn[ipi].links[0].portOut.parent;

                let found = null;
                found = this.portsIn[ipi].links[0].portOut.parent.findParent(objName);
                if (found) return found;
            }
        }
        return null;
    };


    // todo: check instancing stuff?
    Op.prototype.cleanUp = function ()
    {
        if (this._instances)
        {
            for (let i = 0; i < this._instances.length; i++)
            {
                if (this._instances[i].onDelete) this._instances[i].onDelete();
            }


            this._instances.length = 0;
        }
        for (let i = 0; i < this.portsIn.length; i++)
        {
            this.portsIn[i].setAnimated(false);
        }

        if (this.onAnimFrame) this.patch.removeOnAnimFrame(this);
    };

    // todo: check instancing stuff?
    Op.prototype.instanced = function (triggerPort)
    {
        this._log.log("instanced", this.patch.instancing.numCycles());
        if (this.patch.instancing.numCycles() === 0) return false;


        let i = 0;
        let ipi = 0;
        if (!this._instances || this._instances.length != this.patch.instancing.numCycles())
        {
            if (!this._instances) this._instances = [];
            this._.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length);
            this._instances.length = this.patch.instancing.numCycles();

            for (i = 0; i < this._instances.length; i++)
            {
                this._instances[i] = this.patch.createOp(this.objName, true);
                this._instances[i].instanced = function ()
                {
                    return false;
                };
                this._instances[i].uiAttr(this.uiAttribs);

                for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                {
                    if (this.portsOut[ipo].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
                    {
                        this._instances[i].getPortByName(this.portsOut[ipo].name).trigger = this.portsOut[ipo].trigger.bind(this.portsOut[ipo]);
                    }
                }
            }

            for (ipi = 0; ipi < this.portsIn.length; ipi++)
            {
                this.portsIn[ipi].onChange = null;
                this.portsIn[ipi].onValueChanged = null;
            }
        }

        const theTriggerPort = null;
        for (ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (
                this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE ||
                this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY
            )
            {
                this._instances[this.patch.instancing.index()].portsIn[ipi].set(this.portsIn[ipi].get());
            }
            if (this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
            {
                // if(this._instances[ this.patch.instancing.index() ].portsIn[ipi].name==triggerPort.name)
                // theTriggerPort=this._instances[ this.patch.instancing.index() ].portsIn[ipi];
            }
        }

        if (theTriggerPort) theTriggerPort.onTriggered();

        for (ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE)
            {
                this.portsOut[ipi].set(this._instances[this.patch.instancing.index()].portsOut[ipi].get());
            }
        }

        return true;
    };

    // todo: check instancing stuff?
    Op.prototype.initInstancable = function ()
    {
        //         if(this.isInstanced)
        //         {
        //             this._log.log('cancel instancing');
        //             return;
        //         }
        //         this._instances=[];
        //         for(var ipi=0;ipi<this.portsIn.length;ipi++)
        //         {
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_VALUE)
        //             {
        //
        //             }
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //             {
        //                 // var piIndex=ipi;
        //                 this.portsIn[ipi].onTriggered=function(piIndex)
        //                 {
        //
        //                     var i=0;
        // // this._log.log('trigger',this._instances.length);
        //
        //                 }.bind(this,ipi );
        //
        //             }
        // };
        // this._instances=null;
    };

    Op.prototype.setValues = function (obj)
    {
        for (const i in obj)
        {
            const port = this.getPortByName(i);
            if (port) port.set(obj[i]);
            else this._log.warn("op.setValues: port not found:", i);
        }
    };

    /**
     * return true if op has this error message id
     * @function hasUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @returns {Boolean} - has id
     */
    Op.prototype.hasUiError = function (id)
    {
        return this._uiErrors.hasOwnProperty(id) && this._uiErrors[id];
    };

    /**
     * show op error message - set message to null to remove error message
     * @function setUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @param {txt} text message
     * @param {level} level
     */
    Op.prototype.setUiError = function (id, txt, level)
    {
        // overwritten in ui: core_extend_op
    };

    // todo: remove
    Op.prototype.setError = function (id, txt)
    {
        this._log.warn("old error message op.error() - use op.setUiError()");
    };


    /**
     * enable/disable op
     * @function
     * @instance
     * @memberof Op
     * @param {boolean}
     */
    Op.prototype.setEnabled = function (b)
    {
        this.enabled = b;
        this.emitEvent("onEnabledChange", b);
    };

    /**
     * organize ports into a group
     * @function
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} ports
     */
    Op.prototype.setPortGroup = function (name, ports)
    {
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i])
                if (ports[i].setUiAttribs) ports[i].setUiAttribs({ "group": name });
                else
                {
                    this._log.error("setPortGroup: invalid port!");
                }
        }
    };

    /**
     * visually indicate ports that they are coordinate inputs
     * @function
     * @instance
     * @memberof Op
     * @param {Port} portX
     * @param {Port} portY
     * @param {Port} portZ
     */
    Op.prototype.setUiAxisPorts = function (px, py, pz)
    {
        if (px) px.setUiAttribs({ "axis": "X" });
        if (py) py.setUiAttribs({ "axis": "Y" });
        if (pz) pz.setUiAttribs({ "axis": "Z" });
    };

    /**
     * remove port from op
     * @function removePort
     * @instance
     * @memberof Op
     * @param {Port} port to remove
     */
    Op.prototype.removePort = function (port)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi] == port)
            {
                this.portsIn.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
        for (let ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi] == port)
            {
                this.portsOut.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
    };

    Op.prototype._checkLinksNeededToWork = function () {};

    /**
     * show a warning of this op is not a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    Op.prototype.toWorkNeedsParent = function (parentOpName)
    {
        if (!this.patch.isEditorMode()) return;

        this._linkTimeRules.needsParentOp = parentOpName;
    };

    // /**
    //  * show a warning of this op is a child of parentOpName
    //  * @function
    //  * @instance
    //  * @memberof Op
    //  * @param {String} parentOpName
    //  */
    Op.prototype.toWorkShouldNotBeChild = function (parentOpName, type)
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.forbiddenParent = parentOpName;
        if (type != undefined) this._linkTimeRules.forbiddenParentType = type;
    };


    /**
     * show a small X to indicate op is not working when given ports are not linked
     * @function
     * @instance
     * @memberof Op
     * @param {Port} port1
     * @param {Port} port2
     * @param {Port} port3
     */
    Op.prototype.toWorkPortsNeedToBeLinked = function ()
    {
        if (!this.patch.isEditorMode()) return;
        for (let i = 0; i < arguments.length; i++)
            if (this._linkTimeRules.needsLinkedToWork.indexOf(arguments[i]) == -1) this._linkTimeRules.needsLinkedToWork.push(arguments[i]);
    };
    Op.prototype.toWorkPortsNeedToBeLinkedReset = function ()
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.needsLinkedToWork.length = 0;
        if (this.checkLinkTimeWarnings) this.checkLinkTimeWarnings();
    };

    Op.prototype.initVarPorts = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].getVariableName()) this.portsIn[i].setVariable(this.portsIn[i].getVariableName());
        }
    };

    /**
     * refresh op parameters, if current op is selected
     * @function
     * @instance
     * @memberof Op
     */
    Op.prototype.refreshParams = function ()
    {
        if (this.patch && this.patch.isEditorMode() && this.isCurrentUiOp())
        {
            gui.opParams.show(this);
        }
    };

    /**
     * Returns true if op is selected and parameter are shown in the editor, can only return true if in editor/ui
     * @function isCurrentUiOp
     * @instance
     * @memberof Op
     * @returns {Boolean} - is current ui op
     */
    Op.prototype.isCurrentUiOp = function ()
    {
        if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
    };

    /**
     * Implement to render 2d canvas based graphics from in an op
     * @function renderVizLayer
     * @instance
     * @memberof Op
     * @param {ctx} context of canvas 2d
     * @param {Object} layer info
     * @param {number} layer.x x position on canvas
     * @param {number} layer.y y position on canvas
     * @param {number} layer.width width of canvas
     * @param {number} layer.height height of canvas
     * @param {number} layer.scale current scaling of patchfield view
     */
    Op.prototype.renderVizLayer = null; // optionaly defined in op instance
}



;// CONCATENATED MODULE: ./src/core/loadingstatus.js




/**
 * LoadingStatus class, manages asynchronous loading jobs
 *
 * @namespace external:CABLES#LoadingStatus
 * @hideconstructor
 * @class
 * @param patch
 */
const LoadingStatus = function (patch)
{
    EventTarget.apply(this);

    this._log = new Logger("LoadingStatus");
    this._loadingAssets = {};
    this._cbFinished = [];
    this._assetTasks = [];
    this._percent = 0;
    this._count = 0;
    this._countFinished = 0;
    this._order = 0;
    this._startTime = 0;
    this._patch = patch;
    this._wasFinishedPrinted = false;
    this._loadingAssetTaskCb = false;
};

LoadingStatus.prototype.setOnFinishedLoading = function (cb)
{
    this._cbFinished.push(cb);
};

LoadingStatus.prototype.getNumAssets = function ()
{
    return this._countFinished;
};

LoadingStatus.prototype.getProgress = function ()
{
    return this._percent;
};

LoadingStatus.prototype.checkStatus = function ()
{
    this._countFinished = 0;
    this._count = 0;

    for (const i in this._loadingAssets)
    {
        this._count++;
        if (!this._loadingAssets[i].finished)
        {
            this._countFinished++;
        }
    }

    this._percent = (this._count - this._countFinished) / this._count;

    if (this._countFinished === 0)
    {
        for (let j = 0; j < this._cbFinished.length; j++)
        {
            if (this._cbFinished[j])
            {
                const cb = this._cbFinished[j];
                setTimeout(() => { cb(this._patch); this.emitEvent("finishedAll"); }, 100);
            }
        }

        if (!this._wasFinishedPrinted)
        {
            this._wasFinishedPrinted = true;
            this.print();
        }
        this.emitEvent("finishedAll");
    }
};

LoadingStatus.prototype.getList = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        arr.push(this._loadingAssets[i]);
    }

    return arr;
};


LoadingStatus.prototype.getListJobs = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        if (!this._loadingAssets[i].finished)arr.push(this._loadingAssets[i].name);
    }

    return arr;
};

LoadingStatus.prototype.print = function ()
{
    if (this._patch.config.silent) return;

    const rows = [];

    for (const i in this._loadingAssets)
    {
        rows.push([
            this._loadingAssets[i].order,
            this._loadingAssets[i].type,
            this._loadingAssets[i].name,
            (this._loadingAssets[i].timeEnd - this._loadingAssets[i].timeStart) / 1000 + "s",
        ]);
    }

    this._log.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1000 + "s");
    this._log.table(rows);
    this._log.groupEnd();
};

LoadingStatus.prototype.finished = function (id)
{
    const l = this._loadingAssets[id];
    if (l)
    {
        if (l.finished) this._log.warn("loading job was already finished", l);

        if (l.op) l.op.setUiAttribs({ "loading": false });
        l.finished = true;
        l.timeEnd = Date.now();
    }

    this.checkStatus();
    this.emitEvent("finishedTask");
    return null;
};

LoadingStatus.prototype._startAssetTasks = function ()
{
    for (let i = 0; i < this._assetTasks.length; i++) this._assetTasks[i]();
    this._assetTasks.length = 0;
};

/**
 * delay an asset loading task, mainly to wait for ui to be finished loading and showing, and only then start loading assets
 * @function addAssetLoadingTask
 * @instance
 * @memberof LoadingStatus
 * @param {function} cb callback
 */
LoadingStatus.prototype.addAssetLoadingTask = function (cb)
{
    if (this._patch.isEditorMode() && !CABLES.UI.loaded)
    {
        this._assetTasks.push(cb);

        if (!this._loadingAssetTaskCb)window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this));
        this._loadingAssetTaskCb = true;
    }
    else
    {
        cb();
    }
    this.emitEvent("addAssetTask");
};

LoadingStatus.prototype.existByName = function (name)
{
    for (let i in this._loadingAssets)
    {
        if (this._loadingAssets[i].name == name && !this._loadingAssets[i].finished)
            return true;
    }
};

LoadingStatus.prototype.start = function (type, name, op)
{
    if (this._startTime == 0) this._startTime = Date.now();
    const id = generateUUID();

    name = name || "unknown";
    if (name.length > 100)name = name.substring(0, 100);


    if (op)op.setUiAttribs({ "loading": true });

    this._loadingAssets[id] = {
        "id": id,
        "op": op,
        "type": type,
        "name": name,
        "finished": false,
        "timeStart": Date.now(),
        "order": this._order,
    };
    this._order++;

    this.emitEvent("startTask");

    return id;
};



;// CONCATENATED MODULE: ./src/core/instancing.js
// todo: needs to be removed...

const Instancing = function ()
{
    this._loops = [];
    this._indizes = [];
    this._index = 0;
};

Instancing.prototype.pushLoop = function (maxNum)
{
    this._loops.push(Math.abs(Math.floor(maxNum)));
    this._indizes.push(this._index);
};

Instancing.prototype.popLoop = function ()
{
    this._loops.pop();
    // this._index--;
    this._index = this._indizes.pop();
    if (this._loops.length === 0) this._index = 0;
};

Instancing.prototype.numLoops = function ()
{
    return this._loops.length;
};

Instancing.prototype.numCycles = function ()
{
    if (this._loops.length === 0) return 0;
    let num = this._loops[0];
    for (let i = 1; i < this._loops.length; i++) num *= this._loops[i];

    return num;
};

Instancing.prototype.inLoop = function ()
{
    return this._loops.length > 0;
};

Instancing.prototype.increment = function ()
{
    this._index++;
};

Instancing.prototype.index = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/timer.js


/** @namespace CABLES */

const internalNow = function ()
{
    return window.performance.now();
};

/**
 * current time in milliseconds
 * @memberof CABLES
 * @function now
 * @static
 */
const now = function ()
{
    return internalNow();
};

// ----------------------------

/**
 * Measuring time
 * @namespace external:CABLES#Timer
 * @hideconstructor
 * @class
 */
const Timer = function ()
{
    EventTarget.apply(this);

    this._timeStart = internalNow();
    this._timeOffset = 0;

    this._currentTime = 0;
    this._lastTime = 0;
    this._paused = true;
    this._delay = 0;
    this.overwriteTime = -1;
};


Timer.prototype._internalNow = function ()
{
    if (this._ts) return this._ts;
    return internalNow();
};

Timer.prototype._getTime = function ()
{
    this._lastTime = (this._internalNow() - this._timeStart) / 1000;
    return this._lastTime + this._timeOffset;
};

Timer.prototype.setDelay = function (d)
{
    this._delay = d;
    this.emitEvent("timeChange");
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @description returns true if timer is playing
 * @return {Boolean} value
 */
Timer.prototype.isPlaying = function ()
{
    return !this._paused;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @param ts
 * @description update timer
 * @return {Number} time
 */
Timer.prototype.update = function (ts)
{
    if (ts) this._ts = ts;
    if (this._paused) return;
    this._currentTime = this._getTime();

    return this._currentTime;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} time in milliseconds
 */
Timer.prototype.getMillis = function ()
{
    return this.get() * 1000;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} value time in seconds
 */
Timer.prototype.get = Timer.prototype.getTime = function ()
{
    if (this.overwriteTime >= 0) return this.overwriteTime - this._delay;
    return this._currentTime - this._delay;
};

/**
 * toggle between play/pause state
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.togglePlay = function ()
{
    if (this._paused) this.play();
    else this.pause();
};

/**
 * set current time
 * @function
 * @memberof Timer
 * @instance
 * @param {Number} t
 */
Timer.prototype.setTime = function (t)
{
    if (isNaN(t) || t < 0) t = 0;
    this._timeStart = this._internalNow();
    this._timeOffset = t;
    this._currentTime = t;
    this.emitEvent("timeChange");
};

Timer.prototype.setOffset = function (val)
{
    if (this._currentTime + val < 0)
    {
        this._timeStart = this._internalNow();
        this._timeOffset = 0;
        this._currentTime = 0;
    }
    else
    {
        this._timeOffset += val;
        this._currentTime = this._lastTime + this._timeOffset;
    }
    this.emitEvent("timeChange");
};

/**
 * (re)starts the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.play = function ()
{
    this._timeStart = this._internalNow();
    this._paused = false;
    this.emitEvent("playPause");
};

/**
 * pauses the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.pause = function ()
{
    this._timeOffset = this._currentTime;
    this._paused = true;
    this.emitEvent("playPause");
};



;// CONCATENATED MODULE: ./src/core/core_profiler.js


class Profiler
{
    constructor(patch)
    {
        this.startFrame = patch.getFrameNum();
        this.items = {};
        this.currentId = null;
        this.currentStart = 0;
        this._patch = patch;
    }

    getItems()
    {
        return this.items;
    }

    clear()
    {
        if (this.paused) return;
        this.items = {};
    }

    togglePause()
    {
        this.paused = !this.paused;
        if (!this.paused)
        {
            this.items = {};
            this.currentStart = performance.now();
        }
    }

    add(type, object)
    {
        if (this.paused) return;

        if (this.currentId !== null)
        {
            if (!object || object.id != this.currentId)
            {
                if (this.items[this.currentId])
                {
                    this.items[this.currentId].timeUsed += performance.now() - this.currentStart;

                    if (!this.items[this.currentId].peakTime || now() - this.items[this.currentId].peakTime > 5000)
                    {
                        this.items[this.currentId].peak = 0;
                        this.items[this.currentId].peakTime = now();
                    }
                    this.items[this.currentId].peak = Math.max(this.items[this.currentId].peak, performance.now() - this.currentStart);
                }
            }
        }

        if (object !== null)
        {
            if (!this.items[object.id])
            {
                this.items[object.id] = {
                    "numTriggers": 0,
                    "timeUsed": 0,
                };
            }

            if (this.items[object.id].lastFrame != this._patch.getFrameNum()) this.items[object.id].numTriggers = 0;

            this.items[object.id].lastFrame = this._patch.getFrameNum();
            this.items[object.id].numTriggers++;
            this.items[object.id].opid = object.op.id;
            this.items[object.id].title = object.op.name + "." + object.name;
            this.items[object.id].subPatch = object.op.uiAttribs.subPatch;

            this.currentId = object.id;
            this.currentStart = performance.now();
        }
        else
        {
            this.currentId = null;
        }
    }

    print()
    {
        console.log("--------");
        for (const i in this.items)
        {
            console.log(this.items[i].title + ": " + this.items[i].numTriggers + " / " + this.items[i].timeUsed);
        }
    }
}



;// CONCATENATED MODULE: ./src/core/cgl/constants.js
const SHADER = {
    // default attributes
    "SHADERVAR_VERTEX_POSITION": "vPosition",
    "SHADERVAR_VERTEX_NUMBER": "attrVertIndex",
    "SHADERVAR_VERTEX_NORMAL": "attrVertNormal",
    "SHADERVAR_VERTEX_TEXCOORD": "attrTexCoord",
    "SHADERVAR_INSTANCE_MMATRIX": "instMat",
    "SHADERVAR_VERTEX_COLOR": "attrVertColor",

    "SHADERVAR_INSTANCE_INDEX": "instanceIndex",

    // default uniforms
    "SHADERVAR_UNI_PROJMAT": "projMatrix",
    "SHADERVAR_UNI_VIEWMAT": "viewMatrix",
    "SHADERVAR_UNI_MODELMAT": "modelMatrix",
    "SHADERVAR_UNI_NORMALMAT": "normalMatrix",
    "SHADERVAR_UNI_INVVIEWMAT": "inverseViewMatrix",
    "SHADERVAR_UNI_INVPROJMAT": "invProjMatrix",
    "SHADERVAR_UNI_MATERIALID": "materialId",
    "SHADERVAR_UNI_OBJECTID": "objectId",

    "SHADERVAR_UNI_VIEWPOS": "camPos",
};


const BLEND_MODES = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};





const RAD2DEG = 180.0 / Math.PI;
const DEG2RAD = Math.PI / 180.0;

const constants_CONSTANTS = {
    "MATH": {
        "DEG2RAD": DEG2RAD,
        "RAD2DEG": RAD2DEG,
    },
    "SHADER": SHADER,
    "BLEND_MODES": BLEND_MODES,
};




;// CONCATENATED MODULE: ./src/core/cg/cg_uniform.js



class CgUniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        this._log = new Logger("cg_uniform");
        this._type = __type;
        this._name = __name;
        this._shader = __shader;
        this._value = 0.00001;
        this._oldValue = null;
        this._port = null;
        this._structName = _structName;
        this._structUniformName = _structUniformName;
        this._propertyName = _propertyName;

        this._shader._addUniform(this);
        this.needsUpdate = true;
        this.shaderType = null;
        this.comment = null;

        if (__type == "f")
        {
            this.set = this.setValue = this.setValueF.bind(this);
            this.updateValue = this.updateValueF.bind(this);
        }
        else if (__type == "f[]")
        {
            this.set = this.setValue = this.setValueArrayF.bind(this);
            this.updateValue = this.updateValueArrayF.bind(this);
        }
        else if (__type == "2f[]")
        {
            this.set = this.setValue = this.setValueArray2F.bind(this);
            this.updateValue = this.updateValueArray2F.bind(this);
        }
        else if (__type == "3f[]")
        {
            this.set = this.setValue = this.setValueArray3F.bind(this);
            this.updateValue = this.updateValueArray3F.bind(this);
        }
        else if (__type == "4f[]")
        {
            this.set = this.setValue = this.setValueArray4F.bind(this);
            this.updateValue = this.updateValueArray4F.bind(this);
        }
        else if (__type == "i")
        {
            this.set = this.setValue = this.setValueI.bind(this);
            this.updateValue = this.updateValueI.bind(this);
        }
        else if (__type == "2i")
        {
            this.set = this.setValue = this.setValue2I.bind(this);
            this.updateValue = this.updateValue2I.bind(this);
        }
        else if (__type == "3i")
        {
            this.set = this.setValue = this.setValue3I.bind(this);
            this.updateValue = this.updateValue3I.bind(this);
        }
        else if (__type == "4i")
        {
            this.set = this.setValue = this.setValue4I.bind(this);
            this.updateValue = this.updateValue4I.bind(this);
        }
        else if (__type == "b")
        {
            this.set = this.setValue = this.setValueBool.bind(this);
            this.updateValue = this.updateValueBool.bind(this);
        }
        else if (__type == "4f")
        {
            this.set = this.setValue = this.setValue4F.bind(this);
            this.updateValue = this.updateValue4F.bind(this);
        }
        else if (__type == "3f")
        {
            this.set = this.setValue = this.setValue3F.bind(this);
            this.updateValue = this.updateValue3F.bind(this);
        }
        else if (__type == "2f")
        {
            this.set = this.setValue = this.setValue2F.bind(this);
            this.updateValue = this.updateValue2F.bind(this);
        }
        else if (__type == "t")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "tc")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "t[]")
        {
            this.set = this.setValue = this.setValueArrayT.bind(this);
            this.updateValue = this.updateValueArrayT.bind(this);
        }
        else if (__type == "m4" || __type == "m4[]")
        {
            this.set = this.setValue = this.setValueM4.bind(this);
            this.updateValue = this.updateValueM4.bind(this);
        }
        else throw new Error("Unknown uniform type");

        if (typeof _value == "object" && _value instanceof Port)
        {
            this._port = _value;
            this._value = this._port.get();


            if (_port2 && _port3 && _port4)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port) || !(_port4 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                this._port4 = _port4;

                this._port.on("change", this.updateFromPort4f.bind(this));
                this._port2.on("change", this.updateFromPort4f.bind(this));
                this._port3.on("change", this.updateFromPort4f.bind(this));
                this._port4.on("change", this.updateFromPort4f.bind(this));

                // this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this);
                this.updateFromPort4f();
            }
            else if (_port2 && _port3)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                // this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this);
                this._port.on("change", this.updateFromPort3f.bind(this));
                this._port2.on("change", this.updateFromPort3f.bind(this));
                this._port3.on("change", this.updateFromPort3f.bind(this));

                this.updateFromPort3f();
            }
            else if (_port2)
            {
                if (!(_port2 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0];
                this._port2 = _port2;
                // this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this);
                this._port.on("change", this.updateFromPort2f.bind(this));
                this._port2.on("change", this.updateFromPort2f.bind(this));

                this.updateFromPort2f();
            }
            else
            {
                // this._port.on = this.updateFromPort.bind(this);
                this._port.on("change", this.updateFromPort.bind(this));
            }
        }
        else this._value = _value;

        this.setValue(this._value);
        this.needsUpdate = true;
    }


    getType()
    {
        return this._type;
    }

    getName()
    {
        return this._name;
    }

    getValue()
    {
        return this._value;
    }

    getShaderType()
    {
        return this.shaderType;
    }

    isStructMember()
    {
        return !!this._structName;
    }


    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }
}

/* harmony default export */ const cg_uniform = (CgUniform);

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_uniform.js




/**
 * Shader uniforms
 *
 * types:
 * <pre>
 * f    - float
 * 2f   - vec2
 * 3f   - vec3
 * 4f   - vec4
 * i    - integer
 * t    - texture
 * m4   - mat4, 4x4 float matrix
 * f[]  - array of floats
 * 2f[] - array of float vec2
 * 3f[] - array of float vec3
 * 4f[] - array of float vec4
 * </pre>
 *
 * @namespace external:CGL
 * @class
 * @param {Shader} shader
 * @param {String} [type=f]
 * @param {String} name
 * @param {Number|Port} value  can be a Number,Matrix or Port
 * @example
 * // bind float uniform called myfloat and initialize with value 1.0
 * const unir=new CGL.Uniform(shader,'f','myfloat',1.0);
 * unir.setValue(1.0);
 *
 * // bind float uniform called myfloat and automatically set it to input port value
 * const myPort=op.inFloat("input");
 * const pv=new CGL.Uniform(shader,'f','myfloat',myPort);
 *
 */


// export const Uniform(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)

class Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }

    get name()
    {
        return this._name;
    }

    copy(newShader)
    {
        const uni = new Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;
        return uni;
    }

    /**
     * returns type as glsl type string. e.g. 'f' returns 'float'
     * @function getGlslTypeString
     * @memberof Uniform
     * @instance
     * @return {string} type as string
     */
    getGlslTypeString()
    {
        return Uniform.glslTypeString(this._type);
    }

    _isValidLoc()
    {
        return this._loc != -1;// && this._loc != null;
    }

    resetLoc()
    {
        this._loc = -1;
        this.needsUpdate = true;
    }

    bindTextures() {}

    getLoc()
    {
        return this._loc;
    }

    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }

    updateValueF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1f(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueF(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    updateValueI()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue2I()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]);

        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue3I()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue4I()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueI(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValue2I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue3I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue4I(v)
    {
        this.needsUpdate = true;
        this._value = v || vec4.create();
    }

    updateValueBool()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0);

        this._cgl.profileData.profileUniformCount++;
    }

    setValueBool(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValueArray4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray4F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform4fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray3F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform3fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray2F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform2fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArrayF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }


    updateValue3F()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue3F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValue2F()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue2F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }
        this._value = v;
    }

    updateValue4F()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        if (!this._value)
        {
            this._log.warn("no value for uniform", this._name, this);
            this._value = [0, 0, 0, 0];
        }

        this.needsUpdate = false;
        this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValue4F(v)
    {
        if (typeof this.value == "number") this.value = vec4.create(); // this should not be needed, but somehow it crashes with some shadermods

        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2, 3];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2] || v[3] != this._oldValue[3])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValueM4()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        if (!this._value || this._value.length % 16 != 0) return console.log("this.name", this._name, this._value);

        this._shader.getCgl().gl.uniformMatrix4fv(this._loc, false, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v || mat4.create();
    }

    updateValueArrayT()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1iv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValueT()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._cgl.profileData.profileUniformCount++;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this.needsUpdate = false;
    }

    setValueT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }
}


Uniform.glslTypeString = (t) =>
{
    if (t == "f") return "float";
    if (t == "b") return "bool";
    if (t == "i") return "int";
    if (t == "2i") return "ivec2";
    if (t == "2f") return "vec2";
    if (t == "3f") return "vec3";
    if (t == "4f") return "vec4";
    if (t == "m4") return "mat4";

    if (t == "t") return "sampler2D";
    if (t == "tc") return "samplerCube";

    if (t == "3f[]") return null; // ignore this for now...
    if (t == "m4[]") return null; // ignore this for now...
    if (t == "f[]") return null; // ignore this for now...

    console.warn("[CGL UNIFORM] unknown glsl type string ", t);
};


/**
 * @function setValue
 * @memberof Uniform
 * @instance
 * @param {Number|Array|Matrix|Texture} value
 */



;// CONCATENATED MODULE: ./src/core/cgl/cgl_texture.js





const DEFAULT_TEXTURE_SIZE = 8;

/**
 * A Texture
 * @namespace external:CGL
 * @class
 * @param {Context} __cgl cgl
 * @param {Object} options
 * @hideconstructor
 * @example
 * // generate a 256x256 pixel texture of random colors
 * const size=256;
 * const data = new Uint8Array(size*size*4);
 *
 * for(var x=0;x<size*size*4;x++) data[ x*4+3]=255;
 *
 * const tex=new CGL.Texture(cgl);
 * tex.initFromData(data,size,size,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT);
 */
const Texture = function (__cgl, options = {})
{
    if (!__cgl) throw new Error("no cgl");
    this._log = new Logger("cgl_texture");
    this._cgl = __cgl;
    this.pixelFormat = options.pixelFormat || Texture.PFORMATSTR_RGBA8UB;
    this.tex = this._cgl.gl.createTexture();
    this.id = CABLES.uuid();
    this.width = 0;
    this.height = 0;
    this.loading = false;
    this.flip = true;
    this.flipped = false;
    this.shadowMap = false;
    this.deleted = false;
    this.image = null;
    this.anisotropic = 0;
    this.filter = Texture.FILTER_NEAREST;
    this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    this.texTarget = this._cgl.gl.TEXTURE_2D;
    if (options && options.type) this.texTarget = options.type;
    this.textureType = Texture.TYPE_DEFAULT;
    this.unpackAlpha = true;
    this._fromData = true;
    this.name = "unknown";

    this._glDataType = -1;
    this._glInternalFormat = -1;
    this._glDataFormat = -1;


    if (options)
    {
        this.name = options.name || this.name;
        if (options.isDepthTexture)
        {
            this.textureType = Texture.TYPE_DEPTH;
        }
        if (options.isFloatingPointTexture === true) this.textureType = Texture.TYPE_FLOAT;

        if ("textureType" in options) this.textureType = options.textureType;
        if ("filter" in options) this.filter = options.filter;
        if ("wrap" in options) this.wrap = options.wrap;
        if ("unpackAlpha" in options) this.unpackAlpha = options.unpackAlpha;
        if ("flip" in options) this.flip = options.flip;
        if ("shadowMap" in options) this.shadowMap = options.shadowMap;
        if ("anisotropic" in options) this.anisotropic = options.anisotropic;
    }
    else
    {
        options = {};
    }

    if (!options.pixelFormat && options.isFloatingPointTexture) this.pixelFormat = Texture.PFORMATSTR_RGBA32F;

    if (this.textureType == Texture.TYPE_DEPTH) this.pixelFormat = Texture.PFORMATSTR_DEPTH;



    if (!options.width) options.width = DEFAULT_TEXTURE_SIZE;
    if (!options.height) options.height = DEFAULT_TEXTURE_SIZE;

    this._cgl.profileData.profileTextureNew++;


    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));
    this._cgl.profileData.addHeavyEvent("texture created", this.name, options.width + "x" + options.height);

    this.setSize(options.width, options.height);
    this.getInfoOneLine();
};

Texture.prototype.isFloatingPoint = function ()
{
    return Texture.isPixelFormatFloat(this.pixelFormat);
};

/**
 * returns true if otherTexture has same options (width/height/filter/wrap etc)
 * @function compareSettings
 * @memberof Texture
 * @instance
 * @param {Texture} tex otherTexture
 * @returns {Boolean}
 */
Texture.prototype.compareSettings = function (tex)
{
    // if (!tex) { this._log.warn("compare: no tex"); return false; }
    // if (tex.width != this.width) this._log.warn("tex.width not equal", tex.width, this.width);
    // if (tex.height != this.height) this._log.warn("tex.height not equal", tex.height, this.height);
    // if (tex.filter != this.filter) this._log.warn("tex.filter not equal");
    // if (tex.wrap != this.wrap) this._log.warn("tex.wrap not equal");
    // if (tex.textureType != this.textureType) this._log.warn("tex.textureType not equal");
    // if (tex.unpackAlpha != this.unpackAlpha) this._log.warn("tex.unpackAlpha not equal");
    // if (tex.anisotropic != this.anisotropic) this._log.warn("tex.anisotropic not equal");
    // if (tex.shadowMap != this.shadowMap) this._log.warn("tex.shadowMap not equal");
    // if (tex.texTarget != this.texTarget) this._log.warn("tex.texTarget not equal");
    // if (tex.flip != this.flip) this._log.warn("tex.flip not equal");

    if (!tex) return false;
    return (
        tex.width == this.width &&
        tex.height == this.height &&
        tex.filter == this.filter &&
        tex.wrap == this.wrap &&
        tex.textureType == this.textureType &&
        tex.unpackAlpha == this.unpackAlpha &&
        tex.anisotropic == this.anisotropic &&
        tex.shadowMap == this.shadowMap &&
        tex.texTarget == this.texTarget &&
        tex.flip == this.flip
    );
};

/**
 * returns a new texture with the same settings (does not copy texture itself)
 * @function clone
 * @memberof Texture
 * @instance
 * @returns {Texture}
 */
Texture.prototype.clone = function ()
{
    const newTex = new Texture(this._cgl, {
        "name": this.name,
        "filter": this.filter,
        "anisotropic": this.anisotropic,
        "wrap": this.wrap,
        "textureType": this.textureType,
        "pixelFormat": this.pixelFormat,
        "unpackAlpha": this.unpackAlpha,
        "flip": this.flip,
        "width": this.width,
        "height": this.height,
    });

    this._cgl.profileData.addHeavyEvent("texture created", this.name, this.width + "x" + this.height);

    if (!this.compareSettings(newTex))
    {
        this._log.error("Cloned texture settings do not compare!");
        this._log.error(this);
        this._log.error(newTex);
    }

    return newTex;
};


Texture.prototype.setFormat = function (o)
{
    this.pixelFormat = o.pixelFormat;
    this._glDataFormat = o.glDataFormat;
    this._glInternalFormat = o.glInternalFormat;
    this._glDataType = o.glDataType;
};


Texture.setUpGlPixelFormat = function (cgl, pixelFormatStr)
{
    const o = {};

    if (!pixelFormatStr)
    {
        cgl._log.error("no pixelformatstr!");
        cgl._log.log(new Error());
        pixelFormatStr = Texture.PFORMATSTR_RGBA8UB;
    }

    o.pixelFormatBase = pixelFormatStr;
    o.pixelFormat = pixelFormatStr;
    o.glDataType = cgl.gl.UNSIGNED_BYTE;
    o.glInternalFormat = cgl.gl.RGBA8;
    o.glDataFormat = cgl.gl.RGBA;

    let floatDatatype = cgl.gl.FLOAT;

    if (cgl.glUseHalfFloatTex)
    {
        if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) pixelFormatStr = Texture.PFORMATSTR_RGBA16F;
        if (pixelFormatStr == Texture.PFORMATSTR_RG32F) pixelFormatStr = Texture.PFORMATSTR_RG16F;
        if (pixelFormatStr == Texture.PFORMATSTR_R32F) pixelFormatStr = Texture.PFORMATSTR_R16F;
    }

    if (pixelFormatStr.contains("16bit"))
    {
        if (cgl.glVersion == 2)
        {
            // cgl.enableExtension("OES_texture_half_float");
            const hasExt = cgl.enableExtension("EXT_color_buffer_half_float");

            if (!hasExt)
            {
                console.warn("no 16bit extension, fallback to 32bit", pixelFormatStr);
                // fallback to 32 bit?
                if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) pixelFormatStr = Texture.PFORMATSTR_RGBA32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RGB16F) pixelFormatStr = Texture.PFORMATSTR_RGB32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RG16F) pixelFormatStr = Texture.PFORMATSTR_RG32F;
                if (pixelFormatStr == Texture.PFORMATSTR_R16F) pixelFormatStr = Texture.PFORMATSTR_R32F;
            }
            else
            {
                floatDatatype = cgl.gl.HALF_FLOAT;
            }
        }
    }

    if (cgl.glVersion == 1)
    {
        o.glInternalFormat = cgl.gl.RGBA;

        if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F || pixelFormatStr == Texture.PFORMATSTR_RG16F || pixelFormatStr == Texture.PFORMATSTR_R16F)
        {
            const ext = cgl.enableExtension("OES_texture_half_float");
            if (!ext) throw new Error("no half float texture extension");

            floatDatatype = ext.HALF_FLOAT_OES;
        }
    }


    if (pixelFormatStr == Texture.PFORMATSTR_RGBA8UB)
    {
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB565)
    {
        o.glInternalFormat = cgl.gl.RGB565;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R8UB)
    {
        o.glInternalFormat = cgl.gl.R8;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG8UB)
    {
        o.glInternalFormat = cgl.gl.RG8;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB8UB)
    {
        o.glInternalFormat = cgl.gl.RGB8;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_SRGBA8)
    {
        o.glInternalFormat = cgl.gl.SRGB8_ALPHA8;
    }

    else if (pixelFormatStr == Texture.PFORMATSTR_R32F)
    {
        o.glInternalFormat = cgl.gl.R32F;
        o.glDataFormat = cgl.gl.RED;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R16F)
    {
        o.glInternalFormat = cgl.gl.R16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG16F)
    {
        o.glInternalFormat = cgl.gl.RG16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA16F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        o.glInternalFormat = cgl.gl.R11F_G11F_B10F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA32F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_DEPTH)
    {
        if (cgl.glVersion == 1)
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT;
            o.glDataType = cgl.gl.UNSIGNED_SHORT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
        else
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT32F;
            o.glDataType = cgl.gl.FLOAT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
    }
    else
    {
        console.log("unknown pixelformat ", pixelFormatStr);
    }

    /// //////

    if (pixelFormatStr.contains("32bit") || pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_color_buffer_float");
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_float_blend");

        cgl.enableExtension("OES_texture_float_linear"); // yes, i am sure, this is a webgl 1 and 2 ext
    }


    o.numColorChannels = 1;
    if (pixelFormatStr.startsWith("R"))o.numColorChannels = 1;
    if (pixelFormatStr.startsWith("RG"))o.numColorChannels = 2;
    if (pixelFormatStr.startsWith("RGB"))o.numColorChannels = 3;
    if (pixelFormatStr.startsWith("RGBA"))o.numColorChannels = 4;


    // console.log(pixelFormatStr, this.name);

    if (!o.glDataType || !o.glInternalFormat || !o.glDataFormat) console.log("pixelformat wrong ?!", pixelFormatStr, o.glDataType, o.glInternalFormat, o.glDataFormat, this);

    return o;
};

/**
 * set pixel size of texture
 * @function setSize
 * @memberof Texture
 * @instance
 * @param {Number} w width
 * @param {Number} h height
 */
Texture.prototype.setSize = function (w, h)
{
    if (this._cgl.aborted) return;
    if (w != w || w <= 0 || !w) w = DEFAULT_TEXTURE_SIZE;
    if (h != h || h <= 0 || !h) h = DEFAULT_TEXTURE_SIZE;

    if (w > this._cgl.maxTexSize || h > this._cgl.maxTexSize) this._log.error("texture size too big! " + w + "x" + h + " / max: " + this._cgl.maxTexSize);

    w = Math.min(w, this._cgl.maxTexSize);
    h = Math.min(h, this._cgl.maxTexSize);

    w = Math.floor(w);
    h = Math.floor(h);
    if (this.width == w && this.height == h) return;

    w = this._cgl.checkTextureSize(w);
    h = this._cgl.checkTextureSize(h);

    this.width = w;
    this.height = h;
    this.deleted = false;

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this.shortInfoString = this.getInfoOneLine();// w + "x" + h + "";

    this._cgl.gl.bindTexture(this.texTarget, this.tex);
    this._cgl.profileData.profileTextureResize++;

    const uarr = null;

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, uarr);

    this._setFilter();

    this.updateMipMap();

    this._cgl.gl.bindTexture(this.texTarget, null);
};


/**
 * @function initFromData
 * @memberof Texture
 * @instance
 * @description create texturem from rgb data
 * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
 * @param {Number} w width
 * @param {Number} h height
 * @param {Number} filter
 * @param {Number} wrap
 */
Texture.prototype.initFromData = function (data, w, h, filter, wrap)
{
    this.filter = filter;
    this.wrap = wrap;
    if (filter == undefined) this.filter = Texture.FILTER_LINEAR;
    if (wrap == undefined) this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    this.width = w;
    this.height = h;
    this._fromData = true;
    this.deleted = false;

    if (this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize)
    {
        const t = CGL.Texture.getTempTexture(this._cgl);
        this.width = t.width;
        this.height = t.height;
        this.tex = t.tex;
        this._log.error("[cgl_texture] texture size to big!!!", this.width, this.height, this._cgl.maxTexSize);
        return;
    }

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip);

    this._cgl.gl.bindTexture(this.texTarget, this.tex);

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, data);

    this._setFilter();
    this.updateMipMap();

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);
    this._cgl.gl.bindTexture(this.texTarget, null);
};

Texture.prototype.updateMipMap = function ()
{
    if ((this._cgl.glVersion == 2 || this.isPowerOfTwo()) && this.filter == Texture.FILTER_MIPMAP)
    {
        this._cgl.gl.generateMipmap(this.texTarget);
        this._cgl.profileData.profileGenMipMap++;
    }
};

/**
 * set texture data from an image/canvas object
 * @function initTexture
 * @memberof Texture
 * @instance
 * @param {Object} img image
 * @param {Number} filter
 */
Texture.prototype.initTexture = function (img, filter)
{
    this._cgl.printError("before initTexture");
    this._cgl.checkFrameStarted("texture inittexture");
    this._fromData = false;

    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
    if (img.width || img.videoWidth) this.width = img.videoWidth || img.width;
    if (img.height || img.videoHeight) this.height = img.videoHeight || img.height;

    if (filter !== undefined) this.filter = filter; // todo: can we remove this filter param?

    if (img.height > this._cgl.maxTexSize || img.width > this._cgl.maxTexSize)
    {
        const t = CGL.Texture.getTempTexture(this._cgl);
        this.width = t.width;
        this.height = t.height;
        this.tex = t.tex;
        this._log.error("[cgl_texture] texture size to big!!!", img.width, img.height, this._cgl.maxTexSize);
        return;
    }


    // console.log("loaded texture", img.width, img.height);

    this._cgl.gl.bindTexture(this.texTarget, this.tex);

    this.deleted = false;
    this.flipped = !this.flip;
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped);


    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, this._glDataFormat, this._glDataType, img);
    // this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, img);

    // if (this._cgl.printError("[cgl_texture] init " + this.name));

    this._setFilter();
    this.updateMipMap();

    // if (this._cgl.printError("[cgl_texture] init2"));

    this._cgl.gl.bindTexture(this.texTarget, null);
    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);

    this.getInfoOneLine();
    this._cgl.printError("initTexture");
};

/**
 * delete texture. use this when texture is no longer needed
 * @function delete
 * @memberof Texture
 * @instance
 */
Texture.prototype.dispose =
Texture.prototype.delete = function ()
{
    if (this.loading)
    {
        // cant delete texture when still loading
        // setTimeout(this.delete.bind(this), 50);
        return;
    }

    this.deleted = true;
    this.width = 0;
    this.height = 0;
    this._cgl.profileData.profileTextureDelete++;
    this._cgl.gl.deleteTexture(this.tex);
    this.image = null;

    this.tex = null;
};

/**
 * @function isPowerOfTwo
 * @memberof Texture
 * @instance
 * @description return true if texture width and height are both power of two
 * @return {Boolean}
 */
Texture.prototype.isPowerOfTwo = function ()
{
    return Texture.isPowerOfTwo(this.width) && Texture.isPowerOfTwo(this.height);
};

Texture.prototype.printInfo = function ()
{
    console.log(this.getInfo());
};

Texture.prototype.getInfoReadable = function ()
{
    const info = this.getInfo();
    let html = "";

    info.name = info.name.substr(0, info.name.indexOf("?rnd="));

    for (const i in info)
    {
        html += "* " + i + ":  **" + info[i] + "**\n";
    }

    return html;
};

Texture.prototype.getInfoOneLine = function ()
{
    let txt = "" + this.width + "x" + this.height;
    txt += " ";
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += this.pixelFormat;

    if (this.filter === CGL.Texture.FILTER_NEAREST) txt += " nearest";
    if (this.filter === CGL.Texture.FILTER_LINEAR) txt += " linear";
    if (this.filter === CGL.Texture.FILTER_MIPMAP) txt += " mipmap";

    if (this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE) txt += " clamp";
    if (this.wrap === CGL.Texture.WRAP_REPEAT) txt += " repeat";
    if (this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT) txt += " repeatmir";

    this.shortInfoString = txt;

    return txt;
};

Texture.prototype.getInfoOneLineShort = function ()
{
    let txt = "" + this.width + "x" + this.height;
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += " ";
    txt += this.pixelFormat;

    this.shortInfoString = txt;

    return txt;
};


Texture.prototype.getInfo = function ()
{
    return Texture.getTexInfo(this);
};


Texture.prototype._setFilter = function ()
{
    this._cgl.printError("before _setFilter");

    if (!this._fromData)
    {
        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
    }

    if (this.shadowMap)
    {
        this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE);
        this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL);
    }

    if (this.textureType == Texture.TYPE_FLOAT && this.filter == Texture.FILTER_MIPMAP)
    {
        this.filter = Texture.FILTER_LINEAR;
        this._log.stack("texture: HDR and mipmap filtering at the same time is not possible");
    }

    if (this._cgl.glVersion == 1 && !this.isPowerOfTwo())
    {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);

        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);

        this.filter = Texture.FILTER_NEAREST;
        this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    }
    else
    {
        if (this.wrap == Texture.WRAP_CLAMP_TO_EDGE)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);
        }
        else if (this.wrap == Texture.WRAP_REPEAT)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT);
        }
        else if (this.wrap == Texture.WRAP_MIRRORED_REPEAT)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT);
        }

        if (this.filter == Texture.FILTER_NEAREST)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
        }
        else if (this.filter == Texture.FILTER_LINEAR)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
        }
        else if (this.filter == Texture.FILTER_MIPMAP)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
        }
        else
        {
            this._log.log("unknown texture filter!", this.filter);
            throw new Error("unknown texture filter!" + this.filter);
        }

        if (this.anisotropic)
        {
            const ext = this._cgl.enableExtension("EXT_texture_filter_anisotropic");



            if (this._cgl.maxAnisotropic)
            {
                const aniso = Math.min(this._cgl.maxAnisotropic, this.anisotropic);
                this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, aniso);
            }
        }
    }
    this.getInfoOneLine();
    this._cgl.printError("_setFilter");
};


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgl
 * @param {String} url
 * @param {Function} finishedCallback
 * @param {Object} settings
 * @return {Texture}
 */
Texture.load = function (cgl, url, finishedCallback, settings)
{
    if (!url) return finishedCallback({ "error": true });
    let loadingId = null;
    if (!cgl.patch.loading.existByName(url)) loadingId = cgl.patch.loading.start("cgl.texture", url);

    const texture = new Texture(cgl);
    texture.name = url;

    // texture.pixelFormat = Texture.PFORMATSTR_;

    // if (cgl.patch.isEditorMode()) gui.jobs().start({ "id": "loadtexture" + loadingId, "title": "loading texture " + CABLES.basename(url) });

    texture.image = new Image();
    texture.image.crossOrigin = "anonymous";
    texture.loading = true;

    if (settings && settings.hasOwnProperty("filter")) texture.filter = settings.filter;
    if (settings && settings.hasOwnProperty("flip")) texture.flip = settings.flip;
    if (settings && settings.hasOwnProperty("wrap")) texture.wrap = settings.wrap;
    if (settings && settings.hasOwnProperty("anisotropic")) texture.anisotropic = settings.anisotropic;
    if (settings && settings.hasOwnProperty("unpackAlpha")) texture.unpackAlpha = settings.unpackAlpha;
    if (settings && settings.hasOwnProperty("pixelFormat")) texture.pixelFormat = settings.pixelFormat;

    texture.image.onabort = texture.image.onerror = (e) =>
    {
        console.warn("[cgl.texture.load] error loading texture", url, e);
        texture.loading = false;
        if (loadingId) cgl.patch.loading.finished(loadingId);
        const error = { "error": true };
        if (finishedCallback) finishedCallback(error, texture);
        // if (cgl.patch.isEditorMode()) gui.jobs().finish("loadtexture" + loadingId);
    };

    texture.image.onload = function (e)
    {
        cgl.addNextFrameOnceCallback(() =>
        {
            texture.initTexture(texture.image);
            if (loadingId) cgl.patch.loading.finished(loadingId);
            texture.loading = false;
            // if (cgl.patch.isEditorMode()) gui.jobs().finish("loadtexture" + loadingId);

            if (finishedCallback) finishedCallback(null, texture);
        });
    };
    texture.image.src = url;

    return texture;
};

/**
 * @static
 * @function getTempTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.tempTexture) cgl.tempTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT);
    return cgl.tempTexture;
};

/**
 * @static
 * @function getErrorTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getErrorTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.errorTexture) cgl.errorTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT, 1, 0.2, 0.2);
    return cgl.errorTexture;
};


/**
 * @function getEmptyTexture
 * @memberof Texture
 * @instance
 * @param cgl
 * @param fp
 * @description returns a reference to a small empty (transparent) texture
 * @return {Texture}
 */
Texture.getEmptyTexture = function (cgl, fp)
{
    if (fp) return Texture.getEmptyTextureFloat(cgl);
    if (!cgl) console.error("[getEmptyTexture] no cgl!");
    if (cgl.tempTextureEmpty) return cgl.tempTextureEmpty;

    cgl.tempTextureEmpty = new Texture(cgl, { "name": "emptyTexture" });
    const data = new Uint8Array(8 * 8 * 4).fill(0);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmpty.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmpty;
};

/**
 * @function getEmptyTextureFloat
 * @memberof Texture
 * @instance
 * @param cgl
 * @description returns a reference to a small empty (transparent) 32bit texture
 * @return {Texture}
 */
Texture.getEmptyTextureFloat = function (cgl)
{
    if (!cgl) console.error("[getEmptyTextureFloat] no cgl!");
    if (cgl.tempTextureEmptyFloat) return cgl.tempTextureEmptyFloat;

    cgl.tempTextureEmptyFloat = new Texture(cgl, { "name": "emptyTexture", "isFloatingPointTexture": true });
    const data = new Float32Array(8 * 8 * 4).fill(1);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmptyFloat.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmptyFloat;
};


/**
 * @function getRandomTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a random texture
 * @return {Texture}
 */
Texture.getRandomTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.randomTexture) return cgl.randomTexture;

    const size = 256;
    const data = new Uint8Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = Math.random() * 255;
        data[x * 4 + 1] = Math.random() * 255;
        data[x * 4 + 2] = Math.random() * 255;
        data[x * 4 + 3] = 255;
    }

    cgl.randomTexture = new Texture(cgl);
    cgl.randomTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.randomTexture;
};

/**
 * @function getRandomFloatTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a texture containing random numbers between -1 and 1
 * @return {Texture}
 */
Texture.getRandomFloatTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.getRandomFloatTexture) return cgl.getRandomFloatTexture;

    const size = 256;
    const data = new Float32Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 1] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 2] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 3] = 1;
    }

    cgl.getRandomFloatTexture = new Texture(cgl, { "isFloatingPointTexture": true });
    cgl.getRandomFloatTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.getRandomFloatTexture;
};

/**
 * @function getBlackTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a black texture
 * @return {Texture}
 */
Texture.getBlackTexture = function (cgl)
{
    if (!cgl) this._log.error("[getBlackTexture] no cgl!");
    if (cgl.blackTexture) return cgl.blackTexture;

    const size = 8;
    const data = new Uint8Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = data[x * 4 + 1] = data[x * 4 + 2] = 0;
        data[x * 4 + 3] = 255;
    }

    cgl.blackTexture = new Texture(cgl);
    cgl.blackTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.blackTexture;
};


/**
 * @function getEmptyCubemapTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns an empty cubemap texture with rgba = [0, 0, 0, 0]
 * @return {Texture}
 */
Texture.getEmptyCubemapTexture = function (cgl)
{
    const faces = [
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];

    const tex = cgl.gl.createTexture();
    const target = cgl.gl.TEXTURE_CUBE_MAP;
    const filter = Texture.FILTER_NEAREST;
    const wrap = Texture.WRAP_CLAMP_TO_EDGE;
    const width = 8;
    const height = 8;

    cgl.profileData.profileTextureNew++;


    cgl.gl.bindTexture(target, tex);
    cgl.profileData.profileTextureResize++;

    for (let i = 0; i < 6; i += 1)
    {
        const data = new Uint8Array(8 * 8 * 4);

        cgl.gl.texImage2D(faces[i], 0, cgl.gl.RGBA, 8, 8, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, data);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MAG_FILTER, cgl.gl.NEAREST);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MIN_FILTER, cgl.gl.NEAREST);

        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_S, cgl.gl.CLAMP_TO_EDGE);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_T, cgl.gl.CLAMP_TO_EDGE);
    }


    cgl.gl.bindTexture(target, null);

    return {
        "id": CABLES.uuid(),
        "tex": tex,
        "cubemap": tex,
        "width": width,
        "height": height,
        "filter": filter,
        "wrap": wrap,
        "unpackAlpha": true,
        "flip": true,
        "_fromData": true,
        "name": "emptyCubemapTexture",
        "anisotropic": 0,
    };
};

/**
 * @static
 * @function getTempGradientTexture
 * @memberof Texture
 * @description returns a gradient texture from black to white
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempGradientTexture = function (cgl)
{
    if (!cgl) console.error("[getTempGradientTexture] no cgl!");

    if (cgl.tempTextureGradient) return cgl.tempTextureGradient;
    const temptex = new Texture(cgl);
    const size = 256;
    const data = new Uint8Array(size * size * 4); // .fill(0);

    for (let y = 0; y < size; y++)
    {
        for (let x = 0; x < size; x++)
        {
            data[(x + y * size) * 4 + 0] = data[(x + y * size) * 4 + 1] = data[(x + y * size) * 4 + 2] = 255 - y;
            data[(x + y * size) * 4 + 3] = 255;
        }
    }

    temptex.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);
    cgl.tempTextureGradient = temptex;
    return temptex;
};

Texture.getTemporaryTexture = function (cgl, size, filter, wrap, r, g, b)
{
    if (r === undefined)r = 1;
    if (g === undefined)g = 1;
    if (b === undefined)b = 1;
    const temptex = new Texture(cgl);
    const arr = [];
    for (let y = 0; y < size; y++)
    {
        for (let x = 0; x < size; x++)
        {
            if ((x + y) % 64 < 32)
            {
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * r);
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * g);
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * b);
            }
            else
            {
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * r);
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * g);
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * b);
            }
            arr.push(255);
        }
    }

    const data = new Uint8Array(arr);
    temptex.initFromData(data, size, size, filter, wrap);

    return temptex;
};

/**
 * @static
 * @function createFromImage
 * @memberof Texture
 * @description create texturem from image data (e.g. image or canvas)
 * @param {Context} cgl
 * @param {Object} img image
 * @param {Object} options
 */
Texture.createFromImage = function (cgl, img, options)
{
    options = options || {};
    const texture = new Texture(cgl, options);
    texture.flip = false;
    texture.image = img;
    texture.width = img.videoWidth || img.width || 8;
    texture.height = img.videoHeight || img.height || 8;
    if (options.hasOwnProperty("wrap"))texture.wrap = options.wrap;

    texture.initTexture(img, options.filter);

    return texture;
};

// deprecated!
Texture.fromImage = function (cgl, img, filter, wrap)
{
    console.error("deprecated texture from image...");

    const texture = new Texture(cgl);
    texture.flip = false;
    if (filter) texture.filter = filter;
    if (wrap) texture.wrap = wrap;
    texture.image = img;
    texture.initTexture(img);
    return texture;
};

/**
 * @static
 * @function isPowerOfTwo
 * @memberof Texture
 * @description returns true if x is power of two
 * @param {Number} x
 * @return {Boolean}
 */
Texture.isPowerOfTwo = function (x)
{
    return x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 || x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 || x == 2048 || x == 4096 || x == 8192 || x == 16384;
};

Texture.getTexInfo = function (tex)
{
    const obj = {};

    obj.name = tex.name;
    obj["power of two"] = tex.isPowerOfTwo();
    obj.size = tex.width + " x " + tex.height;

    let targetString = tex.texTarget;
    if (tex.texTarget == tex._cgl.gl.TEXTURE_2D) targetString = "TEXTURE_2D";
    obj.target = targetString;

    obj.unpackAlpha = tex.unpackAlpha;

    if (tex.cubemap)obj.cubemap = true;

    if (tex.textureType == Texture.TYPE_FLOAT) obj.textureType = "TYPE_FLOAT";
    if (tex.textureType == Texture.TYPE_HALF_FLOAT) obj.textureType = "TYPE_HALF_FLOAT";
    else if (tex.textureType == Texture.TYPE_DEPTH) obj.textureType = "TYPE_DEPTH";
    else if (tex.textureType == Texture.TYPE_DEFAULT) obj.textureType = "TYPE_DEFAULT";
    else obj.textureType = "UNKNOWN " + this.textureType;

    if (tex.wrap == Texture.WRAP_CLAMP_TO_EDGE) obj.wrap = "CLAMP_TO_EDGE";
    else if (tex.wrap == Texture.WRAP_REPEAT) obj.wrap = "WRAP_REPEAT";
    else if (tex.wrap == Texture.WRAP_MIRRORED_REPEAT) obj.wrap = "WRAP_MIRRORED_REPEAT";
    else obj.wrap = "UNKNOWN";

    if (tex.filter == Texture.FILTER_NEAREST) obj.filter = "FILTER_NEAREST";
    else if (tex.filter == Texture.FILTER_LINEAR) obj.filter = "FILTER_LINEAR";
    else if (tex.filter == Texture.FILTER_MIPMAP) obj.filter = "FILTER_MIPMAP";
    else obj.filter = "UNKNOWN";

    obj.pixelFormat = tex.pixelFormat || "unknown";

    return obj;
};


Texture.FILTER_NEAREST = 0;
Texture.FILTER_LINEAR = 1;
Texture.FILTER_MIPMAP = 2;

Texture.WRAP_REPEAT = 0;
Texture.WRAP_MIRRORED_REPEAT = 1;
Texture.WRAP_CLAMP_TO_EDGE = 2;

Texture.TYPE_DEFAULT = 0;
Texture.TYPE_DEPTH = 1;
Texture.TYPE_FLOAT = 2;


Texture.PFORMATSTR_RGB565 = "RGB 5/6/5bit ubyte";

Texture.PFORMATSTR_R8UB = "R 8bit ubyte";
Texture.PFORMATSTR_RG8UB = "RG 8bit ubyte";
Texture.PFORMATSTR_RGB8UB = "RGB 8bit ubyte";
Texture.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte";

Texture.PFORMATSTR_SRGBA8 = "SRGBA 8bit ubyte";

Texture.PFORMATSTR_R11FG11FB10F = "RGB 11/11/10bit float";

Texture.PFORMATSTR_R16F = "R 16bit float";
Texture.PFORMATSTR_RG16F = "RG 16bit float";
Texture.PFORMATSTR_RGB16F = "RGB 16bit float";
Texture.PFORMATSTR_RGBA16F = "RGBA 16bit float";


Texture.PFORMATSTR_R32F = "R 32bit float";
Texture.PFORMATSTR_RG32F = "RG 32bit float";
Texture.PFORMATSTR_RGB32F = "RGB 32bit float";
Texture.PFORMATSTR_RGBA32F = "RGBA 32bit float";

Texture.PFORMATSTR_DEPTH = "DEPTH";


Texture.PIXELFORMATS = [

    Texture.PFORMATSTR_RGB565,

    Texture.PFORMATSTR_R8UB,
    Texture.PFORMATSTR_RG8UB,
    Texture.PFORMATSTR_RGB8UB,
    Texture.PFORMATSTR_RGBA8UB,

    Texture.PFORMATSTR_SRGBA8,

    Texture.PFORMATSTR_R11FG11FB10F,
    Texture.PFORMATSTR_R16F,
    Texture.PFORMATSTR_RG16F,
    Texture.PFORMATSTR_RGBA16F,

    Texture.PFORMATSTR_R32F,
    Texture.PFORMATSTR_RGBA32F

];

Texture.isPixelFormatFloat =
    (pxlfrmt) =>
    {
        return (pxlfrmt || "").contains("float");
    };

Texture.isPixelFormatHalfFloat =
    (pxlfrmt) =>
    {
        return (pxlfrmt || "").contains("float") && (pxlfrmt || "").contains("16bit");
    };






;// CONCATENATED MODULE: ./src/core/cg/cg_boundingbox.js


/**
 * bounding box
 *
 * @namespace external:CGL
 * @param {Geometry} geometry or bounding box
 */
class BoundingBox
{
    constructor(geom)
    {
        this._init();
        this._first = true;
        this._wireMesh = null;

        if (geom) this.apply(geom);
    }

    _init()
    {
        this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE];
        this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
        this._center = [0, 0, 0];
        this._size = [0, 0, 0];
        this._maxAxis = 0.0;
        this._first = true;
    }

    /**
     * get biggest number of maxX,maxY,maxZ
     * @type {Number}
     */
    get maxAxis() { return this._maxAxis || 1; }

    /**
     * size of bounding box
     * @type {vec3}
     */
    get size() { return this._size; }

    /**
     * center of bounding box
     * @type {vec3}
     */
    get center() { return this._center; }

    /**
     * center x
     * @type {Number}
     */
    get x() { return this._center[0]; }

    /**
     * center y
     * @type {Number}
     */
    get y() { return this._center[1]; }

    /**
     * center z
     * @type {Number}
     */
    get z() { return this._center[2]; }


    /**
     * minimum x
     * @type {Number}
     */
    get minX() { return this._min[0]; }

    /**
     * minimum y
     * @type {Number}
     */
    get minY() { return this._min[1]; }

    /**
     * minimum z
     * @type {Number}
     */
    get minZ() { return this._min[2]; }

    /**
     * maximum x
     * @type {Number}
     */
    get maxX() { return this._max[0]; }

    /**
     * maximum y
     * @type {Number}
     */
    get maxY() { return this._max[1]; }

    /**
     * maximum z
     * @type {Number}
     */
    get maxZ() { return this._max[2]; }


    apply(geom, mat)
    {
        if (!geom)
        {
            // console.warn("[boundingbox] no geom/vertices", geom);
            return;
        }

        if (geom instanceof BoundingBox)
        {
            const bb = geom;

            this.applyPos(bb.maxX, bb.maxY, bb.maxZ);
            this.applyPos(bb.minX, bb.minY, bb.minZ);
        }
        else
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
                // if (geom.vertices[i] == geom.vertices[i] || geom.vertices[i] != null)
                // {
            // if(mat)
            // {
                this.applyPos(geom.vertices[i], geom.vertices[i + 1], geom.vertices[i + 2]);
            // }
            // else
            // {
            //     this.applyPos(geom.vertices[i + 0],geom.vertices[i + 1],geom.vertices[i + 2]);
            // }
                // }
        }
        this.calcCenterSize();
    }

    /**
     * returns a copy of the bounding box
     * @function copy
     * @memberof BoundingBox
     * @instance
     */
    copy()
    {
        return new BoundingBox(this);
    }

    get changed()
    {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
    }

    applyPos(x, y, z)
    {
        if (x == Number.MAX_VALUE || x == -Number.MAX_VALUE ||
            y == Number.MAX_VALUE || y == -Number.MAX_VALUE ||
            z == Number.MAX_VALUE || z == -Number.MAX_VALUE) return;

        if (!CABLES.UTILS.isNumeric(x) || !CABLES.UTILS.isNumeric(y) || !CABLES.UTILS.isNumeric(z)) return;

        if (this._first)
        {
            this._max[0] = x;
            this._max[1] = y;
            this._max[2] = z;

            this._min[0] = x;
            this._min[1] = y;
            this._min[2] = z;
            this._first = false;
            return;
        }

        this._max[0] = Math.max(this._max[0], x);
        this._max[1] = Math.max(this._max[1], y);
        this._max[2] = Math.max(this._max[2], z);

        this._min[0] = Math.min(this._min[0], x);
        this._min[1] = Math.min(this._min[1], y);
        this._min[2] = Math.min(this._min[2], z);
    }

    calcCenterSize()
    {
        if (this._first) return;
        // this._size[0]=Math.abs(this._min[0])+Math.abs(this._max[0]);
        // this._size[1]=Math.abs(this._min[1])+Math.abs(this._max[1]);
        // this._size[2]=Math.abs(this._min[2])+Math.abs(this._max[2]);
        this._size[0] = this._max[0] - this._min[0];
        this._size[1] = this._max[1] - this._min[1];
        this._size[2] = this._max[2] - this._min[2];

        this._center[0] = (this._min[0] + this._max[0]) / 2;
        this._center[1] = (this._min[1] + this._max[1]) / 2;
        this._center[2] = (this._min[2] + this._max[2]) / 2;

        this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]));
    }

    mulMat4(m)
    {
        if (this._first)
        {
            this._max[0] = 0;
            this._max[1] = 0;
            this._max[2] = 0;

            this._min[0] = 0;
            this._min[1] = 0;
            this._min[2] = 0;
            this._first = false;
        }
        vec3.transformMat4(this._max, this._max, m);
        vec3.transformMat4(this._min, this._min, m);
        this.calcCenterSize();
    }

    render(cgl, shader, op)
    {
        if (!this._wireMesh) this._wireMesh = new CGL.WireCube(cgl);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, this._center);

        if (CABLES.UI && op)
        {
            CABLES.UI.OverlayMeshes.drawCube(op, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2);
        }

        cgl.popModelMatrix();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_geom.js
// import { vec2, vec3 } from "gl-matrix";





/**
 * a geometry contains all information about a mesh, vertices, texturecoordinates etc. etc.
 * @namespace external:CGL#Geometry
 * @param {String} name
 * @class
 * @example
 * // create a triangle with all attributes
 * const geom=new Geometry("triangle"),
 *
 * geom.vertices = [
 *      0.0,           sizeH.get(),  0.0,
 *     -sizeW.get(),  -sizeH.get(),  0.0,
 *      sizeW.get(),  -sizeH.get(),  0.0 ];
 *
 * geom.vertexNormals = [
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0 ];
 *
 * geom.tangents = [
 *     1,0,0,
 *     1,0,0,
 *     1,0,0 ];
 *
 * geom.biTangents = [
 *     0,1,0,
 *     0,1,0,
 *     0,1,0 ];
 *
 * geom.texCoords = [
 *      0.5,  0.0,
 *      1.0,  1.0,
 *      0.0,  1.0, ];
 *
 * geom.verticesIndices = [
 *     0, 1, 2 ];
 *
 */
const Geometry = function (name)
{
    this.name = name || "unknown";
    this._log = new Logger("cgl_geometry");

    this.faceVertCount = 3;
    this.glPrimitive = null;
    this._attributes = {};

    this._vertices = [];
    this.verticesIndices = [];

    this.isGeometry = true;

    this.morphTargets = [];

    Object.defineProperty(this, "vertices", {
        get()
        {
            return this._vertices;
        },
        set(v)
        {
            this.setVertices(v);
        },
    });

    Object.defineProperty(this, "texCoords", {
        get()
        {
            const att = this.getAttribute("texCoords");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("texCoords", v, 2);
        },
    });

    Object.defineProperty(this, "vertexNormals", {
        get()
        {
            const att = this.getAttribute("vertexNormals");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexNormals", v, 3);
        },
    });

    Object.defineProperty(this, "tangents", {
        get()
        {
            const att = this.getAttribute("tangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("tangents", v, 3);
        },
    });

    Object.defineProperty(this, "biTangents", {
        get()
        {
            const att = this.getAttribute("biTangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("biTangents", v, 3);
        },
    });

    Object.defineProperty(this, "vertexColors", {
        get()
        {
            const att = this.getAttribute("vertexColors");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexColors", v, 4);
        },
    });
};

/**
 * @function clear
 * @memberof Geometry
 * @instance
 * @description clear all buffers/set them to length 0
 */
Geometry.prototype.clear = function ()
{
    this._vertices = new Float32Array([]);
    this.verticesIndices = [];
    this.texCoords = new Float32Array([]);
    this.vertexNormals = new Float32Array([]);
    this.tangents = [];
    this.biTangents = [];
    this._attributes = {};
};



/**
 * @function getAttributes
   @memberof Geometry
 * @instance
 * @return {Array<Object>} returns array of attribute objects
 */
Geometry.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function getAttribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @return {Object}
 */
Geometry.prototype.getAttribute = function (name)
{
    for (const i in this._attributes)
    {
        if (this._attributes[i].name == name) return this._attributes[i];
    }
    return null;
};

/**
 * @function setAttribute
 * @description create an attribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @param {Array} arr
 * @param {Number} itemSize
 */
Geometry.prototype.setAttribute = function (name, arr, itemSize)
{
    let attrType = "";
    if (!itemSize || itemSize > 4)
    {
        console.log("itemsize wrong?", itemSize, name);
        this._log.stack("itemsize");

        itemSize = 3;
    }

    if (itemSize == 1) attrType = "float";
    else if (itemSize == 2) attrType = "vec2";
    else if (itemSize == 3) attrType = "vec3";
    else if (itemSize == 4) attrType = "vec4";


    const attr = {
        "name": name,
        "data": arr,
        "itemSize": itemSize,
        "type": attrType,
    };

    this._attributes[name] = attr;
};

Geometry.prototype.copyAttribute = function (name, newgeom)
{
    const attr = this.getAttribute(name);
    newgeom.setAttribute(name, new Float32Array(attr.data), attr.itemSize);
};


/**
 * @function setVertices
 * @memberof Geometry
 * @instance
 * @description set vertices
 * @param {Array|Float32Array} arr [x,y,z,x,y,z,...]
 */
Geometry.prototype.setVertices = function (arr)
{
    if (arr instanceof Float32Array) this._vertices = arr;
    else this._vertices = new Float32Array(arr);
};

/**
 * @function setTexCoords
 * @memberof Geometry
 * @instance
 * @description set texcoords
 * @param {Array|Float32Array} arr [u,v,u,v,...]
 */
Geometry.prototype.setTexCoords = function (arr)
{
    if (arr instanceof Float32Array) this.texCoords = arr;
    else this.texCoords = new Float32Array(arr);
};

// Geometry.prototype.testIndices = function ()
// {
//     var foundError = false;
//     for (var i = 0; i < this.verticesIndices.length; i++)
//     {
//         if (this.verticesIndices[i * 3 + 0] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 1] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 2] >= this._vertices.length / 3)
//         {
//             foundError = true;
//             console.log("index error!");
//         }
//     }
// };

// deprecated
Geometry.prototype.calcNormals = function (smooth)
{
    const options = { "smooth": smooth };


    this.calculateNormals(options);
};

/**
 * @function flipNormals
 * @memberof Geometry
 * @param x
 * @param y
 * @param z
 * @description flip normals
 */
Geometry.prototype.flipNormals = function (x, y, z)
{
    let vec = vec3.create();

    if (x == undefined)x = 1;
    if (y == undefined)y = 1;
    if (z == undefined)z = 1;


    for (let i = 0; i < this.vertexNormals.length; i += 3)
    {
        vec3.set(vec,
            this.vertexNormals[i + 0],
            this.vertexNormals[i + 1],
            this.vertexNormals[i + 2]);

        vec[0] *= -x;
        vec[1] *= -y;
        vec[2] *= -z;

        vec3.normalize(vec, vec);

        this.vertexNormals[i + 0] = vec[0];
        this.vertexNormals[i + 1] = vec[1];
        this.vertexNormals[i + 2] = vec[2];
    }
};

Geometry.prototype.getNumTriangles = function ()
{
    if (this.verticesIndices && this.verticesIndices.length) return this.verticesIndices.length / 3;
    return this.vertices.length / 3;
};


/**
 * @function flipVertDir
 * @memberof Geometry
 * @description flip order of vertices in geom faces
 */
Geometry.prototype.flipVertDir = function ()
{
    const newInd = [];
    newInd.length = this.verticesIndices.length;
    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newInd[i] = this.verticesIndices[i + 2];
        newInd[i + 1] = this.verticesIndices[i + 1];
        newInd[i + 2] = this.verticesIndices[i];
    }
    this.verticesIndices = newInd;
};


Geometry.prototype.setPointVertices = function (verts)
{
    if (verts.length % 3 !== 0)
    {
        this._log.error("SetPointVertices: Array must be multiple of three.");
        return;
    }

    if (!(verts instanceof Float32Array)) this.vertices = new Float32Array(verts);
    else this.vertices = verts;

    if (!(this.texCoords instanceof Float32Array)) this.texCoords = new Float32Array((verts.length / 3) * 2);

    // this.texCoords.length=verts.length/3*2;
    this.verticesIndices.length = verts.length / 3;
    // this.verticesIndices=[];

    for (let i = 0; i < verts.length / 3; i++)
    {
        this.verticesIndices[i] = i;
        this.texCoords[i * 2] = 0;
        this.texCoords[i * 2 + 1] = 0;
    }
};

/**
 * merge a different geometry into the this geometry
 * @function merge
 * @param {Geometry} geom
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.merge = function (geom)
{
    if (!geom) return;

    if (this.isIndexed() != geom.isIndexed())
    {
        if (this.isIndexed())
        {
            this.unIndex(false, true);
        }
        if (geom.isIndexed())
        {
            const g = geom.copy();
            g.unIndex(false, true);
            geom = g;
        }
    }

    const oldIndizesLength = this.verticesIndices.length;
    const vertLength = this._vertices.length / 3;

    this.verticesIndices.length += geom.verticesIndices.length;
    for (let i = 0; i < geom.verticesIndices.length; i++)
        this.verticesIndices[oldIndizesLength + i] = geom.verticesIndices[i] + vertLength;

    this.vertices = UTILS.float32Concat(this._vertices, geom.vertices);
    this.texCoords = UTILS.float32Concat(this.texCoords, geom.texCoords);
    this.vertexNormals = UTILS.float32Concat(this.vertexNormals, geom.vertexNormals);
    this.tangents = UTILS.float32Concat(this.tangents, geom.tangents);
    this.biTangents = UTILS.float32Concat(this.biTangents, geom.biTangents);
};

/**
 *   a copy of the geometry
 * @function copy
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.copy = function ()
{
    const geom = new Geometry(this.name + " copy");
    geom.faceVertCount = this.faceVertCount;
    geom.glPrimitive = this.glPrimitive;

    geom.setVertices(this._vertices.slice(0));

    if (this.verticesIndices)
    {
        geom.verticesIndices.length = this.verticesIndices.length;
        for (let i = 0; i < this.verticesIndices.length; i++) geom.verticesIndices[i] = this.verticesIndices[i];
    }

    for (let i in this._attributes) this.copyAttribute(i, geom);

    geom.morphTargets.length = this.morphTargets.length;
    for (let i = 0; i < this.morphTargets.length; i++) geom.morphTargets[i] = this.morphTargets[i];

    return geom;
};

/**
 * Calculaten normals
 * @function calculateNormals
 * @memberof Geometry
 * @param options
 * @instance
 */
Geometry.prototype.calculateNormals = function (options)
{
    // todo: should check angle of normals to get edges    https://community.khronos.org/t/calculating-accurate-vertex-normals/28152
    options = options || {};
    if (options.smooth === false) this.unIndex();

    const u = vec3.create();
    const v = vec3.create();
    const n = vec3.create();

    function calcNormal(triangle)
    {
        vec3.subtract(u, triangle[0], triangle[1]);
        vec3.subtract(v, triangle[0], triangle[2]);
        vec3.cross(n, u, v);
        vec3.normalize(n, n);

        if (options && options.forceZUp)
        {
            if (n[2] < 0)
            {
                n[0] *= -1;
                n[1] *= -1;
                n[2] *= -1;
            }
        }
        return n;
    }

    this.getVertexVec = function (which)
    {
        const vec = [0, 0, 0];
        vec[0] = this.vertices[which * 3 + 0];
        vec[1] = this.vertices[which * 3 + 1];
        vec[2] = this.vertices[which * 3 + 2];
        return vec;
    };

    if (!(this.vertexNormals instanceof Float32Array) || this.vertexNormals.length != this.vertices.length) this.vertexNormals = new Float32Array(this.vertices.length);

    for (let i = 0; i < this.vertices.length; i++)
    {
        this.vertexNormals[i] = 0;
    }

    if (!this.isIndexed())
    {
        const norms = [];
        for (let i = 0; i < this.vertices.length; i += 9)
        {
            const triangle = [[this.vertices[i + 0], this.vertices[i + 1], this.vertices[i + 2]], [this.vertices[i + 3], this.vertices[i + 4], this.vertices[i + 5]], [this.vertices[i + 6], this.vertices[i + 7], this.vertices[i + 8]]];
            const nn = calcNormal(triangle);
            norms.push(nn[0], nn[1], nn[2], nn[0], nn[1], nn[2], nn[0], nn[1], nn[2]);
        }
        this.vertexNormals = norms;
    }
    else
    {
        const faceNormals = [];

        faceNormals.length = Math.floor(this.verticesIndices.length / 3);

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            const triangle = [this.getVertexVec(this.verticesIndices[i + 0]), this.getVertexVec(this.verticesIndices[i + 1]), this.getVertexVec(this.verticesIndices[i + 2])];

            faceNormals[i / 3] = calcNormal(triangle);

            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 2] += faceNormals[i / 3][2];
        }


        for (let i = 0; i < this.verticesIndices.length; i += 3) // faces
        {
            for (let k = 0; k < 3; k++) // triangles
            {
                const vv = [this.vertexNormals[this.verticesIndices[i + k] * 3 + 0], this.vertexNormals[this.verticesIndices[i + k] * 3 + 1], this.vertexNormals[this.verticesIndices[i + k] * 3 + 2]];
                vec3.normalize(vv, vv);
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 0] = vv[0];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 1] = vv[1];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 2] = vv[2];
            }
        }
    }
};

/**
 * Calculates tangents & bitangents with the help of uv-coordinates. Adapted from
 * Lengyel, Eric. “Computing Tangent Space Basis Vectors for an Arbitrary Mesh”.
 * Terathon Software 3D Graphics Library.
 * https://fenix.tecnico.ulisboa.pt/downloadFile/845043405449073/Tangent%20Space%20Calculation.pdf
 *
 * @function calcTangentsBitangents
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.calcTangentsBitangents = function ()
{
    if (!this.vertices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertices.");
        return;
    }
    if (!this.vertexNormals.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without normals.");
        return;
    }
    if (!this.texCoords.length)
    {
        // console.warn("No texcoords. Replacing with default values [0, 0].");
        const texCoordLength = (this.vertices.length / 3) * 2;
        this.texCoords = new Float32Array(texCoordLength);
        for (let i = 0; i < texCoordLength; i += 1) this.texCoords[i] = 0;
    }
    if (!this.verticesIndices || !this.verticesIndices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
        return;
    }
    // this code assumes that we have three indices per triangle
    if (this.verticesIndices.length % 3 !== 0)
    {
        this._log.error("Vertex indices mismatch!");
        return;
    }

    const triangleCount = this.verticesIndices.length / 3;
    const vertexCount = this.vertices.length / 3;

    this.tangents = new Float32Array(this.vertexNormals.length);
    this.biTangents = new Float32Array(this.vertexNormals.length);

    // temporary buffers
    const tempVertices = [];
    tempVertices.length = vertexCount * 2;
    const v1 = vec3.create();
    const v2 = vec3.create();
    const v3 = vec3.create();

    const w1 = vec2.create();
    const w2 = vec2.create();
    const w3 = vec2.create();

    const sdir = vec3.create();
    const tdir = vec3.create();

    // for details on calculation, see article referenced above
    for (let tri = 0; tri < triangleCount; tri += 1)
    {
        // indices of the three vertices for a triangle
        const i1 = this.verticesIndices[tri * 3];
        const i2 = this.verticesIndices[tri * 3 + 1];
        const i3 = this.verticesIndices[tri * 3 + 2];

        // vertex position as vec3
        vec3.set(v1, this.vertices[i1 * 3], this.vertices[i1 * 3 + 1], this.vertices[i1 * 3 + 2]);
        vec3.set(v2, this.vertices[i2 * 3], this.vertices[i2 * 3 + 1], this.vertices[i2 * 3 + 2]);
        vec3.set(v3, this.vertices[i3 * 3], this.vertices[i3 * 3 + 1], this.vertices[i3 * 3 + 2]);

        // texture coordinate as vec2
        vec2.set(w1, this.texCoords[i1 * 2], this.texCoords[i1 * 2 + 1]);
        vec2.set(w2, this.texCoords[i2 * 2], this.texCoords[i2 * 2 + 1]);
        vec2.set(w3, this.texCoords[i3 * 2], this.texCoords[i3 * 2 + 1]);

        const x1 = v2[0] - v1[0];
        const x2 = v3[0] - v1[0];
        const y1 = v2[1] - v1[1];
        const y2 = v3[1] - v1[1];
        const z1 = v2[2] - v1[2];
        const z2 = v3[2] - v1[2];

        const s1 = w2[0] - w1[0];
        const s2 = w3[0] - w1[0];
        const t1 = w2[1] - w1[1];
        const t2 = w3[1] - w1[1];

        const r = 1.0 / (s1 * t2 - s2 * t1);

        vec3.set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);
        vec3.set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);

        tempVertices[i1] = sdir;
        tempVertices[i2] = sdir;
        tempVertices[i3] = sdir;

        tempVertices[i1 + vertexCount] = tdir;
        tempVertices[i2 + vertexCount] = tdir;
        tempVertices[i3 + vertexCount] = tdir;
    }

    const normal = vec3.create();
    const tempVert = vec3.create();
    const tan = vec3.create();
    const bitan = vec3.create();
    const temp1 = vec3.create();
    const temp2 = vec3.create();
    const crossPd = vec3.create();
    const normalized = vec3.create();

    for (let vert = 0; vert < vertexCount; vert += 1)
    {
        // NOTE: some meshes don't have index 0 - n in their indexbuffer, if this is the case, skip calculation of this vertex
        if (!tempVertices[vert]) continue;

        vec3.set(normal, this.vertexNormals[vert * 3], this.vertexNormals[vert * 3 + 1], this.vertexNormals[vert * 3 + 2]);
        vec3.set(tempVert, tempVertices[vert][0], tempVertices[vert][1], tempVertices[vert][2]);

        // Gram-Schmidt orthagonalize
        const _dp = vec3.dot(normal, tempVert);
        vec3.scale(temp1, normal, _dp);
        vec3.subtract(temp2, tempVert, temp1);

        vec3.normalize(normalized, temp2);
        vec3.cross(crossPd, normal, tempVert);

        // const intermDot = vec3.dot(crossPd, tempVertices[vert + vertexCount]);
        const w = 1.0;// intermDot < 0.0 ? -1.0 : 1.0;

        vec3.scale(tan, normalized, 1 / w);
        vec3.cross(bitan, normal, tan);

        this.tangents[vert * 3 + 0] = tan[0];
        this.tangents[vert * 3 + 1] = tan[1];
        this.tangents[vert * 3 + 2] = tan[2];
        this.biTangents[vert * 3 + 0] = bitan[0];
        this.biTangents[vert * 3 + 1] = bitan[1];
        this.biTangents[vert * 3 + 2] = bitan[2];
    }
};

Geometry.prototype.isIndexed = function ()
{
    if (this._vertices.length == 0) return true;
    return this.verticesIndices.length != 0;
};

/**
 * @function unIndex
 * @memberof Geometry
 * @instance
 * @description remove all vertex indizes, vertices array will contain 3*XYZ for every triangle
 * @param {boolean} reIndex
 * @param {boolean} dontCalcNormals
 */
Geometry.prototype.unIndex = function (reIndex, dontCalcNormals)
{
    const newVerts = [];
    const newIndizes = [];
    let count = 0;

    for (let j in this._attributes)
    {
        const attr = this._attributes[j];
        let na = [];

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            for (let s = 0; s < 3; s++)
            {
                if (attr.itemSize == 3)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 3 + 0],
                        attr.data[this.verticesIndices[i + s] * 3 + 1],
                        attr.data[this.verticesIndices[i + s] * 3 + 2]);
                else if (attr.itemSize == 4)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 4 + 0],
                        attr.data[this.verticesIndices[i + s] * 4 + 1],
                        attr.data[this.verticesIndices[i + s] * 4 + 2],
                        attr.data[this.verticesIndices[i + s] * 4 + 3]);
                else if (attr.itemSize == 2)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 2 + 0],
                        attr.data[this.verticesIndices[i + s] * 2 + 1]);
                else if (attr.itemSize == 1)
                    na.push(
                        attr.data[this.verticesIndices[i + s]]);
                else console.log("unknown attr", attr);
            }
        }
        this.setAttribute(attr.name, na, attr.itemSize);
    }

    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newVerts.push(
            this.vertices[this.verticesIndices[i + 0] * 3 + 0],
            this.vertices[this.verticesIndices[i + 0] * 3 + 1],
            this.vertices[this.verticesIndices[i + 0] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 1] * 3 + 0],
            this.vertices[this.verticesIndices[i + 1] * 3 + 1],
            this.vertices[this.verticesIndices[i + 1] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 2] * 3 + 0],
            this.vertices[this.verticesIndices[i + 2] * 3 + 1],
            this.vertices[this.verticesIndices[i + 2] * 3 + 2]);

        newIndizes.push(count);
        count++;
    }

    this.vertices = newVerts;

    this.verticesIndices = [];
    if (reIndex) this.verticesIndices = newIndizes;

    if (!dontCalcNormals) this.calculateNormals();
};

Geometry.prototype.calcBarycentric = function ()
{
    let barycentrics = [];
    barycentrics.length = this.vertices.length;
    for (let i = 0; i < this.vertices.length; i++) barycentrics[i] = 0;

    let count = 0;
    for (let i = 0; i < this.vertices.length; i += 3)
    {
        barycentrics[i + count] = 1;
        count++;
        if (count == 3) count = 0;
    }

    this.setAttribute("attrBarycentric", barycentrics, 3);
};

Geometry.prototype.getBounds = function ()
{
    return new BoundingBox(this);
};

Geometry.prototype.center = function (x, y, z)
{
    if (x === undefined)
    {
        x = true;
        y = true;
        z = true;
    }

    let i = 0;
    const bounds = this.getBounds();
    const offset = [bounds.minX + (bounds.maxX - bounds.minX) / 2, bounds.minY + (bounds.maxY - bounds.minY) / 2, bounds.minZ + (bounds.maxZ - bounds.minZ) / 2];

    for (i = 0; i < this.vertices.length; i += 3)
    {
        if (this.vertices[i + 0] == this.vertices[i + 0])
        {
            if (x) this.vertices[i + 0] -= offset[0];
            if (y) this.vertices[i + 1] -= offset[1];
            if (z) this.vertices[i + 2] -= offset[2];
        }
    }

    return offset;
};

Geometry.prototype.mapTexCoords2d = function ()
{
    const bounds = this.getBounds();
    const num = this.vertices.length / 3;

    this.texCoords = new Float32Array(num * 2);

    for (let i = 0; i < num; i++)
    {
        const vertX = this.vertices[i * 3 + 0];
        const vertY = this.vertices[i * 3 + 1];
        this.texCoords[i * 2 + 0] = vertX / (bounds.maxX - bounds.minX) + 0.5;
        this.texCoords[i * 2 + 1] = 1.0 - vertY / (bounds.maxY - bounds.minY) + 0.5;
    }
};


Geometry.prototype.getInfoOneLine = function ()
{
    let txt = "";
    if (this.faceVertCount == 3 && this.verticesIndices)txt += this.verticesIndices.length / 3;
    else txt += 0;

    txt += " tris ";

    if (this.vertices)txt += this.vertices.length / 3;
    else txt += 0;

    txt += " verts";

    return txt;
};

Geometry.prototype.getInfo = function ()
{
    const info = {};

    if (this.faceVertCount == 3 && this.verticesIndices)info.numFaces = this.verticesIndices.length / 3;
    else info.numFaces = 0;

    if (this.verticesIndices && this.verticesIndices.length)info.indices = this.verticesIndices.length;

    if (this.vertices)info.numVerts = this.vertices.length / 3;
    else info.numVerts = 0;

    if (this.vertexNormals) info.numNormals = this.vertexNormals.length / 3;
    else info.numNormals = 0;

    if (this.texCoords) info.numTexCoords = this.texCoords.length / 2;
    else info.numTexCoords = 0;

    if (this.tangents) info.numTangents = this.tangents.length / 3;
    else info.numTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.vertexColors) info.numVertexColors = this.vertexColors.length / 4;
    else info.numVertexColors = 0;

    if (this.getAttributes()) info.numAttribs = Object.keys(this.getAttributes()).length;
    else info.numAttribs = 0;

    info.isIndexed = this.isIndexed();

    return info;
};

// -----------------

// TODO : move this into "old" circle op
Geometry.buildFromFaces = function (arr, name, optimize)
{
    const vertices = [];
    const verticesIndices = [];

    for (let i = 0; i < arr.length; i += 3)
    {
        const a = arr[i + 0];
        const b = arr[i + 1];
        const c = arr[i + 2];
        const face = [-1, -1, -1];

        if (optimize)
            for (let iv = 0; iv < vertices.length; iv += 3)
            {
                if (vertices[iv + 0] == a[0] && vertices[iv + 1] == a[1] && vertices[iv + 2] == a[2]) face[0] = iv / 3;
                if (vertices[iv + 0] == b[0] && vertices[iv + 1] == b[1] && vertices[iv + 2] == b[2]) face[1] = iv / 3;
                if (vertices[iv + 0] == c[0] && vertices[iv + 1] == c[1] && vertices[iv + 2] == c[2]) face[2] = iv / 3;
            }

        if (face[0] == -1)
        {
            vertices.push(a[0], a[1], a[2]);
            face[0] = (vertices.length - 1) / 3;
        }

        if (face[1] == -1)
        {
            vertices.push(b[0], b[1], b[2]);
            face[1] = (vertices.length - 1) / 3;
        }

        if (face[2] == -1)
        {
            vertices.push(c[0], c[1], c[2]);
            face[2] = (vertices.length - 1) / 3;
        }

        verticesIndices.push(parseInt(face[0], 10));
        verticesIndices.push(parseInt(face[1], 10));
        verticesIndices.push(parseInt(face[2], 10));
    }

    const geom = new Geometry(name);
    geom.name = name;
    geom.vertices = vertices;
    geom.verticesIndices = verticesIndices;

    return geom;
};

// TODO: not needed anymore ?! move to deprecated ops?
Geometry.json2geom = function (jsonMesh)
{
    const geom = new Geometry("jsonMeshGeom");
    geom.verticesIndices = [];

    geom.vertices = jsonMesh.vertices || [];
    geom.vertexNormals = jsonMesh.normals || [];
    geom.vertexColors = jsonMesh.colors || [];
    geom.tangents = jsonMesh.tangents || [];
    geom.biTangents = jsonMesh.bitangents || [];
    if (jsonMesh.texturecoords) geom.setTexCoords(jsonMesh.texturecoords[0]);

    if (jsonMesh.vertices_b64)geom.vertices = new Float32Array(b64decTypedArray(jsonMesh.vertices_b64));
    if (jsonMesh.normals_b64) geom.vertexNormals = new Float32Array(b64decTypedArray(jsonMesh.normals_b64));
    if (jsonMesh.tangents_b64) geom.tangents = new Float32Array(b64decTypedArray(jsonMesh.tangents_b64));
    if (jsonMesh.bitangents_b64) geom.biTangents = new Float32Array(b64decTypedArray(jsonMesh.bitangents_b64));
    if (jsonMesh.texturecoords_b64) geom.setTexCoords(new Float32Array(b64decTypedArray(jsonMesh.texturecoords_b64[0])));

    if (jsonMesh.faces_b64)
    {
        geom.verticesIndices = new Uint32Array(b64decTypedArray(jsonMesh.faces_b64));
    }
    else
    {
        geom.verticesIndices.length = jsonMesh.faces.length * 3;
        for (let i = 0; i < jsonMesh.faces.length; i++)
        {
            geom.verticesIndices[i * 3] = jsonMesh.faces[i][0];
            geom.verticesIndices[i * 3 + 1] = jsonMesh.faces[i][1];
            geom.verticesIndices[i * 3 + 2] = jsonMesh.faces[i][2];
        }
    }

    return geom;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh_feedback.js
// view-source:http://toji.github.io/webgl2-particles-2/

function extendMeshWithFeedback(Mesh)
{
    Mesh.prototype.hasFeedbacks = function ()
    {
        return this._feedBacks.length > 0;
    };

    Mesh.prototype.removeFeedbacks = function (shader)
    {
        if (!this._feedbacks) return;
        this._feedbacks.length = 0;
        this._feedBacksChanged = true;
    };

    Mesh.prototype.setAttributeFeedback = function () {};

    Mesh.prototype.setFeedback = function (attrib, nameOut, initialArr)
    {
        let fb = { nameOut, };
        let found = false;
        this.unBindFeedbacks();

        for (let i = 0; i < this._feedBacks.length; i++)
        {
            if (this._feedBacks[i].nameOut == nameOut)
            {
                fb = this._feedBacks[i];

                found = true;
            }
        }

        if (!found) this._feedBacksChanged = true;

        fb.initialArr = initialArr;
        fb.attrib = attrib;

        // console.log("setfeedback");

        if (fb.outBuffer) this._cgl.gl.deleteBuffer(fb.outBuffer);
        // if(fb.attrib.buffer)this._cgl.gl.deleteBuffer(fb.attrib.buffer);
        fb.outBuffer = this._cgl.gl.createBuffer();
        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.outBuffer);
        this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW);

        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer);
        this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW);

        if (!found) this._feedBacks.push(fb);

        // console.log('initialArr',initialArr.length/3);
        // console.log('vertices',fb.attrib.numItems);
        // console.log('vertices',this._bufVertexAttrib.numItems);

        return fb;
    };

    Mesh.prototype.bindFeedback = function (attrib)
    {
        if (!this._feedBacks || this._feedBacks.length === 0) return;
        if (this._transformFeedBackLoc == -1) this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback();

        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);

        let found = false;

        for (let i = 0; i < this._feedBacks.length; i++)
        {
            const fb = this._feedBacks[i];

            if (fb.attrib == attrib)
            {
                found = true;
                // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer);
                //
                // this._cgl.gl.vertexAttribPointer(
                //     fb.attrib.loc,
                //     fb.attrib.itemSize,
                //     fb.attrib.type,
                //     false,
                //     fb.attrib.itemSize*4, 0);

                this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer);
            }
        }

        if (!found)
        {
            // console.log("ARTTRIB NOT FOUND",attrib.name);
        }
    };

    Mesh.prototype.drawFeedbacks = function (shader, prim)
    {
        let i = 0;

        if (this._feedBacksChanged)
        {
            const names = [];
            this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);

            for (i = 0; i < this._feedBacks.length; i++) names.push(this._feedBacks[i].nameOut);
            shader.setFeedbackNames(names);

            console.log("feedbacknames", names);

            shader.compile();
            this._feedBacksChanged = false;
            this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
            console.log("changed finished");
            return;
        }

        //
        // for( i=0;i<this._feedBacks.length;i++)
        // {
        //     var fb=this._feedBacks[i];
        //
        //     this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer);
        // }

        // draw
        this._cgl.gl.beginTransformFeedback(this.glPrimitive);
        this._cgl.gl.drawArrays(prim, 0, this._feedBacks[0].attrib.numItems);

        // unbind
        this._cgl.gl.endTransformFeedback();

        this.unBindFeedbacks();

        this.feedBacksSwapBuffers();
    };

    Mesh.prototype.unBindFeedbacks = function ()
    {
        for (let i = 0; i < this._feedBacks.length; i++)
        {
            // this._cgl.gl.disableVertexAttribArray(this._feedBacks[i].attrib.loc);
            this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, null);
        }

        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
    };

    Mesh.prototype.feedBacksSwapBuffers = function ()
    {
        for (let i = 0; i < this._feedBacks.length; i++)
        {
            const t = this._feedBacks[i].attrib.buffer;
            this._feedBacks[i].attrib.buffer = this._feedBacks[i].outBuffer;
            this._feedBacks[i].outBuffer = t;
        }
    };
}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh.js





const MESH = {};
MESH.lastMesh = null;

/**
 * webgl renderable 3d object
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param {Context} _cgl cgl
 * @param {Geometry} __geom geometry
 * @param {Number} _options glPrimitive
 * @example
 * const cgl=this._cgl
 * const mesh=new CGL.Mesh(cgl, geometry);
 *
 * function render()
 * {
 *   mesh.render(cgl.getShader());
 * }
 */
const Mesh = function (_cgl, __geom, _options)
{
    this._cgl = _cgl;

    let options = _options || {};
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": _options }; // old constructor fallback...
    this._log = new Logger("cgl_mesh");
    this._bufVertexAttrib = null;
    this._bufVerticesIndizes = this._cgl.gl.createBuffer();
    this._indexType = this._cgl.gl.UNSIGNED_SHORT;
    this._attributes = [];
    this._attribLocs = {};
    this._geom = null;
    this._lastShader = null;
    this._numInstances = 0;
    this._glPrimitive = options.glPrimitive;

    this.opId = options.opId || "";
    this._preWireframeGeom = null;
    this.addVertexNumbers = false;
    this._name = "unknown";

    this.feedBackAttributes = [];
    this.setGeom(__geom);

    this._feedBacks = [];
    this._feedBacksChanged = false;
    this._transformFeedBackLoc = -1;
    this._lastAttrUpdate = 0;

    this.memFreed = false;

    this._cgl.profileData.addHeavyEvent("mesh constructed", this._name);

    this._queryExt = null;

    Object.defineProperty(this, "numInstances", {
        get()
        {
            return this._numInstances;
        },
        set(v)
        {
            this.setNumInstances(v);
        },
    });
};

Mesh.prototype.freeMem = function ()
{
    this.memFreed = true;

    for (let i = 0; i < this._attributes.length; i++)
    {
        this._attributes[i].floatArray = null;
    }
};

/**
 * @function updateVertices
 * @memberof Mesh
 * @instance
 * @description update vertices only from a geometry
 * @param {Geometry} geom
 */
Mesh.prototype.updateVertices = function (geom)
{
    this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION, geom.vertices, 3);
    this._numVerts = geom.vertices.length / 3;
};

Mesh.prototype.setAttributePointer = function (attrName, name, stride, offset)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attrName)
        {
            if (!this._attributes[i].pointer) this._attributes[i].pointer = [];

            this._attributes[i].pointer.push(
                {
                    "loc": -1,
                    "name": name,
                    "stride": stride,
                    "offset": offset,
                    "instanced": attrName == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX,
                }
            );
        }
    }
};

Mesh.prototype.getAttribute = function (name)
{
    for (let i = 0; i < this._attributes.length; i++) if (this._attributes[i].name == name) return this._attributes[i];
};

Mesh.prototype.setAttributeRange = function (attr, array, start, end)
{
    if (!attr) return;
    if (!start && !end) return;

    if (!attr.name)
    {
        this._log.stack("no attrname?!");
    }

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._cgl.profileData.profileMeshAttributes += (end - start) || 0;

    this._cgl.profileData.profileSingleMeshAttribute[this._name] = this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0;
    this._cgl.profileData.profileSingleMeshAttribute[this._name] += (end - start) || 0;

    if (attr.numItems < array.length / attr.itemSize)
    {
        this._resizeAttr(array, attr);
    }

    if (end > array.length)
    {
        if (CABLES.platform.isDevEnv())
            this._log.log(this._cgl.canvas.id + " " + attr.name + " buffersubdata out of bounds ?", array.length, end, start, attr);
        // end = array.length - 1;
        return;
    }

    if (this._cgl.glVersion == 1) this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, array); // probably slow/ maybe create and array with only changed size ??
    else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, start * 4, array, start, (end - start));
};

Mesh.prototype._resizeAttr = function (array, attr)
{
    if (attr.buffer)
        this._cgl.gl.deleteBuffer(attr.buffer);

    attr.buffer = this._cgl.gl.createBuffer();
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._bufferArray(array, attr);
    attr.numItems = array.length / attr.itemSize;// numItems;
};


Mesh.prototype._bufferArray = function (array, attr)
{
    let floatArray = attr.floatArray || null;
    if (!array) return;


    if (this._cgl.debugOneFrame)
    {
        console.log("_bufferArray", array.length, attr.name); // eslint-disable-line
    }

    if (!(array instanceof Float32Array))
    {
        if (attr && floatArray && floatArray.length == array.length)
        {
            floatArray.set(array);
            // floatArray = floatArray;
        }
        else
        {
            floatArray = new Float32Array(array);

            if (this._cgl.debugOneFrame)
            {
                console.log("_bufferArray create new float32array", array.length, attr.name); // eslint-disable-line
            }

            if (array.length > 10000)
            {
                this._cgl.profileData.profileNonTypedAttrib++;
                this._cgl.profileData.profileNonTypedAttribNames = "(" + this._name + ":" + attr.name + ")";
            }
        }
    }
    else floatArray = array;

    attr.arrayLength = floatArray.length;
    attr.floatArray = null;// floatArray;

    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);
};

/**
 * @function setAttribute
 * @description update attribute
 * @memberof Mesh
 * @instance
 * @param {String} attribute name
 * @param {Array} data
 * @param {Number} itemSize
 * @param {Object} options
 */
Mesh.prototype.addAttribute = Mesh.prototype.updateAttribute = Mesh.prototype.setAttribute = function (name, array, itemSize, options)
{
    if (!array)
    {
        this._log.error("mesh addAttribute - no array given! " + name);
        throw new Error();
    }
    let cb = null;
    let instanced = false;
    let i = 0;
    const numItems = array.length / itemSize;

    this._cgl.profileData.profileMeshAttributes += numItems || 0;

    if (typeof options == "function")
    {
        cb = options;
    }

    if (typeof options == "object")
    {
        if (options.cb) cb = options.cb;
        if (options.instanced) instanced = options.instanced;
    }

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX) instanced = true;


    for (i = 0; i < this._attributes.length; i++)
    {
        const attr = this._attributes[i];
        if (attr.name == name)
        {
            if (attr.numItems === numItems)
            {
            }
            else
            {
                // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                this._resizeAttr(array, attr);
            }

            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
            this._bufferArray(array, attr);

            return attr;
        }
    }

    // create new buffer...

    const buffer = this._cgl.gl.createBuffer();

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, buffer);
    // this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);

    let type = this._cgl.gl.FLOAT;
    if (options && options.type) type = options.type;
    const attr = {
        "buffer": buffer,
        "name": name,
        "cb": cb,
        "itemSize": itemSize,
        "numItems": numItems,
        "startItem": 0,
        "instanced": instanced,
        "type": type
    };

    this._bufferArray(array, attr);

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION) this._bufVertexAttrib = attr;
    this._attributes.push(attr);
    this._attribLocs = {};

    return attr;
};

Mesh.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function updateTexCoords
 * @description update texture coordinates only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateTexCoords = function (geom)
{
    if (geom.texCoords && geom.texCoords.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, geom.texCoords, 2);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length / 3) * 2));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, tcBuff, 2);
    }
};


/**
 * @function updateNormals
 * @description update normals only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateNormals = function (geom)
{
    if (geom.vertexNormals && geom.vertexNormals.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, geom.vertexNormals, 3);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length)));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, tcBuff, 3);
    }
};


Mesh.prototype._setVertexNumbers = function (arr)
{
    if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || arr)
    {
        if (arr) this._verticesNumbers = arr;
        else
        {
            this._verticesNumbers = new Float32Array(this._numVerts);
            for (let i = 0; i < this._numVerts; i++) this._verticesNumbers[i] = i;
        }

        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (attr, geom, shader) =>
        {
            if (!shader.uniformNumVertices) shader.uniformNumVertices = new Uniform(shader, "f", "numVertices", this._numVerts);
            shader.uniformNumVertices.setValue(this._numVerts);

            // console.log("this._numVerts", this._numVerts, attr, shader.uniformNumVertices);
        });
    }
};

/**
 * @function setVertexIndices
 * @description update vertex indices / faces
 * @memberof Mesh
 * @instance
 * @param {array} vertIndices
 */
Mesh.prototype.setVertexIndices = function (vertIndices)
{
    if (!this._bufVerticesIndizes)
    {
        this._log.warn("no bufVerticesIndizes: " + this._name);
        return;
    }
    if (vertIndices.length > 0)
    {
        if (vertIndices instanceof Float32Array) this._log.warn("vertIndices float32Array: " + this._name);

        for (let i = 0; i < vertIndices.length; i++)
        {
            if (vertIndices[i] >= this._numVerts)
            {
                this._log.warn("invalid index in " + this._name, i, vertIndices[i]);
                return;
            }
        }

        this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);

        // todo cache this ?
        // if(!this.vertIndicesTyped || this.vertIndicesTyped.length!=this._geom.verticesIndices.length)

        if (vertIndices.length > 65535)
        {
            this.vertIndicesTyped = new Uint32Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (vertIndices instanceof Uint32Array)
        {
            this.vertIndicesTyped = vertIndices;
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (!(vertIndices instanceof Uint16Array))
        {
            this.vertIndicesTyped = new Uint16Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_SHORT;
        }
        else this.vertIndicesTyped = vertIndices;

        this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW);
        this._bufVerticesIndizes.itemSize = 1;
        this._bufVerticesIndizes.numItems = vertIndices.length;
    }
    else this._bufVerticesIndizes.numItems = 0;
};

/**
 * @function setGeom
 * @memberof Mesh
 * @instance
 * @description set geometry for mesh
 * @param {Geometry} geom
 * @param {boolean} removeRef
 */
Mesh.prototype.setGeom = function (geom, removeRef)
{
    this._geom = geom;
    if (geom.glPrimitive != null) this._glPrimitive = geom.glPrimitive;
    if (this._geom && this._geom.name) this._name = "mesh " + this._geom.name;

    MESH.lastMesh = null;
    this._cgl.profileData.profileMeshSetGeom++;

    this._disposeAttributes();

    this.updateVertices(this._geom);
    this.setVertexIndices(this._geom.verticesIndices);

    if (this.addVertexNumbers) this._setVertexNumbers();

    const geomAttribs = this._geom.getAttributes();

    const attribAssoc = {
        "texCoords": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD,
        "vertexNormals": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL,
        "vertexColors": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_COLOR,
        "tangents": "attrTangent",
        "biTangents": "attrBiTangent",
    };

    for (const index in geomAttribs)
        if (geomAttribs[index].data && geomAttribs[index].data.length)
            this.setAttribute(attribAssoc[index] || index, geomAttribs[index].data, geomAttribs[index].itemSize);


    if (removeRef)
    {
        this._geom = null;
    }
};

Mesh.prototype._preBind = function (shader)
{
    for (let i = 0; i < this._attributes.length; i++)
        if (this._attributes[i].cb)
            this._attributes[i].cb(this._attributes[i], this._geom, shader);
};

Mesh.prototype._checkAttrLengths = function ()
{
    if (this.memFreed) return;
    // check length
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].arrayLength / this._attributes[i].itemSize < this._attributes[0].arrayLength / this._attributes[0].itemSize)
        {
            let name = "unknown";
            if (this._geom)name = this._geom.name;
            // this._log.warn(
            //     name + ": " + this._attributes[i].name +
            //     " wrong attr length. is:", this._attributes[i].arrayLength / this._attributes[i].itemSize,
            //     " should be:", this._attributes[0].arrayLength / this._attributes[0].itemSize,
            // );
        }
    }
};

Mesh.prototype._bind = function (shader)
{
    if (!shader.isValid()) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    this._lastShader = shader;
    if (shader.lastCompile > this._lastAttrUpdate || attrLocs.length != this._attributes.length)
    {
        this._lastAttrUpdate = shader.lastCompile;
        for (let i = 0; i < this._attributes.length; i++) attrLocs[i] = -1;
    }

    for (let i = 0; i < this._attributes.length; i++)
    {
        const attribute = this._attributes[i];
        if (attrLocs[i] == -1)
        {
            if (attribute._attrLocationLastShaderTime != shader.lastCompile)
            {
                attribute._attrLocationLastShaderTime = shader.lastCompile;
                attrLocs[i] = this._cgl.glGetAttribLocation(shader.getProgram(), attribute.name);
                // this._log.log('attribloc',attribute.name,attrLocs[i]);
                this._cgl.profileData.profileAttrLoc++;
            }
        }

        if (attrLocs[i] != -1)
        {
            this._cgl.gl.enableVertexAttribArray(attrLocs[i]);
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attribute.buffer);

            if (attribute.instanced)
            {
                // todo: easier way to fill mat4 attribs...
                if (attribute.itemSize <= 4)
                {
                    if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("instanced attrib itemsize error", this._geom.name, attribute);

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                }
                else if (attribute.itemSize == 16)
                {
                    const stride = 16 * 4;

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], 4, attribute.type, false, stride, 0);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 1);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 1, 4, attribute.type, false, stride, 4 * 4 * 1);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 2);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 2, 4, attribute.type, false, stride, 4 * 4 * 2);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 3);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 3, 4, attribute.type, false, stride, 4 * 4 * 3);

                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 1);
                }
                else
                {
                    this._log.warn("unknown instance attrib size", attribute.name);
                }
            }
            else
            {
                if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("attrib itemsize error", this._name, attribute);
                this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);

                if (attribute.pointer)
                {
                    for (let ip = 0; ip < attribute.pointer.length; ip++)
                    {
                        const pointer = attribute.pointer[ip];

                        if (pointer.loc == -1)
                            pointer.loc = this._cgl.glGetAttribLocation(shader.getProgram(), pointer.name);

                        this._cgl.profileData.profileAttrLoc++;

                        this._cgl.gl.enableVertexAttribArray(pointer.loc);
                        this._cgl.gl.vertexAttribPointer(pointer.loc, attribute.itemSize, attribute.type, false, pointer.stride, pointer.offset);
                    }
                }
                this.bindFeedback(attribute);
            }
        }
    }

    if (this._bufVerticesIndizes && this._bufVerticesIndizes.numItems !== 0) this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);
};

Mesh.prototype.unBind = function ()
{
    const shader = this._lastShader;
    this._lastShader = null;
    if (!shader) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    MESH.lastMesh = null;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].instanced)
        {
            // todo: easier way to fill mat4 attribs...
            if (this._attributes[i].itemSize <= 4)
            {
                if (attrLocs[i] != -1) this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                if (attrLocs[i] >= 0) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
            }
            else
            {
                this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 0);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 1);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 2);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 3);
            }
        }

        if (attrLocs[i] != -1) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
    }
};

Mesh.prototype.meshChanged = function ()
{
    return this._cgl.lastMesh && this._cgl.lastMesh != this;
};

Mesh.prototype.printDebug = function (shader)
{
    console.log("--attributes");
    for (let i = 0; i < this._attributes.length; i++)
    {
        console.log("attribute " + i + " " + this._attributes[i].name);
    }
};

Mesh.prototype.setNumVertices = function (num)
{
    this._bufVertexAttrib.numItems = num;
};

Mesh.prototype.getNumVertices = function ()
{
    return this._bufVertexAttrib.numItems;
};


/**
 * @function render
 * @memberof Mesh
 * @instance
 * @description draw mesh to screen
 * @param {Shader} shader
 */
Mesh.prototype.render = function (shader)
{
    // TODO: enable/disablevertex only if the mesh has changed... think drawing 10000x the same mesh

    if (!shader || !shader.isValid() || this._cgl.aborted) return;

    this._checkAttrLengths();

    if (this._geom)
    {
        if (this._preWireframeGeom && !shader.wireframe && !this._geom.isIndexed())
        {
            this.setGeom(this._preWireframeGeom);
            this._preWireframeGeom = null;
            // console.log("remove prewireframe geom");
        }

        if (shader.wireframe)
        {
            let changed = false;

            if (this._geom.isIndexed())
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }

                this._geom.unIndex();
                changed = true;
            }

            if (!this._geom.getAttribute("attrBarycentric"))
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }
                changed = true;

                this._geom.calcBarycentric();
            }
            if (changed) this.setGeom(this._geom);
        }
        // if (shader.wireframe)
        // console.log(shader.wireframe, this._geom.isIndexed());
    }

    let needsBind = false;
    if (MESH.lastMesh != this)
    {
        if (MESH.lastMesh) MESH.lastMesh.unBind();
        needsBind = true;
    }


    // var needsBind=false;
    // {
    //     needsBind=true;
    // }
    if (needsBind) this._preBind(shader);

    if (!shader.bind()) return;

    // if(needsBind)
    this._bind(shader);
    if (this.addVertexNumbers) this._setVertexNumbers();

    MESH.lastMesh = this;

    let prim = this._cgl.gl.TRIANGLES;
    if (this._glPrimitive !== undefined) prim = this._glPrimitive;
    if (shader.glPrimitive !== null) prim = shader.glPrimitive;

    let elementDiv = 1;
    let doQuery = this._cgl.profileData.doProfileGlQuery;
    let queryStarted = false;
    if (doQuery)
    {
        let id = this._name + " - " + shader.getName() + " #" + shader.id;
        if (this._numInstances) id += " instanced " + this._numInstances + "x";

        let queryProfilerData = this._cgl.profileData.glQueryData[id];

        if (!queryProfilerData) queryProfilerData = { "id": id, "num": 0 };

        if (shader.opId)queryProfilerData.shaderOp = shader.opId;
        if (this.opId)queryProfilerData.meshOp = this.opId;

        this._cgl.profileData.glQueryData[id] = queryProfilerData;

        if (!this._queryExt && this._queryExt !== false) this._queryExt = this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2") || false;
        if (this._queryExt)
        {
            if (queryProfilerData._drawQuery)
            {
                const available = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT_AVAILABLE);
                if (available)
                {
                    const elapsedNanos = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT);
                    const currentTimeGPU = elapsedNanos / 1000000;

                    queryProfilerData._times = queryProfilerData._times || 0;
                    queryProfilerData._times += currentTimeGPU;
                    queryProfilerData._numcount++;
                    queryProfilerData.when = performance.now();
                    queryProfilerData._drawQuery = null;
                    queryProfilerData.queryStarted = false;
                }
            }

            if (!queryProfilerData.queryStarted)
            {
                queryProfilerData._drawQuery = this._cgl.gl.createQuery();
                this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, queryProfilerData._drawQuery);
                queryStarted = queryProfilerData.queryStarted = true;
            }
        }
    }


    if (this.hasFeedbacks())
    {
        this.drawFeedbacks(shader, prim);
    }
    else if (!this._bufVerticesIndizes || this._bufVerticesIndizes.numItems === 0)
    {
        // for (let i = 0; i < this._attributes.length; i++)
        // {
        //     if (this._attributes[i].arrayLength / this._attributes[i].itemSize != this._bufVertexAttrib.floatArray.length / 3)
        //     {
        //         this._log.warn("attrib buffer length wrong! ", this._attributes[i].name, this._attributes[i].arrayLength / this._attributes[i].itemSize, this._bufVertexAttrib.floatArray.length / 3, this._attributes[i].itemSize);
        //         // this._log.log(this);
        //         // debugger;
        //         return;
        //     }
        // }


        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0) this._cgl.gl.drawArrays(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem);
        else this._cgl.gl.drawArraysInstanced(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances);
    }
    else
    {
        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0)
        {
            // console.log("la", this._bufVerticesIndizes.numItems);

            this._cgl.gl.drawElements(prim, this._bufVerticesIndizes.numItems, this._indexType, 0);
        }
        else
        {
            this._cgl.gl.drawElementsInstanced(prim, this._bufVerticesIndizes.numItems, this._indexType, 0, this._numInstances);
        }
    }

    if (this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR)
    {
        this._log.error("mesh draw gl error");
        this._log.error("mesh", this);
        this._log.error("shader", shader);

        const attribNames = [];
        for (let i = 0; i < this._cgl.gl.getProgramParameter(shader.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); i++)
        {
            const name = this._cgl.gl.getActiveAttrib(shader.getProgram(), i).name;
            this._log.error("attrib ", name);
        }
    }

    this._cgl.profileData.profileMeshNumElements += (this._bufVertexAttrib.numItems / elementDiv) * (this._numInstances || 1);
    this._cgl.profileData.profileMeshDraw++;

    if (doQuery && queryStarted)
    {
        this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT);
    }

    this._cgl.printError("mesh render " + this._name);

    this.unBind();
};

Mesh.prototype.setNumInstances = function (n)
{
    n = Math.max(0, n);
    if (this._numInstances != n)
    {
        this._numInstances = n;
        const indexArr = new Float32Array(n);
        for (let i = 0; i < n; i++) indexArr[i] = i;
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_INDEX, indexArr, 1, { "instanced": true });
    }
};

Mesh.prototype._disposeAttributes = function ()
{
    if (!this._attributes) return;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].buffer)
        {
            this._cgl.gl.deleteBuffer(this._attributes[i].buffer);
            this._attributes[i].buffer = null;
        }
    }
    this._attributes.length = 0;
};

Mesh.prototype.dispose = function ()
{
    if (this._bufVertexAttrib && this._bufVertexAttrib.buffer) this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);
    if (this._bufVerticesIndizes) this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);
    this._bufVerticesIndizes = null;

    this._disposeAttributes();
};

extendMeshWithFeedback(Mesh);



;// CONCATENATED MODULE: ./src/core/cgl/cgl_simplerect.js




const MESHES = {};

MESHES.getSimpleRect = function (cgl, name)
{
    const geom = new Geometry(name);

    geom.vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0];
    geom.texCoords = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    geom.verticesIndices = [0, 1, 2, 2, 1, 3];
    geom.vertexNormals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

    return new Mesh(cgl, geom);
};


MESHES.getSimpleCube = function (cgl, name)
{
    const geom = new Geometry(name);
    geom.vertices = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1];
    geom.setTexCoords([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,]);
    geom.verticesIndices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    geom.vertexNormals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]);
    geom.tangents = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    geom.biTangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]);

    return new Mesh(cgl, geom);
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_textureeffect.js




const TextureEffect = function (cgl, options)
{
    this._cgl = cgl;
    this._log = new Logger("cgl_TextureEffect");

    if (!cgl.TextureEffectMesh) this.createMesh();

    this._textureSource = null;
    this._options = options;
    this.name = options.name || "unknown";

    // TODO: do we still need the options ?
    // var opts=options ||
    //     {
    //         isFloatingPointTexture:false,
    //         filter:CGL.Texture.FILTER_LINEAR
    //     };
    // if(options && options.fp)opts.isFloatingPointTexture=true;

    this.imgCompVer = 0;
    this.aspectRatio = 1;
    this._textureTarget = null; // new CGL.Texture(this._cgl,opts);
    this._frameBuf = this._cgl.gl.createFramebuffer();
    this._frameBuf2 = this._cgl.gl.createFramebuffer();
    this._renderbuffer = this._cgl.gl.createRenderbuffer();
    this._renderbuffer2 = this._cgl.gl.createRenderbuffer();
    this.switched = false;
    this.depth = false;
};

TextureEffect.prototype.dispose = function ()
{
    if (this._renderbuffer) this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    if (this._frameBuf) this._cgl.gl.deleteFramebuffer(this._frameBuf);
    if (this._renderbuffer2) this._cgl.gl.deleteRenderbuffer(this._renderbuffer2);
    if (this._frameBuf2) this._cgl.gl.deleteFramebuffer(this._frameBuf2);
};

TextureEffect.prototype.getWidth = function ()
{
    return this._textureSource.width;
};

TextureEffect.prototype.getHeight = function ()
{
    return this._textureSource.height;
};

TextureEffect.prototype.setSourceTexture = function (tex)
{
    if (tex === null)
    {
        this._textureSource = new Texture(this._cgl);
        this._textureSource.setSize(16, 16);
    }
    else
    {
        this._textureSource = tex;
    }

    if (!this._textureSource.compareSettings(this._textureTarget))
    {
        if (this._textureTarget) this._textureTarget.delete();

        this._textureTarget = this._textureSource.clone();

        this._cgl.profileData.profileEffectBuffercreate++;

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);
        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    }

    this.aspectRatio = this._textureSource.width / this._textureSource.height;
};
TextureEffect.prototype.continueEffect = function ()
{
    this._cgl.pushDepthTest(false);
    this._cgl.pushModelMatrix();
    this._cgl.pushPMatrix();
    // todo why two pushs?



    this._cgl.pushViewPort(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height);



    mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100.0); // todo: why?

    this._cgl.pushPMatrix();
    mat4.identity(this._cgl.pMatrix);

    this._cgl.pushViewMatrix();
    mat4.identity(this._cgl.vMatrix);

    this._cgl.pushModelMatrix();
    mat4.identity(this._cgl.mMatrix);
};


TextureEffect.prototype.startEffect = function (bgTex)
{
    if (!this._textureTarget)
    {
        this._log.warn("effect has no target");
        return;
    }

    this.switched = false;

    this.continueEffect();

    if (bgTex)
    {
        this._bgTex = bgTex;
    }
    this._countEffects = 0;
};

TextureEffect.prototype.endEffect = function ()
{
    this._cgl.popDepthTest();
    this._cgl.popModelMatrix();

    this._cgl.popPMatrix();
    this._cgl.popModelMatrix();
    this._cgl.popViewMatrix();

    this._cgl.popPMatrix();
    this._cgl.popViewPort();
};

TextureEffect.prototype.bind = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    if (!this.switched)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);
        this._cgl.pushGlFrameBuffer(this._frameBuf);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);
        this._cgl.pushGlFrameBuffer(this._frameBuf2);
    }
};

TextureEffect.prototype.finish = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    this._cgl.TextureEffectMesh.render(this._cgl.getShader());

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());

    this._cgl.profileData.profileTextureEffect++;

    if (this._textureTarget.filter == Texture.FILTER_MIPMAP)
    {
        if (!this.switched)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex);
            this._textureTarget.updateMipMap();
        }
        else
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex);
            this._textureSource.updateMipMap();
        }

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
    }

    this.switched = !this.switched;
    this._countEffects++;
};

TextureEffect.prototype.getCurrentTargetTexture = function ()
{
    if (this.switched) return this._textureSource;
    return this._textureTarget;
};

TextureEffect.prototype.getCurrentSourceTexture = function ()
{
    if (this._countEffects == 0 && this._bgTex) return this._bgTex;

    if (this.switched) return this._textureTarget;
    return this._textureSource;
};

TextureEffect.prototype.delete = function ()
{
    if (this._textureTarget) this._textureTarget.delete();
    if (this._textureSource) this._textureSource.delete();
    this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuf);
};

TextureEffect.prototype.createMesh = function ()
{
    this._cgl.TextureEffectMesh = MESHES.getSimpleRect(this._cgl, "texEffectRect");
};

// ---------------------------------------------------------------------------------

TextureEffect.checkOpNotInTextureEffect = function (op)
{
    if (!op.patch.cgl) return true;
    if (op.uiAttribs.error && !op.patch.cgl.currentTextureEffect)
    {
        op.setUiError("textureeffect", null);
        return true;
    }
    if (!op.patch.cgl.currentTextureEffect) return true;

    if (op.patch.cgl.currentTextureEffect && !op.uiAttribs.error)
    {
        op.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0);
        return false;
    }

    if (op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.checkOpInEffect = function (op, minver)
{
    minver = minver || 0;

    if (op.patch.cgl.currentTextureEffect)
    {
        if (op.uiAttribs.uierrors && op.patch.cgl.currentTextureEffect.imgCompVer >= minver)
        {
            op.setUiError("texeffect", null);
            return true;
        }

        if (minver && op.patch.cgl.currentTextureEffect.imgCompVer < minver)
        {
            op.setUiError("texeffect", "This op must be a child of an ImageCompose op with version >=" + minver + " <span class=\"button-small\" onclick=\"gui.patchView.downGradeOp('" + op.id + "','" + op.name + "')\">Downgrade</span> to previous version", 1);
        }
    }

    if (op.patch.cgl.currentTextureEffect) return true;

    if (!op.patch.cgl.currentTextureEffect && (!op.uiAttribs.uierrors || op.uiAttribs.uierrors.length == 0))
    {
        op.setUiError("texeffect", "This op must be a child of an ImageCompose op! More infos <a href=\"https://docs.cables.gl/image_composition/image_composition.html\" target=\"_blank\">here</a>. ", 1);
        return false;
    }

    if (!op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.getBlendCode = function (ver)
{
    let src = "".endl()
        + "vec3 _blend(vec3 base,vec3 blend)".endl()
        + "{".endl()
        + "   vec3 colNew=blend;".endl()
        + "   #ifdef BM_MULTIPLY".endl()
        + "       colNew=base*blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_MULTIPLY_INV".endl()
        + "       colNew=base* vec3(1.0)-blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_AVERAGE".endl()
        + "       colNew=((base + blend) / 2.0);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_ADD".endl()
        + "       colNew=min(base + blend, vec3(1.0));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SUBTRACT_ONE".endl()
        + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl()
        + "   #endif".endl()

        + "   #ifdef BM_SUBTRACT".endl()
        + "       colNew=base - blend;".endl()
        + "   #endif".endl()

        + "   #ifdef BM_DIFFERENCE".endl()
        + "       colNew=abs(base - blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_NEGATION".endl()
        + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_EXCLUSION".endl()
        + "       colNew=(base + blend - 2.0 * base * blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_LIGHTEN".endl()
        + "       colNew=max(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_DARKEN".endl()
        + "       colNew=min(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_OVERLAY".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SCREEN".endl()
        + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)'
            // .endl()+'      colNew=Blend(base, blend, BlendScreenf);'
            .endl()
        + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SOFTLIGHT".endl()
        + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))"
            // .endl()+'       #define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendSoftLightf);'
            .endl()
        + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_HARDLIGHT".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            // .endl()+'      colNew=Blend(blend, base, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORDODGE".endl()
        + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorDodgef);'
            .endl()
        + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORBURN".endl()
        + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorBurnf);'
            .endl()
        + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl()
        + "   #endif".endl()










        + "   return colNew;".endl()
        + "}".endl();

    if (!ver)
        src += "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl()
                + "{".endl()
                    + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl()
                    + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl()
                    + "return col;".endl()
                + "}".endl();

    if (ver >= 3)
        src += "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() +
                "{".endl() +

                "#ifdef BM_MATH_ADD".endl() +
                "   return vec4(base.rgb+col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_SUB".endl() +
                "   return vec4(base.rgb-col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_MUL".endl() +
                "   return vec4(base.rgb*col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_DIV".endl() +
                "   return vec4(base.rgb/col.rgb*amount,1.0);".endl() +
                "#endif".endl() +


                    "#ifndef BM_MATH".endl() +
                        "vec3 colNew=_blend(base.rgb,col.rgb);".endl() +

                        "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() +

                        "#ifdef BM_ALPHAMASKED".endl() +
                            "newA=base.a;".endl() +
                        "#endif".endl() +

                        "return vec4(".endl() +
                            "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() +
                            "newA);".endl() +

                    "#endif".endl() +
    "}".endl();

    return src;
};

TextureEffect.onChangeBlendSelect = function (shader, blendName, maskAlpha = false)
{
    blendName = String(blendName);
    shader.toggleDefine("BM_NORMAL", blendName == "normal");
    shader.toggleDefine("BM_MULTIPLY", blendName == "multiply");
    shader.toggleDefine("BM_MULTIPLY_INV", blendName == "multiply invert");
    shader.toggleDefine("BM_AVERAGE", blendName == "average");
    shader.toggleDefine("BM_ADD", blendName == "add");
    shader.toggleDefine("BM_SUBTRACT_ONE", blendName == "subtract one");
    shader.toggleDefine("BM_SUBTRACT", blendName == "subtract");
    shader.toggleDefine("BM_DIFFERENCE", blendName == "difference");
    shader.toggleDefine("BM_NEGATION", blendName == "negation");
    shader.toggleDefine("BM_EXCLUSION", blendName == "exclusion");
    shader.toggleDefine("BM_LIGHTEN", blendName == "lighten");
    shader.toggleDefine("BM_DARKEN", blendName == "darken");
    shader.toggleDefine("BM_OVERLAY", blendName == "overlay");
    shader.toggleDefine("BM_SCREEN", blendName == "screen");
    shader.toggleDefine("BM_SOFTLIGHT", blendName == "softlight");
    shader.toggleDefine("BM_HARDLIGHT", blendName == "hardlight");
    shader.toggleDefine("BM_COLORDODGE", blendName == "color dodge");
    shader.toggleDefine("BM_COLORBURN", blendName == "color burn");

    shader.toggleDefine("BM_MATH_ADD", blendName == "Math Add");
    shader.toggleDefine("BM_MATH_SUB", blendName == "Math Subtract");
    shader.toggleDefine("BM_MATH_MUL", blendName == "Math Multiply");
    shader.toggleDefine("BM_MATH_DIV", blendName == "Math Divide");

    shader.toggleDefine("BM_MATH", blendName.indexOf("Math ") == 0);


    shader.toggleDefine("BM_ALPHAMASKED", maskAlpha);
};

TextureEffect.AddBlendSelect = function (op, name, defaultMode)
{
    const p = op.inValueSelect(name || "Blend Mode", [
        "normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "subtract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight", "subtract one",
        "Math Add",
        "Math Subtract",
        "Math Multiply",
        "Math Divide",

    ], defaultMode || "normal");
    return p;
};

TextureEffect.AddBlendAlphaMask = function (op, name, defaultMode)
{
    const p = op.inSwitch(name || "Alpha Mask", ["Off", "On"], defaultMode || "Off");
    return p;
};

TextureEffect.setupBlending = function (op, shader, blendPort, amountPort, alphaMaskPort)
{
    const onChange = () =>
    {
        let maskAlpha = false;
        if (alphaMaskPort) maskAlpha = alphaMaskPort.get() == "On";
        TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);

        let str = blendPort.get();
        if (str == "normal") str = null;
        else if (str == "multiply") str = "mul";
        else if (str == "multiply invert") str = "mulinv";
        else if (str == "lighten") str = "light";
        else if (str == "darken") str = "darken";
        else if (str == "average") str = "avg";
        else if (str == "subtract one") str = "sub one";
        else if (str == "subtract") str = "sub";
        else if (str == "difference") str = "diff";
        else if (str == "negation") str = "neg";
        else if (str == "exclusion") str = "exc";
        else if (str == "overlay") str = "ovl";
        else if (str == "color dodge") str = "dodge";
        else if (str == "color burn") str = "burn";
        else if (str == "softlight") str = "soft";
        else if (str == "hardlight") str = "hard";
        else if (str == "Math Add") str = "+";
        else if (str == "Math Subtract") str = "-";
        else if (str == "Math Multiply") str = "*";
        else if (str == "Math Divide") str = "/";

        op.setUiAttrib({ "extendTitle": str });
    };
    op.setPortGroup("Blending", [blendPort, amountPort, alphaMaskPort]);

    let maskAlpha = false;

    blendPort.onChange = onChange;
    if (alphaMaskPort)
    {
        alphaMaskPort.onChange = onChange;
        maskAlpha = alphaMaskPort.get() == "On";
    }

    TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_lib.js




const ShaderLibMods = {
    "CGL.BLENDMODES": function ()
    {
        this.name = "blendmodes";
        this.srcHeadFrag = TextureEffect.getBlendCode();
    },
    "CGL.BLENDMODES3": function ()
    {
        this.name = "blendmodes3";
        this.srcHeadFrag = TextureEffect.getBlendCode(3);
    },

    "CGL.LUMINANCE": function ()
    {
        this.name = "luminance";
        this.srcHeadFrag = "".endl()
            + "float cgl_luminance(vec3 c)".endl()
            + "{".endl()
            + "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl()
            + "}".endl();
    },


    // quite good random numbers, but somehow don't work in ANGLE
    "CGL.RANDOM_OLD": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },


    // low quality generative ranodm numbers
    "CGL.RANDOM_LOW": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },

    // texture based random numbers
    "CGL.RANDOM_TEX": function ()
    {
        this.name = "randomNumbertex";
        this.srcHeadFrag = "".endl()
            + "UNI sampler2D CGLRNDTEX;".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).r;".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl()
            + "}";

        this.initUniforms = function (shader)
        {
            return [new Uniform(shader, "t", "CGLRNDTEX", 7)];
        };

        this.onBind = function (cgl, shader)
        {
            Texture.getRandomTexture(cgl);
            cgl.setTexture(7, Texture.getRandomTexture(cgl).tex);
        };
    },
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_utils.js
/** @namespace CGL */

/**
 * multiply to get radians from degree, e.g. `360 * CGL.DEG2RAD`
 * @const {Number}
 * @memberof CGL
 * @static
 */
const cgl_utils_DEG2RAD = Math.PI / 180.0;

/**
 * to get degrees from radians, e.g. `3.14 * CGL.RAD2DEG`
 * @const {number}
 * @memberof CGL
 */
const cgl_utils_RAD2DEG = 180.0 / Math.PI;

const onLoadingAssetsFinished = null; // deprecated / remove later

/**
 * get normalized mouse wheel delta (including browser specific adjustment)
 * @function getWheelDelta
 * @static
 * @memberof CGL
 * @param {MouseEvent} event
 * @return {Number} normalized delta
 */
const isWindows = window.navigator.userAgent.contains("Windows");
const getWheelDelta_ = function (event)
{
    let normalized;
    if (event.wheelDelta)
    {
        // chrome
        normalized = (event.wheelDelta % 120) - 0 == -0 ? event.wheelDelta / 120 : event.wheelDelta / 30;
        normalized *= -1.5;
        if (isWindows) normalized *= 2;
    }
    else
    {
        // firefox
        let d = event.deltaY;
        if (event.shiftKey) d = event.deltaX;
        const rawAmmount = d || event.detail;
        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
        normalized *= -3;
    }

    if (normalized > 20) normalized = 20;
    if (normalized < -20) normalized = -20;

    return normalized;
};

const getWheelSpeed = getWheelDelta_;
const getWheelDelta = getWheelDelta_;

// from https://github.com/lodash/lodash/blob/master/escape.js

const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/*  eslint-disable */
const escapeHTML = function(string)
{
    return string && reHasUnescapedHtml.test(string) ?
        string.replace(reUnescapedHtml, function(chr) { return htmlEscapes[chr]; })
        : string || "";
}
/* eslint-enable */

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_default_glsl.vert
/* harmony default export */ const cgl_shader_default_glsl = ("{{MODULES_HEAD}}\nIN vec3 vPosition; //!@\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    gl_PointSize=10.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MOVELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n");
;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader.js





// import { CGL } from "./index.js";



// ---------------------------------------------------------------------------


/*

proposal default shader variable names:

attrVertex - currently: vPosition
attrVertexIndex - currently: attrVertIndex
attrTexCoord
attrInstMat - currently: instMat
attrVertColor
attrTangent
attrBiTangent

uProjMatrix - currently: projMatrix
uModelMatrix - currently: modelMatrix
uNormalMatrix - currently: normalMatrix
uCamPosition - currently: camPos

*/


// ---------------------------------------------------------------------------

let materialIdCounter = 0;

/**
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param _cgl
 * @param _name
 * @param _op
 * @example
 * var shader=new CGL.Shader(cgl,'MinimalMaterial');
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */
const Shader = function (_cgl, _name, _op)
{
    if (!_cgl) throw new Error("shader constructed without cgl " + _name);

    this._log = new Logger("cgl_shader");
    this._cgl = _cgl;

    if (!_name) this._log.stack("no shader name given");
    this._name = _name || "unknown";

    if (_op) this.opId = _op.id;
    this.glslVersion = 0;
    if (_cgl.glVersion > 1) this.glslVersion = 300;

    this._materialId = ++materialIdCounter;

    this.id = simpleId();
    this._isValid = true;
    this._program = null;
    this._uniforms = [];
    this._drawBuffers = [true];
    this._defines = [];
    this._needsRecompile = true;
    this._compileReason = "initial";

    this.ignoreMissingUniforms = false;
    this._projMatrixUniform = null;
    this._mvMatrixUniform = null;
    this._mMatrixUniform = null;
    this._vMatrixUniform = null;
    this._camPosUniform = null;
    this._normalMatrixUniform = null;
    this._inverseViewMatrixUniform = null;
    this._fromUserInteraction = false;

    this._attrVertexPos = -1;
    this.precision = _cgl.patch.config.glslPrecision || "highp";

    this._pMatrixState = -1;
    this._vMatrixState = -1;

    this._countMissingUniforms = 0;
    this._modGroupCount = 0; // not needed anymore...
    this._feedBackNames = [];
    this._attributes = [];

    this.glPrimitive = null;
    this.offScreenPass = false;
    this._extensions = [];
    this.srcVert = this.getDefaultVertexShader();
    this.srcFrag = this.getDefaultFragmentShader();
    this.lastCompile = 0;

    this._moduleNames = [];
    this._modules = [];
    this._moduleNumId = 0;

    this._libs = [];
    this._structNames = [];
    this._structUniformNames = [];
    this._textureStackUni = [];
    this._textureStackTex = [];
    this._textureStackType = [];
    this._textureStackTexCgl = [];

    this._tempNormalMatrix = mat4.create();
    this._tempCamPosMatrix = mat4.create();
    this._tempInverseViewMatrix = mat4.create();
    this._tempInverseProjMatrix = mat4.create();

    this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MOVELVIEW"]);
};

Shader.prototype.isValid = function ()
{
    return this._isValid;
};

Shader.prototype.getCgl = function ()
{
    return this._cgl;
};

Shader.prototype.getName = function ()
{
    return this._name;
};

/**
 * enable an extension for the shader
 * @function enableExtension
 * @memberof Shader
 * @instance
 * @param name extension name
 */
Shader.prototype.enableExtension = function (name)
{
    this.setWhyCompile("enable extension " + name);
    this._needsRecompile = true;
    this._extensions.push(name);
};

Shader.prototype.getAttrVertexPos = function ()
{
    return this._attrVertexPos;
};

Shader.prototype.hasTextureUniforms = function ()
{
    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].getType() == "t") return true;
    return false;
};

Shader.prototype.setWhyCompile = function (why)
{
    this._compileReason = why;
};

/**
 * copy all uniform values from another shader
 * @function copyUniforms
 * @memberof Shader
 * @instance
 * @param origShader uniform values will be copied from this shader
 */
Shader.prototype.copyUniformValues = function (origShader)
{
    // console.log(origShader._uniforms);
    for (let i = 0; i < origShader._uniforms.length; i++)
    {
        if (!this._uniforms[i])
        {
            this._log.log("unknown uniform?!");
            continue;
        }

        // this._log.log(origShader._uniforms[i].getName());
        // this.getUniform(origShader._uniforms[i].)
        // this._uniforms[i].set(origShader._uniforms[i].getValue());


        // if (origShader._uniforms[i].getName().contains("pathPoints"))
        //     console.log("copyUniformValues", origShader._uniforms[i].getName(), origShader._uniforms[i].getValue());

        this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
    }

    this.popTextures();
    for (let i = 0; i < origShader._textureStackUni.length; i++)
    {
        this._textureStackUni[i] = origShader._textureStackUni[i];
        this._textureStackTex[i] = origShader._textureStackTex[i];
        this._textureStackType[i] = origShader._textureStackType[i];
        this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
    }

    // this._textureStackUni = [];
    // this._textureStackTex = [];
    // this._textureStackType = [];
    // this._textureStackTexCgl = [];
};

/**
 * copy current shader
 * @function copy
 * @memberof Shader
 * @instance
 * @returns newShader
 */
Shader.prototype.copy = function ()
{
    const shader = new Shader(this._cgl, this._name + " copy");
    shader.setSource(this.srcVert, this.srcFrag);

    shader._modules = JSON.parse(JSON.stringify(this._modules));
    shader._defines = JSON.parse(JSON.stringify(this._defines));

    shader._modGroupCount = this._modGroupCount;
    shader._moduleNames = this._moduleNames;
    shader.glPrimitive = this.glPrimitive;
    shader.offScreenPass = this.offScreenPass;
    shader._extensions = this._extensions;
    shader.wireframe = this.wireframe;
    shader._attributes = this._attributes;

    for (let i = 0; i < this._uniforms.length; i++)
    {
        const u = this._uniforms[i].copy(shader);
        u.resetLoc();
    }

    this.setWhyCompile("copy");
    shader._needsRecompile = true;
    return shader;
};


/**
 * set shader source code
 * @function setSource
 * @memberof Shader
 * @instance
 * @param {String} srcVert
 * @param {String} srcFrag
 */
Shader.prototype.setSource = function (srcVert, srcFrag, fromUserInteraction)
{
    this._fromUserInteraction = fromUserInteraction;
    this.srcVert = srcVert;
    this.srcFrag = srcFrag;
    this.setWhyCompile("Source changed");
    this._needsRecompile = true;
    this._isValid = true;
};

Shader.prototype._addLibs = function (src)
{
    for (const id in ShaderLibMods)
    {
        if (src.contains(id))
        {
            const lib = new ShaderLibMods[id]();
            src = src.replace("{{" + id + "}}", lib.srcHeadFrag);
            this._libs.push(lib);
            if (lib.initUniforms)lib.initUniforms(this);
        }
    }

    return src;
};

Shader.prototype.createStructUniforms = function ()
{
    // * create structs
    let structStrFrag = "";
    let structStrVert = ""; // TODO: not used yet

    this._structNames = [];
    // * reset the arrays holding the value each recompile so we don't skip structs
    // * key value mapping so the same struct can be added twice (two times the same modifier)
    this._injectedStringsFrag = {};
    this._injectedStringsVert = {};

    this._structUniformNamesIndicesFrag = [];
    this._structUniformNamesIndicesVert = [];

    for (let i = 0; i < this._uniforms.length; i++)
    {
        // * only add uniforms to struct that are a member of a struct
        if (this._uniforms[i].isStructMember())
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";

            // * check if struct is not already part of shader
            if (!this._structNames.includes(this._uniforms[i]._structName))
            {
                // * create struct definition with placeholder string to inject
                const structDefinition = "struct "
                    + this._uniforms[i]._structName + " {".endl()
                    + injectionString
                    + "};".endl().endl();

                if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "frag")
                    structStrFrag = structStrFrag.concat(structDefinition);

                if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "vert")
                    structStrVert = structStrVert.concat(structDefinition);

                this._structNames.push(this._uniforms[i]._structName);
                this._injectedStringsFrag[this._uniforms[i]._structName] = [];
                this._injectedStringsVert[this._uniforms[i]._structName] = [];
            }

            // * create member & comment
            let comment = "";
            if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

            let stringToInsert = "";
            if (this._uniforms[i].getGlslTypeString() == undefined)stringToInsert += "//";
            stringToInsert += "  " + this._uniforms[i].getGlslTypeString()
                    + " " + this._uniforms[i]._propertyName + ";"
                    + comment;

            if (this._uniforms[i].getShaderType() === "both")
            {
                // * inject member before {injectionString}
                if (
                    !this._injectedStringsFrag[this._uniforms[i]._structName].contains(stringToInsert)
                && !this._injectedStringsVert[this._uniforms[i]._structName].contains(stringToInsert))
                {
                    const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);
                    const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                    structStrFrag =
                        structStrFrag.slice(0, insertionIndexFrag)
                        + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                    structStrVert =
                        structStrVert.slice(0, insertionIndexVert)
                        + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                    this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                    this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
            }
            else if (this._uniforms[i].getShaderType() === "frag")
            {
                // * inject member before {injectionString}
                if (!this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)) //
                {
                    const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);

                    structStrFrag =
                        structStrFrag.slice(0, insertionIndexFrag)
                        + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                    this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
            }
            else if (this._uniforms[i].getShaderType() === "vert")
            {
                // * inject member before {injectionString}
                if (!this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert))
                {
                    const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                    structStrVert =
                        structStrVert.slice(0, insertionIndexVert)
                        + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                    this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
            }
        }
    }

    // * dedupe injected uni declarations
    this._uniDeclarationsFrag = [];
    this._uniDeclarationsVert = [];

    // * remove struct injection points and add uniform in fragment
    for (let i = 0; i < this._structUniformNamesIndicesFrag.length; i += 1)
    {
        const index = this._structUniformNamesIndicesFrag[i];
        const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

        if (!this._uniDeclarationsFrag.includes(uniDeclarationString))
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

            structStrFrag = structStrFrag.replace(injectionString, "");
            structStrFrag += uniDeclarationString;

            this._uniDeclarationsFrag.push(uniDeclarationString);
        }
    }

    // * remove struct injection points and add uniform in vertex
    for (let i = 0; i < this._structUniformNamesIndicesVert.length; i += 1)
    {
        const index = this._structUniformNamesIndicesVert[i];
        const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

        if (!this._uniDeclarationsVert.includes(uniDeclarationString))
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

            structStrVert = structStrVert.replace(injectionString, "");
            structStrVert += uniDeclarationString;
            this._uniDeclarationsVert.push(uniDeclarationString);
        }
    }

    return [structStrVert, structStrFrag];
};

Shader.prototype._getAttrSrc = function (attr, firstLevel)
{
    const r = {};
    if (attr.name && attr.type)
    {
        r.srcHeadVert = "";
        if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.name.endl();
        r.srcHeadVert += "#define ATTRIB_" + attr.name.endl();
        r.srcHeadVert += "IN " + attr.type + " " + attr.name + ";".endl();
        if (!firstLevel) r.srcHeadVert += "#endif".endl();

        if (attr.nameFrag)
        {
            r.srcHeadVert += "";
            if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadVert += "#define ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadVert += "OUT " + attr.type + " " + attr.nameFrag + ";".endl();
            if (!firstLevel) r.srcHeadVert += "#endif".endl();

            r.srcVert = "".endl() + attr.nameFrag + "=" + attr.name + ";";

            r.srcHeadFrag = "";
            if (!firstLevel) r.srcHeadFrag += "#ifndef ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadFrag += "#define ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadFrag += "IN " + attr.type + " " + attr.nameFrag + ";".endl();
            if (!firstLevel) r.srcHeadFrag += "#endif".endl();
        }
    }
    return r;
};

Shader.prototype.compile = function ()
{
    if (this._cgl.aborted) return;
    const startTime = performance.now();



    this._cgl.profileData.profileShaderCompiles++;
    this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]";

    let extensionString = "";
    if (this._extensions)
        for (let i = 0; i < this._extensions.length; i++)
            extensionString += "#extension " + this._extensions[i] + " : enable".endl();

    let definesStr = "";
    if (this._defines.length) definesStr = "\n// cgl generated".endl();
    for (let i = 0; i < this._defines.length; i++)
        definesStr += "#define " + this._defines[i][0] + " " + this._defines[i][1] + "".endl();

    const structStrings = this.createStructUniforms();
    this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]");
    this._compileReason = "";



    if (this._uniforms)
    {
        // * we create an array of the uniform names to check our indices & an array to save them
        const uniNames = this._uniforms.map((uni) => { return uni._name; });
        const indicesToRemove = [];

        // * we go through our uniforms and check if the same name is contained somewhere further in the array
        // * if so, we add the current index to be removed later
        for (let i = 0; i < this._uniforms.length; i++)
        {
            const uni = this._uniforms[i];
            const nextIndex = uniNames.indexOf(uni._name, i + 1);
            if (nextIndex > -1) indicesToRemove.push(i);
        }

        // * after that, we go through the uniforms backwards (so we keep the order) and remove the indices
        // * also, we reset the locations of all the other valid uniforms
        for (let j = this._uniforms.length - 1; j >= 0; j -= 1)
        {
            if (indicesToRemove.includes(j)) this._uniforms.splice(j, 1);
            else this._uniforms[j].resetLoc();
        }
    }

    this._cgl.printError("uniform resets");

    if (this.hasTextureUniforms()) definesStr += "#define HAS_TEXTURES".endl();

    let vs = "";
    let fs = "";

    if (!this.srcFrag)
    {
        this._log.warn("[cgl shader] has no fragment source!", this._name, this);
        this.srcVert = this.getDefaultVertexShader();
        this.srcFrag = this.getDefaultFragmentShader();
        // return;
    }

    if (this.glslVersion == 300)
    {
        vs = "#version 300 es"
            .endl() + "// "
            .endl() + "// vertex shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define UNI uniform"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl();

        fs = "#version 300 es"
            .endl() + "// "
            .endl() + "// fragment shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl() + "#define UNI uniform"
            .endl() + "{{DRAWBUFFER}}"

            .endl();
    }
    else
    {
        fs = ""
            .endl() + "// "
            .endl() + "// fragment shader " + this._name
            .endl() + "// "
            .endl() + "#define WEBGL1"
            .endl() + "#define texture texture2D"
            .endl() + "#define outColor gl_FragColor"
            .endl() + "#define IN varying"
            .endl() + "#define UNI uniform"
            .endl();

        vs = ""
            .endl() + "// "
            .endl() + "// vertex shader " + this._name
            .endl() + "// "
            .endl() + "#define WEBGL1"
            .endl() + "#define texture texture2D"
            .endl() + "#define OUT varying"
            .endl() + "#define IN attribute"
            .endl() + "#define UNI uniform"
            .endl();
    }

    let uniformsStrVert = "\n// cgl generated".endl();
    let uniformsStrFrag = "\n// cgl generated".endl();


    fs += "\n// active mods: --------------- ";
    vs += "\n// active mods: --------------- ";

    let foundModsFrag = false;
    let foundModsVert = false;
    for (let i = 0; i < this._moduleNames.length; i++)
    {
        for (let j = 0; j < this._modules.length; j++)
        {
            if (this._modules[j].name == this._moduleNames[i])
            {
                if (this._modules[j].srcBodyFrag || this._modules[j].srcHeadFrag)
                {
                    foundModsFrag = true;
                    fs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                }
                if (this._modules[j].srcBodyVert || this._modules[j].srcHeadVert)
                {
                    vs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                    foundModsVert = true;
                }
            }
        }
    }
    if (!foundModsVert)fs += "\n// no mods used...";
    if (!foundModsFrag)fs += "\n// no mods used...";
    fs += "\n";
    vs += "\n";

    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
        {
            let uniStr = "";
            if (!this._uniforms[i].getGlslTypeString())uniStr += "// ";
            uniStr += "UNI " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName();
            let comment = "";
            if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

            if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both")
                if (!this.srcVert.contains(uniStr) && !this.srcVert.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                    uniformsStrVert += uniStr + ";" + comment.endl();

            if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both")
                if (!this.srcFrag.contains(uniStr) && !this.srcFrag.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                    uniformsStrFrag += uniStr + ";" + comment.endl();
        }
    }


    let countUniFrag = 0;
    let countUniVert = 0;
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
        {
            if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both") countUniVert++;
            if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both") countUniFrag++;
        }
    }
    if (countUniFrag >= this._cgl.maxUniformsFrag) this._log.warn("[cgl_shader] num uniforms frag: " + countUniFrag + " / " + this._cgl.maxUniformsFrag);
    if (countUniVert >= this._cgl.maxUniformsVert) this._log.warn("[cgl_shader] num uniforms vert: " + countUniVert + " / " + this._cgl.maxUniformsVert);


    if (!fs.contains("precision")) fs = "precision " + this.precision + " float;".endl() + fs;
    if (!vs.contains("precision")) vs = "precision " + this.precision + " float;".endl() + vs;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
        fs += "#define MOBILE".endl();
        vs += "#define MOBILE".endl();
    }
    vs = extensionString + vs + definesStr + structStrings[0] + uniformsStrVert + "\n// -- \n" + this.srcVert;
    fs = extensionString + fs + definesStr + structStrings[1] + uniformsStrFrag + "\n// -- \n" + this.srcFrag;


    let srcHeadVert = "";
    let srcHeadFrag = "";

    this._modules.sort(function (a, b)
    {
        return a.group - b.group;
    });

    this._modules.sort(function (a, b)
    {
        return a.priority || 0 - b.priority || 0;
    });


    let addedAttribs = false;

    for (let i = 0; i < this._moduleNames.length; i++)
    {
        let srcVert = "";
        let srcFrag = "";

        if (!addedAttribs)
        {
            addedAttribs = true;

            for (let k = 0; k < this._attributes.length; k++)
            {
                const r = this._getAttrSrc(this._attributes[k], true);
                if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                if (r.srcVert)srcVert += r.srcVert;
                if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
            }
        }

        for (let j = 0; j < this._modules.length; j++)
        {
            const mod = this._modules[j];
            if (mod.name == this._moduleNames[i])
            {
                srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";
                srcHeadFrag += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";
                srcFrag += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                if (mod.attributes)
                    for (let k = 0; k < mod.attributes.length; k++)
                    {
                        const r = this._getAttrSrc(mod.attributes[k], false);
                        if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                        if (r.srcVert)srcVert += r.srcVert;
                        if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                    }

                srcHeadVert += mod.srcHeadVert || "";
                srcHeadFrag += mod.srcHeadFrag || "";
                srcVert += mod.srcBodyVert || "";
                srcFrag += mod.srcBodyFrag || "";

                srcHeadVert += "\n//---- end mod ------\n";
                srcHeadFrag += "\n//---- end mod ------\n";

                srcVert += "\n//---- end mod ------\n";
                srcFrag += "\n//---- end mod ------\n";

                srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                srcFrag = srcFrag.replace(/{{mod}}/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);
                srcHeadFrag = srcHeadFrag.replace(/{{mod}}/g, mod.prefix);

                srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                srcFrag = srcFrag.replace(/MOD_/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                srcHeadFrag = srcHeadFrag.replace(/MOD_/g, mod.prefix);
            }
        }


        vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
        fs = fs.replace("{{" + this._moduleNames[i] + "}}", srcFrag);
    }
    vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
    fs = fs.replace("{{MODULES_HEAD}}", srcHeadFrag);


    vs = this._addLibs(vs);
    fs = this._addLibs(fs);


    // SETUP draw buffers / multi texture render targets

    let drawBufferStr = "";
    for (let i = 0; i < 16; i++)
        if (fs.contains("outColor" + i)) this._drawBuffers[i] = true;

    if (this._drawBuffers.length == 1)
    {
        drawBufferStr = "out vec4 outColor;".endl();
        drawBufferStr += "#define gl_FragColor outColor".endl();
    }
    else
    {
        drawBufferStr += "#define MULTI_COLORTARGETS".endl();
        drawBufferStr += "vec4 outColor;".endl();

        let count = 0;
        for (let i = 0; i < this._drawBuffers.length; i++)
        {
            if (count == 0) drawBufferStr += "#define gl_FragColor outColor" + i + "".endl();
            drawBufferStr += "layout(location = " + i + ") out vec4 outColor" + i + ";".endl();
            count++;
        }
    }

    fs = fs.replace("{{DRAWBUFFER}}", drawBufferStr);
    // //////


    if (!this._program)
    {
        this._program = this._createProgram(vs, fs);
    }
    else
    {
        // this.vshader=createShader(vs, gl.VERTEX_SHADER, this.vshader );
        // this.fshader=createShader(fs, gl.FRAGMENT_SHADER, this.fshader );
        // linkProgram(program);
        this._program = this._createProgram(vs, fs);

        this._projMatrixUniform = null;

        for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
    }

    this.finalShaderFrag = fs;
    this.finalShaderVert = vs;


    MESH.lastMesh = null;
    MESH.lastShader = null;

    this._countMissingUniforms = 0;
    this._needsRecompile = false;
    this.lastCompile = now();

    // this._cgl.printError("shader compile");

    this._cgl.profileData.shaderCompileTime += performance.now() - startTime;
};

Shader.hasChanged = function ()
{
    return this._needsRecompile;
};


Shader.prototype.bind = function ()
{
    if (!this._isValid || this._cgl.aborted) return;

    MESH.lastShader = this;

    if (!this._program || this._needsRecompile) this.compile();
    if (!this._isValid) return;

    if (!this._projMatrixUniform && !this.ignoreMissingUniforms)
    {
        this._countMissingUniforms++;
        // if (this._countMissingUniforms == 10)console.log("stopping getlocation of missing uniforms...", this._name);
        if (this._countMissingUniforms < 10)
        {
            this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_PROJMAT);
            this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION);
            this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix");
            this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWMAT);
            this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MODELMAT);
            this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWPOS);
            this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_NORMALMAT);
            this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVVIEWMAT);
            this._inverseProjMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVPROJMAT);
            this._materialIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MATERIALID);
            this._objectIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_OBJECTID);

            for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].needsUpdate = true;
        }
    }


    if (this._cgl.currentProgram != this._program)
    {
        this._cgl.profileData.profileShaderBinds++;
        this._cgl.gl.useProgram(this._program);
        this._cgl.currentProgram = this._program;
    }

    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].needsUpdate) this._uniforms[i].updateValue();

    if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount())
    {
        this._pMatrixState = this._cgl.getProjectionMatrixStateCount();
        this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, false, this._cgl.pMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    if (this._objectIdUniform)
        this._cgl.gl.uniform1f(this._objectIdUniform, ++this._cgl.frameStore.objectIdCounter);

    if (this._materialIdUniform)
        this._cgl.gl.uniform1f(this._materialIdUniform, this._materialId);

    if (this._vMatrixUniform)
    {
        if (this._vMatrixState != this._cgl.getViewMatrixStateCount())
        {
            this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, false, this._cgl.vMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
            this._vMatrixState = this._cgl.getViewMatrixStateCount();

            if (this._inverseViewMatrixUniform)
            {
                mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix);
                this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, false, this._tempInverseViewMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
            if (this._inverseProjMatrixUniform)
            {
                mat4.invert(this._tempInverseProjMatrix, this._cgl.pMatrix);
                this._cgl.gl.uniformMatrix4fv(this._inverseProjMatrixUniform, false, this._tempInverseProjMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
        }
        this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, false, this._cgl.mMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;

        if (this._camPosUniform)
        {
            mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix);
            this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]);
            this._cgl.profileData.profileMVPMatrixCount++;
        }
    }
    else
    {
        // mvmatrix deprecated....
        const tempmv = mat4.create();

        mat4.mul(tempmv, this._cgl.vMatrix, this._cgl.mMatrix);
        this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, false, tempmv);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    if (this._normalMatrixUniform)
    {
        // mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix);
        mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix);
        mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);

        this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, false, this._tempNormalMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    for (let i = 0; i < this._libs.length; i++)
    {
        if (this._libs[i].onBind) this._libs[i].onBind.bind(this._libs[i])(this._cgl, this);
    }

    this._bindTextures();

    return this._isValid;
};

Shader.prototype.unBind = function ()
{
};

/**
 * easily enable/disable a define without a value
 * @function toggleDefine
 * @memberof Shader
 * @instance
 * @param {name} name
 * @param {any} enabled value or port
 */
Shader.prototype.toggleDefine = function (name, enabled)
{
    if (enabled && typeof (enabled) == "object" && enabled.addEventListener) // port
    {
        if (enabled.changeListener)enabled.removeEventListener(enabled.changeListener);

        enabled.onToggleDefine = (v) =>
        {
            this.toggleDefine(name, v);
        };

        enabled.changeListener = enabled.on("change", enabled.onToggleDefine);
        enabled = enabled.get();
    }

    if (enabled) this.define(name);
    else this.removeDefine(name);
};

/**
 * add a define to a shader, e.g.  #define DO_THIS_THAT 1
 * @function define
 * @memberof Shader
 * @instance
 * @param {String} name
 * @param {Any} value (can be empty)
 */
Shader.prototype.define = function (name, value)
{
    if (value === null || value === undefined) value = "";

    if (typeof (value) == "object") // port
    {
        value.removeEventListener("change", value.onDefineChange);
        value.onDefineChange = (v) =>
        {
            this.define(name, v);
        };
        value.on("change", value.onDefineChange);

        value = value.get();
    }


    for (let i = 0; i < this._defines.length; i++)
    {
        if (this._defines[i][0] == name && this._defines[i][1] == value) return;
        if (this._defines[i][0] == name)
        {
            this._defines[i][1] = value;
            this.setWhyCompile("define " + name + " " + value);

            this._needsRecompile = true;
            return;
        }
    }
    this.setWhyCompile("define " + name + " " + value);
    this._needsRecompile = true;
    this._defines.push([name, value]);
};

Shader.prototype.getDefines = function ()
{
    return this._defines;
};

Shader.prototype.getDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
        if (this._defines[i][0] == name) return this._defines[i][1];
    return null;
};

/**
 * return true if shader has define
 * @function hasDefine
 * @memberof Shader
 * @instance
 * @param {String} name
 * @return {Boolean}
 */
Shader.prototype.hasDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
        if (this._defines[i][0] == name) return true;
};

/**
 * remove a define from a shader
 * @param {name} name
 * @function removeDefine
 * @memberof Shader
 * @instance
 */
Shader.prototype.removeDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
    {
        if (this._defines[i][0] == name)
        {
            this._defines.splice(i, 1);
            this._needsRecompile = true;

            this.setWhyCompile("define removed:" + name);

            return;
        }
    }
};

/**
 * remove a module from shader
 * @function removeModule
 * @memberof Shader
 * @instance
 * @param {shaderModule} mod the module to be removed
 */
Shader.prototype.removeModule = function (mod)
{
    for (let i = 0; i < this._modules.length; i++)
    {
        if (mod && mod.id)
        {
            if (this._modules[i].id == mod.id || !this._modules[i])
            {
                let found = true;
                while (found)
                {
                    found = false;
                    for (let j = 0; j < this._uniforms.length; j++)
                    {
                        if (this._uniforms[j].getName().startsWith(mod.prefix))
                        {
                            this._uniforms.splice(j, 1);
                            found = true;
                            continue;
                        }
                    }
                }

                this._needsRecompile = true;
                this.setWhyCompile("remove module " + mod.title);
                this._modules.splice(i, 1);
                break;
            }
        }
    }
};


Shader.prototype.getNumModules = function ()
{
    return this._modules.length;
};


Shader.prototype.getCurrentModules = function () { return this._modules; };


/**
 * add a module
 * @function addModule
 * @memberof Shader
 * @instance
 * @param {shaderModule} mod the module to be added
 * @param {shaderModule} [sibling] sibling module, new module will share the same group
 */
Shader.prototype.addModule = function (mod, sibling)
{
    if (this.hasModule(mod.id)) return;
    if (!mod.id) mod.id = CABLES.simpleId();
    if (!mod.numId) mod.numId = this._moduleNumId;
    if (!mod.num)mod.num = this._modules.length;
    if (sibling && !sibling.group) sibling.group = simpleId();

    if (!mod.group)
        if (sibling) mod.group = sibling.group;
        else mod.group = simpleId();

    mod.prefix = "mod" + mod.group + "_";
    this._modules.push(mod);

    this._needsRecompile = true;
    this.setWhyCompile("add module " + mod.title);
    this._moduleNumId++;

    return mod;
};

Shader.prototype.hasModule = function (modId)
{
    for (let i = 0; i < this._modules.length; i++)
    {
        if (this._modules[i].id == modId) return true;
    }
    return false;
};

Shader.prototype.setModules = function (names)
{
    this._moduleNames = names;
};

Shader.prototype.dispose = function ()
{
    this._cgl.gl.deleteProgram(this._program);
};

Shader.prototype.needsRecompile = function ()
{
    return this._needsRecompile;
};

Shader.prototype.setDrawBuffers = function (arr)
{
    console.log("useless drawbuffers...?!");
    // if (this._drawBuffers.length !== arr.length)
    // {
    //     this._drawBuffers = arr;
    //     this._needsRecompile = true;
    //     this.setWhyCompile("setDrawBuffers");
    //     return;
    // }
    // for (let i = 0; i < arr.length; i++)
    // {
    //     if (arr[i] !== this._drawBuffers[i])
    //     {
    //         this._drawBuffers = arr;
    //         this._needsRecompile = true;
    //         this.setWhyCompile("setDrawBuffers");
    //         return;
    //     }
    // }
};

Shader.prototype.getUniforms = function ()
{
    return this._uniforms;
};

Shader.prototype.getUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].getName() == name)
            return this._uniforms[i];
    return null;
};

Shader.prototype.removeAllUniforms = function ()
{
    this._uniforms = [];
    // for (let i = 0; i < this._uniforms.length; i++)
    //     this.removeUniform(this._uniforms[i].name);
};

Shader.prototype.removeUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].getName() == name)
        {
            this._uniforms.splice(i, 1);
        }
    }
    this._needsRecompile = true;
    this.setWhyCompile("remove uniform " + name);
};


Shader.prototype._addUniform = function (uni)
{
    this._uniforms.push(uni);
    this.setWhyCompile("add uniform " + name);
    this._needsRecompile = true;
};

/**
 * add a uniform to the fragment shader
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformFrag
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformFrag = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "frag";
    return uni;
};

/**
 * add a uniform to the vertex shader
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformVert
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformVert = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "vert";
    return uni;
};
/**
 * add a uniform to both shaders
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformBoth
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformBoth = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "both";
    return uni;
};

/**
 * add a struct & its uniforms to the fragment shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructFrag
 * @returns {Object}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructFrag("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructFrag = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "frag";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

/**
 * add a struct & its uniforms to the vertex shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructVert
 * @returns {CGL.Uniform}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructVert("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructVert = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "vert";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

/**
 * add a struct & its uniforms to the both shaders. PLEASE NOTE: it is not possible to add the same struct to both shaders when it contains ANY integer members.
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructBoth
 * @returns {Object}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructBoth("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructBoth = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if ((member.type === "2i" || member.type === "i" || member.type === "3i"))
            this._log.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", structName, " with member:", member.name, " of type:", member.type, ".");
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "both";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

Shader.prototype.hasUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].getName() == name) return true;
    }
    return false;
};

Shader.prototype._createProgram = function (vstr, fstr)
{
    this._cgl.printError("before _createprogram");

    const program = this._cgl.gl.createProgram();

    this.vshader = Shader.createShader(this._cgl, vstr, this._cgl.gl.VERTEX_SHADER, this);
    this.fshader = Shader.createShader(this._cgl, fstr, this._cgl.gl.FRAGMENT_SHADER, this);


    if (this.vshader && this.fshader)
    {
        this._cgl.gl.attachShader(program, this.vshader);
        this._cgl.gl.attachShader(program, this.fshader);

        this._linkProgram(program, vstr, fstr);
    }
    else
    {
        this._isValid = false;
        this._cgl.printError("shader _createProgram");
        this._log.error("could not link shaderprogram");
        return null;
    }

    this._cgl.printError("shader _createProgram");
    return program;
};

Shader.prototype.hasErrors = function ()
{
    return this._hasErrors;
};

Shader.prototype._linkProgram = function (program, vstr, fstr)
{
    this._cgl.printError("before _linkprogram");

    if (this._feedBackNames.length > 0)
    {
        this._cgl.gl.transformFeedbackVaryings(program, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS);
        // INTERLEAVED_ATTRIBS
        // SEPARATE_ATTRIBS
    }

    this._cgl.gl.linkProgram(program);
    this._cgl.printError("gl.linkprogram");
    this._isValid = true;

    this._hasErrors = false;

    if (this._cgl.patch.config.glValidateShader !== false)
    {
        this._cgl.gl.validateProgram(program);

        if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.VALIDATE_STATUS))
        {
            // validation failed
            console.log("shaderprogram validation failed...");
            console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
        }

        if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.LINK_STATUS))
        {
            this._hasErrors = true;

            const infoLogFrag = this._cgl.gl.getShaderInfoLog(this.fshader);
            const infoLogVert = this._cgl.gl.getShaderInfoLog(this.vshader);

            if (infoLogFrag) this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader));
            if (infoLogVert) this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader));

            this._log.error(this._name + " shader linking fail...");

            console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
            console.log(this);
            this._isValid = false;

            this._name = "errorshader";
            this.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
            this._cgl.printError("shader link err");
        }
    }
};

Shader.prototype.getProgram = function ()
{
    return this._program;
};

Shader.prototype.setFeedbackNames = function (names)
{
    this.setWhyCompile("setFeedbackNames");
    this._needsRecompile = true;
    this._feedBackNames = names;
};

Shader.prototype.getDefaultVertexShader = Shader.getDefaultVertexShader = function ()
{
    return cgl_shader_default_glsl;
};

Shader.prototype.getDefaultFragmentShader = Shader.getDefaultFragmentShader = function (r, g, b)
{
    if (r == undefined)
    {
        r = 0.5;
        g = 0.5;
        b = 0.5;
    }
    return ""
        .endl() + "IN vec2 texCoord;"
        .endl() + "{{MODULES_HEAD}}"
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "    vec4 col=vec4(" + r + "," + g + "," + b + ",1.0);"
        .endl() + "    {{MODULE_COLOR}}"
        .endl() + "    outColor = col;"
        .endl() + "}";
};

/**
  * adds attribute definition to shader header without colliding with other shader modules...
 * when attrFrag is defined, vertex shader will output this attribute to the fragment shader
 * @function
 * @memberof Shader
 * @instance
 * @param {Object} attr {type:x,name:x,[nameFrag:x]}
 * @return {Object}
 */
Shader.prototype.addAttribute = function (attr)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attr.name && this._attributes[i].nameFrag == attr.nameFrag) return;
    }
    this._attributes.push(attr);
    this._needsRecompile = true;
    this.setWhyCompile("addAttribute");
};

Shader.prototype.bindTextures =
Shader.prototype._bindTextures = function ()
{
    if (this._textureStackTex.length > this._cgl.maxTextureUnits)
    {
        this._log.warn("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
    }

    // for (let i = this._textureStackTex.length + 1; i < this._cgl.maxTextureUnits; i++) this._cgl.setTexture(i, null);

    for (let i = 0; i < this._textureStackTex.length; i++)
    {
        // console.log(this._textureStackTex.length, i);
        if (!this._textureStackTex[i] && !this._textureStackTexCgl[i])
        {
            this._log.warn("no texture for pushtexture", this._name);
        }
        else
        {
            let t = this._textureStackTex[i];
            if (this._textureStackTexCgl[i])
            {
                t = this._textureStackTexCgl[i].tex || CGL.Texture.getEmptyTexture(this._cgl).tex;
            }

            let bindOk = true;

            if (!this._textureStackUni[i])
            {
                // throw(new Error('no uniform given to texturestack'));
                this._log.warn("no uniform for pushtexture", this._name);
                bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);
            }
            else
            {
                this._textureStackUni[i].setValue(i);
                bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);

                // console.log(bindOk, i, t, this._textureStackType[i]);
            }
            if (!bindOk) console.warn("tex bind failed", this.getName(), this._textureStackUni[i]);
        }
    }
};

Shader.prototype.setUniformTexture = function (uni, tex)
{
    tex = tex || CGL.Texture.getTempTexture(this._cgl);
    for (let i = 0; i < this._textureStackUni.length; i++)
        if (this._textureStackUni[i] == uni)
        {
            const old = this._textureStackTex[i] || this._textureStackTexCgl[i];
            if (tex.hasOwnProperty("tex"))
            {
                this._textureStackTexCgl[i] = tex;
                this._textureStackTex[i] = null;
            }
            else
            {
                this._textureStackTexCgl[i] = null;
                this._textureStackTex[i] = tex;
            }

            // this._textureStackTex[i] = tex;
            // this._cgl.setTexture(i, tex, this._textureStackType[i]);
            return old;
        }
    return null;
};

/**
 * push a texture on the stack. those textures will be bound when binding the shader. texture slots are automatically set
 * @param {uniform} uniform texture uniform
 * @param {texture} t texture
 * @param {type} type texture type, can be ignored when TEXTURE_2D
 * @function pushTexture
 * @memberof Shader
 * @instance
 */
Shader.prototype.pushTexture = function (uniform, t, type)
{
    if (!uniform)
    {
        console.log("no uniform given to texturestack", uniform);
        return;
    }
    if (!t)
    {
        console.log("no tex...");
        return;
    }
    if (!t.hasOwnProperty("tex") && !(t instanceof WebGLTexture))
    {
        this._log.warn(new Error("invalid texture").stack);

        this._log.warn("[cgl_shader] invalid texture...", t);
        return;
    }

    this._textureStackUni.push(uniform);

    if (t.hasOwnProperty("tex"))
    {
        this._textureStackTexCgl.push(t);
        this._textureStackTex.push(null);
    }
    else
    {
        this._textureStackTexCgl.push(null);
        this._textureStackTex.push(t);
    }

    this._textureStackType.push(type);
};

/**
 * pop last texture
 * @function popTexture
 * @memberof Shader
 * @instance
 */
Shader.prototype.popTexture = function ()
{
    this._textureStackUni.pop();
    this._textureStackTex.pop();
    this._textureStackTexCgl.pop();
    this._textureStackType.pop();
};

/**
 * pop all textures
 * @function popTextures
 * @memberof Shader
 * @instance
 */
Shader.prototype.popTextures = function ()
{
    this._textureStackTex.length =
    this._textureStackTexCgl.length =
    this._textureStackType.length =
    this._textureStackUni.length = 0;
};

Shader.prototype.getMaterialId = function ()
{
    return this._materialId;
};

Shader.prototype.getInfo = function ()
{
    const info = {};
    info.name = this._name;
    // info.modules = JSON.parse(JSON.stringify(this._modules));
    // info.defines = JSON.parse(JSON.stringify(this._defines));
    info.defines = this.getDefines();
    info.hasErrors = this.hasErrors();

    return info;
};

// --------------------------

Shader.getErrorFragmentShader = function ()
{
    return ""
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;"
        .endl() + "   g= step(0.1,g);"
        .endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);"
        .endl() + "}";
};

Shader.createShader = function (cgl, str, type, cglShader)
{
    if (cgl.aborted) return;

    // cgl.printError("[Shader.createShader] ", cglShader._name);

    function getBadLines(infoLog)
    {
        const basLines = [];
        const lines = infoLog.split("\n");
        for (const i in lines)
        {
            const divide = lines[i].split(":");
            if (parseInt(divide[2], 10)) basLines.push(parseInt(divide[2], 10));
        }
        return basLines;
    }


    const shader = cgl.gl.createShader(type);
    cgl.gl.shaderSource(shader, str);
    cgl.gl.compileShader(shader);

    if (!cgl.gl.getShaderParameter(shader, cgl.gl.COMPILE_STATUS))
    {
        let infoLog = cgl.gl.getShaderInfoLog(shader);
        if (!infoLog)
        {
            console.warn("empty shader info log", this._name);
            return;
        }


        const badLines = getBadLines(infoLog);
        let htmlWarning = "<pre style=\"margin-bottom:0px;\"><code class=\"shaderErrorCode language-glsl\" style=\"padding-bottom:0px;max-height: initial;max-width: initial;\">";
        const lines = str.match(/^.*((\r\n|\n|\r)|$)/gm);

        if (!cgl.aborted && infoLog)
        {
            if (type == cgl.gl.VERTEX_SHADER) console.log("VERTEX_SHADER");
            if (type == cgl.gl.FRAGMENT_SHADER) console.log("FRAGMENT_SHADER");

            for (const i in lines)
            {
                const j = parseInt(i, 10) + 1;
                const line = j + ": " + lines[i];

                let isBadLine = false;
                for (const bj in badLines)
                    if (badLines[bj] == j) isBadLine = true;

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\"background-color:#660000;padding-top:0px;padding-bottom:0px\">";

                    cglShader._log.log("bad line: `" + line + "`");
                }
                htmlWarning += escapeHTML(line);

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\";padding-top:0px;padding-bottom:0px\">";
                }
            }
        }

        infoLog = infoLog.replace(/\n/g, "<br/>");
        if (cgl.patch.isEditorMode())console.log("Shader error ", cglShader._name, infoLog, this);

        htmlWarning = infoLog + "<br/>" + htmlWarning + "<br/><br/>";
        htmlWarning += "</code></pre>";

        if (this._fromUserInteraction)
        {
            // console.log("todo show modal?");
            // cgl.patch.emitEvent("criticalError", { "title": "Shader error " + cglShader._name, "text": htmlWarning, "exception": { "message": infoLog } });
        }

        cglShader.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
    }
    else
    {
        // console.log(name+' shader compiled...');
    }
    // cgl.printError("shader create2");
    return shader;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_profiledata.js
class ProfileData
{
    constructor(cgl)
    {
        this._cgl = cgl;
        this._lastTime = 0;
        this.pause = false;
        this.profileUniformCount = 0;
        this.profileShaderBinds = 0;
        this.profileUniformCount = 0;
        this.profileShaderCompiles = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileEffectBuffercreate = 0;
        this.profileShaderGetUniform = 0;
        this.profileFrameBuffercreate = 0;
        this.profileMeshSetGeom = 0;
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileOnAnimFrameOps = 0;

        this.profileFencedPixelRead = 0;
        this.profileMainloopMs = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.shaderCompileTime = 0;
        this.profileMeshNumElements = 0;
        this.profileMeshAttributes = 0;
        this.profileSingleMeshAttribute = [];
        this.heavyEvents = [];

        this.doProfileGlQuery = false;
        this.glQueryData = {};
    }

    clear()
    {
        this.profileSingleMeshAttribute = {};
        this.profileMeshAttributes = 0;
        this.profileUniformCount = 0;
        this.profileShaderGetUniform = 0;
        this.profileShaderCompiles = 0;
        this.profileShaderBinds = 0;
        this.profileTextureResize = 0;
        this.profileFrameBuffercreate = 0;
        this.profileEffectBuffercreate = 0;
        this.profileTextureDelete = 0;
        this.profileMeshSetGeom = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileNonTypedAttrib = 0;
        this.profileNonTypedAttribNames = "";
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileFramebuffer = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.profileMeshNumElements = 0;
        this.profileFencedPixelRead = 0;
    }

    clearGlQuery()
    {
        for (let i in this.glQueryData)
        {
            if (!this.glQueryData[i].lastClear || performance.now() - this.glQueryData[i].lastClear > 1000)
            {
                this.glQueryData[i].time = this.glQueryData[i]._times / this.glQueryData[i]._numcount;
                this.glQueryData[i].num = this.glQueryData[i]._numcount;

                this.glQueryData[i]._times = 0;
                this.glQueryData[i]._numcount = 0;
                this.glQueryData[i].lastClear = performance.now();
            }
        }
    }

    addHeavyEvent(event, name, info)
    {
        const e = { "event": event, "name": name, "info": info, "date": performance.now() };
        this.heavyEvents.push(e);
        this._cgl.emitEvent("heavyEvent", e);
    }
}




;// CONCATENATED MODULE: ../shared/client/src/helper.js
/**
 * Shared helper methods for cables uis
 */
class Helper
{
    constructor()
    {
        this._simpleIdCounter = 0;
    }


    /**
     * generate a random v4 uuid
     *
     * @return {string}
     */
    uuid()
    {
        let d = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
        {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
    }

    /**
     * checks value for !isNan and isFinite
     *
     * @param n
     * @return {boolean}
     */
    isNumeric(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * generate a simple ID using an internal counter
     *
     * @return {Number} new id
     * @static
     */
    simpleId()
    {
        this._simpleIdCounter++;
        return this._simpleIdCounter;
    }

    deletePropertyByPath(obj, path)
    {
        if (!obj || !path)
        {
            return;
        }

        if (typeof path === "string")
        {
            path = path.split(".");
        }

        for (let i = 0; i < path.length - 1; i++)
        {
            obj = obj[path[i]];

            if (typeof obj === "undefined")
            {
                return;
            }
        }

        delete obj[path.pop()];
    }
}
/* harmony default export */ const helper = (new Helper());

;// CONCATENATED MODULE: ../shared/client/src/eventtarget.js



/**
 * add eventlistener functionality to classes
 */
class Events
{
    constructor()
    {
        this._log = new Logger("eventtarget");
        this._eventCallbacks = {};
        this._logName = "";
        this._logEvents = false;
        this._listeners = {};

        this.on = this.addEventListener;
        this.off = this.removeEventListener;
    }

    /**
     * add event listener
     * @param which event name
     * @param cb callback
     * @param {string} idPrefix prefix for id, default empty
     * @return {string} event id
     */
    addEventListener(which, cb, idPrefix = "")
    {
        const event =
            {
                "id": (idPrefix || "") + helper.simpleId(),
                "name": which,
                "cb": cb,
            };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    }

    /**
     * check event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return {boolean}
     */
    hasEventListener(id, cb = null)
    {
        if (id && !cb)
        {
            // check by id
            return !!this._listeners[id];
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (id && cb)
            {
                if (this._eventCallbacks[id])
                {
                    const idx = this._eventCallbacks[id].indexOf(cb);
                    return idx !== -1;
                }
            }
        }
    }

    /**
     * check event listener by name
     * @param eventName event name
     * @return {boolean}
     */
    hasListenerForEventName(eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    }

    /**
     * rempve event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return
     */
    removeEventListener(id, cb = null)
    {
        if (id === null || id === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[id];
            if (!event)
            {
                this._log.log("could not find event...");
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.indexOf(id) === 0) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[id];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[id].length; i++)
            if (this._eventCallbacks[id][i].cb === cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + id);
    }

    /**
     * enable/disable logging of events for the class
     *
     * @param {boolean} enabled
     * @param {string} logName
     */
    logEvents(enabled, logName)
    {
        this._logEvents = enabled;
        this._logName = logName;
    }

    /**
     * emit event
     *
     * @param {string} which event name
     * @param {*} param1
     * @param {*} param2
     * @param {*} param3
     * @param {*} param4
     * @param {*} param5
     * @param {*} param6
     */
    emitEvent(which, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null, param6 = null)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    }
}


;// CONCATENATED MODULE: ./src/core/cg/cg_canvas.js
class CgCanvas
{
    constructor(options)
    {
        if (!options)
        {
            console.error("CgCanvas no options");
        }
        else
        {
            this._canvasEle = options.canvasEle;
        }

        if (!options.cg)console.error("CgCanvas options has no cg");
        if (!options.canvasEle)console.error("CgCanvas options has no canvasEle");

        this._cg = options.cg;
        this.pixelDensity = 1;
        this.canvasWidth = this.canvasEle.clientWidth;
        this.canvasHeight = this.canvasEle.clientHeight;

        this._oldWidthRp = -1;
        this._oldHeightRp = -1;

        this.setSize(this.canvasWidth, this.canvasHeight);
    }

    get canvasEle() { return this._canvasEle; }


    setSize(w, h, ignorestyle)
    {
        if (this._oldWidthRp != w * this.pixelDensity || this._oldHeightRp != h * this.pixelDensity)
        {
            this._oldWidthRp = this.canvasEle.width = w * this.pixelDensity;
            this._oldHeightRp = this.canvasEle.height = h * this.pixelDensity;

            if (!ignorestyle)
            {
                this.canvasEle.style.width = w + "px";
                this.canvasEle.style.height = h + "px";
            }

            this.updateSize();

            this._cg.emitEvent("resize");
        }
    }

    updateSize()
    {
        this.canvasEle.width = this.canvasWidth = this.canvasEle.clientWidth * this.pixelDensity;
        this.canvasEle.height = this.canvasHeight = this.canvasEle.clientHeight * this.pixelDensity;
    }

    dispose()
    {
        this._canvasEle.remove();
        this._canvasEle = null;
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_matrixstack.js

const MatrixStack = function ()
{
    this._arr = [mat4.create()];
    this._index = 0;
    this.stateCounter = 0;
};

MatrixStack.prototype.push = function (m)
{
    this._index++;
    this.stateCounter++;

    if (this._index == this._arr.length)
    {
        const copy = mat4.create();
        this._arr.push(copy);
    }

    mat4.copy(this._arr[this._index], m || this._arr[this._index - 1]);

    return this._arr[this._index];
};

MatrixStack.prototype.pop = function ()
{
    this.stateCounter++;

    this._index--;
    if (this._index < 0) this._index = 0;

    return this._arr[this._index];
};

MatrixStack.prototype.length = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/cg/cg_state.js





// const CGState ()
class CGState extends Events
{
    constructor(_patch)
    {
        super();
        // this.canvas = null;

        this.fpsCounter = new CABLES.CG.FpsCounter();
        this._identView = vec3.create();
        this._ident = vec3.create();
        vec3.set(this._identView, 0, 0, -2);
        vec3.set(this._ident, 0, 0, 0);

        this.patch = _patch;

        this.DEPTH_COMPARE_FUNC_NEVER = 0;
        this.DEPTH_COMPARE_FUNC_LESS = 1;
        this.DEPTH_COMPARE_FUNC_EQUAL = 2;
        this.DEPTH_COMPARE_FUNC_LESSEQUAL = 3;
        this.DEPTH_COMPARE_FUNC_GREATER = 4;
        this.DEPTH_COMPARE_FUNC_NOTEQUAL = 5;
        this.DEPTH_COMPARE_FUNC_GREATEREQUAL = 6;
        this.DEPTH_COMPARE_FUNC_ALWAYS = 7;


        /**
         * Current projection matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.pMatrix = mat4.create();

        /**
         * Current model matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.mMatrix = mat4.create();

        /**
         * Current view matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.vMatrix = mat4.create();
        this._textureslots = [];

        this._pMatrixStack = new MatrixStack();
        this._mMatrixStack = new MatrixStack();
        this._vMatrixStack = new MatrixStack();

        this.canvasScale = 1;

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);


        window.matchMedia("screen and (min-resolution: 2dppx)")
            .addEventListener("change", (e) =>
            {
                this.emitEvent("resize");
            });
    }

    get canvasWidth()
    {
        return this.cgCanvas.canvasWidth;
    }

    get canvasHeight()
    {
        return this.cgCanvas.canvasHeight;
    }

    set pixelDensity(p)
    {
        if (this.cgCanvas.pixelDensity != p)
        {
            this.cgCanvas.pixelDensity = p;
            this.cgCanvas.updateSize();
            this.emitEvent("resize");
        }
    }

    get pixelDensity()
    {
        return this.cgCanvas.pixelDensity;
    }


    getGApiName()
    {
        return ["WebGL", "WebGPU"][this.gApi];
    }

    get canvas()
    {
        return this.cgCanvas.canvasEle;
    }



    setCanvas(canvEle)
    {
        if (this.cgCanvas && canvEle == this.cgCanvas.canvasEle) return;
        if (typeof canvEle === "string") canvEle = document.getElementById(canvEle);

        this.cgCanvas = new CgCanvas({ "canvasEle": canvEle, "cg": this });

        canvEle.parentElement.classList.add("cablesContainer");
        if (this._setCanvas) this._setCanvas(canvEle);

        this.updateSize();
    }

    updateSize()
    {
        this.cgCanvas.updateSize();
    }

    setSize(w, h, ignorestyle)
    {
        this.cgCanvas.setSize(w, h, ignorestyle);
    }

    _resizeToWindowSize()
    {
        this.setSize(window.innerWidth, window.innerHeight);
        this.updateSize();
    }

    _resizeToParentSize()
    {
        const p = this.canvas.parentElement;
        if (!p)
        {
            this._log.error("cables: can not resize to container element");
            return;
        }
        this.setSize(p.clientWidth, p.clientHeight);

        this.updateSize();
    }

    setAutoResize(parent)
    {
        window.removeEventListener("resize", this._resizeToWindowSize.bind(this));
        window.removeEventListener("resize", this._resizeToParentSize.bind(this));

        if (parent == "window")
        {
            window.addEventListener("resize", this._resizeToWindowSize.bind(this));
            window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this));
            this._resizeToWindowSize();
        }
        if (parent == "parent")
        {
            window.addEventListener("resize", this._resizeToParentSize.bind(this));
            this._resizeToParentSize();
        }
    }

    /**
     * push a matrix to the projection matrix stack
     * @function pushPMatrix
     * @memberof Context
     * @instance
     */
    pushPMatrix()
    {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix);
    }

    /**
      * pop projection matrix stack
      * @function popPMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current projectionmatrix
      */
    popPMatrix()
    {
        this.pMatrix = this._pMatrixStack.pop();
        return this.pMatrix;
    }

    getProjectionMatrixStateCount()
    {
        return this._pMatrixStack.stateCounter;
    }

    /**
      * push a matrix to the model matrix stack
      * @function pushModelMatrix
      * @memberof Context
      * @instance
      * @example
      * // see source code of translate op:
      * cgl.pushModelMatrix();
      * mat4.translate(cgl.mMatrix,cgl.mMatrix, vec);
      * trigger.trigger();
      * cgl.popModelMatrix();
      */
    pushModelMatrix()
    {
        this.mMatrix = this._mMatrixStack.push(this.mMatrix);
    }

    /**
      * pop model matrix stack
      * @function popModelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    popModelMatrix()
    {
        // todo: DEPRECATE
        // if (this._mMatrixStack.length === 0) throw "Invalid modelview popMatrix!";
        this.mMatrix = this._mMatrixStack.pop();
        return this.mMatrix;
    }

    /**
      * get model matrix
      * @function modelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    modelMatrix()
    {
        return this.mMatrix;
    }


    /**
     * push a matrix to the view matrix stack
     * @function pushviewMatrix
     * @memberof Context
     * @instance
     */
    pushViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix);
    }

    /**
      * pop view matrix stack
      * @function popViewMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current viewmatrix
      * @function
      */
    popViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.pop();
    }

    getViewMatrixStateCount()
    {
        return this._vMatrixStack.stateCounter;
    }

    _startMatrixStacks(identTranslate, identTranslateView)
    {
        identTranslate = identTranslate || this._ident;
        identTranslateView = identTranslateView || this._identView;

        mat4.perspective(this.pMatrix, 45, this.canvasWidth / this.canvasHeight, 0.1, 1000.0);

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);
        mat4.translate(this.mMatrix, this.mMatrix, identTranslate);
        mat4.translate(this.vMatrix, this.vMatrix, identTranslateView);

        this.pushPMatrix();
        this.pushModelMatrix();
        this.pushViewMatrix();
    }

    _endMatrixStacks()
    {
        this.popViewMatrix();
        this.popModelMatrix();
        this.popPMatrix();
    }

    dispose()
    {
        this.aborted = true;
        if (this.cgCanvas) this.cgCanvas.dispose();
        if (this._dispose) this._dispose();
    }
}





;// CONCATENATED MODULE: ./src/core/cg/sg_fpscounter.js


class FpsCounter extends Events
{
    constructor()
    {
        super();
        this._timeStartFrame = 0;
        this._timeStartSecond = 0;
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._frameCount = 0;

        this.stats = { "ms": 0, "fps": 0 };
    }

    get frameCount()
    {
        return this._frameCount;
    }

    startFrame()
    {
        this._timeStartFrame = CABLES.now();
    }

    endFrame()
    {
        this._frameCount++;
        this._fpsCounter++;

        const timeFrame = CABLES.now() - this._timeStartFrame;
        this._msCounter += timeFrame;

        if (CABLES.now() - this._timeStartSecond > 1000)
        {
            this.endSecond();
        }
    }

    endSecond()
    {
        this.stats.fps = this._fpsCounter;
        this.stats.ms = Math.round(this._msCounter / this._fpsCounter * 100) / 100;

        this.emitEvent("performance", this.stats);

        // reset
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._timeStartSecond = CABLES.now();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_constants.js





const CG = {

    "GAPI_WEBGL": 0,
    "GAPI_WEBGPU": 1,

    "DEPTH_COMPARE_NEVER": 0,
    "DEPTH_COMPARE_LESS": 1,
    "DEPTH_COMPARE_EQUAL": 2,
    "DEPTH_COMPARE_LESSEQUAL": 3,
    "DEPTH_COMPARE_GREATER": 4,
    "DEPTH_COMPARE_NOTEQUAL": 5,
    "DEPTH_COMPARE_GREATEREQUAL": 6,
    "DEPTH_COMPARE_ALWAYS": 7,

    "CULL_NONE": 0,
    "CULL_BACK": 1,
    "CULL_FRONT": 2,
    "CULL_BOTH": 3,


    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "FpsCounter": FpsCounter,

    "CgCanvas": CgCanvas
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_state.js








/**
 * cables gl context/state manager
 * @class
 * @namespace external:CGL
 * @hideconstructor
 */
// const Context(_patch)
class Context extends CGState
{
    constructor(_patch)
    {
        super(_patch);
        // EventTarget.apply(this);
        // CGState.apply(this);

        this.gApi = CG.GAPI_WEBGL;
        this.aborted = false;

        this.pushMvMatrix = this.pushModelMatrix; // deprecated and wrong... still used??
        this.popMvMatrix = this.popmMatrix = this.popModelMatrix;// deprecated and wrong... still used??

        this.profileData = new ProfileData(this);
        this._log = new Logger("cgl_context");
        this._viewPort = [0, 0, 0, 0];
        this.glVersion = 0;
        this.glUseHalfFloatTex = false;
        this.clearCanvasTransparent = true;
        this.clearCanvasDepth = true;
        this.debugOneFrame = false;
        this.checkGlErrors = false; // true is slow // false should be default...
        this.maxTextureUnits = 0;
        this.maxVaryingVectors = 0;
        this.currentProgram = null;
        this._hadStackError = false;
        this.glSlowRenderer = false;
        this._isSafariCrap = false;

        this.temporaryTexture = null;
        this.frameStore = {};
        this._onetimeCallbacks = [];
        this.gl = null;

        this._cursor = "auto";
        this._currentCursor = "";

        this._viewPortStack = [];
        this._glFrameBufferStack = [];
        this._frameBufferStack = [];
        this._shaderStack = [];
        this._stackDepthTest = [];
        this.mainloopOp = null;

        this._simpleShader = new Shader(this, "simpleshader");
        this._simpleShader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MOVELVIEW"]);
        this._simpleShader.setSource(Shader.getDefaultVertexShader(), Shader.getDefaultFragmentShader());

        this._currentShader = this._simpleShader;


        this._oldCanvasWidth = -1;
        this._oldCanvasHeight = -1;
        this._enabledExtensions = {};
    }

    // set pixelDensity(p)
    // {
    //     this._pixelDensity = p;
    // }

    // get pixelDensity()
    // {
    //     return this._pixelDensity;
    // }



    get viewPort()
    {
        if (this._viewPortStack.length > 3)
        {
            const l = this._viewPortStack.length;

            return [
                this._viewPortStack[l - 4],
                this._viewPortStack[l - 3],
                this._viewPortStack[l - 2],
                this._viewPortStack[l - 1]
            ];
        }
        else
        {
            // workaround pre viewport stack times / or+and initial value...

            return this._viewPort;
        }
    }



    get mvMatrix() // deprecate
    {
        return this.mMatrix;
    }

    set mvMatrix(m) // deprecate
    {
        this.mMatrix = m;
    }


    exitError(msgId, msg)
    {
        console.log(msgId, msg);
        this.patch.exitError(msgId, msg);
        this.aborted = true;
    }


    _setCanvas(canv)
    {
        if (!canv)
        {
            this._log.stack("_setCanvas undef");
        }

        if (!this.patch.config.canvas) this.patch.config.canvas = {};
        if (!this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer")) this.patch.config.canvas.preserveDrawingBuffer = false;
        if (!this.patch.config.canvas.hasOwnProperty("premultipliedAlpha")) this.patch.config.canvas.premultipliedAlpha = false;
        if (!this.patch.config.canvas.hasOwnProperty("alpha")) this.patch.config.canvas.alpha = false;

        this.patch.config.canvas.stencil = true;

        if (this.patch.config.hasOwnProperty("clearCanvasColor")) this.clearCanvasTransparent = this.patch.config.clearCanvasColor;
        if (this.patch.config.hasOwnProperty("clearCanvasDepth")) this.clearCanvasDepth = this.patch.config.clearCanvasDepth;

        // safari stuff..........
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
        {
            this._isSafariCrap = true;
            this.glUseHalfFloatTex = true;
        }

        if (!this.patch.config.canvas.forceWebGl1) this.gl = canv.getContext("webgl2", this.patch.config.canvas);


        if (!this.gl || this.gl.isContextLost())
        {
            this.aborted = true;
            this.exitError("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.");
            return;
        }

        if (this.gl.getParameter(this.gl.VERSION) != "WebGL 1.0")
        {
            this.glVersion = 2;
        }
        else
        {
            this.gl = canv.getContext("webgl", this.patch.config.canvas) || canv.getContext("experimental-webgl", this.patch.config.canvas);
            this.glVersion = 1;

            // safari
            // if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
            // {
            //     this.glUseHalfFloatTex = true;
            // }

            // ios
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
            {
                if (!this.patch.config.canvas.hasOwnProperty("powerPreference")) this.patch.config.canvas.powerPreference = "high-performance";
            }

            this.enableExtension("OES_standard_derivatives");
            // this.enableExtension("GL_OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;
            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        const dbgRenderInfo = this.enableExtension("WEBGL_debug_renderer_info");
        if (dbgRenderInfo)
        {
            this.glRenderer = this.gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            if (this.glRenderer === "Google SwiftShader") this.glSlowRenderer = true;
        }

        this.canvas.addEventListener("webglcontextlost", (event) =>
        {
            if (this.aborted) return this._log.warn("[cgl_state] aborted context lost... can be ignored...");
            this._log.error("canvas lost...", event);
            this.emitEvent("webglcontextlost");
            this.aborted = true;
        });


        this.maxAnisotropic = 0;
        if (this.enableExtension("EXT_texture_filter_anisotropic"))
            this.maxAnisotropic = this.gl.getParameter(this.enableExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT);


        this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS);
        this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE);
        this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS);
        this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS);
        this.maxSamples = 0;
        if (this.gl.MAX_SAMPLES) this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES);

        if (this.glVersion == 1)
        {
            this.enableExtension("OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;

            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        this.DEPTH_FUNCS = [
            this.gl.NEVER,
            this.gl.ALWAYS,
            this.gl.LESS,
            this.gl.LEQUAL,
            this.gl.GREATER,
            this.gl.GEQUAL,
            this.gl.EQUAL,
            this.gl.NOTEQUAL
        ];
        this.CULL_MODES = [
            null,
            this.gl.BACK,
            this.gl.FRONT,
            this.gl.FRONT_AND_BACK
        ];
    }

    getInfo()
    {
        return {
            "glVersion": this.glVersion,
            "glRenderer": this.glRenderer,
            "glUseHalfFloatTex": this.glUseHalfFloatTex,
            "maxVaryingVectors": this.maxVaryingVectors,
            "maxTextureUnits": this.maxTextureUnits,
            "maxTexSize": this.maxTexSize,
            "maxUniformsFrag": this.maxUniformsFrag,
            "maxUniformsVert": this.maxUniformsVert,
            "maxSamples": this.maxSamples
        };
    }





    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */


    popViewPort()
    {
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();

        if (this._viewPortStack.length == 0)
        {
            this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);
            // this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
            // this.setViewPort(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
        }
        else
        {
            // this.viewPort = [this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]];
            // this.gl.viewport(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
            this.setViewPort(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
        }
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h)
    {
        this._viewPortStack.push(x, y, w, h);
        this.setViewPort(x, y, w, h);
    }


    // old
    getViewPort()
    {
        return this._viewPort;
    }

    // old
    resetViewPort()
    {
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }

    // old
    setViewPort(x, y, w, h)
    {
        this._viewPort[0] = Math.round(x);
        this._viewPort[1] = Math.round(y);
        this._viewPort[2] = Math.round(w);
        this._viewPort[3] = Math.round(h);
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }


    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        if (doScreenshotClearAlpha)
        {
            this.gl.clearColor(1, 1, 1, 1);
            this.gl.colorMask(false, false, false, true);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.colorMask(true, true, true, true);
        }

        if (this.canvas && this.canvas.toBlob)
        {
            this.canvas.toBlob((blob) =>
            {
                if (cb) cb(blob);
                else this._log.log("no screenshot callback...");
            }, mimeType, quality);
        }
    }

    endFrame()
    {
        if (this.patch.isEditorMode()) CABLES.GL_MARKER.drawMarkerLayer(this);

        this.setPreviousShader();

        if (this._vMatrixStack.length() > 0) this.logStackError("view matrix stack length !=0 at end of rendering...");
        if (this._mMatrixStack.length() > 0) this.logStackError("mvmatrix stack length !=0 at end of rendering...");
        if (this._pMatrixStack.length() > 0) this.logStackError("pmatrix stack length !=0 at end of rendering...");
        if (this._glFrameBufferStack.length > 0) this.logStackError("glFrameBuffer stack length !=0 at end of rendering...");
        if (this._stackDepthTest.length > 0) this.logStackError("depthtest stack length !=0 at end of rendering...");
        if (this._stackDepthWrite.length > 0) this.logStackError("depthwrite stack length !=0 at end of rendering...");
        if (this._stackDepthFunc.length > 0) this.logStackError("depthfunc stack length !=0 at end of rendering...");
        if (this._stackBlend.length > 0) this.logStackError("blend stack length !=0 at end of rendering...");
        if (this._stackBlendMode.length > 0) this.logStackError("blendMode stack length !=0 at end of rendering...");
        if (this._shaderStack.length > 0) this.logStackError("this._shaderStack length !=0 at end of rendering...");
        if (this._stackCullFace.length > 0) this.logStackError("this._stackCullFace length !=0 at end of rendering...");
        if (this._stackCullFaceFacing.length > 0) this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering...");
        if (this._viewPortStack.length > 0) this.logStackError("viewport stack length !=0 at end of rendering...");

        this._frameStarted = false;

        if (this._oldCanvasWidth != this.canvasWidth || this._oldCanvasHeight != this.canvasHeight)
        {
            this._oldCanvasWidth = this.canvasWidth;
            this._oldCanvasHeight = this.canvasHeight;
            this.emitEvent("resize");
        }

        if (this._cursor != this._currentCursor)
        {
            this._currentCursor = this.canvas.style.cursor = this._cursor;
        }

        this.emitEvent("endframe");

        this.fpsCounter.endFrame();
    }

    logStackError(str)
    {
        if (!this._hadStackError)
        {
            this._hadStackError = true;
            this._log.warn("[" + this.canvas.id + "]: ", str);
        }
    }

    // shader stack
    getShader()
    {
        if (this._currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == this._currentShader.offScreenPass) === true) return this._currentShader;

        for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    getDefaultShader()
    {
        return this._simpleShader;
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
     */

    pushShader(shader)
    {
        if (this.frameStore.forceShaderMods)
        {
            for (let i = 0; i < this.frameStore.forceShaderMods.length; i++)
            {
                // if (!currentShader.forcedMod && currentShader != this.frameStore.forceShaderMods[i])
                // {
                //     currentShader.forcedMod = this.frameStore.forceShaderMods[i];
                shader = this.frameStore.forceShaderMods[i].bind(shader, false);
                // }
                // return currentShader;
                // if (this.frameStore.forceShaderMods[i].currentShader() && shader != this.frameStore.forceShaderMods[i].currentShader().shader)
            }
        }

        this._shaderStack.push(shader);
        this._currentShader = shader;
    }


    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    setPreviousShader()
    {
        if (this.frameStore.forceShaderMods)
        {
            for (let i = 0; i < this.frameStore.forceShaderMods.length; i++)
            {
                // const a =
                this.frameStore.forceShaderMods[i].unbind(false);
                // if (a) return;
                // this.popShader();
            }
        }

        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        this._currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Object} fb framebuffer
     * @function
     */
    pushGlFrameBuffer(fb)
    {
        this._glFrameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popGlFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    popGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length == 0) return null;
        this._glFrameBufferStack.pop();
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    getCurrentGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length === 0) return null;
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Framebuffer} fb framebuffer
     */
    pushFrameBuffer(fb)
    {
        this._frameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    popFrameBuffer()
    {
        if (this._frameBufferStack.length == 0) return null;
        this._frameBufferStack.pop();
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    getCurrentFrameBuffer()
    {
        if (this._frameBufferStack.length === 0) return null;
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }


    renderStart(cgl, identTranslate, identTranslateView)
    {
        this.fpsCounter.startFrame();
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc(cgl.gl.LEQUAL);
        this.pushCullFaceFacing(cgl.gl.BACK);
        this.pushCullFace(false);

        // if (this.clearCanvasTransparent)
        // {
        //     cgl.gl.clearColor(0, 0, 0, 0);
        //     cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        // }
        // if (this.clearCanvasDepth) cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

        cgl.setViewPort(0, 0, cgl.canvasWidth, cgl.canvasHeight);

        this._startMatrixStacks(identTranslate, identTranslateView);

        cgl.pushBlendMode(constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL, false);

        for (let i = 0; i < this._textureslots.length; i++) this._textureslots[i] = null;

        this.pushShader(this._simpleShader);

        this._frameStarted = true;

        if (this._onetimeCallbacks.length > 0)
        {
            for (let i = 0; i < this._onetimeCallbacks.length; i++) this._onetimeCallbacks[i]();
            this._onetimeCallbacks.length = 0;
        }

        for (let i = 0; i < this._textureslots.length; i++)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + i);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this._textureslots[i] = null;
        }

        this.emitEvent("beginFrame");
    }

    renderEnd(cgl)
    {
        this._endMatrixStacks();

        this.popDepthTest();
        this.popDepthWrite();
        this.popDepthFunc();
        this.popCullFaceFacing();
        this.popCullFace();
        this.popBlend();
        this.popBlendMode();

        cgl.endFrame();

        this.emitEvent("endFrame");
    }

    getTexture(slot)
    {
        return this._textureslots[slot];
    }

    hasFrameStarted()
    {
        return this._frameStarted;
    }

    /**
     * log warning to console if the rendering of one frame has not been started / handy to check for async problems
     * @function checkFrameStarted
     * @memberof Context
     * @param string
     * @instance
     */
    checkFrameStarted(string)
    {
        if (!this._frameStarted)
        {
            this._log.warn("frame not started " + string);
            this.patch.printTriggerStack();
        }
    }


    setTexture(slot, t, type)
    {
        this.checkFrameStarted("cgl setTexture");

        if (t === null) t = CGL.Texture.getEmptyTexture(this).tex;

        if (this._textureslots[slot] != t)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + slot);
            this.gl.bindTexture(type || this.gl.TEXTURE_2D, t);
            this._textureslots[slot] = t;
        }


        return true;
    }

    fullScreen()
    {
        if (this.canvas.requestFullscreen) this.canvas.requestFullscreen();
        else if (this.canvas.mozRequestFullScreen) this.canvas.mozRequestFullScreen();
        else if (this.canvas.webkitRequestFullscreen) this.canvas.webkitRequestFullscreen();
        else if (this.canvas.msRequestFullscreen) this.canvas.msRequestFullscreen();
    }


    printError(str)
    {
        if (!this.checkGlErrors) return;
        let found = false;
        let error = this.gl.getError();

        if (error != this.gl.NO_ERROR)
        {
            let errStr = "";
            if (error == this.gl.OUT_OF_MEMORY) errStr = "OUT_OF_MEMORY";
            if (error == this.gl.INVALID_ENUM) errStr = "INVALID_ENUM";
            if (error == this.gl.INVALID_OPERATION) errStr = "INVALID_OPERATION";
            if (error == this.gl.INVALID_FRAMEBUFFER_OPERATION) errStr = "INVALID_FRAMEBUFFER_OPERATION";
            if (error == this.gl.INVALID_VALUE) errStr = "INVALID_VALUE";
            if (error == this.gl.CONTEXT_LOST_WEBGL)
            {
                this.aborted = true;
                errStr = "CONTEXT_LOST_WEBGL";
            }
            if (error == this.gl.NO_ERROR) errStr = "NO_ERROR";

            found = true;


            this._log.warn("gl error [" + this.canvas.id + "]: ", str, error, errStr);

            if (this.canvas.id.contains("glGuiCanvas"))
                if (!this._loggedGlError)
                {
                    this.patch.printTriggerStack();
                    this._log.stack("glerror");
                    this._loggedGlError = true;
                }
        }
        error = this.gl.getError();

        return found;
    }

    saveScreenshot(filename, cb, pw, ph, noclearalpha)
    {
        this.patch.renderOneFrame();

        let w = this.canvas.clientWidth * this.pixelDensity;
        let h = this.canvas.clientHeight * this.pixelDensity;

        if (pw)
        {
            this.canvas.width = pw;
            w = pw;
        }
        if (ph)
        {
            this.canvas.height = ph;
            h = ph;
        }

        function padLeft(nr, n, str)
        {
            return Array(n - String(nr).length + 1).join(str || "0") + nr;
        }

        const d = new Date();

        const dateStr = "".concat(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()), "_").concat(padLeft(d.getHours(), 2)).concat(padLeft(d.getMinutes(), 2)).concat(padLeft(d.getSeconds(), 2));

        if (!filename) filename = "cables_" + dateStr + ".png";
        else filename += ".png";

        this.patch.cgl.screenShot(function (blob)
        {
            this.canvas.width = w;
            this.canvas.height = h;

            if (blob)
            {
                const anchor = document.createElement("a");

                anchor.download = filename;
                anchor.href = URL.createObjectURL(blob);

                setTimeout(function ()
                {
                    anchor.click();
                    if (cb) cb(blob);
                }, 100);
            }
            else
            {
                this._log.log("screenshot: no blob");
            }
        }.bind(this), noclearalpha);
    }

    _dispose()
    {
        this._simpleShader.dispose();
        this.gl = null;
    }
}


Context.prototype.popShader = Context.prototype.setPreviousShader;
Context.prototype.setShader = Context.prototype.pushShader;

/**
 * execute the callback next frame, once
 * @function addNextFrameOnceCallback
 * @memberof Context
 * @instance
 * @param {function} cb
 */
Context.prototype.addNextFrameOnceCallback = function (cb)
{
    if (cb && this._onetimeCallbacks.indexOf(cb) == -1) this._onetimeCallbacks.push(cb);
};

// state depthtest

/**
 * push depth testing enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthTest = [];
Context.prototype.pushDepthTest = function (b)
{
    this._stackDepthTest.push(b);
    if (!b) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};
/**
 * current state of depth testing
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthTest = function ()
{
    return this._stackDepthTest[this._stackDepthTest.length - 1];
};

/**
 * pop depth testing state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthTest = function ()
{
    this._stackDepthTest.pop();

    if (!this._stackDepthTest[this._stackDepthTest.length - 1]) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};

// --------------------------------------
// state depthwrite

/**
 * push depth write enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthWrite = [];
Context.prototype.pushDepthWrite = function (b)
{
    b = b || false;
    this._stackDepthWrite.push(b);
    this.gl.depthMask(b);
};

/**
 * current state of depth writing
 * @function stateDepthWrite
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthWrite = function ()
{
    return this._stackDepthWrite[this._stackDepthWrite.length - 1];
};

/**
 * pop depth writing state
 * @function popDepthWrite
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthWrite = function ()
{
    this._stackDepthWrite.pop();
    this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || false);
};


// --------------------------------------
// state CullFace

Context.prototype._stackCullFace = [];

/**
 * push face culling face enabled state
 * @function pushCullFace
 * @param {Boolean} b enabled
 * @memberof Context
 * @instance
 */
Context.prototype.pushCullFace = function (b)
{
    this._stackCullFace.push(b);

    if (b) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};

/**
 * current state of face culling
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFace = function ()
{
    return this._stackCullFace[this._stackCullFace.length - 1];
};

/**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFace = function ()
{
    this._stackCullFace.pop();

    if (this._stackCullFace[this._stackCullFace.length - 1]) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};


// --------------------------------------
// state CullFace Facing


/**
 * push face culling face side
 * @function pushCullFaceFacing
 * @param {Number} cgl.gl.FRONT_AND_BACK, cgl.gl.BACK or cgl.gl.FRONT
 * @memberof Context
 * @instance
 */
Context.prototype._stackCullFaceFacing = [];
Context.prototype.pushCullFaceFacing = function (b)
{
    this._stackCullFaceFacing.push(b);
    this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};

/**
 * current state of face culling side
 * @function stateCullFaceFacing
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFaceFacing = function ()
{
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
};

/**
 * pop face culling face side
 * @function popCullFaceFacing
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFaceFacing = function ()
{
    this._stackCullFaceFacing.pop();
    if (this._stackCullFaceFacing.length > 0) this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};


// --------------------------------------
// state depthfunc

Context.prototype._stackDepthFunc = [];

/**
 * enable / disable depth testing
 * like `gl.depthFunc(boolean);`
 * @function pushDepthFunc
 * @memberof Context
 * @instance
 * @param {Boolean} f depthtesting
 */
Context.prototype.pushDepthFunc = function (f)
{
    this._stackDepthFunc.push(f);
    this.gl.depthFunc(f);
};

/**
 * current state of blend
 * @function stateDepthFunc
 * @memberof Context
 * @instance
 * @returns {Boolean} depth testing enabled/disabled
 */
Context.prototype.stateDepthFunc = function ()
{
    if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
    return false;
};

/**
 * pop depth testing and set the previous state
 * @function popDepthFunc
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthFunc = function ()
{
    this._stackDepthFunc.pop();
    if (this._stackDepthFunc.length > 0) this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
};

// --------------------------------------
// state blending

Context.prototype._stackBlend = [];

/**
 * enable / disable blend
 * like gl.enable(gl.BLEND); / gl.disable(gl.BLEND);
 * @function pushBlend
 * @memberof Context
 * @instance
 * @param {boolean} b blending
 */
Context.prototype.pushBlend = function (b)
{
    this._stackBlend.push(b);
    if (!b) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * pop blend state and set the previous state
 * @function popBlend
 * @memberof Context
 * @instance
 */
Context.prototype.popBlend = function ()
{
    this._stackBlend.pop();

    if (!this._stackBlend[this._stackBlend.length - 1]) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * current state of blend
 * @function stateBlend
 * @returns {boolean} blending enabled/disabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateBlend = function ()
{
    return this._stackBlend[this._stackBlend.length - 1];
};

const BLENDS = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};

Context.prototype._stackBlendMode = [];
Context.prototype._stackBlendModePremul = [];

/**
 * push and switch to predefined blendmode (CONSTANTS.BLEND_MODES.BLEND_NONE,CONSTANTS.BLEND_MODES.BLEND_NORMAL,CONSTANTS.BLEND_MODES.BLEND_ADD,CONSTANTS.BLEND_MODES.BLEND_SUB,CONSTANTS.BLEND_MODES.BLEND_MUL)
 * @function pushBlendMode
 * @memberof Context
 * @instance
 * @param {Number} blendMode
 * @param {Boolean} premul premultiplied mode
 */
Context.prototype.pushBlendMode = function (blendMode, premul)
{
    this._stackBlendMode.push(blendMode);
    this._stackBlendModePremul.push(premul);

    const n = this._stackBlendMode.length - 1;

    this.pushBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);
    this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};

/**
 * pop predefined blendmode / switch back to previous blendmode
 * @function popBlendMode
 * @memberof Context
 * @instance
 */
Context.prototype.popBlendMode = function ()
{
    this._stackBlendMode.pop();
    this._stackBlendModePremul.pop();

    const n = this._stackBlendMode.length - 1;

    this.popBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);

    if (n >= 0) this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};


// --------------------------------------
// state stencil

Context.prototype._stackStencil = [];

/**
 * enable / disable stencil testing

* @function pushStencil
 * @memberof Context
 * @instance
 * @param {Boolean} b enable
 */
Context.prototype.pushStencil = function (b)
{
    this._stackStencil.push(b);
    if (!b) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

/**
 * pop stencil test state and set the previous state
 * @function popStencil
 * @memberof Context
 * @instance
 */
Context.prototype.popStencil = function ()
{
    this._stackStencil.pop();

    if (!this._stackStencil[this._stackStencil.length - 1]) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

// --------------------------------------


Context.prototype.glGetAttribLocation = function (prog, name)
{
    const l = this.gl.getAttribLocation(prog, name);
    // if (l == -1)
    // {
    //     this._log.warn("get attr loc -1 ", name);
    // }
    return l;
};


/**
 * should an op now draw helpermeshes
 * @function shouldDrawHelpers
 * @memberof Context
 * @param op
 * @instance
 */
Context.prototype.shouldDrawHelpers = function (op)
{
    if (this.frameStore.shadowPass) return false;
    if (!op.patch.isEditorMode()) return false;

    // const fb = this.getCurrentFrameBuffer();
    // if (fb && fb.getWidth)
    // {
    //     const fbshould = this.canvasWidth / this.canvasHeight == fb.getWidth() / fb.getHeight();
    //     if (!fbshould) return false;
    // }

    return gui.shouldDrawOverlay;// || (CABLES.UI.renderHelperCurrent && op.isCurrentUiOp());
};

Context.prototype._setBlendMode = function (blendMode, premul)
{
    const gl = this.gl;

    if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NONE)
    {
        // this.gl.disable(this.gl.BLEND);
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_ADD)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_SUB)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_MUL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
    }
    else
    {
        this._log.log("setblendmode: unknown blendmode");
    }
};

Context.prototype.createMesh = function (geom, options)
{
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": options }; // old constructor fallback...
    return new CGL.Mesh(this, geom, options);
};


/**
 * set cursor
 * @function setCursor
 * @memberof Context
 * @instance
 * @param {String} str css cursor string
 */
Context.prototype.setCursor = function (str)
{
    this._cursor = str;
};

/**
 * enable a webgl extension
 * @function enableExtension
 * @memberof Context
 * @instance
 * @param {String} name extension name
 * @returns {Object} extension object or null
 */
Context.prototype.enableExtension = function (name)
{
    if (!this.gl) return null;

    if (this._enabledExtensions.hasOwnProperty(name))
        return this._enabledExtensions[name];

    const o = this.gl.getExtension(name);
    this._enabledExtensions[name] = o;

    if (!o)
        this._log.warn("[cgl_state] extension not available " + name);
    // else
        // this._log.log("enabled extension", name);

    return o;
};

Context.prototype.checkTextureSize = function (x)
{
    x = x || 1;
    x = Math.floor(x);
    x = Math.min(x, this.maxTexSize);
    x = Math.max(x, 1);
    return x;
};





;// CONCATENATED MODULE: ./src/core/core_variable.js


/**
 * @type {Object}
 * @name PatchVariable
 * @param {String} name
 * @param {String|Number} value
 * @memberof Patch
 * @constructor
 */
class PatchVariable extends Events
{
    constructor(name, val, type)
    {
        super();
        this._name = name;
        this.type = type;
        this.setValue(val);
    }

    /**
     * keeping this for backwards compatibility in older
     * exports before using eventtarget
     *
     * @param cb
     */
    addListener(cb)
    {
        this.on("change", cb, "var");
    }

    /**
     * @function Variable.getValue
     * @memberof PatchVariable
     * @returns {String|Number|Boolean}
     */
    getValue()
    {
        return this._v;
    }

    /**
     * @function getName
     * @memberof PatchVariable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    getName()
    {
        return this._name;
    }

    /**
     * @function setValue
     * @memberof PatchVariable
     * @instance
     * @param v
     * @returns {String|Number|Boolean}
     * @function
     */
    setValue(v)
    {
        this._v = v;
        this.emitEvent("change", v, this);
    }
}

/* harmony default export */ const core_variable = (PatchVariable);

;// CONCATENATED MODULE: ./src/core/core_patch.js













/**
 * Patch class, contains all operators,values,links etc. manages loading and running of the whole patch
 *
 * see {@link PatchConfig}
 *
 * @namespace external:CABLES#Patch
 * @hideconstructor
 * @param {PatchConfig} cfg The configuration object.
 * @class
 * @example
 * CABLES.patch=new CABLES.Patch(
 * {
 *     patch:pStr,
 *     glCanvasId:'glcanvas',
 *     glCanvasResizeToWindow:true,
 *     canvas:{powerPreference:"high-performance"},
 *     prefixAssetPath:'/assets/',
 *     prefixJsPath:'/js/',
 *     onError:function(e){console.log(e);}
 *     glslPrecision:'highp'
 * });
 */

const Patch = function (cfg)
{
    EventTarget.apply(this);

    this._log = new Logger("core_patch");
    this.ops = [];
    this.settings = {};
    this.config = cfg ||
        {
            "glCanvasResizeToWindow": false,
            "prefixAssetPath": "",
            "prefixJsPath": "",
            "silent": true,
            "onError": null,
            "onFinishedLoading": null,
            "onFirstFrameRendered": null,
            "onPatchLoaded": null,
            "fpsLimit": 0,
        };
    this.timer = new Timer();
    this.freeTimer = new Timer();
    this.animFrameOps = [];
    this.animFrameCallbacks = [];
    this.gui = false;
    CABLES.logSilent = this.silent = true;
    this.profiler = null;
    this.aborted = false;
    this._crashedOps = [];
    this._renderOneFrame = false;
    this._animReq = null;
    this._opIdCache = {};
    this._triggerStack = [];
    this.storeObjNames = false; // remove after may release

    this.loading = new LoadingStatus(this);

    this._volumeListeners = [];
    this._paused = false;
    this._frameNum = 0;
    this.instancing = new Instancing();
    this.onOneFrameRendered = null;
    this.namedTriggers = {};

    this._origData = null;
    this._frameNext = 0;
    this._frameInterval = 0;
    this._lastFrameTime = 0;
    this._frameWasdelayed = true;
    this.frameStore = {};
    this.deSerialized = false;
    this.reqAnimTimeStamp = 0;

    this.cgCanvas = null;

    if (!(function () { return !this; }())) console.log("not in strict mode: core patch");

    this._isLocal = document.location.href.indexOf("file:") === 0;

    if (this.config.hasOwnProperty("silent")) this.silent = CABLES.logSilent = this.config.silent;
    if (!this.config.hasOwnProperty("doRequestAnimation")) this.config.doRequestAnimation = true;

    if (!this.config.prefixAssetPath) this.config.prefixAssetPath = "";
    if (!this.config.prefixJsPath) this.config.prefixJsPath = "";
    if (!this.config.masterVolume) this.config.masterVolume = 1.0;

    this._variables = {};
    this._variableListeners = [];
    this.vars = {};
    if (cfg && cfg.vars) this.vars = cfg.vars; // vars is old!

    this.cgl = new Context(this);
    this.cgp = null;

    this._subpatchOpCache = {};

    this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas");
    if (this.config.glCanvasResizeToWindow === true) this.cgl.setAutoResize("window");
    if (this.config.glCanvasResizeToParent === true) this.cgl.setAutoResize("parent");
    this.loading.setOnFinishedLoading(this.config.onFinishedLoading);

    if (this.cgl.aborted) this.aborted = true;
    if (this.cgl.silent) this.silent = true;

    this.freeTimer.play();
    this.exec();

    if (!this.aborted)
    {
        if (this.config.patch)
        {
            this.deSerialize(this.config.patch);
        }
        else if (this.config.patchFile)
        {
            ajax(
                this.config.patchFile,
                (err, _data) =>
                {
                    const data = JSON.parse(_data);
                    if (err)
                    {
                        const txt = "";
                        this._log.error("err", err);
                        this._log.error("data", data);
                        this._log.error("data", data.msg);
                        return;
                    }
                    this.deSerialize(data);
                }
            );
        }
        this.timer.play();
    }

    console.log("made with https://cables.gl"); // eslint-disable-line
};

Patch.prototype.isPlaying = function ()
{
    return !this._paused;
};

Patch.prototype.isRenderingOneFrame = function ()
{
    return this._renderOneFrame;
};


Patch.prototype.renderOneFrame = function ()
{
    this._paused = true;
    this._renderOneFrame = true;
    this.exec();
    this._renderOneFrame = false;
};

/**
 * current number of frames per second
 * @function getFPS
 * @memberof Patch
 * @instance
 * @return {Number} fps
 */
Patch.prototype.getFPS = function ()
{
    this._log.error("deprecated getfps");
    return 0;
};

/**
 * returns true if patch is opened in editor/gui mode
 * @function isEditorMode
 * @memberof Patch
 * @instance
 * @return {Boolean} editor mode
 */
Patch.prototype.isEditorMode = function ()
{
    return this.config.editorMode === true;
};

/**
 * pauses patch execution
 * @function pause
 * @memberof Patch
 * @instance
 */
Patch.prototype.pause = function ()
{
    cancelAnimationFrame(this._animReq);
    this.emitEvent("pause");
    this._animReq = null;
    this._paused = true;
    this.freeTimer.pause();
};

/**
 * resumes patch execution
 * @function resume
 * @memberof Patch
 * @instance
 */
Patch.prototype.resume = function ()
{
    if (this._paused)
    {
        cancelAnimationFrame(this._animReq);
        this._paused = false;
        this.freeTimer.play();
        this.emitEvent("resume");
        this.exec();
    }
};

/**
 * set volume [0-1]
 * @function setVolume
 * @param {Number} v volume
 * @memberof Patch
 * @instance
 */
Patch.prototype.setVolume = function (v)
{
    this.config.masterVolume = v;
    for (let i = 0; i < this._volumeListeners.length; i++) this._volumeListeners[i].onMasterVolumeChanged(v);
};


/**
 * get asset path
 * @function getAssetPath
 * @memberof Patch
 * @param patchId
 * @instance
 */
Patch.prototype.getAssetPath = function (patchId = null)
{
    if (this.isEditorMode())
    {
        let id = patchId || gui.project()._id;
        return "/assets/" + id + "/";
    }
    else if (document.location.href.indexOf("cables.gl") > 0 || document.location.href.indexOf("cables.local") > 0)
    {
        const parts = document.location.pathname.split("/");
        let id = patchId || parts[parts.length - 1];
        return "/assets/" + id + "/";
    }
    else if (this.config.hasOwnProperty("assetPath"))
    {
        return this.config.assetPath;
    }
    else
    {
        return "assets/";
    }
};

/**
 * get js path
 * @function getJsPath
 * @memberof Patch
 * @instance
 */
Patch.prototype.getJsPath = function ()
{
    if (this.config.hasOwnProperty("jsPath"))
    {
        return this.config.jsPath;
    }
    else
    {
        return "js/";
    }
};

/**
 * get url/filepath for a filename
 * this uses prefixAssetpath in exported patches
 * @function getFilePath
 * @memberof Patch
 * @instance
 * @param {String} filename
 * @return {String} url
 */
Patch.prototype.getFilePath = function (filename)
{
    if (!filename) return filename;
    filename = String(filename);
    if (filename.indexOf("https:") === 0 || filename.indexOf("http:") === 0) return filename;
    if (filename.indexOf("data:") === 0) return filename;
    if (filename.indexOf("file:") === 0) return filename;
    filename = filename.replace("//", "/");
    if (filename.startsWith(this.config.prefixAssetPath)) filename = filename.replace(this.config.prefixAssetPath, "");
    return this.config.prefixAssetPath + filename + (this.config.suffixAssetPath || "");
};

Patch.prototype.clear = function ()
{
    this.emitEvent("patchClearStart");
    this.cgl.TextureEffectMesh = null;
    this.animFrameOps.length = 0;
    this.timer = new Timer();
    while (this.ops.length > 0) this.deleteOp(this.ops[0].id);

    this._opIdCache = {};
    this.emitEvent("patchClearEnd");
};

Patch.getOpClass = function (objName)
{
    const parts = objName.split(".");
    let opObj = null;

    try
    {
        if (parts.length == 2) opObj = window[parts[0]][parts[1]];
        else if (parts.length == 3) opObj = window[parts[0]][parts[1]][parts[2]];
        else if (parts.length == 4) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]];
        else if (parts.length == 5) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]];
        else if (parts.length == 6) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]];
        else if (parts.length == 7) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]];
        else if (parts.length == 8) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]];
        else if (parts.length == 9) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]];
        else if (parts.length == 10) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]];
        return opObj;
    }
    catch (e)
    {
        return null;
    }
};

Patch.prototype.createOp = function (identifier, id, opName = null)
{
    let op = null;
    let objName = "";

    try
    {
        if (!identifier)
        {
            console.error("createop identifier false", identifier);
            console.log((new Error()).stack);
            return;
        }
        if (identifier.indexOf("Ops.") === -1)
        {
            // this should be a uuid, not a namespace
            // creating ops by id should be the default way from now on!
            const opId = identifier;



            if (CABLES.OPS[opId])
            {
                objName = CABLES.OPS[opId].objName;
                op = new CABLES.OPS[opId].f(this, objName, id, opId);
                op.opId = opId;
            }
            else
            {
                if (opName)
                {
                    identifier = opName;
                    this._log.warn("could not find op by id: " + opId);
                }
                else
                {
                    throw new Error("could not find op by id: " + opId, { "cause": "opId:" + opId });
                }
            }
        }

        if (!op)
        {
            // fallback: create by objname!
            objName = identifier;
            const parts = identifier.split(".");
            const opObj = Patch.getOpClass(objName);

            if (!opObj)
            {
                this.emitEvent("criticalError", { "title": "unknown op" + objName, "text": "unknown op: " + objName });

                this._log.error("unknown op: " + objName);
                throw new Error("unknown op: " + objName);
            }
            else
            {
                if (parts.length == 2) op = new window[parts[0]][parts[1]](this, objName, id);
                else if (parts.length == 3) op = new window[parts[0]][parts[1]][parts[2]](this, objName, id);
                else if (parts.length == 4) op = new window[parts[0]][parts[1]][parts[2]][parts[3]](this, objName, id);
                else if (parts.length == 5) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]](this, objName, id);
                else if (parts.length == 6) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]](this, objName, id);
                else if (parts.length == 7) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]](this, objName, id);
                else if (parts.length == 8) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]](this, objName, id);
                else if (parts.length == 9) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]](this, objName, id);
                else if (parts.length == 10) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]](this, objName, id);
                else console.log("parts.length", parts.length);
            }

            if (op)
            {
                op.opId = null;
                for (const i in CABLES.OPS)
                {
                    if (CABLES.OPS[i].objName == objName) op.opId = i;
                }
            }
        }
    }
    catch (e)
    {
        this._crashedOps.push(objName);

        this._log.error(e);
        this._log.error("[instancing error] " + objName, e);

        if (!this.isEditorMode())
        {
            this.exitError("INSTANCE_ERR", "Instancing Error: " + objName, e);
            throw new Error("instancing error 1" + objName);
        }
    }

    if (op)
    {
        op._objName = objName;
        op.patch = this;
    }
    else
    {
        this._log.log("no op was created!?", identifier, id);
    }
    return op;
};

/**
 * create a new op in patch
 * @function addOp
 * @memberof Patch
 * @instance
 * @param {string} opIdentifier uuid or name, e.g. Ops.Math.Sum
 * @param {Object} uiAttribs Attributes
 * @param {string} id
 * @param {boolean} fromDeserialize
 * @param {string} opName e.g. Ops.Math.Sum
 * @example
 * // add invisible op
 * patch.addOp('Ops.Math.Sum', { showUiAttribs: false });
 */
Patch.prototype.addOp = function (opIdentifier, uiAttribs, id, fromDeserialize, opName)
{
    const op = this.createOp(opIdentifier, id, opName);

    if (op)
    {
        uiAttribs = uiAttribs || {};
        if (uiAttribs.hasOwnProperty("errors")) delete uiAttribs.errors;
        if (uiAttribs.hasOwnProperty("error")) delete uiAttribs.error;
        uiAttribs.subPatch = uiAttribs.subPatch || 0;

        op.setUiAttribs(uiAttribs);
        if (op.onCreate) op.onCreate();

        if (op.hasOwnProperty("onAnimFrame")) this.addOnAnimFrame(op);
        if (op.hasOwnProperty("onMasterVolumeChanged")) this._volumeListeners.push(op);

        if (this._opIdCache[op.id])
        {
            this._log.warn("opid with id " + op.id + " already exists in patch!");
            this.deleteOp(op.id); // strange with subpatch ops: why is this needed, somehow ops get added twice ???.....
            // return;
        }

        this.ops.push(op);
        this._opIdCache[op.id] = op;

        if (this._subPatchCacheAdd) this._subPatchCacheAdd(uiAttribs.subPatch, op);
        this.emitEvent("onOpAdd", op, fromDeserialize);

        if (op.init) op.init();

        op.emitEvent("init", fromDeserialize);
    }
    else
    {
        this._log.error("addop: op could not be created: ", opIdentifier);
    }

    return op;
};

Patch.prototype.addOnAnimFrame = function (op)
{
    for (let i = 0; i < this.animFrameOps.length; i++) if (this.animFrameOps[i] == op) { return; }

    this.animFrameOps.push(op);
};

Patch.prototype.removeOnAnimFrame = function (op)
{
    for (let i = 0; i < this.animFrameOps.length; i++)
    {
        if (this.animFrameOps[i] == op)
        {
            this.animFrameOps.splice(i, 1);
            return;
        }
    }
};

Patch.prototype.addOnAnimFrameCallback = function (cb)
{
    this.animFrameCallbacks.push(cb);
};

Patch.prototype.removeOnAnimCallback = function (cb)
{
    for (let i = 0; i < this.animFrameCallbacks.length; i++)
    {
        if (this.animFrameCallbacks[i] == cb)
        {
            this.animFrameCallbacks.splice(i, 1);
            return;
        }
    }
};

Patch.prototype.deleteOp = function (opid, tryRelink, reloadingOp)
{
    let found = false;
    for (const i in this.ops)
    {
        if (this.ops[i].id == opid)
        {
            const op = this.ops[i];
            let reLinkP1 = null;
            let reLinkP2 = null;

            if (op)
            {
                found = true;
                if (tryRelink)
                {
                    if (op.portsIn.length > 0 && op.portsIn[0].isLinked() && (op.portsOut.length > 0 && op.portsOut[0].isLinked()))
                    {
                        if (op.portsIn[0].getType() == op.portsOut[0].getType() && op.portsIn[0].links[0])
                        {
                            reLinkP1 = op.portsIn[0].links[0].getOtherPort(op.portsIn[0]);
                            reLinkP2 = op.portsOut[0].links[0].getOtherPort(op.portsOut[0]);
                        }
                    }
                }

                const opToDelete = this.ops[i];
                opToDelete.removeLinks();

                if (this.onDelete)
                {
                    // todo: remove
                    this._log.warn("deprecated this.onDelete", this.onDelete);
                    this.onDelete(opToDelete);
                }

                this.ops.splice(i, 1);
                opToDelete.emitEvent("delete", opToDelete);
                this.emitEvent("onOpDelete", opToDelete, reloadingOp);

                if (this.clearSubPatchCache) this.clearSubPatchCache(opToDelete.uiAttribs.subPatch);

                if (opToDelete.onDelete) opToDelete.onDelete(reloadingOp);
                opToDelete.cleanUp();

                if (reLinkP1 !== null && reLinkP2 !== null)
                {
                    this.link(reLinkP1.op, reLinkP1.getName(), reLinkP2.op, reLinkP2.getName());
                }

                delete this._opIdCache[opid];
                break;
            }
        }
    }

    if (!found) this._log.warn("core patch deleteop: not found...", opid);
};

Patch.prototype.getFrameNum = function ()
{
    return this._frameNum;
};

Patch.prototype.emitOnAnimFrameEvent = function (time, delta)
{
    time = time || this.timer.getTime();

    for (let i = 0; i < this.animFrameCallbacks.length; ++i)
        if (this.animFrameCallbacks[i])
            this.animFrameCallbacks[i](time, this._frameNum, delta);

    for (let i = 0; i < this.animFrameOps.length; ++i)
        if (this.animFrameOps[i].onAnimFrame)
            this.animFrameOps[i].onAnimFrame(time, this._frameNum, delta);
};

Patch.prototype.renderFrame = function (timestamp)
{
    this.timer.update(this.reqAnimTimeStamp);
    this.freeTimer.update(this.reqAnimTimeStamp);
    const time = this.timer.getTime();
    const startTime = performance.now();
    this.cgl.frameStartTime = this.timer.getTime();

    const delta = timestamp - this.reqAnimTimeStamp || timestamp;

    this.emitOnAnimFrameEvent(null, delta);

    this.cgl.profileData.profileFrameDelta = delta;
    this.reqAnimTimeStamp = timestamp;
    this.cgl.profileData.profileOnAnimFrameOps = performance.now() - startTime;

    this.emitEvent("onRenderFrame", time);

    this._frameNum++;
    if (this._frameNum == 1)
    {
        if (this.config.onFirstFrameRendered) this.config.onFirstFrameRendered();
    }
};

Patch.prototype.exec = function (timestamp)
{
    if (!this._renderOneFrame && (this._paused || this.aborted)) return;
    this.emitEvent("reqAnimFrame");
    cancelAnimationFrame(this._animReq);

    this.config.fpsLimit = this.config.fpsLimit || 0;
    if (this.config.fpsLimit)
    {
        this._frameInterval = 1000 / this.config.fpsLimit;
    }

    const now = CABLES.now();
    const frameDelta = now - this._frameNext;

    if (this.isEditorMode())
    {
        if (!this._renderOneFrame)
        {
            if (now - this._lastFrameTime >= 500 && this._lastFrameTime !== 0 && !this._frameWasdelayed)
            {
                this._lastFrameTime = 0;
                setTimeout(this.exec.bind(this), 500);
                this.emitEvent("renderDelayStart");
                this._frameWasdelayed = true;
                return;
            }
        }
    }

    if (this._renderOneFrame || this.config.fpsLimit === 0 || frameDelta > this._frameInterval || this._frameWasdelayed)
    {
        this.renderFrame(timestamp);

        if (this._frameInterval) this._frameNext = now - (frameDelta % this._frameInterval);
    }

    if (this._frameWasdelayed)
    {
        this.emitEvent("renderDelayEnd");
        this._frameWasdelayed = false;
    }

    if (this._renderOneFrame)
    {
        if (this.onOneFrameRendered) this.onOneFrameRendered(); // todo remove everywhere and use propper event...
        this.emitEvent("renderedOneFrame");
        this._renderOneFrame = false;
    }


    if (this.config.doRequestAnimation) this._animReq = this.cgl.canvas.ownerDocument.defaultView.requestAnimationFrame(this.exec.bind(this));
};

/**
 * link two ops/ports
 * @function link
 * @memberof Patch
 * @instance
 * @param {Op} op1
 * @param {String} port1Name
 * @param {Op} op2
 * @param {String} port2Name
 * @param {boolean} lowerCase
 * @param {boolean} fromDeserialize
 */
Patch.prototype.link = function (op1, port1Name, op2, port2Name, lowerCase, fromDeserialize)
{
    if (!op1) return this._log.warn("link: op1 is null ");
    if (!op2) return this._log.warn("link: op2 is null");

    const port1 = op1.getPort(port1Name, lowerCase);
    const port2 = op2.getPort(port2Name, lowerCase);

    if (!port1) return op1._log.warn("port1 not found! " + port1Name + "(" + op1.objName + ")");
    if (!port2) return op1._log.warn("port2 not found! " + port2Name + " of " + op2.name + "(" + op2.objName + ")", op2);

    if (!port1.shouldLink(port1, port2) || !port2.shouldLink(port1, port2)) return false;

    if (Link.canLink(port1, port2))
    {
        const link = new Link(this);
        link.link(port1, port2);

        this.emitEvent("onLink", port1, port2, link, fromDeserialize);
        return link;
    }
};

Patch.prototype.serialize = function (options)
{
    const obj = {};

    options = options || {};
    obj.ops = [];
    obj.settings = this.settings;
    for (const i in this.ops)
    {
        const op = this.ops[i];
        obj.ops.push(op.getSerialized());
    }

    cleanJson(obj);

    if (options.asObject) return obj;
    return JSON.stringify(obj);
};

Patch.prototype.getOpsByRefId = function (refId)
{
    const perf = CABLES.UI.uiProfiler.start("[corepatchetend] getOpsByRefId");
    const refOps = [];
    const ops = gui.corePatch().ops;
    for (let i = 0; i < ops.length; i++)
        if (ops[i].storage && ops[i].storage.ref == refId) refOps.push(ops[i]);
    perf.finish();
    return refOps;
};


Patch.prototype.getOpById = function (opid)
{
    return this._opIdCache[opid];
};

Patch.prototype.getOpsByName = function (name)
{
    // TODO: is this still needed ? unclear behaviour....
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].name == name) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.getOpsByObjName = function (name)
{
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].objName == name) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.getOpsByOpId = function (opid)
{
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].opId == opid) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.loadLib = function (which)
{
    ajaxSync(
        "/ui/libs/" + which + ".js",
        (err, res) =>
        {
            const se = document.createElement("script");
            se.type = "text/javascript";
            se.text = res;
            document.getElementsByTagName("head")[0].appendChild(se);
        },
        "GET",
    );
    // open and send a synchronous request
    // xhrObj.open('GET', '/ui/libs/'+which+'.js', false);
    // xhrObj.send('');
    // add the returned content to a newly created script tag
};


Patch.prototype.getSubPatchOp = function (patchId, objName)
{
    for (const i in this.ops)
        if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
            return this.ops[i];

    return false;
};

Patch.prototype._addLink = function (opinid, opoutid, inName, outName)
{
    return this.link(this.getOpById(opinid), inName, this.getOpById(opoutid), outName, false, true);
};

Patch.prototype.deSerialize = function (obj, options)
{
    options = options || { "genIds": false, "createRef": false };
    if (this.aborted) return;
    const newOps = [];
    const loadingId = this.loading.start("core", "deserialize");

    this.namespace = obj.namespace || "";
    this.name = obj.name || "";

    if (typeof obj === "string") obj = JSON.parse(obj);

    this.settings = obj.settings;

    this.emitEvent("patchLoadStart");

    if (window.logStartup)logStartup("add " + obj.ops.length + " ops... ");

    const addedOps = [];

    // add ops...
    for (let iop = 0; iop < obj.ops.length; iop++)
    {
        const start = CABLES.now();
        const opData = obj.ops[iop];
        let op = null;

        try
        {
            if (opData.opId) op = this.addOp(opData.opId, opData.uiAttribs, opData.id, true, opData.objName);
            else op = this.addOp(opData.objName, opData.uiAttribs, opData.id, true);
        }
        catch (e)
        {
            this._log.error("[instancing error] op data:", opData, e);
            // throw new Error("could not create op by id: <b>" + (opData.objName || opData.opId) + "</b> (" + opData.id + ")");
        }

        if (op)
        {
            addedOps.push(op);
            if (options.genIds) op.id = shortId();
            op.portsInData = opData.portsIn;
            op._origData = JSON.parse(JSON.stringify(opData));
            op.storage = opData.storage;
            // if (opData.hasOwnProperty("disabled"))op.setEnabled(!opData.disabled);

            for (const ipi in opData.portsIn)
            {
                const objPort = opData.portsIn[ipi];
                if (objPort && objPort.hasOwnProperty("name"))
                {
                    const port = op.getPort(objPort.name);

                    if (port && (port.uiAttribs.display == "bool" || port.uiAttribs.type == "bool") && !isNaN(objPort.value)) objPort.value = objPort.value == true ? 1 : 0;
                    if (port && objPort.value !== undefined && port.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) port.set(objPort.value);

                    if (port)
                    {
                        port.deSerializeSettings(objPort);
                    }
                    else
                    {
                        // if (port.uiAttribs.hasOwnProperty("title"))
                        // {
                        //     op.preservedPortTitles = op.preservedPortTitles || {};
                        //     op.preservedPortTitles[port.name] = port.uiAttribs.title;
                        // }
                        op.preservedPortValues = op.preservedPortValues || {};
                        op.preservedPortValues[objPort.name] = objPort.value;
                    }
                }
            }

            for (const ipo in opData.portsOut)
            {
                const objPort = opData.portsOut[ipo];
                if (objPort && objPort.hasOwnProperty("name"))
                {
                    const port2 = op.getPort(objPort.name);

                    if (port2)
                    {
                        port2.deSerializeSettings(objPort);

                        if (port2.uiAttribs.hasOwnProperty("title"))
                        {
                            op.preservedPortTitles = op.preservedPortTitles || {};
                            op.preservedPortTitles[port2.name] = port2.uiAttribs.title;
                        }


                        if (port2.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE && objPort.hasOwnProperty("value"))
                            port2.set(obj.ops[iop].portsOut[ipo].value);

                        if (objPort.expose) port2.setUiAttribs({ "expose": true });
                    }
                }
            }
            newOps.push(op);
        }

        const timeused = Math.round(100 * (CABLES.now() - start)) / 100;
        if (!this.silent && timeused > 5) console.log("long op init ", obj.ops[iop].objName, timeused);
    }
    if (window.logStartup)logStartup("add ops done");

    for (const i in this.ops)
    {
        if (this.ops[i].onLoadedValueSet)
        {
            this.ops[i].onLoadedValueSet(this.ops[i]._origData);
            this.ops[i].onLoadedValueSet = null;
            this.ops[i]._origData = null;
        }
        this.ops[i].emitEvent("loadedValueSet");
    }

    if (window.logStartup)logStartup("creating links");

    if (options.opsCreated)options.opsCreated(addedOps);
    // create links...
    if (obj.ops)
    {
        for (let iop = 0; iop < obj.ops.length; iop++)
        {
            if (obj.ops[iop].portsIn)
            {
                for (let ipi2 = 0; ipi2 < obj.ops[iop].portsIn.length; ipi2++)
                {
                    if (obj.ops[iop].portsIn[ipi2] && obj.ops[iop].portsIn[ipi2].links)
                    {
                        for (let ili = 0; ili < obj.ops[iop].portsIn[ipi2].links.length; ili++)
                        {
                            const l = this._addLink(
                                obj.ops[iop].portsIn[ipi2].links[ili].objIn,
                                obj.ops[iop].portsIn[ipi2].links[ili].objOut,
                                obj.ops[iop].portsIn[ipi2].links[ili].portIn,
                                obj.ops[iop].portsIn[ipi2].links[ili].portOut);

                            // const took = performance.now - startTime;
                            // if (took > 100)console.log(obj().ops[iop].portsIn[ipi2].links[ili].objIn, obj.ops[iop].portsIn[ipi2].links[ili].objOut, took);
                        }
                    }
                }
            }
            if (obj.ops[iop].portsOut)
                for (let ipi2 = 0; ipi2 < obj.ops[iop].portsOut.length; ipi2++)
                    if (obj.ops[iop].portsOut[ipi2] && obj.ops[iop].portsOut[ipi2].links)
                    {
                        for (let ili = 0; ili < obj.ops[iop].portsOut[ipi2].links.length; ili++)
                        {
                            if (obj.ops[iop].portsOut[ipi2].links[ili])
                            {
                                if (obj.ops[iop].portsOut[ipi2].links[ili].subOpRef)
                                {
                                    // lost link
                                    const outOp = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);
                                    let dstOp = null;
                                    let theSubPatch = 0;

                                    for (let i = 0; i < this.ops.length; i++)
                                    {
                                        if (
                                            this.ops[i].storage &&
                                            this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].subOpRef &&
                                            outOp.uiAttribs.subPatch == this.ops[i].uiAttribs.subPatch
                                        )
                                        {
                                            theSubPatch = this.ops[i].patchId.get();
                                            break;
                                        }
                                    }

                                    for (let i = 0; i < this.ops.length; i++)
                                    {
                                        if (
                                            this.ops[i].storage &&
                                            this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].refOp &&
                                            this.ops[i].uiAttribs.subPatch == theSubPatch)
                                        {
                                            dstOp = this.ops[i];
                                            break;
                                        }
                                    }

                                    if (!dstOp) this._log.warn("could not find op for lost link");
                                    else
                                    {
                                        const l = this._addLink(
                                            dstOp.id,
                                            obj.ops[iop].portsOut[ipi2].links[ili].objOut,

                                            obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                                            obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                    }
                                }
                                else
                                {
                                    const l = this._addLink(obj.ops[iop].portsOut[ipi2].links[ili].objIn, obj.ops[iop].portsOut[ipi2].links[ili].objOut, obj.ops[iop].portsOut[ipi2].links[ili].portIn, obj.ops[iop].portsOut[ipi2].links[ili].portOut);

                                    if (!l)
                                    {
                                        const op1 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objIn);
                                        const op2 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);

                                        if (!op1)console.log("could not find link op1");
                                        if (!op2)console.log("could not find link op2");

                                        const p1Name = obj.ops[iop].portsOut[ipi2].links[ili].portIn;

                                        if (op1 && !op1.getPort(p1Name))
                                        {
                                            // console.log("PRESERVE port 1 not found", p1Name);

                                            op1.preservedPortLinks[p1Name] = op1.preservedPortLinks[p1Name] || [];
                                            op1.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                        }

                                        const p2Name = obj.ops[iop].portsOut[ipi2].links[ili].portOut;
                                        if (op2 && !op2.getPort(p2Name))
                                        {
                                            // console.log("PRESERVE port 2 not found", obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                            op2.preservedPortLinks[p1Name] = op2.preservedPortLinks[p1Name] || [];
                                            op2.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                        }
                                    }
                                }
                            }
                        }
                    }
        }
    }

    if (window.logStartup)logStartup("calling ops onloaded");

    for (const i in this.ops)
    {
        if (this.ops[i].onLoaded)
        {
            // TODO: deprecate!!!
            this.ops[i].onLoaded();
            this.ops[i].onLoaded = null;
        }
    }

    if (window.logStartup)logStartup("initializing ops...");
    for (const i in this.ops)
    {
        if (this.ops[i].init)
        {
            try
            {
                this.ops[i].init();
                this.ops[i].init = null;
            }
            catch (e)
            {
                console.error("op.init crash", e);
            }
        }
    }

    if (window.logStartup)logStartup("initializing vars...");

    if (this.config.variables)
        for (const varName in this.config.variables)
            this.setVarValue(varName, this.config.variables[varName]);

    if (window.logStartup)logStartup("initializing var ports");

    for (const i in this.ops)
    {
        this.ops[i].initVarPorts();
        delete this.ops[i].uiAttribs.pasted;
    }

    setTimeout(() => { this.loading.finished(loadingId); }, 100);

    if (this.config.onPatchLoaded) this.config.onPatchLoaded(this);

    this.deSerialized = true;
    this.emitEvent("patchLoadEnd", newOps, obj, options.genIds);
};

Patch.prototype.profile = function (enable)
{
    this.profiler = new Profiler(this);
    for (const i in this.ops)
    {
        this.ops[i].profile(enable);
    }
};

// ----------------------

/**
 * set variable value
 * @function setVariable
 * @memberof Patch
 * @instance
 * @param {String} name of variable
 * @param {Number|String|Boolean} val value
 */
Patch.prototype.setVariable = function (name, val)
{
    // if (this._variables.hasOwnProperty(name))
    if (this._variables[name] !== undefined)
    {
        this._variables[name].setValue(val);
    }
    else
    {
        this._log.warn("variable " + name + " not found!");
    }
};

Patch.prototype._sortVars = function ()
{
    if (!this.isEditorMode()) return;
    const ordered = {};
    Object.keys(this._variables).sort(
        (a, b) =>
        { return a.localeCompare(b, "en", { "sensitivity": "base" }); }
    ).forEach((key) =>
    {
        ordered[key] = this._variables[key];
    });
    this._variables = ordered;
};

/**
 * has variable
 * @function hasVariable
 * @memberof Patch
 * @instance
 * @param {String} name of variable
 */
Patch.prototype.hasVar = function (name)
{
    return this._variables[name] !== undefined;

    // return this._variables.hasOwnProperty(name);
};

// used internally
Patch.prototype.setVarValue = function (name, val, type)
{
    if (this.hasVar(name))
    {
        this._variables[name].setValue(val);
    }
    else
    {
        this._variables[name] = new core_variable(name, val, type);
        this._sortVars();
        this.emitEvent("variablesChanged");
    }
    return this._variables[name];
};
// old?
Patch.prototype.getVarValue = function (name, val)
{
    if (this._variables.hasOwnProperty(name)) return this._variables[name].getValue();
};

/**
 * @function getVar
 * @memberof Patch
 * @instance
 * @param {String} name
 * @return {Variable} variable
 */
Patch.prototype.getVar = function (name)
{
    if (this._variables.hasOwnProperty(name)) return this._variables[name];
};


Patch.prototype.deleteVar = function (name)
{
    for (let i = 0; i < this.ops.length; i++)
        for (let j = 0; j < this.ops[i].portsIn.length; j++)
            if (this.ops[i].portsIn[j].getVariableName() == name)
                this.ops[i].portsIn[j].setVariable(null);

    delete this._variables[name];
    this.emitEvent("variableDeleted", name);
    this.emitEvent("variablesChanged");
};

/**
 * @function getVars
 * @memberof Patch
 * @instance
 * @param t
 * @return {Array<Variable>} variables
 * @function
 */
Patch.prototype.getVars = function (t)
{
    if (t === undefined) return this._variables;

    const vars = [];
    if (t == CABLES.OP_PORT_TYPE_STRING) t = "string";
    if (t == CABLES.OP_PORT_TYPE_VALUE) t = "number";
    if (t == CABLES.OP_PORT_TYPE_ARRAY) t = "array";
    if (t == CABLES.OP_PORT_TYPE_OBJECT) t = "object";

    for (const i in this._variables)
    {
        if (!this._variables[i].type || this._variables[i].type == t) vars.push(this._variables[i]);
    }
    return vars;
};

/**
 * @function exitError
 * @memberof Patch
 * @instance
 * @param errorId
 * @param errorMessage
 * @param ex
 * @description cancel patch execution and quit showing an errormessage
 * @function
 */
Patch.prototype.exitError = function (errorId, errorMessage, ex)
{
    this.aborted = true;

    if (this && this.config && this.config.onError)
    {
        this.config.onError(errorId, errorMessage);
    }
    else
    {
        if (!this.isEditorMode())
        {
            const newDiv = document.createElement("div");

            const rect = this.cgl.canvas.getBoundingClientRect();

            newDiv.setAttribute("style", "position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;");
            newDiv.style.top = rect.top + "px";
            newDiv.style.left = rect.left + "px";
            let str = "cables - An error occured:<br/>";
            str += "[" + errorId + "] - " + errorMessage;
            if (ex)str += "<br/>Exception: " + ex.message;
            newDiv.innerHTML = str;

            console.log(ex);
            const pe = this.cgl.canvas.parentElement;

            while (pe.hasChildNodes()) pe.removeChild(pe.lastChild);

            document.body.appendChild(newDiv);
        }
    }
};

/**
 * @function preRenderOps
 * @memberof Patch
 * @instance
 * @description invoke pre rendering of ops
 * @function
 */
Patch.prototype.preRenderOps = function ()
{
    this._log.log("prerendering...");

    for (let i = 0; i < this.ops.length; i++)
    {
        if (this.ops[i].preRender)
        {
            this.ops[i].preRender();
            this._log.log("prerender " + this.ops[i].objName);
        }
    }
};

/**
 * @function dispose
 * @memberof Patch
 * @instance
 * @description stop, dispose and cleanup patch
 */
Patch.prototype.dispose = function ()
{
    this.pause();
    this.clear();
    this.cgl.dispose();
};

Patch.prototype.pushTriggerStack = function (p)
{
    this._triggerStack.push(p);
};

Patch.prototype.popTriggerStack = function ()
{
    this._triggerStack.pop();
};

Patch.prototype.printTriggerStack = function ()
{
    if (this._triggerStack.length == 0)
    {
        // console.log("stack length", this._triggerStack.length); // eslint-disable-line
        return;
    }
    console.groupCollapsed( // eslint-disable-line
        "trigger port stack " + this._triggerStack[this._triggerStack.length - 1].op.objName + "." + this._triggerStack[this._triggerStack.length - 1].name,
    );

    const rows = [];
    for (let i = 0; i < this._triggerStack.length; i++)
    {
        rows.push(i + ". " + this._triggerStack[i].op.objName + " " + this._triggerStack[i].name);
    }

    console.table(rows); // eslint-disable-line
    console.groupEnd(); // eslint-disable-line
};

/**
 * returns document object of the patch could be != global document object when opening canvas ina popout window
 * @function getDocument
 * @memberof Patch
 * @instance
 * @return {Object} document
 */
Patch.prototype.getDocument = function ()
{
    return this.cgl.canvas.ownerDocument;
};

Patch.replaceOpIds = function (json, options)
{
    const opids = {};
    for (const i in json.ops)
    {
        opids[json.ops[i].id] = json.ops[i];
    }

    for (const j in json.ops)
    {
        for (const k in json.ops[j].portsOut)
        {
            const links = json.ops[j].portsOut[k].links;
            if (links)
            {
                let l = links.length;

                while (l--)
                {
                    if (links[l] && (!opids[links[l].objIn] || !opids[links[l].objOut]))
                    {
                        if (!options.doNotUnlinkLostLinks)
                        {
                            links.splice(l, 1);
                        }
                        else
                        {
                            if (options.fixLostLinks)
                            {
                                // console.log("lost link...?", links[l]);
                                const op = gui.corePatch().getOpById(links[l].objIn);
                                if (!op) console.log("op not found!");
                                else
                                {
                                    const outerOp = gui.patchView.getSubPatchOuterOp(op.uiAttribs.subPatch);
                                    if (outerOp)
                                    {
                                        op.storage = op.storage || {};
                                        op.storage.ref = op.storage.ref || CABLES.shortId();
                                        links[l].refOp = op.storage.ref;
                                        links[l].subOpRef = outerOp.storage.ref;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (const i in json.ops)
    {
        const op = json.ops[i];
        const oldId = op.id;
        let newId = CABLES.shortId();

        if (options.prefixHash) newId = prefixedHash(options.prefixHash + oldId);

        else if (options.prefixId) newId = options.prefixId + oldId;
        else if (options.refAsId) // when saving json
        {
            if (op.storage && op.storage.ref)
            {
                newId = op.storage.ref;
                delete op.storage.ref;
            }
            else
            {
                op.storage = op.storage || {};
                op.storage.ref = newId = CABLES.shortId();
            }
        }

        const newID = op.id = newId;

        if (options.oldIdAsRef) // when loading json
        {
            op.storage = op.storage || {};
            op.storage.ref = oldId;
        }

        for (const j in json.ops)
        {
            if (json.ops[j].portsIn)
                for (const k in json.ops[j].portsIn)
                {
                    if (json.ops[j].portsIn[k].links)
                    {
                        let l = json.ops[j].portsIn[k].links.length;

                        while (l--) if (json.ops[j].portsIn[k].links[l] === null) json.ops[j].portsIn[k].links.splice(l, 1);

                        for (l in json.ops[j].portsIn[k].links)
                        {
                            if (json.ops[j].portsIn[k].links[l].objIn === oldId) json.ops[j].portsIn[k].links[l].objIn = newID;
                            if (json.ops[j].portsIn[k].links[l].objOut === oldId) json.ops[j].portsIn[k].links[l].objOut = newID;
                        }
                    }
                }

            if (json.ops[j].portsOut)
                for (const k in json.ops[j].portsOut)
                {
                    if (json.ops[j].portsOut[k].links)
                    {
                        let l = json.ops[j].portsOut[k].links.length;

                        while (l--) if (json.ops[j].portsOut[k].links[l] === null) json.ops[j].portsOut[k].links.splice(l, 1);

                        for (l in json.ops[j].portsOut[k].links)
                        {
                            if (json.ops[j].portsOut[k].links[l].objIn === oldId) json.ops[j].portsOut[k].links[l].objIn = newID;
                            if (json.ops[j].portsOut[k].links[l].objOut === oldId) json.ops[j].portsOut[k].links[l].objOut = newID;
                        }
                    }
                }
        }
    }

    // set correct subpatch
    const subpatchIds = [];
    const fixedSubPatches = [];

    for (let i = 0; i < json.ops.length; i++)
    {
        // if (CABLES.Op.isSubPatchOpName(json.ops[i].objName))
        if (json.ops[i].storage && json.ops[i].storage.subPatchVer)
        {
            for (const k in json.ops[i].portsIn)
            {
                if (json.ops[i].portsIn[k].name === "patchId")
                {
                    let newId = shortId();

                    if (options.prefixHash) newId = prefixedHash(options.prefixHash + json.ops[i].portsIn[k].value);

                    const oldSubPatchId = json.ops[i].portsIn[k].value;
                    const newSubPatchId = json.ops[i].portsIn[k].value = newId;

                    subpatchIds.push(newSubPatchId);

                    for (let j = 0; j < json.ops.length; j++)
                    {
                        // op has no uiAttribs in export, we don't care about subpatches in export though
                        if (json.ops[j].uiAttribs)
                        {
                            if (json.ops[j].uiAttribs.subPatch === oldSubPatchId)
                            {
                                json.ops[j].uiAttribs.subPatch = newSubPatchId;
                                fixedSubPatches.push(json.ops[j].id);
                            }
                        }
                    }
                }
            }
        }
    }

    for (const kk in json.ops)
    {
        let found = false;
        for (let j = 0; j < fixedSubPatches.length; j++)
        {
            if (json.ops[kk].id === fixedSubPatches[j])
            {
                found = true;
                break;
            }
        }
        // op has no uiAttribs in export, we don't care about subpatches in export though
        if (!found && json.ops[kk].uiAttribs && options.parentSubPatchId != null)
            json.ops[kk].uiAttribs.subPatch = options.parentSubPatchId;
    }

    return json;
};

/**
 * remove an eventlistener
 * @instance
 * @function addEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * remove an eventlistener
 * @instance
 * @function removeEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * op added to patch event
 * @event onOpAdd
 *
 * @memberof Patch
 * @type {Object}
 * @property {Op} op new op
 */

/**
 * op deleted from patch
 * @event onOpDelete
 * @memberof Patch
 * @type {Object}
 * @property {Op} op that will be deleted
 */

/**
 * link event - two ports will be linked
 * @event onLink
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * unlink event - a link was deleted
 * @event onUnLink
 * @memberof Patch
 * @type {Object}
 */

/**
 * variables has been changed / a variable has been added to the patch
 * @event variablesChanged
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * configuration object for loading a patch
 * @typedef {Object} PatchConfig
 * @hideconstructor
 * @property {String} [prefixAssetPath=''] prefix for path to assets
 * @property {String} [assetPath=''] path to assets
 * @property {String} [jsPath=''] path to javascript files
 * @property {String} [glCanvasId='glcanvas'] dom element id of canvas element
 * @property {Function} [onError=null] called when an error occurs
 * @property {Function} [onFinishedLoading=null] called when patch finished loading all assets
 * @property {Function} [onFirstFrameRendered=null] called when patch rendered it's first frame
 * @property {Boolean} [glCanvasResizeToWindow=false] resize canvas automatically to window size
 * @property {Boolean} [doRequestAnimation=true] do requestAnimationFrame set to false if you want to trigger exec() from outside (only do if you know what you are doing)
 * @property {Boolean} [clearCanvasColor=true] clear canvas in transparent color every frame
 * @property {Boolean} [clearCanvasDepth=true] clear depth every frame
 * @property {Boolean} [glValidateShader=true] enable/disable validation of shaders *
 * @property {Boolean} [silent=false]
 * @property {Number} [fpsLimit=0] 0 for maximum possible frames per second
 * @property {String} [glslPrecision='mediump'] default precision for glsl shader
 *
 */

/* harmony default export */ const core_patch = (Patch);

;// CONCATENATED MODULE: ./src/core/embedding.js



const EMBED = {};

/**
 * add patch into html element (will create canvas and set size to fill containerElement)
 * @name CABLES.EMBED#addPatch
 * @param {object|string} _element containerElement dom element or id of element
 * @param {object} options patch options
 * @function
 */
EMBED.addPatch = function (_element, options)
{
    let el = _element;
    let id = generateUUID();
    if (typeof _element == "string")
    {
        id = _element;
        el = document.getElementById(id);

        if (!el)
        {
            console.error(id + " Polyshape Container Element not found!");
            return;
        }
    }

    const canvEl = document.createElement("canvas");
    canvEl.id = "glcanvas_" + id;
    canvEl.width = el.clientWidth;
    canvEl.height = el.clientHeight;

    window.addEventListener(
        "resize",
        function ()
        {
            this.setAttribute("width", el.clientWidth);
            this.height = el.clientHeight;
        }.bind(canvEl),
    );

    el.appendChild(canvEl);

    options = options || {};
    options.glCanvasId = canvEl.id;

    if (!options.onError)
    {
        options.onError = function (err)
        {
            console.error(err);
        };
    }

    CABLES.patch = new core_patch(options);
    return canvEl;
};



;// CONCATENATED MODULE: ./src/core/webaudio.js
/** @namespace WEBAUDIO */



const WEBAUDIO = {};

WEBAUDIO.toneJsInitialized = false;

/*
 * External JSDoc definitions
 */

/**
 * Part of the Web Audio API, the AudioBuffer interface represents a short audio asset residing in memory.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
 */

/**
 * Part of the Web Audio API, the AudioNode interface is a generic interface for representing an audio processing module.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode}
 */

/**
 * The AudioContext interface represents an audio-processing graph built from audio modules linked together
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
 */

/**
 * Checks if a global audio context has been created and creates
 * it if necessary. This audio context can be used for native Web Audio as well as Tone.js ops.
 * Associates the audio context with Tone.js if it is being used
 * @param {CABLES.Op} op - The operator which needs the Audio Context
 */
WEBAUDIO.createAudioContext = function (op)
{
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext)
    {
        if (!window.audioContext)
        {
            window.audioContext = new AudioContext();
        }
        // check if tone.js lib is being used
        if (window.Tone && !WEBAUDIO.toneJsInitialized)
        {
            // set current audio context in tone.js
            Tone.setContext(window.audioContext);
            WEBAUDIO.toneJsInitialized = true;
        }
    }
    else
    {
        op.patch.config.onError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
        return;
    }
    return window.audioContext;
};

/**
 * Returns the audio context.
 * Before `createAudioContext` must have been called at least once.
 * It most cases you should use `createAudioContext`, which just returns the audio context
 * when it has been created already.
 */
WEBAUDIO.getAudioContext = function ()
{
    return window.audioContext;
};

/**
 * Creates an audio in port for the op with name `portName`
 * When disconnected it will disconnect the previous connected audio node
 * from the op's audio node.
 * @param {CABLES.Op} op - The operator to create the audio port in
 * @param {string} portName - The name of the port
 * @param {AudioNode} audioNode - The audionode incoming connections should connect to
 * @param {number} [inputChannelIndex=0] - If the audio node has multiple inputs, this is the index of the input channel to connect to
 * @returns {CABLES.Port|undefined} - The newly created audio in port or `undefined` if there was an error
 */
WEBAUDIO.createAudioInPort = function (op, portName, audioNode, inputChannelIndex)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
        // return;
    }
    if (!inputChannelIndex)
    {
        inputChannelIndex = 0;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    const port = op.inObject(portName);
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    port.onChange = function ()
    {
        const audioInNode = port.get();
        // when port disconnected, disconnect audio nodes
        if (!audioInNode)
        {
            if (port.webAudio.previousAudioInNode)
            {
                try
                {
                    if (port.webAudio.previousAudioInNode.disconnect) port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                catch (e)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode);
                    }
                    catch (er)
                    {
                        op.log(
                            "Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",
                            e,
                        );
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }
            }
        }
        else
        {
            try
            {
                if (audioInNode.connect)
                {
                    audioInNode.connect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                else op.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
            }
            catch (e)
            {
                op.log("Error: Failed to connect web audio node!", e);
                op.log("port.webAudio.audioNode", port.webAudio.audioNode);
                op.log("audioInNode: ", audioInNode);
                op.log("inputChannelIndex:", inputChannelIndex);
                op.log("audioInNode.connect: ", audioInNode.connect);
                throw e;
            }
        }
        port.webAudio.previousAudioInNode = audioInNode;
    };
    // TODO: Maybe add subtype to audio-node-object?
    return port;
};

/**
 * Sometimes it is necessary to replace a node of a port, if so all
 * connections to this node must be disconnected and connections to the new
 * node must be made.
 * Can be used for both Audio ports as well as AudioParam ports
 * if used with an AudioParam pass e.g. `synth.frequency` as newNode
 * @param {CABLES.Port} port - The port where the audio node needs to be replaced
 * @param oldNode
 * @param newNode
 */
WEBAUDIO.replaceNodeInPort = function (port, oldNode, newNode)
{
    const connectedNode = port.webAudio.previousAudioInNode;
    // check if connected
    if (connectedNode && connectedNode.disconnect)
    {
        try
        {
            connectedNode.disconnect(oldNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not disconnect old audio node. " + e.name + " " + e.message);
        }
        port.webAudio.audioNode = newNode;
        try
        {
            connectedNode.connect(newNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not connect to new node. " + e.name + " " + e.message);
        }
    }
};

/**
 * Creates an audio out port which takes care of (dis-)connecting on it’s own
 * @param {CABLES.op} op - The op to create an audio out port for
 * @param {string} portName - The name of the port to be created
 * @param {AudioNode} audioNode - The audio node to link to the port
 * @returns {(CABLES.Port|undefined)} - The newly created audio out port or `undefined` if there was an error
 */
WEBAUDIO.createAudioOutPort = function (op, portName, audioNode)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
    }

    const port = op.outObject(portName);
    // TODO: Maybe add subtype to audio-node-object?
    port.set(audioNode);
    return port;
};

/**
 * Creates an audio param in port for the op with name portName.
 * The port accepts other audio nodes as signals as well as values (numbers)
 * When the port is disconnected it will disconnect the previous connected audio node
 * from the op's audio node and restore the number value set before.
 * @param {CABLES.Op} op - The operator to create an audio param input port for
 * @param {string} portName - The name of the port to create
 * @param audioNode
 * @param options
 * @param defaultValue
 * @returns {(CABLES.Port|undefined)} - The newly created port, which takes care of (dis-)connecting on its own, or `undefined` if there was an error
 */
WEBAUDIO.createAudioParamInPort = function (op, portName, audioNode, options, defaultValue)
{
    if (!op || !portName || !audioNode)
    {
        op.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode");
        if (op && op.name) op.log("opname: ", op.name);
        op.log("portName", portName);
        op.log("audioNode: ", audioNode);
        return;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    // var port = op.inObject(portName);
    const port = op.inDynamic(
        portName,
        [CONSTANTS.OP.OP_PORT_TYPE_VALUE, CONSTANTS.OP.OP_PORT_TYPE_OBJECT],
        options,
        defaultValue,
    );
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    // port.onLinkChanged = function() {
    //   op.log("onLinkChanged");
    //   if(port.isLinked()) {
    //
    //       if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_) { // value
    //
    //       } else if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT) { // object
    //
    //       }
    //   } else { // unlinked
    //
    //   }
    // };

    port.onChange = function ()
    {
        const audioInNode = port.get();
        const node = port.webAudio.audioNode;
        const audioCtx = WEBAUDIO.getAudioContext();

        if (audioInNode != undefined)
        {
            if (typeof audioInNode === "object" && audioInNode.connect)
            {
                try
                {
                    audioInNode.connect(node);
                }
                catch (e)
                {
                    op.log("Could not connect audio node: ", e);
                    if (e.printStackTrace)
                    {
                        e.printStackTrace();
                    }
                    throw e;
                }
                port.webAudio.previousAudioInNode = audioInNode;
            }
            else
            {
                // tone.js audio param
                if (node._param && node._param.minValue && node._param.maxValue)
                {
                    if (audioInNode >= node._param.minValue && audioInNode <= node._param.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log("Possible AudioParam problem with tone.js op: ", e);
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // native Web Audio param
                else if (node.minValue && node.maxValue)
                {
                    if (audioInNode >= node.minValue && audioInNode <= node.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log(
                                "AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",
                                e,
                            );
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // no min-max values, try anyway
                else
                {
                    try
                    {
                        if (node.setValueAtTime)
                        {
                            node.setValueAtTime(audioInNode, audioCtx.currentTime);
                        }
                        else
                        {
                            node.value = audioInNode;
                        }
                    }
                    catch (e)
                    {
                        op.log("Possible AudioParam problem (without minValue / maxValue): ", e);
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }

                if (port.webAudio.previousAudioInNode && port.webAudio.previousAudioInNode.disconnect)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(node);
                    }
                    catch (e)
                    {
                        op.log("Could not disconnect previous audio node: ", e);
                        throw e;
                    }
                    port.webAudio.previousAudioInNode = undefined;
                }
            }
        }
        else
        {
            // disconnected
            if (port.webAudio.previousAudioInNode)
            {
            }
        }
    };
    return port;
};


/**
 * Loads an audio file and updates the loading indicators when cables is run in the editor.
 * @param {CABLES.Patch} patch - The cables patch, when called from inside an op this is `op.patch`
 * @param {string} url - The url of the audio file to load
 * @param {function} onFinished - The callback to be called when the loading is finished, passes the AudioBuffer
 * @param {function} onError - The callback when there was an error loading the file, the rror message is passed
 * @param loadingTask
 * @see {@link https://developer.mozilla.org/de/docs/Web/API/AudioContext/decodeAudioData}
 */
WEBAUDIO.loadAudioFile = function (patch, url, onFinished, onError, loadingTask)
{
    const audioContext = WEBAUDIO.createAudioContext();

    if (!audioContext) onError(new Error("No Audiocontext"));

    let loadingId = null;
    if (loadingTask || loadingTask === undefined)
    {
        loadingId = patch.loading.start("audio", url);
        if (patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingId, "title": " loading audio (" + url + ")" });
    }
    const request = new XMLHttpRequest();

    if (!url) return;

    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function ()
    {
        patch.loading.finished(loadingId);
        if (patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingId);

        audioContext.decodeAudioData(request.response, onFinished, onError).catch((e) =>
        {
            onError(e);
        });
    };
    request.send();
};

/**
 * Checks if the passed time is a valid time to be used in any of the Tone.js ops.
 * @param {(string|number)} t - The time to check
 * @returns {boolean} - True if time is valid, false if not
 */
WEBAUDIO.isValidToneTime = function (t)
{
    try
    {
        const time = new Tone.Time(t);
    }
    catch (e)
    {
        return false;
    }
    return true;
};

/**
 * Checks if the passed note is a valid note to be used with Tone.js
 * @param {string} note - The note to be checked, e.g. `"C4"`
 * @returns {boolean} - True if the note is a valid note, false otherwise
 */
WEBAUDIO.isValidToneNote = function (note)
{
    try
    {
        Tone.Frequency(note);
    }
    catch (e)
    {
        return false;
    }
    return true;
};



;// CONCATENATED MODULE: ./src/core/sessionvar.js
// todo: old... remove this from ops...

/**
 * todo: old... remove this from ops...
 *
 * @class
 */
const Variable = function ()
{
    let value = null;
    const changedCallbacks = [];

    this.onChanged = function (f)
    {
        changedCallbacks.push(f);
    };

    this.getValue = function ()
    {
        return value;
    };

    this.setValue = function (v)
    {
        value = v;
        this.emitChanged();
    };

    this.emitChanged = function ()
    {
        for (let i = 0; i < changedCallbacks.length; i++)
        {
            changedCallbacks[i]();
        }
    };
};



;// CONCATENATED MODULE: ./src/core/banchprofiler.js
class Branch
{
    constructor(name)
    {
        this.name = name;
        this.dur = 0;
        this._startTime = 0;
        this.childs = [];
    }

    start()
    {
        this._startTime = performance.now();
    }

    end()
    {
        this.dur = performance.now() - this._startTime;
    }

    push(name)
    {
        const b = new Branch(name);
        this.childs.push(b);
        b.start();
        return b;
    }

    print(level)
    {
        level = level || 0;

        let str = "";
        for (let i = 0; i < level; i++) str += "  ";

        for (let i = 0; i < this.childs.length; i++)
        {
            this.childs[i].print(level + 1);
        }
    }
}

// //////////////////////////////////////////

class BranchStack
{
    constructor()
    {
    }

    start()
    {
        this.root = new Branch("Root");
        this.root.start();

        this.current = this.root;
    }

    push(name)
    {
        if (!this.current) this.start();

        const prev = this.current;
        this.current = this.current.push(name);
        this.current.prev = prev;
        this.current.start();
        return this.current;
    }

    pop()
    {
        if (!this.current) return;
        this.current.end();
        this.current = this.current.prev;
    }

    finish()
    {
        this.current.end();
        this.root.print();
        this.current = null;
    }
}




;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniform.js


class cgp_uniform_Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }


    updateValueF() { }

    setValueF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue2F() { }

    setValue2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue3F() { }

    setValue3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue4F() { }

    setValue4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    getSizeBytes()
    {
        if (this._type == "f") return 1 * 4;
        if (this._type == "i") return 1 * 4;
        if (this._type == "2i") return 2 * 4;
        if (this._type == "2f") return 2 * 4;
        if (this._type == "3f") return 3 * 4;
        if (this._type == "4f") return 4 * 4;
        if (this._type == "m4") return 4 * 4 * 4;

        this._log.warn("unknown type getSizeBytes");
        // if (this._type == "t") return "sampler2D";
        // if (this._type == "tc") return "samplerCube";
        // if (this._type == "b") return "bool";

        // if (t == "3f[]") return null; // ignore this for now...
        // if (t == "m4[]") return null; // ignore this for now...
        // if (t == "f[]") return null; // ignore this for now...
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_shader.js




class cgp_shader_Shader
{
    constructor(_cgp, _name)
    {
        if (!_cgp) throw new Error("shader constructed without cgp " + _name);
        this._log = new Logger("cgp_shader");
        this._cgp = _cgp;
        this._name = _name;
        this._uniforms = [];

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";
        this.id = simpleId();
        this._isValid = true;
        this._compileReason = "";
        this.shaderModule = null;
        this._needsRecompile = true;

        this._src = "";
    }

    get isValid()
    {
        return this._isValid;
    }

    get uniforms()
    {
        return this._uniforms;
    }

    getName()
    {
        return this._name;
    }

    setWhyCompile(why)
    {
        this._compileReason = why;
    }

    setSource(src)
    {
        this._src = src;
        this.setWhyCompile("Source changed");
        this._needsRecompile = true;
    }

    compile()
    {
        this._isValid = true;
        console.log("compiling shader...", this._compileReason);
        this._cgp.pushErrorScope();
        this.shaderModule = this._cgp.device.createShaderModule({ "code": this._src });
        this._cgp.popErrorScope("cgp_shader " + this._name, this.error.bind(this));
        this._needsRecompile = false;
    }

    error(e)
    {
        this._isValid = false;
    }


    bind()
    {
        let sizes = {};
        for (let i = 0; i < this._uniforms.length; i++)
        {
            // console.log(this._uniforms[i]);
        }

        if (this._needsRecompile) this.compile();
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";
        return uni;
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";
        return uni;
    }

    /**
     * add a uniform to all shader programs
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniform
     * @returns {Uniform}
     */
    addUniform(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    }


    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
        this._needsRecompile = true;
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgl_shader_default.wgsl
/* harmony default export */ const cgl_shader_default = ("struct VSUniforms\n{\n    modelMatrix: mat4x4<f32>,\n    viewMatrix: mat4x4<f32>,\n    projMatrix: mat4x4<f32>,\n};\n\nstruct FSUniforms\n{\n    color:vec4<f32>\n};\n\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\n@group(0) @binding(1) var<uniform> fsUniforms: FSUniforms;\n\nstruct MyVSInput\n{\n    @location(0) position: vec3<f32>,\n    @location(1) normal: vec3<f32>,\n    @location(2) texcoord: vec2<f32>,\n};\n\nstruct MyVSOutput\n{\n    @builtin(position) position: vec4<f32>,\n    @location(0) normal: vec3<f32>,\n    @location(1) texcoord: vec2<f32>,\n};\n\n@vertex\nfn myVSMain(v: MyVSInput) -> MyVSOutput\n{\n    var vsOut: MyVSOutput;\n    var pos =vec4<f32>(v.position, 1.0);\n\n    var mvMatrix=vsUniforms.viewMatrix * vsUniforms.modelMatrix;\n    vsOut.position = vsUniforms.projMatrix * mvMatrix * pos;\n\n    vsOut.normal = v.normal;\n    vsOut.texcoord = v.texcoord;\n    return vsOut;\n}\n\n@fragment\nfn myFSMain(v: MyVSOutput) -> @location(0) vec4<f32>\n{\n    return fsUniforms.color+vec4<f32>(.5,.5,.5,1.0);\n}\n\n");
;// CONCATENATED MODULE: ./src/core/cgp/cgp_state.js





// https://github.com/greggman/webgpu-utils
// https://developer.chrome.com/blog/from-webgl-to-webgpu/
// https://gpuweb.github.io/gpuweb/explainer/


/**
 * cables webgpu context/state manager
 * @class
 * @namespace external:CGP
 * @hideconstructor
 */
// const Context = function (_patch)
class WebGpuContext extends CGState
{
    constructor(_patch)
    {
        super();

        this.patch = _patch;

        this.gApi = CG.GAPI_WEBGPU;
        this._viewport = [0, 0, 256, 256];
        this._shaderStack = [];
        this._simpleShader = null;

        this._stackCullFaceFacing = [];
        this._stackDepthTest = [];
        this._stackCullFace = [];
        this._stackDepthFunc = [];
        this._stackDepthWrite = [];

        this.DEPTH_FUNCS = [
            "never",
            "always",
            "less",
            "less-equal",
            "greater",
            "greater-equal",
            "equal",
            "not-equal"
        ];

        this.CULL_MODES = [
            "none",
            "back",
            "front",
            "none" // both does not exist in webgpu
        ];
    }


    /// ////////////////////

    getViewPort()
    {
        return [0, 0, this.canvasWidth, this.canvasHeight];
    }

    renderStart(cgp, identTranslate, identTranslateView)
    {
        if (!this._simpleShader)
        {
            this._simpleShader = new cgp_shader_Shader(this, "simple default shader");
            this._simpleShader.setSource(cgl_shader_default);
            this._simpleShader.addUniformFrag("4f", "color", 1, 1, 0, 1);
        }

        this.fpsCounter.startFrame();

        this._startMatrixStacks(identTranslate, identTranslateView);
        this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);

        this.pushShader(this._simpleShader);
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc("less-equal");

        this.emitEvent("beginFrame");
    }

    renderEnd()
    {
        this._endMatrixStacks();

        this.popShader();
        this.popDepthFunc();
        this.popDepthWrite();
        this.popDepthTest();

        this.emitEvent("endFrame");
        this.fpsCounter.endFrame();
    }


    setViewPort(x, y, w, h)
    {
        this._viewport = [x, y, w, h];
    }

    /**
     * @function getViewPort
     * @memberof Context
     * @instance
     * @description get current gl viewport
     * @returns {Array} array [x,y,w,h]
     */
    getViewPort()
    {
        return this._viewPort;
    }


    createMesh(geom, glPrimitive)
    {
        return new CGP.Mesh(this, geom, glPrimitive);
    }

    getShader()
    {
        return {};
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
    */
    pushShader(shader)
    {
        this._shaderStack.push(shader);
        // currentShader = shader;
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    popShader()
    {
        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        // currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    getShader()
    {
        return this._shaderStack[this._shaderStack.length - 1];
        // if (currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == currentShader.offScreenPass) === true) return currentShader;
        // for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    pushErrorScope()
    {
        this.device.pushErrorScope("validation");
    }

    popErrorScope(name, cb)
    {
        this.device.popErrorScope().then((error) =>
        {
            if (error)
            {
                this.patch.emitEvent("criticalError", { "title": "WebGPU error \"" + name + "\"", "codeText": error.message });
                // if (this.patch.isEditorMode())console.log("WebGPU error " + this._name, error.message);

                console.warn("[cgp]", name, error.message, error, cb);
                if (cb)cb(error);
            }
        });
    }

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthTest(b)
    {
        this._stackDepthTest.push(b);
    }

    /**
     * current state of depth testing
     * @function stateDepthTest
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest()
    {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
    }

    /**
     * pop depth testing state
     * @function popDepthTest
     * @memberof Context
     * @instance
     */
    popDepthTest()
    {
        this._stackDepthTest.pop();
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthWrite
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthWrite(b)
    {
        b = b || false;
        this._stackDepthWrite.push(b);
    }

    /**
     * current state of depth writing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite()
    {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
    }

    /**
     * pop depth writing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthWrite()
    {
        this._stackDepthWrite.pop();
    }


    // --------------------------------------
    // state depthfunc


    /**
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {string} f depth compare func
     */
    pushDepthFunc(f)
    {
        this._stackDepthFunc.push(f);
    }

    /**
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {string}
     */
    stateDepthFunc()
    {
        if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
        return false;
    }

    /**
     * pop depth compare func
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc()
    {
        this._stackDepthFunc.pop();
    }



    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFace
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(b)
    {
        this._stackCullFace.push(b);
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace()
    {
        return this._stackCullFace[this._stackCullFace.length - 1];
    }

    /**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
    popCullFace()
    {
        this._stackCullFace.pop();
    }


    // --------------------------------------
    // state CullFace Facing


    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @memberof Context
     * @param b
     * @instance
     */

    pushCullFaceFacing(b)
    {
        this._stackCullFaceFacing.push(b);
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing()
    {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing()
    {
        this._stackCullFaceFacing.pop();
    }
}


;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniformbuffer.js
class UniformBuffer
{
    constructor(shader, shaderType)
    {
        this._shaderType = shaderType; // frag, vert...
        this._shader = shader;
        this._cgp = shader._cgp;

        this._gpuBuffer = null;
        this._values = null;

        this._sizeBytes = 0;
        this.update();
    }

    update()
    {
        this._sizeBytes = 0;

        for (let i = 0; i < this._shader.uniforms.length; i++)
        {
            const uni = this._shader.uniforms[i];

            if (this._shaderType == uni.shaderType)
                this._sizeBytes += uni.getSizeBytes();
        }

        this._gpuBuffer = this._cgp.device.createBuffer(
            {
                "size": this._sizeBytes,
                "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            });


        this._values = new Float32Array(this._sizeBytes / 4);
        this.updateUniformValues();
    }

    updateUniformValues()
    {
        let count = 0;
        for (let i = 0; i < this._shader.uniforms.length; i++)
        {
            const uni = this._shader.uniforms[i];
            if (uni.shaderType == this._shaderType)
            {
                if (uni.getSizeBytes() / 4 > 1)
                {
                    for (let j = 0; j < uni.getValue().length; j++)
                    {
                        this._values[count] = uni.getValue()[j];
                        count++;
                    }
                }
                else
                {
                    this._values[count] = uni.getValue();
                    count++;
                }
            }
        }


        this._cgp.device.queue.writeBuffer(
            this._gpuBuffer,
            0,
            this._values.buffer,
            this._values.byteOffset,
            this._values.byteLength
        );
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_pipeline.js



class Pipeline
{
    constructor(_cgp, _name)
    {
        if (!_cgp) throw new Error("Pipeline constructed without cgp " + _name);
        this._cgp = _cgp;
        this._isValid = true;

        this._pipeCfg = null;
        this._renderPipeline = null;

        this._fsUniformBuffer = null;
        this._vsUniformBuffer = null;

        this._old = {};


        this.DEPTH_COMPARE_FUNCS_STRINGS = [
            "never",
            "less",
            "equal",
            "lessequal",
            "greater",
            "notequal",
            "greaterequal",
            "always"];
    }

    get isValid() { return this._isValid; }

    setPipeline(shader, mesh)
    {
        if (!mesh || !shader)
        {
            console.log("pipeline unknown shader/mesh");
            return;
        }

        let needsRebuild =
            !this._renderPipeline ||
            !this._pipeCfg ||
            this._old.mesh != mesh ||
            this._old.shader != shader ||
            mesh.needsPipelineUpdate ||
            shader.needsPipelineUpdate;

        if (this._pipeCfg)
        {
            if (this._pipeCfg.depthStencil.depthWriteEnabled != this._cgp.stateDepthWrite())
            {
                needsRebuild = true;
                this._pipeCfg.depthStencil.depthWriteEnabled = this._cgp.stateDepthWrite();
            }

            if (this._cgp.stateDepthTest() === false)
            {
                if (this._pipeCfg.depthStencil.depthCompare != "never")
                {
                    this._pipeCfg.depthStencil.depthCompare = "never";
                    needsRebuild = true;
                }
            }
            else
            if (this._pipeCfg.depthStencil.depthCompare != this._cgp.stateDepthFunc())
            {
                needsRebuild = true;
                this._pipeCfg.depthStencil.depthCompare = this._cgp.stateDepthFunc();
            }


            if (this._cgp.stateCullFace() === false)
            {
                if (this._pipeCfg.primitive.cullMode != "none")
                {
                    needsRebuild = true;
                    this._pipeCfg.primitive.cullMode = "none";
                }
            }
            else
            {
                needsRebuild = true;
                this._pipeCfg.primitive.cullMode = this._cgp.stateCullFaceFacing();
            }
        }

        if (needsRebuild)
        {
            if (!this._pipeCfg || this._old.shader != shader) this._pipeCfg = this.getPiplelineObject(shader, mesh);

            this._old.shader = shader;
            this._old.mesh = mesh;


            // try
            // {
            this._renderPipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);
            // }
            // catch (e)
            // {
            //     console.error(e.message);
            // }

            this._bindUniforms(shader);
        }

        if (this._renderPipeline && this._isValid)
        {
            mat4.copy(this._matModel, this._cgp.mMatrix);
            mat4.copy(this._matView, this._cgp.vMatrix);
            mat4.copy(this._matProj, this._cgp.pMatrix);

            this._cgp.device.queue.writeBuffer(
                this._vsUniformBuffer,
                0,
                this._vsUniformValues.buffer,
                this._vsUniformValues.byteOffset,
                this._vsUniformValues.byteLength
            );

            this._uniBufFrag.updateUniformValues();

            this._cgp.passEncoder.setPipeline(this._renderPipeline);
            this._cgp.passEncoder.setBindGroup(0, this._bindGroup);
            // this._pipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);
        }
    }

    getPiplelineObject(shader, mesh)
    {
        const pipeCfg = {
            "layout": "auto",
            "vertex": {
                "module": shader.shaderModule,
                "entryPoint": "myVSMain",
                "buffers": [
                    // position
                    {
                        "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 0, "offset": 0, "format": "float32x3" },
                        ],
                    },
                    // normals
                    {
                        "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 1, "offset": 0, "format": "float32x3" },
                        ],
                    },
                    // texcoords
                    {
                        "arrayStride": 2 * 4, // 2 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 2, "offset": 0, "format": "float32x2", },
                        ],
                    },
                ],
            },
            "fragment": {
                "module": shader.shaderModule,
                "entryPoint": "myFSMain",
                "targets": [
                    { "format": this._cgp.presentationFormat },
                ],
            },
            "primitive": {
                "topology": "triangle-list",
                "cullMode": "back", // back/none/front

                // "point-list",
                // "line-list",
                // "line-strip",
                // "triangle-list",
                // "triangle-strip"
            },
            "depthStencil": {
                "depthWriteEnabled": true,
                "depthCompare": "less",
                "format": "depth24plus",
            },

        };

        return pipeCfg;
    }


    _bindUniforms(shader)
    {
        this._cgp.pushErrorScope();


        const counts = { };

        this._uniBufFrag = new UniformBuffer(shader, "frag");

        // for (let i = 0; i < shader.uniforms.length; i++)
        // {
        //     const uni = shader.uniforms[i];
        //     const type = uni.shaderType;
        //     counts[type] = counts[type] || 0;


        //     counts[type] += uni.getSizeBytes();
        // }
        // console.log(counts, counts.frag);


        const vUniformBufferSize = 3 * 16 * 4; // 2 mat4s * 16 floats per mat * 4 bytes per float
        // const fUniformBufferSize = counts.frag;// 2 * 3 * 4; // 1 vec3 * 3 floats per vec3 * 4 bytes per float

        this._vsUniformBuffer = this._cgp.device.createBuffer({
            "size": vUniformBufferSize,
            "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        // this._fsUniformBuffer = this._cgp.device.createBuffer({
        //     "size": fUniformBufferSize,
        //     "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        // });

        // this._fsUniformValues = new Float32Array(counts.frag / 4);

        this._vsUniformValues = new Float32Array(vUniformBufferSize / 4);

        this._matModel = this._vsUniformValues.subarray(0, 16);
        this._matView = this._vsUniformValues.subarray(16, 32);
        this._matProj = this._vsUniformValues.subarray(32, 48);


        // this._fsUniformValues[1] = 1.0;
        // this._fsUniformValues[0] = 1.0;
        // const lightDirection = this._fsUniformValues.subarray(0, 3);

        // console.log("pipeline bindgrouplayout ", pipeline.getBindGroupLayout(0));

        this._bindGroup = this._cgp.device.createBindGroup(
            {
                "layout": this._renderPipeline.getBindGroupLayout(0),
                "entries": [
                    { "binding": 0, "resource": { "buffer": this._vsUniformBuffer } },
                    { "binding": 1, "resource": { "buffer": this._uniBufFrag._gpuBuffer } }
                    //   { binding: 2, resource: sampler },
                    //   { binding: 3, resource: tex.createView() },
                ],
            });

        this._cgp.device.queue.writeBuffer(
            this._vsUniformBuffer,
            0,
            this._vsUniformValues.buffer,
            this._vsUniformValues.byteOffset,
            this._vsUniformValues.byteLength
        );

        this._uniBufFrag.updateUniformValues();
        this._cgp.popErrorScope("cgp_pipeline end", (e) =>
        {
            this._isValid = false;
        });
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_mesh.js



class cgp_mesh_Mesh
{
    constructor(_cgp, __geom)
    {
        this._log = new Logger("cgl_mesh");
        this._cgp = _cgp;
        this._geom = null;
        this.numIndex = 0;

        this._pipe = new Pipeline(this._cgp);

        this._numNonIndexed = 0;
        this._positionBuffer = null;
        this._bufVerticesIndizes = null;
        this._attributes = [];

        this._needsPipelineUpdate = false;

        if (__geom) this.setGeom(__geom);
    }

    _createBuffer(device, data, usage)
    {
        const buffer = device.createBuffer({
            "size": data.byteLength,
            "usage": usage,
            "mappedAtCreation": true,
        });
        const dst = new data.constructor(buffer.getMappedRange());
        dst.set(data);
        buffer.unmap();
        return buffer;
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geom geometry
     * @param {boolean} removeRef
     */
    setGeom(geom, removeRef)
    {
        this._needsPipelineUpdate = true;
        this._geom = geom;
        this._disposeAttributes();

        this._positionBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertices), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        let vi = geom.verticesIndices;
        if (!geom.isIndexed()) vi = Array.from(Array(geom.vertices.length / 3).keys());
        this._numIndices = vi.length;
        this._indicesBuffer = this._createBuffer(this._cgp.device, new Uint32Array(vi), GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);

        if (geom.texCoords && geom.texCoords.length) this.setAttribute("texCoords", geom.texCoords, 2);
        if (geom.vertexNormals && geom.vertexNormals.length) this.setAttribute("normals", geom.vertexNormals, 3);
    }


    _disposeAttributes()
    {
        this._needsPipelineUpdate = true;
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._attributes[i].buffer.destroy();
        }
        this._attributes.length = 0;
    }

    dispose()
    {
        this._disposeAttributes();
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} name attribute name
     * @param {Array} array data
     * @param {Number} itemSize
     * @param {Object} options
     */
    setAttribute(name, array, itemSize, options)
    {
        if (!array)
        {
            this._log.error("mesh addAttribute - no array given! " + name);
            throw new Error();
        }

        for (let i = 0; i < this._attributes.length; i++)
        {
            const attr = this._attributes[i];
            if (attr.name == name)
            {
                // if (attr.numItems === numItems)
                // {
                // }
                // else
                // {
                //     // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                //     this._resizeAttr(array, attr);
                // }
                // normalBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertexNormals), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

                // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
                // this._bufferArray(array, attr);

                return attr;
            }
        }

        const buffer = this._createBuffer(this._cgp.device, new Float32Array(array), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        const attr = {
            "buffer": buffer,
            "name": name,
            // "cb": cb,
            // "itemSize": itemSize,
            // "numItems": numItems,
            // "startItem": 0,
            // "instanced": instanced,
            // "type": type
        };
        this._attributes.push(attr);

        return attr;
    }

    // setPipeline()
    // {

    //     this._cgp.passEncoder.setPipeline(this._pipe.getPiplelineObject(this._cgp.getShader(),this));


    // }

    render()
    {
        if (!this._positionBuffer) return;

        // this.setPipeline();

        const shader = this._cgp.getShader();
        if (shader)shader.bind();

        if (!this._cgp.getShader() || !this._cgp.getShader().isValid)
        {
            return;
        }

        this._pipe.setPipeline(this._cgp.getShader(), this);

        if (!this._pipe.isValid)
        {
            return;
        }


        this._cgp.passEncoder.setVertexBuffer(0, this._positionBuffer);
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._cgp.passEncoder.setVertexBuffer(i + 1, this._attributes[i].buffer);
        }

        this._cgp.passEncoder.setIndexBuffer(this._indicesBuffer, "uint32");

        if (this._numNonIndexed)
            this._cgp.passEncoder.draw(this._numIndices);
        else
            this._cgp.passEncoder.drawIndexed(this._numIndices);

        // if (shader)shader.unbind();
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_texture.js


class cgp_texture_Texture
{
    constructor(_cgp, options)
    {
        if (!_cgp) throw new Error("no cgp");
        this._log = new Logger("cgp_texture");
        this._cgp = _cgp;
        this.id = CABLES.uuid();

        options = options || {};

        this.name = options.name || "unknown";
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this.width = img.width;
        this.height = img.height;

        this.textureType = "rgba8unorm";

        const textureDescriptor = {
            // Unlike in WebGL, the size of our texture must be set at texture creation time.
            // This means we have to wait until the image is loaded to create the texture, since we won't
            // know the size until then.
            "size": { "width": img.width, "height": img.height },
            "format": this.textureType,
            "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        };
        const texture = this._cgp.device.createTexture(textureDescriptor);

        this._cgp.device.queue.copyExternalImageToTexture({ "source": img }, { "texture": texture }, textureDescriptor.size);

        return texture;
    }

    getInfo()
    {
        const tex = this;
        const obj = {};

        obj.name = tex.name;
        obj.size = tex.width + " x " + tex.height;

        obj.textureType = tex.textureType;

        return obj;
    }
}


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgp
 * @param {String} url
 * @param {Function} onFinished
 * @param {Object} settings
 * @return {Texture}
 */
cgp_texture_Texture.load = function (cgp, url, onFinished, settings)
{
    fetch(url).then((response) =>
    {
        response.blob().then((blob) =>
        {
            createImageBitmap(blob).then((imgBitmap) =>
            {
                const texture = new cgp_texture_Texture(cgp, { "name": url });
                texture.initTexture(imgBitmap);
                if (onFinished)onFinished(texture);
                else console.log("Texture.load no onFinished callback");
            });
        });
    });
};

;// CONCATENATED MODULE: ./src/core/cgp/index.js






const cgp_CGP = {
    "Context": WebGpuContext,
    "Shader": cgp_shader_Shader,
    "Mesh": cgp_mesh_Mesh,
    "Pipeline": Pipeline,
    "Texture": cgp_texture_Texture,
};

window.CGP = cgp_CGP;




;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer.js



// todo: convert to prototyped...

/**
 * a framebuffer
 * @constructor
 * @class
 * @constructs Framebuffer
 * @param {Context} _cgl cgl
 * @param {Number} _w width
 * @param {Number} _h height
 * @param {Object} options
 */
const Framebuffer = function (_cgl, _w, _h, options)
{
    const cgl = _cgl;
    this._log = new Logger("Framebuffer");
    this.valid = true;

    let depthTextureExt = cgl.gl.DEPTH_TEXTURE;
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBKIT_WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("MOZ_WEBGL_depth_texture");

    if (!depthTextureExt)
    {
        cgl.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
        // return;
    }

    let width = _w || 512;
    let height = _h || 512;

    options = options || {
        "isFloatingPointTexture": false,
    };

    if (!options.hasOwnProperty("clear")) options.clear = true;
    if (!options.hasOwnProperty("filter")) options.filter = Texture.FILTER_LINEAR;

    const texture = new Texture(cgl, {
        "isFloatingPointTexture": options.isFloatingPointTexture,
        "filter": options.filter,
        "wrap": options.wrap || Texture.CLAMP_TO_EDGE
    });

    let textureDepth = null;
    if (depthTextureExt)
    {
        textureDepth = new Texture(cgl, {
            "isDepthTexture": true,
        });
    }
    this._options = options;

    const frameBuf = cgl.gl.createFramebuffer();
    const depthBuffer = cgl.gl.createRenderbuffer();

    this.getWidth = function ()
    {
        return width;
    };
    this.getHeight = function ()
    {
        return height;
    };

    /**
     * get native gl framebuffer
     * @function getGlFrameBuffer
     * @memberof Framebuffer
     * @returns {Object} framebuffer
     */
    this.getGlFrameBuffer = function ()
    {
        return frameBuf;
    };

    /**
     * get depth renderbuffer
     * @function getDepthRenderBuffer
     * @memberof Framebuffer
     * @returns {Object} renderbuffer
     */
    this.getDepthRenderBuffer = function ()
    {
        return depthBuffer;
    };

    /**
     * get color texture
     * @function getTextureColor
     * @memberof Framebuffer
     * @returns {Texture} rgba texture
     */
    this.getTextureColor = function ()
    {
        return texture;
    };

    /**
     * get depth texture
     * @function getTextureDepth
     * @memberof Framebuffer
     * @returns {Texture} depth texture
     */
    this.getTextureDepth = function ()
    {
        return textureDepth;
    };

    this.setFilter = function (f)
    {
        texture.filter = f;
        texture.setSize(width, height);
    };

    this.setSize = function (w, h)
    {
        if (w < 2) w = 2;
        if (h < 2) h = 2;

        width = Math.ceil(w);
        height = Math.ceil(h);

        cgl.profileData.profileFrameBuffercreate++;

        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, depthBuffer);

        texture.setSize(width, height);
        if (textureDepth) textureDepth.setSize(width, height);

        // if(depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width,height);
        if (depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width, height);

        cgl.gl.framebufferTexture2D(cgl.gl.FRAMEBUFFER, cgl.gl.COLOR_ATTACHMENT0, cgl.gl.TEXTURE_2D, texture.tex, 0);

        if (depthTextureExt)
        {
            cgl.gl.framebufferRenderbuffer(cgl.gl.FRAMEBUFFER, cgl.gl.DEPTH_ATTACHMENT, cgl.gl.RENDERBUFFER, depthBuffer);
            cgl.gl.framebufferTexture2D(
                cgl.gl.FRAMEBUFFER,
                cgl.gl.DEPTH_ATTACHMENT, // safari needs DEPTH_ATTACHMENT NOT DEPTH_ATTACHMENT16
                // cgl.gl.DEPTH_COMPONENT16,
                cgl.gl.TEXTURE_2D,
                textureDepth.tex,
                0,
            );
        }

        if (!cgl.gl.isFramebuffer(frameBuf)) throw new Error("Invalid framebuffer");
        const status = cgl.gl.checkFramebufferStatus(cgl.gl.FRAMEBUFFER);

        switch (status)
        {
        case cgl.gl.FRAMEBUFFER_COMPLETE:
            break;
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", width, height, texture.tex, depthBuffer);
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            this.valid = false;
            this._log.warn(width, height, options);

            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        case 0x8CDB:
            this._log.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");
            this.valid = false;
            break;
        default:
            this._log.warn("incomplete framebuffer", status);
            this.valid = false;
            throw new Error("Incomplete framebuffer: " + status);
        }

        cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, null);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, null);
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, null);
    };

    this.renderStart = function ()
    {
        cgl.pushModelMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.pushGlFrameBuffer(frameBuf);
        cgl.pushFrameBuffer(this);

        cgl.pushPMatrix();
        cgl.gl.viewport(0, 0, width, height);

        if (this._options.clear)
        {
            cgl.gl.clearColor(0, 0, 0, 0);
            cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
        }
    };

    this.renderEnd = function ()
    {
        cgl.popPMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, cgl.popGlFrameBuffer());
        cgl.popFrameBuffer();

        cgl.popModelMatrix();
        cgl.resetViewPort();
    };


    this.delete = function ()
    {
        texture.delete();
        this.valid = false;
        if (textureDepth) textureDepth.delete();
        cgl.gl.deleteRenderbuffer(depthBuffer);
        cgl.gl.deleteFramebuffer(frameBuf);
    };

    this.dispose = this.delete;

    this.setSize(width, height);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer2.js
// * see framebuffer1






const Framebuffer2 = function (cgl, w, h, options)
{
    this._log = new Logger("cgl_framebuffer2");
    if (cgl.glVersion == 1) return this._log.error("framebuffer2 used on webgl1");
    this.Framebuffer2DrawTargetsDefault = null;
    this.Framebuffer2BlittingFramebuffer = null;
    this.Framebuffer2FinalFramebuffer = null;
    this._cgl = cgl;

    this._cgl.printError("before framebuffer2 constructor");

    this._width = 0;
    this._height = 0;
    this.valid = true;

    this._depthRenderbuffer = null;
    this._frameBuffer = null;
    this._textureFrameBuffer = null;
    this._colorRenderbuffers = [];
    this._drawTargetArray = [];
    this._disposed = false;

    if (!this.Framebuffer2BlittingFramebuffer) this.Framebuffer2BlittingFramebuffer = cgl.gl.createFramebuffer();
    if (!this.Framebuffer2FinalFramebuffer) this.Framebuffer2FinalFramebuffer = cgl.gl.createFramebuffer();

    if (!this.Framebuffer2DrawTargetsDefault) this.Framebuffer2DrawTargetsDefault = [cgl.gl.COLOR_ATTACHMENT0];

    this._options = options || {
        "isFloatingPointTexture": false,
    };

    // this._cgl.printError("fb2 before");

    this.name = this._options.name || "unknown";

    this._cgl.profileData.addHeavyEvent("framebuffer create", this.name);

    if (!this._options.hasOwnProperty("numRenderBuffers")) this._options.numRenderBuffers = 1;
    if (!this._options.hasOwnProperty("depth")) this._options.depth = true;
    if (!this._options.hasOwnProperty("clear")) this._options.clear = true;
    if (!this._options.hasOwnProperty("multisampling"))
    {
        this._options.multisampling = false;
        this._options.multisamplingSamples = 0;
    }

    if (this._options.multisamplingSamples)
    {
        if (this._cgl.glSlowRenderer) this._options.multisamplingSamples = 0;
        if (!this._cgl.gl.MAX_SAMPLES) this._options.multisamplingSamples = 0;
        else this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples);
    }

    if (!this._options.hasOwnProperty("filter")) this._options.filter = Texture.FILTER_LINEAR;
    if (!this._options.hasOwnProperty("wrap")) this._options.wrap = Texture.WRAP_REPEAT;

    this._numRenderBuffers = this._options.numRenderBuffers;
    this._colorTextures = [];

    this.clearColors = [];
    for (let i = 0; i < this._numRenderBuffers; i++) this.clearColors.push([0, 0, 0, 1]);


    if (!options.pixelFormat)
    {
        if (options.isFloatingPointTexture) this._options.pixelFormat = Texture.PFORMATSTR_RGBA32F;
        else this._options.pixelFormat = Texture.PFORMATSTR_RGBA8UB;
    }


    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i] = new Texture(cgl, {
            "name": "fb2 " + this.name + " " + i,
            "isFloatingPointTexture": this._options.isFloatingPointTexture,
            "anisotropic": this._options.anisotropic || 0,
            "pixelFormat": this._options.pixelFormat,
            "filter": this._options.filter,
            "wrap": this._options.wrap,
        });
    }



    let fil = Texture.FILTER_NEAREST;
    if (this._options.shadowMap) fil = Texture.FILTER_LINEAR;

    const defaultTexSize = 512;

    if (this._options.depth)
    {
        this._textureDepth = new Texture(cgl,
            {
                "name": "fb2 depth " + this.name,
                "isDepthTexture": true,
                "filter": fil,
                "shadowMap": this._options.shadowMap || false,
                "width": w || defaultTexSize,
                "height": h || defaultTexSize,
            });
    }

    if (cgl.aborted) return;

    this.setSize(w || defaultTexSize, h || defaultTexSize);

    this._cgl.printError("framebuffer2 constructor");
};

Framebuffer2.prototype.getWidth = function ()
{
    return this._width;
};
Framebuffer2.prototype.getHeight = function ()
{
    return this._height;
};

Framebuffer2.prototype.getGlFrameBuffer = function ()
{
    return this._frameBuffer;
};

Framebuffer2.prototype.getDepthRenderBuffer = function ()
{
    return this._depthRenderbuffer;
};

Framebuffer2.prototype.getTextureColor = function ()
{
    return this._colorTextures[0];
};

Framebuffer2.prototype.getTextureColorNum = function (i)
{
    return this._colorTextures[i];
};

Framebuffer2.prototype.getTextureDepth = function ()
{
    return this._textureDepth;
};

Framebuffer2.prototype.setFilter = function (f)
{
    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].filter = f;
        this._colorTextures[i].setSize(this._width, this._height);
    }
};

Framebuffer2.prototype.delete = Framebuffer2.prototype.dispose = function ()
{
    this._disposed = true;
    let i = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].delete();
    // this._texture.delete();
    if (this._textureDepth) this._textureDepth.delete();
    for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuffer);
    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
};

Framebuffer2.prototype.setSize = function (w, h)
{
    if (this._disposed) return this._log.warn("disposed framebuffer setsize...");
    this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);

    let i = 0;

    this._width = this._cgl.checkTextureSize(w);
    this._height = this._cgl.checkTextureSize(h);

    this._cgl.profileData.profileFrameBuffercreate++;

    if (this._frameBuffer)
    {
        for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
        // this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffer);
        this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
        this._cgl.gl.deleteFramebuffer(this._frameBuffer);
        this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
    }

    this._frameBuffer = this._cgl.gl.createFramebuffer();
    this._textureFrameBuffer = this._cgl.gl.createFramebuffer();

    const depth = this._options.depth;

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].setSize(this._width, this._height);
    }

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        const renderBuffer = this._cgl.gl.createRenderbuffer();

        // color renderbuffer

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, renderBuffer);

        const info = Texture.setUpGlPixelFormat(this._cgl, this._options.pixelFormat);
        let internFormat = info.glInternalFormat;

        // if (this._options.isFloatingPointTexture)
        // {
        if (CGL.Texture.isPixelFormatHalfFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        else if (CGL.Texture.isPixelFormatFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._log.warn("no linear pixelformat,using nearest");
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RG16F)
        // {
        //     const extcb = this._cgl.enableExtension("EXT_color_buffer_float");

        //     if (!this._cgl.enableExtension("OES_texture_float_linear"))
        //     {
        //         console.log("no linear pixelformat,switching to nearest");
        //         this._options.filter = Texture.FILTER_NEAREST;
        //         this.setFilter(this._options.filter);
        //     }
        // }
        // }

        if (this._options.multisampling && this._options.multisamplingSamples)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, internFormat, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, internFormat, this._width, this._height);
        }



        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, renderBuffer);
        this._colorRenderbuffers[i] = renderBuffer;
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    }

    if (this._options.depth)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
    }

    // depth renderbuffer

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);


    let depthType = this._cgl.gl.DEPTH_COMPONENT32F;

    if (this._cgl.glSlowRenderer) depthType = this._cgl.gl.DEPTH_COMPONENT16;
    if (depth)
    {
        this._textureDepth.setSize(this._width, this._height);
        this._depthRenderbuffer = this._cgl.gl.createRenderbuffer();

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
        if (this._options.isFloatingPointTexture)
        {
            if (this._options.multisampling) this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }
        else if (this._options.multisampling)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            // this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,depthType, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }

        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    this._drawTargetArray.length = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);


    if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) this._log.warn("invalid framebuffer");// throw new Error("Invalid framebuffer");
    const status = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);

    if (status != this._cgl.gl.FRAMEBUFFER_COMPLETE)
    {
        this._log.error("framebuffer incomplete: " + this.name, this);
        this._log.log("options", this._options);
        this._log.log("options pixelformat", this._options.pixelFormat);

        switch (status)
        {
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this);
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        default:
            this.valid = false;
            this._log.warn("incomplete framebuffer", status, this._frameBuffer);
            this._cgl.printError();
            this._cgl.exitError("Framebuffer incomplete...");

            this._frameBuffer = null;
            // debugger;
            throw new Error("Incomplete framebuffer: " + status);

        // throw("Incomplete framebuffer: " + status);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);

    // this._cgl.printError("fb setsize");
};

Framebuffer2.prototype.renderStart = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderStart...");
    this._cgl.checkFrameStarted("fb2 renderstart");
    this._cgl.pushModelMatrix(); // needed ??

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
    this._cgl.pushGlFrameBuffer(this._frameBuffer);
    this._cgl.pushFrameBuffer(this);

    this._cgl.pushPMatrix();
    this._cgl.pushViewPort(0, 0, this._width, this._height);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    if (this._options.clear)
    {
        this._cgl.gl.clearColor(0, 0, 0, 0);
        this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT);
    }
};

Framebuffer2.prototype.clear = function ()
{
    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    }
    else this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, this.clearColors[i]);
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
};

Framebuffer2.prototype.renderEnd = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderEnd...");
    this._cgl.popPMatrix();

    this._cgl.profileData.profileFramebuffer++;


    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);

        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
        this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);

        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[i]);


            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);

            // this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, [0.0, 0.0, 0.0, 1.0]);



            let flags = this._cgl.gl.COLOR_BUFFER_BIT;
            if (i == 0) flags |= this._cgl.gl.DEPTH_BUFFER_BIT;

            this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, flags, this._cgl.gl.NEAREST);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());
    this._cgl.popFrameBuffer();

    this._cgl.popModelMatrix();
    // this._cgl.resetViewPort();
    this._cgl.popViewPort();


    if (this._colorTextures[0].filter == Texture.FILTER_MIPMAP)
    {
        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex);
            this._colorTextures[i].updateMipMap();
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        }
    }
};



/// ///////

;// CONCATENATED MODULE: ./src/core/cgl/cgl_marker.js
const Marker = function (_cgl) // deprecated...
{
    this.draw = function (cgl, _size, depthTest) {};
};

const WirePoint = function (cgl) // deprecated...
{
    this.render = function (_cgl, _size) {};
};

const WireCube = function (cgl) // deprecated...
{
    this.render = function (_cgl, sizeX, sizeY, sizeZ) {};
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_unicolorshader.js


class UniColorShader
{
    constructor(_cgl)
    {
        this.shader = new CGL.Shader(_cgl, "markermaterial");

        const frag = ""
            .endl() + "void main()"
            .endl() + "{"
            .endl() + "    outColor = vec4(color.rgb,1.0);"
            .endl() + "}";


        const vert = ""
            .endl() + "IN vec3 vPosition;"
            .endl() + "UNI mat4 projMatrix;"
            .endl() + "UNI mat4 mvMatrix;"

            .endl() + "void main()"
            .endl() + "{"
            .endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);"
            .endl() + "}";

        this.shader.setSource(vert, frag);
        this.coloruni = this.shader.addUniformFrag("4f", "color", [1, 0.777, 1, 1]);
    }

    setColor(r, g, b, a)
    {
        this.coloruni.set(r, g, b, a);
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/index.js






















const cgl_CGL = {
    "Framebuffer": Framebuffer,
    "Framebuffer2": Framebuffer2,
    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "Marker": Marker,
    "WirePoint": WirePoint,
    "WireCube": WireCube,
    "MatrixStack": MatrixStack,
    "Mesh": Mesh,
    "MESH": MESH,
    "ShaderLibMods": ShaderLibMods,
    "Shader": Shader,
    "Uniform": Uniform,
    "MESHES": MESHES,
    "Context": Context,
    "Texture": Texture,
    "TextureEffect": TextureEffect,
    "isWindows": isWindows,
    "getWheelSpeed": getWheelSpeed,
    "getWheelDelta": getWheelDelta,
    "onLoadingAssetsFinished": onLoadingAssetsFinished,
    "ProfileData": ProfileData,
    "UniColorShader": UniColorShader,
    ...constants_CONSTANTS.BLEND_MODES,
    ...constants_CONSTANTS.SHADER,
    ...constants_CONSTANTS.MATH,
    ...constants_CONSTANTS.BLEND_MODES,
};

window.CGL = cgl_CGL;





;// CONCATENATED MODULE: ./src/core/index.js




















window.CABLES = window.CABLES || {};

CABLES.CGL = cgl_CGL;
CABLES.CG = CG;
CABLES.CGP = cgp_CGP;
CABLES.EMBED = EMBED;
CABLES.Link = Link;
CABLES.Port = Port;
CABLES.Op = Op;
CABLES.Profiler = Profiler;
CABLES.Patch = core_patch;
CABLES.Instancing = Instancing;
CABLES.Timer = Timer;
CABLES.WEBAUDIO = WEBAUDIO;
CABLES.Variable = Variable;
CABLES.LoadingStatus = LoadingStatus;
CABLES.now = now;
CABLES.internalNow = internalNow;
CABLES.BranchStack = BranchStack;
CABLES.Branch = Branch;


CABLES = Object.assign(CABLES,
    base64_namespaceObject,
    utils_namespaceObject,
    anim_namespaceObject,
    CONSTANTS.PORT,
    CONSTANTS.PACO,
    CONSTANTS.ANIM,
    CONSTANTS.OP
);

/* harmony default export */ const core = (CABLES);

if (!(function () { return !this; }())) console.warn("not in strict mode: index core"); // eslint-disable-line

CABLES = __webpack_exports__["default"];
/******/ })()
;


var CABLES = CABLES || {}; CABLES.build = {"timestamp":1723710716430,"created":"2024-08-15T08:31:56.430Z","git":{"branch":"master","commit":"22a0542307b9bba8a1e76e6acb27443d5e25af98","date":"1723443356","message":"better log"}};
(()=>{"use strict";var t={d:(n,a)=>{for(var r in a)t.o(a,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:a[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ARRAY_TYPE:()=>f,EPSILON:()=>M,RANDOM:()=>l,equals:()=>d,setMatrixArrayType:()=>v,toRadian:()=>m});var a={};t.r(a),t.d(a,{LDU:()=>j,add:()=>z,adjoint:()=>S,clone:()=>y,copy:()=>p,create:()=>x,determinant:()=>R,equals:()=>Y,exactEquals:()=>Q,frob:()=>V,fromRotation:()=>D,fromScaling:()=>F,fromValues:()=>w,identity:()=>q,invert:()=>P,mul:()=>_,multiply:()=>T,multiplyScalar:()=>X,multiplyScalarAndAdd:()=>Z,rotate:()=>I,scale:()=>E,set:()=>g,str:()=>L,sub:()=>B,subtract:()=>O,transpose:()=>A});var r={};t.r(r),t.d(r,{add:()=>it,clone:()=>k,copy:()=>U,create:()=>N,determinant:()=>J,equals:()=>ft,exactEquals:()=>Mt,frob:()=>ot,fromRotation:()=>at,fromScaling:()=>rt,fromTranslation:()=>ut,fromValues:()=>C,identity:()=>W,invert:()=>H,mul:()=>lt,multiply:()=>K,multiplyScalar:()=>ct,multiplyScalarAndAdd:()=>st,rotate:()=>$,scale:()=>tt,set:()=>G,str:()=>et,sub:()=>vt,subtract:()=>ht,translate:()=>nt});var u={};t.r(u),t.d(u,{add:()=>Yt,adjoint:()=>At,clone:()=>dt,copy:()=>xt,create:()=>bt,determinant:()=>Pt,equals:()=>Nt,exactEquals:()=>Bt,frob:()=>Qt,fromMat2d:()=>Lt,fromMat4:()=>mt,fromQuat:()=>Vt,fromRotation:()=>Dt,fromScaling:()=>Ft,fromTranslation:()=>Et,fromValues:()=>yt,identity:()=>qt,invert:()=>gt,mul:()=>kt,multiply:()=>St,multiplyScalar:()=>Zt,multiplyScalarAndAdd:()=>_t,normalFromMat4:()=>jt,projection:()=>zt,rotate:()=>Tt,scale:()=>It,set:()=>pt,str:()=>Ot,sub:()=>Ut,subtract:()=>Xt,translate:()=>Rt,transpose:()=>wt});var e={};t.r(e),t.d(e,{add:()=>Ln,adjoint:()=>nn,clone:()=>Ct,copy:()=>Gt,create:()=>Wt,determinant:()=>an,equals:()=>Qn,exactEquals:()=>On,frob:()=>Fn,fromQuat:()=>An,fromQuat2:()=>xn,fromRotation:()=>ln,fromRotationTranslation:()=>dn,fromRotationTranslationScale:()=>wn,fromRotationTranslationScaleOrigin:()=>gn,fromScaling:()=>fn,fromTranslation:()=>Mn,fromValues:()=>Ht,fromXRotation:()=>vn,fromYRotation:()=>bn,fromZRotation:()=>mn,frustum:()=>Pn,getRotation:()=>qn,getScaling:()=>pn,getTranslation:()=>yn,identity:()=>Kt,invert:()=>tn,lookAt:()=>In,mul:()=>Yn,multiply:()=>rn,multiplyScalar:()=>jn,multiplyScalarAndAdd:()=>zn,ortho:()=>Tn,perspective:()=>Sn,perspectiveFromFieldOfView:()=>Rn,rotate:()=>on,rotateX:()=>hn,rotateY:()=>cn,rotateZ:()=>sn,scale:()=>en,set:()=>Jt,str:()=>Dn,sub:()=>Xn,subtract:()=>Vn,targetTo:()=>En,translate:()=>un,transpose:()=>$t});var o={};t.r(o),t.d(o,{add:()=>Wn,angle:()=>wa,bezier:()=>va,ceil:()=>Jn,clone:()=>_n,copy:()=>kn,create:()=>Zn,cross:()=>Ma,dist:()=>Da,distance:()=>ua,div:()=>Ea,divide:()=>Hn,dot:()=>sa,equals:()=>Sa,exactEquals:()=>Pa,floor:()=>Kn,forEach:()=>ja,fromValues:()=>Nn,hermite:()=>la,inverse:()=>ha,len:()=>La,length:()=>Bn,lerp:()=>fa,max:()=>ta,min:()=>$n,mul:()=>Ia,multiply:()=>Gn,negate:()=>ia,normalize:()=>ca,random:()=>ba,rotateX:()=>ya,rotateY:()=>pa,rotateZ:()=>qa,round:()=>na,scale:()=>aa,scaleAndAdd:()=>ra,set:()=>Un,sqrDist:()=>Fa,sqrLen:()=>Va,squaredDistance:()=>ea,squaredLength:()=>oa,str:()=>Aa,sub:()=>Ta,subtract:()=>Cn,transformMat3:()=>da,transformMat4:()=>ma,transformQuat:()=>xa,zero:()=>ga});var i={};t.r(i),t.d(i,{add:()=>Za,ceil:()=>ka,clone:()=>Oa,copy:()=>Ya,create:()=>za,cross:()=>or,dist:()=>xr,distance:()=>Ka,div:()=>dr,divide:()=>Na,dot:()=>er,equals:()=>vr,exactEquals:()=>lr,floor:()=>Ua,forEach:()=>wr,fromValues:()=>Qa,inverse:()=>rr,len:()=>pr,length:()=>tr,lerp:()=>ir,max:()=>Ca,min:()=>Wa,mul:()=>mr,multiply:()=>Ba,negate:()=>ar,normalize:()=>ur,random:()=>hr,round:()=>Ga,scale:()=>Ha,scaleAndAdd:()=>Ja,set:()=>Xa,sqrDist:()=>yr,sqrLen:()=>qr,squaredDistance:()=>$a,squaredLength:()=>nr,str:()=>fr,sub:()=>br,subtract:()=>_a,transformMat4:()=>cr,transformQuat:()=>sr,zero:()=>Mr});var h={};t.r(h),t.d(h,{add:()=>$r,calculateW:()=>Fr,clone:()=>Gr,conjugate:()=>Yr,copy:()=>Jr,create:()=>gr,dot:()=>au,equals:()=>su,exactEquals:()=>cu,exp:()=>Lr,fromEuler:()=>Zr,fromMat3:()=>Xr,fromValues:()=>Hr,getAngle:()=>Rr,getAxisAngle:()=>Sr,identity:()=>Ar,invert:()=>Qr,len:()=>eu,length:()=>uu,lerp:()=>ru,ln:()=>Vr,mul:()=>tu,multiply:()=>Tr,normalize:()=>hu,pow:()=>jr,random:()=>Or,rotateX:()=>Ir,rotateY:()=>Er,rotateZ:()=>Dr,rotationTo:()=>Mu,scale:()=>nu,set:()=>Kr,setAxes:()=>lu,setAxisAngle:()=>Pr,slerp:()=>zr,sqlerp:()=>fu,sqrLen:()=>iu,squaredLength:()=>ou,str:()=>_r});var c={};t.r(c),t.d(c,{add:()=>Ou,clone:()=>bu,conjugate:()=>Nu,copy:()=>wu,create:()=>vu,dot:()=>Zu,equals:()=>Ku,exactEquals:()=>Ju,fromMat4:()=>qu,fromRotation:()=>pu,fromRotationTranslation:()=>xu,fromRotationTranslationValues:()=>du,fromTranslation:()=>yu,fromValues:()=>mu,getDual:()=>Su,getReal:()=>Pu,getTranslation:()=>Iu,identity:()=>gu,invert:()=>Bu,len:()=>Uu,length:()=>ku,lerp:()=>_u,mul:()=>Yu,multiply:()=>Qu,normalize:()=>Gu,rotateAroundAxis:()=>zu,rotateByQuatAppend:()=>Vu,rotateByQuatPrepend:()=>ju,rotateX:()=>Du,rotateY:()=>Fu,rotateZ:()=>Lu,scale:()=>Xu,set:()=>Au,setDual:()=>Tu,setReal:()=>Ru,sqrLen:()=>Cu,squaredLength:()=>Wu,str:()=>Hu,translate:()=>Eu});var s={};t.r(s),t.d(s,{add:()=>ue,angle:()=>De,ceil:()=>he,clone:()=>te,copy:()=>ae,create:()=>$u,cross:()=>ge,dist:()=>Xe,distance:()=>be,div:()=>Ye,divide:()=>ie,dot:()=>we,equals:()=>je,exactEquals:()=>Ve,floor:()=>ce,forEach:()=>Be,fromValues:()=>ne,inverse:()=>pe,len:()=>ze,length:()=>de,lerp:()=>Ae,max:()=>Me,min:()=>se,mul:()=>Qe,multiply:()=>oe,negate:()=>ye,normalize:()=>qe,random:()=>Pe,rotate:()=>Ee,round:()=>fe,scale:()=>le,scaleAndAdd:()=>ve,set:()=>re,sqrDist:()=>Ze,sqrLen:()=>_e,squaredDistance:()=>me,squaredLength:()=>xe,str:()=>Le,sub:()=>Oe,subtract:()=>ee,transformMat2:()=>Se,transformMat2d:()=>Re,transformMat3:()=>Te,transformMat4:()=>Ie,zero:()=>Fe});var M=1e-6,f="undefined"!=typeof Float32Array?Float32Array:Array,l=Math.random;function v(t){f=t}var b=Math.PI/180;function m(t){return t*b}function d(t,n){return Math.abs(t-n)<=M*Math.max(1,Math.abs(t),Math.abs(n))}function x(){var t=new f(4);return f!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function y(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function p(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function q(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function w(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function g(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function A(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function P(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null}function S(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t}function R(t){return t[0]*t[3]-t[2]*t[1]}function T(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*c+e*s,t[3]=u*c+o*s,t}function I(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t}function E(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t}function D(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t}function F(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function L(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function V(t){return Math.hypot(t[0],t[1],t[2],t[3])}function j(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]}function z(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function O(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function Y(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}function X(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Z(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var _=T,B=O;function N(){var t=new f(6);return f!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t}function k(t){var n=new f(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function U(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function W(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function C(t,n,a,r,u,e){var o=new f(6);return o[0]=t,o[1]=n,o[2]=a,o[3]=r,o[4]=u,o[5]=e,o}function G(t,n,a,r,u,e,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t}function H(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=a*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=a*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-a*i)*h,t):null}function J(t){return t[0]*t[3]-t[1]*t[2]}function K(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+e*s,t[1]=u*c+o*s,t[2]=r*M+e*f,t[3]=u*M+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function $(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+e*c,t[1]=u*s+o*c,t[2]=r*-c+e*s,t[3]=u*-c+o*s,t[4]=i,t[5]=h,t}function tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=e*s,t[3]=o*s,t[4]=i,t[5]=h,t}function nt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*s+i,t[5]=u*c+o*s+h,t}function at(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t}function rt(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function ut(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function et(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function ot(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)}function it(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t}function ht(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}function ct(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t}function st(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t}function Mt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]}function ft(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return Math.abs(a-h)<=M*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-c)<=M*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=M*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(e-f)<=M*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(o-l)<=M*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-v)<=M*Math.max(1,Math.abs(i),Math.abs(v))}var lt=K,vt=ht;function bt(){var t=new f(9);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function mt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function dt(t){var n=new f(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function xt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function yt(t,n,a,r,u,e,o,i,h){var c=new f(9);return c[0]=t,c[1]=n,c[2]=a,c[3]=r,c[4]=u,c[5]=e,c[6]=o,c[7]=i,c[8]=h,c}function pt(t,n,a,r,u,e,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t}function qt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function wt(t,n){if(t===n){var a=n[1],r=n[2],u=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=u}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function gt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*e+i*h,l=c*e-o*h,v=a*M+r*f+u*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+u*c)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(s*a-u*h)*v,t[5]=(-i*a+u*e)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*e)*v,t):null}function At(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=u*c-r*s,t[2]=r*i-u*o,t[3]=i*h-e*s,t[4]=a*s-u*h,t[5]=u*e-a*i,t[6]=e*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*e,t}function Pt(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*e-o*h)+a*(-c*u+o*i)+r*(h*u-e*i)}function St(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],x=a[6],y=a[7],p=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*u+l*i+v*s,t[2]=f*e+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*u+m*i+d*s,t[5]=b*e+m*h+d*M,t[6]=x*r+y*o+p*c,t[7]=x*u+y*i+p*s,t[8]=x*e+y*h+p*M,t}function Rt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*u+l*i+s,t[8]=f*e+l*h+M,t}function Tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=c,t[7]=s,t[8]=M,t}function It(t,n,a){var r=a[0],u=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=u*n[3],t[4]=u*n[4],t[5]=u*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function Et(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function Dt(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Ft(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Lt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function Vt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t}function jt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(h*S-o*I-c*P)*E,t[2]=(o*T-i*S+c*A)*E,t[3]=(u*T-r*I-e*R)*E,t[4]=(a*I-u*S+e*P)*E,t[5]=(r*S-a*T-e*A)*E,t[6]=(b*g-m*w+d*q)*E,t[7]=(m*p-v*g-d*y)*E,t[8]=(v*w-b*p+d*x)*E,t):null}function zt(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function Ot(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function Qt(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function Yt(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function Xt(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function Zt(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function _t(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function Bt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function Nt(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],x=n[6],y=n[7],p=n[8];return Math.abs(a-f)<=M*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(r-l)<=M*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(u-v)<=M*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(e-b)<=M*Math.max(1,Math.abs(e),Math.abs(b))&&Math.abs(o-m)<=M*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(i-d)<=M*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(h-x)<=M*Math.max(1,Math.abs(h),Math.abs(x))&&Math.abs(c-y)<=M*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(s-p)<=M*Math.max(1,Math.abs(s),Math.abs(p))}var kt=St,Ut=Xt;function Wt(){var t=new f(16);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Ct(t){var n=new f(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function Gt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function Ht(t,n,a,r,u,e,o,i,h,c,s,M,l,v,b,m){var d=new f(16);return d[0]=t,d[1]=n,d[2]=a,d[3]=r,d[4]=u,d[5]=e,d[6]=o,d[7]=i,d[8]=h,d[9]=c,d[10]=s,d[11]=M,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d}function Jt(t,n,a,r,u,e,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t}function Kt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $t(t,n){if(t===n){var a=n[1],r=n[2],u=n[3],e=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=e,t[11]=n[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function tn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(u*T-r*I-e*R)*E,t[2]=(b*g-m*w+d*q)*E,t[3]=(f*w-M*g-l*q)*E,t[4]=(h*S-o*I-c*P)*E,t[5]=(a*I-u*S+e*P)*E,t[6]=(m*p-v*g-d*y)*E,t[7]=(s*g-f*p+l*y)*E,t[8]=(o*T-i*S+c*A)*E,t[9]=(r*S-a*T-e*A)*E,t[10]=(v*w-b*p+d*x)*E,t[11]=(M*p-s*w-l*x)*E,t[12]=(i*P-o*R-h*A)*E,t[13]=(a*R-r*P+u*A)*E,t[14]=(b*y-v*q-m*x)*E,t[15]=(s*q-M*y+f*x)*E,t):null}function nn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-c*m)-i*(u*d-e*m)+b*(u*c-e*h),t[3]=-(r*(h*l-c*f)-i*(u*l-e*f)+M*(u*c-e*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(u*d-e*m)+v*(u*l-e*f),t[6]=-(a*(h*d-c*m)-o*(u*d-e*m)+v*(u*c-e*h)),t[7]=a*(h*l-c*f)-o*(u*l-e*f)+s*(u*c-e*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-e*b)+v*(r*l-e*M)),t[10]=a*(i*d-c*b)-o*(r*d-e*b)+v*(r*c-e*i),t[11]=-(a*(i*l-c*M)-o*(r*l-e*M)+s*(r*c-e*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-u*b)+v*(r*f-u*M),t[14]=-(a*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=a*(i*f-h*M)-o*(r*f-u*M)+s*(r*h-u*i),t}function an(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*e)*(M*m-f*b)-(n*i-r*e)*(s*m-f*v)+(n*h-u*e)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-u*o)*(c*b-M*l)+(r*h-u*i)*(c*v-s*l)}function rn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],x=n[15],y=a[0],p=a[1],q=a[2],w=a[3];return t[0]=y*r+p*i+q*M+w*b,t[1]=y*u+p*h+q*f+w*m,t[2]=y*e+p*c+q*l+w*d,t[3]=y*o+p*s+q*v+w*x,y=a[4],p=a[5],q=a[6],w=a[7],t[4]=y*r+p*i+q*M+w*b,t[5]=y*u+p*h+q*f+w*m,t[6]=y*e+p*c+q*l+w*d,t[7]=y*o+p*s+q*v+w*x,y=a[8],p=a[9],q=a[10],w=a[11],t[8]=y*r+p*i+q*M+w*b,t[9]=y*u+p*h+q*f+w*m,t[10]=y*e+p*c+q*l+w*d,t[11]=y*o+p*s+q*v+w*x,y=a[12],p=a[13],q=a[14],w=a[15],t[12]=y*r+p*i+q*M+w*b,t[13]=y*u+p*h+q*f+w*m,t[14]=y*e+p*c+q*l+w*d,t[15]=y*o+p*s+q*v+w*x,t}function un(t,n,a){var r,u,e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=u*b+h*m+f*d+n[13],t[14]=e*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t}function en(t,n,a){var r=a[0],u=a[1],e=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*u,t[5]=n[5]*u,t[6]=n[6]*u,t[7]=n[7]*u,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function on(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b,m,d,x,y,p,q,w,g,A,P,S,R,T,I=r[0],E=r[1],D=r[2],F=Math.hypot(I,E,D);return F<M?null:(I*=F=1/F,E*=F,D*=F,u=Math.sin(a),o=1-(e=Math.cos(a)),i=n[0],h=n[1],c=n[2],s=n[3],f=n[4],l=n[5],v=n[6],b=n[7],m=n[8],d=n[9],x=n[10],y=n[11],p=I*I*o+e,q=E*I*o+D*u,w=D*I*o-E*u,g=I*E*o-D*u,A=E*E*o+e,P=D*E*o+I*u,S=I*D*o+E*u,R=E*D*o-I*u,T=D*D*o+e,t[0]=i*p+f*q+m*w,t[1]=h*p+l*q+d*w,t[2]=c*p+v*q+x*w,t[3]=s*p+b*q+y*w,t[4]=i*g+f*A+m*P,t[5]=h*g+l*A+d*P,t[6]=c*g+v*A+x*P,t[7]=s*g+b*A+y*P,t[8]=i*S+f*R+m*T,t[9]=h*S+l*R+d*T,t[10]=c*S+v*R+x*T,t[11]=s*S+b*R+y*T,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function hn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*u+c*r,t[5]=o*u+s*r,t[6]=i*u+M*r,t[7]=h*u+f*r,t[8]=c*u-e*r,t[9]=s*u-o*r,t[10]=M*u-i*r,t[11]=f*u-h*r,t}function cn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u-c*r,t[1]=o*u-s*r,t[2]=i*u-M*r,t[3]=h*u-f*r,t[8]=e*r+c*u,t[9]=o*r+s*u,t[10]=i*r+M*u,t[11]=h*r+f*u,t}function sn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u+c*r,t[1]=o*u+s*r,t[2]=i*u+M*r,t[3]=h*u+f*r,t[4]=c*u-e*r,t[5]=s*u-o*r,t[6]=M*u-i*r,t[7]=f*u-h*r,t}function Mn(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function fn(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ln(t,n,a){var r,u,e,o=a[0],i=a[1],h=a[2],c=Math.hypot(o,i,h);return c<M?null:(o*=c=1/c,i*=c,h*=c,r=Math.sin(n),e=1-(u=Math.cos(n)),t[0]=o*o*e+u,t[1]=i*o*e+h*r,t[2]=h*o*e-i*r,t[3]=0,t[4]=o*i*e-h*r,t[5]=i*i*e+u,t[6]=h*i*e+o*r,t[7]=0,t[8]=o*h*e+i*r,t[9]=i*h*e-o*r,t[10]=h*h*e+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function vn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function bn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=r+r,h=u+u,c=e+e,s=r*i,M=r*h,f=r*c,l=u*h,v=u*c,b=e*c,m=o*i,d=o*h,x=o*c;return t[0]=1-(l+b),t[1]=M+x,t[2]=f-d,t[3]=0,t[4]=M-x,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function xn(t,n){var a=new f(3),r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=r*r+u*u+e*e+o*o;return M>0?(a[0]=2*(i*o+s*r+h*e-c*u)/M,a[1]=2*(h*o+s*u+c*r-i*e)/M,a[2]=2*(c*o+s*e+i*u-h*r)/M):(a[0]=2*(i*o+s*r+h*e-c*u),a[1]=2*(h*o+s*u+c*r-i*e),a[2]=2*(c*o+s*e+i*u-h*r)),dn(t,n,a),t}function yn(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function pn(t,n){var a=n[0],r=n[1],u=n[2],e=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,u),t[1]=Math.hypot(e,o,i),t[2]=Math.hypot(h,c,s),t}function qn(t,n){var a=new f(3);pn(a,n);var r=1/a[0],u=1/a[1],e=1/a[2],o=n[0]*r,i=n[1]*u,h=n[2]*e,c=n[4]*r,s=n[5]*u,M=n[6]*e,l=n[8]*r,v=n[9]*u,b=n[10]*e,m=o+s+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(M-v)/d,t[1]=(l-h)/d,t[2]=(i-c)/d):o>s&&o>b?(d=2*Math.sqrt(1+o-s-b),t[3]=(M-v)/d,t[0]=.25*d,t[1]=(i+c)/d,t[2]=(l+h)/d):s>b?(d=2*Math.sqrt(1+s-o-b),t[3]=(l-h)/d,t[0]=(i+c)/d,t[1]=.25*d,t[2]=(M+v)/d):(d=2*Math.sqrt(1+b-o-s),t[3]=(i-c)/d,t[0]=(l+h)/d,t[1]=(M+v)/d,t[2]=.25*d),t}function wn(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3],h=u+u,c=e+e,s=o+o,M=u*h,f=u*c,l=u*s,v=e*c,b=e*s,m=o*s,d=i*h,x=i*c,y=i*s,p=r[0],q=r[1],w=r[2];return t[0]=(1-(v+m))*p,t[1]=(f+y)*p,t[2]=(l-x)*p,t[3]=0,t[4]=(f-y)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+x)*w,t[9]=(b-d)*w,t[10]=(1-(M+v))*w,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function gn(t,n,a,r,u){var e=n[0],o=n[1],i=n[2],h=n[3],c=e+e,s=o+o,M=i+i,f=e*c,l=e*s,v=e*M,b=o*s,m=o*M,d=i*M,x=h*c,y=h*s,p=h*M,q=r[0],w=r[1],g=r[2],A=u[0],P=u[1],S=u[2],R=(1-(b+d))*q,T=(l+p)*q,I=(v-y)*q,E=(l-p)*w,D=(1-(f+d))*w,F=(m+x)*w,L=(v+y)*g,V=(m-x)*g,j=(1-(f+b))*g;return t[0]=R,t[1]=T,t[2]=I,t[3]=0,t[4]=E,t[5]=D,t[6]=F,t[7]=0,t[8]=L,t[9]=V,t[10]=j,t[11]=0,t[12]=a[0]+A-(R*A+E*P+L*S),t[13]=a[1]+P-(T*A+D*P+V*S),t[14]=a[2]+S-(I*A+F*P+j*S),t[15]=1,t}function An(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Pn(t,n,a,r,u,e,o){var i=1/(a-n),h=1/(u-r),c=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(u+r)*h,t[10]=(o+e)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*c,t[15]=0,t}function Sn(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t}function Rn(t,n,a,r){var u=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t}function Tn(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=(o+e)*c,t[15]=1,t}function In(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b=n[0],m=n[1],d=n[2],x=r[0],y=r[1],p=r[2],q=a[0],w=a[1],g=a[2];return Math.abs(b-q)<M&&Math.abs(m-w)<M&&Math.abs(d-g)<M?Kt(t):(s=b-q,f=m-w,l=d-g,u=y*(l*=v=1/Math.hypot(s,f,l))-p*(f*=v),e=p*(s*=v)-x*l,o=x*f-y*s,(v=Math.hypot(u,e,o))?(u*=v=1/v,e*=v,o*=v):(u=0,e=0,o=0),i=f*o-l*e,h=l*u-s*o,c=s*e-f*u,(v=Math.hypot(i,h,c))?(i*=v=1/v,h*=v,c*=v):(i=0,h=0,c=0),t[0]=u,t[1]=i,t[2]=s,t[3]=0,t[4]=e,t[5]=h,t[6]=f,t[7]=0,t[8]=o,t[9]=c,t[10]=l,t[11]=0,t[12]=-(u*b+e*m+o*d),t[13]=-(i*b+h*m+c*d),t[14]=-(s*b+f*m+l*d),t[15]=1,t)}function En(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=u-a[0],M=e-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t}function Dn(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Fn(t){return Math.hypot(t[0],t[1],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Ln(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t}function Vn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}function jn(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t}function zn(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t}function On(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function Qn(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],x=t[15],y=n[0],p=n[1],q=n[2],w=n[3],g=n[4],A=n[5],P=n[6],S=n[7],R=n[8],T=n[9],I=n[10],E=n[11],D=n[12],F=n[13],L=n[14],V=n[15];return Math.abs(a-y)<=M*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(r-p)<=M*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(u-q)<=M*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(e-w)<=M*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-g)<=M*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-A)<=M*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(h-P)<=M*Math.max(1,Math.abs(h),Math.abs(P))&&Math.abs(c-S)<=M*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(s-R)<=M*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(f-T)<=M*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(l-I)<=M*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(v-E)<=M*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(b-D)<=M*Math.max(1,Math.abs(b),Math.abs(D))&&Math.abs(m-F)<=M*Math.max(1,Math.abs(m),Math.abs(F))&&Math.abs(d-L)<=M*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(x-V)<=M*Math.max(1,Math.abs(x),Math.abs(V))}var Yn=rn,Xn=Vn;function Zn(){var t=new f(3);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function _n(t){var n=new f(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Bn(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function Nn(t,n,a){var r=new f(3);return r[0]=t,r[1]=n,r[2]=a,r}function kn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Un(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function Wn(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function Cn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function Gn(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function Hn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function Jn(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function Kn(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function $n(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function ta(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function na(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function aa(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function ra(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function ua(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return Math.hypot(a,r,u)}function ea(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return a*a+r*r+u*u}function oa(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function ia(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function ha(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function ca(t,n){var a=n[0],r=n[1],u=n[2],e=a*a+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function sa(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}function fa(t,n,a,r){var u=n[0],e=n[1],o=n[2];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t}function la(t,n,a,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,c=o*(e-1),s=o*(3-2*e);return t[0]=n[0]*i+a[0]*h+r[0]*c+u[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+u[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+u[2]*s,t}function va(t,n,a,r,u,e){var o=1-e,i=o*o,h=e*e,c=i*o,s=3*e*i,M=3*h*o,f=h*e;return t[0]=n[0]*c+a[0]*s+r[0]*M+u[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+u[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+u[2]*f,t}function ba(t,n){n=n||1;var a=2*l()*Math.PI,r=2*l()-1,u=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(a)*u,t[1]=Math.sin(a)*u,t[2]=r*n,t}function ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[3]*r+a[7]*u+a[11]*e+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*u+a[8]*e+a[12])/o,t[1]=(a[1]*r+a[5]*u+a[9]*e+a[13])/o,t[2]=(a[2]*r+a[6]*u+a[10]*e+a[14])/o,t}function da(t,n,a){var r=n[0],u=n[1],e=n[2];return t[0]=r*a[0]+u*a[3]+e*a[6],t[1]=r*a[1]+u*a[4]+e*a[7],t[2]=r*a[2]+u*a[5]+e*a[8],t}function xa(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=u*c-e*h,M=e*i-r*c,f=r*h-u*i,l=u*f-e*M,v=e*s-r*f,b=r*M-u*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t}function ya(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function pa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function qa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function wa(t,n){var a=Nn(t[0],t[1],t[2]),r=Nn(n[0],n[1],n[2]);ca(a,a),ca(r,r);var u=sa(a,r);return u>1?0:u<-1?Math.PI:Math.acos(u)}function ga(t){return t[0]=0,t[1]=0,t[2]=0,t}function Aa(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Pa(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Sa(t,n){var a=t[0],r=t[1],u=t[2],e=n[0],o=n[1],i=n[2];return Math.abs(a-e)<=M*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(r-o)<=M*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=M*Math.max(1,Math.abs(u),Math.abs(i))}var Ra,Ta=Cn,Ia=Gn,Ea=Hn,Da=ua,Fa=ea,La=Bn,Va=oa,ja=(Ra=Zn(),function(t,n,a,r,u,e){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)Ra[0]=t[o],Ra[1]=t[o+1],Ra[2]=t[o+2],u(Ra,Ra,e),t[o]=Ra[0],t[o+1]=Ra[1],t[o+2]=Ra[2];return t});function za(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Oa(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Qa(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function Ya(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Xa(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function Za(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function _a(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Ba(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function Na(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function ka(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function Ua(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function Wa(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function Ca(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function Ga(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function Ha(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Ja(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function Ka(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.hypot(a,r,u,e)}function $a(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function tr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return Math.hypot(n,a,r,u)}function nr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function ar(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function rr(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function ur(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function er(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function or(t,n,a,r){var u=a[0]*r[1]-a[1]*r[0],e=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*e,t[2]=s*h-M*o+l*u,t[3]=-s*i+M*e-f*u,t}function ir(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function hr(t,n){var a,r,u,e,o,i;n=n||1;do{o=(a=2*l()-1)*a+(r=2*l()-1)*r}while(o>=1);do{i=(u=2*l()-1)*u+(e=2*l()-1)*e}while(i>=1);var h=Math.sqrt((1-o)/i);return t[0]=n*a,t[1]=n*r,t[2]=n*u*h,t[3]=n*e*h,t}function cr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t}function sr(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*e-h*u,M=c*u+h*r-o*e,f=c*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t}function Mr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function fr(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function lr(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function vr(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}var br=_a,mr=Ba,dr=Na,xr=Ka,yr=$a,pr=tr,qr=nr,wr=function(){var t=za();return function(n,a,r,u,e,o){var i,h;for(a||(a=4),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}();function gr(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ar(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Pr(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Sr(t,n){var a=2*Math.acos(n[3]),r=Math.sin(a/2);return r>M?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),a}function Rr(t,n){var a=au(t,n);return Math.acos(2*a*a-1)}function Tr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,t}function Ir(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function Er(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Dr(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Fr(t,n){var a=n[0],r=n[1],u=n[2];return t[0]=a,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-u*u)),t}function Lr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=Math.exp(e),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=u*h,t[3]=i*Math.cos(o),t}function Vr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=o>0?Math.atan2(o,e)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=u*i,t[3]=.5*Math.log(a*a+r*r+u*u+e*e),t}function jr(t,n,a){return Vr(t,n),nu(t,t,a),Lr(t,t),t}function zr(t,n,a,r){var u,e,o,i,h,c=n[0],s=n[1],f=n[2],l=n[3],v=a[0],b=a[1],m=a[2],d=a[3];return(e=c*v+s*b+f*m+l*d)<0&&(e=-e,v=-v,b=-b,m=-m,d=-d),1-e>M?(u=Math.acos(e),o=Math.sin(u),i=Math.sin((1-r)*u)/o,h=Math.sin(r*u)/o):(i=1-r,h=r),t[0]=i*c+h*v,t[1]=i*s+h*b,t[2]=i*f+h*m,t[3]=i*l+h*d,t}function Or(t){var n=l(),a=l(),r=l(),u=Math.sqrt(1-n),e=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*a),t[1]=u*Math.cos(2*Math.PI*a),t[2]=e*Math.sin(2*Math.PI*r),t[3]=e*Math.cos(2*Math.PI*r),t}function Qr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t}function Yr(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function Xr(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;a=Math.sqrt(n[3*u+u]-n[3*e+e]-n[3*o+o]+1),t[u]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+u]+n[3*u+e])*a,t[o]=(n[3*o+u]+n[3*u+o])*a}return t}function Zr(t,n,a,r){var u=.5*Math.PI/180;n*=u,a*=u,r*=u;var e=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=e*h*s-o*i*c,t[1]=o*i*s+e*h*c,t[2]=o*h*c-e*i*s,t[3]=o*h*s+e*i*c,t}function _r(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var Br,Nr,kr,Ur,Wr,Cr,Gr=Oa,Hr=Qa,Jr=Ya,Kr=Xa,$r=Za,tu=Tr,nu=Ha,au=er,ru=ir,uu=tr,eu=uu,ou=nr,iu=ou,hu=ur,cu=lr,su=vr,Mu=(Br=Zn(),Nr=Nn(1,0,0),kr=Nn(0,1,0),function(t,n,a){var r=sa(n,a);return r<-.999999?(Ma(Br,Nr,n),La(Br)<1e-6&&Ma(Br,kr,n),ca(Br,Br),Pr(t,Br,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Ma(Br,n,a),t[0]=Br[0],t[1]=Br[1],t[2]=Br[2],t[3]=1+r,hu(t,t))}),fu=(Ur=gr(),Wr=gr(),function(t,n,a,r,u,e){return zr(Ur,n,u,e),zr(Wr,a,r,e),zr(t,Ur,Wr,2*e*(1-e)),t}),lu=(Cr=bt(),function(t,n,a,r){return Cr[0]=a[0],Cr[3]=a[1],Cr[6]=a[2],Cr[1]=r[0],Cr[4]=r[1],Cr[7]=r[2],Cr[2]=-n[0],Cr[5]=-n[1],Cr[8]=-n[2],hu(t,Xr(t,Cr))});function vu(){var t=new f(8);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t}function bu(t){var n=new f(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n}function mu(t,n,a,r,u,e,o,i){var h=new f(8);return h[0]=t,h[1]=n,h[2]=a,h[3]=r,h[4]=u,h[5]=e,h[6]=o,h[7]=i,h}function du(t,n,a,r,u,e,o){var i=new f(8);i[0]=t,i[1]=n,i[2]=a,i[3]=r;var h=.5*u,c=.5*e,s=.5*o;return i[4]=h*r+c*a-s*n,i[5]=c*r+s*t-h*a,i[6]=s*r+h*n-c*t,i[7]=-h*t-c*n-s*a,i}function xu(t,n,a){var r=.5*a[0],u=.5*a[1],e=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+u*h-e*i,t[5]=u*c+e*o-r*h,t[6]=e*c+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function yu(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t}function pu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function qu(t,n){var a=gr();qn(a,n);var r=new f(3);return yn(r,n),xu(t,a,r),t}function wu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function gu(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function Au(t,n,a,r,u,e,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t}var Pu=Jr;function Su(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t}var Ru=Jr;function Tu(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t}function Iu(t,n){var a=n[4],r=n[5],u=n[6],e=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+e*o+r*h-u*i),t[1]=2*(r*c+e*i+u*o-a*h),t[2]=2*(u*c+e*h+a*i-r*o),t}function Eu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*c-e*h+s,t[5]=o*h+e*i-r*c+M,t[6]=o*c+r*h-u*i+f,t[7]=-r*i-u*h-e*c+l,t}function Du(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Ir(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Fu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Er(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Lu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Dr(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Vu(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*e-c*u,t[1]=h*o+s*u+c*r-i*e,t[2]=c*o+s*e+i*u-h*r,t[3]=s*o-i*r-h*u-c*e,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*e-c*u,t[5]=h*o+s*u+c*r-i*e,t[6]=c*o+s*e+i*u-h*r,t[7]=s*o-i*r-h*u-c*e,t}function ju(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+u*c-e*h,t[5]=u*s+o*h+e*i-r*c,t[6]=e*s+o*c+r*h-u*i,t[7]=o*s-r*i-u*h-e*c,t}function zu(t,n,a,r){if(Math.abs(r)<M)return wu(t,n);var u=Math.hypot(a[0],a[1],a[2]);r*=.5;var e=Math.sin(r),o=e*a[0]/u,i=e*a[1]/u,h=e*a[2]/u,c=Math.cos(r),s=n[0],f=n[1],l=n[2],v=n[3];t[0]=s*c+v*o+f*h-l*i,t[1]=f*c+v*i+l*o-s*h,t[2]=l*c+v*h+s*i-f*o,t[3]=v*c-s*o-f*i-l*h;var b=n[4],m=n[5],d=n[6],x=n[7];return t[4]=b*c+x*o+m*h-d*i,t[5]=m*c+x*i+d*o-b*h,t[6]=d*c+x*h+b*i-m*o,t[7]=x*c-b*o-m*i-d*h,t}function Ou(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t}function Qu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],x=a[3];return t[0]=r*x+o*b+u*d-e*m,t[1]=u*x+o*m+e*b-r*d,t[2]=e*x+o*d+r*m-u*b,t[3]=o*x-r*b-u*m-e*d,t[4]=r*s+o*i+u*c-e*h+M*x+v*b+f*d-l*m,t[5]=u*s+o*h+e*i-r*c+f*x+v*m+l*b-M*d,t[6]=e*s+o*c+r*h-u*i+l*x+v*d+M*m-f*b,t[7]=o*s-r*i-u*h-e*c+v*x-M*b-f*m-l*d,t}var Yu=Qu;function Xu(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t}var Zu=au;function _u(t,n,a,r){var u=1-r;return Zu(n,a)<0&&(r=-r),t[0]=n[0]*u+a[0]*r,t[1]=n[1]*u+a[1]*r,t[2]=n[2]*u+a[2]*r,t[3]=n[3]*u+a[3]*r,t[4]=n[4]*u+a[4]*r,t[5]=n[5]*u+a[5]*r,t[6]=n[6]*u+a[6]*r,t[7]=n[7]*u+a[7]*r,t}function Bu(t,n){var a=Wu(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t}function Nu(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t}var ku=uu,Uu=ku,Wu=ou,Cu=Wu;function Gu(t,n){var a=Wu(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,u=n[1]/a,e=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+u*h+e*c+o*s;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-u*M)/a,t[6]=(c-e*M)/a,t[7]=(s-o*M)/a}return t}function Hu(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function Ju(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]}function Ku(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],x=n[7];return Math.abs(a-s)<=M*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-f)<=M*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=M*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=M*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=M*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=M*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=M*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-x)<=M*Math.max(1,Math.abs(c),Math.abs(x))}function $u(){var t=new f(2);return f!=Float32Array&&(t[0]=0,t[1]=0),t}function te(t){var n=new f(2);return n[0]=t[0],n[1]=t[1],n}function ne(t,n){var a=new f(2);return a[0]=t,a[1]=n,a}function ae(t,n){return t[0]=n[0],t[1]=n[1],t}function re(t,n,a){return t[0]=n,t[1]=a,t}function ue(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t}function ee(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function oe(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function ie(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function he(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function ce(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function se(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t}function Me(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t}function fe(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function le(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t}function ve(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t}function be(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function me(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function de(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function xe(t){var n=t[0],a=t[1];return n*n+a*a}function ye(t,n){return t[0]=-n[0],t[1]=-n[1],t}function pe(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function qe(t,n){var a=n[0],r=n[1],u=a*a+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t}function we(t,n){return t[0]*n[0]+t[1]*n[1]}function ge(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t}function Ae(t,n,a,r){var u=n[0],e=n[1];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t}function Pe(t,n){n=n||1;var a=2*l()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t}function Se(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u,t[1]=a[1]*r+a[3]*u,t}function Re(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u+a[4],t[1]=a[1]*r+a[3]*u+a[5],t}function Te(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[3]*u+a[6],t[1]=a[1]*r+a[4]*u+a[7],t}function Ie(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[4]*u+a[12],t[1]=a[1]*r+a[5]*u+a[13],t}function Ee(t,n,a,r){var u=n[0]-a[0],e=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+a[0],t[1]=u*o+e*i+a[1],t}function De(t,n){var a=t[0],r=t[1],u=n[0],e=n[1],o=a*a+r*r;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var h=(a*u+r*e)*o*i;return h>1?0:h<-1?Math.PI:Math.acos(h)}function Fe(t){return t[0]=0,t[1]=0,t}function Le(t){return"vec2("+t[0]+", "+t[1]+")"}function Ve(t,n){return t[0]===n[0]&&t[1]===n[1]}function je(t,n){var a=t[0],r=t[1],u=n[0],e=n[1];return Math.abs(a-u)<=M*Math.max(1,Math.abs(a),Math.abs(u))&&Math.abs(r-e)<=M*Math.max(1,Math.abs(r),Math.abs(e))}var ze=de,Oe=ee,Qe=oe,Ye=ie,Xe=be,Ze=me,_e=xe,Be=function(){var t=$u();return function(n,a,r,u,e,o){var i,h;for(a||(a=2),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}();window.glMatrix=n,window.mat2=a,window.mat2d=r,window.mat3=u,window.mat4=e,window.quat=h,window.quat2=c,window.vec2=s,window.vec3=o,window.vec4=i})();
//# sourceMappingURL=libs.core.js.map
if(!CABLES.exportedPatches)CABLES.exportedPatches={};CABLES.exportedPatches["XhXUnm"]={_id:"66ca045bb731425e29f50db5",ops:[{id:"spfhrtmgj",uiAttribs:{},portsIn:[{name:"Visible",value:1},{name:"Opacity",value:.5},{name:"Default Minimized",value:0},{name:"Minimized Opacity",value:.5},{name:"Show undo button",value:0},{name:"Show Minimize",value:0},{name:"Title",value:""},{name:"Side",value:0},{name:"Default CSS",value:1}],portsOut:[{name:"childs",title:"Children",links:[{portIn:"link",portOut:"childs",objIn:"i0y2utej2",objOut:"spfhrtmgj"}]},{name:"Opfened",value:false,title:"Opened"}],objName:"Ops.Sidebar.Sidebar"},{id:"i0y2utej2",uiAttribs:{},portsIn:[{name:"Text",value:"Upload an image:"},{name:"Button Text",value:"here"},{name:"Accept Files",value:""},{name:"Allow Multiple Files",value:0},{name:"Id",value:0},{name:"Visible",value:1},{name:"Grey Out",value:0}],portsOut:[{name:"Data URL",links:[{portIn:"File",portOut:"Data URL",objIn:"5za937rys",objOut:"i0y2utej2"}]},{name:"Filename",value:"2001_2.jpg"},{name:"Num Files",value:1}],objName:"Ops.Sidebar.LocalFileToDataUrl"},{id:"5za937rys",uiAttribs:{},portsIn:[{name:"File",display:"file"},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:0},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Data Format index",value:3},{name:"Data Format",value:"RGBA"},{name:"Flip",value:0},{name:"Pre Multiplied Alpha",value:0},{name:"Active",value:1},{name:"Save Memory",value:1},{name:"Add Cachebuster",value:0}],portsOut:[{name:"Texture",links:[{portIn:"Image",portOut:"Texture",objIn:"xa9u711wc",objOut:"5za937rys"}]},{name:"Width",value:1540},{name:"Height",value:866},{name:"Aspect Ratio",value:1.7782909930715936},{name:"Loaded",value:1},{name:"Loading",value:0}],objName:"Ops.Gl.Texture_v2"},{id:"zr4owzmua",uiAttribs:{},portsIn:[{name:"Strength",value:7.11},{name:"Step",value:2.51},{name:"Red index",value:7},{name:"Red",value:"Horizontal Difference Red"},{name:"Red Flip",value:0},{name:"Green index",value:1},{name:"Green",value:"Vertical Difference Green"},{name:"Green Flip",value:0},{name:"Blue index",value:15},{name:"Blue",value:"Zero"},{name:"Blue Flip",value:0}],objName:"Ops.Gl.ImageCompose.PixelDifference"},{id:"eqbgkche8",uiAttribs:{},portsIn:[{name:"blendMode index",value:0},{name:"blendMode",value:"normal"},{name:"amount",value:1},{name:"Premultiplied",value:0},{name:"Alpha Mask",value:0},{name:"removeAlphaSrc",value:0},{name:"Mask Src index",value:0},{name:"Mask Src",value:"alpha channel"},{name:"Invert alpha channel",value:0},{name:"Aspect Ratio",value:0},{name:"Stretch Axis index",value:0},{name:"Stretch Axis",value:"X"},{name:"Position",value:0},{name:"Crop",value:0},{name:"flip x",value:0},{name:"flip y",value:0},{name:"Transform",value:0},{name:"Scale X",value:1},{name:"Scale Y",value:1},{name:"Position X",value:0},{name:"Position Y",value:0},{name:"Rotation",value:0},{name:"Clip Repeat",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"29v1o6twy",objOut:"eqbgkche8"}]}],objName:"Ops.Gl.ImageCompose.DrawImage_v3"},{id:"ahhvyxare",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"exe",portOut:"trigger 0",objIn:"28u2mg3n4",objOut:"ahhvyxare"}]},{name:"trigger 1",links:[{portIn:"Render",portOut:"trigger 1",objIn:"uwnbqg5oi",objOut:"ahhvyxare"}]},{name:"trigger 2",links:[{portIn:"Render",portOut:"trigger 2",objIn:"j8hy6t7gi",objOut:"ahhvyxare"}]},{name:"trigger 3",links:[{portIn:"render",portOut:"trigger 3",objIn:"ogcajj0e4",objOut:"ahhvyxare"}]},{name:"trigger 8",links:[{portIn:"Render",portOut:"trigger 8",objIn:"4lmzwigb6",objOut:"ahhvyxare"}]},{name:"trigger 11",links:[{portIn:"Render",portOut:"trigger 11",objIn:"q4aggobfq",objOut:"ahhvyxare"}]},{name:"trigger 14",links:[{portIn:"Render",portOut:"trigger 14",objIn:"2d1lgpmyb",objOut:"ahhvyxare"}]},{name:"trigger 15",links:[{portIn:"render",portOut:"trigger 15",objIn:"15luv17fw",objOut:"ahhvyxare"}]}],objName:"Ops.Trigger.Sequence"},{id:"xa9u711wc",uiAttribs:{},portsIn:[{name:"blendMode index",value:0},{name:"blendMode",value:"normal"},{name:"amount",value:1},{name:"Premultiplied",value:0},{name:"Alpha Mask",value:0},{name:"removeAlphaSrc",value:0},{name:"Mask Src index",value:0},{name:"Mask Src",value:"alpha channel"},{name:"Invert alpha channel",value:0},{name:"Aspect Ratio",value:0},{name:"Stretch Axis index",value:0},{name:"Stretch Axis",value:"X"},{name:"Position",value:0},{name:"Crop",value:0},{name:"flip x",value:0},{name:"flip y",value:0},{name:"Transform",value:0},{name:"Scale X",value:1},{name:"Scale Y",value:1},{name:"Position X",value:0},{name:"Position Y",value:0},{name:"Rotation",value:0},{name:"Clip Repeat",value:0}],objName:"Ops.Gl.ImageCompose.DrawImage_v3"},{id:"9zd3xncyj",uiAttribs:{},portsIn:[{name:"blendMode index",value:0},{name:"blendMode",value:"normal"},{name:"amount",value:1},{name:"Premultiplied",value:0},{name:"Alpha Mask",value:0},{name:"removeAlphaSrc",value:0},{name:"Mask Src index",value:0},{name:"Mask Src",value:"alpha channel"},{name:"Invert alpha channel",value:0},{name:"Aspect Ratio",value:0},{name:"Stretch Axis index",value:0},{name:"Stretch Axis",value:"X"},{name:"Position",value:0},{name:"Crop",value:0},{name:"flip x",value:0},{name:"flip y",value:0},{name:"Transform",value:0},{name:"Scale X",value:1},{name:"Scale Y",value:1},{name:"Position X",value:0},{name:"Position Y",value:0},{name:"Rotation",value:0},{name:"Clip Repeat",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"8c9l7yn0u",objOut:"9zd3xncyj"}]}],objName:"Ops.Gl.ImageCompose.DrawImage_v3"},{id:"8c9l7yn0u",uiAttribs:{},portsIn:[{name:"blendMode index",value:0},{name:"blendMode",value:"normal"},{name:"amount",value:.995},{name:"Premultiplied",value:0},{name:"Alpha Mask",value:0},{name:"removeAlphaSrc",value:0},{name:"Mask Src index",value:0},{name:"Mask Src",value:"alpha channel"},{name:"Invert alpha channel",value:0},{name:"Aspect Ratio",value:0},{name:"Stretch Axis index",value:0},{name:"Stretch Axis",value:"X"},{name:"Position",value:0},{name:"Crop",value:0},{name:"flip x",value:0},{name:"flip y",value:0},{name:"Transform",value:0},{name:"Scale X",value:1},{name:"Scale Y",value:1},{name:"Position X",value:0},{name:"Position Y",value:0},{name:"Rotation",value:0},{name:"Clip Repeat",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"66nu2t4c0",objOut:"8c9l7yn0u"}]}],objName:"Ops.Gl.ImageCompose.DrawImage_v3"},{id:"gkuftz1vk",uiAttribs:{},portsIn:[{name:"blendMode index",value:0},{name:"blendMode",value:"normal"},{name:"amount",value:1},{name:"Premultiplied",value:0},{name:"Alpha Mask",value:0},{name:"removeAlphaSrc",value:0},{name:"Mask Src index",value:0},{name:"Mask Src",value:"alpha channel"},{name:"Invert alpha channel",value:0},{name:"Aspect Ratio",value:0},{name:"Stretch Axis index",value:0},{name:"Stretch Axis",value:"X"},{name:"Position",value:0},{name:"Crop",value:0},{name:"flip x",value:0},{name:"flip y",value:0},{name:"Transform",value:0},{name:"Scale X",value:1},{name:"Scale Y",value:1},{name:"Position X",value:0},{name:"Position Y",value:0},{name:"Rotation",value:0},{name:"Clip Repeat",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"rj0fk1p9r",objOut:"gkuftz1vk"}]}],objName:"Ops.Gl.ImageCompose.DrawImage_v3"},{id:"j6krkvhg1",uiAttribs:{},portsIn:[{name:"blendMode index",value:0},{name:"blendMode",value:"normal"},{name:"amount",value:1},{name:"Premultiplied",value:0},{name:"Alpha Mask",value:0},{name:"removeAlphaSrc",value:0},{name:"Mask Src index",value:0},{name:"Mask Src",value:"alpha channel"},{name:"Invert alpha channel",value:0},{name:"Aspect Ratio",value:0},{name:"Stretch Axis index",value:0},{name:"Stretch Axis",value:"X"},{name:"Position",value:0},{name:"Crop",value:0},{name:"flip x",value:0},{name:"flip y",value:0},{name:"Transform",value:0},{name:"Scale X",value:1},{name:"Scale Y",value:1},{name:"Position X",value:0},{name:"Position Y",value:0},{name:"Rotation",value:0},{name:"Clip Repeat",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"q6hnyiqn0",objOut:"j6krkvhg1"}]}],objName:"Ops.Gl.ImageCompose.DrawImage_v3"},{id:"q6hnyiqn0",uiAttribs:{},portsIn:[{name:"amount",value:1},{name:"Invert Mask",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"icdngiujy",objOut:"q6hnyiqn0"}]}],objName:"Ops.Gl.ImageCompose.Desaturate"},{id:"4aoyjysu8",uiAttribs:{},portsIn:[{name:"amount",value:1.19},{name:"direction index",value:0},{name:"direction",value:"both"},{name:"Fast",value:1}],objName:"Ops.Gl.ImageCompose.Blur"},{id:"8liqcrkhm",uiAttribs:{},portsIn:[{name:"Blend Mode index",value:0},{name:"Blend Mode",value:"normal"},{name:"Amount",value:.996},{name:"amount X",value:1},{name:"amount Y",value:1},{name:"Wrap index",value:2},{name:"Wrap",value:"Repeat"},{name:"Input index",value:0},{name:"Input",value:"Luminance"},{name:"Zero Displace index",value:0},{name:"Zero Displace",value:"Grey"}],objName:"Ops.Gl.ImageCompose.PixelDisplacement_v4"},{id:"66nu2t4c0",uiAttribs:{},portsIn:[{name:"Blend Mode index",value:0},{name:"Blend Mode",value:"normal"},{name:"Amount",value:1},{name:"amount X",value:.005},{name:"amount Y",value:.005},{name:"Wrap index",value:1},{name:"Wrap",value:"Clamp"},{name:"Input index",value:1},{name:"Input",value:"RedGreen"},{name:"Zero Displace index",value:0},{name:"Zero Displace",value:"Grey"}],portsOut:[{name:"trigger",links:[{portIn:"Execute",portOut:"trigger",objIn:"q6e6xum36",objOut:"66nu2t4c0"}]}],objName:"Ops.Gl.ImageCompose.PixelDisplacement_v4"},{id:"rj0fk1p9r",uiAttribs:{},portsIn:[{name:"Blend Mode index",value:3},{name:"Blend Mode",value:"multiply"},{name:"Amount",value:0},{name:"Alpha Mask index",value:0},{name:"Alpha Mask",value:"Off"},{name:"smoothness",value:9.71},{name:"Harmonics index",value:0},{name:"Harmonics",value:"1"},{name:"scale",value:5.41},{name:"time",value:0},{name:"Offset Multiply",value:1},{name:"Offset X index",value:0},{name:"Offset X",value:"None"},{name:"Offset Y index",value:0},{name:"Offset Y",value:"None"},{name:"Offset Z index",value:1},{name:"Offset Z",value:"R"}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"8c9ansvyi",objOut:"rj0fk1p9r"}]}],objName:"Ops.Gl.ImageCompose.Noise.SimplexNoise_v2"},{id:"8c9ansvyi",uiAttribs:{},portsIn:[{name:"Passes",value:0},{name:"Clamp",value:1},{name:"direction index",value:0},{name:"direction",value:"both"},{name:"Mask Invert",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"zr4owzmua",objOut:"8c9ansvyi"}]}],objName:"Ops.Gl.ImageCompose.FastBlur_v2"},{id:"29v1o6twy",uiAttribs:{},portsIn:[{name:"Blend Mode index",value:0},{name:"Blend Mode",value:"normal"},{name:"Amount",value:1},{name:"Pixel",value:9.78},{name:"Lens Distort",value:0},{name:"Smooth",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"8liqcrkhm",objOut:"29v1o6twy"}]}],objName:"Ops.Gl.ImageCompose.ChromaticAberration_v2"},{id:"9hrvskmhm",uiAttribs:{},portsIn:[{name:"In Min",value:0},{name:"Midpoint",value:.24},{name:"In Max",value:1},{name:"Out Min",value:0},{name:"Out Max",value:1}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"4aoyjysu8",objOut:"9hrvskmhm"}]}],objName:"Ops.Gl.ImageCompose.Levels_v2"},{id:"icdngiujy",uiAttribs:{},portsIn:[{name:"Blend Mode index",value:0},{name:"Blend Mode",value:"normal"},{name:"Amount",value:1},{name:"Strength",value:22.45},{name:"Width",value:.309},{name:"Mul Color",value:0}],portsOut:[{name:"Trigger",links:[{portIn:"Render",portOut:"Trigger",objIn:"9hrvskmhm",objOut:"icdngiujy"}]}],objName:"Ops.Gl.ImageCompose.EdgeDetection_v4"},{id:"15luv17fw",uiAttribs:{},portsIn:[{name:"Scale index",value:0},{name:"Scale",value:"Stretch"},{name:"Flip Y",value:0},{name:"Flip X",value:0}],objName:"Ops.Gl.Meshes.FullscreenRectangle_v2"},{id:"uwnbqg5oi",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:640},{name:"Height",value:480},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:0},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Pixel Format index",value:4},{name:"Pixel Format",value:"RGBA 8bit ubyte"},{name:"R",value:0},{name:"G",value:0},{name:"B",value:0},{name:"A",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"xa9u711wc",objOut:"uwnbqg5oi"}]},{name:"texture_out",links:[{portIn:"Image",portOut:"texture_out",objIn:"eqbgkche8",objOut:"uwnbqg5oi"},{portIn:"Image",portOut:"texture_out",objIn:"9zd3xncyj",objOut:"uwnbqg5oi"}]},{name:"Aspect Ratio",value:1.728813559322034},{name:"Texture Width",value:816},{name:"Texture Height",value:472}],objName:"Ops.Gl.ImageCompose.ImageCompose_v4"},{id:"2d1lgpmyb",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:640},{name:"Height",value:480},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:0},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Pixel Format index",value:4},{name:"Pixel Format",value:"RGBA 8bit ubyte"},{name:"R",value:0},{name:"G",value:0},{name:"B",value:0},{name:"A",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"eqbgkche8",objOut:"2d1lgpmyb"}]},{name:"texture_out",links:[{portIn:"Texture",portOut:"texture_out",objIn:"15luv17fw",objOut:"2d1lgpmyb"}]},{name:"Aspect Ratio",value:1.728813559322034},{name:"Texture Width",value:816},{name:"Texture Height",value:472}],objName:"Ops.Gl.ImageCompose.ImageCompose_v4"},{id:"4lmzwigb6",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:640},{name:"Height",value:480},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:0},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Pixel Format index",value:4},{name:"Pixel Format",value:"RGBA 8bit ubyte"},{name:"R",value:0},{name:"G",value:0},{name:"B",value:0},{name:"A",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"gkuftz1vk",objOut:"4lmzwigb6"}]},{name:"texture_out",links:[{portIn:"displaceTex",portOut:"texture_out",objIn:"8liqcrkhm",objOut:"4lmzwigb6"},{portIn:"displaceTex",portOut:"texture_out",objIn:"66nu2t4c0",objOut:"4lmzwigb6"}]},{name:"Aspect Ratio",value:1.728813559322034},{name:"Texture Width",value:816},{name:"Texture Height",value:472}],objName:"Ops.Gl.ImageCompose.ImageCompose_v4"},{id:"j8hy6t7gi",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:640},{name:"Height",value:480},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:0},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Pixel Format index",value:11},{name:"Pixel Format",value:"RGBA 32bit float"},{name:"R",value:0},{name:"G",value:0},{name:"B",value:0},{name:"A",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"9zd3xncyj",objOut:"j8hy6t7gi"}]},{name:"texture_out",links:[{portIn:"Image",portOut:"texture_out",objIn:"gkuftz1vk",objOut:"j8hy6t7gi"},{portIn:"Image",portOut:"texture_out",objIn:"j6krkvhg1",objOut:"j8hy6t7gi"},{portIn:"Texture",portOut:"texture_out",objIn:"ogcajj0e4",objOut:"j8hy6t7gi"}]},{name:"Aspect Ratio",value:1.728813559322034},{name:"Texture Width",value:816},{name:"Texture Height",value:472}],objName:"Ops.Gl.ImageCompose.ImageCompose_v4"},{id:"q4aggobfq",uiAttribs:{},portsIn:[{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:640},{name:"Height",value:480},{name:"Filter index",value:1},{name:"Filter",value:"linear"},{name:"Wrap index",value:0},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Pixel Format index",value:4},{name:"Pixel Format",value:"RGBA 8bit ubyte"},{name:"R",value:0},{name:"G",value:0},{name:"B",value:0},{name:"A",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"j6krkvhg1",objOut:"q4aggobfq"}]},{name:"texture_out",links:[{portIn:"Mask",portOut:"texture_out",objIn:"29v1o6twy",objOut:"q4aggobfq"}]},{name:"Aspect Ratio",value:1.728813559322034},{name:"Texture Width",value:816},{name:"Texture Height",value:472}],objName:"Ops.Gl.ImageCompose.ImageCompose_v4"},{id:"ogcajj0e4",uiAttribs:{},portsIn:[{name:"use original size",value:1},{name:"width",value:816},{name:"height",value:472},{name:"filter index",value:1},{name:"filter",value:"linear"},{name:"Pixel Format index",value:11},{name:"Pixel Format",value:"RGBA 32bit float"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"wrap index",value:0},{name:"wrap",value:"clamp to edge"},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"A"},{name:"Convert Greyscale index",value:0},{name:"Convert Greyscale",value:"Off"},{name:"Invert R",value:0},{name:"Invert G",value:0},{name:"Invert B",value:0},{name:"Invert A",value:0},{name:"Flip X",value:0},{name:"Flip Y",value:0}],portsOut:[{name:"texture_out",links:[{portIn:"Image",portOut:"texture_out",objIn:"8c9l7yn0u",objOut:"ogcajj0e4"}]},{name:"Aspect Ratio",value:1.728813559322034}],objName:"Ops.Gl.Textures.CopyTexture_v3"},{id:"p0bacq3zj",uiAttribs:{},portsIn:[{name:"Max Pixel Density (DPR)",value:2},{name:"FPS Limit",value:0},{name:"Reduce FPS unfocussed",value:0},{name:"Transparent",value:0},{name:"Active",value:1}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"vpd1vygf5",objOut:"p0bacq3zj"}]},{name:"width",value:816.25},{name:"height",value:472.5},{name:"Pixel Density",value:1.25}],objName:"Ops.Gl.MainLoop_v2"},{id:"9tw2wge8h",uiAttribs:{},portsIn:[{name:"Speed",value:1.24},{name:"Play",value:0},{name:"Sync to timeline",value:0}],portsOut:[{name:"Time",links:[{portIn:"y",portOut:"Time",objIn:"rj0fk1p9r",objOut:"9tw2wge8h"},{portIn:"x",portOut:"Time",objIn:"rj0fk1p9r",objOut:"9tw2wge8h"}]}],objName:"Ops.Anim.Timer_v2"},{id:"vpd1vygf5",uiAttribs:{},portsIn:[{name:"Visible",value:1},{name:"Measure GPU",value:1},{name:"Position index",value:0},{name:"Position",value:"top"},{name:"Open",value:0},{name:"Smooth Graph",value:1},{name:"Scale",value:3},{name:"Size",value:128}],portsOut:[{name:"childs",links:[{portIn:"exe",portOut:"childs",objIn:"ahhvyxare",objOut:"vpd1vygf5"}]},{name:"FPS",value:61}],objName:"Ops.Gl.Performance"},{id:"ulky0u81l",uiAttribs:{},portsIn:[{name:"Mul Orientation",value:1}],portsOut:[{name:"Orientation Alpha",value:0},{name:"Orientation Beta",value:0},{name:"Orientation Gamma",value:0},{name:"Acceleration X",links:[{portIn:"value",portOut:"Acceleration X",objIn:"nov1wk7oj",objOut:"ulky0u81l"}]},{name:"Acceleration Y",links:[{portIn:"value",portOut:"Acceleration Y",objIn:"jsauba22j",objOut:"ulky0u81l"}]},{name:"Acceleration Z",value:0},{name:"Acceleration X no gravity",value:0},{name:"Acceleration Y no gravity",value:0},{name:"Acceleration Z no gravity",value:0},{name:"Rotation Rate Alpha",value:0},{name:"Rotation Rate Beta",value:0},{name:"Rotation Rate Gamma",value:0}],objName:"Ops.Devices.Mobile.MotionSensor_v2"},{id:"ibu7qifgr",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Request Permissions",portOut:"Next",objIn:"ulky0u81l",objOut:"ibu7qifgr"}]},{name:"Was Triggered",value:1}],objName:"Ops.Trigger.TriggerOnce"},{id:"ltlmhh7y4",uiAttribs:{},portsIn:[{name:"Disable Scaling",value:1},{name:"Disable Scroll",value:1},{name:"HDPI Coordinates",value:0},{name:"Active",value:1},{name:"Area index",value:0},{name:"Area",value:"Canvas"},{name:"Normalize Coordinates",value:0},{name:"Flip Y",value:0}],portsOut:[{name:"Touched",value:false},{name:"Fingers",value:0},{name:"Finger 1 X",links:[{portIn:"number",portOut:"Finger 1 X",objIn:"k483o67nn",objOut:"ltlmhh7y4"}]},{name:"Finger 1 Y",links:[{portIn:"number",portOut:"Finger 1 Y",objIn:"wgzrwhq1v",objOut:"ltlmhh7y4"}]},{name:"Finger 1 Force",value:0},{name:"Finger 2 X",value:0},{name:"Finger 2 Y",value:0},{name:"Finger 2 Force",value:0},{name:"Touch End",links:[{portIn:"Request Permissions",portOut:"Touch End",objIn:"ulky0u81l",objOut:"ltlmhh7y4"}]}],objName:"Ops.Devices.TouchScreen"},{id:"28u2mg3n4",uiAttribs:{},portsIn:[{name:"Visible",value:1},{name:"Measure GPU",value:1},{name:"Position index",value:0},{name:"Position",value:"top"},{name:"Open",value:0},{name:"Smooth Graph",value:1},{name:"Scale",value:3},{name:"Size",value:128}],portsOut:[{name:"childs",links:[{portIn:"Exec",portOut:"childs",objIn:"ibu7qifgr",objOut:"28u2mg3n4"}]},{name:"FPS",value:61}],objName:"Ops.Gl.Performance"},{id:"nov1wk7oj",uiAttribs:{},portsIn:[{name:"old min",value:-10},{name:"old max",value:10},{name:"new min",value:-1},{name:"new max",value:1},{name:"Easing index",value:0},{name:"Easing",value:"Linear"},{name:"Clamp",value:1}],portsOut:[{name:"result",links:[{portIn:"X",portOut:"result",objIn:"d6dcigfu3",objOut:"nov1wk7oj"},{portIn:"Pos X",portOut:"result",objIn:"c5rasvmos",objOut:"nov1wk7oj"}]}],objName:"Ops.Math.MapRange"},{id:"jsauba22j",uiAttribs:{},portsIn:[{name:"old min",value:-10},{name:"old max",value:10},{name:"new min",value:-1},{name:"new max",value:1},{name:"Easing index",value:0},{name:"Easing",value:"Linear"},{name:"Clamp",value:1}],portsOut:[{name:"result",links:[{portIn:"Y",portOut:"result",objIn:"d6dcigfu3",objOut:"jsauba22j"},{portIn:"Pos Y",portOut:"result",objIn:"c5rasvmos",objOut:"jsauba22j"}]}],objName:"Ops.Math.MapRange"},{id:"k483o67nn",uiAttribs:{},portsIn:[{name:"Decimal Places",value:0}],portsOut:[{name:"result",value:0}],objName:"Ops.Math.Round"},{id:"wgzrwhq1v",uiAttribs:{},portsIn:[{name:"Decimal Places",value:0}],portsOut:[{name:"result",value:0}],objName:"Ops.Math.Round"},{id:"zdi29vunf",uiAttribs:{},portsIn:[{name:"Coordinates index",value:0},{name:"Coordinates",value:"-1 to 1"},{name:"Area index",value:0},{name:"Area",value:"Canvas"},{name:"flip y",value:1},{name:"right click prevent default",value:1},{name:"Touch support",value:1},{name:"Passive Events",value:0},{name:"Active",value:1}],portsOut:[{name:"x",value:-.996937212863706},{name:"y",value:-.5396825396825398},{name:"Button is down",value:0},{name:"Mouse is hovering",value:0},{name:"Movement X",value:-59.2},{name:"Movement Y",value:6.4}],objName:"Ops.Devices.Mouse.Mouse_v3"},{id:"d6dcigfu3",uiAttribs:{},portsIn:[{name:"Amount",value:1},{name:"Blend Mode index",value:0},{name:"Blend Mode",value:"normal"},{name:"Alpha Mask index",value:0},{name:"Alpha Mask",value:"Off"},{name:"Coordinates index",value:1},{name:"Coordinates",value:"-1-1"},{name:"Center",value:0},{name:"Inner",value:0},{name:"Width",value:.25},{name:"Height",value:.25},{name:"Rotate",value:0},{name:"roundness",value:0},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"Start X",value:0},{name:"Start Y",value:0},{name:"Map Width",value:1},{name:"Map Height",value:1}],objName:"Ops.Gl.ImageCompose.RectangleTexture_v5"},{id:"c5rasvmos",uiAttribs:{},portsIn:[{name:"Amount",value:1},{name:"Blend Mode index",value:0},{name:"Blend Mode",value:"normal"},{name:"Alpha Mask index",value:0},{name:"Alpha Mask",value:"Off"},{name:"Size",value:.084},{name:"Inner",value:0},{name:"Stretch X",value:0},{name:"Stretch Y",value:0},{name:"fallOff index",value:1},{name:"fallOff",value:"SmoothStep"},{name:"fade Out",value:.402},{name:"warn overflow",value:1},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1}],objName:"Ops.Gl.ImageCompose.CircleTexture_v4"},{id:"q6e6xum36",uiAttribs:{},portsOut:[{name:"Total Connections",value:2},{name:"Trigger_0",links:[{portIn:"render",portOut:"Trigger_0",objIn:"d6dcigfu3",objOut:"q6e6xum36"}]},{name:"Trigger_1",links:[{portIn:"Render",portOut:"Trigger_1",objIn:"c5rasvmos",objOut:"q6e6xum36"}]}],objName:"Ops.Trigger.RouteTriggerMultiPort"},{id:"vy7vdlknr",uiAttribs:{},portsIn:[{name:"Disable Scaling",value:1},{name:"Disable Scroll",value:1},{name:"HDPI Coordinates",value:0},{name:"Active",value:1},{name:"Area index",value:0},{name:"Area",value:"Canvas"},{name:"Normalize Coordinates",value:0},{name:"Flip Y",value:0}],portsOut:[{name:"Touched",links:[{portIn:"Use Value 1",portOut:"Touched",objIn:"wn942h2ug",objOut:"vy7vdlknr"}]},{name:"Fingers",value:0},{name:"Finger 1 X",value:0},{name:"Finger 1 Y",value:0},{name:"Finger 1 Force",value:0},{name:"Finger 2 X",value:0},{name:"Finger 2 Y",value:0},{name:"Finger 2 Force",value:0},{name:"Touch Start",links:[{portIn:"trigger",portOut:"Touch Start",objIn:"3iw9fs492",objOut:"vy7vdlknr"}]}],objName:"Ops.Devices.TouchScreen"},{id:"wn942h2ug",uiAttribs:{},portsIn:[{name:"Value 0",value:0},{name:"Value 1",value:1}],portsOut:[{name:"Out Value",links:[{portIn:"Default",portOut:"Out Value",objIn:"3iw9fs492",objOut:"wn942h2ug"}]}],objName:"Ops.Boolean.BoolToNumber_v2"},{id:"3iw9fs492",uiAttribs:{},portsOut:[{name:"result",links:[{portIn:"Switch Value",portOut:"result",objIn:"q6e6xum36",objOut:"3iw9fs492"}]}],objName:"Ops.Boolean.ToggleBool_v2"}],export:{time:"2024-08-24 21:29",service:"download",exportNumber:4}};if(!CABLES.exportedPatch){CABLES.exportedPatch=CABLES.exportedPatches["XhXUnm"]}"use strict";var CABLES=CABLES||{};CABLES.OPS=CABLES.OPS||{};var Ops=Ops||{};Ops.Gl=Ops.Gl||{};Ops.Anim=Ops.Anim||{};Ops.Math=Ops.Math||{};Ops.Boolean=Ops.Boolean||{};Ops.Devices=Ops.Devices||{};Ops.Sidebar=Ops.Sidebar||{};Ops.Trigger=Ops.Trigger||{};Ops.Gl.Meshes=Ops.Gl.Meshes||{};Ops.Gl.Textures=Ops.Gl.Textures||{};Ops.Devices.Mouse=Ops.Devices.Mouse||{};Ops.Devices.Mobile=Ops.Devices.Mobile||{};Ops.Gl.ImageCompose=Ops.Gl.ImageCompose||{};Ops.Gl.ImageCompose.Noise=Ops.Gl.ImageCompose.Noise||{};Ops.Sidebar.Sidebar=function(){CABLES.Op.apply(this,arguments);const o=this;const n=o.attachments={style_css:" /*\n * SIDEBAR\n  http://danielstern.ca/range.css/#/\n  https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-progress-value\n */\n\n.sidebar-icon-undo\n{\n    width:10px;\n    height:10px;\n    background-image: url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='grey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7v6h6'/%3E%3Cpath d='M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'/%3E%3C/svg%3E\");\n    background-size: 19px;\n    background-repeat: no-repeat;\n    top: -19px;\n    margin-top: -7px;\n}\n\n.icon-chevron-down {\n    top: 2px;\n    right: 9px;\n}\n\n.iconsidebar-chevron-up,.sidebar__close-button {\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n}\n\n.iconsidebar-minimizebutton {\n    background-position: 98% center;\n    background-repeat: no-repeat;\n}\n\n.sidebar-cables-right\n{\n    right: 15px;\n    left: initial !important;\n}\n\n.sidebar-cables *\n{\n    color: #BBBBBB !important;\n    font-family: Arial;\n}\n\n.sidebar-cables {\n    --sidebar-color: #07f78c;\n    --sidebar-width: 220px;\n    --sidebar-border-radius: 10px;\n    --sidebar-monospace-font-stack: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n    --sidebar-hover-transition-time: .2s;\n\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    border-radius: var(--sidebar-border-radius);\n    z-index: 100000;\n    width: var(--sidebar-width);\n    max-height: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    overflow-x: hidden;\n    font-size: 13px;\n    line-height: 1em; /* prevent emojis from breaking height of the title */\n}\n\n.sidebar-cables::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar-cables::-webkit-scrollbar {\n    background-color: transparent;\n    --cables-scrollbar-width: 8px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-track {\n    background-color: transparent;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-thumb {\n    background-color: #333333;\n    border-radius: 4px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables--closed {\n    width: auto;\n}\n\n.sidebar__close-button {\n    background-color: #222;\n    /*-webkit-user-select: none;  */\n    /*-moz-user-select: none;     */\n    /*-ms-user-select: none;      */\n    /*user-select: none;          */\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    /*color: #CCCCCC;*/\n    height: 2px;\n    /*border-bottom:20px solid #222;*/\n\n    /*box-sizing: border-box;*/\n    /*padding-top: 2px;*/\n    /*text-align: center;*/\n    /*cursor: pointer;*/\n    /*border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);*/\n    /*opacity: 1.0;*/\n    /*transition: opacity 0.3s;*/\n    /*overflow: hidden;*/\n}\n\n.sidebar__close-button-icon {\n    display: inline-block;\n    /*opacity: 0;*/\n    width: 20px;\n    height: 20px;\n    /*position: relative;*/\n    /*top: -1px;*/\n\n\n}\n\n.sidebar--closed {\n    width: auto;\n    margin-right: 20px;\n}\n\n.sidebar--closed .sidebar__close-button {\n    margin-top: 8px;\n    margin-left: 8px;\n    padding:10px;\n\n    height: 25px;\n    width:25px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.3;\n    background-repeat: no-repeat;\n    background-position: center center;\n    transform:rotate(180deg);\n}\n\n.sidebar--closed .sidebar__group\n{\n    display:none;\n\n}\n.sidebar--closed .sidebar__close-button-icon {\n    background-position: 0px 0px;\n}\n\n.sidebar__close-button:hover {\n    background-color: #111111;\n    opacity: 1.0 !important;\n}\n\n/*\n * SIDEBAR ITEMS\n */\n\n.sidebar__items {\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5;*/\n    background-color: #222;\n    padding-bottom: 20px;\n}\n\n.sidebar--closed .sidebar__items {\n    /* max-height: 0; */\n    height: 0;\n    display: none;\n    pointer-interactions: none;\n}\n\n.sidebar__item__right {\n    float: right;\n}\n\n/*\n * SIDEBAR GROUP\n */\n\n.sidebar__group {\n    /*background-color: #1A1A1A;*/\n    overflow: hidden;\n    box-sizing: border-box;\n    animate: height;\n    /*background-color: #151515;*/\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5s; */\n--sidebar-group-header-height: 33px;\n}\n\n.sidebar__group-items\n{\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.sidebar__group--closed {\n    /* max-height: 13px; */\n    height: var(--sidebar-group-header-height);\n}\n\n.sidebar__group-header {\n    box-sizing: border-box;\n    color: #EEEEEE;\n    background-color: #151515;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n\n    /*height: 100%;//var(--sidebar-group-header-height);*/\n\n    padding-top: 7px;\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n    cursor: pointer;\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    position: relative;\n}\n\n.sidebar__group-header:hover {\n  background-color: #111111;\n}\n\n.sidebar__group-header-title {\n  /*float: left;*/\n  overflow: hidden;\n  padding: 0 15px;\n  padding-top:5px;\n  padding-bottom:10px;\n  font-weight:bold;\n}\n\n.sidebar__group-header-undo {\n    float: right;\n    overflow: hidden;\n    padding-right: 15px;\n    padding-top:5px;\n    font-weight:bold;\n  }\n\n.sidebar__group-header-icon {\n    width: 17px;\n    height: 14px;\n    background-repeat: no-repeat;\n    display: inline-block;\n    position: absolute;\n    background-size: cover;\n\n    /* icon open */\n    /* feather icon: chevron up */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 4px;\n    right: 5px;\n    opacity: 0.0;\n    transition: opacity 0.3;\n}\n\n.sidebar__group-header:hover .sidebar__group-header-icon {\n    opacity: 1.0;\n}\n\n/* icon closed */\n.sidebar__group--closed .sidebar__group-header-icon {\n    /* feather icon: chevron down */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    top: 4px;\n    right: 5px;\n}\n\n/*\n * SIDEBAR ITEM\n */\n\n.sidebar__item\n{\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left:15px;\n    padding-right:15px;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.sidebar__item-label {\n    display: inline-block;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    margin-top: 2px;\n    text-overflow: ellipsis;\n    /* overflow: hidden; */\n}\n\n.sidebar__item-value-label {\n    font-family: var(--sidebar-monospace-font-stack);\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 60%;\n}\n\n.sidebar__item-value-label::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar__item + .sidebar__item,\n.sidebar__item + .sidebar__group,\n.sidebar__group + .sidebar__item,\n.sidebar__group + .sidebar__group {\n    /*border-top: 1px solid #272727;*/\n}\n\n/*\n * SIDEBAR ITEM TOGGLE\n */\n\n/*.sidebar__toggle */\n.icon_toggle{\n    cursor: pointer;\n}\n\n.sidebar__toggle-input {\n    --sidebar-toggle-input-color: #CCCCCC;\n    --sidebar-toggle-input-color-hover: #EEEEEE;\n    --sidebar-toggle-input-border-size: 2px;\n    display: inline;\n    float: right;\n    box-sizing: border-box;\n    border-radius: 50%;\n    cursor: pointer;\n    --toggle-size: 11px;\n    margin-top: 2px;\n    background-color: transparent !important;\n    border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\n    width: var(--toggle-size);\n    height: var(--toggle-size);\n    transition: background-color var(--sidebar-hover-transition-time);\n    transition: border-color var(--sidebar-hover-transition-time);\n}\n.sidebar__toggle:hover .sidebar__toggle-input {\n    border-color: var(--sidebar-toggle-input-color-hover);\n}\n\n.sidebar__toggle .sidebar__item-value-label {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    max-width: calc(50% - 12px);\n}\n.sidebar__toggle-input::after { clear: both; }\n\n.sidebar__toggle--active .icon_toggle\n{\n\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjMDZmNzhiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA2Zjc4YiIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjMDZmNzhiIiBzdHJva2U9IiMwNmY3OGIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNmY3OGIiIHN0cm9rZT0iIzA2Zjc4YiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    opacity: 1;\n    transform: rotate(0deg);\n}\n\n\n.icon_toggle\n{\n    float: right;\n    width:40px;\n    height:18px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjYWFhYWFhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2FhYWFhYSIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjYWFhYWFhIiBzdHJva2U9IiNhYWFhYWEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNhYWFhYWEiIHN0cm9rZT0iI2FhYWFhYSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    background-size: 50px 37px;\n    background-position: -6px -10px;\n    transform: rotate(180deg);\n    opacity: 0.4;\n}\n\n\n\n/*.sidebar__toggle--active .sidebar__toggle-input {*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    background-color: var(--sidebar-toggle-input-color);*/\n/*}*/\n/*.sidebar__toggle--active .sidebar__toggle-input:hover*/\n/*{*/\n/*    background-color: var(--sidebar-toggle-input-color-hover);*/\n/*    border-color: var(--sidebar-toggle-input-color-hover);*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    transition: border-color var(--sidebar-hover-transition-time);*/\n/*}*/\n\n/*\n * SIDEBAR ITEM BUTTON\n */\n\n.sidebar__button {}\n\n.sidebar__button-input:active\n{\n    background-color: #555 !important;\n}\n\n.sidebar__button-input {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    min-height: 24px;\n    background-color: transparent;\n    color: #CCCCCC;\n    box-sizing: border-box;\n    padding-top: 3px;\n    text-align: center;\n    border-radius: 125px;\n    border:2px solid #555;\n    cursor: pointer;\n    padding-bottom: 3px;\n}\n\n.sidebar__button-input.plus, .sidebar__button-input.minus {\n    display: inline-block;\n    min-width: 20px;\n}\n\n.sidebar__button-input:hover {\n  background-color: #333;\n  border:2px solid var(--sidebar-color);\n}\n\n/*\n * VALUE DISPLAY (shows a value)\n */\n\n.sidebar__value-display {}\n\n/*\n * SLIDER\n */\n\n.sidebar__slider {\n    --sidebar-slider-input-height: 3px;\n}\n\n.sidebar__slider-input-wrapper {\n    width: 100%;\n\n    margin-top: 8px;\n    position: relative;\n}\n\n.sidebar__slider-input {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n    width: 100%;\n    height: var(--sidebar-slider-input-height);\n    background: #555;\n    cursor: pointer;\n    outline: 0;\n\n    -webkit-transition: .2s;\n    transition: background-color .2s;\n    border: none;\n}\n\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\n    border: none;\n}\n\n.sidebar__slider-input-active-track {\n    user-select: none;\n    position: absolute;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: var(--sidebar-color);\n    pointer-events: none;\n    height: var(--sidebar-slider-input-height);\n    max-width: 100%;\n}\n\n/* Mouse-over effects */\n.sidebar__slider-input:hover {\n    /*background-color: #444444;*/\n}\n\n/*.sidebar__slider-input::-webkit-progress-value {*/\n/*    background-color: green;*/\n/*    color:green;*/\n\n/*    }*/\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.sidebar__slider-input::-moz-range-thumb\n{\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    z-index: 900 !important;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: var(--sidebar-color) !important;\n    user-select: none;\n\n}\n\n.sidebar__slider-input::-webkit-slider-thumb\n{\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    user-select: none;\n    height: 15px;\n    width: 15px;\n    display: block;\n    z-index: 900 !important;\n    border: 0;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: #777 !important;\n}\n\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\n    background-color: #EEEEEE !important;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb {*/\n\n/*    width: 0 !important;*/\n/*    height: var(--sidebar-slider-input-height);*/\n/*    background: #EEEEEE;*/\n/*    cursor: pointer;*/\n/*    border-radius: 0 !important;*/\n/*    border: none;*/\n/*    outline: 0;*/\n/*    z-index: 100 !important;*/\n/*}*/\n\n.sidebar__slider-input::-moz-range-track {\n    background-color: transparent;\n    z-index: 11;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb:hover {*/\n  /* background-color: #EEEEEE; */\n/*}*/\n\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input-active-track {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-moz-range-thumb {*/\n/*    background-color: #fff !important;*/\n/*}*/\n\n/*.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-webkit-slider-thumb {*/\n/*    background-color: #EEEEEE;*/\n/*}*/\n\n.sidebar__slider input[type=text],\n.sidebar__slider input[type=paddword]\n{\n    box-sizing: border-box;\n    /*background-color: #333333;*/\n    text-align: right;\n    color: #BBBBBB;\n    display: inline-block;\n    background-color: transparent !important;\n\n    width: 40%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__slider input[type=text]:active,\n.sidebar__slider input[type=text]:focus,\n.sidebar__slider input[type=text]:hover\n.sidebar__slider input[type=password]:active,\n.sidebar__slider input[type=password]:focus,\n.sidebar__slider input[type=password]:hover\n{\n\n    color: #EEEEEE;\n}\n\n/*\n * TEXT / DESCRIPTION\n */\n\n.sidebar__text .sidebar__item-label {\n    width: auto;\n    display: block;\n    max-height: none;\n    margin-right: 0;\n    line-height: 1.1em;\n}\n\n/*\n * SIDEBAR INPUT\n */\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=date],\n.sidebar__text-input input[type=datetime-local],\n.sidebar__text-input input[type=text],\n.sidebar__text-input input[type=password] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    border:1px solid #666;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    color-scheme: dark;\n}\n\n.sidebar__text-input textarea:focus::placeholder {\n  color: transparent;\n}\n\n.sidebar__color-picker .sidebar__item-label\n{\n    width:45%;\n}\n\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text]:active,\n.sidebar__text-input input[type=text]:focus,\n.sidebar__text-input input[type=text]:hover,\n.sidebar__text-input input[type=password]:active,\n.sidebar__text-input input[type=password]:focus,\n.sidebar__text-input input[type=password]:hover {\n    background-color: transparent;\n    color: #EEEEEE;\n}\n\n.sidebar__text-input textarea\n{\n    margin-top:10px;\n    height:60px;\n    width:100%;\n}\n\n/*\n * SIDEBAR SELECT\n */\n\n\n\n .sidebar__select {}\n .sidebar__select-select {\n    color: #BBBBBB;\n    /*-webkit-appearance: none;*/\n    /*-moz-appearance: none;*/\n    appearance: none;\n    /*box-sizing: border-box;*/\n    width: 50%;\n    /*height: 20px;*/\n    background-color: #333333;\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);*/\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: 16px 16px;\n    margin: 0;\n    /*padding: 0 2 2 6px;*/\n    border-radius: 5px;\n    border: 1px solid #777;\n    background-color: #444;\n    cursor: pointer;\n    outline: none;\n    padding-left: 5px;\n\n }\n\n.sidebar__select-select:hover,\n.sidebar__select-select:active,\n.sidebar__select-select:inactive {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*.sidebar__select-select option*/\n/*{*/\n/*    background-color: #444444;*/\n/*    color: #bbb;*/\n/*}*/\n\n.sidebar__select-select option:checked\n{\n    background-color: #000;\n    color: #FFF;\n}\n\n\n/*\n * COLOR PICKER\n */\n\n\n .sidebar__color-picker input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    margin-right: 7px;\n}\n\n.sidebar__color-picker input[type=text]:active,\n.sidebar__color-picker input[type=text]:focus,\n.sidebar__color-picker input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\ndiv.sidebar__color-picker-color-input,\n.sidebar__color-picker input[type=color],\n.sidebar__palette-picker input[type=color] {\n    display: inline-block;\n    border-radius: 100%;\n    height: 14px;\n    width: 14px;\n\n    padding: 0;\n    border: none;\n    /*border:2px solid red;*/\n    border-color: transparent;\n    outline: none;\n    background: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    position: relative;\n    top: 3px;\n}\n.sidebar__color-picker input[type=color]:focus,\n.sidebar__palette-picker input[type=color]:focus {\n    outline: none;\n}\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\n    border: none;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\n    padding: 0;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\n    border: none;\n    border-radius: 100%;\n}\n\n/*\n * Palette Picker\n */\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\n    margin-left: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\n    margin-right: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\n    margin: 0 4px;\n}\n\n.sidebar__palette-picker .circlebutton {\n    width: 14px;\n    height: 14px;\n    border-radius: 1em;\n    display: inline-block;\n    top: 3px;\n    position: relative;\n}\n\n/*\n * Preset\n */\n.sidebar__item-presets-preset\n{\n    padding:4px;\n    cursor:pointer;\n    padding-left:8px;\n    padding-right:8px;\n    margin-right:4px;\n    background-color:#444;\n}\n\n.sidebar__item-presets-preset:hover\n{\n    background-color:#666;\n}\n\n.sidebar__greyout\n{\n    background: #222;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    top: 0;\n}\n\n.sidebar_tabs\n{\n    background-color: #151515;\n    padding-bottom: 0px;\n}\n\n.sidebar_switchs\n{\n    float: right;\n}\n\n.sidebar_tab\n{\n    float:left;\n    background-color: #151515;\n    border-bottom:1px solid transparent;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_tab_active\n{\n    background-color: #272727;\n    color:white;\n}\n\n.sidebar_tab:hover\n{\n    border-bottom:1px solid #777;\n    color:white;\n}\n\n\n.sidebar_switch\n{\n    float:left;\n    background-color: #444;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_switch:last-child\n{\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px;\n}\n\n.sidebar_switch:first-child\n{\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n}\n\n\n.sidebar_switch_active\n{\n    background-color: #999;\n    color:white;\n}\n\n.sidebar_switch:hover\n{\n    color:white;\n}\n\n"};const i="cables-sidebar-style";const r="cables-sidebar-dynamic-style";const a="sidebar-cables";const l="sidebar"+CABLES.uuid();const u="sidebar__items";const c="sidebar__close-button";const s="";const h="";let f=null;let G=null;let d=null;const e=o.inValueBool("Visible",true);const t=o.inValueSlider("Opacity",1);const g=o.inValueBool("Default Minimized");const p=o.inValueSlider("Minimized Opacity",.5);const m=o.inValueBool("Show undo button",false);const _=o.inValueBool("Show Minimize",false);const v=o.inString("Title","");const b=o.inValueBool("Side");const x=o.inValueBool("Default CSS",true);let I=o.patch.cgl.canvas.ownerDocument;const A=o.outObject("childs");A.setUiAttribs({title:"Children"});const E=o.outBool("Opfened");E.setUiAttribs({title:"Opened"});let T=I.querySelector("."+l);if(!T)T=D();const C=T.querySelector("."+u);A.set({parentElement:C,parentOp:o});N();R();w();x.onChange=()=>{R();w()};e.onChange=B;t.onChange=M;g.onChange=N;p.onChange=y;m.onChange=L;o.onDelete=U;function y(){w()}_.onChange=S;function S(e){if(!e||e.uiAttribs)e=I.querySelector(".sidebar-cables .sidebar__group-header");if(!e)return;const t=I.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");if(_.get()){e.classList.add("iconsidebar-chevron-up");e.classList.add("iconsidebar-minimizebutton");if(t)t.style.marginRight="20px"}else{e.classList.remove("iconsidebar-chevron-up");e.classList.remove("iconsidebar-minimizebutton");if(t)t.style.marginRight="initial"}}b.onChange=function(){if(!T)return;if(b.get())T.classList.add("sidebar-cables-right");else T.classList.remove("sidebar-cables-right")};function L(){const e=I.querySelector(".sidebar-cables .sidebar__group-header");if(e){O(e)}}function O(e){if(e){const t=I.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");if(t){if(!m.get()){t.remove()}}else{if(m.get()){const n=I.createElement("span");n.classList.add("sidebar__group-header-undo");n.classList.add("sidebar-icon-undo");n.addEventListener("click",function(e){e.stopPropagation();const t=I.querySelectorAll(".sidebar-cables .sidebar__reloadable");const n=I.createEvent("MouseEvents");n.initEvent("dblclick",true,true);t.forEach(e=>{e.dispatchEvent(n)})});e.appendChild(n)}}}S(e)}function N(){if(!f){return}if(g.get()){T.classList.add("sidebar--closed");if(e.get())E.set(false)}else{T.classList.remove("sidebar--closed");if(e.get())E.set(true)}}function M(){const e=t.get();T.style.opacity=e}function B(){if(!T)return;if(e.get()){T.style.display="block";if(!T.classList.contains("sidebar--closed"))E.set(true)}else{T.style.display="none";E.set(false)}}b.onChanged=function(){};function w(){const e=I.querySelectorAll("."+r);if(e){e.forEach(function(e){e.parentNode.removeChild(e)})}if(!x.get())return;const t=I.createElement("style");t.classList.add("cablesEle");t.classList.add(r);let n=".sidebar--closed .sidebar__close-button { ";n+="opacity: "+p.get();n+="}";const i=I.createTextNode(n);t.appendChild(i);I.body.appendChild(t)}function D(){const e=I.createElement("div");e.classList.add(a);e.classList.add(l);const t=o.patch.cgl.canvas.parentElement;const n=I.createElement("div");n.classList.add("sidebar__group");e.appendChild(n);const i=I.createElement("div");i.classList.add("sidebar__group-header");e.appendChild(i);const r=I.createElement("span");r.classList.add("sidebar__group-header-title");d=I.createElement("span");d.classList.add("sidebar__group-header-title-text");d.innerHTML=v.get();r.appendChild(d);i.appendChild(r);O(i);S(i);n.appendChild(i);e.appendChild(n);n.addEventListener("click",P);if(!t){o.warn("[sidebar] no canvas parentelement found...");return}t.appendChild(e);const s=I.createElement("div");s.classList.add(u);e.appendChild(s);f=I.createElement("div");f.classList.add(c);f.addEventListener("click",P);e.appendChild(f);return e}v.onChange=function(){if(d)d.innerHTML=v.get()};function k(e){}function P(e){e.stopPropagation();if(!T){o.logError("Sidebar could not be closed...");return}T.classList.toggle("sidebar--closed");const t=e.target;let n=s;if(T.classList.contains("sidebar--closed")){n=h;E.set(false)}else{E.set(true)}}function R(){const e=I.querySelectorAll("."+i);if(e){e.forEach(e=>{e.parentNode.removeChild(e)})}if(!x.get())return;const t=I.createElement("style");t.innerHTML=n.style_css;t.classList.add(i);t.classList.add("cablesEle");I.body.appendChild(t)}function U(){V(T)}function V(e){if(e&&e.parentNode&&e.parentNode.removeChild)e.parentNode.removeChild(e)}};Ops.Sidebar.Sidebar.prototype=new CABLES.Op;CABLES.OPS["5a681c35-78ce-4cb3-9858-bc79c34c6819"]={f:Ops.Sidebar.Sidebar,objName:"Ops.Sidebar.Sidebar"};Ops.Sidebar.LocalFileToDataUrl=function(){CABLES.Op.apply(this,arguments);const u=this;const e=u.attachments={};const t=u.inObject("link","element"),n=u.inString("Text","Select File:"),c=u.inString("Button Text","Choose File"),i=u.inString("Accept Files",""),r=u.inBool("Allow Multiple Files",false),s=u.inValueString("Id",""),o=u.inBool("Visible",true),a=u.inBool("Grey Out",false),l=u.inTriggerButton("Show Dialog"),h=u.inTriggerButton("Reset"),f=u.outObject("childs"),d=u.outString("Data URL"),g=u.outString("Filename"),p=u.outObject("File Object"),m=u.outNumber("Num Files"),_=u.outArray("Data URLs"),v=u.outArray("Filenames"),b=u.outTrigger("File Changed");d.ignoreValueSerialize=true;const x=document.createElement("div");x.dataset.op=u.id;x.classList.add("cablesEle");x.classList.add("sidebar__item");x.classList.add("sidebar__text");const I=document.createElement("div");I.classList.add("sidebar__item-label");const A=document.createTextNode(n.get());I.appendChild(A);x.appendChild(I);const E=document.createElement("input");E.type="file";E.id="file";E.name="file";E.style["background-color"]="transparent";E.style.width="90%";E.style.display="none";const T=document.createElement("div");T.style.cursor="pointer";T.style.position="absolute";T.style.right="10px";T.style["margin-top"]="15px";T.innerHTML="&nbsp;&nbsp;✕";const C=document.createElement("div");C.classList.add("sidebar__button-input");C.innerHTML=c.get();C.onclick=()=>{E.click()};l.onTriggered=()=>{C.click()};C.style["margin-top"]="10px";C.style["padding-left"]="5px";C.style["padding-right"]="5px";C.style.width="80%";C.style["text-overflow"]="ellipsis";C.style.overflow="hidden";C.style["white-space"]="nowrap";x.appendChild(T);x.appendChild(C);x.appendChild(E);const y=document.createElement("img");E.addEventListener("change",O,false);const S=document.createElement("div");S.classList.add("sidebar__greyout");x.appendChild(S);S.style.display="none";r.onChange=()=>{if(r.get())E.setAttribute("multiple","multiple");else E.removeAttribute("multiple")};i.onChange=()=>{E.accept=i.get()};c.onChange=()=>{C.innerHTML=c.get()};a.onChange=function(){S.style.display=a.get()?"block":"none"};o.onChange=function(){x.style.display=o.get()?"block":"none"};function L(){E.value="";d.set("");C.innerHTML=c.get();b.trigger();m.set(0);_.setRef([]);v.setRef([])}h.onTriggered=L;T.addEventListener("click",L);function O(t){const n=new FileReader;const i=[];const r=[];n.onabort=function(e){u.log("File read cancelled")};n.onload=function(e){i[0]=e.target.result;d.set(e.target.result)};const s=t.target.files.length;m.set(s);let o=null;if(t.target.files[0]){for(let e=0;e<s;e++){if(e===0){n.readAsDataURL(t.target.files[0]);g.set(t.target.files[0].name);if(s==1)C.innerHTML=t.target.files[0].name;p.set(t.target.files[0])}r.push(t.target.files[e].name);const a=new FileReader;const l=e;a.onload=function(e){i[l]=e.target.result;C.innerHTML=s+" files selected";clearTimeout(o);o=setTimeout(()=>{_.setRef(i)},100)};a.readAsDataURL(t.target.files[e])}}else{C.innerHTML=c.get();v.setRef([]);d.set("");g.set("");p.set(null)}v.setRef(r);b.trigger()}t.onChange=w;n.onChange=M;s.onChange=N;u.onDelete=P;u.toWorkNeedsParent("Ops.Sidebar.Sidebar");function N(){x.id=s.get()}function M(){const e=n.get();I.textContent=e}function w(){f.set(null);const e=t.get();if(e&&e.parentElement){e.parentElement.appendChild(x);f.set(e)}else{if(x.parentElement){x.parentElement.removeChild(x)}}}function G(e){if(e){e.style.display="block"}}function B(e){if(e){e.style.display="none"}}function P(){R(x)}function R(e){if(e&&e.parentNode&&e.parentNode.removeChild){e.parentNode.removeChild(e)}}};Ops.Sidebar.LocalFileToDataUrl.prototype=new CABLES.Op;CABLES.OPS["c99d271e-aa5e-4a9d-a4d3-4c5137c189e8"]={f:Ops.Sidebar.LocalFileToDataUrl,objName:"Ops.Sidebar.LocalFileToDataUrl"};Ops.Gl.Texture_v2=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const s=r.inUrl("File",[".jpg",".png",".webp",".jpeg",".avif"]),t=r.inSwitch("Filter",["nearest","linear","mipmap"]),n=r.inValueSelect("Wrap",["repeat","mirrored repeat","clamp to edge"],"clamp to edge"),i=r.inSwitch("Anisotropic",["0","1","2","4","8","16"],"0"),o=r.inSwitch("Data Format",["R","RG","RGB","RGBA","SRGBA"],"RGBA"),a=r.inValueBool("Flip",false),l=r.inValueBool("Pre Multiplied Alpha",false),u=r.inValueBool("Active",true),c=r.inBool("Save Memory",true),h=r.outTexture("Texture"),f=r.inBool("Add Cachebuster",false),d=r.inTriggerButton("Reload"),g=r.outNumber("Width"),p=r.outNumber("Height"),m=r.outNumber("Aspect Ratio"),_=r.outBoolNum("Loaded",0),v=r.outBoolNum("Loading",0);const b=r.patch.cgl;r.toWorkPortsNeedToBeLinked(h);r.setPortGroup("Size",[g,p]);let x=null;let I=null;let A=null;let E=CGL.Texture.FILTER_MIPMAP;let T=CGL.Texture.WRAP_REPEAT;let C=0;let y=0;l.setUiAttribs({hidePort:true});l.onChange=s.onChange=o.onChange=f.onChange=a.onChange=L;i.onChange=t.onChange=M;n.onChange=w;t.set("mipmap");n.set("repeat");h.set(CGL.Texture.getEmptyTexture(b));d.onTriggered=L;u.onChange=function(){if(u.get()){if(x!=s.get()||!A)L();else h.set(A)}else{h.set(CGL.Texture.getEmptyTexture(b));g.set(CGL.Texture.getEmptyTexture(b).width);p.set(CGL.Texture.getEmptyTexture(b).height);if(A)A.delete();r.setUiAttrib({extendTitle:""});A=null}};const S=function(){const e=CGL.Texture.getTempTexture(b);h.set(e)};function L(e){clearTimeout(y);y=setTimeout(function(){N(e)},1)}function O(){if(o.get()=="R")return CGL.Texture.PFORMATSTR_R8UB;if(o.get()=="RG")return CGL.Texture.PFORMATSTR_RG8UB;if(o.get()=="RGB")return CGL.Texture.PFORMATSTR_RGB8UB;if(o.get()=="SRGBA")return CGL.Texture.PFORMATSTR_SRGBA8;return CGL.Texture.PFORMATSTR_RGBA8UB}function N(e){r.checkMainloopExists();if(!u.get())return;if(I)I=b.patch.loading.finished(I);I=b.patch.loading.start(r.objName,s.get(),r);let t=r.patch.getFilePath(String(s.get()));if(f.get()||e===true)t=CABLES.cacheBust(t);if(String(s.get()).indexOf("data:")==0)t=s.get();let n=false;x=s.get();if(s.get()&&s.get().length>1){_.set(false);v.set(true);const i=s.get();r.setUiAttrib({extendTitle:CABLES.basename(t)});if(n)r.refreshParams();b.patch.loading.addAssetLoadingTask(()=>{r.setUiError("urlerror",null);CGL.Texture.load(b,t,function(e,t){b.checkFrameStarted("texture inittexture");if(s.get()!=i){I=b.patch.loading.finished(I);return}if(A)A.delete();if(e){const n=CGL.Texture.getErrorTexture(b);h.setRef(n);r.setUiError("urlerror",'could not load texture: "'+s.get()+'"',2);I=b.patch.loading.finished(I);return}g.set(t.width);p.set(t.height);m.set(t.width/t.height);A=t;h.setRef(A);v.set(false);_.set(true);if(c.get())A.image=null;if(I){I=b.patch.loading.finished(I)}r.checkMainloopExists()},{anisotropic:C,wrap:T,flip:a.get(),unpackAlpha:l.get(),pixelFormat:O(),filter:E});r.checkMainloopExists()})}else{S();I=b.patch.loading.finished(I)}}function M(){if(t.get()=="nearest")E=CGL.Texture.FILTER_NEAREST;else if(t.get()=="linear")E=CGL.Texture.FILTER_LINEAR;else if(t.get()=="mipmap")E=CGL.Texture.FILTER_MIPMAP;else if(t.get()=="Anisotropic")E=CGL.Texture.FILTER_ANISOTROPIC;i.setUiAttribs({greyout:E!=CGL.Texture.FILTER_MIPMAP});C=parseFloat(i.get());L()}function w(){if(n.get()=="repeat")T=CGL.Texture.WRAP_REPEAT;if(n.get()=="mirrored repeat")T=CGL.Texture.WRAP_MIRRORED_REPEAT;if(n.get()=="clamp to edge")T=CGL.Texture.WRAP_CLAMP_TO_EDGE;L()}r.onFileChanged=function(e){if(s.get()&&s.get().indexOf(e)>-1){h.set(CGL.Texture.getEmptyTexture(r.patch.cgl));h.set(CGL.Texture.getTempTexture(b));N(true)}}};Ops.Gl.Texture_v2.prototype=new CABLES.Op;CABLES.OPS["790f3702-9833-464e-8e37-6f0f813f7e16"]={f:Ops.Gl.Texture_v2,objName:"Ops.Gl.Texture_v2"};Ops.Gl.ImageCompose.PixelDifference=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={slope_frag:"\nIN vec2 texCoord;\nUNI sampler2D tex;\nUNI vec2 pixel;\nUNI float strength;\nUNI float sstep;\n\nfloat lum(vec3 c)\n{\n    return dot(vec3(0.2126,0.7152,0.0722),c);\n}\n\nvoid main()\n{\n    vec4 a,b;\n    // vec4 px=texture(tex, texCoord);\n    vec4 pxl=texture(tex, texCoord + vec2(-sstep*pixel.x, 0.0));\n    vec4 pxr=texture(tex, texCoord + vec2( sstep*pixel.x, 0.0));\n    vec4 pxt=texture(tex, texCoord + vec2(0.0, -sstep*pixel.y));\n    vec4 pxb=texture(tex, texCoord + vec2(0.0,  sstep*pixel.y));\n\n    vec4 col=vec4(0.5);\n\n    #ifdef DIR_R_HORIZONTAL\n        a=pxl;\n        b=pxr;\n    #endif\n    #ifndef DIR_R_HORIZONTAL // VERTICAL\n        a=pxt;\n        b=pxb;\n    #endif\n    #ifdef FLIP_R\n        vec4 c=a;\n        a=b;\n        b=c;\n    #endif\n    #ifdef METH_R_DIFF\n        #ifdef METH_R_R\n            col.r+=(b.r-a.r)*strength;\n        #endif\n        #ifdef METH_R_G\n            col.r+=(b.g-a.g)*strength;\n        #endif\n        #ifdef METH_R_B\n            col.r+=(b.b-a.b)*strength;\n        #endif\n    #endif\n    #ifdef METH_R_AVG\n        #ifdef METH_R_R\n            col.r+=(((b.r+a.r-0.5)/2.0))*strength;\n        #endif\n        #ifdef METH_R_G\n            col.r+=(((b.g+a.g-0.5)/2.0))*strength;\n        #endif\n        #ifdef METH_R_B\n            col.r+=(((b.b+a.b-0.5)/2.0))*strength;\n        #endif\n    #endif\n    #ifdef METH_R_LUMI\n        col.r+=(lum(b.rgb)-lum(a.rgb))*strength;\n    #endif\n    #ifdef METH_R_ONE\n        col.r=1.0;\n    #endif\n    #ifdef METH_R_ZERO\n        col.r=0.0;\n    #endif\n\n\n    ////////////////////////\n\n    #ifdef DIR_G_HORIZONTAL\n        a=pxl;\n        b=pxr;\n    #endif\n    #ifndef DIR_G_HORIZONTAL // VERTICAL\n        a=pxt;\n        b=pxb;\n    #endif\n    #ifdef FLIP_G\n        vec4 c3=a;\n        a=b;\n        b=c3;\n    #endif\n    #ifdef METH_G_DIFF\n        #ifdef METH_G_R\n            col.g+=(b.r-a.r)*strength;\n        #endif\n        #ifdef METH_G_G\n            col.g+=(b.g-a.g)*strength;\n        #endif\n        #ifdef METH_G_B\n            col.g+=(b.b-a.b)*strength;\n        #endif\n    #endif\n    #ifdef METH_G_AVG\n        #ifdef METH_G_R\n            col.g+=(((b.r+a.r-0.5)/2.0))*strength;\n        #endif\n        #ifdef METH_G_G\n            col.g+=(((b.g+a.g-0.5)/2.0))*strength;\n        #endif\n        #ifdef METH_G_B\n            col.g+=(((b.b+a.b-0.5)/2.0))*strength;\n        #endif\n    #endif\n    #ifdef METH_G_LUMI\n        col.g+=(lum(b.rgb)-lum(a.rgb))*strength;\n    #endif\n    #ifdef METH_G_ONE\n        col.g=1.0;\n    #endif\n    #ifdef METH_G_ZERO\n        col.g=0.0;\n    #endif\n\n\n    ////////////////////////\n\n    #ifdef DIR_B_HORIZONTAL\n        a=pxl;\n        b=pxr;\n    #endif\n    #ifndef DIR_B_HORIZONTAL // VERTICAL\n        a=pxt;\n        b=pxb;\n    #endif\n    #ifdef FLIP_B\n        vec4 c2=a;\n        a=b;\n        b=c2;\n    #endif\n    #ifdef METH_B_DIFF\n        #ifdef METH_B_R\n            col.b+=(b.r-a.r)*strength;\n        #endif\n        #ifdef METH_B_G\n            col.b+=(b.g-a.g)*strength;\n        #endif\n        #ifdef METH_B_B\n            col.b+=(b.b-a.b)*strength;\n        #endif\n    #endif\n    #ifdef METH_B_AVG\n        #ifdef METH_B_R\n            col.b+=(((b.r+a.r-0.5)/2.0))*strength;\n        #endif\n        #ifdef METH_B_G\n            col.b+=(((b.g+a.g-0.5)/2.0))*strength;\n        #endif\n        #ifdef METH_B_B\n            col.b+=(((b.b+a.b-0.5)/2.0))*strength;\n        #endif\n    #endif\n    #ifdef METH_B_LUMI\n        col.b+=(lum(b.rgb)-lum(a.rgb))*strength;\n    #endif\n    #ifdef METH_B_ONE\n        col.b=1.0;\n    #endif\n    #ifdef METH_B_ZERO\n        col.b=0.0;\n    #endif\n\n\n\n    col.a=1.0;\n\n    outColor= col;\n\n}\n"};const n=["Vertical Difference Red","Vertical Difference Green","Vertical Difference Blue","Vertical Average Red","Vertical Average Green","Vertical Average Blue","Vertical Luminance","Horizontal Difference Red","Horizontal Difference Green","Horizontal Difference Blue","Horizontal Average Red","Horizontal Average Green","Horizontal Average Blue","Horizontal Luminance","Midpoint","Zero","One"];const i=t.inTrigger("render"),r=t.inValue("Strength",4),s=t.inValue("Step",1),o=t.inDropDown("Red",n,"Horizontal Difference Red"),a=t.inBool("Red Flip",false),l=t.inDropDown("Green",n,"Vertical Difference Green"),u=t.inBool("Green Flip",false),c=t.inDropDown("Blue",n,"Midpoint"),h=t.inBool("Blue Flip",false),f=t.outTrigger("trigger");t.setPortGroup("Method",[a,u,h,o,l,c]);a.onChange=u.onChange=h.onChange=o.onChange=l.onChange=c.onChange=b;const d=t.patch.cgl;const g=new CGL.Shader(d,t.name,t);g.setSource(g.getDefaultVertexShader(),e.slope_frag);const p=new CGL.Uniform(g,"t","tex",0),m=new CGL.Uniform(g,"f","strength",r),_=new CGL.Uniform(g,"f","sstep",s),v=new CGL.Uniform(g,"2f","pixel");b();function b(){g.toggleDefine("DIR_R_HORIZONTAL",(o.get()+"").indexOf("Horizontal")!=-1);g.toggleDefine("DIR_G_HORIZONTAL",(l.get()+"").indexOf("Horizontal")!=-1);g.toggleDefine("DIR_B_HORIZONTAL",(c.get()+"").indexOf("Horizontal")!=-1);g.toggleDefine("METH_R_DIFF",(o.get()+"").indexOf("Difference")!=-1);g.toggleDefine("METH_G_DIFF",(l.get()+"").indexOf("Difference")!=-1);g.toggleDefine("METH_B_DIFF",(c.get()+"").indexOf("Difference")!=-1);g.toggleDefine("METH_R_AVG",(o.get()+"").indexOf("Average")!=-1);g.toggleDefine("METH_G_AVG",(l.get()+"").indexOf("Average")!=-1);g.toggleDefine("METH_B_AVG",(c.get()+"").indexOf("Average")!=-1);g.toggleDefine("METH_R_R",(o.get()+"").indexOf("Red")!=-1);g.toggleDefine("METH_G_R",(l.get()+"").indexOf("Red")!=-1);g.toggleDefine("METH_B_R",(c.get()+"").indexOf("Red")!=-1);g.toggleDefine("METH_R_G",(o.get()+"").indexOf("Green")!=-1);g.toggleDefine("METH_G_G",(l.get()+"").indexOf("Green")!=-1);g.toggleDefine("METH_B_G",(c.get()+"").indexOf("Green")!=-1);g.toggleDefine("METH_R_B",(o.get()+"").indexOf("Blue")!=-1);g.toggleDefine("METH_G_B",(l.get()+"").indexOf("Blue")!=-1);g.toggleDefine("METH_B_B",(c.get()+"").indexOf("Blue")!=-1);g.toggleDefine("METH_R_LUMI",(o.get()+"").indexOf("Luminance")!=-1);g.toggleDefine("METH_G_LUMI",(l.get()+"").indexOf("Luminance")!=-1);g.toggleDefine("METH_B_LUMI",(c.get()+"").indexOf("Luminance")!=-1);g.toggleDefine("METH_R_MID",(o.get()+"").indexOf("Midpoint")!=-1);g.toggleDefine("METH_G_MID",(l.get()+"").indexOf("Midpoint")!=-1);g.toggleDefine("METH_B_MID",(c.get()+"").indexOf("Midpoint")!=-1);g.toggleDefine("METH_R_ZERO",(o.get()+"").indexOf("Zero")!=-1);g.toggleDefine("METH_G_ZERO",(l.get()+"").indexOf("Zero")!=-1);g.toggleDefine("METH_B_ZERO",(c.get()+"").indexOf("Zero")!=-1);g.toggleDefine("METH_R_ONE",(o.get()+"").indexOf("One")!=-1);g.toggleDefine("METH_G_ONE",(l.get()+"").indexOf("One")!=-1);g.toggleDefine("METH_B_ONE",(c.get()+"").indexOf("One")!=-1);g.toggleDefine("FLIP_R",a.get());g.toggleDefine("FLIP_G",u.get());g.toggleDefine("FLIP_B",h.get())}i.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(t))return;d.pushShader(g);d.currentTextureEffect.bind();const e=d.currentTextureEffect.getCurrentSourceTexture();v.set([1/e.width,1/e.height]);d.setTexture(0,e.tex);d.currentTextureEffect.finish();d.popShader();f.trigger()}};Ops.Gl.ImageCompose.PixelDifference.prototype=new CABLES.Op;CABLES.OPS["f4e53fd9-d4c3-4d0e-839a-78543c38b8db"]={f:Ops.Gl.ImageCompose.PixelDifference,objName:"Ops.Gl.ImageCompose.PixelDifference"};Ops.Gl.ImageCompose.DrawImage_v3=function(){CABLES.Op.apply(this,arguments);const i=this;const e=i.attachments={drawimage_frag:"#ifdef HAS_TEXTURES\n    IN vec2 texCoord;\n    UNI sampler2D tex;\n    UNI sampler2D image;\n#endif\n\n#ifdef TEX_TRANSFORM\n    IN mat3 transform;\n#endif\n// UNI float rotate;\n\n{{CGL.BLENDMODES}}\n\n#ifdef HAS_TEXTUREALPHA\n   UNI sampler2D imageAlpha;\n#endif\n\nUNI float amount;\n\n#ifdef ASPECT_RATIO\n    UNI float aspectTex;\n    UNI float aspectPos;\n#endif\n\nvoid main()\n{\n    vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\n\n    #ifdef HAS_TEXTURES\n        vec2 tc=texCoord;\n\n        #ifdef TEX_FLIP_X\n            tc.x=1.0-tc.x;\n        #endif\n        #ifdef TEX_FLIP_Y\n            tc.y=1.0-tc.y;\n        #endif\n\n        #ifdef ASPECT_RATIO\n            #ifdef ASPECT_AXIS_X\n                tc.y=(1.0-aspectPos)-(((1.0-aspectPos)-tc.y)*aspectTex);\n            #endif\n            #ifdef ASPECT_AXIS_Y\n                tc.x=(1.0-aspectPos)-(((1.0-aspectPos)-tc.x)/aspectTex);\n            #endif\n        #endif\n\n        #ifdef TEX_TRANSFORM\n            vec3 coordinates=vec3(tc.x, tc.y,1.0);\n            tc=(transform * coordinates ).xy;\n        #endif\n\n        blendRGBA=texture(image,tc);\n\n        vec3 blend=blendRGBA.rgb;\n        vec4 baseRGBA=texture(tex,texCoord);\n        vec3 base=baseRGBA.rgb;\n\n\n        #ifdef PREMUL\n            blend.rgb = (blend.rgb) + (base.rgb * (1.0 - blendRGBA.a));\n        #endif\n\n        vec3 colNew=_blend(base,blend);\n\n\n\n\n        #ifdef REMOVE_ALPHA_SRC\n            blendRGBA.a=1.0;\n        #endif\n\n        #ifdef HAS_TEXTUREALPHA\n            vec4 colImgAlpha=texture(imageAlpha,tc);\n            float colImgAlphaAlpha=colImgAlpha.a;\n\n            #ifdef ALPHA_FROM_LUMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef ALPHA_FROM_INV_UMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=1.0-(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef INVERT_ALPHA\n                colImgAlphaAlpha=clamp(colImgAlphaAlpha,0.0,1.0);\n                colImgAlphaAlpha=1.0-colImgAlphaAlpha;\n            #endif\n\n            blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\n        #endif\n    #endif\n\n    float am=amount;\n\n    #ifdef CLIP_REPEAT\n        if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n        {\n            // colNew.rgb=vec3(0.0);\n            am=0.0;\n        }\n    #endif\n\n    #ifdef ASPECT_RATIO\n        #ifdef ASPECT_CROP\n            if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n            {\n                colNew.rgb=base.rgb;\n                am=0.0;\n            }\n\n        #endif\n    #endif\n\n\n\n    #ifndef PREMUL\n        blendRGBA.rgb=mix(colNew,base,1.0-(am*blendRGBA.a));\n        blendRGBA.a=clamp(baseRGBA.a+(blendRGBA.a*am),0.,1.);\n    #endif\n\n    #ifdef PREMUL\n        // premultiply\n        // blendRGBA.rgb = (blendRGBA.rgb) + (baseRGBA.rgb * (1.0 - blendRGBA.a));\n        blendRGBA=vec4(\n            mix(colNew.rgb,base,1.0-(am*blendRGBA.a)),\n            blendRGBA.a*am+baseRGBA.a\n            );\n    #endif\n\n    #ifdef ALPHA_MASK\n    blendRGBA.a=baseRGBA.a;\n    #endif\n\n    outColor=blendRGBA;\n}\n\n\n\n\n\n\n\n",drawimage_vert:"IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\n// OUT vec3 norm;\n\n#ifdef TEX_TRANSFORM\n    UNI float posX;\n    UNI float posY;\n    UNI float scaleX;\n    UNI float scaleY;\n    UNI float rotate;\n    OUT mat3 transform;\n#endif\n\nvoid main()\n{\n   texCoord=attrTexCoord;\n//   norm=attrVertNormal;\n\n   #ifdef TEX_TRANSFORM\n        vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\n        float angle = radians( rotate );\n        vec2 scale= vec2(scaleX,scaleY);\n        vec2 translate= vec2(posX,posY);\n\n        transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\n            - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\n            - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\n   #endif\n\n   gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\n}\n"};const t=i.inTrigger("render"),n=CGL.TextureEffect.AddBlendSelect(i,"blendMode"),r=i.inValueSlider("amount",1),s=i.inTexture("Image"),o=i.inValueBool("Premultiplied",false),a=i.inValueBool("Alpha Mask",false),l=i.inValueBool("removeAlphaSrc",false),u=i.inTexture("Mask"),c=i.inValueSelect("Mask Src",["alpha channel","luminance","luminance inv"],"luminance"),h=i.inValueBool("Invert alpha channel"),f=i.inValueBool("Aspect Ratio",false),d=i.inValueSelect("Stretch Axis",["X","Y"],"X"),g=i.inValueSlider("Position",0),p=i.inValueBool("Crop",false),m=i.outTrigger("trigger");n.set("normal");const _=i.patch.cgl;const v=new CGL.Shader(_,"drawimage");u.onLinkChanged=b;i.setPortGroup("Mask",[u,c,h]);i.setPortGroup("Aspect Ratio",[f,g,p,d]);function b(){if(u.isLinked()){l.setUiAttribs({greyout:true});c.setUiAttribs({greyout:false});h.setUiAttribs({greyout:false})}else{l.setUiAttribs({greyout:false});c.setUiAttribs({greyout:true});h.setUiAttribs({greyout:true})}}i.toWorkPortsNeedToBeLinked(s);v.setSource(e.drawimage_vert,e.drawimage_frag);const x=new CGL.Uniform(v,"t","tex",0),G=new CGL.Uniform(v,"t","image",1),B=new CGL.Uniform(v,"t","imageAlpha",2),I=new CGL.Uniform(v,"f","aspectTex",1),D=new CGL.Uniform(v,"f","aspectPos",g);f.onChange=p.onChange=d.onChange=A;function A(){v.removeDefine("ASPECT_AXIS_X");v.removeDefine("ASPECT_AXIS_Y");v.removeDefine("ASPECT_CROP");g.setUiAttribs({greyout:!f.get()});p.setUiAttribs({greyout:!f.get()});d.setUiAttribs({greyout:!f.get()});if(f.get()){v.define("ASPECT_RATIO");if(p.get())v.define("ASPECT_CROP");if(d.get()=="X")v.define("ASPECT_AXIS_X");if(d.get()=="Y")v.define("ASPECT_AXIS_Y")}else{v.removeDefine("ASPECT_RATIO");if(p.get())v.define("ASPECT_CROP");if(d.get()=="X")v.define("ASPECT_AXIS_X");if(d.get()=="Y")v.define("ASPECT_AXIS_Y")}}const E=i.inValueBool("flip x");const T=i.inValueBool("flip y");let C=i.inValueBool("Transform");let y=i.inValueSlider("Scale X",1);let S=i.inValueSlider("Scale Y",1);let L=i.inValue("Position X",0);let O=i.inValue("Position Y",0);let N=i.inValue("Rotation",0);const M=i.inValueBool("Clip Repeat",false);const k=new CGL.Uniform(v,"f","scaleX",y);const U=new CGL.Uniform(v,"f","scaleY",S);const V=new CGL.Uniform(v,"f","posX",L);const F=new CGL.Uniform(v,"f","posY",O);const z=new CGL.Uniform(v,"f","rotate",N);C.onChange=w;function w(){v.toggleDefine("TEX_TRANSFORM",C.get());y.setUiAttribs({greyout:!C.get()});S.setUiAttribs({greyout:!C.get()});L.setUiAttribs({greyout:!C.get()});O.setUiAttribs({greyout:!C.get()});N.setUiAttribs({greyout:!C.get()})}CGL.TextureEffect.setupBlending(i,v,n,r);const j=new CGL.Uniform(v,"f","amount",r);t.onTriggered=R;M.onChange=u.onChange=o.onChange=a.onChange=h.onChange=T.onChange=E.onChange=l.onChange=c.onChange=P;w();b();A();P();function P(){v.toggleDefine("REMOVE_ALPHA_SRC",l.get());v.toggleDefine("ALPHA_MASK",a.get());v.toggleDefine("CLIP_REPEAT",M.get());v.toggleDefine("HAS_TEXTUREALPHA",u.get()&&u.get().tex);v.toggleDefine("TEX_FLIP_X",E.get());v.toggleDefine("TEX_FLIP_Y",T.get());v.toggleDefine("INVERT_ALPHA",h.get());v.toggleDefine("ALPHA_FROM_LUMINANCE",c.get()=="luminance");v.toggleDefine("ALPHA_FROM_INV_UMINANCE",c.get()=="luminance_inv");v.toggleDefine("PREMUL",o.get())}function R(){if(!CGL.TextureEffect.checkOpInEffect(i))return;const e=s.get();if(e&&e.tex&&r.get()>0){_.pushShader(v);_.currentTextureEffect.bind();const t=_.currentTextureEffect.getCurrentSourceTexture();_.setTexture(0,t.tex);const n=1/(_.currentTextureEffect.getWidth()/_.currentTextureEffect.getHeight())*(e.width/e.height);I.setValue(n);_.setTexture(1,e.tex);if(u.get()&&u.get().tex){_.setTexture(2,u.get().tex)}_.pushBlendMode(CGL.BLEND_NONE,true);_.currentTextureEffect.finish();_.popBlendMode();_.popShader()}m.trigger()}};Ops.Gl.ImageCompose.DrawImage_v3.prototype=new CABLES.Op;CABLES.OPS["8f6b2f15-fcb0-4597-90c0-e5173f2969fe"]={f:Ops.Gl.ImageCompose.DrawImage_v3,objName:"Ops.Gl.ImageCompose.DrawImage_v3"};Ops.Trigger.Sequence=function(){CABLES.Op.apply(this,arguments);const s=this;const e=s.attachments={};const t=s.inTrigger("exe"),n=s.inTriggerButton("Clean up connections");s.setUiAttrib({resizable:true,resizableY:false,stretchPorts:true});const i=[],o=[],r=16;let a=null,l=[];t.onTriggered=h;n.onTriggered=f;n.setUiAttribs({hideParam:true,hidePort:true});for(let t=0;t<r;t++){const d=s.outTrigger("trigger "+t);o.push(d);d.onLinkChanged=c;if(t<r-1){let e=s.inTrigger("exe "+t);e.onTriggered=h;i.push(e)}}u();function u(){l.length=0;for(let e=0;e<o.length;e++)if(o[e].links.length>0)l.push(o[e])}function c(){u();clearTimeout(a);a=setTimeout(()=>{let t=false;for(let e=0;e<o.length;e++)if(o[e].links.length>1)t=true;n.setUiAttribs({hideParam:!t});if(s.isCurrentUiOp())s.refreshParams()},60)}function h(){for(let e=0;e<l.length;e++)l[e].trigger()}function f(){let i=0;for(let n=0;n<o.length;n++){let t=[];if(o[n].links.length>1)for(let e=1;e<o[n].links.length;e++){while(o[i].links.length>0)i++;t.push(o[n].links[e]);const r=o[n].links[e].getOtherPort(o[n]);s.patch.link(s,"trigger "+i,r.op,r.name);i++}for(let e=0;e<t.length;e++)t[e].remove()}c();u()}};Ops.Trigger.Sequence.prototype=new CABLES.Op;CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};Ops.Gl.ImageCompose.Desaturate=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={desaturate_frag:"\nIN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\n\n#ifdef MASK\n    UNI sampler2D mask;\n#endif\n\nvec3 desaturate(vec3 color, float amount)\n{\n   vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), color));\n   return vec3(mix(color, gray, amount));\n}\n\nvoid main()\n{\n    vec4 col=texture(tex,texCoord);\n\n    float am=amount;\n    #ifdef MASK\n        am*=1.0-texture(mask,texCoord).r;\n        #ifdef INVERTMASK\n        am=1.0-am;\n        #endif\n    #endif\n\n    col.rgb=desaturate(col.rgb,am);\n    outColor= col;\n}"};const n=e.inTrigger("render");const i=e.outTrigger("trigger");const r=e.inValueSlider("amount",1);const s=e.inTexture("Mask");const o=e.inValueBool("Invert Mask");const a=e.patch.cgl;const l=new CGL.Shader(a,e.name,e);l.setSource(l.getDefaultVertexShader(),t.desaturate_frag);let u=new CGL.Uniform(l,"t","tex",0);let c=new CGL.Uniform(l,"t","mask",1);let h=new CGL.Uniform(l,"f","amount",r);o.onChange=function(){if(o.get())l.define("INVERTMASK");else l.removeDefine("INVERTMASK")};s.onChange=function(){if(s.get())l.define("MASK");else l.removeDefine("MASK")};n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e))return;a.pushShader(l);a.currentTextureEffect.bind();a.setTexture(0,a.currentTextureEffect.getCurrentSourceTexture().tex);if(s.get())a.setTexture(1,s.get().tex);a.currentTextureEffect.finish();a.popShader();i.trigger()}};Ops.Gl.ImageCompose.Desaturate.prototype=new CABLES.Op;CABLES.OPS["340efbd5-be53-4bd5-92ad-8f38d8eeecf1"]={f:Ops.Gl.ImageCompose.Desaturate,objName:"Ops.Gl.ImageCompose.Desaturate"};Ops.Gl.ImageCompose.Blur=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={blur_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float dirX;\nUNI float dirY;\nUNI float amount;\n\n#ifdef HAS_MASK\n    UNI sampler2D imageMask;\n#endif\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main()\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float am=amount;\n    #ifdef HAS_MASK\n        am=amount*texture(imageMask,texCoord).r;\n        if(am<=0.02)\n        {\n            outColor=texture(tex, texCoord);\n            return;\n        }\n    #endif\n\n    vec2 delta=vec2(dirX*am*0.01,dirY*am*0.01);\n\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    #ifdef MOBILE\n        offset = 0.1;\n    #endif\n\n    #if defined(FASTBLUR) && !defined(MOBILE)\n        const float range=5.0;\n    #else\n        const float range=20.0;\n    #endif\n\n    for (float t = -range; t <= range; t+=1.0)\n    {\n        float percent = (t + offset - 0.5) / range;\n        float weight = 1.0 - abs(percent);\n        vec4 smpl = texture(tex, texCoord + delta * percent);\n\n        smpl.rgb *= smpl.a;\n\n        color += smpl * weight;\n        total += weight;\n    }\n\n    outColor= color / total;\n\n    outColor.rgb /= outColor.a + 0.00001;\n\n\n\n}\n"};const n=e.inTrigger("render");const i=e.outTrigger("trigger");const r=e.inValueFloat("amount");const s=e.inSwitch("direction",["both","vertical","horizontal"],"both");const o=e.inValueBool("Fast",true);const a=e.patch.cgl;r.set(10);let l=new CGL.Shader(a,"blur");l.define("FASTBLUR");o.onChange=function(){if(o.get())l.define("FASTBLUR");else l.removeDefine("FASTBLUR")};l.setSource(l.getDefaultVertexShader(),t.blur_frag);let u=new CGL.Uniform(l,"t","tex",0);let c=new CGL.Uniform(l,"f","dirX",0);let h=new CGL.Uniform(l,"f","dirY",0);let f=new CGL.Uniform(l,"f","width",0);let d=new CGL.Uniform(l,"f","height",0);let g=new CGL.Uniform(l,"f","amount",r.get());r.onChange=function(){g.setValue(r.get())};let p=new CGL.Uniform(l,"t","imageMask",1);let m=false;function _(){if(a.currentTextureEffect.getCurrentSourceTexture().width==a.canvasWidth&&a.currentTextureEffect.getCurrentSourceTexture().height==a.canvasHeight){e.setUiError("warning","Full screen blurs are slow! Try reducing the resolution to 1/2 or a 1/4",0)}else{e.setUiError("warning",null)}}let v=0;s.onChange=function(){if(s.get()=="both")v=0;if(s.get()=="horizontal")v=1;if(s.get()=="vertical")v=2};let b=e.inTexture("mask");b.onChange=function(){if(b.get()&&b.get().tex)l.define("HAS_MASK");else l.removeDefine("HAS_MASK")};n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e))return;a.pushShader(l);f.setValue(a.currentTextureEffect.getCurrentSourceTexture().width);d.setValue(a.currentTextureEffect.getCurrentSourceTexture().height);_();if(v===0||v==2){a.currentTextureEffect.bind();a.setTexture(0,a.currentTextureEffect.getCurrentSourceTexture().tex);if(b.get()&&b.get().tex){a.setTexture(1,b.get().tex)}c.setValue(0);h.setValue(1);a.currentTextureEffect.finish()}if(v===0||v==1){a.currentTextureEffect.bind();a.setTexture(0,a.currentTextureEffect.getCurrentSourceTexture().tex);if(b.get()&&b.get().tex){a.setTexture(1,b.get().tex)}c.setValue(1);h.setValue(0);a.currentTextureEffect.finish()}a.popShader();i.trigger()}};Ops.Gl.ImageCompose.Blur.prototype=new CABLES.Op;CABLES.OPS["54f26f53-f637-44c1-9bfb-a2f2b722e998"]={f:Ops.Gl.ImageCompose.Blur,objName:"Ops.Gl.ImageCompose.Blur"};Ops.Gl.ImageCompose.PixelDisplacement_v4=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={pixeldisplace3_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D displaceTex;\nUNI float amountX;\nUNI float amountY;\nUNI float amount;\n\n{{CGL.BLENDMODES3}}\n\nvec3 getOffset(vec3 offset)\n{\n    #ifdef ZERO_BLACK\n        return offset;\n    #endif\n\n    #ifdef ZERO_GREY\n        return offset*2.0-1.0;\n    #endif\n}\n\nfloat getOffset(float offset)\n{\n    #ifdef ZERO_BLACK\n        return offset;\n    #endif\n\n    #ifdef ZERO_GREY\n        return offset*2.0-1.0;\n    #endif\n}\n\nvoid main()\n{\n    vec4 rgba=texture(displaceTex,texCoord);\n    vec3 offset=rgba.rgb*rgba.a;\n    float x,y;\n\n    #ifdef INPUT_REDGREEN\n        offset=getOffset(offset);\n        x=offset.r*amountX+texCoord.x;\n        y=offset.g*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_RED\n        offset=getOffset(offset);\n        x=offset.r*amountX+texCoord.x;\n        y=offset.r*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_GREEN\n        offset=getOffset(offset);\n        x=offset.g*amountX+texCoord.x;\n        y=offset.g*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_BLUE\n        offset=getOffset(offset);\n        x=offset.b*amountX+texCoord.x;\n        y=offset.b*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_LUMINANCE\n        float o=dot(vec3(0.2126,0.7152,0.0722), offset);\n        o=getOffset(o);\n        x=o*amountX+texCoord.x;\n        y=o*amountY+texCoord.y;\n    #endif\n    #ifdef WRAP_CLAMP\n        x=clamp(x,0.0,1.0);\n        y=clamp(y,0.0,1.0);\n    #endif\n    #ifdef WRAP_REPEAT\n        x=mod(x,1.0);\n        y=mod(y,1.0);\n    #endif\n    #ifdef WRAP_MIRROR\n        float mx=mod(x,2.0);\n        float my=mod(y,2.0);\n        x=abs((floor(mx)-fract(mx)));\n        y=abs((floor(my)-fract(my)));\n    #endif\n\n\n\n    vec4 col=texture(tex,vec2(x,y));\n    vec4 base=texture(tex,texCoord);\n\n    base.a=0.0;\n\n    outColor=cgl_blendPixel(base,col,amount);\n}\n"};const n=e.inTrigger("render"),i=e.inTexture("displaceTex"),r=CGL.TextureEffect.AddBlendSelect(e,"Blend Mode","normal"),s=e.inValueSlider("Amount",1),o=e.inValueSlider("amount X",.2),a=e.inValueSlider("amount Y",.2),l=e.inSwitch("Wrap",["Mirror","Clamp","Repeat"],"Mirror"),u=e.inValueSelect("Input",["Luminance","RedGreen","Red","Green","Blue"],"Luminance"),c=e.inSwitch("Zero Displace",["Grey","Black"],"Grey"),h=e.outTrigger("trigger");e.setPortGroup("Axis Displacement Strength",[o,a]);e.setPortGroup("Modes",[l,u]);e.toWorkPortsNeedToBeLinked(i);const f=e.patch.cgl,d=new CGL.Shader(f,e.name,e);d.setSource(d.getDefaultVertexShader(),t.pixeldisplace3_frag);const g=new CGL.Uniform(d,"t","tex",0),p=new CGL.Uniform(d,"t","displaceTex",1),m=new CGL.Uniform(d,"f","amountX",o),_=new CGL.Uniform(d,"f","amountY",a),v=new CGL.Uniform(d,"f","amount",s);c.onChange=b;l.onChange=x;u.onChange=I;x();I();b();CGL.TextureEffect.setupBlending(e,d,r,s);function b(){d.removeDefine("ZERO_BLACK");d.removeDefine("ZERO_GREY");d.define("ZERO_"+(c.get()+"").toUpperCase())}function x(){d.removeDefine("WRAP_CLAMP");d.removeDefine("WRAP_REPEAT");d.removeDefine("WRAP_MIRROR");d.define("WRAP_"+(l.get()+"").toUpperCase())}function I(){d.removeDefine("INPUT_LUMINANCE");d.removeDefine("INPUT_REDGREEN");d.removeDefine("INPUT_RED");d.define("INPUT_"+(u.get()+"").toUpperCase())}n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;if(i.get()){f.pushShader(d);f.currentTextureEffect.bind();f.setTexture(0,f.currentTextureEffect.getCurrentSourceTexture().tex);if(i.get())f.setTexture(1,i.get().tex);f.currentTextureEffect.finish();f.popShader()}h.trigger()}};Ops.Gl.ImageCompose.PixelDisplacement_v4.prototype=new CABLES.Op;CABLES.OPS["c00f79f2-0505-4b4f-b0bf-10ef7875dd87"]={f:Ops.Gl.ImageCompose.PixelDisplacement_v4,objName:"Ops.Gl.ImageCompose.PixelDisplacement_v4"};Ops.Gl.ImageCompose.Noise.SimplexNoise_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={simplexnoise_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float smoothness;\nUNI float scale;\nUNI float seed;\nUNI float x;\nUNI float y;\nUNI float time;\nUNI float aspect;\nUNI float harmonics;\n\n#ifdef HAS_TEX_OFFSETMAP\n    UNI sampler2D texOffsetZ;\n    UNI float offMul;\n#endif\n\n\n#ifdef HAS_TEX_MASK\n    UNI sampler2D texMask;\n#endif\n\n\n\n{{CGL.BLENDMODES3}}\n\nvoid FAST32_hash_3D(    vec3 gridcell,\n                        vec3 v1_mask,       //  user definable v1 and v2.  ( 0s and 1s )\n                        vec3 v2_mask,\n                        out vec4 hash_0,\n                        out vec4 hash_1,\n                        out vec4 hash_2 )       //  generates 3 random numbers for each of the 4 3D cell corners.  cell  corners:  v0=0,0,0  v3=1,1,1  the other two are user definable\n{\n    //    gridcell is assumed to be an integer coordinate\n\n    //  TODO:   these constants need tweaked to find the best possible noise.\n    //          probably requires some kind of brute force computational searching or something....\n    const vec2 OFFSET = vec2( 50.0, 161.0 );\n    const float DOMAIN = 69.0;\n    const vec3 SOMELARGEFLOATS = vec3( 635.298681, 682.357502, 668.926525 );\n    const vec3 ZINC = vec3( 48.500388, 65.294118, 63.934599 );\n\n    //  truncate the domain\n    gridcell.xyz = gridcell.xyz - floor(gridcell.xyz * ( 1.0 / DOMAIN )) * DOMAIN;\n    vec3 gridcell_inc1 = step( gridcell, vec3( DOMAIN - 1.5 ) ) * ( gridcell + 1.0 );\n\n    //  compute x*x*y*y for the 4 corners\n    vec4 P = vec4( gridcell.xy, gridcell_inc1.xy ) + OFFSET.xyxy;\n    P *= P;\n    vec4 V1xy_V2xy = mix( P.xyxy, P.zwzw, vec4( v1_mask.xy, v2_mask.xy ) );     //  appl y mask for v1 and v2\n    P = vec4( P.x, V1xy_V2xy.xz, P.z ) * vec4( P.y, V1xy_V2xy.yw, P.w );\n\n    //  get the lowz and highz mods\n    vec3 lowz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell.zzz * ZINC.xyz ) );\n    vec3 highz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell_inc1.zzz * ZINC.xyz ) );\n\n    //  appl mask for v1 and v2 mod values\n    v1_mask = ( v1_mask.z < 0.5 ) ? lowz_mods : highz_mods;\n    v2_mask = ( v2_mask.z < 0.5 ) ? lowz_mods : highz_mods;\n\n    //  compute the final hash\n    hash_0 = fract( P * vec4( lowz_mods.x, v1_mask.x, v2_mask.x, highz_mods.x ) );\n    hash_1 = fract( P * vec4( lowz_mods.y, v1_mask.y, v2_mask.y, highz_mods.y ) );\n    hash_2 = fract( P * vec4( lowz_mods.z, v1_mask.z, v2_mask.z, highz_mods.z ) );\n}\n\n\n//\n//  Given an arbitrary 3D point this calculates the 4 vectors from the corners of the simplex pyramid to the point\n//  It also returns the integer grid index information for the corners\n//\nvoid Simplex3D_GetCornerVectors(    vec3 P,                 //  input point\n                                    out vec3 Pi,            //  integer grid index for the origin\n                                    out vec3 Pi_1,          //  offsets for the 2nd and 3rd corners.  ( the 4th = Pi + 1.0 )\n                                    out vec3 Pi_2,\n                                    out vec4 v1234_x,       //  vectors from the 4 corners to the intput point\n                                    out vec4 v1234_y,\n                                    out vec4 v1234_z )\n{\n    //\n    //  Simplex math from Stefan Gustavsons and Ian McEwans work at...\n    //  http://github.com/ashima/webgl-noise\n    //\n\n    //  simplex math constants\n    const float SKEWFACTOR = 1.0/3.0;\n    const float UNSKEWFACTOR = 1.0/6.0;\n    const float SIMPLEX_CORNER_POS = 0.5;\n    const float SIMPLEX_PYRAMID_HEIGHT = 0.70710678118654752440084436210485;    // sqrt( 0.5 )  height of simplex pyramid.\n\n    P *= SIMPLEX_PYRAMID_HEIGHT;        // scale space so we can have an approx feature size of 1.0  ( optional )\n\n    //  Find the vectors to the corners of our simplex pyramid\n    Pi = floor( P + dot( P, vec3( SKEWFACTOR) ) );\n    vec3 x0 = P - Pi + dot(Pi, vec3( UNSKEWFACTOR ) );\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    Pi_1 = min( g.xyz, l.zxy );\n    Pi_2 = max( g.xyz, l.zxy );\n    vec3 x1 = x0 - Pi_1 + UNSKEWFACTOR;\n    vec3 x2 = x0 - Pi_2 + SKEWFACTOR;\n    vec3 x3 = x0 - SIMPLEX_CORNER_POS;\n\n    //  pack them into a parallel-friendly arrangement\n    v1234_x = vec4( x0.x, x1.x, x2.x, x3.x );\n    v1234_y = vec4( x0.y, x1.y, x2.y, x3.y );\n    v1234_z = vec4( x0.z, x1.z, x2.z, x3.z );\n}\n\n//\n//  Calculate the weights for the 3D simplex surflet\n//\nvec4 Simplex3D_GetSurfletWeights(   vec4 v1234_x,\n                                    vec4 v1234_y,\n                                    vec4 v1234_z )\n{\n    //  perlins original implementation uses the surlet falloff formula of (0.6-x*x)^4.\n    //  This is buggy as it can cause discontinuities along simplex faces.  (0.5-x*x)^3 solves this and gives an almost identical curve\n\n    //  evaluate surflet. f(x)=(0.5-x*x)^3\n    vec4 surflet_weights = v1234_x * v1234_x + v1234_y * v1234_y + v1234_z * v1234_z;\n    surflet_weights = max(0.5 - surflet_weights, 0.0);      //  0.5 here represents the closest distance (squared) of any simplex pyramid corner to any of its planes.  ie, SIMPLEX_PYRAMID_HEIGHT^2\n    return surflet_weights*surflet_weights*surflet_weights;\n}\n\n\n\n//\n//  SimplexPerlin3D  ( simplex gradient noise )\n//  Perlin noise over a simplex (tetrahedron) grid\n//  Return value range of -1.0->1.0\n//  http://briansharpe.files.wordpress.com/2012/01/simplexperlinsample.jpg\n//\n//  Implementation originally based off Stefan Gustavsons and Ian McEwans work at...\n//  http://github.com/ashima/webgl-noise\n//\nfloat SimplexPerlin3D(vec3 P)\n{\n    //  calculate the simplex vector and index math\n    vec3 Pi;\n    vec3 Pi_1;\n    vec3 Pi_2;\n    vec4 v1234_x;\n    vec4 v1234_y;\n    vec4 v1234_z;\n    Simplex3D_GetCornerVectors( P, Pi, Pi_1, Pi_2, v1234_x, v1234_y, v1234_z );\n\n    //  generate the random vectors\n    //  ( various hashing methods listed in order of speed )\n    vec4 hash_0;\n    vec4 hash_1;\n    vec4 hash_2;\n    FAST32_hash_3D( Pi, Pi_1, Pi_2, hash_0, hash_1, hash_2 );\n    //SGPP_hash_3D( Pi, Pi_1, Pi_2, hash_0, hash_1, hash_2 );\n    hash_0 -= 0.49999;\n    hash_1 -= 0.49999;\n    hash_2 -= 0.49999;\n\n    //  evaluate gradients\n    vec4 grad_results = inversesqrt( hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2 ) * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z );\n\n    //  Normalization factor to scale the final result to a strict 1.0->-1.0 range\n    //  x = sqrt( 0.75 ) * 0.5\n    //  NF = 1.0 / ( x * ( ( 0.5 * x*x ) ^ 3 ) * 2.0 )\n    //  http://briansharpe.wordpress.com/2012/01/13/simplex-noise/#comment-36\n     float FINAL_NORMALIZATION = 37.837227241611314102871574478976*smoothness;\n\n    //  sum with the surflet and return\n    return dot( Simplex3D_GetSurfletWeights( v1234_x, v1234_y, v1234_z ), grad_results ) * FINAL_NORMALIZATION;\n}\n\nvoid main()\n{\n    vec2 p=vec2(texCoord.x-0.5,texCoord.y-0.5);\n\n    p.x*=aspect;\n    p=p*scale;\n\n    p=vec2(p.x+0.5-x,p.y+0.5-y);\n\n    vec3 offset;\n    #ifdef HAS_TEX_OFFSETMAP\n        vec4 offMap=texture(texOffsetZ,texCoord);\n\n        #ifdef OFFSET_X_R\n            offset.x=offMap.r;\n        #endif\n        #ifdef OFFSET_X_G\n            offset.x=offMap.g;\n        #endif\n        #ifdef OFFSET_X_B\n            offset.x=offMap.b;\n        #endif\n\n        #ifdef OFFSET_Y_R\n            offset.y=offMap.r;\n        #endif\n        #ifdef OFFSET_Y_G\n            offset.y=offMap.g;\n        #endif\n        #ifdef OFFSET_Y_B\n            offset.y=offMap.b;\n        #endif\n\n        #ifdef OFFSET_Z_R\n            offset.z=offMap.r;\n        #endif\n        #ifdef OFFSET_Z_G\n            offset.z=offMap.g;\n        #endif\n        #ifdef OFFSET_Z_B\n            offset.z=offMap.b;\n        #endif\n\n        offset*=offMul;\n    #endif\n\n    float v=SimplexPerlin3D(vec3(p.x,p.y,time)+offset)*0.5+0.5;\n\n\n    if (harmonics >= 2.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*2.3+offset) * 0.5;\n    if (harmonics >= 3.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*4.2+offset) * 0.25;\n    if (harmonics >= 4.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*8.1+offset) * 0.125;\n    if (harmonics >= 5.0) v += SimplexPerlin3D(vec3(p.x,p.y,time)*16.7+offset) * 0.0625;\n\n\n\n    //blend section\n    vec4 col=vec4(v,v,v,1.0);\n\n    vec4 base=texture(tex,texCoord);\n\n    // outColor=cgl_blend(base,col,amount);\n\n\n    float str=1.0;\n    #ifdef HAS_TEX_MASK\n        str=texture(texMask,texCoord).r;\n    #endif\n\n    outColor=cgl_blendPixel(base,col,amount*str);\n\n}"};const n=e.inTrigger("render"),i=e.inTexture("Mask"),r=CGL.TextureEffect.AddBlendSelect(e,"Blend Mode","normal"),s=e.inValueSlider("Amount",1),o=CGL.TextureEffect.AddBlendAlphaMask(e),a=e.inValue("smoothness",1),l=e.inSwitch("Harmonics",["1","2","3","4","5"],"1"),u=e.inValue("scale",7),c=e.outTrigger("trigger"),h=e.inValue("x"),f=e.inValue("y"),d=e.inValue("time",0);const g=e.inTexture("Offset"),p=e.inFloat("Offset Multiply",1),m=e.inSwitch("Offset X",["None","R","G","B"],"None"),_=e.inSwitch("Offset Y",["None","R","G","B"],"None"),v=e.inSwitch("Offset Z",["None","R","G","B"],"R");e.setPortGroup("Offset Map",[g,v,_,m,p]);const b=e.patch.cgl;const x=new CGL.Shader(b,e.name,e);x.setSource(x.getDefaultVertexShader(),t.simplexnoise_frag);const I=new CGL.Uniform(x,"t","tex",0),A=new CGL.Uniform(x,"t","texOffsetZ",1),E=new CGL.Uniform(x,"t","texMask",2),T=new CGL.Uniform(x,"f","amount",s),C=new CGL.Uniform(x,"f","smoothness",a),y=new CGL.Uniform(x,"f","scale",u),S=new CGL.Uniform(x,"f","x",h),L=new CGL.Uniform(x,"f","y",f),O=new CGL.Uniform(x,"f","aspect",1),N=new CGL.Uniform(x,"f","time",d),M=new CGL.Uniform(x,"f","offMul",p),w=new CGL.Uniform(x,"f","harmonics",0);l.onChange=()=>{w.setValue(parseFloat(l.get()))};CGL.TextureEffect.setupBlending(e,x,r,s,o);m.onChange=_.onChange=v.onChange=i.onChange=g.onChange=P;P();function P(){x.toggleDefine("HAS_TEX_OFFSETMAP",g.get());x.toggleDefine("HAS_TEX_MASK",i.get());x.toggleDefine("OFFSET_X_R",m.get()=="R");x.toggleDefine("OFFSET_X_G",m.get()=="G");x.toggleDefine("OFFSET_X_B",m.get()=="B");x.toggleDefine("OFFSET_Y_R",_.get()=="R");x.toggleDefine("OFFSET_Y_G",_.get()=="G");x.toggleDefine("OFFSET_Y_B",_.get()=="B");x.toggleDefine("OFFSET_Z_R",v.get()=="R");x.toggleDefine("OFFSET_Z_G",v.get()=="G");x.toggleDefine("OFFSET_Z_B",v.get()=="B");m.setUiAttribs({greyout:!g.isLinked()});_.setUiAttribs({greyout:!g.isLinked()});v.setUiAttribs({greyout:!g.isLinked()});p.setUiAttribs({greyout:!g.isLinked()})}n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;b.pushShader(x);b.currentTextureEffect.bind();O.setValue(b.currentTextureEffect.aspectRatio);b.setTexture(0,b.currentTextureEffect.getCurrentSourceTexture().tex);if(g.get())b.setTexture(1,g.get().tex);if(i.get())b.setTexture(2,i.get().tex);b.currentTextureEffect.finish();b.popShader();c.trigger()}};Ops.Gl.ImageCompose.Noise.SimplexNoise_v2.prototype=new CABLES.Op;CABLES.OPS["0f4a8d04-89b0-437a-9da8-b4098772d250"]={f:Ops.Gl.ImageCompose.Noise.SimplexNoise_v2,objName:"Ops.Gl.ImageCompose.Noise.SimplexNoise_v2"};Ops.Gl.ImageCompose.FastBlur_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={blur_frag:"\nUNI sampler2D tex;\n#ifdef USE_MASK\n    UNI sampler2D texMask;\n#endif\nUNI float amount;\nUNI float pass;\n\nIN vec2 texCoord;\n\nUNI float dirX;\nUNI float dirY;\nUNI float width;\nUNI float height;\n\nIN vec2 coord0;\nIN vec2 coord1;\nIN vec2 coord2;\nIN vec2 coord3;\nIN vec2 coord4;\nIN vec2 coord5;\nIN vec2 coord6;\n\n#ifdef HAS_MASK\n    UNI sampler2D imageMask;\n#endif\n\nvoid main()\n{\n    vec4 color = vec4(0.0);\n\n    #ifdef USE_MASK\n        #ifdef MASK_INVERT\n            if(texture(texMask,texCoord).r<0.5)\n            {\n                outColor= texture(tex, texCoord);\n                return;\n            }\n        #endif\n\n        #ifndef MASK_INVERT\n            if(texture(texMask,texCoord).r>0.5)\n            {\n                outColor= texture(tex, texCoord);\n                return;\n            }\n        #endif\n    #endif\n\n    color += texture(tex, coord0) * 0.06927096443792478;\n    color += texture(tex, coord1) * 0.1383328848652136;\n    color += texture(tex, coord2) * 0.21920904690397863;\n    color += texture(tex, coord3) * 0.14637421;\n    color += texture(tex, coord4) * 0.21920904690397863;\n    color += texture(tex, coord5) * 0.1383328848652136;\n    color += texture(tex, coord6) * 0.06927096443795711;\n\n    outColor= color;\n}",blur_vert:"\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\nUNI mat4 modelMatrix;\n\nUNI float pass;\nUNI float dirX;\nUNI float dirY;\nUNI float width;\nUNI float height;\n\nOUT vec2 coord0;\nOUT vec2 coord1;\nOUT vec2 coord2;\nOUT vec2 coord3;\nOUT vec2 coord4;\nOUT vec2 coord5;\nOUT vec2 coord6;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    {{MODULE_VERTEX_POSITION}}\n\n    vec2 dir=vec2(dirX,dirY);\n    vec2 res=vec2( (1.) / width , (1.) / height )*dir;\n\n    coord3= attrTexCoord;\n\n    coord0= attrTexCoord + (-3.0368997744118595 * res);\n    coord1= attrTexCoord + (-2.089778445362373 * res);\n    coord2= attrTexCoord + (-1.2004366090034069 * res);\n    coord4= attrTexCoord + (1.2004366090034069 * res);\n    coord5= attrTexCoord + (2.089778445362373* res);\n    coord6= attrTexCoord + (3.0368997744118595 * res);\n\n    #ifdef CLAMP\n        coord0=clamp(coord0,0.0,1.0);\n        coord1=clamp(coord1,0.0,1.0);\n        coord2=clamp(coord2,0.0,1.0);\n        coord3=clamp(coord3,0.0,1.0);\n        coord4=clamp(coord4,0.0,1.0);\n        coord5=clamp(coord5,0.0,1.0);\n        coord6=clamp(coord6,0.0,1.0);\n    #endif\n\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n"};const n=e.inTrigger("render"),i=e.outTrigger("trigger"),r=e.inFloat("Passes",3),s=e.inBool("Clamp",false),o=e.inDropDown("direction",["both","vertical","horizontal"],"both"),a=e.inTexture("Mask"),l=e.inBool("Mask Invert",false);const u=e.patch.cgl;const c=new CGL.Shader(u,"fastblur");e.setPortGroup("Mask",[a,l]);c.setSource(t.blur_vert,t.blur_frag);const h=new CGL.Uniform(c,"t","tex",0),f=new CGL.Uniform(c,"f","dirX",0),d=new CGL.Uniform(c,"f","dirY",0),g=new CGL.Uniform(c,"f","width",0),p=new CGL.Uniform(c,"f","height",0),m=new CGL.Uniform(c,"f","pass",0),_=new CGL.Uniform(c,"f","amount",r.get()),v=new CGL.Uniform(c,"t","texMask",1);r.onChange=()=>{_.setValue(r.get())};let b=0;o.onChange=()=>{if(o.get()=="both")b=0;if(o.get()=="horizontal")b=1;if(o.get()=="vertical")b=2};s.onChange=()=>{c.toggleDefine("CLAMP",s.get())};l.onChange=a.onChange=x;x();function x(){c.toggleDefine("USE_MASK",a.isLinked());c.toggleDefine("MASK_INVERT",l.get());l.setUiAttribs({greyout:!a.isLinked()})}n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;g.setValue(u.currentTextureEffect.getCurrentSourceTexture().width);p.setValue(u.currentTextureEffect.getCurrentSourceTexture().height);const t=r.get();if(a.get())u.setTexture(1,a.get().tex);for(let e=0;e<t;e++){u.pushShader(c);m.setValue(e/t);if(b===0||b==2){u.currentTextureEffect.bind();u.setTexture(0,u.currentTextureEffect.getCurrentSourceTexture().tex);f.setValue(0);d.setValue(1+e*e);u.currentTextureEffect.finish()}if(b===0||b==1){u.currentTextureEffect.bind();u.setTexture(0,u.currentTextureEffect.getCurrentSourceTexture().tex);f.setValue(1+e*e);d.setValue(0);u.currentTextureEffect.finish()}u.popShader()}i.trigger()}};Ops.Gl.ImageCompose.FastBlur_v2.prototype=new CABLES.Op;CABLES.OPS["61ed277f-d096-43b2-9de8-dc87fb3a9169"]={f:Ops.Gl.ImageCompose.FastBlur_v2,objName:"Ops.Gl.ImageCompose.FastBlur_v2"};Ops.Gl.ImageCompose.ChromaticAberration_v2=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={chromatic_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float pixel;\nUNI float onePixel;\nUNI float amount;\nUNI float lensDistort;\n\n#ifdef MASK\nUNI sampler2D texMask;\n#endif\n\n{{CGL.BLENDMODES3}}\n\nvoid main()\n{\n   vec4 base=texture(tex,texCoord);\n   vec4 col=texture(tex,texCoord);\n\n   vec2 tc=texCoord;;\n   float pix = pixel;\n   if(lensDistort>0.0)\n   {\n       float dist = distance(texCoord, vec2(0.5,0.5));\n       tc-=0.5;\n       tc *=smoothstep(-0.9,1.0*lensDistort,1.0-dist);\n       tc+=0.5;\n   }\n\n    #ifdef MASK\n        vec4 m=texture(texMask,texCoord);\n        pix*=m.r*m.a;\n    #endif\n\n    #ifdef SMOOTH\n    #ifdef WEBGL2\n        float numSamples=round(pix/onePixel/4.0+1.0);\n        col.r=0.0;\n        col.b=0.0;\n\n        for(float off=0.0;off<numSamples;off++)\n        {\n            float diff=(pix/numSamples)*off;\n            col.r+=texture(tex,vec2(tc.x+diff,tc.y)).r/numSamples;\n            col.b+=texture(tex,vec2(tc.x-diff,tc.y)).b/numSamples;\n        }\n    #endif\n    #endif\n\n    #ifndef SMOOTH\n        col.r=texture(tex,vec2(tc.x+pix,tc.y)).r;\n        col.b=texture(tex,vec2(tc.x-pix,tc.y)).b;\n    #endif\n\n   outColor= cgl_blendPixel(base,col,amount);\n\n}\n"};const n=t.inTrigger("render"),i=CGL.TextureEffect.AddBlendSelect(t,"Blend Mode","normal"),r=t.inValueSlider("Amount",1),s=t.inValue("Pixel",5),o=t.inValueSlider("Lens Distort",0),a=t.inValueBool("Smooth",false),l=t.inTexture("Mask"),u=t.outTrigger("trigger");const c=t.patch.cgl;const h=new CGL.Shader(c,"chromatic");CGL.TextureEffect.setupBlending(t,h,i,r);h.setSource(h.getDefaultVertexShader(),e.chromatic_frag);const f=new CGL.Uniform(h,"t","tex",0),d=new CGL.Uniform(h,"f","pixel",0),g=new CGL.Uniform(h,"f","onePixel",0),p=new CGL.Uniform(h,"t","texMask",1),m=new CGL.Uniform(h,"f","amount",r),_=new CGL.Uniform(h,"f","lensDistort",o);a.onChange=function(){if(a.get())h.define("SMOOTH");else h.removeDefine("SMOOTH")};l.onChange=function(){if(l.get())h.define("MASK");else h.removeDefine("MASK")};n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(t,3))return;let e=c.currentTextureEffect.getCurrentSourceTexture();d.setValue(s.get()*(1/e.width));g.setValue(1/e.width);c.pushShader(h);c.currentTextureEffect.bind();c.setTexture(0,e.tex);if(l.get())c.setTexture(1,l.get().tex);c.currentTextureEffect.finish();c.popShader();u.trigger()}};Ops.Gl.ImageCompose.ChromaticAberration_v2.prototype=new CABLES.Op;CABLES.OPS["07701f81-1a98-44c0-b1ef-592db3cbb5d3"]={f:Ops.Gl.ImageCompose.ChromaticAberration_v2,objName:"Ops.Gl.ImageCompose.ChromaticAberration_v2"};Ops.Gl.ImageCompose.Levels_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={levels_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float inMin;\nUNI float inMax;\nUNI float midPoint;\nUNI float outMax;\nUNI float outMin;\n\nvoid main()\n{\n    vec4 baseRGBA=texture(tex,texCoord);\n    vec3 base=baseRGBA.rgb;\n    vec3 inputRange = min(max(base - vec3(inMin), vec3(0.0)) / (vec3(inMax) - vec3(inMin)), vec3(outMax));\n\n    inputRange = pow(inputRange, vec3(1.0 / (1.5 - midPoint)));\n\n    outColor= vec4(mix(vec3(outMin), vec3(1.0), inputRange) ,baseRGBA.a);\n}"};const n=e.inTrigger("Render"),i=e.inValueSlider("In Min",0),r=e.inValueSlider("Midpoint",.5),s=e.inValueSlider("In Max",1),o=e.inValueSlider("Out Min",0),a=e.inValueSlider("Out Max",1),l=e.outTrigger("Next");const u=e.patch.cgl;const c=new CGL.Shader(u,e.name,e);const h=new CGL.Uniform(c,"f","inMin",i),f=new CGL.Uniform(c,"f","midPoint",r),d=new CGL.Uniform(c,"f","inMax",s),g=new CGL.Uniform(c,"f","outMin",o),p=new CGL.Uniform(c,"f","outMax",a),m=new CGL.Uniform(c,"t","tex",0);c.setSource(c.getDefaultVertexShader(),t.levels_frag);n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;u.pushShader(c);u.currentTextureEffect.bind();u.setTexture(0,u.currentTextureEffect.getCurrentSourceTexture().tex);u.currentTextureEffect.finish();u.popShader();l.trigger()}};Ops.Gl.ImageCompose.Levels_v2.prototype=new CABLES.Op;CABLES.OPS["cf49063c-a010-4e2b-add6-f8dea50392b5"]={f:Ops.Gl.ImageCompose.Levels_v2,objName:"Ops.Gl.ImageCompose.Levels_v2"};Ops.Gl.ImageCompose.EdgeDetection_v4=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={edgedetect_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float width;\nUNI float strength;\nUNI float texWidth;\nUNI float texHeight;\nUNI float mulColor;\n\nconst vec4 lumcoeff = vec4(0.299,0.587,0.114, 0.);\n\nvec3 desaturate(vec3 color)\n{\n    return vec3(dot(vec3(0.2126,0.7152,0.0722), color));\n}\n\n{{CGL.BLENDMODES3}}\n\nvoid main()\n{\n    // vec4 col=vec4(1.0,0.0,0.0,1.0);\n\n    // float pixelX=0.27/texWidth;\n    // float pixelY=0.27/texHeight;\n    float pixelX=(width+0.01)*4.0/texWidth;\n    float pixelY=(width+0.01)*4.0/texHeight;\n\nvec2 tc=texCoord;\n// #ifdef OFFSETPIXEL\n    tc.x+=1.0/texWidth*0.5;\n    tc.y+=1.0/texHeight*0.5;\n// #endif\n    // col=texture(tex,texCoord);\n\n    float count=1.0;\n    vec4 base=texture(tex,texCoord);\n\n\tvec4 horizEdge = vec4( 0.0 );\n\thorizEdge -= texture( tex, vec2( tc.x - pixelX, tc.y - pixelY ) ) * 1.0;\n\thorizEdge -= texture( tex, vec2( tc.x - pixelX, tc.y     ) ) * 2.0;\n\thorizEdge -= texture( tex, vec2( tc.x - pixelX, tc.y + pixelY ) ) * 1.0;\n\thorizEdge += texture( tex, vec2( tc.x + pixelX, tc.y - pixelY ) ) * 1.0;\n\thorizEdge += texture( tex, vec2( tc.x + pixelX, tc.y     ) ) * 2.0;\n\thorizEdge += texture( tex, vec2( tc.x + pixelX, tc.y + pixelY ) ) * 1.0;\n\tvec4 vertEdge = vec4( 0.0 );\n\tvertEdge -= texture( tex, vec2( tc.x - pixelX, tc.y - pixelY ) ) * 1.0;\n\tvertEdge -= texture( tex, vec2( tc.x    , tc.y - pixelY ) ) * 2.0;\n\tvertEdge -= texture( tex, vec2( tc.x + pixelX, tc.y - pixelY ) ) * 1.0;\n\tvertEdge += texture( tex, vec2( tc.x - pixelX, tc.y + pixelY ) ) * 1.0;\n\tvertEdge += texture( tex, vec2( tc.x    , tc.y + pixelY ) ) * 2.0;\n\tvertEdge += texture( tex, vec2( tc.x + pixelX, tc.y + pixelY ) ) * 1.0;\n\n\thorizEdge*=base.a;\n\tvertEdge*=base.a;\n\n\n\tvec3 edge = sqrt((horizEdge.rgb/count * horizEdge.rgb/count) + (vertEdge.rgb/count * vertEdge.rgb/count));\n\n    edge=desaturate(edge);\n    edge*=strength;\n\n    if(mulColor>0.0) edge*=texture( tex, texCoord ).rgb*mulColor*4.0;\n    edge=max(min(edge,1.0),0.0);\n\n    //blend section\n    vec4 col=vec4(edge,base.a);\n\n    outColor=cgl_blendPixel(base,col,amount*base.a);\n}\n\n"};const n=e.inTrigger("Render"),i=CGL.TextureEffect.AddBlendSelect(e,"Blend Mode","normal"),r=e.inValueSlider("Amount",1),s=e.inFloat("Strength",4),o=e.inValueSlider("Width",.1),a=e.inValueSlider("Mul Color",0),l=e.outTrigger("Trigger");const u=e.patch.cgl;const c=new CGL.Shader(u,e.name,e);c.setSource(c.getDefaultVertexShader(),t.edgedetect_frag);const h=new CGL.Uniform(c,"t","tex",0),f=new CGL.Uniform(c,"f","amount",r),d=new CGL.Uniform(c,"f","strength",s),g=new CGL.Uniform(c,"f","width",o),p=new CGL.Uniform(c,"f","texWidth",128),m=new CGL.Uniform(c,"f","texHeight",128),_=new CGL.Uniform(c,"f","mulColor",a);CGL.TextureEffect.setupBlending(e,c,i,r);n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;u.pushShader(c);u.currentTextureEffect.bind();u.setTexture(0,u.currentTextureEffect.getCurrentSourceTexture().tex);p.setValue(u.currentTextureEffect.getCurrentSourceTexture().width);m.setValue(u.currentTextureEffect.getCurrentSourceTexture().height);u.currentTextureEffect.finish();u.popShader();l.trigger()}};Ops.Gl.ImageCompose.EdgeDetection_v4.prototype=new CABLES.Op;CABLES.OPS["0240e26e-b86d-43b2-8c72-6795bb86dc76"]={f:Ops.Gl.ImageCompose.EdgeDetection_v4,objName:"Ops.Gl.ImageCompose.EdgeDetection_v4"};Ops.Gl.Meshes.FullscreenRectangle_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={shader_frag:"UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n    outColor= texture(tex,texCoord);\n}\n\n",shader_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=vec2(attrTexCoord.x,(1.0-attrTexCoord.y));\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n"};const n=e.inTrigger("render"),i=e.inSwitch("Scale",["Stretch","Fit"],"Fit"),r=e.inValueBool("Flip Y"),s=e.inValueBool("Flip X"),o=e.inTexture("Texture"),a=e.outTrigger("trigger");const l=e.patch.cgl;let u=null;let c=new CGL.Geometry("fullscreen rectangle");let h=0,f=0,d=0,g=0;e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);e.toWorkPortsNeedToBeLinked(n);s.onChange=E;r.onChange=E;n.onTriggered=A;o.onLinkChanged=b;i.onChange=I;const p=new CGL.Shader(l,"fullscreenrectangle",this);p.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);p.setSource(t.shader_vert,t.shader_frag);p.fullscreenRectUniform=new CGL.Uniform(p,"t","tex",0);p.aspectUni=new CGL.Uniform(p,"f","aspectTex",0);let m=false;let _=true;let v=false;b();I();o.onChange=function(){_=true};function b(){if(!CABLES.UI)return;r.setUiAttribs({greyout:!o.isLinked()});s.setUiAttribs({greyout:!o.isLinked()});i.setUiAttribs({greyout:!o.isLinked()})}function x(){let e=o.get();if(e)m=true;else m=false}e.preRender=function(){x();p.bind();if(u)u.render(p);A()};function I(){v=i.get()=="Fit"}function A(){if(l.viewPort[2]!=d||l.viewPort[3]!=g||!u)T();if(_)x();l.pushPMatrix();mat4.identity(l.pMatrix);mat4.ortho(l.pMatrix,0,d,g,0,-10,1e3);l.pushModelMatrix();mat4.identity(l.mMatrix);l.pushViewMatrix();mat4.identity(l.vMatrix);if(v&&o.get()){const n=o.get().width/o.get().height;let e=g;let t=g*n;if(t>d){e=d*1/n;t=d}l.pushViewPort((d-t)/2,(g-e)/2,t,e)}if(m){if(o.get())l.setTexture(0,o.get().tex);u.render(p)}else{u.render(l.getShader())}l.gl.clear(l.gl.DEPTH_BUFFER_BIT);l.popPMatrix();l.popModelMatrix();l.popViewMatrix();if(v&&o.get())l.popViewPort();a.trigger()}function E(){u=null}function T(){if(l.viewPort[2]==d&&l.viewPort[3]==g&&u)return;let e=0,t=0;d=l.viewPort[2];g=l.viewPort[3];c.vertices=new Float32Array([e+d,t+g,0,e,t+g,0,e+d,t,0,e,t,0]);let n=null;if(r.get())n=new Float32Array([1,0,0,0,1,1,0,1]);else n=new Float32Array([1,1,0,1,1,0,0,0]);if(s.get()){n[0]=0;n[2]=1;n[4]=0;n[6]=1}c.setTexCoords(n);c.verticesIndices=new Uint16Array([2,1,0,3,1,2]);c.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]);c.tangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0]);c.biTangents==new Float32Array([0,-1,0,0,-1,0,0,-1,0,0,-1,0]);if(!u)u=new CGL.Mesh(l,c);else u.setGeom(c)}};Ops.Gl.Meshes.FullscreenRectangle_v2.prototype=new CABLES.Op;CABLES.OPS["fb70721a-eac2-4ff5-a5a2-5c59e2393972"]={f:Ops.Gl.Meshes.FullscreenRectangle_v2,objName:"Ops.Gl.Meshes.FullscreenRectangle_v2"};Ops.Gl.ImageCompose.ImageCompose_v4=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={imgcomp_frag:"IN vec2 texCoord;\nUNI vec4 bgColor;\nUNI sampler2D tex;\n#ifdef USE_UVTEX\nUNI sampler2D UVTex;\n#endif\n\nvoid main()\n{\n\n    #ifndef USE_TEX\n        outColor=bgColor;\n    #endif\n    #ifdef USE_TEX\n        #ifndef USE_UVTEX\n        outColor=texture(tex,texCoord);\n        #else\n        outColor=texture(tex,texture(UVTex,texCoord).xy);\n        #endif\n    #endif\n\n\n\n}\n"};const t=n.patch.cgl,i=n.inTrigger("Render"),r=n.inTexture("Base Texture"),s=n.inTexture("UV Texture"),o=n.inSwitch("Size",["Auto","Canvas","Manual"],"Auto"),a=n.inValueInt("Width",640),l=n.inValueInt("Height",480),u=n.inSwitch("Filter",["nearest","linear","mipmap"],"linear"),c=n.inValueSelect("Wrap",["clamp to edge","repeat","mirrored repeat"],"repeat"),h=n.inSwitch("Anisotropic",["0","1","2","4","8","16"],"0"),f=n.inDropDown("Pixel Format",CGL.Texture.PIXELFORMATS,CGL.Texture.PFORMATSTR_RGBA8UB),d=n.inValueSlider("R",0),g=n.inValueSlider("G",0),p=n.inValueSlider("B",0),m=n.inValueSlider("A",0),_=n.outTrigger("Next"),v=n.outTexture("texture_out",CGL.Texture.getEmptyTexture(t)),b=n.outNumber("Aspect Ratio"),x=n.outNumber("Texture Width"),G=n.outNumber("Texture Height");n.setPortGroup("Texture Size",[o,a,l]);n.setPortGroup("Texture Parameters",[c,h,u,f]);d.setUiAttribs({colorPick:true});n.setPortGroup("Color",[d,g,p,m]);n.toWorkPortsNeedToBeLinked(i);const B=[0,0,0,0];let I=null;let A=null;let E=true;let D=false;let T=null;let k=null;let U=null;let V=null;c.onChange=u.onChange=h.onChange=f.onChange=F;r.onLinkChanged=o.onChange=s.onChange=w;i.onTriggered=n.preRender=R;w();function C(){if(I)I.delete();if(A)A.delete();A=null;I=new CGL.TextureEffect(t,{isFloatingPointTexture:CGL.Texture.isPixelFormatFloat(f.get()),name:n.name});const e=Math.min(t.maxAnisotropic,parseFloat(h.get()));A=new CGL.Texture(t,{anisotropic:e,name:"image_compose_v2_"+n.id,pixelFormat:f.get(),filter:y(),wrap:S(),width:L(),height:O()});I.setSourceTexture(A);x.set(L());G.set(O());b.set(L()/O());v.set(CGL.Texture.getEmptyTexture(t));E=false;w()}function y(){if(u.get()=="nearest")return CGL.Texture.FILTER_NEAREST;else if(u.get()=="linear")return CGL.Texture.FILTER_LINEAR;else if(u.get()=="mipmap")return CGL.Texture.FILTER_MIPMAP}function S(){if(c.get()=="repeat")return CGL.Texture.WRAP_REPEAT;else if(c.get()=="mirrored repeat")return CGL.Texture.WRAP_MIRRORED_REPEAT;else if(c.get()=="clamp to edge")return CGL.Texture.WRAP_CLAMP_TO_EDGE}function L(){let e=0;if(r.get()&&o.get()=="Auto")e=r.get().width;else if(o.get()=="Auto"||o.get()=="Canvas")e=t.canvasWidth;else if(o.get()=="ViewPort")e=t.getViewPort()[2];else e=Math.ceil(a.get());return n.patch.cgl.checkTextureSize(e)}function O(){let e=0;if(r.get()&&o.get()=="Auto")e=r.get().height;else if(o.get()=="Auto"||o.get()=="Canvas")e=t.canvasHeight;else if(o.get()=="ViewPort")e=t.getViewPort()[3];else e=Math.ceil(l.get());return n.patch.cgl.checkTextureSize(e)}function F(){E=true}function z(){if((L()!=A.width||O()!=A.height||A.pixelFormat!=f.get()||A.filter!=y()||A.wrap!=S())&&(L()!==0&&O()!==0)){C();I.setSourceTexture(A);v.set(CGL.Texture.getEmptyTexture(t));v.set(A);N();P()}}function N(){let e=null;if(o.get()=="Manual"){e=null}else if(o.get()=="Auto"){if(r.get())e="Input Texture";else e="Canvas Size";e+=": "+L()+" x "+O()}let t=false;t=o.uiAttribs.info!=e;o.setUiAttribs({info:e});if(t)n.refreshParams()}function M(){if(T)T.toggleDefine("USE_TEX",r.isLinked());if(T)T.toggleDefine("USE_UVTEX",s.isLinked())}function w(){h.setUiAttribs({greyout:y()!=CGL.Texture.FILTER_MIPMAP});d.setUiAttribs({greyout:r.isLinked()});p.setUiAttribs({greyout:r.isLinked()});g.setUiAttribs({greyout:r.isLinked()});m.setUiAttribs({greyout:r.isLinked()});a.setUiAttribs({greyout:o.get()!="Manual"});l.setUiAttribs({greyout:o.get()!="Manual"});if(A)if(CGL.Texture.isPixelFormatFloat(f.get())&&y()==CGL.Texture.FILTER_MIPMAP)n.setUiError("fpmipmap","Don't use mipmap and 32bit at the same time, many systems do not support this.");else n.setUiError("fpmipmap",null);N();M();P()}function P(){if(A)if(r.isLinked()&&r.get()&&A.isFloatingPoint()!=r.get().isFloatingPoint())n.setUiError("textypediff","Warning: Mixing floating point and non floating point texture can result in data/precision loss",1);else n.setUiError("textypediff",null)}n.preRender=()=>{R()};function j(){if(!T){T=new CGL.Shader(t,"copytextureshader");T.setSource(T.getDefaultVertexShader(),e.imgcomp_frag);k=new CGL.Uniform(T,"t","tex",0);U=new CGL.Uniform(T,"t","UVTex",1);V=new CGL.Uniform(T,"4f","bgColor",d,g,p,m);M()}t.pushShader(T);t.currentTextureEffect.bind();if(r.get())t.setTexture(0,r.get().tex);if(s.get())t.setTexture(1,s.get().tex);t.currentTextureEffect.finish();t.popShader()}function R(){if(!I||E)C();t.pushBlend(false);z();const e=t.currentTextureEffect;t.currentTextureEffect=I;t.currentTextureEffect.imgCompVer=3;t.currentTextureEffect.width=a.get();t.currentTextureEffect.height=l.get();I.setSourceTexture(A);I.startEffect(r.get()||CGL.Texture.getEmptyTexture(t,D),true);j();_.trigger();t.pushViewPort(0,0,a.get(),l.get());I.endEffect();v.setRef(I.getCurrentSourceTexture());t.popViewPort();t.popBlend();t.currentTextureEffect=e}};Ops.Gl.ImageCompose.ImageCompose_v4.prototype=new CABLES.Op;CABLES.OPS["17212e2b-d692-464c-8f8d-2d511dd3410a"]={f:Ops.Gl.ImageCompose.ImageCompose_v4,objName:"Ops.Gl.ImageCompose.ImageCompose_v4"};Ops.Gl.Textures.CopyTexture_v3=function(){CABLES.Op.apply(this,arguments);const t=this;const B=t.attachments={copytexture_frag:"UNI float a;\nUNI sampler2D tex;\n\n#ifdef TEX_MASK\nUNI sampler2D texMask;\n#endif\n\nIN vec2 texCoord;\n\nvoid main()\n{\n    vec2 tc=texCoord;\n\n    #ifdef FLIPX\n        tc.x=1.0-tc.x;\n    #endif\n    #ifdef FLIPY\n        tc.y=1.0-tc.y;\n    #endif\n\n    vec4 col=texture(tex,tc);\n\n    #ifdef TEX_MASK\n        col.a=texture(texMask,tc).r;\n    #endif\n\n    #ifdef GREY_R\n        col.rgb=vec3(col.r);\n    #endif\n\n    #ifdef GREY_G\n        col.rgb=vec3(col.g);\n    #endif\n\n    #ifdef GREY_B\n        col.rgb=vec3(col.b);\n    #endif\n\n    #ifdef GREY_A\n        col.rgb=vec3(col.a);\n    #endif\n\n    #ifdef GREY_LUMI\n        col.rgb=vec3( dot(vec3(0.2126,0.7152,0.0722), col.rgb) );\n    #endif\n\n\n    #ifdef INVERT_A\n        col.a=1.0-col.a;\n    #endif\n\n    #ifdef INVERT_R\n        col.r=1.0-col.r;\n    #endif\n\n    #ifdef INVERT_G\n        col.g=1.0-col.g;\n    #endif\n\n    #ifdef INVERT_B\n        col.b=1.0-col.b;\n    #endif\n\n    #ifdef ALPHA_1\n        col.a=1.0;\n    #endif\n\n\n\n\n    outColor= col;\n}"};const e=t.inTriggerButton("render"),n=t.inTexture("Texture"),i=t.inTexture("Alpha Mask"),r=t.inValueBool("use original size",true),s=t.inValueInt("width",640),o=t.inValueInt("height",360),a=t.inSwitch("filter",["nearest","linear","mipmap"],"linear"),l=t.inDropDown("Pixel Format",CGL.Texture.PIXELFORMATS,CGL.Texture.PFORMATSTR_RGBA8UB),u=t.inSwitch("Anisotropic",["0","1","2","4","8","16"],"0"),c=t.inValueSelect("wrap",["clamp to edge","repeat","mirrored repeat"],"clamp to edge"),h=t.inSwitch("Alpha Mask Source",["A","1"],"A"),f=t.inSwitch("Convert Greyscale",["Off","R","G","B","A","Luminance"],"Off"),d=t.inBool("Invert R",false),g=t.inBool("Invert G",false),p=t.inBool("Invert B",false),D=t.inBool("Invert A",false),m=t.inBool("Flip X",false),_=t.inBool("Flip Y",false),v=t.outTrigger("trigger"),b=t.outTexture("texture_out",null),k=t.outNumber("Aspect Ratio");h.setUiAttribs({hidePort:true});f.setUiAttribs({hidePort:true});d.setUiAttribs({hidePort:true});g.setUiAttribs({hidePort:true});p.setUiAttribs({hidePort:true});let U=null;const x=t.patch.cgl;let I=null;let A=null;let E=null;let T=true;let C=null;let y=2,S=2;const L=[0,0,0,0];let O=true;t.toWorkPortsNeedToBeLinked(e,n);t.setPortGroup("Size",[r,s,o]);const N=new CGL.Shader(x,"copytexture");N.setSource(N.getDefaultVertexShader(),B.copytexture_frag);const V=new CGL.Uniform(N,"t","tex",0);let F=new CGL.Uniform(N,"t","texMask",1);let M=CGL.Texture.FILTER_LINEAR;let w=CGL.Texture.WRAP_CLAMP_TO_EDGE;m.onChange=_.onChange=h.onChange=u.onChange=f.onChange=d.onChange=g.onChange=p.onChange=c.onChange=a.onChange=l.onChange=e.onLinkChanged=i.onChange=n.onLinkChanged=()=>{R()};n.onChange=()=>{if(C!=n.get()){R()}C=n.get()};e.onTriggered=H;G();function P(){if(A)A.delete();if(E){E.delete();E=null}A=new CGL.TextureEffect(x,{pixelFormat:l.get(),clear:false});if(!E||E.width!=Math.floor(s.get())||E.height!=Math.floor(o.get())||E.wrap!=w||E.pixelFormat!=l.get()){const e=Math.min(x.maxAnisotropic,parseFloat(u.get()));if(E)E.delete();E=new CGL.Texture(x,{name:"copytexture_"+t.id,pixelFormat:l.get(),anisotropic:e,filter:M,wrap:w,width:Math.floor(s.get()),height:Math.floor(o.get())})}A.setSourceTexture(E);G();O=false}function R(){X();O=true;if(!e.isLinked()||!n.isLinked())b.setRef(CGL.Texture.getEmptyTexture(x))}function z(){if(!n.get()||n.get()==CGL.Texture.getEmptyTexture(x))return;if(!A)P();if(r.get()){y=n.get().width;S=n.get().height}else{y=Math.floor(s.get());S=Math.floor(o.get())}if((y!=E.width||S!=E.height)&&(y!==0&&S!==0)){o.set(S);s.set(y);E.filter=M;E.setSize(y,S);k.set(y/S);A.setSourceTexture(E)}T=false}function G(){if(!CABLES.UI)return;u.setUiAttribs({greyout:a.get()!="mipmap"});s.setUiAttribs({greyout:r.get()});o.setUiAttribs({greyout:r.get()})}function j(){T=true;R()}r.onChange=function(){G();if(r.get()){s.onChange=null;o.onChange=null}else{s.onChange=j;o.onChange=j}z()};function H(){if(!n.get()||n.get()==CGL.Texture.getEmptyTexture(x))b.setRef(CGL.Texture.getEmptyTexture(x));if(!n.get()||n.get()==CGL.Texture.getEmptyTexture(x)){I=null;v.trigger();return}else if(!A||O||I!=n.get()){P()}const e=x.getViewPort();L[0]=e[0];L[1]=e[1];L[2]=e[2];L[3]=e[3];z();I=n.get();const t=x.currentTextureEffect;x.currentTextureEffect=A;A.setSourceTexture(E);A.startEffect();x.pushShader(N);x.currentTextureEffect.bind();x.setTexture(0,n.get().tex);if(i.get())x.setTexture(1,i.get().tex);x.pushBlend(false);x.currentTextureEffect.finish();x.popShader();x.popBlend();b.setRef(A.getCurrentSourceTexture());A.endEffect();x.setViewPort(L[0],L[1],L[2],L[3]);x.currentTextureEffect=t;x.setTexture(0,CGL.Texture.getEmptyTexture(x).tex);v.trigger()}function X(){N.toggleDefine("FLIPX",m.get());N.toggleDefine("FLIPY",_.get());N.toggleDefine("TEX_MASK",i.get());N.toggleDefine("GREY_R",f.get()==="R");N.toggleDefine("GREY_G",f.get()==="G");N.toggleDefine("GREY_B",f.get()==="B");N.toggleDefine("GREY_A",f.get()==="A");N.toggleDefine("GREY_LUMI",f.get()==="Luminance");N.toggleDefine("ALPHA_1",h.get()==="1");N.toggleDefine("ALPHA_A",h.get()==="A");N.toggleDefine("INVERT_R",d.get());N.toggleDefine("INVERT_G",g.get());N.toggleDefine("INVERT_B",p.get());N.toggleDefine("INVERT_A",D.get());if(c.get()=="repeat")w=CGL.Texture.WRAP_REPEAT;else if(c.get()=="mirrored repeat")w=CGL.Texture.WRAP_MIRRORED_REPEAT;else if(c.get()=="clamp to edge")w=CGL.Texture.WRAP_CLAMP_TO_EDGE;if(a.get()=="nearest")M=CGL.Texture.FILTER_NEAREST;else if(a.get()=="linear")M=CGL.Texture.FILTER_LINEAR;else if(a.get()=="mipmap")M=CGL.Texture.FILTER_MIPMAP;if(N.needsRecompile()){O=true}if(E&&(E.width!=Math.floor(s.get())||E.height!=Math.floor(o.get())||E.wrap!=w||E.pixelFormat!=l.get())){O=true}}};Ops.Gl.Textures.CopyTexture_v3.prototype=new CABLES.Op;CABLES.OPS["25d77a01-ccfe-4b2e-b3c3-a09a8a018d0c"]={f:Ops.Gl.Textures.CopyTexture_v3,objName:"Ops.Gl.Textures.CopyTexture_v3"};Ops.Gl.MainLoop_v2=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const t=n.inFloat("Max Pixel Density (DPR)",2),i=n.inValue("FPS Limit",0),r=n.inValueBool("Reduce FPS unfocussed",false),s=n.inValueBool("Transparent",false),o=n.inValueBool("Active",1),a=n.outTrigger("trigger"),l=n.outNumber("width"),u=n.outNumber("height"),c=n.outNumber("Pixel Density");n.onAnimFrame=T;t.onChange=I;const h=n.patch.cgl;let f=0;let d=0;let g=null;let p=false;if(!n.patch.cgl)n.uiAttr({error:"No webgl cgl context"});const m=vec3.create();vec3.set(m,0,0,0);const _=vec3.create();vec3.set(_,0,0,-2);let v=null;let b=true;let x=true;window.addEventListener("blur",()=>{b=false});window.addEventListener("focus",()=>{b=true});document.addEventListener("visibilitychange",()=>{x=!document.hidden});C();h.mainloopOp=this;function I(){E();if(CABLES.UI){if(t.get()<1)n.patch.cgl.canvas.style.imageRendering="pixelated"}n.patch.cgl.updateSize();if(CABLES.UI)gui.setLayout()}o.onChange=function(){n.patch.removeOnAnimFrame(n);if(o.get()){n.setUiAttrib({extendTitle:""});n.onAnimFrame=T;n.patch.addOnAnimFrame(n);n.log("adding again!")}else{n.setUiAttrib({extendTitle:"Inactive"})}};function A(){if(r.get()){if(!x)return 10;if(!b)return 30}return i.get()}n.onDelete=function(){h.gl.clearColor(0,0,0,0);h.gl.clear(h.gl.COLOR_BUFFER_BIT|h.gl.DEPTH_BUFFER_BIT)};function E(){if(t.get()!=0)n.patch.cgl.pixelDensity=Math.min(t.get(),window.devicePixelRatio);else n.patch.cgl.pixelDensity=window.devicePixelRatio}function T(e){if(!o.get())return;if(h.aborted||h.canvas.clientWidth===0||h.canvas.clientHeight===0)return;n.patch.cg=h;E();const t=performance.now();n.patch.config.fpsLimit=A();if(h.canvasWidth==-1){h.setCanvas(n.patch.config.glCanvasId);return}if(h.canvasWidth!=l.get()||h.canvasHeight!=u.get()){l.set(h.canvasWidth/1);u.set(h.canvasHeight/1)}if(CABLES.now()-d>1e3){CGL.fpsReport=CGL.fpsReport||[];if(n.patch.loading.getProgress()>=1&&d!==0)CGL.fpsReport.push(f);f=0;d=CABLES.now()}CGL.MESH.lastShader=null;CGL.MESH.lastMesh=null;h.renderStart(h,m,_);if(!s.get())h.gl.clearColor(0,0,0,1);else h.gl.clearColor(0,0,0,0);h.gl.clear(h.gl.COLOR_BUFFER_BIT|h.gl.DEPTH_BUFFER_BIT);a.trigger();if(CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();if(CGL.Texture.previewTexture){if(!CGL.Texture.texturePreviewer)CGL.Texture.texturePreviewer=new CGL.Texture.texturePreview(h);CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)}h.renderEnd(h);n.patch.cg=null;if(!s.get()){h.gl.clearColor(1,1,1,1);h.gl.colorMask(false,false,false,true);h.gl.clear(h.gl.COLOR_BUFFER_BIT);h.gl.colorMask(true,true,true,true)}if(!h.frameStore.phong)h.frameStore.phong={};f++;c.set(n.patch.cgl.pixelDensity);n.patch.cgl.profileData.profileMainloopMs=performance.now()-t}function C(){clearTimeout(g);g=setTimeout(()=>{if(n.patch.getOpsByObjName(n.name).length>1){n.setUiError("multimainloop","there should only be one mainloop op!");if(!p)p=n.patch.addEventListener("onOpDelete",C)}else n.setUiError("multimainloop",null,1)},500)}};Ops.Gl.MainLoop_v2.prototype=new CABLES.Op;CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};Ops.Anim.Timer_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const s=e.inValue("Speed",1),n=e.inValueBool("Play",true),i=e.inTriggerButton("Reset"),r=e.inValueBool("Sync to timeline",false),o=e.outNumber("Time");e.setPortGroup("Controls",[n,i,s]);const a=new CABLES.Timer;let l=null;let u=0;let c=false;n.onChange=h;h();function h(){if(n.get()){a.play();e.patch.addOnAnimFrame(e)}else{a.pause();e.patch.removeOnAnimFrame(e)}}i.onTriggered=f;function f(){u=0;l=null;a.setTime(0);o.set(0)}r.onChange=function(){c=r.get();n.setUiAttribs({greyout:c});i.setUiAttribs({greyout:c})};e.onAnimFrame=function(e,t,n){if(a.isPlaying()){if(CABLES.overwriteTime!==undefined){o.set(CABLES.overwriteTime*s.get())}else if(c){o.set(e*s.get())}else{a.update();const i=a.get();if(l===null){l=i;return}const r=Math.abs(i-l);l=i;u+=r*s.get();if(u!=u)u=0;o.set(u)}}}};Ops.Anim.Timer_v2.prototype=new CABLES.Op;CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"]={f:Ops.Anim.Timer_v2,objName:"Ops.Anim.Timer_v2"};Ops.Gl.Performance=function(){CABLES.Op.apply(this,arguments);const o=this;const B=o.attachments={};const e=o.inTrigger("exe"),a=o.inValueBool("Visible",true),D=o.inValueBool("Measure GPU",true),l=o.outTrigger("childs"),t=o.inSwitch("Position",["top","bottom"],"top"),n=o.inBool("Open",false),k=o.inBool("Smooth Graph",true),U=o.inFloat("Scale",3),u=o.inFloat("Size",128),V=o.outObject("Canvas"),F=o.outNumber("FPS");const i=o.patch.cgl;const r=document.createElement("div");let s=null;let c=null;let h=false;let f=0;let d=0;let g=0;let p=0;let m=0;const _=[];const v=[];const b=[];const x=[];let I=0;let A=0;let E=null;let z=0;let j=0;const T=["|","/","-","\\"];let C=true;const H="#007f9c";const X="#aaaaaa";const Y="#222222";const y="#003f5c";const S="#7a5195";const L="#ef5675";const O="#ffa600";let W=false;let N=0;let M=0;let w=0;o.toWorkPortsNeedToBeLinked(e,l);const Z=o.patch.cgl.gl;const Q=Z.getExtension("EXT_disjoint_timer_query_webgl2");e.onLinkChanged=a.onChange=()=>{G();K()};t.onChange=q;u.onChange=R;r.id="performance";r.style.position="absolute";r.style.left="0px";r.style.opacity="0.8";r.style.padding="10px";r.style.cursor="pointer";r.style.background="#222";r.style.color="white";r.style["font-family"]="monospace";r.style["font-size"]="12px";r.style["z-index"]="99999";r.innerHTML="&nbsp;";r.addEventListener("click",J);const P=o.patch.cgl.canvas.parentElement;P.appendChild(r);R();G();q();K();o.onDelete=function(){if(E)E.remove();if(r)r.remove()};function q(){E.style["pointer-events"]="none";if(t.get()=="top"){E.style.top=r.style.top="0px";E.style.bottom=r.style.bottom="initial"}else{E.style.bottom=r.style.bottom="0px";E.style.top=r.style.top="initial"}}function K(){if(!a.get()||!e.isLinked()){r.style.display="none";r.style.opacity=0;E.style.display="none"}else{r.style.display="block";r.style.opacity=1;E.style.display="block"}}function R(){if(!E)return;const t=Math.max(0,parseInt(u.get()));E.width=t;E.height=t;r.style.left=t+"px";_.length=0;v.length=0;b.length=0;x.length=0;for(let e=0;e<t;e++){_[e]=-1;v[e]=-1;b[e]=-1;x[e]=-1}}n.onChange=function(){h=n.get();G()};function J(){if(!a.get())return;r.style.opacity=1;h=!h;G()}function G(){te();if(!E)ee();if(h){E.style.display="block";r.style.left=u.get()+"px";r.style["min-height"]="56px"}else{E.style.display="none";r.style.left="0px";r.style["min-height"]="auto"}}function $(){const t=E.height;const n=U.get();c.fillStyle=Y;c.fillRect(0,0,E.width,t);c.fillStyle=y;let i=0;const r=Math.max(0,parseInt(u.get()));for(i=r;i>=0;i--){if(_[i]>30)c.fillStyle=H;if(_[i]>60)c.fillStyle=X;c.fillRect(r-i,t-_[i]*n,1,_[i]*n);if(_[i]>30)c.fillStyle=y}for(i=r;i>=0;i--){let e=0;c.fillStyle=S;e=v[i];c.fillRect(r-i,t-e*n,1,v[i]*n);c.fillStyle=L;e+=b[i];c.fillRect(r-i,t-e*n,1,b[i]*n);c.fillStyle=O;e+=x[i];c.fillRect(r-i,t-e*n,1,x[i]*n)}for(let e=10;e<t;e+=10){c.fillStyle="#888";const s=t-e*n;c.fillRect(E.width-5,s,5,1);c.font="8px arial";c.fillText(e+"ms",E.width-27,s+3)}c.fillStyle="#fff";c.fillRect(E.width-5,t-1e3/d*n,5,1);c.fillText(Math.round(1e3/d)+"ms",E.width-27,t-1e3/d*n)}function ee(){E=document.createElement("canvas");E.id="performance_"+o.patch.config.glCanvasId;E.width=u.get();E.height=u.get();E.style.display="block";E.style.opacity=.9;E.style.position="absolute";E.style.left="0px";E.style.cursor="pointer";E.style.top="-64px";E.style["z-index"]="99998";P.appendChild(E);c=E.getContext("2d");E.addEventListener("click",J);R()}function te(){if(!a.get())return;let e="";if(o.patch.cgl.profileData.profileShaderCompiles>0)e+="Shader compile ("+o.patch.cgl.profileData.profileShaderCompileName+") ";if(o.patch.cgl.profileData.profileShaderGetUniform>0)e+="Shader get uni loc! ("+o.patch.cgl.profileData.profileShaderGetUniformName+")";if(o.patch.cgl.profileData.profileTextureResize>0)e+="Texture resize! ";if(o.patch.cgl.profileData.profileFrameBuffercreate>0)e+="Framebuffer create! ";if(o.patch.cgl.profileData.profileEffectBuffercreate>0)e+="Effectbuffer create! ";if(o.patch.cgl.profileData.profileTextureDelete>0)e+="Texture delete! ";if(o.patch.cgl.profileData.profileNonTypedAttrib>0)e+="Not-Typed Buffer Attrib! "+o.patch.cgl.profileData.profileNonTypedAttribNames;if(o.patch.cgl.profileData.profileTextureNew>0)e+="new texture created! ";if(o.patch.cgl.profileData.profileGenMipMap>0)e+="generating mip maps!";if(e.length>0){e='| <span style="color:#f80;">WARNING: '+e+"<span>"}let t="";if(h){t+='<span style="color:'+y+'">■</span> '+d+" fps ";t+='<span style="color:'+S+'">■</span> '+Math.round(M*100)/100+"ms mainloop ";t+='<span style="color:'+L+'">■</span> '+Math.round(w*100)/100+"ms onframe ";if(N)t+='<span style="color:'+O+'">■</span> '+Math.round(N*100)/100+"ms GPU";t+=e;r.innerHTML=t}else{t+=d+" fps / ";t+="CPU: "+Math.round(o.patch.cgl.profileData.profileOnAnimFrameOps*100)/100+"ms / ";if(N)t+="GPU: "+Math.round(N*100)/100+"ms  ";r.innerHTML=t}if(o.patch.loading.getProgress()!=1){r.innerHTML+="<br/>loading "+Math.round(o.patch.loading.getProgress()*100)+"% "+T[++j%T.length]}if(h){let t=0;I=0;m=0;for(let e=_.length;e>_.length-_.length/3;e--){if(_[e]>-1){I+=_[e];t++}if(v[e]>-1)m+=v[e]}I/=t;m/=t;r.innerHTML+="<br/> "+i.canvasWidth+" x "+i.canvasHeight+" (x"+i.pixelDensity+") ";r.innerHTML+="<br/>frame avg: "+Math.round(m*100)/100+" ms ("+Math.round(m/I*100)+"%) / "+Math.round(I*100)/100+" ms";r.innerHTML+=" (self: "+Math.round(A*100)/100+" ms) ";r.innerHTML+="<br/>shader binds: "+Math.ceil(o.patch.cgl.profileData.profileShaderBinds/d)+" uniforms: "+Math.ceil(o.patch.cgl.profileData.profileUniformCount/d)+" mvp_uni_mat4: "+Math.ceil(o.patch.cgl.profileData.profileMVPMatrixCount/d)+" num glPrimitives: "+Math.ceil(o.patch.cgl.profileData.profileMeshNumElements/d)+" fenced pixelread: "+Math.ceil(o.patch.cgl.profileData.profileFencedPixelRead)+" mesh.setGeom: "+o.patch.cgl.profileData.profileMeshSetGeom+" videos: "+o.patch.cgl.profileData.profileVideosPlaying+" tex preview: "+o.patch.cgl.profileData.profileTexPreviews;r.innerHTML+=" draw meshes: "+Math.ceil(o.patch.cgl.profileData.profileMeshDraw/d)+" framebuffer blit: "+Math.ceil(o.patch.cgl.profileData.profileFramebuffer/d)+" texeffect blit: "+Math.ceil(o.patch.cgl.profileData.profileTextureEffect/d);r.innerHTML+=" all shader compiletime: "+Math.round(o.patch.cgl.profileData.shaderCompileTime*100)/100}o.patch.cgl.profileData.clear()}function ne(e){e.style.padding="0px";e.style.margin="0px"}function ie(t,e,n,i){const r=20;t.usedAvg=t.usedAvg||t.used;if(!t.ele||C){const o=document.createElement("div");t.ele=o;if(t.childs&&t.childs.length>0)o.style.height="500px";else o.style.height=r+"px";o.style.overflow="hidden";o.style.display="inline-block";if(!t.isRoot){o.innerHTML='<div style="min-height:'+r+'px;width:100%;overflow:hidden;color:black;position:relative">&nbsp;'+t.name+"</div>";o.style["background-color"]="rgb("+t.colR+","+t.colG+","+t.colB+")";o.style["border-left"]="1px solid black"}e.appendChild(o)}if(!t.isRoot){if(performance.now()-t.lastTime>200){t.ele.style.display="none";t.hidden=true}else{if(t.hidden){t.ele.style.display="inline-block";t.hidden=false}}t.ele.style.float="left";t.ele.style.width=Math.floor(t.usedAvg/n*98)+"%"}else{t.ele.style.width="100%";t.ele.style.clear="both";t.ele.style.float="none"}if(t&&t.childs&&t.childs.length>0){let e=0;for(var s=0;s<t.childs.length;s++){t.childs[s].usedAvg=(t.childs[s].usedAvg||t.childs[s].used)*.95+t.childs[s].used*.05;e+=t.childs[s].usedAvg}for(var s=0;s<t.childs.length;s++){ie(t.childs[s],t.ele,e,i+1)}}}function re(t){for(let e=0;e<t.childs.length;e++)re(t.childs[e]);t.childs.length=0}function se(){if(!CGL.performanceMeasures)return;if(!s){o.log("create measure ele");s=document.createElement("div");s.style.width="100%";s.style["background-color"]="#444";s.style.bottom="10px";s.style.height="100px";s.style.opacity="1";s.style.position="absolute";s.style["z-index"]="99999";s.innerHTML="";P.appendChild(s)}let t=0;const n=CGL.performanceMeasures[0];for(let e=0;e<n.childs.length;e++)t+=n.childs[e].used;ie(CGL.performanceMeasures[0],s,t,0);n.childs.length=0;re(CGL.performanceMeasures[0]);CGL.performanceMeasures.length=0;C=false}e.onTriggered=oe;function oe(){const e=performance.now();f++;if(Q&&D.get()&&a.get())o.patch.cgl.profileData.doProfileGlQuery=true;else o.patch.cgl.profileData.doProfileGlQuery=false;if(g===0)g=Date.now();if(Date.now()-g>=1e3){d=f;f=0;F.set(d);if(a.get())te();g=Date.now()}const n=o.patch.cgl.profileData.glQueryData;N=0;if(n){let t=0;for(let e in n){t++;if(n[e].time)N+=n[e].time}}if(a.get()){se();if(h&&!o.patch.cgl.profileData.pause){_.push(o.patch.cgl.profileData.profileFrameDelta);_.shift();v.push(p);v.shift();b.push(o.patch.cgl.profileData.profileOnAnimFrameOps-o.patch.cgl.profileData.profileMainloopMs);b.shift();x.push(N);x.shift();$()}}z=performance.now();A=performance.now()-e;const t=performance.now();V.setRef(E);l.trigger();const i=performance.now()-t;const r=o.patch.cgl.profileData.profileMainloopMs;const s=o.patch.cgl.profileData.profileOnAnimFrameOps-o.patch.cgl.profileData.profileMainloopMs;if(k.get()){p=p*.9+i*.1;M=M*.5+r*.5;w=w*.5+s*.5}else{p=i;M=r;w=s}o.patch.cgl.profileData.clearGlQuery()}};Ops.Gl.Performance.prototype=new CABLES.Op;CABLES.OPS["9cd2d9de-000f-4a14-bd13-e7d5f057583c"]={f:Ops.Gl.Performance,objName:"Ops.Gl.Performance"};Ops.Devices.Mobile.MotionSensor_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValue("Mul Orientation",1),i=e.inTrigger("Request Permissions"),r=e.outNumber("Orientation Alpha"),s=e.outNumber("Orientation Beta"),o=e.outNumber("Orientation Gamma"),a=e.outNumber("Acceleration X"),l=e.outNumber("Acceleration Y"),u=e.outNumber("Acceleration Z"),c=e.outNumber("Acceleration X no gravity"),h=e.outNumber("Acceleration Y no gravity"),f=e.outNumber("Acceleration Z no gravity"),d=e.outNumber("Rotation Rate Alpha"),g=e.outNumber("Rotation Rate Beta"),p=e.outNumber("Rotation Rate Gamma"),m=e.outObject("Object");let _=0;let v=0;let b={};function x(e){if(CABLES.now()-v>15){v=CABLES.now();a.set(e.accelerationIncludingGravity.x||0);l.set(e.accelerationIncludingGravity.y||0);u.set(e.accelerationIncludingGravity.z||0);c.set(e.acceleration.x||0);h.set(e.acceleration.y||0);f.set(e.acceleration.z||0);b.AccelerationX=a.get();b.AccelerationY=l.get();b.AccelerationZ=u.get();d.set(e.rotationRate.alpha||0);g.set(e.rotationRate.beta||0);p.set(e.rotationRate.gamma||0);m.set(null);m.set(b)}}function I(e){if(CABLES.now()-_>15){_=CABLES.now();r.set((e.alpha||0)*n.get());s.set((e.beta||0)*n.get());o.set((e.gamma||0)*n.get());b.OrientationAlpha=r.get();b.OrientationBeta=s.get();b.OrientationGamma=o.get();m.set(null);m.set(b)}}i.onTriggered=function(){if(window.DeviceMotionEvent&&window.DeviceMotionEvent.requestPermission){window.DeviceMotionEvent.requestPermission().then(e=>{if(e=="granted"){window.addEventListener("devicemotion",x,true)}}).catch(e=>{console.error(e)});window.DeviceOrientationEvent.requestPermission().then(e=>{if(e=="granted"){window.addEventListener("deviceorientation",I,true)}}).catch(e=>{console.error(e)})}else{window.addEventListener("devicemotion",x,true);window.addEventListener("deviceorientation",I,true)}};if(window.self!==window.top){e.setUiError("iframe","MotionSensor does not work in an iframe, open the patch without an iframe to get it to work",1);e.warn("MotionSensor does not work in an iframe, open the patch without an iframe to get it to work")}};Ops.Devices.Mobile.MotionSensor_v2.prototype=new CABLES.Op;CABLES.OPS["f4102f07-e5ff-4c1e-ac5b-6a4758b81727"]={f:Ops.Devices.Mobile.MotionSensor_v2,objName:"Ops.Devices.Mobile.MotionSensor_v2"};Ops.Trigger.TriggerOnce=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("Exec"),i=e.inTriggerButton("Reset"),r=e.outTrigger("Next"),s=e.outBoolNum("Was Triggered");let o=false;e.toWorkPortsNeedToBeLinked(n);i.onTriggered=function(){o=false;s.set(o)};n.onTriggered=function(){if(o)return;o=true;r.trigger();s.set(o)}};Ops.Trigger.TriggerOnce.prototype=new CABLES.Op;CABLES.OPS["cf3544e4-e392-432b-89fd-fcfb5c974388"]={f:Ops.Trigger.TriggerOnce,objName:"Ops.Trigger.TriggerOnce"};Ops.Devices.TouchScreen=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const t=r.inValueBool("Disable Scaling",true),n=r.inValueBool("Disable Scroll",true),s=r.inValueBool("HDPI Coordinates",false),i=r.inValueBool("Active",true),o=r.outNumber("Touched",false),a=r.outNumber("Fingers",0),l=r.outNumber("Finger 1 X",0),u=r.outNumber("Finger 1 Y",0),c=r.outNumber("Finger 1 Force",0),h=r.outNumber("Finger 2 X",0),f=r.outNumber("Finger 2 Y",0),d=r.outNumber("Finger 2 Force",0),g=r.inSwitch("Area",["Canvas","Document"],"Canvas"),p=r.outArray("Events"),m=r.inValueBool("Normalize Coordinates"),_=r.inValueBool("Flip Y"),v=r.outTrigger("Touch Start"),b=r.outTrigger("Touch End");g.onChange=S;function x(e){if(e.touches&&e.touches.length>0){var t=e.target.getBoundingClientRect();var n=e.touches[0].clientX-e.touches[0].target.offsetLeft;var i=e.touches[0].clientY-e.touches[0].target.offsetTop;if(_.get())i=t.height-i;if(s.get()){n*=r.patch.cgl.pixelDensity||1;i*=r.patch.cgl.pixelDensity||1}if(m.get()){n=n/t.width*2-1;i=i/t.height*2-1}l.set(n);u.set(i);if(e.touches[0].force)c.set(e.touches[0].force)}if(e.touches&&e.touches.length>1){var t=e.target.getBoundingClientRect();var n=e.touches[1].clientX-e.touches[1].target.offsetLeft;var i=e.touches[1].clientY-e.touches[1].target.offsetTop;if(s.get()){n*=r.patch.cgl.pixelDensity||1;i*=r.patch.cgl.pixelDensity||1}if(m.get()){n=n/t.width*2-1;i=i/t.height*2-1}h.set(n);f.set(i);if(e.touches[1].force)d.set(e.touches[1].force)}p.set(e.touches)}const I=function(e){o.set(true);x(e);a.set(e.touches.length);v.trigger()};const A=function(e){o.set(false);c.set(0);d.set(0);x(e);a.set(e.touches.length);b.trigger()};const E=function(e){x(e);a.set(e.touches.length);if(n.get()||t.get()&&e.scale!==1){e.preventDefault();document.body.style["touch-action"]="none"}else{document.body.style["touch-action"]="initial"}};const T=r.patch.cgl;let C=null;function y(){C.addEventListener("touchmove",E,{passive:false});C.addEventListener("touchstart",I,{passive:false});C.addEventListener("touchend",A,{passive:false})}function S(){L();if(g.get()=="Document")C=document;else C=T.canvas;if(i.get())y()}function L(){if(C){C.removeEventListener("touchmove",E);C.removeEventListener("touchstart",I);C.removeEventListener("touchend",A)}C=null}i.onChange=function(){S()};S()};Ops.Devices.TouchScreen.prototype=new CABLES.Op;CABLES.OPS["cedffacf-0f09-4342-bd21-540bd9c8037d"]={f:Ops.Devices.TouchScreen,objName:"Ops.Devices.TouchScreen"};Ops.Math.MapRange=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const f=e.inValueFloat("value",0),d=e.inValueFloat("old min",0),g=e.inValueFloat("old max",1),p=e.inValueFloat("new min",0),m=e.inValueFloat("new max",1),n=e.inValueSelect("Easing",["Linear","Smoothstep","Smootherstep"],"Linear"),i=e.inBool("Clamp",true),_=e.outNumber("result",0);e.setPortGroup("Input Range",[d,g]);e.setPortGroup("Output Range",[p,m]);let v=true;let b=0;let x=0;f.onChange=d.onChange=g.onChange=p.onChange=m.onChange=r;r();i.onChange=()=>{v=i.get();r()};n.onChange=function(){if(n.get()=="Smoothstep")b=1;else if(n.get()=="Smootherstep")b=2;else b=0};function r(){const e=p.get();const t=m.get();const n=d.get();const i=g.get();let r=f.get();if(v){if(r>=Math.max(i,n)){_.set(t);return}else if(r<=Math.min(i,n)){_.set(e);return}}let s=false;const o=Math.min(n,i);const a=Math.max(n,i);if(o!=n)s=true;let l=false;const u=Math.min(e,t);const c=Math.max(e,t);if(u!=e)l=true;let h=0;if(s)h=(a-r)*(c-u)/(a-o);else h=(r-o)*(c-u)/(a-o);if(l)x=c-h;else x=h+u;if(b===0){_.set(x)}else if(b==1){r=Math.max(0,Math.min(1,(x-e)/(t-e)));_.set(e+r*r*(3-2*r)*(t-e))}else if(b==2){r=Math.max(0,Math.min(1,(x-e)/(t-e)));_.set(e+r*r*r*(r*(r*6-15)+10)*(t-e))}}};Ops.Math.MapRange.prototype=new CABLES.Op;CABLES.OPS["2617b407-60a0-4ff6-b4a7-18136cfa7817"]={f:Ops.Math.MapRange,objName:"Ops.Math.MapRange"};Ops.Math.Round=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("number"),i=e.inInt("Decimal Places",0),r=e.outNumber("result");let s=0;n.onChange=a;i.onChange=o;o();function o(){s=Math.pow(10,i.get());a()}function a(){r.set(Math.round(n.get()*s)/s)}};Ops.Math.Round.prototype=new CABLES.Op;CABLES.OPS["1a1ef636-6d02-42ba-ae1e-627b917d0d2b"]={f:Ops.Math.Round,objName:"Ops.Math.Round"};Ops.Devices.Mouse.Mouse_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const G=e.attachments={};const t=e.inSwitch("Coordinates",["-1 to 1","Pixel Display","Pixel","0 to 1"],"-1 to 1"),r=e.inValueSelect("Area",["Canvas","Document","Parent Element","Canvas Area"],"Canvas"),s=e.inValueBool("flip y",true),n=e.inBool("right click prevent default",true),i=e.inValueBool("Touch support",true),o=e.inValueBool("Passive Events",false),a=e.inValueBool("Active",true),l=e.outNumber("x",0),u=e.outNumber("y",0),c=e.outTrigger("click"),h=e.outTrigger("click right"),f=e.outBoolNum("Button is down"),d=e.outBoolNum("Mouse is hovering"),g=e.outNumber("Movement X",0),p=e.outNumber("Movement Y",0);const m=e.patch.cgl;let _=1;let v=null;let b=null;o.onChange=r.onChange=R;t.onChange=D;e.onDelete=P;R();e.on("loadedValueSet",x);function x(){if(_==0){if(b.clientWidth===0)setTimeout(x,50);l.set(b.clientWidth/2);u.set(b.clientHeight/2)}else if(_==1){l.set(0);u.set(0)}else if(_==2){l.set(.5);u.set(.5)}else if(_==3){if(b.clientWidth===0){setTimeout(x,50)}l.set(b.clientWidth/2/m.pixelDensity);u.set(b.clientHeight/2/m.pixelDensity)}else console.error("unknown normalize mouse",_)}function B(r,s){r=r||0;s=s||0;if(_==0){l.set(r);u.set(s)}else if(_==3){l.set(r*m.pixelDensity);u.set(s*m.pixelDensity)}else{let n=b.clientWidth/m.pixelDensity;let i=b.clientHeight/m.pixelDensity;n=n||1;i=i||1;if(_==1){let e=r/n*2-1;let t=s/i*2-1;e=CABLES.clamp(e,-1,1);t=CABLES.clamp(t,-1,1);l.set(e);u.set(t)}else if(_==2){let e=r/n;let t=s/i;e=CABLES.clamp(e,0,1);t=CABLES.clamp(t,0,1);l.set(e);u.set(t)}}}function I(e){const t=b.getBoundingClientRect();return e.clientX>t.left&&e.clientX<t.left+t.width&&e.clientY>t.top&&e.clientY<t.top+t.height}i.onChange=function(){P();R()};a.onChange=function(){if(v)P();if(a.get())R()};function D(){if(t.get()=="Pixel")_=0;else if(t.get()=="-1 to 1")_=1;else if(t.get()=="0 to 1")_=2;else if(t.get()=="Pixel Display")_=3}function A(e){f.set(false);d.set(I(e))}function E(e){if(!I(e))return;f.set(true)}function T(e){f.set(false)}function C(e){if(!I(e))return;h.trigger();if(n.get())e.preventDefault()}function y(e){if(!I(e))return;c.trigger()}function S(e){f.set(false);d.set(I(e))}function L(e){let t=e.clientX;let n=e.clientY;if(r.get()!="Document"){t=e.offsetX;n=e.offsetY}if(r.get()==="Canvas Area"){const i=b.getBoundingClientRect();t=e.clientX-i.left;n=e.clientY-i.top}if(s.get())n=b.clientHeight-n;B(t/m.pixelDensity,n/m.pixelDensity)}function O(e){d.set(I(e));L(e);g.set(e.movementX/m.pixelDensity);p.set(e.movementY/m.pixelDensity)}function N(e){if(event.touches&&event.touches.length>0)L(e.touches[0])}function M(e){f.set(true);if(e.touches&&e.touches.length>0)E(e.touches[0])}function w(e){f.set(false);T()}function P(){if(!v)return;v.removeEventListener("touchend",w);v.removeEventListener("touchstart",M);v.removeEventListener("touchmove",N);v.removeEventListener("click",y);v.removeEventListener("mousemove",O);v.removeEventListener("mouseleave",S);v.removeEventListener("mousedown",E);v.removeEventListener("mouseup",T);v.removeEventListener("mouseenter",A);v.removeEventListener("contextmenu",C);v=null}function R(){if(v||!a.get())P();if(!a.get())return;v=b=m.canvas;if(r.get()=="Canvas Area"){b=m.canvas.parentElement;v=document.body}if(r.get()=="Document")b=v=document.body;if(r.get()=="Parent Element")v=b=m.canvas.parentElement;let e=false;if(o.get())e={passive:true};if(i.get()){v.addEventListener("touchend",w,e);v.addEventListener("touchstart",M,e);v.addEventListener("touchmove",N,e)}v.addEventListener("mousemove",O,e);v.addEventListener("mouseleave",S,e);v.addEventListener("mousedown",E,e);v.addEventListener("mouseup",T,e);v.addEventListener("mouseenter",A,e);v.addEventListener("contextmenu",C,e);v.addEventListener("click",y,e)}};Ops.Devices.Mouse.Mouse_v3.prototype=new CABLES.Op;CABLES.OPS["6d1edbc0-088a-43d7-9156-918fb3d7f24b"]={f:Ops.Devices.Mouse.Mouse_v3,objName:"Ops.Devices.Mouse.Mouse_v3"};Ops.Gl.ImageCompose.RectangleTexture_v5=function(){CABLES.Op.apply(this,arguments);const u=this;const e=u.attachments={rectangle_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\n\n#ifdef HAS_TEXMAP\n    UNI sampler2D texMap;\n    UNI vec2 mapPos;\n    UNI vec2 mapSize;\n#endif\n#ifdef HAS_TEXMASK\n    UNI sampler2D texMask;\n#endif\n\nUNI float width;\nUNI float height;\nUNI float x;\nUNI float y;\nUNI float inner;\n\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\n\nUNI float aspect;\nUNI float amount;\nUNI float rotate;\nUNI float roundness;\n\n#define DEG2RAD 0.785398163397\n\n{{CGL.BLENDMODES3}}\n\nmat2 rot(float angle)\n{\n    float s=sin(angle);\n    float c=cos(angle);\n\n    return mat2(c,-s,s,c);\n}\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n    vec4 col=vec4(r,g,b,a);\n    vec2 p=texCoord;\n\n    float d=1.0;\n\n    vec2 pos=vec2(x,y);\n\n    vec2 size=vec2(width/2.0,height/2.0);\n\n\n    vec2 pp=p-pos;\n    #ifndef CENTER\n        pp-=vec2(size.x,size.y*aspect);\n    #endif\n\n    pp=pp*rot(rotate*DEG2RAD/45.0);\n    vec2 mapTc=((pp/size)+1.0)/2.0;\n\n    #ifdef HAS_TEXMAP\n        vec4 mapCol=vec4(1.0);\n\n        mapTc=clamp(mapTc,0.0,1.0);\n\n        vec2 _mapPos=mapPos;\n        vec2 _mapSize=mapSize;\n\n        #ifdef COORDS_PIXELS\n            _mapPos/=float(textureSize(texMap,0));\n            _mapSize/=float(textureSize(texMap,0));\n        #endif\n\n        mapTc*=_mapSize;\n        mapTc+=_mapPos;\n\n        // if(mapTc.x>0.0 && mapTc.x<1.0 && mapTc.y>0.0 && mapTc.y<1.0)\n        mapCol=texture(texMap,mapTc);\n    #endif\n\n\n    float roundn=roundness*min(size.x,size.y);\n\n    vec2 ssize=max(vec2(size.x,size.y*aspect)-roundn,0.0);\n    vec2 absPos=abs(pp)-ssize;\n\n    d=max(absPos.x,absPos.y);\n    d=min(d,length(max(absPos,0.0))-roundn);\n\n\n    if(inner>0.0)\n    {\n        vec2 absPosInner=abs(pp)-inner*ssize;\n        float dd=max(absPosInner.x,absPosInner.y);\n        d*=min(dd,length(max(absPosInner,0.0))-roundn);\n    }\n\n\n    #ifdef HAS_TEXMAP\n        col*=mapCol;\n    #endif\n\n    d=1.0-step(0.0,d);\n\n    col=cgl_blendPixel(base,col,amount*d);\n\n    #ifdef HAS_TEXMASK\n        col.a*=texture(texMask,texCoord).r;\n    #endif\n\n    outColor=col;\n\n}\n\n\n\n"};const t=u.inTrigger("render"),n=u.inValueSlider("Amount",1),i=CGL.TextureEffect.AddBlendSelect(u),r=CGL.TextureEffect.AddBlendAlphaMask(u),c=u.inSwitch("Coordinates",["0-1","-1-1","Pixel"],"0-1"),s=u.inBool("Center",false),h=u.inFloat("X",0),f=u.inFloat("Y",0),o=u.inFloatSlider("Inner",0),d=u.inFloat("Width",.25),g=u.inFloat("Height",.25),a=u.inValue("Rotate",0),l=u.inValueSlider("roundness",0),p=u.inValueSlider("r",1),m=u.inValueSlider("g",1),_=u.inValueSlider("b",1),v=u.inValueSlider("a",1),b=u.inTexture("Map Texture"),x=u.inFloat("Start X",0),I=u.inFloat("Start Y",0),A=u.inFloat("Map Width",1),E=u.inFloat("Map Height",1),T=u.inTexture("Mask"),C=u.outTrigger("trigger");p.setUiAttribs({colorPick:true});u.setPortGroup("Mapping",[b,E,A,x,I]);u.setPortGroup("Size",[d,g]);u.setPortGroup("Position",[h,f,c,s]);u.setPortGroup("Color",[p,m,_,v]);let y=u.patch.cgl;let S=new CGL.Shader(y,"textureeffect rectangle");S.setSource(S.getDefaultVertexShader(),e.rectangle_frag||"");let L=new CGL.Uniform(S,"t","tex",0),O=new CGL.Uniform(S,"t","texMap",1),G=new CGL.Uniform(S,"t","texMask",2),N=new CGL.Uniform(S,"f","height",.5),M=new CGL.Uniform(S,"f","width",.5),w=new CGL.Uniform(S,"f","x",0),P=new CGL.Uniform(S,"f","y",0),B=new CGL.Uniform(S,"f","inner",o),D=new CGL.Uniform(S,"f","rotate",a),k=new CGL.Uniform(S,"f","roundness",l),U=new CGL.Uniform(S,"f","r",p),V=new CGL.Uniform(S,"f","g",m),F=new CGL.Uniform(S,"f","b",_),z=new CGL.Uniform(S,"f","a",v),j=new CGL.Uniform(S,"2f","mapPos",x,I),H=new CGL.Uniform(S,"2f","mapSize",A,E),X=new CGL.Uniform(S,"f","amount",n),Y=new CGL.Uniform(S,"f","aspect",1);CGL.TextureEffect.setupBlending(u,S,i,n,r);c.onLinkChanged=T.onLinkChanged=b.onLinkChanged=s.onChange=R;R();function R(){S.toggleDefine("CENTER",s.get());S.toggleDefine("HAS_TEXMAP",b.isLinked());S.toggleDefine("HAS_TEXMASK",T.isLinked());S.toggleDefine("COORDS_PIXELS",c.get()=="Pixel")}t.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(u,3))return;let e=h.get();let t=f.get();let n=d.get();let i=g.get();let r=x.get();let s=I.get();let o=A.get();let a=E.get();if(c.get()=="-1-1"){e=e/2+.5;t=t/2+.5;n/=2;i/=2;r=r/2+.5;s=s/2+.5;o/=2;a/=2}if(c.get()=="Pixel"){e/=y.currentTextureEffect.getWidth();t/=y.currentTextureEffect.getHeight();n/=y.currentTextureEffect.getWidth();i/=y.currentTextureEffect.getHeight()}w.set(e);P.set(t);M.set(n);N.set(i);y.pushShader(S);y.currentTextureEffect.bind();const l=y.currentTextureEffect.getCurrentSourceTexture();y.setTexture(0,l.tex);if(b.get())y.setTexture(1,b.get().tex);if(T.get())y.setTexture(2,T.get().tex);y.currentTextureEffect.finish();y.popShader();C.trigger()}};Ops.Gl.ImageCompose.RectangleTexture_v5.prototype=new CABLES.Op;CABLES.OPS["078d420b-a16c-4a0a-8add-89cb1b0af711"]={f:Ops.Gl.ImageCompose.RectangleTexture_v5,objName:"Ops.Gl.ImageCompose.RectangleTexture_v5"};Ops.Gl.ImageCompose.CircleTexture_v4=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={circle_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\n\nUNI float amount;\nUNI float size;\nUNI float inner;\nUNI float fadeOut;\n\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\nUNI float aspect;\nUNI vec2 stretch;\n\n\nUNI float x;\nUNI float y;\n\n{{CGL.BLENDMODES3}}\n\nfloat dist(float x,float y,float x2,float y2)\n{\n\tfloat xd = x2-x;\n\tfloat yd = y2-y;\n\treturn abs(sqrt(xd*xd*(1.0-stretch.x) + yd*yd*(1.0-stretch.y)));\n}\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n\n    vec4 col=vec4(r,g,b,1.0);\n    float dist = dist(x,y/aspect,(texCoord.x-0.5)*2.0,(texCoord.y-0.5)*2.0/aspect);\n\n    float sz=size*0.5/aspect;\n    float v=0.0;\n    float fade=fadeOut;\n\n    if(fade==0.0)\n    {\n        if(dist<sz && dist>inner*sz) v=(smoothstep(0.0,1.0,(dist-(inner*sz))/(fade)));\n    }\n\n    if(fade>=0.0)\n    {\n\n        #ifdef FALLOFF_SMOOTHSTEP\n            if(dist>inner*sz && dist<sz+fade)v=1.0-(smoothstep(0.0,1.0,(dist-sz)/(fade)));\n        #endif\n        #ifndef FALLOFF_SMOOTHSTEP\n            fade+=0.0001;\n            if(dist>inner*sz && dist<sz+fade)v=1.0-((dist-sz)/(fade));\n            v=pow(v,5.0);\n        #endif\n    }\n\n    v=clamp(v,0.0,1.0);\n\n    outColor=cgl_blendPixel(base,col,amount*v);\n\n    outColor.a-=(1.0-a)*v;\n\n    #ifdef WARN_OVERFLOW\n        float width=0.01;\n        if( texCoord.x>(1.0-width) || texCoord.y>(1.0-width) || texCoord.y<width || texCoord.x<width )\n            if(v>0.001*amount)outColor= vec4(1.0,0.0,0.0, 1.0);\n    #endif\n}\n"};const n=e.inTrigger("Render"),i=e.inValueSlider("Amount",1),r=CGL.TextureEffect.AddBlendSelect(e),s=CGL.TextureEffect.AddBlendAlphaMask(e),o=e.inValueSlider("Size",.25),a=e.inValueSlider("Inner"),l=e.inFloat("Stretch X"),u=e.inFloat("Stretch Y"),c=e.inValue("Pos X",0),h=e.inValue("Pos Y",0),f=e.inValueSelect("fallOff",["Linear","SmoothStep"],"Linear"),d=e.inValueSlider("fade Out"),g=e.inValueBool("warn overflow",false),p=e.inValueSlider("r",1),m=e.inValueSlider("g",1),_=e.inValueSlider("b",1),v=e.inValueSlider("a",1),b=e.outTrigger("Next");p.setUiAttribs({colorPick:true});e.setPortGroup("Size",[o,a,l,u]);e.setPortGroup("Position",[c,h]);e.setPortGroup("Style",[g,f,d]);let x=e.patch.cgl;let I=new CGL.Shader(x,"textureeffect stripes");I.setSource(I.getDefaultVertexShader(),t.circle_frag);R();let A=new CGL.Uniform(I,"t","tex",0),E=new CGL.Uniform(I,"f","amount",i),T=new CGL.Uniform(I,"2f","stretch",l,u),C=new CGL.Uniform(I,"f","size",o),y=new CGL.Uniform(I,"f","fadeOut",d),S=new CGL.Uniform(I,"f","inner",a),L=new CGL.Uniform(I,"f","aspect",1),O=new CGL.Uniform(I,"f","r",p),N=new CGL.Uniform(I,"f","g",m),M=new CGL.Uniform(I,"f","b",_),w=new CGL.Uniform(I,"f","a",v),P=new CGL.Uniform(I,"f","x",c),G=new CGL.Uniform(I,"f","y",h);f.onChange=g.onChange=R;CGL.TextureEffect.setupBlending(e,I,r,i,s);function R(){I.toggleDefine("FALLOFF_LINEAR",f.get()=="Linear");I.toggleDefine("FALLOFF_SMOOTHSTEP",f.get()=="SmoothStep");I.toggleDefine("WARN_OVERFLOW",g.get())}n.onTriggered=function(){if(!CGL.TextureEffect.checkOpInEffect(e,3))return;L.set(x.currentTextureEffect.aspectRatio);x.pushShader(I);x.currentTextureEffect.bind();x.setTexture(0,x.currentTextureEffect.getCurrentSourceTexture().tex);x.currentTextureEffect.finish();x.popShader();b.trigger()}};Ops.Gl.ImageCompose.CircleTexture_v4.prototype=new CABLES.Op;CABLES.OPS["9738c421-1ee0-42bf-be0b-f4a481385fbf"]={f:Ops.Gl.ImageCompose.CircleTexture_v4,objName:"Ops.Gl.ImageCompose.CircleTexture_v4"};Ops.Trigger.RouteTriggerMultiPort=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("Execute"),i=e.inValueInt("Switch Value"),r=e.outNumber("Total Connections"),s=e.outMultiPort("Trigger",CABLES.OP_PORT_TYPE_FUNCTION);n.onTriggered=o;function o(){const e=s.get();r.set(e.length);const t=Math.floor(i.get());if(t>=0&&t<e.length){e[t].trigger()}}};Ops.Trigger.RouteTriggerMultiPort.prototype=new CABLES.Op;CABLES.OPS["e9cfc6a0-c764-435c-aa98-c6e8f30729d6"]={f:Ops.Trigger.RouteTriggerMultiPort,objName:"Ops.Trigger.RouteTriggerMultiPort"};Ops.Boolean.BoolToNumber_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inBool("Use Value 1",false),i=e.inFloat("Value 0",0),r=e.inFloat("Value 1",1),s=e.outNumber("Out Value",0);i.onChange=r.onChange=n.onChange=o;function o(){const e=n.get();if(e){s.set(r.get())}else{s.set(i.get())}}};Ops.Boolean.BoolToNumber_v2.prototype=new CABLES.Op;CABLES.OPS["400eea7d-5a68-4dda-a94d-2bb2ee7c2331"]={f:Ops.Boolean.BoolToNumber_v2,objName:"Ops.Boolean.BoolToNumber_v2"};Ops.Boolean.ToggleBool_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("trigger"),i=e.inTriggerButton("reset"),r=e.inBool("Default",false),s=e.outTrigger("Next"),o=e.outBoolNum("result");let a=false;e.onLoadedValueSet=()=>{o.set(r.get());s.trigger()};n.onTriggered=function(){a=!a;o.set(a);s.trigger()};i.onTriggered=function(){a=r.get();o.set(a);s.trigger()}};Ops.Boolean.ToggleBool_v2.prototype=new CABLES.Op;CABLES.OPS["4313d9bb-96b6-43bc-9190-6068cfb2593c"]={f:Ops.Boolean.ToggleBool_v2,objName:"Ops.Boolean.ToggleBool_v2"};window.addEventListener("load",function(e){CABLES.jsLoaded=new Event("CABLES.jsLoaded");document.dispatchEvent(CABLES.jsLoaded)});(()=>{"use strict";var e={};class c{constructor(e){this.initiator=e}stack(e){console.info("["+this.initiator+"] ",e);console.log((new Error).stack)}groupCollapsed(e){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments);console.groupCollapsed("["+this.initiator+"] "+e)}table(e){console.table(e)}groupEnd(){console.groupEnd()}error(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)||!CABLES.logSilent)console.error("["+this.initiator+"]",...arguments)}errorGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)}warn(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:1},...arguments)||!CABLES.logSilent)console.warn("["+this.initiator+"]",...arguments)}verbose(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}info(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.info("["+this.initiator+"]",...arguments)}log(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}logGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)}userInteraction(e){}}const r={};r.float32Concat=function(e,t){if(!(e instanceof Float32Array))e=new Float32Array(e);if(!(t instanceof Float32Array))t=new Float32Array(t);const n=new Float32Array(e.length+t.length);n.set(e);n.set(t,e.length);return n};const B=function(e){let t=e.split(".")[e.split(".").length-1];if(t.contains(CONSTANTS.OP.OP_VERSION_PREFIX)){const n=t.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];t=t.substring(0,t.length-(CONSTANTS.OP.OP_VERSION_PREFIX+n).length)}return t};const D=function(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.seededRandom()*(e+1));const i=t[e];t[e]=t[n];t[n]=i}return t};const t={};const n=function(){let e=Math.random().toString(36).substr(2,9);if(t.hasOwnProperty(e))e=n();t[e]=true;return e};const k=null&&n;const i=function(){let n=(new Date).getTime();const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=(n+Math.random()*16)%16|0;n=Math.floor(n/16);return(e=="x"?t:t&3|8).toString(16)});return e};const U=null&&i;const V=null&&i;function s(e){for(const t in e){if(e[t]&&typeof objValue==="object"&&e[t].constructor===Object)e[t]=s(e[t]);if(e[t]===null||e[t]===undefined)delete e[t];else if(Array.isArray(e[t])&&e[t].length==0)delete e[t]}return e}const o=function(n,e="id"){let i=0;if(Array.prototype.reduce){i=n.split("").reduce((e,t)=>{e=(e<<5)-e+t.charCodeAt(0);return e&e},0)}else{if(n.length>0){for(let t=0;t<n.length;t++){let e=n.charCodeAt(t);i=(i<<5)-i+e;i&=i}}}return e+""+i};const F=null&&o;let a=0;const z=function(){a++;return a};const j=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*(3-2*t);return e};const H=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*t*(t*(t*6-15)+10);return e};const X=function(e,t,n){return Math.min(Math.max(e,t),n)};const Y=function(e,t,n,i,r,s){if(e>=n)return r;if(e<=t)return i;let o=false;const a=Math.min(t,n);const l=Math.max(t,n);if(a!=t)o=true;let u=false;const c=Math.min(i,r);const h=Math.max(i,r);if(c!=i)u=true;let f=0;let d=0;if(o)f=(l-e)*(h-c)/(l-a);else f=(e-a)*(h-c)/(l-a);if(u)d=h-f;else d=f+c;if(!s)return d;if(s==1){e=Math.max(0,Math.min(1,(d-i)/(r-i)));return i+e*e*(3-2*e)*(r-i)}if(s==2){e=Math.max(0,Math.min(1,(d-i)/(r-i)));return i+e*e*e*(e*(e*6-15)+10)*(r-i)}return d};Math.randomSeed=1;Math.setRandomSeed=function(e){Math.randomSeed=e*50728129;if(e!=0){Math.randomSeed=Math.seededRandom()*17624813;Math.randomSeed=Math.seededRandom()*9737333}};Math.seededRandom=function(e,t){if(Math.randomSeed===0)Math.randomSeed=Math.random()*999;e=e||1;t=t||0;Math.randomSeed=(Math.randomSeed*9301+49297)%233280;const n=Math.randomSeed/233280;return t+n*(e-t)};r.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};r.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"};String.prototype.endl=function(){return this+"\n"};String.prototype.startsWith=function(e){return this.indexOf(e)===0};String.prototype.endsWith=String.prototype.endsWith||function(e){return this.match(e+"$")==e};String.prototype.contains=String.prototype.contains||function(e){return this.indexOf(e)>-1};const W=function(e=""){if(!e)return"";if(e.startsWith("data:"))return;if(e.contains("?"))e+="&";else e+="?";return e+"cache="+CABLES.uuid()};const Z=function(t,n){if(!t)return null;n=n||[];n.length=t.length;for(let e=0;e<t.length;e++){n[e]=t[e]}return n};const Q=function(e){let t=CABLES.filename(e);const n=t.split(".");t=n[0];return t};const q=function(){console.log("logstack",(new Error).stack)};const K=function(e){let t="";if(!e)return"";if(e.startsWith("data:")&&e.contains(":")){const n=e.split(",");return n[0]}let n=(e+"").split("/");if(n.length>0){const i=n[n.length-1];let e=i.split("?");t=e[0]}return t||""};const J=function(e,t,n,i,r){u({url:e,cb:t,method:n,data:i,contenttype:r,sync:true})};const $=function(e,t,n,i,r,s,o={},a={}){const l={url:e,cb:t,method:n,data:i,contenttype:r,sync:false,jsonP:s,headers:o};if(a&&a.credentials)l.credentials=a.credentials;u(l)};const u=function(t){if(!t.hasOwnProperty("asynch"))t.asynch=true;let n;try{n=new XMLHttpRequest}catch(e){}n.onreadystatechange=function(){if(n.readyState!=4)return;if(t.cb){if(n.status==200||n.status==0)t.cb(false,n.responseText,n);else t.cb(true,n.responseText,n)}};try{n.open(t.method?t.method.toUpperCase():"GET",t.url,!t.sync)}catch(e){if(t.cb&&e)t.cb(true,e.msg,n)}if(typeof t.headers==="object"){if(t.headers){const i=Object.keys(t.headers);for(let e=0;e<i.length;e++){const r=i[e];const s=t.headers[r];n.setRequestHeader(r,s)}}}if(t.credentials&&t.credentials!=="omit"){n.withCredentials=true}try{if(!t.post&&!t.data){n.send()}else{n.setRequestHeader("Content-type",t.contenttype?t.contenttype:"application/x-www-form-urlencoded");n.send(t.data||t.post)}}catch(e){if(t.cb)t.cb(true,e.msg,n)}};const ee=function(e){if(!e&&e!==0)return"Unidentified";const t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};if(t[e]){return t[e]}else{return String.fromCharCode(e)}};window.performance=window.performance||{offset:Date.now(),now:function e(){return Date.now()-this.offset}};const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";const h=new Uint8Array(256);for(let e=0;e<l.length;e++)h[l.charCodeAt(e)]=e;const f=h;const te=function(e){if(e.buffer)e=e.buffer;let t=new Uint8Array(e),n,i=t.length,r="";for(n=0;n<i;n+=3){r+=l[t[n]>>2];r+=l[(t[n]&3)<<4|t[n+1]>>4];r+=l[(t[n+1]&15)<<2|t[n+2]>>6];r+=l[t[n+2]&63]}if(i%3===2)r=r.substring(0,r.length-1)+"=";else if(i%3===1)r=r.substring(0,r.length-2)+"==";return r};const d=function(e){let t=e.length*.75,n=e.length,i,r=0,s,o,a,l;if(e[e.length-1]==="="){t--;if(e[e.length-2]==="=")t--}let u=new ArrayBuffer(t),c=new Uint8Array(u);for(i=0;i<n;i+=4){s=f[e.charCodeAt(i)];o=f[e.charCodeAt(i+1)];a=f[e.charCodeAt(i+2)];l=f[e.charCodeAt(i+3)];c[r++]=s<<2|o>>4;c[r++]=(o&15)<<4|a>>2;c[r++]=(a&3)<<6|l&63}return u};class g{constructor(e){this._init();this._first=true;this._wireMesh=null;if(e)this.apply(e)}_init(){this._max=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE];this._min=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE];this._center=[0,0,0];this._size=[0,0,0];this._maxAxis=0;this._first=true}get maxAxis(){return this._maxAxis||1}get size(){return this._size}get center(){return this._center}get x(){return this._center[0]}get y(){return this._center[1]}get z(){return this._center[2]}get minX(){return this._min[0]}get minY(){return this._min[1]}get minZ(){return this._min[2]}get maxX(){return this._max[0]}get maxY(){return this._max[1]}get maxZ(){return this._max[2]}apply(t,e){if(!t){return}if(t instanceof g){const n=t;this.applyPos(n.maxX,n.maxY,n.maxZ);this.applyPos(n.minX,n.minY,n.minZ)}else{for(let e=0;e<t.vertices.length;e+=3)this.applyPos(t.vertices[e],t.vertices[e+1],t.vertices[e+2])}this.calcCenterSize()}copy(){return new g(this)}get changed(){return!(this._max[0]==-Number.MAX_VALUE&&this._max[1]==-Number.MAX_VALUE&&this._max[2]==-Number.MAX_VALUE)}applyPos(e,t,n){if(e==Number.MAX_VALUE||e==-Number.MAX_VALUE||t==Number.MAX_VALUE||t==-Number.MAX_VALUE||n==Number.MAX_VALUE||n==-Number.MAX_VALUE)return;if(!CABLES.UTILS.isNumeric(e)||!CABLES.UTILS.isNumeric(t)||!CABLES.UTILS.isNumeric(n))return;if(this._first){this._max[0]=e;this._max[1]=t;this._max[2]=n;this._min[0]=e;this._min[1]=t;this._min[2]=n;this._first=false;return}this._max[0]=Math.max(this._max[0],e);this._max[1]=Math.max(this._max[1],t);this._max[2]=Math.max(this._max[2],n);this._min[0]=Math.min(this._min[0],e);this._min[1]=Math.min(this._min[1],t);this._min[2]=Math.min(this._min[2],n)}calcCenterSize(){if(this._first)return;this._size[0]=this._max[0]-this._min[0];this._size[1]=this._max[1]-this._min[1];this._size[2]=this._max[2]-this._min[2];this._center[0]=(this._min[0]+this._max[0])/2;this._center[1]=(this._min[1]+this._max[1])/2;this._center[2]=(this._min[2]+this._max[2])/2;this._maxAxis=Math.max(this._size[2],Math.max(this._size[0],this._size[1]))}mulMat4(e){if(this._first){this._max[0]=0;this._max[1]=0;this._max[2]=0;this._min[0]=0;this._min[1]=0;this._min[2]=0;this._first=false}vec3.transformMat4(this._max,this._max,e);vec3.transformMat4(this._min,this._min,e);this.calcCenterSize()}render(e,t,n){if(!this._wireMesh)this._wireMesh=new CGL.WireCube(e);e.pushModelMatrix();mat4.translate(e.mMatrix,e.mMatrix,this._center);if(CABLES.UI&&n){CABLES.UI.OverlayMeshes.drawCube(n,this._size[0]/2,this._size[1]/2,this._size[2]/2)}e.popModelMatrix()}}const p=function(e){this.name=e||"unknown";this._log=new c("cgl_geometry");this.faceVertCount=3;this.glPrimitive=null;this._attributes={};this._vertices=[];this.verticesIndices=[];this.isGeometry=true;this.morphTargets=[];Object.defineProperty(this,"vertices",{get(){return this._vertices},set(e){this.setVertices(e)}});Object.defineProperty(this,"texCoords",{get(){const e=this.getAttribute("texCoords");if(!e)return[];return e.data},set(e){this.setAttribute("texCoords",e,2)}});Object.defineProperty(this,"vertexNormals",{get(){const e=this.getAttribute("vertexNormals");if(!e)return[];return e.data},set(e){this.setAttribute("vertexNormals",e,3)}});Object.defineProperty(this,"tangents",{get(){const e=this.getAttribute("tangents");if(!e)return[];return e.data},set(e){this.setAttribute("tangents",e,3)}});Object.defineProperty(this,"biTangents",{get(){const e=this.getAttribute("biTangents");if(!e)return[];return e.data},set(e){this.setAttribute("biTangents",e,3)}});Object.defineProperty(this,"vertexColors",{get(){const e=this.getAttribute("vertexColors");if(!e)return[];return e.data},set(e){this.setAttribute("vertexColors",e,4)}})};p.prototype.clear=function(){this._vertices=new Float32Array([]);this.verticesIndices=[];this.texCoords=new Float32Array([]);this.vertexNormals=new Float32Array([]);this.tangents=[];this.biTangents=[];this._attributes={}};p.prototype.getAttributes=function(){return this._attributes};p.prototype.getAttribute=function(e){for(const t in this._attributes){if(this._attributes[t].name==e)return this._attributes[t]}return null};p.prototype.setAttribute=function(e,t,n){let i="";if(!n||n>4){console.log("itemsize wrong?",n,e);this._log.stack("itemsize");n=3}if(n==1)i="float";else if(n==2)i="vec2";else if(n==3)i="vec3";else if(n==4)i="vec4";const r={name:e,data:t,itemSize:n,type:i};this._attributes[e]=r};p.prototype.copyAttribute=function(e,t){const n=this.getAttribute(e);t.setAttribute(e,new Float32Array(n.data),n.itemSize)};p.prototype.setVertices=function(e){if(e instanceof Float32Array)this._vertices=e;else this._vertices=new Float32Array(e)};p.prototype.setTexCoords=function(e){if(e instanceof Float32Array)this.texCoords=e;else this.texCoords=new Float32Array(e)};p.prototype.calcNormals=function(e){const t={smooth:e};this.calculateNormals(t)};p.prototype.flipNormals=function(t,n,i){let r=vec3.create();if(t==undefined)t=1;if(n==undefined)n=1;if(i==undefined)i=1;for(let e=0;e<this.vertexNormals.length;e+=3){vec3.set(r,this.vertexNormals[e+0],this.vertexNormals[e+1],this.vertexNormals[e+2]);r[0]*=-t;r[1]*=-n;r[2]*=-i;vec3.normalize(r,r);this.vertexNormals[e+0]=r[0];this.vertexNormals[e+1]=r[1];this.vertexNormals[e+2]=r[2]}};p.prototype.getNumTriangles=function(){if(this.verticesIndices&&this.verticesIndices.length)return this.verticesIndices.length/3;return this.vertices.length/3};p.prototype.flipVertDir=function(){const t=[];t.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e+=3){t[e]=this.verticesIndices[e+2];t[e+1]=this.verticesIndices[e+1];t[e+2]=this.verticesIndices[e]}this.verticesIndices=t};p.prototype.setPointVertices=function(t){if(t.length%3!==0){this._log.error("SetPointVertices: Array must be multiple of three.");return}if(!(t instanceof Float32Array))this.vertices=new Float32Array(t);else this.vertices=t;if(!(this.texCoords instanceof Float32Array))this.texCoords=new Float32Array(t.length/3*2);this.verticesIndices.length=t.length/3;for(let e=0;e<t.length/3;e++){this.verticesIndices[e]=e;this.texCoords[e*2]=0;this.texCoords[e*2+1]=0}};p.prototype.merge=function(t){if(!t)return;if(this.isIndexed()!=t.isIndexed()){if(this.isIndexed()){this.unIndex(false,true)}if(t.isIndexed()){const e=t.copy();e.unIndex(false,true);t=e}}const n=this.verticesIndices.length;const i=this._vertices.length/3;this.verticesIndices.length+=t.verticesIndices.length;for(let e=0;e<t.verticesIndices.length;e++)this.verticesIndices[n+e]=t.verticesIndices[e]+i;this.vertices=r.float32Concat(this._vertices,t.vertices);this.texCoords=r.float32Concat(this.texCoords,t.texCoords);this.vertexNormals=r.float32Concat(this.vertexNormals,t.vertexNormals);this.tangents=r.float32Concat(this.tangents,t.tangents);this.biTangents=r.float32Concat(this.biTangents,t.biTangents)};p.prototype.copy=function(){const t=new p(this.name+" copy");t.faceVertCount=this.faceVertCount;t.glPrimitive=this.glPrimitive;t.setVertices(this._vertices.slice(0));if(this.verticesIndices){t.verticesIndices.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e++)t.verticesIndices[e]=this.verticesIndices[e]}for(let e in this._attributes)this.copyAttribute(e,t);t.morphTargets.length=this.morphTargets.length;for(let e=0;e<this.morphTargets.length;e++)t.morphTargets[e]=this.morphTargets[e];return t};p.prototype.calculateNormals=function(t){t=t||{};if(t.smooth===false)this.unIndex();const n=vec3.create();const i=vec3.create();const r=vec3.create();function s(e){vec3.subtract(n,e[0],e[1]);vec3.subtract(i,e[0],e[2]);vec3.cross(r,n,i);vec3.normalize(r,r);if(t&&t.forceZUp){if(r[2]<0){r[0]*=-1;r[1]*=-1;r[2]*=-1}}return r}this.getVertexVec=function(e){const t=[0,0,0];t[0]=this.vertices[e*3+0];t[1]=this.vertices[e*3+1];t[2]=this.vertices[e*3+2];return t};if(!(this.vertexNormals instanceof Float32Array)||this.vertexNormals.length!=this.vertices.length)this.vertexNormals=new Float32Array(this.vertices.length);for(let e=0;e<this.vertices.length;e++){this.vertexNormals[e]=0}if(!this.isIndexed()){const o=[];for(let e=0;e<this.vertices.length;e+=9){const a=[[this.vertices[e+0],this.vertices[e+1],this.vertices[e+2]],[this.vertices[e+3],this.vertices[e+4],this.vertices[e+5]],[this.vertices[e+6],this.vertices[e+7],this.vertices[e+8]]];const l=s(a);o.push(l[0],l[1],l[2],l[0],l[1],l[2],l[0],l[1],l[2])}this.vertexNormals=o}else{const u=[];u.length=Math.floor(this.verticesIndices.length/3);for(let e=0;e<this.verticesIndices.length;e+=3){const a=[this.getVertexVec(this.verticesIndices[e+0]),this.getVertexVec(this.verticesIndices[e+1]),this.getVertexVec(this.verticesIndices[e+2])];u[e/3]=s(a);this.vertexNormals[this.verticesIndices[e+0]*3+0]+=u[e/3][0];this.vertexNormals[this.verticesIndices[e+0]*3+1]+=u[e/3][1];this.vertexNormals[this.verticesIndices[e+0]*3+2]+=u[e/3][2];this.vertexNormals[this.verticesIndices[e+1]*3+0]+=u[e/3][0];this.vertexNormals[this.verticesIndices[e+1]*3+1]+=u[e/3][1];this.vertexNormals[this.verticesIndices[e+1]*3+2]+=u[e/3][2];this.vertexNormals[this.verticesIndices[e+2]*3+0]+=u[e/3][0];this.vertexNormals[this.verticesIndices[e+2]*3+1]+=u[e/3][1];this.vertexNormals[this.verticesIndices[e+2]*3+2]+=u[e/3][2]}for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){const c=[this.vertexNormals[this.verticesIndices[t+e]*3+0],this.vertexNormals[this.verticesIndices[t+e]*3+1],this.vertexNormals[this.verticesIndices[t+e]*3+2]];vec3.normalize(c,c);this.vertexNormals[this.verticesIndices[t+e]*3+0]=c[0];this.vertexNormals[this.verticesIndices[t+e]*3+1]=c[1];this.vertexNormals[this.verticesIndices[t+e]*3+2]=c[2]}}}};p.prototype.calcTangentsBitangents=function(){if(!this.vertices.length){return}if(!this.vertexNormals.length){return}if(!this.texCoords.length){const x=this.vertices.length/3*2;this.texCoords=new Float32Array(x);for(let e=0;e<x;e+=1)this.texCoords[e]=0}if(!this.verticesIndices||!this.verticesIndices.length){return}if(this.verticesIndices.length%3!==0){this._log.error("Vertex indices mismatch!");return}const t=this.verticesIndices.length/3;const n=this.vertices.length/3;this.tangents=new Float32Array(this.vertexNormals.length);this.biTangents=new Float32Array(this.vertexNormals.length);const i=[];i.length=n*2;const r=vec3.create();const s=vec3.create();const o=vec3.create();const a=vec2.create();const l=vec2.create();const u=vec2.create();const c=vec3.create();const h=vec3.create();for(let e=0;e<t;e+=1){const I=this.verticesIndices[e*3];const A=this.verticesIndices[e*3+1];const E=this.verticesIndices[e*3+2];vec3.set(r,this.vertices[I*3],this.vertices[I*3+1],this.vertices[I*3+2]);vec3.set(s,this.vertices[A*3],this.vertices[A*3+1],this.vertices[A*3+2]);vec3.set(o,this.vertices[E*3],this.vertices[E*3+1],this.vertices[E*3+2]);vec2.set(a,this.texCoords[I*2],this.texCoords[I*2+1]);vec2.set(l,this.texCoords[A*2],this.texCoords[A*2+1]);vec2.set(u,this.texCoords[E*2],this.texCoords[E*2+1]);const T=s[0]-r[0];const C=o[0]-r[0];const y=s[1]-r[1];const S=o[1]-r[1];const L=s[2]-r[2];const O=o[2]-r[2];const N=l[0]-a[0];const M=u[0]-a[0];const w=l[1]-a[1];const P=u[1]-a[1];const R=1/(N*P-M*w);vec3.set(c,(P*T-w*C)*R,(P*y-w*S)*R,(P*L-w*O)*R);vec3.set(h,(N*C-M*T)*R,(N*S-M*y)*R,(N*O-M*L)*R);i[I]=c;i[A]=c;i[E]=c;i[I+n]=h;i[A+n]=h;i[E+n]=h}const f=vec3.create();const d=vec3.create();const g=vec3.create();const p=vec3.create();const m=vec3.create();const _=vec3.create();const v=vec3.create();const b=vec3.create();for(let e=0;e<n;e+=1){if(!i[e])continue;vec3.set(f,this.vertexNormals[e*3],this.vertexNormals[e*3+1],this.vertexNormals[e*3+2]);vec3.set(d,i[e][0],i[e][1],i[e][2]);const G=vec3.dot(f,d);vec3.scale(m,f,G);vec3.subtract(_,d,m);vec3.normalize(b,_);vec3.cross(v,f,d);const B=1;vec3.scale(g,b,1/B);vec3.cross(p,f,g);this.tangents[e*3+0]=g[0];this.tangents[e*3+1]=g[1];this.tangents[e*3+2]=g[2];this.biTangents[e*3+0]=p[0];this.biTangents[e*3+1]=p[1];this.biTangents[e*3+2]=p[2]}};p.prototype.isIndexed=function(){if(this._vertices.length==0)return true;return this.verticesIndices.length!=0};p.prototype.unIndex=function(e,t){const n=[];const i=[];let r=0;for(let e in this._attributes){const s=this._attributes[e];let n=[];for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){if(s.itemSize==3)n.push(s.data[this.verticesIndices[t+e]*3+0],s.data[this.verticesIndices[t+e]*3+1],s.data[this.verticesIndices[t+e]*3+2]);else if(s.itemSize==4)n.push(s.data[this.verticesIndices[t+e]*4+0],s.data[this.verticesIndices[t+e]*4+1],s.data[this.verticesIndices[t+e]*4+2],s.data[this.verticesIndices[t+e]*4+3]);else if(s.itemSize==2)n.push(s.data[this.verticesIndices[t+e]*2+0],s.data[this.verticesIndices[t+e]*2+1]);else if(s.itemSize==1)n.push(s.data[this.verticesIndices[t+e]]);else console.log("unknown attr",s)}}this.setAttribute(s.name,n,s.itemSize)}for(let e=0;e<this.verticesIndices.length;e+=3){n.push(this.vertices[this.verticesIndices[e+0]*3+0],this.vertices[this.verticesIndices[e+0]*3+1],this.vertices[this.verticesIndices[e+0]*3+2]);i.push(r);r++;n.push(this.vertices[this.verticesIndices[e+1]*3+0],this.vertices[this.verticesIndices[e+1]*3+1],this.vertices[this.verticesIndices[e+1]*3+2]);i.push(r);r++;n.push(this.vertices[this.verticesIndices[e+2]*3+0],this.vertices[this.verticesIndices[e+2]*3+1],this.vertices[this.verticesIndices[e+2]*3+2]);i.push(r);r++}this.vertices=n;this.verticesIndices=[];if(e)this.verticesIndices=i;if(!t)this.calculateNormals()};p.prototype.calcBarycentric=function(){let t=[];t.length=this.vertices.length;for(let e=0;e<this.vertices.length;e++)t[e]=0;let n=0;for(let e=0;e<this.vertices.length;e+=3){t[e+n]=1;n++;if(n==3)n=0}this.setAttribute("attrBarycentric",t,3)};p.prototype.getBounds=function(){return new g(this)};p.prototype.center=function(e,t,n){if(e===undefined){e=true;t=true;n=true}let i=0;const r=this.getBounds();const s=[r.minX+(r.maxX-r.minX)/2,r.minY+(r.maxY-r.minY)/2,r.minZ+(r.maxZ-r.minZ)/2];for(i=0;i<this.vertices.length;i+=3){if(this.vertices[i+0]==this.vertices[i+0]){if(e)this.vertices[i+0]-=s[0];if(t)this.vertices[i+1]-=s[1];if(n)this.vertices[i+2]-=s[2]}}return s};p.prototype.mapTexCoords2d=function(){const t=this.getBounds();const n=this.vertices.length/3;this.texCoords=new Float32Array(n*2);for(let e=0;e<n;e++){const i=this.vertices[e*3+0];const r=this.vertices[e*3+1];this.texCoords[e*2+0]=i/(t.maxX-t.minX)+.5;this.texCoords[e*2+1]=1-r/(t.maxY-t.minY)+.5}};p.prototype.getInfoOneLine=function(){let e="";if(this.faceVertCount==3&&this.verticesIndices)e+=this.verticesIndices.length/3;else e+=0;e+=" tris ";if(this.vertices)e+=this.vertices.length/3;else e+=0;e+=" verts";return e};p.prototype.getInfo=function(){const e={};if(this.faceVertCount==3&&this.verticesIndices)e.numFaces=this.verticesIndices.length/3;else e.numFaces=0;if(this.verticesIndices&&this.verticesIndices.length)e.indices=this.verticesIndices.length;if(this.vertices)e.numVerts=this.vertices.length/3;else e.numVerts=0;if(this.vertexNormals)e.numNormals=this.vertexNormals.length/3;else e.numNormals=0;if(this.texCoords)e.numTexCoords=this.texCoords.length/2;else e.numTexCoords=0;if(this.tangents)e.numTangents=this.tangents.length/3;else e.numTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.vertexColors)e.numVertexColors=this.vertexColors.length/4;else e.numVertexColors=0;if(this.getAttributes())e.numAttribs=Object.keys(this.getAttributes()).length;else e.numAttribs=0;e.isIndexed=this.isIndexed();return e};p.buildFromFaces=function(t,e,n){const i=[];const r=[];for(let e=0;e<t.length;e+=3){const o=t[e+0];const a=t[e+1];const l=t[e+2];const u=[-1,-1,-1];if(n)for(let e=0;e<i.length;e+=3){if(i[e+0]==o[0]&&i[e+1]==o[1]&&i[e+2]==o[2])u[0]=e/3;if(i[e+0]==a[0]&&i[e+1]==a[1]&&i[e+2]==a[2])u[1]=e/3;if(i[e+0]==l[0]&&i[e+1]==l[1]&&i[e+2]==l[2])u[2]=e/3}if(u[0]==-1){i.push(o[0],o[1],o[2]);u[0]=(i.length-1)/3}if(u[1]==-1){i.push(a[0],a[1],a[2]);u[1]=(i.length-1)/3}if(u[2]==-1){i.push(l[0],l[1],l[2]);u[2]=(i.length-1)/3}r.push(parseInt(u[0],10));r.push(parseInt(u[1],10));r.push(parseInt(u[2],10))}const s=new p(e);s.name=e;s.vertices=i;s.verticesIndices=r;return s};p.json2geom=function(t){const n=new p("jsonMeshGeom");n.verticesIndices=[];n.vertices=t.vertices||[];n.vertexNormals=t.normals||[];n.vertexColors=t.colors||[];n.tangents=t.tangents||[];n.biTangents=t.bitangents||[];if(t.texturecoords)n.setTexCoords(t.texturecoords[0]);if(t.vertices_b64)n.vertices=new Float32Array(d(t.vertices_b64));if(t.normals_b64)n.vertexNormals=new Float32Array(d(t.normals_b64));if(t.tangents_b64)n.tangents=new Float32Array(d(t.tangents_b64));if(t.bitangents_b64)n.biTangents=new Float32Array(d(t.bitangents_b64));if(t.texturecoords_b64)n.setTexCoords(new Float32Array(d(t.texturecoords_b64[0])));if(t.faces_b64){n.verticesIndices=new Uint32Array(d(t.faces_b64))}else{n.verticesIndices.length=t.faces.length*3;for(let e=0;e<t.faces.length;e++){n.verticesIndices[e*3]=t.faces[e][0];n.verticesIndices[e*3+1]=t.faces[e][1];n.verticesIndices[e*3+2]=t.faces[e][2]}}return n};const m=function(){this._log=new c("eventtarget");this._eventCallbacks={};this._logName="";this._logEvents=false;this._listeners={};this.addEventListener=this.on=function(e,t,n){const i={id:(n||"")+CABLES.simpleId(),name:e,cb:t};if(!this._eventCallbacks[e])this._eventCallbacks[e]=[i];else this._eventCallbacks[e].push(i);this._listeners[i.id]=i;return i.id};this.hasEventListener=function(e,t){if(e&&!t){if(this._listeners[e])return true;else return false}else{this._log.warn("old eventtarget function haseventlistener!");if(e&&t){if(this._eventCallbacks[e]){const n=this._eventCallbacks[e].indexOf(t);if(n==-1)return false;return true}}}};this.hasListenerForEventName=function(e){return this._eventCallbacks[e]&&this._eventCallbacks[e].length>0};this.removeEventListener=this.off=function(i,t){if(i===null||i===undefined)return;if(!t){const r=this._listeners[i];if(!r){this._log.log("could not find event...");return}let n=true;while(n){n=false;let t=-1;for(let e=0;e<this._eventCallbacks[r.name].length;e++){if(this._eventCallbacks[r.name][e].id.startsWith(i)){n=true;t=e}}if(t!==-1){this._eventCallbacks[r.name].splice(t,1);delete this._listeners[i]}}return}this._log.info("[eventtaget] ","old function signature: removeEventListener! use listener id");this._log.log((new Error).stack);let n=null;for(let e=0;e<this._eventCallbacks[i].length;e++)if(this._eventCallbacks[i][e].cb==t)n=e;if(n!==null){delete this._eventCallbacks[n]}else this._log.warn("removeEventListener not found "+i)};this.logEvents=function(e,t){this._logEvents=e;this._logName=t};this.emitEvent=function(t,n,i,r,s,o,a){if(this._logEvents)this._log.log("[event] ",this._logName,t,this._eventCallbacks);if(this._eventCallbacks[t]){for(let e=0;e<this._eventCallbacks[t].length;e++){if(this._eventCallbacks[t][e]){this._eventCallbacks[t][e].cb(n,i,r,s,o,a)}}}else{if(this._logEvents)this._log.log("[event] has no event callback",t,this._eventCallbacks)}}};const _={ANIM:{EASINGS:["linear","absolute","smoothstep","smootherstep","Cubic In","Cubic Out","Cubic In Out","Expo In","Expo Out","Expo In Out","Sin In","Sin Out","Sin In Out","Quart In","Quart Out","Quart In Out","Quint In","Quint Out","Quint In Out","Back In","Back Out","Back In Out","Elastic In","Elastic Out","Bounce In","Bounce Out"],EASING_LINEAR:0,EASING_ABSOLUTE:1,EASING_SMOOTHSTEP:2,EASING_SMOOTHERSTEP:3,EASING_CUBICSPLINE:4,EASING_CUBIC_IN:5,EASING_CUBIC_OUT:6,EASING_CUBIC_INOUT:7,EASING_EXPO_IN:8,EASING_EXPO_OUT:9,EASING_EXPO_INOUT:10,EASING_SIN_IN:11,EASING_SIN_OUT:12,EASING_SIN_INOUT:13,EASING_BACK_IN:14,EASING_BACK_OUT:15,EASING_BACK_INOUT:16,EASING_ELASTIC_IN:17,EASING_ELASTIC_OUT:18,EASING_BOUNCE_IN:19,EASING_BOUNCE_OUT:21,EASING_QUART_IN:22,EASING_QUART_OUT:23,EASING_QUART_INOUT:24,EASING_QUINT_IN:25,EASING_QUINT_OUT:26,EASING_QUINT_INOUT:27},OP:{OP_PORT_TYPE_VALUE:0,OP_PORT_TYPE_NUMBER:0,OP_PORT_TYPE_FUNCTION:1,OP_PORT_TYPE_TRIGGER:1,OP_PORT_TYPE_OBJECT:2,OP_PORT_TYPE_TEXTURE:2,OP_PORT_TYPE_ARRAY:3,OP_PORT_TYPE_DYNAMIC:4,OP_PORT_TYPE_STRING:5,OP_VERSION_PREFIX:"_v"},PORT:{PORT_DIR_IN:0,PORT_DIR_OUT:1},PACO:{PACO_CLEAR:0,PACO_VALUECHANGE:1,PACO_OP_DELETE:2,PACO_UNLINK:3,PACO_LINK:4,PACO_LOAD:5,PACO_OP_CREATE:6,PACO_OP_ENABLE:7,PACO_OP_DISABLE:8,PACO_UIATTRIBS:9,PACO_VARIABLES:10,PACO_TRIGGERS:11,PACO_PORT_SETVARIABLE:12,PACO_PORT_SETANIMATED:13,PACO_PORT_ANIM_UPDATED:14,PACO_DESERIALIZE:15}};const v=function(e){this.time=0;this.value=0;this.onChange=null;this._easing=0;this.cb=null;this.cbTriggered=false;this.setEasing(_.ANIM.EASING_LINEAR);this.set(e)};v.cubicSpline=function(e,t,n){let i=t.value,r=t.bezTangOut,s=n.value,o=n.bezTangIn;let a=e;let l=a*a;let u=l*a;return(2*u-3*l+1)*i+(u-2*l+a)*r+(-2*u+3*l)*s+(u-l)*o};v.easeCubicSpline=function(e,t){return v.cubicSpline(e,this,t)};v.linear=function(e,t,n){return parseFloat(t.value)+parseFloat(n.value-t.value)*e};v.easeLinear=function(e,t){return v.linear(e,this,t)};v.easeAbsolute=function(e,t){return this.value};const b=function(e){return e=2**(10*(e-1))};v.easeExpoIn=function(e,t){e=b(e);return v.linear(e,this,t)};const x=function(e){e=-(2**(-10*e))+1;return e};v.easeExpoOut=function(e,t){e=x(e);return v.linear(e,this,t)};const I=function(e){e*=2;if(e<1){e=.5*2**(10*(e-1))}else{e--;e=.5*(-(2**(-10*e))+2)}return e};v.easeExpoInOut=function(e,t){e=I(e);return v.linear(e,this,t)};v.easeSinIn=function(e,t){e=-1*Math.cos(e*Math.PI/2)+1;return v.linear(e,this,t)};v.easeSinOut=function(e,t){e=Math.sin(e*Math.PI/2);return v.linear(e,this,t)};v.easeSinInOut=function(e,t){e=-.5*(Math.cos(Math.PI*e)-1);return v.linear(e,this,t)};const A=function(e){e=e*e*e;return e};v.easeCubicIn=function(e,t){e=A(e);return v.linear(e,this,t)};v.easeInQuint=function(e,t){e=e*e*e*e*e;return v.linear(e,this,t)};v.easeOutQuint=function(e,t){e=(e-=1)*e*e*e*e+1;return v.linear(e,this,t)};v.easeInOutQuint=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e*e;else e=.5*((e-=2)*e*e*e*e+2);return v.linear(e,this,t)};v.easeInQuart=function(e,t){e=e*e*e*e;return v.linear(e,this,t)};v.easeOutQuart=function(e,t){e=-1*((e-=1)*e*e*e-1);return v.linear(e,this,t)};v.easeInOutQuart=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e;else e=-.5*((e-=2)*e*e*e-2);return v.linear(e,this,t)};v.bounce=function(e){if((e/=1)<1/2.75)e=7.5625*e*e;else if(e<2/2.75)e=7.5625*(e-=1.5/2.75)*e+.75;else if(e<2.5/2.75)e=7.5625*(e-=2.25/2.75)*e+.9375;else e=7.5625*(e-=2.625/2.75)*e+.984375;return e};v.easeInBounce=function(e,t){return v.linear(v.bounce(e),this,t)};v.easeOutBounce=function(e,t){return v.linear(v.bounce(e),this,t)};v.easeInElastic=function(e,t){let n=1.70158;let i=0;let r=1;const s=0;const o=1;const a=1;if(e===0)e=s;else if((e/=o)==1)e=s+a;else{if(!i)i=o*.3;if(r<Math.abs(a)){r=a;n=i/4}else n=i/(2*Math.PI)*Math.asin(a/r);e=-(r*2**(10*(e-=1))*Math.sin((e*o-n)*(2*Math.PI)/i))+s}return v.linear(e,this,t)};v.easeOutElastic=function(e,t){let n=1.70158;let i=0;let r=1;const s=0;const o=1;const a=1;if(e===0)e=s;else if((e/=o)==1)e=s+a;else{if(!i)i=o*.3;if(r<Math.abs(a)){r=a;n=i/4}else n=i/(2*Math.PI)*Math.asin(a/r);e=r*2**(-10*e)*Math.sin((e*o-n)*(2*Math.PI)/i)+a+s}return v.linear(e,this,t)};v.easeInBack=function(e,t){const n=1.70158;e=e*e*((n+1)*e-n);return v.linear(e,this,t)};v.easeOutBack=function(e,t){const n=1.70158;e=(e=e/1-1)*e*((n+1)*e+n)+1;return v.linear(e,this,t)};v.easeInOutBack=function(e,t){let n=1.70158;const i=1/2;if((e/=1/2)<1)e=i*(e*e*(((n*=1.525)+1)*e-n));else e=i*((e-=2)*e*(((n*=1.525)+1)*e+n)+2);return v.linear(e,this,t)};const E=function(e){e--;e=e*e*e+1;return e};v.easeCubicOut=function(e,t){e=E(e);return v.linear(e,this,t)};const T=function(e){e*=2;if(e<1)e=.5*e*e*e;else{e-=2;e=.5*(e*e*e+2)}return e};v.easeCubicInOut=function(e,t){e=T(e);return v.linear(e,this,t)};v.easeSmoothStep=function(e,t){const n=Math.max(0,Math.min(1,e));e=n*n*(3-2*n);return v.linear(e,this,t)};v.easeSmootherStep=function(e,t){const n=Math.max(0,Math.min(1,(e-0)/(1-0)));e=n*n*n*(n*(n*6-15)+10);return v.linear(e,this,t)};v.prototype.setEasing=function(e){this._easing=e;if(this._easing==_.ANIM.EASING_LINEAR)this.ease=v.easeLinear;else if(this._easing==_.ANIM.EASING_ABSOLUTE)this.ease=v.easeAbsolute;else if(this._easing==_.ANIM.EASING_SMOOTHSTEP)this.ease=v.easeSmoothStep;else if(this._easing==_.ANIM.EASING_SMOOTHERSTEP)this.ease=v.easeSmootherStep;else if(this._easing==_.ANIM.EASING_CUBIC_IN)this.ease=v.easeCubicIn;else if(this._easing==_.ANIM.EASING_CUBIC_OUT)this.ease=v.easeCubicOut;else if(this._easing==_.ANIM.EASING_CUBIC_INOUT)this.ease=v.easeCubicInOut;else if(this._easing==_.ANIM.EASING_EXPO_IN)this.ease=v.easeExpoIn;else if(this._easing==_.ANIM.EASING_EXPO_OUT)this.ease=v.easeExpoOut;else if(this._easing==_.ANIM.EASING_EXPO_INOUT)this.ease=v.easeExpoInOut;else if(this._easing==_.ANIM.EASING_SIN_IN)this.ease=v.easeSinIn;else if(this._easing==_.ANIM.EASING_SIN_OUT)this.ease=v.easeSinOut;else if(this._easing==_.ANIM.EASING_SIN_INOUT)this.ease=v.easeSinInOut;else if(this._easing==_.ANIM.EASING_BACK_OUT)this.ease=v.easeOutBack;else if(this._easing==_.ANIM.EASING_BACK_IN)this.ease=v.easeInBack;else if(this._easing==_.ANIM.EASING_BACK_INOUT)this.ease=v.easeInOutBack;else if(this._easing==_.ANIM.EASING_ELASTIC_IN)this.ease=v.easeInElastic;else if(this._easing==_.ANIM.EASING_ELASTIC_OUT)this.ease=v.easeOutElastic;else if(this._easing==_.ANIM.EASING_ELASTIC_INOUT)this.ease=v.easeElasticInOut;else if(this._easing==_.ANIM.EASING_BOUNCE_IN)this.ease=v.easeInBounce;else if(this._easing==_.ANIM.EASING_BOUNCE_OUT)this.ease=v.easeOutBounce;else if(this._easing==_.ANIM.EASING_QUART_OUT)this.ease=v.easeOutQuart;else if(this._easing==_.ANIM.EASING_QUART_IN)this.ease=v.easeInQuart;else if(this._easing==_.ANIM.EASING_QUART_INOUT)this.ease=v.easeInOutQuart;else if(this._easing==_.ANIM.EASING_QUINT_OUT)this.ease=v.easeOutQuint;else if(this._easing==_.ANIM.EASING_QUINT_IN)this.ease=v.easeInQuint;else if(this._easing==_.ANIM.EASING_QUINT_INOUT)this.ease=v.easeInOutQuint;else if(this._easing==_.ANIM.EASING_CUBICSPLINE){this.ease=v.easeCubicSpline}else{this._easing=_.ANIM.EASING_LINEAR;this.ease=v.easeLinear}};v.prototype.trigger=function(){this.cb();this.cbTriggered=true};v.prototype.setValue=function(e){this.value=e;if(this.onChange!==null)this.onChange()};v.prototype.set=function(e){if(e){if(e.e)this.setEasing(e.e);if(e.cb){this.cb=e.cb;this.cbTriggered=false}if(e.b){}if(e.hasOwnProperty("t"))this.time=e.t;if(e.hasOwnProperty("time"))this.time=e.time;if(e.hasOwnProperty("v"))this.value=e.v;else if(e.hasOwnProperty("value"))this.value=e.value}if(this.onChange!==null)this.onChange()};v.prototype.getSerialized=function(){const e={};e.t=this.time;e.v=this.value;e.e=this._easing;return e};v.prototype.getEasing=function(){return this._easing};const C=function(e){m.apply(this);e=e||{};this.keys=[];this.onChange=null;this.stayInTimeline=false;this.loop=false;this._log=new c("Anim");this._lastKeyIndex=0;this._cachedIndex=0;this.name=e.name||null;this.defaultEasing=e.defaultEasing||_.ANIM.EASING_LINEAR;this.onLooped=null;this._timesLooped=0;this._needsSort=false};C.prototype.forceChangeCallback=function(){if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};C.prototype.getLoop=function(){return this.loop};C.prototype.setLoop=function(e){this.loop=e;this.emitEvent("onChange",this)};C.prototype.hasEnded=function(e){if(this.keys.length===0)return true;if(this.keys[this._lastKeyIndex].time<=e)return true;return false};C.prototype.isRising=function(e){if(this.hasEnded(e))return false;const t=this.getKeyIndex(e);if(this.keys[t].value<this.keys[t+1].value)return true;return false};C.prototype.clearBefore=function(e){const t=this.getValue(e);const n=this.getKeyIndex(e);this.setValue(e,t);if(n>1)this.keys.splice(0,n);this._updateLastIndex()};C.prototype.clear=function(e){let t=0;if(e)t=this.getValue(e);this.keys.length=0;this._updateLastIndex();if(e)this.setValue(e,t);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};C.prototype.sortKeys=function(){this.keys.sort((e,t)=>{return parseFloat(e.time)-parseFloat(t.time)});this._updateLastIndex();this._needsSort=false;if(this.keys.length%1e3==0)console.log(this.name,this.keys.length)};C.prototype.getLength=function(){if(this.keys.length===0)return 0;return this.keys[this.keys.length-1].time};C.prototype.getKeyIndex=function(t){let n=0;let i=0;if(this._cachedIndex&&this.keys.length>this._cachedIndex&&t>=this.keys[this._cachedIndex].time)i=this._cachedIndex;for(let e=i;e<this.keys.length;e++){if(t>=this.keys[e].time)n=e;if(this.keys[e].time>t){if(t!=0)this._cachedIndex=n;return n}}return n};C.prototype.setValue=function(t,n,i){let r=null;if(this.keys.length==0||t<=this.keys[this.keys.length-1].time)for(let e=0;e<this.keys.length;e++)if(this.keys[e].time==t){r=this.keys[e];this.keys[e].setValue(n);this.keys[e].cb=i;break}if(!r){r=new v({time:t,value:n,e:this.defaultEasing,cb:i});this.keys.push(r);this._updateLastIndex()}if(this.onChange)this.onChange();this.emitEvent("onChange",this);this._needsSort=true;return r};C.prototype.setKeyEasing=function(e,t){if(this.keys[e]){this.keys[e].setEasing(t);this.emitEvent("onChange",this)}};C.prototype.getSerialized=function(){const t={};t.keys=[];t.loop=this.loop;for(let e=0;e<this.keys.length;e++)t.keys.push(this.keys[e].getSerialized());return t};C.prototype.getKey=function(e){const t=this.getKeyIndex(e);return this.keys[t]};C.prototype.getNextKey=function(e){let t=this.getKeyIndex(e)+1;if(t>=this.keys.length)t=this.keys.length-1;return this.keys[t]};C.prototype.isFinished=function(e){if(this.keys.length<=0)return true;return e>this.keys[this.keys.length-1].time};C.prototype.isStarted=function(e){if(this.keys.length<=0)return false;return e>=this.keys[0].time};C.prototype.getValue=function(e){if(this.keys.length===0){return 0}if(this._needsSort)this.sortKeys();if(!this.loop&&e>this.keys[this._lastKeyIndex].time){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}if(e<this.keys[0].time){return this.keys[0].value}if(this.loop&&e>this.keys[this._lastKeyIndex].time){const o=e/this.keys[this._lastKeyIndex].time;if(o>this._timesLooped){this._timesLooped++;if(this.onLooped)this.onLooped()}e=(e-this.keys[0].time)%(this.keys[this._lastKeyIndex].time-this.keys[0].time);e+=this.keys[0].time}const t=this.getKeyIndex(e);if(t>=this._lastKeyIndex){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}const n=t+1;const i=this.keys[t];const r=this.keys[n];if(i.cb&&!i.cbTriggered)i.trigger();if(!r)return-1;const s=(e-i.time)/(r.time-i.time);if(!i.ease)this.log._warn("has no ease",i,r);return i.ease(s,r)};C.prototype._updateLastIndex=function(){this._lastKeyIndex=this.keys.length-1};C.prototype.addKey=function(e){if(e.time===undefined){this.log.warn("key time undefined, ignoring!")}else{this.keys.push(e);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)}this._updateLastIndex()};C.prototype.easingFromString=function(e){if(e=="linear")return _.ANIM.EASING_LINEAR;if(e=="absolute")return _.ANIM.EASING_ABSOLUTE;if(e=="smoothstep")return _.ANIM.EASING_SMOOTHSTEP;if(e=="smootherstep")return _.ANIM.EASING_SMOOTHERSTEP;if(e=="Cubic In")return _.ANIM.EASING_CUBIC_IN;if(e=="Cubic Out")return _.ANIM.EASING_CUBIC_OUT;if(e=="Cubic In Out")return _.ANIM.EASING_CUBIC_INOUT;if(e=="Expo In")return _.ANIM.EASING_EXPO_IN;if(e=="Expo Out")return _.ANIM.EASING_EXPO_OUT;if(e=="Expo In Out")return _.ANIM.EASING_EXPO_INOUT;if(e=="Sin In")return _.ANIM.EASING_SIN_IN;if(e=="Sin Out")return _.ANIM.EASING_SIN_OUT;if(e=="Sin In Out")return _.ANIM.EASING_SIN_INOUT;if(e=="Back In")return _.ANIM.EASING_BACK_IN;if(e=="Back Out")return _.ANIM.EASING_BACK_OUT;if(e=="Back In Out")return _.ANIM.EASING_BACK_INOUT;if(e=="Elastic In")return _.ANIM.EASING_ELASTIC_IN;if(e=="Elastic Out")return _.ANIM.EASING_ELASTIC_OUT;if(e=="Bounce In")return _.ANIM.EASING_BOUNCE_IN;if(e=="Bounce Out")return _.ANIM.EASING_BOUNCE_OUT;if(e=="Quart Out")return _.ANIM.EASING_QUART_OUT;if(e=="Quart In")return _.ANIM.EASING_QUART_IN;if(e=="Quart In Out")return _.ANIM.EASING_QUART_INOUT;if(e=="Quint Out")return _.ANIM.EASING_QUINT_OUT;if(e=="Quint In")return _.ANIM.EASING_QUINT_IN;if(e=="Quint In Out")return _.ANIM.EASING_QUINT_INOUT};C.prototype.createPort=function(e,t,n){const i=e.inDropDown(t,_.ANIM.EASINGS,"Cubic Out");i.set("linear");i.defaultValue="linear";i.onChange=function(){this.defaultEasing=this.easingFromString(i.get());this.emitEvent("onChangeDefaultEasing",this);if(n)n()}.bind(this);return i};C.slerpQuaternion=function(e,t,n,i,r,s){if(!C.slerpQuaternion.q1){C.slerpQuaternion.q1=quat.create();C.slerpQuaternion.q2=quat.create()}const o=n.getKeyIndex(e);let a=o+1;if(a>=n.keys.length)a=n.keys.length-1;if(o==a){quat.set(t,n.keys[o].value,i.keys[o].value,r.keys[o].value,s.keys[o].value)}else{const l=n.keys[o].time;const u=n.keys[a].time;const c=(e-l)/(u-l);quat.set(C.slerpQuaternion.q1,n.keys[o].value,i.keys[o].value,r.keys[o].value,s.keys[o].value);quat.set(C.slerpQuaternion.q2,n.keys[a].value,i.keys[a].value,r.keys[a].value,s.keys[a].value);quat.slerp(t,C.slerpQuaternion.q1,C.slerpQuaternion.q2,c)}return t};const y={Key:v};const S=function(e,t,n,i){m.apply(this);this.data={};this._log=new c("core_port");this.direction=_.PORT.PORT_DIR_IN;this.id=String(CABLES.simpleId());this._op=e;this.links=[];this.value=0;this.name=t;this.type=n||_.OP.OP_PORT_TYPE_VALUE;this.uiAttribs=i||{};this.anim=null;this._oldAnimVal=-5711;this.defaultValue=null;this._uiActiveState=true;this.ignoreValueSerialize=false;this.onLinkChanged=null;this.crashed=false;this._valueBeforeLink=null;this._lastAnimFrame=-1;this._animated=false;this.onValueChanged=null;this.onTriggered=null;this.onUiActiveStateChange=null;this.changeAlways=false;this.forceRefChange=false;this._useVariableName=null;this.activityCounter=0;this.apf=0;this.activityCounterStartFrame=0;this._tempLastUiValue=null;Object.defineProperty(this,"title",{get(){return this.uiAttribs.title||this.name}});Object.defineProperty(this,"parent",{get(){this._log.stack("use port.op, not .parent");return this._op}});Object.defineProperty(this,"op",{get(){return this._op}});Object.defineProperty(this,"val",{get(){this._log.warn("val getter deprecated!",this);this._log.stack("val getter deprecated");return this.get()},set(e){this._log.warn("val setter deprecated!",this);this._log.stack("val setter deprecated");this.setValue(e)}})};S.prototype.copyLinkedUiAttrib=function(e,t){if(!CABLES.UI)return;if(!this.isLinked())return;const n={};n[e]=this.links[0].getOtherPort(this).getUiAttrib(e);t.setUiAttribs(n)};S.prototype.getValueForDisplay=function(){let e=this.value;if(typeof this.value==="string"||this.value instanceof String){if(e.length>1e3){e=e.substring(0,999);e+="..."}if(this.uiAttribs&&this.uiAttribs.display=="boolnum"){e+=" - ";if(!this.value)e+="false";else e+="true"}e=e.replace(/[\u00A0-\u9999<>\&]/g,function(e){return"&#"+e.charCodeAt(0)+";"});if(e.length>100)e=e.substring(0,100)}else{e=this.value}return e};S.prototype.onAnimToggle=function(){};S.prototype._onAnimToggle=function(){this.onAnimToggle()};S.prototype.remove=function(){this.removeLinks();this._op.removePort(this)};S.prototype.setUiAttribs=function(e){let t=false;if(!this.uiAttribs)this.uiAttribs={};for(const n in e){if(e[n]===undefined){delete this.uiAttribs[n];continue}if(this.uiAttribs[n]!=e[n])t=true;this.uiAttribs[n]=e[n];if(n=="group"&&this.indexPort)this.indexPort.setUiAttribs({group:e[n]})}if(e.hasOwnProperty("expose"))this._op.patch.emitEvent("subpatchExpose",this._op.uiAttribs.subPatch);if(t)this.emitEvent("onUiAttrChange",e,this)};S.prototype.getUiAttribs=function(){return this.uiAttribs};S.prototype.getUiAttrib=function(e){if(!this.uiAttribs||!this.uiAttribs.hasOwnProperty(e)){return null}return this.uiAttribs[e]};S.prototype.get=function(){if(this._animated&&this._lastAnimFrame!=this._op.patch.getFrameNum()){this._lastAnimFrame=this._op.patch.getFrameNum();this.value=this.anim.getValue(this._op.patch.timer.getTime());this._oldAnimVal=this.value;this.forceChange()}return this.value};S.prototype.setRef=function(e){this.forceRefChange=true;this.set(e)};S.prototype.set=S.prototype.setValue=function(e){if(e===undefined)e=null;if(this._op.enabled&&!this.crashed){if(e!==this.value||this.changeAlways||this.type==_.OP.OP_PORT_TYPE_TEXTURE||this.type==_.OP.OP_PORT_TYPE_ARRAY){if(this._animated){this.anim.setValue(this._op.patch.timer.getTime(),e)}else{try{this.value=e;this.forceChange()}catch(e){this.crashed=true;this.setValue=function(e){};this.onTriggered=function(){};this._log.error("exception in ",this._op);this._log.error(e);this._op.patch.emitEvent("exception",e,this._op)}if(this._op&&this._op.patch&&this._op.patch.isEditorMode()&&this.type==_.OP.OP_PORT_TYPE_TEXTURE)gui.texturePreview().updateTexturePort(this)}if(this.direction==_.PORT.PORT_DIR_OUT)for(let e=0;e<this.links.length;++e)this.links[e].setValue()}}};S.prototype.updateAnim=function(){if(this._animated){this.value=this.get();if(this._oldAnimVal!=this.value||this.changeAlways){this._oldAnimVal=this.value;this.forceChange()}this._oldAnimVal=this.value}};S.prototype.forceChange=function(){if(this.onValueChanged||this.onChange){}this._activity();this.emitEvent("change",this.value,this);if(this.onChange)this.onChange(this,this.value);else if(this.onValueChanged)this.onValueChanged(this,this.value)};S.prototype.getTypeString=function(){if(this.type==_.OP.OP_PORT_TYPE_VALUE)return"Number";if(this.type==_.OP.OP_PORT_TYPE_FUNCTION)return"Trigger";if(this.type==_.OP.OP_PORT_TYPE_OBJECT)return"Object";if(this.type==_.OP.OP_PORT_TYPE_DYNAMIC)return"Dynamic";if(this.type==_.OP.OP_PORT_TYPE_ARRAY)return"Array";if(this.type==_.OP.OP_PORT_TYPE_STRING)return"String";return"Unknown"};S.prototype.deSerializeSettings=function(e){if(!e)return;if(e.animated)this.setAnimated(e.animated);if(e.useVariable)this.setVariableName(e.useVariable);if(e.title)this.setUiAttribs({title:e.title});if(e.expose)this.setUiAttribs({expose:true});if(e.order)this.setUiAttribs({order:e.order});if(e.multiPortManual)this.setUiAttribs({multiPortManual:e.multiPortManual});if(e.multiPortNum)this.setUiAttribs({multiPortNum:e.multiPortNum});if(e.anim){if(!this.anim)this.anim=new C({name:"port "+this.name});this._op._hasAnimPort=true;this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)});if(e.anim.loop)this.anim.loop=e.anim.loop;for(const t in e.anim.keys){this.anim.keys.push(new y.Key(e.anim.keys[t]))}this.anim.sortKeys()}};S.prototype.setInitialValue=function(e){if(this.op.preservedPortLinks[this.name]){for(let e=0;e<this.op.preservedPortLinks[this.name].length;e++){const t=this.op.preservedPortLinks[this.name][e];this.op.patch._addLink(t.objIn,t.objOut,t.portIn,t.portOut)}}if(this.op.preservedPortValues&&this.op.preservedPortValues.hasOwnProperty(this.name)&&this.op.preservedPortValues[this.name]!==undefined){this.set(this.op.preservedPortValues[this.name])}else if(e!==undefined)this.set(e);if(e!==undefined)this.defaultValue=e};S.prototype.getSerialized=function(){let e={name:this.getName()};if(!this.ignoreValueSerialize&&this.links.length===0){if(this.type==_.OP.OP_PORT_TYPE_OBJECT&&this.value&&this.value.tex){}else e.value=this.value}if(this._useVariableName)e.useVariable=this._useVariableName;if(this._animated)e.animated=true;if(this.anim)e.anim=this.anim.getSerialized();if(this.uiAttribs.multiPortNum)e.multiPortNum=this.uiAttribs.multiPortNum;if(this.uiAttribs.multiPortManual)e.multiPortManual=this.uiAttribs.multiPortManual;if(this.uiAttribs.display=="file")e.display=this.uiAttribs.display;if(this.uiAttribs.expose){e.expose=true;if(this.uiAttribs.hasOwnProperty("order"))e.order=this.uiAttribs.order}if(this.uiAttribs.title)e.title=this.uiAttribs.title;if((this.preserveLinks||this.direction==_.PORT.PORT_DIR_OUT)&&this.links.length>0){e.links=[];for(const t in this.links){if(!this.links[t].ignoreInSerialize&&(this.links[t].portIn&&this.links[t].portOut))e.links.push(this.links[t].getSerialized())}}if(this.direction==_.PORT.PORT_DIR_IN&&this.links.length>0){for(const t in this.links){if(!this.links[t].portIn||!this.links[t].portOut)continue;const n=this.links[t].getOtherPort(this);if(n.op.isInBlueprint2&&this.op.isInBlueprint2){if(n.op.isInBlueprint2()&&!this.op.isInBlueprint2()){e.links=e.links||[];e.links.push(this.links[t].getSerialized())}}}}if(e.links&&e.links.length==0)delete e.links;if(this.type===_.OP.OP_PORT_TYPE_FUNCTION)delete e.value;if(this.type===_.OP.OP_PORT_TYPE_FUNCTION&&this.links.length==0)e=null;if(e&&Object.keys(e).length==1&&e.name)e=null;s(e);return e};S.prototype.shouldLink=function(){return true};S.prototype.removeLinks=function(){let e=0;while(this.links.length>0){e++;if(e>5e3){this._log.warn("could not delete links... / infinite loop");this.links.length=0;break}this.links[0].remove()}};S.prototype.removeLink=function(e){for(const t in this.links)if(this.links[t]==e)this.links.splice(t,1);if(this.direction==_.PORT.PORT_DIR_IN){if(this.type==_.OP.OP_PORT_TYPE_VALUE)this.setValue(this._valueBeforeLink||0);else this.setValue(this._valueBeforeLink||null)}if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");this._op.emitEvent("onLinkChanged")};S.prototype.getName=function(){return this.name};S.prototype.getTitle=function(){if(this.uiAttribs.title)return this.uiAttribs.title;return this.name};S.prototype.addLink=function(e){this._valueBeforeLink=this.value;this.links.push(e);if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this._op.emitEvent("onLinkChanged")};S.prototype.getLinkTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return this.links[t]};S.prototype.removeLinkTo=function(e){for(const t in this.links){if(this.links[t].portIn==e||this.links[t].portOut==e){this.links[t].remove();if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");return}}};S.prototype.isLinkedTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return true;return false};S.prototype._activity=function(){this.activityCounter++};S.prototype.trigger=function(){const t=this.links.length;this._activity();if(t===0)return;if(!this._op.enabled)return;let n=null;try{for(let e=0;e<t;++e){if(this.links[e].portIn){n=this.links[e].portIn;n.op.patch.pushTriggerStack(n);n._onTriggered();n.op.patch.popTriggerStack()}if(this.links[e])this.links[e].activity()}}catch(e){n.op.enabled=false;if(this._op.patch.isEditorMode()){if(n.op.onError)n.op.onError(e)}this._log.error("exception in port: "+n.op.name,n.op);this._log.error(e)}};S.prototype.call=function(){this._log.warn("call deprecated - use trigger() ");this.trigger()};S.prototype.execute=function(){this._log.warn("### execute port: "+this.getName(),this.goals.length)};S.prototype.setVariableName=function(e){this._useVariableName=e;this._op.patch.on("variableRename",(e,t)=>{if(e!=this._useVariableName)return;this._useVariableName=t})};S.prototype.getVariableName=function(){return this._useVariableName};S.prototype.setVariable=function(e){this.setAnimated(false);const t={useVariable:false};if(this._variableIn&&this._varChangeListenerId){this._variableIn.off(this._varChangeListenerId);this._variableIn=null}if(e){this._variableIn=this._op.patch.getVar(e);if(!this._variableIn){this._log.warn("PORT VAR NOT FOUND!!!",e)}else{if(this.type==_.OP.OP_PORT_TYPE_OBJECT){this._varChangeListenerId=this._variableIn.on("change",()=>{this.set(null);this.set(this._variableIn.getValue())})}else{this._varChangeListenerId=this._variableIn.on("change",this.set.bind(this))}this.set(this._variableIn.getValue())}this._useVariableName=e;t.useVariable=true;t.variableName=this._useVariableName}else{t.variableName=this._useVariableName=null;t.useVariable=false}this.setUiAttribs(t);this._op.patch.emitEvent("portSetVariable",this._op,this,e)};S.prototype._handleNoTriggerOpAnimUpdates=function(e){let t=false;for(let e=0;e<this._op.portsIn.length;e++){if(this._op.portsIn.type==_.OP.OP_PORT_TYPE_FUNCTION){t=true;break}}if(!t){if(e)this._notriggerAnimUpdate=this._op.patch.on("onRenderFrame",()=>{this.updateAnim()});else this._op.patch.removeEventListener(this._notriggerAnimUpdate)}};S.prototype.setAnimated=function(e){if(this._animated!=e){this._animated=e;this._op._hasAnimPort=true;if(this._animated&&!this.anim){this.anim=new C({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this._onAnimToggle()}this._handleNoTriggerOpAnimUpdates(e);if(!e){this.anim=null}this.setUiAttribs({isAnimated:this._animated})};S.prototype.toggleAnim=function(){this._animated=!this._animated;if(this._animated&&!this.anim){this.anim=new C({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this.setAnimated(this._animated);this._onAnimToggle();this.setUiAttribs({isAnimated:this._animated})};S.prototype.getType=function(){return this.type};S.prototype.isLinked=function(){return this.links.length>0||this._animated||this._useVariableName!=null};S.prototype.isBoundToVar=function(){const e=this._useVariableName!=null;this.uiAttribs.boundToVar=e;return e};S.prototype.isAnimated=function(){return this._animated};S.prototype.isHidden=function(){return this.uiAttribs.hidePort};S.prototype._onTriggered=function(e){this._activity();this._op.updateAnims();if(this._op.enabled&&this.onTriggered)this.onTriggered(e);if(this._op.enabled)this.emitEvent("trigger")};S.prototype._onSetProfiling=function(e){this._op.patch.profiler.add("port",this);this.setValue(e);this._op.patch.profiler.add("port",null)};S.prototype._onTriggeredProfiling=function(){if(this._op.enabled&&this.onTriggered){this._op.patch.profiler.add("port",this);this.onTriggered();this._op.patch.profiler.add("port",null)}};S.prototype.getUiActiveState=function(){return this._uiActiveState};S.prototype.setUiActiveState=function(e){this._uiActiveState=e;if(this.onUiActiveStateChange)this.onUiActiveStateChange()};S.prototype.onValueChange=function(e){this.onChange=e};S.prototype.hidePort=function(){};S.portTypeNumberToString=function(e){if(e==_.OP.OP_PORT_TYPE_VALUE)return"value";if(e==_.OP.OP_PORT_TYPE_FUNCTION)return"function";if(e==_.OP.OP_PORT_TYPE_OBJECT)return"object";if(e==_.OP.OP_PORT_TYPE_ARRAY)return"array";if(e==_.OP.OP_PORT_TYPE_STRING)return"string";if(e==_.OP.OP_PORT_TYPE_DYNAMIC)return"dynamic";return"unknown"};class L{constructor(e,t,n,i,r,s,o,a,l,u){this._log=new c("cg_uniform");this._type=t;this._name=n;this._shader=e;this._value=1e-5;this._oldValue=null;this._port=null;this._structName=l;this._structUniformName=a;this._propertyName=u;this._shader._addUniform(this);this.needsUpdate=true;this.shaderType=null;this.comment=null;if(t=="f"){this.set=this.setValue=this.setValueF.bind(this);this.updateValue=this.updateValueF.bind(this)}else if(t=="f[]"){this.set=this.setValue=this.setValueArrayF.bind(this);this.updateValue=this.updateValueArrayF.bind(this)}else if(t=="2f[]"){this.set=this.setValue=this.setValueArray2F.bind(this);this.updateValue=this.updateValueArray2F.bind(this)}else if(t=="3f[]"){this.set=this.setValue=this.setValueArray3F.bind(this);this.updateValue=this.updateValueArray3F.bind(this)}else if(t=="4f[]"){this.set=this.setValue=this.setValueArray4F.bind(this);this.updateValue=this.updateValueArray4F.bind(this)}else if(t=="i"){this.set=this.setValue=this.setValueI.bind(this);this.updateValue=this.updateValueI.bind(this)}else if(t=="2i"){this.set=this.setValue=this.setValue2I.bind(this);this.updateValue=this.updateValue2I.bind(this)}else if(t=="3i"){this.set=this.setValue=this.setValue3I.bind(this);this.updateValue=this.updateValue3I.bind(this)}else if(t=="4i"){this.set=this.setValue=this.setValue4I.bind(this);this.updateValue=this.updateValue4I.bind(this)}else if(t=="b"){this.set=this.setValue=this.setValueBool.bind(this);this.updateValue=this.updateValueBool.bind(this)}else if(t=="4f"){this.set=this.setValue=this.setValue4F.bind(this);this.updateValue=this.updateValue4F.bind(this)}else if(t=="3f"){this.set=this.setValue=this.setValue3F.bind(this);this.updateValue=this.updateValue3F.bind(this)}else if(t=="2f"){this.set=this.setValue=this.setValue2F.bind(this);this.updateValue=this.updateValue2F.bind(this)}else if(t=="t"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="tc"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="t[]"){this.set=this.setValue=this.setValueArrayT.bind(this);this.updateValue=this.updateValueArrayT.bind(this)}else if(t=="m4"||t=="m4[]"){this.set=this.setValue=this.setValueM4.bind(this);this.updateValue=this.updateValueM4.bind(this)}else throw new Error("Unknown uniform type");if(typeof i=="object"&&i instanceof S){this._port=i;this._value=this._port.get();if(r&&s&&o){if(!(r instanceof S)||!(s instanceof S)||!(o instanceof S)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0,0];this._port2=r;this._port3=s;this._port4=o;this._port.on("change",this.updateFromPort4f.bind(this));this._port2.on("change",this.updateFromPort4f.bind(this));this._port3.on("change",this.updateFromPort4f.bind(this));this._port4.on("change",this.updateFromPort4f.bind(this));this.updateFromPort4f()}else if(r&&s){if(!(r instanceof S)||!(s instanceof S)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0];this._port2=r;this._port3=s;this._port.on("change",this.updateFromPort3f.bind(this));this._port2.on("change",this.updateFromPort3f.bind(this));this._port3.on("change",this.updateFromPort3f.bind(this));this.updateFromPort3f()}else if(r){if(!(r instanceof S)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0];this._port2=r;this._port.on("change",this.updateFromPort2f.bind(this));this._port2.on("change",this.updateFromPort2f.bind(this));this.updateFromPort2f()}else{this._port.on("change",this.updateFromPort.bind(this))}}else this._value=i;this.setValue(this._value);this.needsUpdate=true}getType(){return this._type}getName(){return this._name}getValue(){return this._value}getShaderType(){return this.shaderType}isStructMember(){return!!this._structName}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}}const O=L;class N extends O{constructor(e,t,n,i,r,s,o,a,l,u){super(e,t,n,i,r,s,o,a,l,u);this._loc=-1;this._cgl=e._cgl}get name(){return this._name}copy(e){const t=new N(e,this._type,this._name,this._value,this._port2,this._port3,this._port4,this._structUniformName,this._structName,this._propertyName);t.shaderType=this.shaderType;return t}getGlslTypeString(){return N.glslTypeString(this._type)}_isValidLoc(){return this._loc!=-1}resetLoc(){this._loc=-1;this.needsUpdate=true}bindTextures(){}getLoc(){return this._loc}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}updateValueF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1f(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueF(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}updateValueI(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValue2I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2i(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue3I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3i(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue4I(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform4i(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValueI(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValue2I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}setValue3I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}setValue4I(e){this.needsUpdate=true;this._value=e||vec4.create()}updateValueBool(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value?1:0);this._cgl.profileData.profileUniformCount++}setValueBool(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValueArray4F(e){this.needsUpdate=true;this._value=e}updateValueArray4F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform4fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray3F(e){this.needsUpdate=true;this._value=e}updateValueArray3F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform3fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray2F(e){this.needsUpdate=true;this._value=e}updateValueArray2F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform2fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayF(e){this.needsUpdate=true;this._value=e}updateValueArrayF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayT(e){this.needsUpdate=true;this._value=e}updateValue3F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3f(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue3F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValue2F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2f(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue2F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}updateValue4F(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value){this._log.warn("no value for uniform",this._name,this);this._value=[0,0,0,0]}this.needsUpdate=false;this._shader.getCgl().gl.uniform4f(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValue4F(e){if(typeof this.value=="number")this.value=vec4.create();if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2,3];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]||e[3]!=this._oldValue[3]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValueM4(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value||this._value.length%16!=0)return console.log("this.name",this._name,this._value);this._shader.getCgl().gl.uniformMatrix4fv(this._loc,false,this._value);this._cgl.profileData.profileUniformCount++}setValueM4(e){this.needsUpdate=true;this._value=e||mat4.create()}updateValueArrayT(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1iv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValueT(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._cgl.profileData.profileUniformCount++;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this.needsUpdate=false}setValueT(e){this.needsUpdate=true;this._value=e}}N.glslTypeString=e=>{if(e=="f")return"float";if(e=="b")return"bool";if(e=="i")return"int";if(e=="2i")return"ivec2";if(e=="2f")return"vec2";if(e=="3f")return"vec3";if(e=="4f")return"vec4";if(e=="m4")return"mat4";if(e=="t")return"sampler2D";if(e=="tc")return"samplerCube";if(e=="3f[]")return null;if(e=="m4[]")return null;if(e=="f[]")return null;console.warn("[CGL UNIFORM] unknown glsl type string ",e)};const M={SHADERVAR_VERTEX_POSITION:"vPosition",SHADERVAR_VERTEX_NUMBER:"attrVertIndex",SHADERVAR_VERTEX_NORMAL:"attrVertNormal",SHADERVAR_VERTEX_TEXCOORD:"attrTexCoord",SHADERVAR_INSTANCE_MMATRIX:"instMat",SHADERVAR_VERTEX_COLOR:"attrVertColor",SHADERVAR_INSTANCE_INDEX:"instanceIndex",SHADERVAR_UNI_PROJMAT:"projMatrix",SHADERVAR_UNI_VIEWMAT:"viewMatrix",SHADERVAR_UNI_MODELMAT:"modelMatrix",SHADERVAR_UNI_NORMALMAT:"normalMatrix",SHADERVAR_UNI_INVVIEWMAT:"inverseViewMatrix",SHADERVAR_UNI_INVPROJMAT:"invProjMatrix",SHADERVAR_UNI_MATERIALID:"materialId",SHADERVAR_UNI_OBJECTID:"objectId",SHADERVAR_UNI_VIEWPOS:"camPos"};const ne={BLEND_NONE:0,BLEND_NORMAL:1,BLEND_ADD:2,BLEND_SUB:3,BLEND_MUL:4};const ie=180/Math.PI;const re=Math.PI/180;const w={MATH:{DEG2RAD:re,RAD2DEG:ie},SHADER:M,BLEND_MODES:ne};function se(e){e.prototype.hasFeedbacks=function(){return this._feedBacks.length>0};e.prototype.removeFeedbacks=function(e){if(!this._feedbacks)return;this._feedbacks.length=0;this._feedBacksChanged=true};e.prototype.setAttributeFeedback=function(){};e.prototype.setFeedback=function(e,t,n){let i={nameOut:t};let r=false;this.unBindFeedbacks();for(let e=0;e<this._feedBacks.length;e++){if(this._feedBacks[e].nameOut==t){i=this._feedBacks[e];r=true}}if(!r)this._feedBacksChanged=true;i.initialArr=n;i.attrib=e;if(i.outBuffer)this._cgl.gl.deleteBuffer(i.outBuffer);i.outBuffer=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,i.outBuffer);this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,i.initialArr,this._cgl.gl.STATIC_DRAW);this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,i.attrib.buffer);this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,i.initialArr,this._cgl.gl.STATIC_DRAW);if(!r)this._feedBacks.push(i);return i};e.prototype.bindFeedback=function(t){if(!this._feedBacks||this._feedBacks.length===0)return;if(this._transformFeedBackLoc==-1)this._transformFeedBackLoc=this._cgl.gl.createTransformFeedback();this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc);let n=false;for(let e=0;e<this._feedBacks.length;e++){const i=this._feedBacks[e];if(i.attrib==t){n=true;this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,e,i.outBuffer)}}if(!n){}};e.prototype.drawFeedbacks=function(e,t){let n=0;if(this._feedBacksChanged){const i=[];this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc);for(n=0;n<this._feedBacks.length;n++)i.push(this._feedBacks[n].nameOut);e.setFeedbackNames(i);console.log("feedbacknames",i);e.compile();this._feedBacksChanged=false;this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null);console.log("changed finished");return}this._cgl.gl.beginTransformFeedback(this.glPrimitive);this._cgl.gl.drawArrays(t,0,this._feedBacks[0].attrib.numItems);this._cgl.gl.endTransformFeedback();this.unBindFeedbacks();this.feedBacksSwapBuffers()};e.prototype.unBindFeedbacks=function(){for(let e=0;e<this._feedBacks.length;e++){this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,e,null)}this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null)};e.prototype.feedBacksSwapBuffers=function(){for(let e=0;e<this._feedBacks.length;e++){const t=this._feedBacks[e].attrib.buffer;this._feedBacks[e].attrib.buffer=this._feedBacks[e].outBuffer;this._feedBacks[e].outBuffer=t}}}const P={};P.lastMesh=null;const R=function(e,t,n){this._cgl=e;let i=n||{};if(CABLES.UTILS.isNumeric(i))i={glPrimitive:n};this._log=new c("cgl_mesh");this._bufVertexAttrib=null;this._bufVerticesIndizes=this._cgl.gl.createBuffer();this._indexType=this._cgl.gl.UNSIGNED_SHORT;this._attributes=[];this._attribLocs={};this._geom=null;this._lastShader=null;this._numInstances=0;this._glPrimitive=i.glPrimitive;this.opId=i.opId||"";this._preWireframeGeom=null;this.addVertexNumbers=false;this._name="unknown";this.feedBackAttributes=[];this.setGeom(t);this._feedBacks=[];this._feedBacksChanged=false;this._transformFeedBackLoc=-1;this._lastAttrUpdate=0;this.memFreed=false;this._cgl.profileData.addHeavyEvent("mesh constructed",this._name);this._queryExt=null;Object.defineProperty(this,"numInstances",{get(){return this._numInstances},set(e){this.setNumInstances(e)}})};R.prototype.freeMem=function(){this.memFreed=true;for(let e=0;e<this._attributes.length;e++){this._attributes[e].floatArray=null}};R.prototype.updateVertices=function(e){this.setAttribute(w.SHADER.SHADERVAR_VERTEX_POSITION,e.vertices,3);this._numVerts=e.vertices.length/3};R.prototype.setAttributePointer=function(t,n,i,r){for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].name==t){if(!this._attributes[e].pointer)this._attributes[e].pointer=[];this._attributes[e].pointer.push({loc:-1,name:n,stride:i,offset:r,instanced:t==w.SHADER.SHADERVAR_INSTANCE_MMATRIX})}}};R.prototype.getAttribute=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].name==t)return this._attributes[e]};R.prototype.setAttributeRange=function(e,t,n,i){if(!e)return;if(!n&&!i)return;if(!e.name){this._log.stack("no attrname?!")}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,e.buffer);this._cgl.profileData.profileMeshAttributes+=i-n||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]=this._cgl.profileData.profileSingleMeshAttribute[this._name]||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]+=i-n||0;if(e.numItems<t.length/e.itemSize){this._resizeAttr(t,e)}if(i>t.length){if(CABLES.platform.isDevEnv())this._log.log(this._cgl.canvas.id+" "+e.name+" buffersubdata out of bounds ?",t.length,i,n,e);return}if(this._cgl.glVersion==1)this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,0,t);else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,n*4,t,n,i-n)};R.prototype._resizeAttr=function(e,t){if(t.buffer)this._cgl.gl.deleteBuffer(t.buffer);t.buffer=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,t.buffer);this._bufferArray(e,t);t.numItems=e.length/t.itemSize};R.prototype._bufferArray=function(e,t){let n=t.floatArray||null;if(!e)return;if(this._cgl.debugOneFrame){console.log("_bufferArray",e.length,t.name)}if(!(e instanceof Float32Array)){if(t&&n&&n.length==e.length){n.set(e)}else{n=new Float32Array(e);if(this._cgl.debugOneFrame){console.log("_bufferArray create new float32array",e.length,t.name)}if(e.length>1e4){this._cgl.profileData.profileNonTypedAttrib++;this._cgl.profileData.profileNonTypedAttribNames="("+this._name+":"+t.name+")"}}}else n=e;t.arrayLength=n.length;t.floatArray=null;this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,n,this._cgl.gl.DYNAMIC_DRAW)};R.prototype.addAttribute=R.prototype.updateAttribute=R.prototype.setAttribute=function(e,t,n,i){if(!t){this._log.error("mesh addAttribute - no array given! "+e);throw new Error}let r=null;let s=false;let o=0;const a=t.length/n;this._cgl.profileData.profileMeshAttributes+=a||0;if(typeof i=="function"){r=i}if(typeof i=="object"){if(i.cb)r=i.cb;if(i.instanced)s=i.instanced}if(e==w.SHADER.SHADERVAR_INSTANCE_MMATRIX)s=true;for(o=0;o<this._attributes.length;o++){const c=this._attributes[o];if(c.name==e){if(c.numItems===a){}else{this._resizeAttr(t,c)}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,c.buffer);this._bufferArray(t,c);return c}}const l=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,l);let u=this._cgl.gl.FLOAT;if(i&&i.type)u=i.type;const c={buffer:l,name:e,cb:r,itemSize:n,numItems:a,startItem:0,instanced:s,type:u};this._bufferArray(t,c);if(e==w.SHADER.SHADERVAR_VERTEX_POSITION)this._bufVertexAttrib=c;this._attributes.push(c);this._attribLocs={};return c};R.prototype.getAttributes=function(){return this._attributes};R.prototype.updateTexCoords=function(e){if(e.texCoords&&e.texCoords.length>0){this.setAttribute(w.SHADER.SHADERVAR_VERTEX_TEXCOORD,e.texCoords,2)}else{const t=new Float32Array(Math.round(e.vertices.length/3*2));this.setAttribute(w.SHADER.SHADERVAR_VERTEX_TEXCOORD,t,2)}};R.prototype.updateNormals=function(e){if(e.vertexNormals&&e.vertexNormals.length>0){this.setAttribute(w.SHADER.SHADERVAR_VERTEX_NORMAL,e.vertexNormals,3)}else{const t=new Float32Array(Math.round(e.vertices.length));this.setAttribute(w.SHADER.SHADERVAR_VERTEX_NORMAL,t,3)}};R.prototype._setVertexNumbers=function(e){if(!this._verticesNumbers||this._verticesNumbers.length!=this._numVerts||e){if(e)this._verticesNumbers=e;else{this._verticesNumbers=new Float32Array(this._numVerts);for(let e=0;e<this._numVerts;e++)this._verticesNumbers[e]=e}this.setAttribute(w.SHADER.SHADERVAR_VERTEX_NUMBER,this._verticesNumbers,1,(e,t,n)=>{if(!n.uniformNumVertices)n.uniformNumVertices=new N(n,"f","numVertices",this._numVerts);n.uniformNumVertices.setValue(this._numVerts)})}};R.prototype.setVertexIndices=function(t){if(!this._bufVerticesIndizes){this._log.warn("no bufVerticesIndizes: "+this._name);return}if(t.length>0){if(t instanceof Float32Array)this._log.warn("vertIndices float32Array: "+this._name);for(let e=0;e<t.length;e++){if(t[e]>=this._numVerts){this._log.warn("invalid index in "+this._name,e,t[e]);return}}this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes);if(t.length>65535){this.vertIndicesTyped=new Uint32Array(t);this._indexType=this._cgl.gl.UNSIGNED_INT}else if(t instanceof Uint32Array){this.vertIndicesTyped=t;this._indexType=this._cgl.gl.UNSIGNED_INT}else if(!(t instanceof Uint16Array)){this.vertIndicesTyped=new Uint16Array(t);this._indexType=this._cgl.gl.UNSIGNED_SHORT}else this.vertIndicesTyped=t;this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this.vertIndicesTyped,this._cgl.gl.DYNAMIC_DRAW);this._bufVerticesIndizes.itemSize=1;this._bufVerticesIndizes.numItems=t.length}else this._bufVerticesIndizes.numItems=0};R.prototype.setGeom=function(e,t){this._geom=e;if(e.glPrimitive!=null)this._glPrimitive=e.glPrimitive;if(this._geom&&this._geom.name)this._name="mesh "+this._geom.name;P.lastMesh=null;this._cgl.profileData.profileMeshSetGeom++;this._disposeAttributes();this.updateVertices(this._geom);this.setVertexIndices(this._geom.verticesIndices);if(this.addVertexNumbers)this._setVertexNumbers();const n=this._geom.getAttributes();const i={texCoords:w.SHADER.SHADERVAR_VERTEX_TEXCOORD,vertexNormals:w.SHADER.SHADERVAR_VERTEX_NORMAL,vertexColors:w.SHADER.SHADERVAR_VERTEX_COLOR,tangents:"attrTangent",biTangents:"attrBiTangent"};for(const r in n)if(n[r].data&&n[r].data.length)this.setAttribute(i[r]||r,n[r].data,n[r].itemSize);if(t){this._geom=null}};R.prototype._preBind=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].cb)this._attributes[e].cb(this._attributes[e],this._geom,t)};R.prototype._checkAttrLengths=function(){if(this.memFreed)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].arrayLength/this._attributes[e].itemSize<this._attributes[0].arrayLength/this._attributes[0].itemSize){let e="unknown";if(this._geom)e=this._geom.name}}};R.prototype._bind=function(t){if(!t.isValid())return;let n=[];if(this._attribLocs[t.id])n=this._attribLocs[t.id];else this._attribLocs[t.id]=n;this._lastShader=t;if(t.lastCompile>this._lastAttrUpdate||n.length!=this._attributes.length){this._lastAttrUpdate=t.lastCompile;for(let e=0;e<this._attributes.length;e++)n[e]=-1}for(let e=0;e<this._attributes.length;e++){const i=this._attributes[e];if(n[e]==-1){if(i._attrLocationLastShaderTime!=t.lastCompile){i._attrLocationLastShaderTime=t.lastCompile;n[e]=this._cgl.glGetAttribLocation(t.getProgram(),i.name);this._cgl.profileData.profileAttrLoc++}}if(n[e]!=-1){this._cgl.gl.enableVertexAttribArray(n[e]);this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,i.buffer);if(i.instanced){if(i.itemSize<=4){if(!i.itemSize||i.itemSize==0)this._log.warn("instanced attrib itemsize error",this._geom.name,i);this._cgl.gl.vertexAttribPointer(n[e],i.itemSize,i.type,false,i.itemSize*4,0);this._cgl.gl.vertexAttribDivisor(n[e],1)}else if(i.itemSize==16){const r=16*4;this._cgl.gl.vertexAttribPointer(n[e],4,i.type,false,r,0);this._cgl.gl.enableVertexAttribArray(n[e]+1);this._cgl.gl.vertexAttribPointer(n[e]+1,4,i.type,false,r,4*4*1);this._cgl.gl.enableVertexAttribArray(n[e]+2);this._cgl.gl.vertexAttribPointer(n[e]+2,4,i.type,false,r,4*4*2);this._cgl.gl.enableVertexAttribArray(n[e]+3);this._cgl.gl.vertexAttribPointer(n[e]+3,4,i.type,false,r,4*4*3);this._cgl.gl.vertexAttribDivisor(n[e],1);this._cgl.gl.vertexAttribDivisor(n[e]+1,1);this._cgl.gl.vertexAttribDivisor(n[e]+2,1);this._cgl.gl.vertexAttribDivisor(n[e]+3,1)}else{this._log.warn("unknown instance attrib size",i.name)}}else{if(!i.itemSize||i.itemSize==0)this._log.warn("attrib itemsize error",this._name,i);this._cgl.gl.vertexAttribPointer(n[e],i.itemSize,i.type,false,i.itemSize*4,0);if(i.pointer){for(let e=0;e<i.pointer.length;e++){const s=i.pointer[e];if(s.loc==-1)s.loc=this._cgl.glGetAttribLocation(t.getProgram(),s.name);this._cgl.profileData.profileAttrLoc++;this._cgl.gl.enableVertexAttribArray(s.loc);this._cgl.gl.vertexAttribPointer(s.loc,i.itemSize,i.type,false,s.stride,s.offset)}}this.bindFeedback(i)}}}if(this._bufVerticesIndizes&&this._bufVerticesIndizes.numItems!==0)this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes)};R.prototype.unBind=function(){const e=this._lastShader;this._lastShader=null;if(!e)return;let t=[];if(this._attribLocs[e.id])t=this._attribLocs[e.id];else this._attribLocs[e.id]=t;P.lastMesh=null;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].instanced){if(this._attributes[e].itemSize<=4){if(t[e]!=-1)this._cgl.gl.vertexAttribDivisor(t[e],0);if(t[e]>=0)this._cgl.gl.disableVertexAttribArray(t[e])}else{this._cgl.gl.vertexAttribDivisor(t[e],0);this._cgl.gl.vertexAttribDivisor(t[e]+1,0);this._cgl.gl.vertexAttribDivisor(t[e]+2,0);this._cgl.gl.vertexAttribDivisor(t[e]+3,0);this._cgl.gl.disableVertexAttribArray(t[e]+1);this._cgl.gl.disableVertexAttribArray(t[e]+2);this._cgl.gl.disableVertexAttribArray(t[e]+3)}}if(t[e]!=-1)this._cgl.gl.disableVertexAttribArray(t[e])}};R.prototype.meshChanged=function(){return this._cgl.lastMesh&&this._cgl.lastMesh!=this};R.prototype.printDebug=function(e){console.log("--attributes");for(let e=0;e<this._attributes.length;e++){console.log("attribute "+e+" "+this._attributes[e].name)}};R.prototype.setNumVertices=function(e){this._bufVertexAttrib.numItems=e};R.prototype.getNumVertices=function(){return this._bufVertexAttrib.numItems};R.prototype.render=function(n){if(!n||!n.isValid()||this._cgl.aborted)return;this._checkAttrLengths();if(this._geom){if(this._preWireframeGeom&&!n.wireframe&&!this._geom.isIndexed()){this.setGeom(this._preWireframeGeom);this._preWireframeGeom=null}if(n.wireframe){let e=false;if(this._geom.isIndexed()){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}this._geom.unIndex();e=true}if(!this._geom.getAttribute("attrBarycentric")){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}e=true;this._geom.calcBarycentric()}if(e)this.setGeom(this._geom)}}let e=false;if(P.lastMesh!=this){if(P.lastMesh)P.lastMesh.unBind();e=true}if(e)this._preBind(n);if(!n.bind())return;this._bind(n);if(this.addVertexNumbers)this._setVertexNumbers();P.lastMesh=this;let t=this._cgl.gl.TRIANGLES;if(this._glPrimitive!==undefined)t=this._glPrimitive;if(n.glPrimitive!==null)t=n.glPrimitive;let i=1;let r=this._cgl.profileData.doProfileGlQuery;let s=false;if(r){let e=this._name+" - "+n.getName()+" #"+n.id;if(this._numInstances)e+=" instanced "+this._numInstances+"x";let t=this._cgl.profileData.glQueryData[e];if(!t)t={id:e,num:0};if(n.opId)t.shaderOp=n.opId;if(this.opId)t.meshOp=this.opId;this._cgl.profileData.glQueryData[e]=t;if(!this._queryExt&&this._queryExt!==false)this._queryExt=this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2")||false;if(this._queryExt){if(t._drawQuery){const o=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT_AVAILABLE);if(o){const a=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT);const l=a/1e6;t._times=t._times||0;t._times+=l;t._numcount++;t.when=performance.now();t._drawQuery=null;t.queryStarted=false}}if(!t.queryStarted){t._drawQuery=this._cgl.gl.createQuery();this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT,t._drawQuery);s=t.queryStarted=true}}}if(this.hasFeedbacks()){this.drawFeedbacks(n,t)}else if(!this._bufVerticesIndizes||this._bufVerticesIndizes.numItems===0){if(t==this._cgl.gl.TRIANGLES)i=3;if(this._numInstances===0)this._cgl.gl.drawArrays(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems-this._bufVertexAttrib.startItem);else this._cgl.gl.drawArraysInstanced(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems,this._numInstances)}else{if(t==this._cgl.gl.TRIANGLES)i=3;if(this._numInstances===0){this._cgl.gl.drawElements(t,this._bufVerticesIndizes.numItems,this._indexType,0)}else{this._cgl.gl.drawElementsInstanced(t,this._bufVerticesIndizes.numItems,this._indexType,0,this._numInstances)}}if(this._cgl.debugOneFrame&&this._cgl.gl.getError()!=this._cgl.gl.NO_ERROR){this._log.error("mesh draw gl error");this._log.error("mesh",this);this._log.error("shader",n);const u=[];for(let e=0;e<this._cgl.gl.getProgramParameter(n.getProgram(),this._cgl.gl.ACTIVE_ATTRIBUTES);e++){const c=this._cgl.gl.getActiveAttrib(n.getProgram(),e).name;this._log.error("attrib ",c)}}this._cgl.profileData.profileMeshNumElements+=this._bufVertexAttrib.numItems/i*(this._numInstances||1);this._cgl.profileData.profileMeshDraw++;if(r&&s){this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT)}this._cgl.printError("mesh render "+this._name);this.unBind()};R.prototype.setNumInstances=function(t){t=Math.max(0,t);if(this._numInstances!=t){this._numInstances=t;const n=new Float32Array(t);for(let e=0;e<t;e++)n[e]=e;this.setAttribute(w.SHADER.SHADERVAR_INSTANCE_INDEX,n,1,{instanced:true})}};R.prototype._disposeAttributes=function(){if(!this._attributes)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].buffer){this._cgl.gl.deleteBuffer(this._attributes[e].buffer);this._attributes[e].buffer=null}}this._attributes.length=0};R.prototype.dispose=function(){if(this._bufVertexAttrib&&this._bufVertexAttrib.buffer)this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);if(this._bufVerticesIndizes)this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);this._bufVerticesIndizes=null;this._disposeAttributes()};se(R);const G={};G.getSimpleRect=function(e,t){const n=new p(t);n.vertices=[1,1,0,-1,1,0,1,-1,0,-1,-1,0];n.texCoords=[1,1,0,1,1,0,0,0];n.verticesIndices=[0,1,2,2,1,3];n.vertexNormals=[0,0,0,0,0,0,0,0,0,0,0,0];return new R(e,n)};G.getSimpleCube=function(e,t){const n=new p(t);n.vertices=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1];n.setTexCoords([0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0]);n.verticesIndices=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];n.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]);n.tangents=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1]);n.biTangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]);return new R(e,n)};class oe{constructor(e,t,n){this.cgl=e;this._options=n;this.fb=null;let i=n.shader;this._useDefaultShader=true;if(n.shader)this._useDefaultShader=false;n.numRenderBuffers=n.numRenderBuffers||1;if(!i){i="".endl()+"IN vec2 texCoord;";for(let e=0;e<n.numRenderBuffers;e++){i=i.endl()+"UNI sampler2D tex"+e+";".endl()}i=i.endl()+"void main()".endl()+"{";if(n.numRenderBuffers==1){i=i.endl()+"    outColor= texture(tex0,texCoord);".endl()}else for(let e=0;e<n.numRenderBuffers;e++){i=i.endl()+"outColor"+e+" = texture(tex"+e+",texCoord);".endl()}i=i.endl()+"}"}const r=n.vertexShader||"".endl()+"IN vec3 vPosition;".endl()+"IN vec2 attrTexCoord;".endl()+"OUT vec2 texCoord;".endl()+"void main()".endl()+"{".endl()+"   texCoord=attrTexCoord;".endl()+"   gl_Position = vec4(vPosition,  1.0);".endl()+"}";this.bgShader=new CGL.Shader(e,"corelib copytexture "+t);this.bgShader.setSource(r,i);if(!n.vertexShader)this.bgShader.ignoreMissingUniforms=true;new CGL.Uniform(this.bgShader,"t","tex",0);new CGL.Uniform(this.bgShader,"t","tex1",1);new CGL.Uniform(this.bgShader,"t","tex2",2);new CGL.Uniform(this.bgShader,"t","tex3",3);this.mesh=G.getSimpleRect(this.cgl,"texEffectRect")}setSize(e,t){this._options.width=e;this._options.height=t}copy(e,t,n,i,r){const s=this.cgl;if(!e)e=CGL.Texture.getEmptyTexture(this.cgl);let o=this._options.width||e.width,a=this._options.height||e.height;if(this.fb){if(o<=0)o=8;if(a<=0)a=8;if(this.fb.getWidth()!=o||this.fb.getHeight()!=a)this.fb.setSize(o,a)}else{let e=CGL.Texture.FILTER_LINEAR;let t=CGL.Texture.WRAP_CLAMP_TO_EDGE;if(this._options.isFloatingPointTexture)e=CGL.Texture.FILTER_NEAREST;if(this._options.hasOwnProperty("filter"))e=this._options.filter;if(this._options.hasOwnProperty("wrap"))t=this._options.wrap;const l={isFloatingPointTexture:this._options.isFloatingPointTexture,pixelFormat:this._options.pixelFormat,numRenderBuffers:this._options.numRenderBuffers||1,filter:e,wrap:t};if(s.glVersion==1)this.fb=new CGL.Framebuffer(s,o,a,l);else this.fb=new CGL.Framebuffer2(s,o,a,l)}s.frameStore.renderOffscreen=true;this.fb.renderStart(s);s.setTexture(0,e.tex);if(t)s.setTexture(1,t.tex);if(n)s.setTexture(2,n.tex);if(i)s.setTexture(3,i.tex);if(r)s.setTexture(4,r.tex);s.pushShader(this.bgShader);this.mesh.render(this.bgShader);s.popShader();this.fb.renderEnd();s.frameStore.renderOffscreen=false;return this.fb.getTextureColor()}dispose(){if(this.fb)this.fb.dispose();if(this.bgShader)this.bgShader.dispose();if(this.mesh)this.mesh.dispose()}}CGL.CopyTexture=oe;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Copytexture=e.Copytexture})();