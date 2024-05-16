import nftt4 from '/public/img/nfts/Nftt4.png';

const Banner1 = () => {
  return (
    <div
      className="flex w-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{
        backgroundColor: '#0b1437',  // Establece el color de fondo directamente
        border: '0  px solid rgba(255, 255, 255, 0.3)', // Borde claro y medio transparente
        backgroundImage: `url(${nftt4.src})`,
        backgroundPosition: '-200% 50%' // El primer valor controla la posición horizontal, el segundo la vertical
      }}
    >
      <div className="w-full">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
        "Beneficios exclusivos y productos financieros diversificados"
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          "Explora un enfoque financiero en un entorno digital seguro y respaldado por la tecnología blockchain."
        </p>

        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            Invertir
          </button>
          <button className="text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2">
            Contrato PXO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
