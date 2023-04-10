import { type YooxImportProduct } from '../interfaces';
import { stringify } from 'csv-stringify/sync';
import { parse } from 'csv-parse';

export const json2csv = async (products: YooxImportProduct[]): Promise<string> => {
  console.time('Csv:Json to Csv');
  const result = stringify(products, { delimiter: ';',header: true, quoted: true });
  console.timeEnd('Csv:Json to Csv');
  return result;
}

export const csv2json = async (csv: string): Promise<void> => {
  console.time('Csv:Csv to Json');
  parse(
    csv,
    {
      delimiter: ';',
      columns: true,
      relaxQuotes: true,
      relax_column_count: true,
    },
    (err, data) => {
      console.timeEnd('Csv:Csv to Json');
    }
  );
}