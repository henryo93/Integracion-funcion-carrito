
export default function  LayoutSecundario({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Paginas cargadas en el layout secundario</h1>
      {children}
    </div>
  );
}