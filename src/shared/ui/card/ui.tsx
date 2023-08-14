import styles from './styles.module.scss';
import { FC } from 'react';
import { Icon } from '../icon';
import { SpritesTypes } from '../icon/ui/sprite.tsx';

interface CardProps {
	image?: string;
	icon?: SpritesTypes;
	onClick?: () => void;
}

export const Card: FC<CardProps> = ({ image, icon, onClick }) => {
	return (
		<div className={styles.card} onClick={onClick}>
			{image && <img src={image} alt={''} className={styles.card__image} />}
			{icon && <Icon id={icon} className={styles.card__icon} />}
		</div>
	);
};
