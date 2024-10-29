const TelegramBot = require('node-telegram-bot-api');

// const token = 'YOUR_BOT_TOKEN';

// const bot = new TelegramBot(token, {polling: true});

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Welcome! I am a basic Telegram bot.');
// });

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Available commands:\n/start - Start the bot\n/help - Show this help message\n/echo [message] - Echo your message');
});

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'I can only respond to commands. Try /help to see available commands.');
});

console.log('Bot is running...');