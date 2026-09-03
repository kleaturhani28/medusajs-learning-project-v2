import { defineRouteConfig } from "@medusajs/admin-sdk"
import { DocumentText } from "@medusajs/icons"
import { Container, Heading } from "@medusajs/ui"

const ReportsPage = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Reports</Heading>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Reports",
  icon: DocumentText,
  rank: 2,
})

export default ReportsPage