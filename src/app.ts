import { createBot, createProvider, MemoryDB } from "@bot-whatsapp/bot";
import { BaileysProvider } from "@bot-whatsapp/provider-baileys";
import flow from "./flows/index";

const main = async () => {
  const provider = createProvider(BaileysProvider);
  await createBot({
    flow,
    database: new MemoryDB(),
    provider,
  });
};
main();
