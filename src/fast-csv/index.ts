import { type YooxImportProduct } from '../interfaces';
import { writeToString, parseString } from 'fast-csv';

export const json2csv = async (products: YooxImportProduct[]): Promise<string> => {
  console.time('Fast-CSV:Json to Csv');
  const result = await writeToString(products, {delimiter: ';'});
  console.timeEnd('Fast-CSV:Json to Csv');
  return result;
}

export const csv2json = (csv: string) => {
  console.time('Fast-CSV:Csv to Json');
  const products:YooxImportProduct[]=[];
  const stream = parseString<YooxImportProduct, YooxImportProduct>(csv, {
    delimiter:';',
    headers: true,
  })
  .on('data', (data)=> {
    products.push(data);
  })
  .on('end', () => console.timeEnd('Fast-CSV:Csv to Json'));
}