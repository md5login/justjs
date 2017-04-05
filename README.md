# JUSTJS
Plug'n'Play ES6 MV framework that doesn't need environment setup. It allows you to build scalable and strong data-responsive applications with "cutting edge" technologies. As well, the framework helps you to synchronize your data with your back-end easily.

## Classes: [`Base`](#Class.Base), [`Model`](#Class.Model), [`Collection`](#Class.Collection), [`View`](#Class.View)

### <a name="Class.Base">[`Base`](/JustJS/Base.js)</a>

#### Methods
* [.on()](#Base.on)
* [.off()](#Base.off)
* [.once()](#Base.once)
* [.fire()](#Base.fire)

##### <a name="Base.on">Syntax:</a> `.on(event, handler[, context])`

Add event listener to `Base` instance.

<b>arguments:</b>

| Name | Type | Mandatory | Description |
| ---  | ---  | ---  | --- |
|`event`| {String} | Yes | Any string you expect to be fired by the instance |
|`handler`| {Function} | Yes | Handling function to be invoked when the event is fired |
|`context`| {Object} | No | The context you want to apply on the handler |


###### example
```javascript
import Base from "PATH_TO_JUSTJS/Base.js"

let baseInstance = new Base();
baseInstance.on("error", console.log, console);

// Notice! Anonymous functions can be removed with the removal of the whole event only
baseInstance.on("info", (timestamp, msg) => {logger.log(`${timestamp}: ${msg}`) } );

let setHTML = function(html) {
    this.innerHTML = html;
};
let element1 = document.querySelector( "#id1" );
let element2 = document.querySelector( "#id2" );
// Same handler with different contexts
baseInstance.on("html", setHTML, element1 );
baseInstance.on("html", setHTML, element2 );
```
---
##### <a name="Base.off">Syntax:</a> `.off([event[, handler[, context]]])`

Remove event listener from `Base` instance

<b>arguments</b>

| Name | Type | Mandatory | Description |
| ---  | ---  | -------  | --- |
|`event`| {String} | No | Any type of event you want to stop listen to. **If no event is passed, all the event listeners will be removed** |
|`handler`| {Function} | No | A specific handler you want to remove from listeners. **If no handler is passed, removes all the listeners for the event** |
|`context`| {Object} | No | A specific combination of handler-context you would like to remove. **If no context is given, removes handler with all bound contexts** |

###### example
```javascript
// remove console.log from "error" listeners under any context
baseInstance.off("error", console.log);

// remove any "info" listeners
baseInstance.off("info");

// remove setHTML under element2 context from "html" listeners only
baseInstance.off("html", setHTML, element2);

// remove all listeners
baseInstance.off();
```
---

##### <a name="Base.once">Syntax:</a> `.once(event, handler[, context])`

Acts just like `.on(...args)`, but removes itself after first execution

###### example
```javascript
baseInstance.once("error", console.log, console);
```
---

##### <a name="Base.fire">Syntax:</a> `.fire(event[, ...data])`

Fires an event with comma-separated arguments

<b>arguments:</b>

| Name | Type | Mandatory | Description |
| ---  | ---  | ---  | --- |
|`event`| {String} | Yes | Up to your imagination |
|`...data`| Any type, comma-separated | No | The arguments you want to be passed to the handlers |

###### example
```javascript
baseInstance.fire("error", Date.now(), "An error occurred");

baseInstance.fire("info", Date.now(), "I'm fine");

baseInstance.fire("html", "<div>Hello, world!</div>");

baseInstance.fire("not registered event");
```
---


### <a name="Class.Model">[`Model`](/JustJS/Model.js)</a>


### <a name="Class.Collection">[`Collection`](/JustJS/Collection.js)</a>


### <a name="Class.View">[`View`](/JustJS/View.js)</a>