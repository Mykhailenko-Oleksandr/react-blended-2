import type { ReactNode } from "react";
import style from "./GridItem.module.css";

interface GridItemProps {
  children: ReactNode;
  onModalOpen: () => void;
}

export default function GridItem({ children, onModalOpen }: GridItemProps) {
  return (
    <li onClick={onModalOpen} className={style.item}>
      {children}
    </li>
  );
}
