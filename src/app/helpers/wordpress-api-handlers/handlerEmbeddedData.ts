export function handlerAPiEmbeddedProps(data: any): {
  image: string;
  categories: string[];
  tags: string[];
} {
  const image = data["wp:featuredmedia"]?.[0]?.source_url;
  console.log("image", data);
  const categories =
    data["wp:term"]?.[0]?.map((category: any) => category.name) ||
    [];
  const tags =
    data["wp:term"]?.[1]?.map((tag: any) => tag.name) || [];

  return {
    image,
    categories,
    tags,
  };
}
