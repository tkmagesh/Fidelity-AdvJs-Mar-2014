define(['TaskStorage','jquery'],function(TaskStorage,$){
	return function TaskUI(){
		this.init = function(){
			var storage = new TaskStorage();
			$("#btnAdd").click(onBtnAddClick);
			$("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
			$("#ulTaskList").on("click","li",onTaskItemClick);
			loadTasksFromStorage();

			function loadTasksFromStorage(){
				var tasks = storage.getAll();
				tasks.forEach(addTaskToUi);
			}
			function onBtnAddClick(){
				var newTask = storage.add($("#txtTask").val());
				addTaskToUi(newTask);
			}

			function addTaskToUi(task){
				$("<li></li>")
					.attr("task-id",task.id)
					.html(task.name)
					.appendTo("#ulTaskList");
			}

			function onTaskItemClick(){
				$(this).toggleClass("completed");
			}

			function onBtnRemoveCompletedClick(){
				$("#ulTaskList > li.completed").each(function(){
					storage.remove($(this).attr("task-id"));
				});
			}
		}
	}
});