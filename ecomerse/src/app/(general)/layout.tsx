import NavBar from "../Componentes/NavBar";
import ProviderProducto from '../Providers/ProviderProducto'

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    
    <div>

      <ProviderProducto>
        <NavBar></NavBar>
        {children}
      </ProviderProducto>

    </div>
  );
}