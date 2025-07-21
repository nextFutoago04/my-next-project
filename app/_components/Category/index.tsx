import type { Category } from "@/app/_libs/microcms";
//function時にも別でCategoryを使うためtypeと明示して区別する
import styles from "./index.module.css";

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
