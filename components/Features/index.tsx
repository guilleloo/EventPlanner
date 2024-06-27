import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="VISION"
            paragraph="Ser la plataforma líder en organización de eventos, reconocida por nuestra excelencia y compromiso para con nuestros clientes.
Queremos ser el lugar donde las ideas cobran vida y las celebraciones se conviertan en momentos inolvidables."
            center
          />
          <SectionTitle
            title="MISION"
            paragraph="En Next Party, transformamos cada momento en una experiencia unica, reuniendo a los mejores proveedores para facilitar la planificación y garantizar los mejores resultados.
Creamos esta plataforma con la idea de mejorar tu experiencia a la hora de organizar tu fiesta o evento, centralizando  tus proveedores  y buscando tu mejor opción en un solo lugar.
Esperamos que puedas disfrutar del proceso tanto como el resultado final."
            center
          />
          <h2 className="mb-14 text-center text-xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-3xl">
            BENEFICIOS QUE BRINDAMOS
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
