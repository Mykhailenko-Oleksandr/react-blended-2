import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

import style from "./Form.module.css";

interface FormProps {
  onSubmit: (value: string) => void;
}

const notify = () => toast.error("І що ти хочеш знайти нічого не ввівши?");

export default function Form({ onSubmit }: FormProps) {
  function handleSubmit(formData: FormData) {
    const searchWord = formData.get("search") as string;
    if (searchWord.trim() === "") {
      notify();
      return;
    }
    onSubmit(searchWord);
  }
  return (
    <form action={handleSubmit} className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
