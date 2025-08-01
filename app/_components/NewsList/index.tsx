import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <Image
              className={styles.image}
              src="/no-image.png"
              alt="No Image"
              width={1200}
              height={630}
            />
          </Link>
          <dl className={styles.content}>
            <dt className={styles.newsItemTitle}>{article.title}</dt>
            <dd className={styles.meta}>
              <Category category={article.category} />
              <Date date={article.publishedAt ?? article.createdAt} />
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  );
}
