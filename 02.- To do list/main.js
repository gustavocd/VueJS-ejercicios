function findById(items, id) {
	for(var i in items) {
		if (items[i].id == id) {
			return items[i];
		}
	}
	return null;
}

Vue.filter('category', function(id) {
	var category = findById(this.categories, id);
	return category != null ? category.category : '';
});

Vue.component('select-category', {
	template: "#select_category_tpl",
	props: ['categories', 'task_id']
});

Vue.component('task-row', {
	template: "#task_row_tpl",
	props: ['task', 'categories'],
	data: function(){
		return {
			editing : false
		};
	},
	methods: {
    	remove: function(){
    		this.$parent.tasks.$remove(this.task);
    	},
		edit: function () {
    		this.editing = true;
    	},
    	update: function(){
    		this.editing = false;
    	}
	}
});

var vm = new Vue({
	el: '#main',
    data: {
    	new_task:{
    		task: '',
    		task_id: ''
    	},
	    tasks: [
	    	{
	    		task: "Go to buy some milk",
	    		task_id: 1
	    	},
	    	{
	    		task: "Learn how to code in VueJS",
	    		task_id: 2
	    	},
	    	{
	    		task: "Watch the football game",
	    		task_id: 3
	    	}
	    ],
	    categories: [
	    	{
	    		id : 1,
	    		category : "Homework"
	    	},
	    	{
	    		id : 2,
	    		category : "Chores"
	    	},

	    	{
	    		id : 3,
	    		category: "Work"
	    	},
	    	{
	    		id : 4,
	    		category: "Hangout"
	    	}
	    ]
    },
    methods: {    	
    	createNote: function() {
    		this.tasks.push(this.new_task);
    		this.new_task = {task: '', task_id: ''};
    	}
    }
});