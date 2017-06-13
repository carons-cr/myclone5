module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    	    console.log('o) 最小值 = '+sequence.minimum()
    	    +'o) 最大值 = '+sequence.maxmum()
    	    +'o) 元素数量 = '+sequence.count()
    	    +'o) 平均值 = '+sequence.avg());  	   
    };

    function Sequence(input){
	    	  var array=new Array();
	    	  array=input;
	    	  Sequence.prototype.minimum=function() {
		    	       var minimum=array[0];
		    	       for(var i=0;i<array.length;i++){
		    	    	    if(array[i]<minimum){
		    	    	    	minimum=array[i];
		    	    	    }
		    	       }
                               alert("\n");
		    	       return minimum;
	    	  };
	    	  Sequence.prototype.maxmum=function(){
		    		  var maxmum=array[0];
		    	       for(var i=0;i<array.length;i++){
		    	    	    if(array[i]>maxmum){
		    	    	    	maxmum=array[i];
		    	    	    }
		    	       }
                               alert("\n");
		    	       return maxmum;
	    	  };
	    	  Sequence.prototype.count=function(){
		    		   var count=array.length;
                                   alert("\n");
		    		   return count;
	    	  }
	    	  Sequence.prototype.avg=function(){
	    		      var sum=0;
	    		      var avg=0;
		    		  for(var i=0;i<array.length;i++){
		    	    	     sum=sum+array[i];
		    	       }
		    		  avg=(sum/(array.length)).toFixed(2);
                                  alert("\n");
		    		  return avg;
	    	  };
  	};