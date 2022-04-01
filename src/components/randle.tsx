import Grid from './grid';

const Randle = () => {
  const max_guess = 10
  const max_puzzle = 10000
	const max_length = 10

	const tries = Math.floor(Math.random() * max_guess) + 1;
	const guess =  Math.floor(Math.random() * tries) + 1;	
  const puzzle = Math.floor(Math.random() * max_puzzle) + 1;
  const width = Math.floor(Math.random() * max_length) + 1;
	return (
		<div>
    	<p>
				Randle {puzzle} {guess}/{tries}<br />
      </p>
			<Grid
				length={guess} 
				width={width} 
			/>
		</div>
	);
}

export default Randle;
