import styles from './svg-button.module.scss';

/* eslint-disable-next-line */
export interface SvgButtonProps {}

export function SvgButton(props: SvgButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SvgButton!</h1>
    </div>
  );
}

export default SvgButton;
