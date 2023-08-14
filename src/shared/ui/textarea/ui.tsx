import { FC, HTMLAttributes } from 'react';
import { Typography } from '../typography';
import styles from './styles.module.scss';
import clsx from 'clsx';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
}

export const Textarea: FC<TextareaProps> = ({ label, error, ...props }) => {
	return (
		<label className={styles.textarea__label}>
			{label}
			<textarea {...props} className={clsx(styles.textarea, error && styles.textarea_error)} />
			{error && <Typography variant={'error'}>{error}</Typography>}
		</label>
	);
};
