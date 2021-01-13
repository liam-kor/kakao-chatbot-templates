import { BasicCard, Carousel, CarouselHeader, CommerceCard } from './cards';
import * as _ from 'lodash';

export const createCarouselWithData = (
  cardFormat: CommerceCard | BasicCard,
  dataList: Record<string, any>[],
  header?: CarouselHeader,
) => {
  const items = [];
  for (const data of dataList) {
    const card = _.cloneDeep(cardFormat);
    card.insertData(data);
    items.push(card);
  }
  return new Carousel(items, header);
};

export const createCardWithData = (
  card: CommerceCard | BasicCard,
  data: Record<string, any> | Record<string, any>[],
  header?: CarouselHeader,
): Carousel | BasicCard | CommerceCard => {
  if (Array.isArray(data)) {
    return createCarouselWithData(card, data, header);
  } else {
    card.insertData(data);
    return card;
  }
};
