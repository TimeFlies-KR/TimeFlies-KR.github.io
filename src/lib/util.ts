// 세 사이트가 함께 쓰는 작은 도우미.

export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ko-KR', { dateStyle: 'medium' }).format(date);
}
