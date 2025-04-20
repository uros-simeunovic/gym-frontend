import uplatnica from "@/assets/uplatnica.png"

export const Payment = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Placanje</h1>
        <p className="text-lg mb-8">Hvala sto ste zainteresovani</p>
        <img src={uplatnica} alt="uplatnica" />
      </div>
    </div>
  )
}