
export class Budget {
  id: number;
  city: string;
  country: string;
  imageUrl: string;
  rent: number;
  utilities: number;
  subscriptions: number;
  food: number;
  otherHouseGoods: number;
  daycare: number;
  credit: number;
  transport: number;
  localLanguageLessons: number;
  total: number;

  constructor(id: number,
              city: string,
              country: string,
              imageUrl: string,
              rent: number,
              utilities: number,
              subscriptions: number,
              food: number,
              otherHouseGoods: number,
              daycare: number,
              credit: number,
              transport: number,
              localLanguageLessons: number,
              total: number) {
    this.id = id;
    this.city = city;
    this.country = country;
    this.imageUrl = imageUrl;
    this.rent = rent;
    this.utilities = utilities;
    this.subscriptions = subscriptions;
    this.food = food;
    this.otherHouseGoods = otherHouseGoods;
    this.daycare = daycare;
    this.credit = credit;
    this.transport = transport;
    this.localLanguageLessons = localLanguageLessons;
    this.total = total;
  }
}
