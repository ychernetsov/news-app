import styles from './button.module.scss';
import { Chevron } from '@data-snipper/icons';

/* eslint-disable-next-line */
export interface ButtonProps {
  text: string;
}

export function Button({text}: ButtonProps) {
  return (
    <div className={styles['container']}>
      <button>{text}<Chevron /></button>
      
    </div>
  );
}

export default Button;
