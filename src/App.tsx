
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TabelasCustas from "./pages/TabelasCustas";
import RegistroImoveis from "./pages/RegistroImoveis";
import TitulosDocumentos from "./pages/TitulosDocumentos";
import PessoaJuridica from "./pages/PessoaJuridica";
import Compliance from "./pages/Compliance";
import ProtecaoDados from "./pages/ProtecaoDados";
import Serventia from "./pages/Serventia";
import TrabalheConosco from "./pages/TrabalheConosco";
import PesquisaSatisfacao from "./pages/PesquisaSatisfacao";
import FaleConosco from "./pages/FaleConosco";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tabelas-de-custas" element={<TabelasCustas />} />
          <Route path="/registro-de-imoveis" element={<RegistroImoveis />} />
          <Route path="/registro-de-imoveis/circunscricao" element={<RegistroImoveis />} />
          <Route path="/registro-de-imoveis/documentos" element={<RegistroImoveis />} />
          <Route path="/registro-de-imoveis/protocolos" element={<RegistroImoveis />} />
          <Route path="/registro-de-imoveis/busca" element={<RegistroImoveis />} />
          <Route path="/registro-de-imoveis/requerimentos" element={<RegistroImoveis />} />
          <Route path="/registro-de-imoveis/servicos-eletronicos" element={<RegistroImoveis />} />
          <Route path="/registro-de-imoveis/usucapiao" element={<RegistroImoveis />} />
          <Route path="/titulos-e-documentos" element={<TitulosDocumentos />} />
          <Route path="/titulos-e-documentos/protocolos" element={<TitulosDocumentos />} />
          <Route path="/titulos-e-documentos/requerimentos" element={<TitulosDocumentos />} />
          <Route path="/titulos-e-documentos/servico-eletronico" element={<TitulosDocumentos />} />
          <Route path="/pessoa-juridica" element={<PessoaJuridica />} />
          <Route path="/pessoa-juridica/protocolos" element={<PessoaJuridica />} />
          <Route path="/pessoa-juridica/requerimentos" element={<PessoaJuridica />} />
          <Route path="/pessoa-juridica/servico-eletronico" element={<PessoaJuridica />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/protecao-de-dados" element={<ProtecaoDados />} />
          <Route path="/protecao-de-dados/politica-privacidade" element={<ProtecaoDados />} />
          <Route path="/protecao-de-dados/lgpd" element={<ProtecaoDados />} />
          <Route path="/serventia" element={<Serventia />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/pesquisa-de-satisfacao" element={<PesquisaSatisfacao />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
