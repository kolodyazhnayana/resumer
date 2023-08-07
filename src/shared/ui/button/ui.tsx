import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import './styles.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: 'primary';
}
export const Button: FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
	return (
		<button {...props} className={clsx('button', `button_${variant}`)}>
			{children}
		</button>
	);
};
