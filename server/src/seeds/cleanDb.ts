import { Question } from '../models/index.js';
import questions from './pythonQuestions.json' with { type: 'json' };

export default async () => {
  // try {
  //   let modelExists = await models[modelName].db.db.listCollections({
  //     name: collectionName
  //   }).toArray()

  //   if (modelExists.length) {
  //     await db.dropCollection(collectionName);
  //   }
  // } catch (err) {
  //   throw err;
  // }
  try {
    await Question.deleteMany({});
    await Question.insertMany(questions);
  } catch (err) {
    console.log(err);
  }
}
