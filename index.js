const restify = require('restify');
const { BotFrameworkAdapter } = require('botbuilder');

const adapter = new BotFrameworkAdapter();

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`Bot is listening`);
});

server.post('/api/messages', async (req, res) => {
  await adapter.processActivity(req, res, async (context) => {
    await context.sendActivity(`こんにちは！あなたは「${context.activity.text}」と言いましたね。`);
  });
});
