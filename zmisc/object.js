let user = {
	age: 54,
	name: 'Carol',
	magic: true,
	scream: function(){
		console.log('ah!');
	}
}

user.age //54
user.spell = 'abra kadabra';  //now add spell to object
user.scream(); //prints ah!

