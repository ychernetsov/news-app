import styles from './icon-svg.module.scss';

/* eslint-disable-next-line */
export interface IconSvgProps {}

export function IconSvg(props: IconSvgProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IconSvg!</h1>
    </div>
  );
}

export default IconSvg;
