const pathRegexp: RegExp = /\/[^\s]+/gm
const domainRegexp: RegExp = /(\*?|\.\*?)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/gm

interface CookieParams {
    path?: string
    domain?: string
    expires?: Date
    maxAge?: number
    secure?: boolean
}

class Cookie {
    static get(cookieName: string) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        const cookieBody: RegExpMatchArray | null = document.cookie.match(
            new RegExp(`${cookieName}=(.*?)(?:; |$)`)
        )
        if (!cookieBody) {
            return console.error('JustCookieError: this cookie is not found')
        }
        return cookieBody[1]
    }

    static getFull(cookieName: string) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        const cookie: RegExpMatchArray | null = document.cookie.match(
            new RegExp(`${cookieName}=(.*?)(?:; |$)`)
        )

        if (!cookie) {
            return console.error('JustCookieError: this cookie is not found')
        }
        return cookie[0]
    }

    static getAll() {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        return document.cookie
    }

    static add(
        cookieName: string,
        cookieValue: string,
        { path, domain, expires, maxAge, secure }: CookieParams = {}
    ) {
        if (this.get(cookieName)) {
            return console.error(
                'JustCookieError: this cookie already exsist. For rewriting use method setWithRewrite()'
            )
        }

        let cookie: string = `${cookieName}=${cookieValue}`

        const cookieParams: CookieParams = {
            path,
            domain,
            expires,
            maxAge,
            secure,
        }

        for (const type of Object.keys(cookieParams)) {
            const value: any = cookieParams[type as keyof CookieParams]

            if (value) {
                if (
                    type === 'path' &&
                    value.toString().search(pathRegexp) === -1
                ) {
                    return console.error('JustCookieError: wrong path format')
                }

                if (
                    type === 'domain' &&
                    value.toString().search(domainRegexp) === -1
                ) {
                    return console.error('JustCookieError: wrong domain format')
                }

                if (type === 'secure') {
                    cookie = `${cookie}; secure`
                } else {
                    cookie = `${cookie}; ${type}=${value}`
                }
            }
        }

        document.cookie = cookie
    }

    static set(cookieName: string, cookieValue: string) {
        if (!this.get(cookieName)) {
            return console.error(
                'JustCookieError: this cookie does not exsist. For adding new cookie use method set()'
            )
        }
        document.cookie = `${cookieName}=${cookieValue}`
    }

    static remove(cookieName: string) {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        if (!this.get(cookieName)) {
            return console.error('JustCookieError: this cookie is not found')
        }
        document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }

    static removeAll() {
        if (!document.cookie) {
            return console.error('JustCookieError: cookies are not found')
        }
        const cookies: string[] = document.cookie.split(';')
        for (let cookie of cookies) {
            const cookieName: RegExpMatchArray | null = cookie.match(/(.*)=/)
            if (!cookieName) {
                return console.error(
                    'JustCookieError: some cookie are not found'
                )
            }
            document.cookie = `${cookieName[1]}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
        }
    }
}

export default Cookie
