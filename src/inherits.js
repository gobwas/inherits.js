var extend = require("./utils/extend");

module.exports = function(Parent, protoProps, staticProps) {
    var Child;

    protoProps  = protoProps  || {};
    staticProps = staticProps || {};

    if (protoProps.hasOwnProperty("constructor") && typeof protoProps.constructor === 'function') {
        Child = protoProps.constructor;
    } else {
        Child = function() {
            Parent.apply(this, arguments);
        };
    }

    // set the static props to the new Enum
    extend(Child, Parent, staticProps);

    // create prototype of Child, that created with Parent prototype
    // (without making Child.prototype = new Parent())
    //
    // __proto__  <----  __proto__
    //     ^                 ^
    //     |                 |
    //   Parent            Child
    //
    function Surrogate(){}
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();

    // extend prototype
    extend(Child.prototype, protoProps, {
        constructor: Child
    });


    return Child;
};