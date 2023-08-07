import { FC, ReactNode, JSX } from 'react';
import './styles.scss';
import clsx from 'clsx';

interface TypographyProperties {
	children: ReactNode;
	as?: keyof JSX.IntrinsicElements;
	type?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'error';
}

export const Typography: FC<TypographyProperties> = ({ children, as = 'p', type = 's' }) => {
	const Element = as;

	return <Element className={clsx('typography', `typography_${type}`)}>{children}</Element>;
};
