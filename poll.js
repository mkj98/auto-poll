module.exports = (client) => {
    const channelIds = [
        '760442107160166453', // testing
        '759533610893180948', // 3f.comics
    ]

    const addReactions = (message) => {
        message.react(':pepeYes:')

        setTimeout(() => {
            message.react(':pepeNo:')
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