const objectToValuesPolyfill = (object: any) => Object.keys(object).map((key) => object[key]);

export { objectToValuesPolyfill };
