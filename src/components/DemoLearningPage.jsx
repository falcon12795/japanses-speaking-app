import UserMenu from "./UserMenu";
import { useProgress } from "../contexts/ProgressContext";

const words = [
  { id: "it-work-01", japanese: "要件定義", vietnamese: "Định nghĩa yêu cầu" },
  { id: "it-work-02", japanese: "基本設計", vietnamese: "Thiết kế cơ sở" },
  { id: "it-work-03", japanese: "詳細設計", vietnamese: "Thiết kế chi tiết" }
];

export default function DemoLearningPage() {
  const { isFavorite, isLearned, toggleFavorite, toggleLearned, toggleLessonCompleted, isLessonCompleted, addQuizResult } = useProgress();
  return (
    <main className="page">
      <UserMenu />
      <section className="content">
        <h1>IT Vocabulary</h1>
        <p>Ví dụ tích hợp trạng thái riêng theo user.</p>
        <div className="word-grid">
          {words.map((word) => (
            <article className="word-card" key={word.id}>
              <h2>{word.japanese}</h2><p>{word.vietnamese}</p>
              <button onClick={() => toggleFavorite(word.id)}>{isFavorite(word.id) ? "Bỏ yêu thích" : "Yêu thích"}</button>
              <button className="secondary" onClick={() => toggleLearned(word.id)}>{isLearned(word.id) ? "Đánh dấu chưa học" : "Đã học"}</button>
            </article>
          ))}
        </div>
        <div className="actions">
          <button onClick={() => toggleLessonCompleted("一般")}>{isLessonCompleted("一般") ? "Bỏ hoàn thành 一般" : "Hoàn thành 一般"}</button>
          <button onClick={() => addQuizResult({ lessonId: "一般", score: 8, total: 10 })}>Lưu quiz 8/10</button>
        </div>
      </section>
    </main>
  );
}
