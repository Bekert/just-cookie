"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pathRegexp = /\/[^\s]+/gm;
var domainRegexp = /(\*?|\.\*?)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/gm;
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Cookie.get = function (cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        var cookieBody = document.cookie.match(new RegExp(cookieName + "=(.*?)(?:; |$)"));
        if (!cookieBody) {
            return console.error('JustCookieError: this cookie is not found');
        }
        return cookieBody[1].toString();
    };
    Cookie.getFull = function (cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        var cookie = document.cookie.match(new RegExp(cookieName + "=(.*?)(?:; |$)"));
        if (!cookie) {
            return console.error('JustCookieError: this cookie is not found');
        }
        return cookie[0].toString();
    };
    Cookie.getAll = function () {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        return document.cookie.toString();
    };
    Cookie.add = function (cookieName, cookieValue, _a) {
        var _b = _a === void 0 ? {} : _a, path = _b.path, domain = _b.domain, expires = _b.expires, maxAge = _b.maxAge, secure = _b.secure;
        if (this.get(cookieName)) {
            return console.error('JustCookieError: this cookie already exsist. For rewriting use method setWithRewrite()');
        }
        var cookie = cookieName + "=" + cookieValue;
        var cookieParams = {
            path: path,
            domain: domain,
            expires: expires,
            maxAge: maxAge,
            secure: secure,
        };
        for (var _i = 0, _c = Object.keys(cookieParams); _i < _c.length; _i++) {
            var type = _c[_i];
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
        document.cookie = cookie;
    };
    Cookie.set = function (cookieName, cookieValue, _a) {
        var _b = _a === void 0 ? {} : _a, path = _b.path, domain = _b.domain, expires = _b.expires, maxAge = _b.maxAge, secure = _b.secure;
        if (!this.get(cookieName)) {
            return console.error('JustCookieError: this cookie does not exsist. For adding new cookie use method set()');
        }
        var cookie = cookieName + "=" + cookieValue;
        var cookieParams = {
            path: path,
            domain: domain,
            expires: expires,
            maxAge: maxAge,
            secure: secure,
        };
        for (var _i = 0, _c = Object.keys(cookieParams); _i < _c.length; _i++) {
            var type = _c[_i];
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
        document.cookie = cookie;
    };
    Cookie.remove = function (cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        if (!this.get(cookieName)) {
            return console.error('JustCookieError: this cookie is not found');
        }
        document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    };
    Cookie.removeAll = function () {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found');
        }
        var cookies = document.cookie.split(';');
        for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
            var cookie = cookies_1[_i];
            var cookieName = cookie.match(/(.*)=/);
            if (!cookieName) {
                return console.error('JustCookieError: some cookie are not found');
            }
            document.cookie = cookieName[1] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    };
    return Cookie;
}());
exports.default = Cookie;
