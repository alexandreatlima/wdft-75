import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function TrainingPage() {
  const { id } = useParams();
  const [training, setTraining] = useState({});
  console.log(training);

  useEffect(() => {
    async function fetchTraining() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/react-fitness/${id}`
        );

        setTraining(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchTraining();
  }, []);

  return (
    <>
      <h1>Treino do {training.owner}</h1>
      <ul>
        <li>Objetivo: {training.goals}</li>
        <li>Grupo muscular: {training.muscleGroup}</li>
      </ul>
    </>
  );
}
