import { firebaseDatabase } from "./firebase";

class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove(card);
  }
}

export default CardRepository;

// 1: {
//     id: "1",
//     name: "Ellie",
//     company: "Samsung",
//     theme: "dark",
//     title: "Software Engineer",
//     email: "ellie@gmail.com",
//     message: "go for it",
//     fileName: "ellie",
//     fileURL: null,
//   },
//   2: {
//     id: "2",
//     name: "Ellie2",
//     company: "Samsung",
//     theme: "light",
//     title: "Software Engineer",
//     email: "ellie@gmail.com",
//     message: "go for it",
//     fileName: "ellie",
//     fileURL: "ellie.png",
//   },
//   3: {
//     id: "3",
//     name: "Ellie3",
//     company: "Samsung",
//     theme: "colorful",
//     title: "Software Engineer",
//     email: "ellie@gmail.com",
//     message: "go for it",
//     fileName: "ellie",
//     fileURL: null,
//   },
