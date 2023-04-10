import { type YooxImportProduct } from '../interfaces';
import { UnparseObject, unparse, parse } from 'papaparse';

export const json2csv = (products: YooxImportProduct[]): string => {
  console.time('Papaparse:Json to Csv');

  const result = unparse(products as unknown as UnparseObject<YooxImportProduct>, {
    delimiter:';',header: true,
  });
  console.timeEnd('Papaparse:Json to Csv');
  return result;
}

export const csv2json = (csv: string) => {
  console.time('Papaparse:Csv to Json');
  parse<YooxImportProduct>(csv,{delimiter:';', header:true});
  console.timeEnd('Papaparse:Csv to Json');
}