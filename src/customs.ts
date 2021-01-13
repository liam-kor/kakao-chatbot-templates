import { BasicCard, Carousel, CarouselHeader, CommerceCard } from './cards';

export const createCarouselWithData = (
  card: CommerceCard | BasicCard,
  dataList: Record<string, any>[],
  header?: CarouselHeader,
) => {
  const items = [];
  for (const data of dataList) {
    card.insertData(data);
    items.push(card);
  }
  return new Carousel(items, header);
};
