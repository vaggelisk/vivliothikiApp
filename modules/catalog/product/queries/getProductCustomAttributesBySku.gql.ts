export default `
  query getProductCustomAttributesBySku(
    $filter: ProductAttributeFilterInput,
  ) {
    products(filter: $filter) {
      items {
            id
            sku
            name
            url_key
            stock_status
            attribute_set_id
            subtitle
      }
    }
  }
`;
