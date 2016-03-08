var task = require('ms-task')

if (process.argv.length < 3){
	throw new Error('Usage: killall NAME (eg node.exe)')
}

task.pidOf( process.argv[2], function(err, processes){
	if (err) throw new Error(err)
	processes.forEach(function(ps){
		task.kill(ps)
	})
})