export enum MiraklImportMode {
  NORMAL = 'NORMAL',
  PARTIAL_UPDATE = 'PARTIAL_UPDATE',
  REPLACE = 'REPLACE',
}
export interface YooxAttribute {
  attributes: YooxAttributes[]
}

export interface YooxAttributes {
  code: string
  default_value?: string
  description?: string
  description_translations: DescriptionTranslation[]
  example?: string
  hierarchy_code: string
  label: string
  label_translations: LabelTranslation[]
  required: boolean
  requirement_level: string
  roles: Role[]
  type: string
  type_parameter?: string
  type_parameters?: TypeParameter[]
  values?: string
  values_list?: string
  variant: boolean
  validations?: string
}

export interface DescriptionTranslation {
  locale: string
  value: string
}

export interface LabelTranslation {
  locale: string
  value: string
}

export interface Role {
  parameters: Parameter[]
  type: string
}

export interface Parameter {
  name: string
  value: string
}

export interface TypeParameter {
  name: string
  value: string
}

export interface YooxImportProduct {
  CATEGORY: string
  SHOP_SKU: string
  TITLE: string
  MODEL_TITLE: string
  VARIANT_GROUP_CODE: string
  GENDER: string
  BRAND: string
  FILTER_COLOR: string
  MAT1: string
  ITEM_DESCRIPTION_ENG: string
  ITEM_DESCRIPTION_ITA: string
  ITEM_DESCRIPTION_FR: string
  ITEM_DESCRIPTION_ES: string
  ITEM_DESCRIPTION_DE: string
  ITEM_DESCRIPTION_GR: string
  FIRST_IMAGE: string
  SECOND_IMAGE?: string
  THIRD_IMAGE?: string
  FOURTH_IMAGE?: string
  PREOWNED_CONDITION: string
  'BAGS MODEL'?: string
  'DRESSES MODEL'?: string
}

export interface YooxImportProductAttributes {
  category: string
  brand_code: string
  size: string
  colour: string
  material: string
  state: number
}

export enum YooxAttributeType {
  Material = 'mat1',
  Color = 'filter_color',
  Size = 'size',
  Designer = 'brand',
  Condition = 'state',
  Category = 'category',
}

export enum YooxProductIdType {
  SKU = 'SKU',
  ISBN = 'ISBN',
  UPC = 'UPC',
  EAN = 'EAN',
  SHOP_SKU = 'SHOP_SKU',
}

export interface YooxOfferInput {
  sku: string
  'product-id': string
  'product-id-type': YooxProductIdType
  price: number
  quantity: number
  'min-quantity-alert'?: number
  description?: string
  'internal-description'?: string
  'available-start-date'?: string
  'available-end-date'?: string
  state: string
  'update-delete'?: YooxUpdateDelete
}

export interface YooxAttributeValue {
  code: string
  label: string
}

export interface YooxCategory {
  code: string
  label: string
  level: number
  parent_code: string
}

export interface YooxProductAttribute {
  code: string
  description: string | null
  hierarchy_code: string | null
  label: string
  values_list: string | null
  required?: boolean
  requirement_level?: string
  default_value?: string | null
  values?: YooxAttributeValue[] | null
}

export interface YooxListAttributeValues {
  values_lists: Array<{
    code: string
    label: string
    values: YooxAttributeValue[]
  }>
}

export interface YooxAllData {
  values_lists: Array<{
    code: string
    label: string
    values: YooxAttributeValue[]
  }>
  attributes: YooxProductAttribute[]
  hierarchies: YooxCategory[]
}

export enum YooxUpdateDelete {
  UPDATE = 'update',
  DELETE = 'delete',
}

export interface YooxProductImportStatusOutput {
  date_created: string
  has_error_report: boolean
  has_new_product_report: boolean
  has_transformation_error_report: boolean
  has_transformed_file: boolean
  import_id: number
  import_status: YooxImportStatus
  transform_lines_in_error: number
  transform_lines_with_warning: number
  transform_lines_in_success: number
  transform_lines_read: number
  shop_id: number
  integration_details?: YooxIntegrationDetails
}

export interface YooxIntegrationDetails {
  invalid_products: number
  products_not_accepted_in_time: number
  products_not_synchronized_in_time: number
  products_successfully_synchronized: number
  products_with_synchronization_issues: number
  products_with_wrong_identifiers: number
  rejected_products: number
}

export enum YooxImportStatus {
  COMPLETE = 'COMPLETE',
  SENT = 'SENT',
}

export enum YooxLanguages {
  EN = 'en',
  IT = 'it',
}
