interface CookieParams {
    path?: string;
    domain?: string;
    expires?: Date;
    maxAge?: number;
    secure?: boolean;
}
declare class Cookie {
    static get(cookieName: string): string | void;
    static getFull(cookieName: string): string | void;
    static getAll(): string | void;
    static add(cookieName: string, cookieValue: string, { path, domain, expires, maxAge, secure }?: CookieParams): void;
    static set(cookieName: string, cookieValue: string, { path, domain, expires, maxAge, secure }?: CookieParams): void;
    static remove(cookieName: string): void;
    static removeAll(): void;
}
export default Cookie;
