const accountId=144553
let accountEmail="lavish@google.com"
var accountPassword="12345"
accountCity="Delhi"
let accountState;

// accountId=2 // not allowed

accountEmail="lavish@lavish.com"
accountPassword="21212121"
accountCity="Pune"

/* var prefer not to use
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])