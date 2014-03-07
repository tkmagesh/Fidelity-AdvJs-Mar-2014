function SalaryCalculator(){
		var _changeSubscribers = {},
			_basic = 0,
			_hra = 0,
			_da = 0,
			_tax = 0;

		this.canBeCalculated = function(){
			return _basic > 0 && _hra > 0 && _da > 0;
		}

		this.basic = function(val){
			if (typeof val === "undefined") return _basic;
			_basic = val;
			triggerChange('basic');
			triggerChange('canBeCalculated');
		};

		this.hra  = function(val){
			if (typeof val === "undefined") return _hra;
			_hra = val;
			triggerChange('hra');
			triggerChange('canBeCalculated');
		};
		this.da  = function(val){
			if (typeof val === "undefined") return _da;
			_da = val;
			triggerChange('da');
			triggerChange('canBeCalculated');
		};
		this.tax  = function(val){
			if (typeof val === "undefined") return _tax;
			_tax = val;
			triggerChange('tax');
		};
		//this.onSalaryChange = function(){};
		this.addOnChange = function(attrName,callbackFn){
			if (typeof _changeSubscribers[attrName] === "undefined") 
				_changeSubscribers[attrName] = [];
			_changeSubscribers[attrName].push(callbackFn);
		};
		this.calculate = function(){
			if (this.canBeCalculated()){
				var gross = this.basic() + this.hra() + this.da(),
					net = gross * ((100-this.tax())/100);
				this.salary = net;
				triggerChange('salary');
			}
		}
		function triggerChange(attrName){
			var callbacks = _changeSubscribers[attrName] || [];
			callbacks.forEach(function (cb){
				setTimeout(cb);
			});
			/*for(var i=0;callbacks && i < callbacks.length;i++){
				setTimeout((function(index){
					return function(){
						console.log("value of i =",index);
						var callback = callbacks[index];	
						callback();
					}
				})(i));
			}*/
		}
	}