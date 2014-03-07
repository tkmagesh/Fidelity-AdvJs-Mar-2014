function SalaryCalculatorView(model, templateId){
		var calculator = model,
			_templateId = templateId;

		this.init = function(){
			this.$el = $("<div>");

			this.$el.on("change","#txtBasic",function(){
				calculator.basic(parseInt(this.value));
			});
			this.$el.on("change","#txtHra",function(){
				calculator.hra(parseInt(this.value));
			});
			this.$el.on("change","#txtDa",function(){
				calculator.da(parseInt(this.value));
			});
			this.$el.on("change","#rangeTax",function(){
				calculator.tax(parseInt(this.value));
			});
			//

			//View Action
			this.$el.on("click","#btnCalculate",function(){
				calculator.calculate();
				
			});

		}

		this.render = function(){

			this.$el.append($(_templateId).html());

			this.$el.find("#btnCalculate").attr("disabled", !calculator.canBeCalculated());
			this.$el.find("#divResult").html(calculator.salary);
			this.$el.find("#txtBasic").val(calculator.basic());
			this.$el.find("#txtHra").val(calculator.hra());
			this.$el.find("#txtDa").val(calculator.da());
			this.$el.find("#rangeTax").val(calculator.tax());
			this.$el.find("#spanTax").html(calculator.tax());

			calculator.addOnChange("canBeCalculated",utils.bind(function(){
				this.$el.find("#btnCalculate").attr("disabled", !calculator.canBeCalculated());
			},this));

			calculator.addOnChange('salary', utils.bind(function(){
				this.$el.find("#divResult").html(calculator.salary);
			},this));

			calculator.addOnChange('basic',utils.bind(function(){
				this.$el.find("#txtBasic").val(calculator.basic());
			},this));
			
			calculator.addOnChange('hra',utils.bind(function(){
				this.$el.find("#txtHra").val(calculator.hra());
			},this));

			calculator.addOnChange('da',utils.bind(function(){
				this.$el.find("#txtDa").val(calculator.da());
			},this));

			calculator.addOnChange('tax',utils.bind(function(){
				this.$el.find("#rangeTax").val(calculator.tax());
				this.$el.find("#spanTax").html(calculator.tax());
			},this));

			return this;
		}

		this.remove = function(){
			this.$el.remove();
			//this.init();
		}

	}