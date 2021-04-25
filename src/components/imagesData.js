const imagesDir = process.env.PUBLIC_URL + "/images/";
const numberOfImages = 9;
const totalImages = 7301;

function generateRandomNumbers(numberOfImages, totalImages) {
  var randomNumbers = [];
  while (randomNumbers.length < numberOfImages) {
    let number = Math.floor(Math.random() * totalImages) + 1;
    if (randomNumbers.indexOf(number) === -1) randomNumbers.push(number);
  }

  return randomNumbers;
}

export default function createImagesArray() {
  const randomNumbers = generateRandomNumbers(numberOfImages, totalImages);
  const imagesData = randomNumbers.map((number, idx) => {
    return {
      id: idx + 1,
      src: `${imagesDir}sample_${number}.jpg`,
    };
  });

  return imagesData;
}
