const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <div className="bg-[#e8e4dc] w-full gap-1 p-8 fixed bottom-0">
      <p className="text-xs font-medium">© {currentYear} Copyright Company</p>
      <p className="text-muted-foreground text-xs font-medium">Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer
