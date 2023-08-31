import { FC } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Typography } from '../typography';
import styles from './styles.module.scss';

interface DatepickerProps extends ReactDatePickerProps {
	label?: string;
}

export const Datepicker: FC<DatepickerProps> = ({ label, ...props }) => {
	return (
		<div>
			{label && <Typography>{label}</Typography>}
			<DatePicker
				{...props}
				showMonthYearPicker
				dateFormat="MM/yyyy"
				className={styles.datepicker}
				calendarClassName={styles.datepicker__calendar}
			/>
		</div>
	);
};
