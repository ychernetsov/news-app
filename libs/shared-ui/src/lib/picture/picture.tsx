import styles from './picture.module.scss';

/* eslint-disable-next-line */
export interface PictureProps {}

export function Picture(props: PictureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Picture!</h1>
    </div>
  );
}

export default Picture;
