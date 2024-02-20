import { addKeyword } from "@bot-whatsapp/bot";

export default addKeyword(["modelos", "modelo", "polos"])
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
