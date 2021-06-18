import log from 'debug';

interface IPerson {
  name: string;
  phone: number;
}

// This is only for demonstration pourposes, but you can make this array as HUGE as you want!
const phoneList = [
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

const binarySearch = (value: string, values: IPerson[]): number | null => {
  let min = 0;
  let max = values.length - 1;
  let n = values.length - 1;

  while (n > 0) {
    // Set middle between min and max boundaries
    let middle = Math.floor((max - min) / 2 + min);

    // If it is what i am looking for, then return it
    if (values[middle].name === value) {
      return values[middle].phone;
    }

    // If value is less than middle, set max to one less than middle
    else if (values[middle].name > value) {
      max = middle - 1;
    }

    // If value is greater than middle, set min to one greater than middle
    else if (values[middle].name < value) {
      min = middle + 1;
    }

    // Set new number of elements to those between min and max
    n = max - min + 1;
  }

  // If number is not found, return null
  return null;
};

// Used native sort of javasccript just to ensure that the array is sorted.
// The real binary search algorithm is above.
const sortedPhoneList = phoneList.sort((a: IPerson, b: IPerson) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

log.log(binarySearch('d', sortedPhoneList));
