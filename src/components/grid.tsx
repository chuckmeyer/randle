interface GridProps {
	length: number;
	width: number;
}

function Grid (props:GridProps) {
  var grid = [];
  for(var i = 0; i < props.length; i++) {
  	var line = '';
		if ( i < props.length - 1) {
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
			for(var j = 0; j < props.width; j++) {
				line += "🟩";
			};
		}
    grid.push(line);
  }
  return (
    <div>
     	{grid.map(line=> <span>{line}<br /></span>)}
		</div>
 );
}

export default Grid;
