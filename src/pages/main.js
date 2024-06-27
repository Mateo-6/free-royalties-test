"use client";

import React, { useState, useCallback } from "react";

// UI
import {
  DialogDescription
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

// Components
import { Question } from "../components/question";
import Modal  from "../components/modal";

// Custom hooks
import useSaveQuestion from "../hooks/useSaveQuestion";

function MainPage () {
  const [title, setTitle] = useState("");
  const [newQuestion, setNewQuestion] = useState(false);
  const [choices, setChoices] = useState([{ text: '', type: '' }, { text: '', type: '' }]);
  const [questions, setQuestions] = useState([]);

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleAddNewQuestion  = useCallback((e) => {
    setNewQuestion(true);
  }, []);

  const handleSaveChoice = (index) => (text, type) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = { text, type };
    setChoices(updatedChoices);
  };

  const handleSave = useSaveQuestion(
    title,
    setTitle,
    choices,
    setNewQuestion,
    setQuestions,
    setChoices
  );

  const handleCheckChoices = () => {
    const anyEmpty = choices.some(choice => choice.text === '' || choice.type === '');
    return anyEmpty;
  }

  return(
    <div className="w-full">
      <Modal isOpen={true}>
        <DialogDescription  className="flex w-full items-center space-x-2">
            <Input type="text" placeholder="Title" onChange={handleChangeTitle} value={title} className="w-5/6" id="title"/>
            <Button disabled={!title} onClick={handleAddNewQuestion }>Add question</Button>
        </DialogDescription>
        { newQuestion &&
          <>
            <hr className="border-gray-300" />  
            {
              choices.map((choice, index) => ( 
                <div key={index}>
                  <Question handleSaveChoice={handleSaveChoice} index={index} choice={choice}/>
                </div> 
              ))
            }
            <div className="flex w-full justify-end">
              <Button disabled={handleCheckChoices()} onClick={handleSave}>Save</Button>
            </div>
          </>
        }
      </Modal>
      
      { questions.length > 0 && <h2 className="text-4xl mt-4"> Questions: </h2>}
      <div className="grid sm:grid-cols-4 grid-cols-1 mt-8 gap-4">
        {questions.map((q, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md">
            <h2 className="text-lg font-medium mb-2">{q.title}</h2>
            <span className="text-lg text-sm mb-2">Choices:</span>
            <ul className="list-disc ml-6">
              {q.choices.map((choice, i) => (
                <li key={i}>
                  {choice.text} - {choice.type}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage