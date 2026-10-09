function NotFound() {
  return (
    <article className="article">
      <h1 className="article__title">Страница не найдена</h1>
      <p className="article__paragraph">
        Такой страницы не существует.{' '}
        <a href="/" style={{ color: '#9f9' }}>
          На главную
        </a>
      </p>
    </article>
  );
}

export default NotFound;