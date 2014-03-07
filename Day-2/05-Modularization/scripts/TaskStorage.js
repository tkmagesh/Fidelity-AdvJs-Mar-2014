define(['Task'],function(Task){
	function TaskStorage(){
		this.storage = window.localStorage;
	}
	TaskStorage.prototype.add = function(taskName){
		var newId = new Date().getTime().toString();
		this.storage.setItem(newId,taskName);
		return new Task(newId,taskName);
	};
	TaskStorage.prototype.remove = function(id){
		this.storage.removeItem(id);
	};
	TaskStorage.prototype.getAll = function(){
		var tasks = [];
		for(var i=0;i<this.storage.length;i++){
			var id = this.storage.key(i);
			var name = this.storage.getItem(id);
			tasks.push(new Task(id,name));
		}
		return tasks;
	}
	return TaskStorage;
});
