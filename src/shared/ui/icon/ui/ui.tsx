import { FC } from 'react';
import { SpritesTypes } from './sprite.tsx';

interface IconProps {
	id: SpritesTypes;
	className?: string;
}

export const Icon: FC<IconProps> = ({ id, className }) => {
	return (
		<svg className={className}>
			<use xlinkHref={`#${id}`} />
		</svg>
	);
};
