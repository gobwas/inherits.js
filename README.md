# inherits.[js](https://developer.mozilla.org/en-US/docs/JavaScript)

> Backbone inspired standalone inheritance function.

Inherits.js is a yet another tool for inheritance, inspired by [Backbone](https://backbonejs.org)'s ```extend``` method.
It creates Child constructor function with prototype chained from parent and with extended parent's static properties.

## Getting started

Inherits.js is compatible in any module environment (AMD, CJS) or just as global function in browser, if nor defined.

You could install it via npm, or download directly from ```dist``` folder.

## Usage

```javascript

var MyParentClass,
    MyChildClass;

MyParentClass = function() {
  // ...
}

MyParentClass.prototype = {
    method: function() {
        //
    },

    extend: function(protoProps, staticProps) {
        return inherits(this, protoProps, staticProps);
    }
}

MyChildClass = MyParentClass.extend({
    method: function() {
        //
    }
});

MyAnotherClass = inherits(MyParentClass, {
    constructor: function() {
        //
    },

    method: function() {
        //
    }
}, {
    STATIC: 1
});

```
