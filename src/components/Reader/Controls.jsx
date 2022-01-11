export const Controls = ({ onPrevClick, onNextClick, current, total }) => {
  return (
    <section>
      <button type="button" onClick={onPrevClick} disabled={current === 1}>
        Назад
      </button>
      <button type="button" onClick={onNextClick} disabled={current === total}>
        Вперед
      </button>
    </section>
  );
};
