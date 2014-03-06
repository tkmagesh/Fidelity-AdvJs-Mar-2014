function Employee(id,name,salary){
   var _id = id,
       _name = name,
       _salary = salary;
   this.id = function(val){
       if (typeof val === "undefined") return _id;
       if (val > 0 ) _id = val;
   };
   this.name = function(val){
       if (typeof val === "undefined") return _name;
       if (val.length > 0) _name = val;
   };
   this.salary = function(val){
       if (typeof val === "undefined") return _salary;
       if (val > _salary) _salary = val;
   };
}


var spinner = new Spinner();
spinner.up()
spinner.up()

spinner.down()
