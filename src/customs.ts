import { BasicCard, Carousel, CarouselHeader, CommerceCard } from './cards';
import * as _ from 'lodash';
import { Button } from './directions';

export const createCarouselWithData = (
  cardFormat: CommerceCard | BasicCard,
  dataList: Record<string, any>[],
  header?: CarouselHeader,
) => {
  // const items = [];
  // for (const data of dataList) {
  //   const card = _.cloneDeep(cardFormat);
  //   card.insertData(data);
  //   items.push(card);
  // }
  const items = createItems(cardFormat, dataList);
  return new Carousel(items, header);
};

const createItems = (
  cardFormat: CommerceCard | BasicCard,
  dataList: Record<string, any>[],
) => {
  const items = [];
  for (const data of dataList) {
    const card = _.cloneDeep(cardFormat);
    card.insertData(data);
    items.push(card);
  }

  return items;
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

export class CarouselWithData extends Carousel {
  constructor(
    cardFormat: BasicCard | CommerceCard,
    dataList: Record<string, any>[],
    header?: CarouselHeader,
  ) {
    const items = createItems(cardFormat, dataList);
    super(items, header);
  }
}
