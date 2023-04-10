
import { YooxImportProduct } from './interfaces'

export default function generateProducts(n: number): YooxImportProduct[] {
  const products: YooxImportProduct[] = [];
  for (let i = 0; i < n; i++) {
    products.push({
      BRAND: 'brand',
      CATEGORY: 'category',
      FILTER_COLOR: 'green',
      FIRST_IMAGE: `https://reflaunt.com/media/img_${i}.png`,
      GENDER: 'male',
      ITEM_DESCRIPTION_DE: `item_De_${i}`,
      ITEM_DESCRIPTION_ENG: `item_en_${i}`,
      ITEM_DESCRIPTION_ES: `item_es_${i}`,
      ITEM_DESCRIPTION_FR: `item_fr_${i}`,
      ITEM_DESCRIPTION_GR: `item_gr_${i}`,
      ITEM_DESCRIPTION_ITA: `item_ita_${i}`,
      MAT1: `mat_${i}`,
      MODEL_TITLE: `model title ${i}`,
      PREOWNED_CONDITION: 'preowned',
      SHOP_SKU: `sku_${i}`,
      TITLE: `title ${i}`,
      VARIANT_GROUP_CODE: `code_${i}`,
      "BAGS MODEL": `bags model ${i}`,
      "DRESSES MODEL": `dresses model ${i}`,
      FOURTH_IMAGE: `https://reflaunt.com/media/img4_${i}.png`,
      SECOND_IMAGE: `https://reflaunt.com/media/img2_${i}.png`,
      THIRD_IMAGE: `https://reflaunt.com/media/img3_${i}.png`,
    });
  }
  return products;
}