const is={}

    // Check if value is a number (and not NaN)
   is.num= function(value) {
        return typeof value === 'number'}
   

    // Check if value is NaN (Not a Number)
    is.nan= function(value) {
    return Number.isNaN(value)
}

   

    // Check if value is a string
    is.str= function(value) {
        return typeof value === 'string'}
   

    // Check if value is a boolean
   is.bool= function(value) {
        return typeof value === 'boolean'}
   

    // Check if value is undefined
   is.undef= function(value) {
        return  value === 'undefined'}
   

    // Check if value is defined (not undefined)
   is.def= function(value) {
        return  value !== 'undefined'}
   

    // Check if value is an array
   is.arr= function(value) {
        return Array.isArray(value)}
   

    // Check if value is a simple object or null
   is.obj= function(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value)}
   

    // Check if value is a function
  is.fun= function(value) {
        return typeof value === 'function'}
   

    // Check if value is truthy
  is.truthy= function(value) {
        return !!value}
   

    // Check if value is falsy
   is.falsy= function(value) {
        return !value}
    

