new Vue({
    el: '#app',
    data: {
        lists: [ ],        
		nameKeep: '',
		surnKeep: '',
		emailKeep: '',
		dateKeep: '',
		disable : false
	},
    methods: {

		addKeep: function() {
			this.lists.push({ nameKeep: this.nameKeep, surnKeep: this.surnKeep, emailKeep: this.emailKeep, dateKeep: this.dateKeep, selected: false});
			this.nameKeep = '';
			this.surnKeep = '';
			this.emailKeep = '';
			this.dateKeep = '';
		},

		delKeep: function(index){
			this.lists.splice (index, 1);
		},

		formRequired: function (){
			if (this.nameKeep.length < 3 && this.nameKeep.length < 3) {
				return disable;
			} else {
				return !disable;
			}
		}
	}
});