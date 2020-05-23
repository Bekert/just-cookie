# just-cookie

Just a simple JS cookie manager. If you are using it, you are really crazy.

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

Method `set(cookieName, cookieValue)` add new cookie:

```js
Cookie.set('token', '123') // add token=123 to cookies
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




