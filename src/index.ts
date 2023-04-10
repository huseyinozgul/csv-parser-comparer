import { json2csv as csvJson2Csv, csv2json as csvCsv2Json } from './csv';
import { json2csv as fastJson2Csv, csv2json as fastCsv2Json } from './fast-csv';
import { json2csv as papaJson2Csv, csv2json as papaCsv2Json } from './papaparse';
import generateProducts from './generateProducts';

export const main = async () => {
  const numberOfRecords = 10000;
  const products = generateProducts(numberOfRecords);
  console.log(numberOfRecords, 'Number of records to be tested');
  const csv = await csvJson2Csv(products);
  await csvCsv2Json(csv);
  console.log('------------------------');
  const csv2 = await fastJson2Csv(products);
  await fastCsv2Json(csv2);
  console.log('------------------------');
  const csv3 = await papaJson2Csv(products);
  await papaCsv2Json(csv3);
  console.log('------------------------');
}

main()