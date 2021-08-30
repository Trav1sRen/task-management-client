const getKeyByValue = (object: any, value: any) => Object.keys(object).find((key) => object[key] === value);

const objectToValuesPolyfill = (object: any) => Object.keys(object).map((key) => object[key]);

export { getKeyByValue, objectToValuesPolyfill };
