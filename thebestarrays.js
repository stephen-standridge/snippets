window.SpecialArray = (function() {
	function SpecialArray() {
		var special = Object.create( Array.prototype);
		special = (Array.apply(special, arguments) || special);
		SpecialArray.injectClassMethods(special);
		return(special);
	};
	SpecialArray.injectClassMethods = function(special) {
		for(var method in SpecialArray.prototype) {
			if(SpecialArray.prototype.hasOwnProperty(method)){
				special[method] = SpecialArray.prototype[method];
			}	
		}
		return(special);
	};
	SpecialArray.fromArray = function( array ){
        var special = SpecialArray.apply( null, array );
        return( special );
    };
 
    SpecialArray.isArray = function( value ){
        var stringValue = Object.prototype.toString.call( value );
        return( stringValue.toLowerCase() === "[object array]" );
    };
    Object.defineProperty(Object.prototype, 'add', {
    	enumerable : false, 
    	value : function(key, value) {this[key] = value;}
    });
    Object.defineProperty(Object.prototype, 'remove', {
    	enumerable : false, 
    	value : function (key) {
    		for (var i = Object.keys(this).length; i--;) {		
       			 if (Object.keys(this)[i] == key) {
       			 	return delete this[Object.keys(this)[i]];
       			 }
    		}
   	 	}
    });
    Object.defineProperty(Object.prototype, 'contains', {
    	enumerable : false, 
    	value : function (key) {
    		for (var i = Object.keys(this).length; i--;) {
       			if (this[key] != undefined)  return true;
    		}
    		return false;
    	}
    });
    Object.defineProperty(Object.prototype, 'cycle', {
    	enumerable : false, 
    	value : function (direction) {
    		var from = this[0],
    			end = this.length - 1;
    		if(direction == 'forward'){
    			var to = this[1];
    			this.shift();
    			this.push(from);
    			console.log('shifted forward from: '+from+'  shifted to: '+to);
    			return from;
    		} else if(direction == 'backward'){
    			var to = this[end];
    			this.unshift(to);
    			console.log('shifted backward from: '+from+'  shifted to: '+to);
    			return from;
    		} 
    	}
    });
     Object.defineProperty(Object.prototype, 'populate', {
    	enumerable : false, 
    	value : function (elements) {
    		for(var i in elements){
    			if(isNumeric(i)){
    				this.push(elements[i]);
    				count++;
    			} else {
    				this[i] = elements[i];
    				count++;
    			}
    		}
    		console.log('populated '+count+' elements to the special array');
    		return false;
    	}
    });
    return (SpecialArray);
}).call( {} );


var thecreatedarray = new SpecialArray();