# React Timed Quiz Game
## Helping B2 German learners memorize verb and preposition pairs

### Sentences
- uses random generator to create sentences
  - there are object categories to select an object that fits with the verb, but some sentenses may sound funny
  - some verbs have 2 possible prepositions as answers, pay attention to the object to give you a hint
- supports stative, reflexive & seperable verbs
- verb endings are altered based on subject. Irregular verbs are also supported

### UI
- Diamond: number of correct answers
- Center Box: current score
  - when enough points are reached, it transforms into a freeze item. Tap the item to briefly pause the timer
  - when freeze is used, the score for current question is halved
- Heart: number of lives remaining

### Difficulty
- higher difficulty means:
  - fewer lives
  - less time per question
  - higher score per question
  - score required per item increases

### Highscores
- records 5 highest scores, date and difficulty to local storage

### Wordbook
- lists all verbs used in game with Perfect and Präteritum forms
- also translations to English & Russian
