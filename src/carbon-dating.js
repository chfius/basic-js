const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw 'Not implemented';
  // remove line with error and write your code here
  return ((typeof (sampleActivity) !== 'string') || 
          (isNaN(parseFloat(sampleActivity))) ||
          (sampleActivity <= 0) || (sampleActivity > 15)) ?
      false :        
      Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
