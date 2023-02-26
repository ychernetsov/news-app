import styles from './picture.module.scss';

/* eslint-disable-next-line */
export interface PictureProps {
  src: string;
  caption: string;
  alt: string;
}

export function Picture({src, caption, alt}: PictureProps) {
  return (
    <div className={styles['container']}>
      <img src={src} alt={alt}></img>
      <div className={styles['caption']}>
        {caption}
      </div>
    </div>
  );
}

export default Picture;
