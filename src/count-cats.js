module.exports = function countCats(n/* matrix */) {  
  //throw 'Not implemented';
  // remove line with error and write your code here
  let count = 0;
  function arrayResizer(e) {
      if ((typeof (e) === 'object') && (e !== null)) {
          e.forEach(elem => {
              arrayResizer(elem);
          });
      } else {
          if (e === '^^') { count++ };
          return e;
      }
  }
  if (n.length !== 0) {
      n.forEach(element => {
          arrayResizer(element);
      });
  }
  return count;
};
