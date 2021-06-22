import { binarySearch, IPerson } from '../main';

const phoneBook = [
  { name: 'a', phone: 1 },
  { name: 'b', phone: 2 },
  { name: 'c', phone: 3 },
  { name: 'd', phone: 4 },
  { name: 'e', phone: 5 },
  { name: 'f', phone: 6 },
  { name: 'g', phone: 7 },
  { name: 'h', phone: 8 },
  { name: 'i', phone: 9 },
  { name: 'j', phone: 10 },
] as IPerson[];

describe('Binary Search unity tests', () => {
  beforeEach(() => {
    phoneBook.sort((a: IPerson, b: IPerson) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  });

  describe('binarySearch', () => {
    it('Should return [null] if phone book does not contain person\'s name.', () => {
      const phoneNumber = binarySearch('', phoneBook);

      expect(phoneNumber).toBeNull();
    });

    it('Should return the phone number if phone book contains the person\'s name.', () => {
      const phoneNumber = binarySearch('h', phoneBook);

      expect(phoneNumber).toEqual(8);
    });
  });
});
