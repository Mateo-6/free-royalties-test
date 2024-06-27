import { useCallback } from "react";

const useSaveQuestion = (title, setTitle, choices, setNewQuestion, setQuestions, setChoices) => {
  return useCallback(() => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        title,
        choices
      },
    ]);
    setTitle("");
    setNewQuestion(false);
    setChoices([{ text: '', type: '' }, { text: '', type: '' }])
  }, [title, setQuestions, setTitle, setNewQuestion, choices, setChoices]);
};

export default useSaveQuestion;