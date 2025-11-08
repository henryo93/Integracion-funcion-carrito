
export default function TercerLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Paginas cargadas en el tercer layout</h1>
      {children}
    </div>
  );
}