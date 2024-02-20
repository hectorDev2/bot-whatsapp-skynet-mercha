import {
  addKeyword,
  createBot,
  createFlow,
  createProvider,
  MemoryDB,
} from "@bot-whatsapp/bot";
import { BaileysProvider } from "@bot-whatsapp/provider-baileys";

const flowWelcome = addKeyword(["hola", "alo", "comprar"])
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
  .addAnswer("si desea algun modelo porfavor escribir `comprar`");

const flowProducts = addKeyword(["modelos", "modelo", "polos"])
  .addAnswer("tenemos polos en modelos como:")
  .addAnswer([
    "1.- Anime",
    "2.- Half life",
    "3.- star craft",
    "4.- God of war",
    "5.- Nintendo",
    "6.- Metal slug",
    "7.- Dota 2",
    "8.- Counter Strike",
  ])
  .addAction(async (_, { flowDynamic }) => {
    return flowDynamic("elige una opcion:");
  })
  .addAction({ capture: true }, async (ctx, { flowDynamic, state }) => {
    await state.update({ option: ctx.body });
    const option = {
      "1": "Anime",
      "2": "Half life",
      "3": "star craft",
      "4": "God of war",
      "5": "Nintendo",
      "6": "Metal slug",
      "7": "Dota 2",
      "8": "Counter Strike",
    }[ctx.body];
    console.log(option, "option");
    if (ctx.body == "1") {
      return flowDynamic([
        {
          body: "Modelo 1",
          media: "https://www.skynetmerchandising.com/polos/anime/1.png",
        },

        {
          body: "Modelo 2",
          media: "https://www.skynetmerchandising.com/polos/anime/2.png",
        },
        {
          body: "Modelo 3",
          media: "https://www.skynetmerchandising.com/polos/anime/3.png",
        },
        {
          body: "Modelo 4",
          media: "https://www.skynetmerchandising.com/polos/anime/4.png",
        },
      ]);
    }
    if (ctx.body == "2") {
      return flowDynamic([
        {
          body: "Modelo 1",
          media: "https://www.skynetmerchandising.com/polos/counter/1.png",
        },

        {
          body: "Modelo 2",
          media: "https://www.skynetmerchandising.com/polos/counter/2.png",
        },
        {
          body: "Modelo 3",
          media: "https://www.skynetmerchandising.com/polos/counter/3.png",
        },
      ]);
    }
    if (ctx.body == "3") {
      return flowDynamic([
        {
          body: "Modelo 1",
          media: "https://www.skynetmerchandising.com/polos/starcraft/1.png",
        },

        {
          body: "Modelo 2",
          media: "https://www.skynetmerchandising.com/polos/starcraft/2.png",
        },
        {
          body: "Modelo 3",
          media: "https://www.skynetmerchandising.com/polos/starcraft/3.png",
        },
      ]);
    }
    if (ctx.body == "4") {
      return flowDynamic([
        {
          body: "Modelo 1",
          media: "https://www.skynetmerchandising.com/polos/gow/1.png",
        },

        {
          body: "Modelo 2",
          media: "https://www.skynetmerchandising.com/polos/gow/2.png",
        },
        {
          body: "Modelo 3",
          media: "https://www.skynetmerchandising.com/polos/gow/3.png",
        },
        {
          body: "Modelo 4",
          media: "https://www.skynetmerchandising.com/polos/gow/5.png",
        },
      ]);
    }
    if (ctx.body == "5") {
      return flowDynamic([
        {
          body: "Modelo 1",
          media: "https://www.skynetmerchandising.com/polos/nintendo/1.png",
        },

        {
          body: "Modelo 2",
          media: "https://www.skynetmerchandising.com/polos/nintendo/2.png",
        },
        {
          body: "Modelo 3",
          media: "https://www.skynetmerchandising.com/polos/nintendo/3.png",
        },
      ]);
    }
    if (ctx.body == "6") {
      return flowDynamic([
        {
          body: "Metal Slug",
          media: "https://www.skynetmerchandising.com/polos/metal_slug/1.png",
        },
      ]);
    }
    if (ctx.body == "7") {
      return flowDynamic([
        {
          body: "Modelo 1",
          media: "https://www.skynetmerchandising.com/polos/dota2/1.png",
        },
        {
          body: "Modelo 2",
          media: "https://www.skynetmerchandising.com/polos/dota2/2.png",
        },
        {
          body: "Modelo 3",
          media: "https://www.skynetmerchandising.com/polos/dota2/3.png",
        },
        {
          body: "Modelo 4",
          media: "https://www.skynetmerchandising.com/polos/dota2/4.png",
        },
      ]);
    }
    if (ctx.body == "8") {
      return flowDynamic([
        {
          body: "Modelo 1",
          media: "https://www.skynetmerchandising.com/polos/counter/1.png",
        },
        {
          body: "Modelo 2",
          media: "https://www.skynetmerchandising.com/polos/counter/2.png",
        },
        {
          body: "Modelo 3",
          media: "https://www.skynetmerchandising.com/polos/counter/3.png",
        },
      ]);
    }
  });

const main = async () => {
  const provider = createProvider(BaileysProvider);

  await createBot({
    flow: createFlow([flowWelcome, flowProducts]),
    database: new MemoryDB(),
    provider,
  });
};
main();
