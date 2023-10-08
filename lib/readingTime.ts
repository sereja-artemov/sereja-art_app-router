export default function getReadingTime(
  content: string,
  wordsPerMinute: number = 200
) {
  const wordsArr = content.split(/\s/g).filter((n) => n);
  const wordsQuantity = wordsArr.length;
  const minutes = wordsQuantity / wordsPerMinute;
  const readingTime = Math.ceil(minutes) + ' минут';

  const readingTimeMinutes = readingTime.match(/\d+/g);
  const word = getWordEnding(Number(readingTimeMinutes), [
    ' минута',
    ' минуты',
    ' минут',
  ]);
  const readingTimeText = readingTime.replace(/[^0-9\.]+/g, word);

  return readingTimeText;
}

function getWordEnding(value: number, words: string[]) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
}
