import 'shared/styles/index.scss';
import { Datepicker, SpriteSvg } from 'shared/ui';
import { useState } from 'react';

function App() {
	const [startDate, setStartDate] = useState<Date | null>(new Date());

	return (
		<>
			<SpriteSvg />
			<Datepicker onChange={setStartDate} selected={startDate} label={'Дата начала'} />
		</>
	);
}

export default App;
