const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    const firstPromise = await promiseTheaterIXX();
    const secondPromise = await promiseTheaterVGC();
    const output = [...firstPromise, ...secondPromise].reduce((acc, cur) => {
      if (cur.hasil === emotion) {
        acc += 1;
      }
      return acc;
    }, 0);
    return output;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  promiseOutput,
};
