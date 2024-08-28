const is = {
    // Check if value is a number (and not NaN)
    num: function(value) {
        return typeof value === 'number' && !isNaN(value);
    },

    // Check if value is NaN (Not a Number)
    nan: function(value) {
        return typeof value === 'number' && isNaN(value);
    },

    // Check if value is a string
    str: function(value) {
        return typeof value === 'string';
    },

    // Check if value is a boolean
    bool: function(value) {
        return typeof value === 'boolean';
    },

    // Check if value is undefined
    undef: function(value) {
        return typeof value === 'undefined';
    },

    // Check if value is defined (not undefined)
    def: function(value) {
        return typeof value !== 'undefined';
    },

    // Check if value is an array
    arr: function(value) {
        return Array.isArray(value);
    },

    
    obj: function(value) {
        return (value !== null && typeof value === 'object' && !Array.isArray(value));
    },

    
    fun: function(value) {
        return typeof value === 'function';
    },

    truthy: function(value) {
        return !!value;
    },


    falsy: function(value) {
        return !value;
    }
};
