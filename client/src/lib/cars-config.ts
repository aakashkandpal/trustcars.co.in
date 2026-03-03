import { Car } from "@shared/schema";

const optimizedImageModules = import.meta.glob("@assets/generated_images/optimized/box*/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const optimizedImagesByBox = Object.entries(optimizedImageModules).reduce<Record<string, string[]>>(
  (acc, [path, url]) => {
    const match = path.match(/optimized\/(box\d+)\//i);
    if (!match) return acc;
    const boxKey = match[1].toLowerCase();
    if (!acc[boxKey]) acc[boxKey] = [];
    acc[boxKey].push(url);
    return acc;
  },
  {},
);

Object.values(optimizedImagesByBox).forEach((images) => images.sort());
const getBoxImages = (boxNumber: number): string[] => optimizedImagesByBox[`box${boxNumber}`] ?? [];

const box1Images = getBoxImages(1);
const box2Images = getBoxImages(2);
const box3Images = getBoxImages(3);
const box4Images = getBoxImages(4);
const box5Images = getBoxImages(5);
const box6Images = getBoxImages(6);
const box7Images = getBoxImages(7);
const box8Images = getBoxImages(8);
const box9Images = getBoxImages(9);
const box10Images = getBoxImages(10);
const box11Images = getBoxImages(11);
const box12Images = getBoxImages(12);

// Edit featured card overrides here (indices are 0-based positions on Home/Collection preview rows).
export function applyFeaturedOverrides(cars: Car[]): Car[] {
  return cars.map((car, index) => {
    if (index === 0) {
      return {
        ...car,
        imageUrls: box1Images.length > 0 ? box1Images : car.imageUrls,
      };
    }

    if (index === 1) {
      return {
        ...car,
        make: "Honda",
        model: "City",
        year: 2020,
        price: 850000,
        mileage: 44000,
        fuelType: "Petrol",
        transmission: "Automatic",
        description: "Well-maintained Honda City 2020 model with clean interior and smooth drive.",
        imageUrls: box2Images.length > 0 ? box2Images : car.imageUrls,
      };
    }

    if (index === 2) {
      return {
        ...car,
        make: "Maruti Suzuki",
        model: "Baleno",
        year: 2017,
        price: 550000,
        mileage: 67000,
        fuelType: "Petrol",
        transmission: "Manual",
        description: "Maruti Suzuki Baleno 2017, petrol variant, well maintained and city-friendly hatchback.",
        imageUrls: box3Images.length > 0 ? box3Images : car.imageUrls,
      };
    }

    if (index === 3) {
      return {
        ...car,
        make: "Kia",
        model: "Seltos",
        description: "Kia Seltos with premium styling, practical cabin space and smooth city driving comfort.",
        imageUrls: box4Images.length > 0 ? box4Images : car.imageUrls,
      };
    }

    if (index === 4) {
      return {
        ...car,
        make: "Honda",
        model: "City",
        description: "Honda City with refined performance, premium comfort and reliable daily usability.",
        imageUrls: box5Images.length > 0 ? box5Images : car.imageUrls,
      };
    }

    if (index === 5) {
      return {
        ...car,
        make: "Hyundai",
        model: "Elite i20",
        year: 2016,
        price: 317500,
        mileage: 68000,
        fuelType: "Petrol",
        transmission: "Manual",
        description: "Hyundai Elite i20 with practical features, easy city handling and dependable performance.",
        imageUrls: box6Images.length > 0 ? box6Images : car.imageUrls,
      };
    }

    return car;
  });
}

// Edit additional collection cards here.
export const manualCollectionCars: Car[] = [
  {
    id: 1001,
    make: "Honda",
    model: "City",
    year: 2016,
    price: 317500,
    mileage: 68000,
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrls: box7Images,
    description: "Single owner, top variant, dealer serviced and in excellent condition.",
    isSold: false,
  },
  {
    id: 1002,
    make: "Hyundai",
    model: "i10",
    year: 2015,
    price: 650000,
    mileage: 12000,
    fuelType: "Petrol",
    transmission: "Automatic",
    imageUrls: box8Images,
    description: "Luxury sedan with premium interior, pristine paint and full service history.",
    isSold: false,
  },
  {
    id: 1003,
    make: "Honda",
    model: "City",
    year: 2015,
    price: 520000,
    mileage: 8500,
    fuelType: "Petrol",
    transmission: "Automatic",
    imageUrls: box9Images,
    description: "Panoramic sunroof, Burmester sound and immaculate cabin condition.",
    isSold: false,
  },
  {
    id: 1004,
    make: "Maruti Suzuki",
    model: "Swift",
    year: 2014,
    price: 350000,
    mileage: 65000,
    fuelType: "Diesel",
    transmission: "Manual",
    imageUrls: box10Images,
    description: "Matrix LED headlights, virtual cockpit and smooth highway performance.",
    isSold: false,
  },
  {
    id: 1005,
    make: "Hyundai",
    model: "Creta",
    year: 2016,
    price: 630000,
    mileage: 49000,
    fuelType: "Diesel",
    transmission: "Automatic",
    imageUrls: box11Images,
    description: "Top-end SUV with bold styling, powerful drive and spotless maintenance.",
    isSold: false,
  },
  {
    id: 1006,
    make: "Mahindra",
    model: "XUV 500",
    year: 2019,
    price: 1125000,
    mileage: 56000,
    fuelType: "Diesel",
    transmission: "Manual",
    imageUrls: box12Images,
    description: "Mahindra XUV 500 with bold road presence, spacious cabin and strong highway performance.",
    isSold: false,
  },
];
