export type SpritesTypes = 'add' | 'delete';

export const SpriteSvg = () => {
	return (
		<svg
			style={{
				position: 'absolute',
				width: 1,
				height: 1,
				margin: -1,
				padding: 0,
				overflow: 'hidden',
				border: 0,
				clip: 'rect(0, 0, 0, 0)',
				appearance: 'none',
			}}
			xmlns="http://www.w3.org/2000/svg"
		>
			<symbol id="add" viewBox="0 0 45 45" fill="none">
				<g>
					<circle id="Ellipse 1" cx="22.5" cy="22.5" r="22" fill="white" stroke="#8BBBCF" />
					<g id="Plus">
						<line id="Line 2" x1="22.5" y1="14" x2="22.5" y2="30" stroke="#8BBBCF" />
						<path id="Line 3" d="M14 22H31" stroke="#8BBBCF" />
					</g>
				</g>
			</symbol>

			<symbol id="delete" viewBox="0 0 19 19" fill="none">
				<g>
					<circle id="Ellipse 1" cx="9.5" cy="9.5" r="9" fill="white" stroke="#D67F5F" />
					<line id="Line 3" x1="6" y1="9.5" x2="13" y2="9.5" stroke="#D67F5F" />
				</g>
			</symbol>
		</svg>
	);
};
