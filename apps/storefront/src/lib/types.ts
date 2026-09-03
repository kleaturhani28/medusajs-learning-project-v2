export interface Product {
  id: string
  title: string
  description?: string
  handle: string
  prices?: Price[]
  thumbnail?: string
  images?: ProductImage[]
}

export interface ProductImage {
  id: string
  url: string
}

export interface Price {
  id: string
  amount?: number
  currency_code?: string
}

export interface Cart {
  id: string
  items: CartItem[]
  subtotal?: number
  total?: number
}

export interface CartItem {
  id: string
  product_id: string
  quantity: number
  title?: string
  unit_price?: number
}
