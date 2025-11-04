function calcularDiferencaAnosMesesDias(dataInicio, dataFim) {
  let anos = dataFim.getFullYear() - dataInicio.getFullYear();
  let meses = dataFim.getMonth() - dataInicio.getMonth();
  let dias = dataFim.getDate() - dataInicio.getDate();

  if (dias < 0) {
    meses--; 

    dias += new Date(dataFim.getFullYear(), dataFim.getMonth(), 0).getDate();
  }


  if (meses < 0) {
    anos--; 
    meses += 12; 
  }

  return { anos, meses, dias };
}
export default function Contador(){
  const dataInicio = new Date(2025, 4, 2);
  const atual = new Date();

  const diferenca = calcularDiferencaAnosMesesDias(dataInicio, atual);

  const diferencaMs = atual - dataInicio;
  const totalDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));




  return(
 
      <>
        <h1 className="font-[Poppins] text-2xl font-semibold text-gray-800">Eu te amo a</h1>
        {diferenca.anos} anos, {diferenca.meses} meses, {diferenca.dias} dias <br />
        <h4>convertendo, isso da 🤓 ☝️</h4>
        dias totais {totalDias} 






      </>
  )
}
