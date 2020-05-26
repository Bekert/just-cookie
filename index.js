class Cookie {
    static get(cookieName) {
        if (!document.cookie) {
            return console.error("JustCookieError: cookies are not found")
        }
        const cookieBody = document.cookie.match(
            new RegExp(`${cookieName}=(.*?)(?:; |$)`)
        )[1]
        if (!cookieBody) {
            return console.error("JustCookieError: this cookie is not found")
        }
        return cookieBody
    }

    static getFull(cookieName) {
        if (!document.cookie) {
            return console.error("JustCookieError: cookies are not found")
        }
        const cookie = document.cookie.match(
            new RegExp(`${cookieName}=(.*?)(?:; |$)`)
        )[0]
        if (!cookie) {
            return console.error("JustCookieError: this cookie is not found")
        }
        return cookie
    }

    static getAll() {
        if (!document.cookie) {
            return console.error("JustCookieError: cookies are not found")
        }
        return document.cookie
    }

    static set(cookieName, cookieBody) {
        if (this.get(cookieName)) {
            return console.error(
                "JustCookieError: this cookie is already exsist. For rewrite use method setWithRewrite()"
            )
        }
        document.cookie = `${cookieName}=${cookieBody}`
    }

    static setWithRewrite(cookieName, cookieBody) {
        if (!this.get(cookieName)) {
            return console.error(
                "JustCookieError: this cookie does not already exsist. For add new cookie use method set()"
            )
        }
        document.cookie = `${cookieName}=${cookieBody}`
    }

    static remove(cookieName) {
        if (!document.cookie) {
            return console.error("JustCookieError: cookies are not found")
        }
        if (!cookie) {
            return console.error("JustCookieError: this cookie is not found")
        }
        document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }

    static removeAll() {
        if (!document.cookie) {
            return console.error("JustCookieError: cookies are not found")
        }
        const cookies = document.cookie.split(";")
        for (let cookie of cookies) {
            const cookieName = cookie.match(/(.*)=/)[1]
            document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
        }
    }
}

module.exports = Cookie
