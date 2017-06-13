module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    	    console.log('o) 最小值 = '+sequence.minimum()
    	    +'\no) 最大值 = '+sequence.maxmum()
    	    +'\no) 元素数量 = '+sequence.count()
    	    +'\no) 平均值 = '+sequence.avg());  	   
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
		    	       return minimum;
	    	  };
	    	  Sequence.prototype.maxmum=function(){
		    		  var maxmum=array[0];
		    	       for(var i=0;i<array.length;i++){
		    	    	    if(array[i]>maxmum){
		    	    	    	maxmum=array[i];
		    	    	    }
		    	       }
		    	       return maxmum;
	    	  };
	    	  Sequence.prototype.count=function(){
		    		   var count=array.length;
		    		   return count;
	    	  }
	    	  Sequence.prototype.avg=function(){
	    		      var sum=0;
	    		      var avg=0;
		    		  for(var i=0;i<array.length;i++){
		    	    	     sum=sum+array[i];
		    	       }
		    		  avg=(sum/(array.length)).toFixed(2);
		    		  return avg;
	    	  };
  	};