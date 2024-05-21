export function href({ _type, slug }) {
  switch (_type) {
    case "page":
      return `/${slug.current}`;
    default:
      return "#";
  }
}
