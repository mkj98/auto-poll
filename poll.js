module.exports = (client) => {
    const channelIds = [
        '760442107160166453', // testing
        '759533610893180948', // 3f.comics
        '764827649667235841'
    ]

    const addReactions = (message) => {
        const reactYes = client.emojis.cache.get('764830590184062986');
        message.react(reactYes);

        setTimeout(() => {
            const reactNo = client.emojis.cache.get('764830339444768778');
            message.react(reactNo)
        }, 750)
    }

    client.on('message', async (message) => {
        if (channelIds.includes(message.channel.id)) {
            addReactions(message)
        } else if (message.content.toLowerCase() === '!poll') {
            await message.delete()

            const fetched = await message.channel.messages.fetch({ limit: 1 })
            if (fetched && fetched.first()) {
                addReactions(fetched.first())
            }
        }
    })
}