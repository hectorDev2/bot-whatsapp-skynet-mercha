import { addKeyword } from "@bot-whatsapp/bot";
import flowProducts from "./products.flow.ts";

export default addKeyword(["hola", "alo", "comprar"])
  .addAnswer(
    "¡Hola! 👋 Bienvenido al servicio de venta de polos de Skynet. Encantado de tenerte por aquí. 🎉 Te invito a explorar nuestra colección de polos de alta calidad. 🛍️ Visita nuestra página web en https://www.skynetmerchandising.com/ para descubrir las últimas tendencias y realizar tus pedidos de manera fácil y segura."
  )
  .addAnswer("👕 Ofrecemos polos con diseños personalizados y exclusivos 👕")
  .addAnswer(
    ["1.-Ver Diseños Personalizados", "2.-Ver Diseños Variados"],
    { capture: true },
    async (ctx, { flowDynamic, gotoFlow }) => {
      if (ctx.body == "1") {
        return flowDynamic([
          {
            body: "Modelo 1",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/1.png",
          },

          {
            body: "Modelo 2",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/2.png",
          },
          {
            body: "Modelo 3",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/3.png",
          },
          {
            body: "Modelo 4",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/4.png",
          },
          {
            body: "Modelo 5",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/5.png",
          },
          {
            body: "Modelo 6",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/6.png",
          },
          {
            body: "Modelo 7",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/7.png",
          },
          {
            body: "Modelo 8",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/8.png",
          },
          {
            body: "Modelo 9",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/9.png",
          },
          {
            body: "Modelo 10",
            media:
              "https://www.skynetmerchandising.com/polos/personalizados/10.png",
          },
        ]);
      }
      if (ctx.body == "2") {
        return gotoFlow(flowProducts);
      }
    }
  )
  .addAnswer(
    "si desea algun modelo reenvie el modelo escogido con la palabra *comprar*"
  )
  .addAnswer("Para cordinar su envio contactar con 984277984 🚚 🚚")
  .addAnswer("y en breve lo atenderemos")
  .addAnswer("en caso contrario escribe *hola* para interactuar denuevo");
