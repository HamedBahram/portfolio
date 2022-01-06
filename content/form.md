<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 0.329 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β31
* Thu Jan 06 2022 08:12:16 GMT-0800 (PST)
* Source doc: blog #3 - forms
----->

**Html forms **

When you submit a form, it will make an HTTP request to the endpoint specified in the “action” attribute and the HTTP verb specified in the “method” attribute.

**GET**

If the method is set to “GET”, the form will append the form data (name=value pairs from the form input fields) to the URL (set in “action” attribute) as a query string denoted with “?” character, and sends a GET request to that endpoint. Therefore on your server, the information sent by the form is available via the request.query object.

```
<form action="/api/users" method="GET">
    <input type="text" name="name">
    <button type="submit">submit</button>
</from>
```

If you don’t set the action field, or set it to #, the form will hit the current page URL which refreshes the page but with the form data appended as a query string in the URL.

If you set the action field to a different page in your application, you can parse the key-value pairs out of the query string from the URL using the URLSearchParams interface:

```
const queryString = new URLSearchParams(window.location.search)
const name = queryString.get('name')

for (const [key, value] of queryString) {
    console.log(`${key}: ${value}`)
}
```

window.location is the location (URL address) of the current document and the window.location.search will return the query string portion of the URL including the “?” character.

**POST**

If the method is set to “POST”, the form will make a post request to the endpoint defined in the “action” attribute, but it will not attach form data as URL parameters, instead, key=value pairs are embedded in the body of the request with the same URL encoding structure e.g. key=value&anotherKey=anotherValue.

Therefore the information sent to the server would be accessible via the request.body but only if your server is able to parse requests with URL-encoded bodies. You can use body-parser middleware to enable parsing URL encoded bodies on your server.

**Handling form data**

Generally speaking, you would handle the form data with javascript rather than the form making requests to your application. In which case, you need to prevent the default from behaviour upon submission.

```
form.addEventListener("submit", event => {
    event.preventDefault()
    fetch(endpoint, {settings object})
})
```
