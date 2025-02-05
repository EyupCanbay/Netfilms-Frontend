import React from "react";
import Link from "next/link";
import styles from "./styles.module.css"

export default function Footer() {
    return( 
    <footer className={styles.footer}>
        Made by&nbsp;
            <Link href="https://www.instagram.com/eyyup_canbay/" target="_blank" rel="noopener noreferrer">
            Eyüp Canbay&nbsp;
        </Link>
        2025
    </footer>  
    )
}