import styles from './custom-text.module.scss';

/* eslint-disable-next-line */
export interface CustomTextProps {}

export function CustomText(props: CustomTextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CustomText!</h1>
    </div>
  );
}

export default CustomText;
