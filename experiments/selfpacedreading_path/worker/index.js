const workers = require('pushkin-worker');
const pWorker = workers.pushkinWorker;
const defaultHandler = workers.defaultHandler;

const options = {
	amqpAddress: process.env.AMQP_ADDRESS || 'amqp://localhost',
	readQueue: 'selfpacedreading_path_quiz_dbread',
	writeQueue: 'selfpacedreading_path_quiz_dbwrite',
	taskQueue: 'selfpacedreading_path_quiz_taskworker',
};

const connection = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DB,
};

const transactionOps = {
	tableName: 'transactions',
	connection: {
			host: process.env.TRANS_HOST,
			user: process.env.TRANS_USER,
			password: process.env.TRANS_PASS,
			database: process.env.TRANS_DB,
	}
}

const worker = new pWorker(options);
worker.init()
	.then(() => {
		worker.handle('test', data => {
			console.log(`handling test method got data: ${data}`);
			return `successfully got ${data}`;
		});
		worker.useHandler(defaultHandler, connection, 'selfpacedreading_path', transactionOps);
		worker.start();
	})
	.catch(err => {
		console.error(`failed to initialize worker: ${err}`);
	});

