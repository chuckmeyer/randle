import Grid from './grid';

function puzzleName() : string {
  const names = ['Squirtle', 'Randle', 'Trogdor', 'Matrix', 'Fakle', 'Missle', 'Squiggle'];
	const coin = Math.floor(Math.random() * names.length);
	return (
    names[coin]
	)
};

const Randle = () => {
  const max_guess = 10
  const max_puzzle = 1000
	const max_length = 10
  const puzzle_name = puzzleName();

	const tries = Math.floor(Math.random() * max_guess) + 1;
	const guess =  Math.floor(Math.random() * tries) + 1;	
  const puzzle_size = Math.floor(Math.random() * max_puzzle) + 1;
  const width = Math.floor(Math.random() * max_length) + 1;
	return (
		<div>
    	<p>
				{puzzle_name} {puzzle_size} {guess}/{tries}<br />
      </p>
			< Grid
				length={guess} 
				width={width} 
			/>
		</div>
	);
}

export default Randle;
