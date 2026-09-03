import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading } from "@medusajs/ui"

const OrderInsightsPage = () => {
  return (
    <Container>
      <Heading level="h1">Order Insights</Heading>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Order Insights",
  nested: "/orders",
  rank: 1,
})

export default OrderInsightsPage