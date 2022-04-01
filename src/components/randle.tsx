import CopyButton from './copyButton';
function getPuzzleName() : string {
  const names = ['Squirtle', 'Clickle', 'Randle', 'Trogdor', 'Matrix', 'Fakle', 'Missle', 'Squiggle', 'Turtle', 'Burple', 'Shrimp', 'Fartle' ];
	const coin = Math.floor(Math.random() * names.length);
	return (
    names[coin]
	)
};

interface GridProps {
	max: number;
	length: number;
	width: number;
}

function getGrid (props:GridProps) {
  var grid = [];
  for(var i = 0; i < props.length; i++) {
  	var line = '';
		if ( i < props.length - 1 || props.max === 1) {
			for(var j = 0; j < props.width; j++) {
				const coin = Math.floor(Math.random() * 3);
				switch(coin) {
				 case 0:
				  line += "⬛️";
					break;
				case 1:
				  line += "🟨️";
					break;
				case 2:
				  line += "🟩️";
					break;
				};
			};
		} else {
			for(var k = 0; k < props.width; k++) {
				line += "🟩️";
			};
		}
    grid.push(line);
  }
  return grid;
}

const Randle = () => {
  const maxGuess = 10
  const maxPuzzle = 1000
	const maxLength = 10
  const puzzleName = getPuzzleName();

	const tries = Math.floor(Math.random() * maxGuess) + 1;
	const guess =  Math.floor(Math.random() * tries) + 1;	
  const puzzleNumber = Math.floor(Math.random() * maxPuzzle) + 1;
  const width = Math.floor(Math.random() * maxLength) + 1;
	const header = `${puzzleName} ${puzzleNumber} ${guess}/${tries}`;
  const grid = getGrid({max: tries, length: guess, width: width});
	const puzzle = `${header}\n\n${grid.join('\n')}`;

	return (
		<div>
    	<p>
				{header}<br />
      </p>
				{grid.map(line=> <>{line}<br /></>)}
			<br />
			<CopyButton text={puzzle} />
			<br />
			<a href="https://github.com/chuckmeyer/randle">Github Code</a> | <a href="https://twitter.com/chuckm/status/1509910223947014156?s=20&t=o_eN4DjPqbl6O_XQRVjQgA">Puzzle Name Suggestions</a>
			
		</div>
	);
}

export default Randle;
