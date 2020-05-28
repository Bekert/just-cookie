var pathRegexp = /\/[^\s]+/gm;
var domainRegexp = /(\*?|\.\*?)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/gm;
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Cookie.get = function (cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        var cookieBody = document.cookie.match(new RegExp(cookieName + "=(.*?)(?:; |$)"))[1];
        if (!cookieBody) {
            return console.error('JustCookieError: this cookie is not found');
        }
        return cookieBody;
    };
    Cookie.getFull = function (cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        var cookie = document.cookie.match(new RegExp(cookieName + "=(.*?)(?:; |$)"))[0];
        if (!cookie) {
            return console.error('JustCookieError: this cookie is not found');
        }
        return cookie;
    };
    Cookie.getAll = function () {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        return document.cookie;
    };
    Cookie.add = function (cookieName, cookieValue, cookieParams) {
        if (this.get(cookieName)) {
            return console.error('JustCookieError: this cookie already exsist. For rewriting use method setWithRewrite()');
        }
        var cookie = cookieName + "=" + cookieValue;
        for (var _i = 0, _a = Object.keys(cookieParams); _i < _a.length; _i++) {
            var type = _a[_i];
            var value = cookieParams[type];
            if (value) {
                if (type === 'path' &&
                    value.toString().search(pathRegexp) === -1) {
                    return console.error('JustCookieError: wrong path format');
                }
                if (type === 'domain' &&
                    value.toString().search(domainRegexp) === -1) {
                    return console.error('JustCookieError: wrong domain format');
                }
                if (type === 'secure') {
                    cookie = cookie + "; secure";
                }
                else {
                    cookie = cookie + "; " + type + "=" + value;
                }
            }
        }
        return cookie;
    };
    Cookie.set = function (cookieName, cookieValue) {
        if (!this.get(cookieName)) {
            return console.error('JustCookieError: this cookie does not exsist. For adding new cookie use method set()');
        }
        document.cookie = cookieName + "=" + cookieValue;
    };
    Cookie.remove = function (cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        // if (!cookie) {
        //     return console.error('JustCookieError: this cookie is not found')
        // }
        document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    };
    Cookie.removeAll = function () {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        var cookies = document.cookie.split(';');
        for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
            var cookie = cookies_1[_i];
            var cookieName = cookie.match(/(.*)=/)[1];
            document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    };
    return Cookie;
}());
module.exports = Cookie;
