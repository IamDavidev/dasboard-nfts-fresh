import { useEffect } from 'preact/hooks';

const JsonTest = () => {
	useEffect(() => {
		console.log('test');
	}, []);
	return (
		<>
			<div>
				<h1 class='text-blue-300'>JSON Test</h1>
			</div>
		</>
	);
};

export default JsonTest;
