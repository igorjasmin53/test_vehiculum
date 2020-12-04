import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: 1,
        name: 'adult jokes',
        color: '#ff5b5b'
      },
      {
        id: 2,
        name: 'dad jokes',
        color: '#ff915b'
      },
      {
        id: 3,
        name: 'christmas jokes',
        color: '#ffbe5b'
      },
      {
        id: 4,
        name: 'job jokes',
        color: '#ffdf5b'
      },
      {
        id: 5,
        name: 'birthday jokes',
        color: '#8fe360'
      },
      {
        id: 6,
        name: 'social jokes',
        color: '#57e690',
        selected: true
      },
      {
        id: 7,
        name: 'puns',
        color: '#57dbe6'
      }
    ],
    cards: [
      {
        id: 1,
        title: 'Lawyer Joke',
        content: 'A lawyer dies and goes to Heaven. "There must be some mistake," the lawyer argues. "I\'m too young to die. I\'m only 55." "Fifty-five?" says Saint Peter. "No, according to out calculations, you\'re 82." "How\'d you get that?" the lawyer asks. Answers St. Peter, "We added up your time sheets."',
        categoryId: 6,
        likes: 123,
        dislikes: 87
      },
      {
        id: 2,
        title: 'Doctor Joke',
        content: 'I’d never had surgery, and I was nervous. “This is a very simple, noninvasive procedure,” the anesthesiologist reassured me. I felt better, until … “Heck,” he continued, “you have a better chance of dying from the anesthesia than the surgery itself.”',
        categoryId: 6,
        likes: 19,
        dislikes: 27
      },
      {
        id: 3,
        title: 'Business Joke',
        content: 'I went to my boss at work and said, "I need a raise. Three other companies are after me." He said, "Really? Which other companies are after you?"\n' +
          'I said, "The electric company, the gas company and the phone company.',
        categoryId: 6,
        likes: 51,
        dislikes: 20
      },
      {
        id: 4,
        title: 'Police joke',
        content: 'An officer conducting speed enforcement stops a young man for traveling in excess of 40 mph over the speed limit. The officer approaches the driver and says, "Well, 40 over...I been waiting for you to come along all day."\n' +
          'Without pause, the young man replies, "I got here as fast as I could!"',
        categoryId: 6,
        likes: 70,
        dislikes: 16
      },
      {
        id: 5,
        title: 'Doctor joke',
        content: 'An officer observes a woman standing in the middle of the street. He approaches her and asks, "Are you okay?"\n' +
          'The woman replies, "Yes, but how do I get to the hospital?"\n' +
          'The officer replies, "Just keep standing there."',
        categoryId: 6,
        likes: 67,
        dislikes: 2
      },
      {
        id: 6,
        title: 'Boss joke',
        content: 'My boss asked me to put a joke on the first slide of the presentation…apparently a picture of my pay slip wasn’t what he was looking for.',
        categoryId: 6,
        likes: 11,
        dislikes: 21
      },
      {
        id: 7,
        title: 'The Granny joke',
        content: 'An old grandma brings a bus driver a bag of peanuts every day. \n' +
          'First the bus driver enjoyed the peanuts but after a week of eating them he asked: "Please granny, don\'t bring me peanuts anymore. Have them yourself.". \n' +
          'The granny answers: "You know, I don\'t have teeth anymore. I just prefer to suck the chocolate around them."',
        categoryId: 6,
        likes: 328,
        dislikes: 98
      }
    ],
  },
  getters: {
    cards: (state) =>
      state.cards.map(card => ({
        ...card,
        category: state.categories[card.categoryId - 1]
      })),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
