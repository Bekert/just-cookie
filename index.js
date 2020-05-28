const pathRegexp = /\/[^\s]+/gm
const domainRegexp = /(\*?|\.\*?)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/gm

class Cookie {
    static get(cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        const cookieBody = document.cookie.match(
            new RegExp(`${cookieName}=(.*?)(?:; |$)`)
        )[1]
        if (!cookieBody) {
            return console.error('JustCookieError: this cookie is not found')
        }
        return cookieBody
    }

    static getFull(cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        const cookie = document.cookie.match(
            new RegExp(`${cookieName}=(.*?)(?:; |$)`)
        )[0]
        if (!cookie) {
            return console.error('JustCookieError: this cookie is not found')
        }
        return cookie
    }

    static getAll() {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        return document.cookie
    }

    static add(
        cookieName,
        cookieValue,
        { path, domain, expires, maxAge, secure }
    ) {
        if (this.get(cookieName)) {
            return console.error(
                'JustCookieError: this cookie already exsist. For rewriting use method setWithRewrite()'
            )
        }
        let cookie = `${cookieName}=${cookieValue}`

        const types = ['path', 'domain', 'expires', 'maxAge', 'secure']

        const array = [path, domain, expires, maxAge, secure]

        for (let param in array) {
            const value = array[param]
            if (value) {
                if (+param === 0 && value.search(pathRegexp) === -1) {
                    return console.error('JustCookieError: wrong path format')
                }
                if (+param === 1 && value.search(domainRegexp) === -1) {
                    return console.error('JustCookieError: wrong domain format')
                }

                const type = types[param]
                cookie = `${cookie}; ${type}=${value}`
            }
        }

        return cookie
    }

    static set(cookieName, cookieValue) {
        if (!this.get(cookieName)) {
            return console.error(
                'JustCookieError: this cookie does not exsist. For adding new cookie use method set()'
            )
        }
        document.cookie = `${cookieName}=${cookieValue}`
    }

    static remove(cookieName) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        if (!cookie) {
            return console.error('JustCookieError: this cookie is not found')
        }
        document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }

    static removeAll() {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        const cookies = document.cookie.split(';')
        for (let cookie of cookies) {
            const cookieName = cookie.match(/(.*)=/)[1]
            document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
        }
    }
}

module.exports = Cookie
