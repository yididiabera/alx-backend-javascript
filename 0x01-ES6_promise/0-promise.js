export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const x = 5;
    if (x === 5) {
      resolve('Success');
    }
    reject(new Error('Failure'));
  });
}
