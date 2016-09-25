(function () {
'use strict';

angular.module('NarrowItDownApp', ['Loader']);

angular.module('NarrowItDownApp')
.config(function () {
  console.log("NarrowItDownApp config fired.");
})
.run(function () {
  console.log("NarrowItDownApp run fired.");
});

})();
