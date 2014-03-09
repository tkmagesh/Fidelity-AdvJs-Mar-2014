var products = [
	{id:1,name:"pen",cost:10,units:21,category:1},
	{id:6,name:"yen",cost:20,units:11,category:2},
	{id:2,name:"len",cost:60,units:15,category:1},
	{id:8,name:"den",cost:30,units:31,category:2},
	{id:4,name:"zen",cost:12,units:71,category:1},
	{id:7,name:"ken",cost:15,units:12,category:2}
];

function sort(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function sort(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function sort(list,comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if (comparerFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function productValueComparer(p1,p2){
  return (p1.cost * p1.units) - (p2.cost * p2.units);
};

sort(products,productValueComparer);

function filter(list,criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i]))
			result.push(list[i]);
	return result;
}

var costlyProducts = filter(products,function(p){ return p.cost > 20; });

function all(list,criteriaFn){
	for(var i=0;i<list.length;i++)
		if (!criteriaFn(list[i])) return false;
	return true;
}

function any(list,criteriaFn){
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i])) return true;
	return false;	
}

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]

function join(leftList,rightList,leftKeySelectorFn,rightKeySelectorFn,keyComparerFn, resultProducerFn){
	var result  = [];
	for(var i=0;i<leftList.length;i++)
		for(var j=0;j<rightList.length;j++){
			var leftKey = leftKeySelectorFn(leftList[i]);
			var rightKey = rightKeySelectorFn(rightList[j]);
			if (keyComparerFn(leftKey,rightKey) === 0){
				result.push(resultProducerFn(leftList[i],rightList[j]));
			}
		}
	return result;
}

var prodAndCategory = join(products,categories
	,function(p){ return p.category;}
	, function(c){ return c.id;}	,function(pid,cid){ return pid - cid;}
	,function(p,c){ return { id: p.id, name : p.name, cost: p.cost, units : p.units, category : c.name};}
);

function bind(fn,context){
   return function(){
       return fn.apply(context,Array.prototype.slice.call(arguments));
   }
}