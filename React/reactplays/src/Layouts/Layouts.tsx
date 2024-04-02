import { ReactNode } from 'react';
import styles from './layouts.module.css';


interface LayoutProps {
    header: ReactNode,
    children: ReactNode,
}

const Layouts = ({header, children}: LayoutProps) => {
  return (
    <>
    <header className={styles.header}>
        {header}
    </header>
    <main>
        {children}
    </main>
    </>
  )
}

export default Layouts