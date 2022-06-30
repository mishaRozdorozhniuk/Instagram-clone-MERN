const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const PORT = 3003

app.use(bodyParser.urlencoded({ etended: false }))
app.use(bodyParser.json())

const postInfo = [{
        id: 1,
        nickName: '__procherk__',
        subtitle: 'The best programmer in the world',
        countOfLikes: 98,
        photoDescription: 'I love my girlfriend 💗💗💗',
        dateOfPost: '11 минут назад',
        comment: [{
                senderName: 'sonnechkaaa',
                senderCommentText: 'Милашка!!!',
            },
            {
                senderName: 'Anybis2005',
                senderCommentText: 'круть',
            },
            {
                senderName: 'Vlad',
                senderCommentText: 'Hey Boy!',
            },
            {
                senderName: 'Max',
                senderCommentText: 'it\' my friend',
            }
        ]
    },
    {
        id: 2,
        nickName: 'platitenalogi',
        subtitle: 'Second best programmer in the world',
        countOfLikes: 54,
        photoDescription: '__procherk__ girlfriend the best one',
        dateOfPost: '3 дней назад',
        comment: [{
                senderName: 'platitenalogi',
                senderCommentText: 'чувак да ты на меня похож тебе не кажется?',
            },
            {
                senderName: 'Span Company',
                senderCommentText: 'оффер на твоей почте!',
            }
        ]
    },
    {
        id: 3,
        nickName: 'sonnechkaaa',
        subtitle: 'The best girlfriend in the world',
        countOfLikes: 100357,
        photoDescription: 'I love you __procherk__',
        dateOfPost: '23 минут назад',
        comment: [{
                senderName: '__procherk__',
                senderCommentText: 'оставил коммент сам себе',
            },
            {
                senderName: 'lordOfDark',
                senderCommentText: 'я бы теней добавил',
            }
        ]
    },
]

const profile = [{
        id: 'lox',
        title: 'lox',
        img: 'https://img.gazeta.ru/files3/623/10191623/upload-2pac2-pic_32ratio_900x600-900x600-9964.jpg',
        posts: 28,
        followers: 123,
        follower: 135
    },
    {
        id: 'platitenalogi',
        title: 'platitenalogi',
        img: 'https://img.gazeta.ru/files3/623/10191623/upload-2pac2-pic_32ratio_900x600-900x600-9964.jpg',
        posts: 28,
        followers: 123,
        follower: 135
    }
]

app.get("/posts", (req, res) => {
    res.send(postInfo)
})

app.get("/profile/:profileName", (req, res) => {
    res.send(profile)
})

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))