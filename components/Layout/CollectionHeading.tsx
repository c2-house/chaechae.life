import styles from './CollectionPage.module.css';

interface Props {
  label: string;
  title: string;
  description: string;
}

const CollectionHeading = ({ label, title, description }: Props) => (
  <header className={styles.heading}>
    <p className={styles.label}>{label}</p>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </header>
);

export default CollectionHeading;
