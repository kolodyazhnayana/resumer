import { FC, ReactNode, JSX } from 'react';
import './styles.scss';
import clsx from 'clsx';

interface TypographyProps {
	children: ReactNode;
	as?: keyof JSX.IntrinsicElements;
	variant?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'error';
}

export const Typography: FC<TypographyProps> = ({ children, as = 'p', variant = 's' }) => {
	const Element = as;

	return <Element className={clsx('typography', `typography_${variant}`)}>{children}</Element>;
};
