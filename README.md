# just-cookie

Just a simply cookie manager. If you are using it, you are really crazy.

## Installing

In package.json:

```json
"dependencies": {
  "just-cookie": "https://github.com/Bekert/just-cookie.git"
}
```

For require in JS file:

```js
import Cookie from 'just-cookie'
```

## Using

Method `get(cookieName)` return cookie value:

```js
// Cookie on page: token=123
Cookie.get('token') // return 123
```

Method `getFull(cookieName)` return all cookie body:

```js
// Cookies on page: token=123
Cookie.getFull('token') // return 'token=123'
```

Method `getAll()` return all cookies:

```js
// Cookies on page: token=123; name=Bruce
Cookie.getAll() // return 'token=123; name=Bruce'
```

Method `set(cookieName, cookieValue)` add new cookie:

```js
Cookie.set('token', '123') // add token=123 to cookies
```

Method `remove(cookieName)` remove cookie that said in arguments:

```js
// Cookies on page: token=123
Cookie.remove('token') // remove token=123 from cookies
```

Method `removeAll()` remove all cookies:
```js
removeAll() // just delete all cookies that was 
```




