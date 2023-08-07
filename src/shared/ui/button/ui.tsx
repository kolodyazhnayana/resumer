import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: 'primary';
}
export const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
	return (
		<button {...props} className={clsx(styles.button, styles[`button_${variant}`])}>
			{children}
		</button>
	);
};
