function SalaryCalculator(basic,hra,da,tax){
  this.basic = basic;
  this.hra = hra;
  this.da = da;
  this.tax = tax;
}

SalaryCalculator.prototype.calculate = function(){
     var gross = this.basic + this.hra + this.da;
     return gross * ((100-tax)/100);
  }