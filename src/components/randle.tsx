import CopyButton from './copyButton';

function getPuzzleName() : string {
  const names = ["Fool's Word", 'Dawdle', 'Chuckle', 'Toddle', 'Squirtle', 'Clickle', 'Randle', 'Trogdor', 'Matrix', 'Fakle', 'Missle', 'Squiggle', 'Turtle', 'Burple', 'Shrimp', 'Fartle' ];
	const coin = Math.floor(Math.random() * names.length);
	return (
    names[coin]
	)
};

function getGuess(tries:number) : number {
	var tempGuess = Math.floor(Math.random() * tries) + 1;
	if (tempGuess === 1 && tries > 1) 
		// Did they *really* get it in one?
		tempGuess = Math.floor(Math.random() * tries) + 1;
	return tempGuess;
}

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
				  line += "⬛";
					break;
				case 1:
				  line += "🟨";
					break;
				case 2:
				  line += "🟩";
					break;
				};
			};
		} else {
			for(var k = 0; k < props.width; k++) {
				line += "🟩";
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
	const guess = getGuess(tries);
  const puzzleNumber = Math.floor(Math.random() * maxPuzzle) + 1;
  const width = Math.floor(Math.random() * maxLength) + 1;
	const header = `${puzzleName} ${puzzleNumber} ${guess}/${tries}`;
  const grid = getGrid({max: tries, length: guess, width: width});
	const footer = 'https://randle.secretlair.net';
	const puzzle = `${header}\n\n${grid.join('\n')}\n\n${footer}`;

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
