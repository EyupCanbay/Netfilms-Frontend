import React from "react";
import Link from "next/link";
import styles from "./styles.module.css"

export default function Categories( { categories }) {
    return (
        <div className={styles.categories}>
            {categories.map((category) => 
            <Link
            key={category.id}
            className={styles.category}
            href={`/${category.id}`}
            >
                <div>{category.name}</div>

            </Link>
        )}
        </div>
    );
  }
  
