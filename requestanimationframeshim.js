
////////Request Animation Frame Shim///////
(function () {
   window.performance = (window.performance || {});

   window.performance.now = (function () {
      return (
         window.performance.now ||
         window.performance.webkitNow ||
         window.performance.msNow ||
         window.performance.mozNow ||
         Date.now ||
         function () {
            return +new Date();
         });
   })();

   window.requestAnimationFrame = (function () {
      return (
         window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function (callback) {
            return setTimeout(function () {
               var time = window.performance.now();
               callback(time);
            }, 16);
         });
   })();


   window.cancelAnimationFrame = (function () {
      return (
         window.cancelAnimationFrame ||
         window.webkitCancelAnimationFrame ||
         window.msCancelAnimationFrame ||
         window.mozCancelAnimationFrame ||
         function (id) {
            clearTimeout(id);
         });
   })();
})();