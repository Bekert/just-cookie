# just-cookie

Just a simple JS cookie manager. If you are using it, you are really crazy.

## Installing

In package.json:

```json
"dependencies": {
  "just-cookie": "https://github.com/Bekert/just-cookie.git"
}
```

Or you can also install source code on releases tab.

For require in JS file:

```js
import Cookie from 'just-cookie'
```

## Usage

Method `get(cookieName)` returns cookie value:

```js
// Cookie on page: token=123
Cookie.get('token') // returns 123
```

Method `getFull(cookieName)` returns all cookie body:

```js
// Cookies on page: token=123
Cookie.getFull('token') // returns 'token=123'
```

Method `getAll()` returns all cookies:

```js
// Cookies on page: token=123; name=Bruce
Cookie.getAll() // returns 'token=123; name=Bruce'
```

Method `add(cookieName, cookieValue, { path, domain, expires, maxAge, secure })` adds new cookie:

```js
Cookie.add("token", "123", {maxAge=3600}) // add token=123; max-age=3600 to cookies
```

Method `set(cookieName, cookieValue, { path, domain, expires, maxAge, secure })` rewrites value in already existing cookie:

```js
// Cookies on pega: token=123
Cookie.set("token", "12345", {path="/admin"}) // change token=123 to token=12345; path=admin
```

Method `remove(cookieName)` remove cookie that said in arguments:

```js
// Cookies on page: token=123
Cookie.remove('token') // removes token=123 from cookies
```

Method `removeAll()` removes all cookies:

```js
Cookie.removeAll()
```
