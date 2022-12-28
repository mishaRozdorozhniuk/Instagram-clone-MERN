import * as actions from '../actionTypes.js';
import profilePostFoto1 from '../../icons/profPost1.jpeg';
import profilePostFoto2 from '../../icons/profPost2.jpeg';
import profilePostFoto3 from '../../icons/profPost3.jpeg';
import profilePostFoto4 from '../../icons/profPost4.jpeg';
import profilePostFoto5 from '../../icons/profPost5.jpeg';

let initialState = [
  {
    id: 1,
    nickName: '__procherk__',
    subtitle: 'The best programmer in the world',
    countOfLikes: 98,
    photoDescription: 'I love my girlfriend 💗💗💗',
    dateOfPost: '11 минут назад',
    photoOfPost: profilePostFoto1,
    comment: [
      {
        senderName: 'sonnechkaaa',
        senderCommentText: 'Милашка!!!'
      },
      {
        senderName: 'Anybis2005',
        senderCommentText: 'круть'
      },
      {
        senderName: 'Vlad',
        senderCommentText: 'Hey Boy!'
      },
      {
        senderName: 'Max',
        senderCommentText: "it' my friend"
      }
    ]
  },
  {
    id: 2,
    nickName: 'platitenalogi',
    subtitle: 'Second best programmer in the world',
    countOfLikes: 54,
    photoDescription: 'your girlfriend the best one',
    dateOfPost: '3 дней назад',
    photoOfPost: profilePostFoto2,
    comment: [
      {
        senderName: 'platitenalogi',
        senderCommentText: 'чувак да ты на меня похож тебе не кажется?'
      },
      {
        senderName: 'Span Company',
        senderCommentText: 'оффер на твоей почте!'
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
    photoOfPost: profilePostFoto3,
    comment: [
      {
        senderName: '__procherk__',
        senderCommentText: 'оставил коммент сам себе'
      },
      {
        senderName: 'lordOfDark',
        senderCommentText: 'я бы теней добавил'
      }
    ]
  },
  {
    id: 4,
    nickName: 'armagedon',
    subtitle: 'Give me five dollars please',
    countOfLikes: 94,
    photoDescription: 'I want smuzi',
    dateOfPost: '1 час назад',
    photoOfPost: profilePostFoto4,
    comment: [
      {
        senderName: 'ancous',
        senderCommentText: 'Hey milka I love fish'
      },
      {
        senderName: 'milka',
        senderCommentText: 'I love milka men'
      }
    ]
  },
  {
    id: 5,
    nickName: 'maxim',
    subtitle: 'Give me five dollars please',
    countOfLikes: 94,
    photoDescription: 'I love you __procherk__',
    dateOfPost: '1 час назад',
    photoOfPost: profilePostFoto5,
    comment: [
      {
        senderName: 'cucumber365',
        senderCommentText: '...'
      },
      {
        senderName: 'kk_irill',
        senderCommentText: 'I am kirill'
      },
      {
        senderName: 'Ulbi tv',
        senderCommentText: 'check my new video dude'
      }
    ]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.CURRENT_POST:
      return { ...state, currentPost: state.find((el) => el.id === action.payload) };
    case actions.CURRENT_PROFILE_POST:
      // eslint-disable-next-line no-case-declarations
      let { payload } = action;
      return {
        ...state,
        currentProfilePost: payload?.postData.find((profilePost) => profilePost.id === payload.id)
      };
    default:
      return state;
  }
};
