function first(){
    // Mô phỏng delay code
    setTimeout( function(){
        console.log("Một");
    }, 5000 );
}
function second(){
    console.log("Hai");
}
// first();
// second();


function doFirst(subject, callback) {
    console.log(`Mot`);
    callback();
}

doFirst('math', function() {
    console.log('Hai');
});


/** this is a callback hell **/

function doTasks(){
	setTimeout(function(){
		console.log('task 1');
		setTimeout(function(){
			console.log('task 2');
			setTimeout(function(){
				console.log('task 3');
				setTimeout(function(){
					console.log('task 4');
				}, 800)
			}, 700)
		}, 600)
	}, 500)
}

doTasks()