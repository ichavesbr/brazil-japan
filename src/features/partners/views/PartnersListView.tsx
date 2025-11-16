"use client";

import { usePartners } from "@/features/partners/hooks/usePartners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { H1, P } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";

export default function PartnersListView() {
  const partners = usePartners();
  const isLoading = !partners; 

  return (
    <main className="container mx-auto py-10">
      <div className="text-center mb-8">
        <H1>Empresas Parceiras</H1>
        <Separator className="mt-4 w-32 mx-auto" />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-16" />
          ))}
        </div>
      ) : partners.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((company) => (
            <Card key={company.id} className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{company.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* adicionar logo, descrição, etc no futuro */}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <P className="text-muted-foreground">Nenhuma empresa cadastrada.</P>
        </div>
      )}
    </main>
  );
}