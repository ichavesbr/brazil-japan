import { type FormattedCompany } from "../utils/formatCompany"
import { Button } from "@/components/ui/button"
import { P } from "@/components/ui/typography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CompanyListProps {
  companies: FormattedCompany[]

  onEdit: (company: FormattedCompany) => void
}

export function CompanyList({ companies, onEdit }: CompanyListProps) {
  if (companies.length === 0) {
    return <P>Nenhuma empresa cadastrada.</P>
  }

  return (
    <div className="space-y-4">
      {companies.map(company => (
        <Card key={company.id}>
          <CardHeader>
            <CardTitle>{company.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>
              <P>Status: {company.statusLabel}</P>
              <P>Criado em: {company.createdAtFormatted}</P>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onEdit(company)}>
                Editar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
