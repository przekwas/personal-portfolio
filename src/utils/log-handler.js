export const logger = message => {
	const logStyles = [
		'color: white',
		'padding: 0.5rem',
		'border: 0.15rem solid #0091ea',
		'border-radius: 0.15rem'
	].join(';');
	console.log("%c " + message, logStyles);
};
