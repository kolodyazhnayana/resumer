import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Typography } from '../typography';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	error?: string;
	label?: string;
}

export const Input: FC<InputProps> = ({ error, label, ...props }) => {
	return (
		<label className={styles.input__label}>
			{label}
			<input {...props} className={clsx(styles.input, error && styles.input_error)} />
			{error && <Typography variant={'error'}>{error}</Typography>}
		</label>
	);
};
