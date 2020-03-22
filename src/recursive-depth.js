module.exports = class DepthCalculator {
    calculateDepth(arr) {
        //throw 'Not implemented';
        // remove line with error and write your code here
    
        let arrMax = [];
        
        function calcDepth(arrCheck,n) {        
            n++;
            arrCheck.forEach(element => {
                if (Array.isArray(element)) {                        
                    calcDepth(element,n);                            
                }
            });
            arrMax.push(n);  
        }
        arr.forEach(element => {
            let k = 1;
            if (Array.isArray(element)) {                       
                calcDepth(element,k);            
            }
            arrMax.push(k);
        });
        return Math.max(...arrMax);    
    }
}