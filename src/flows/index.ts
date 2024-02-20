import productsFlow from "./products.flow.ts";
import welcomeFlow from "./welcome.flow.ts";
import BotWhatsapp from "@bot-whatsapp/bot";

export default BotWhatsapp.createFlow([welcomeFlow, productsFlow]);
