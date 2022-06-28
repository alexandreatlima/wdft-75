import axios from "axios";
import { useState } from "react";

export function CreateTraining() {
  const [form, setForm] = useState({
    owner: "",
    goals: "",
    muscleGroup: "",
    days: [],
  });

  const [trainingByDay, setTrainingByDay] = useState({
    day: "segunda",
    workout: [],
  });

  const [exercise, setExercise] = useState({
    exercise: "supino",
    series: 0,
    reps: 0,
  });

  console.log(form, trainingByDay, exercise);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChangeTrainingByDay(e) {
    setTrainingByDay({ ...trainingByDay, [e.target.name]: e.target.value });
  }

  function handleChangeExercise(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  }

  function handleAddExercise() {
    setTrainingByDay({
      ...trainingByDay,
      workout: [...trainingByDay.workout, exercise],
    });
  }

  function handleAddDayOfWorkout() {
    setForm({ ...form, days: [...form.days, trainingByDay] });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post("https://ironrest.herokuapp.com/react-fitness", form);
  }

  return (
    <>
      <h1>Crie o seu treino:</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="owner-input">Seu nome:</label>
        <input
          id="owner-input"
          value={form.owner}
          type="string"
          name="owner"
          onChange={handleChange}
          required
        />
        <label htmlFor="goals-input">Objetivos:</label>
        <input
          id="goals-input"
          value={form.goals}
          type="string"
          name="goals"
          onChange={handleChange}
        />
        <label htmlFor="muscleGroup-input">Grupo muscular:</label>
        <input
          id="muscleGroup-input"
          value={form.muscleGroup}
          type="string"
          name="muscleGroup"
          onChange={handleChange}
        />

        <h2>Dias de treino:</h2>
        <label htmlFor="day-input">Dia:</label>
        <select id="day-input" name="day" onChange={handleChangeTrainingByDay}>
          <option value="segunda">Segunda</option>
          <option value="terça">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sabado</option>
          <option value="domingo">Domingo</option>
        </select>
        <label htmlFor="exercise-input">Exercicios:</label>
        <select
          id="exercise-input"
          name="exercise"
          onChange={handleChangeExercise}
        >
          <option value="supino">Supino</option>
          <option value="levantamento-terra">Levantamento terra</option>
          <option value="agachamento">Agachamento</option>
        </select>
        <label htmlFor="series-input">Numero de series:</label>
        <input
          id="series-input"
          type="number"
          value={exercise.series}
          onChange={handleChangeExercise}
          name="series"
        />
        <label htmlFor="reps-input">Numero de reps:</label>
        <input
          id="reps-input"
          type="number"
          value={exercise.reps}
          onChange={handleChangeExercise}
          name="reps"
        />
        <button type="button" onClick={handleAddExercise}>
          Adicionar exercicio
        </button>

        <button type="button" onClick={handleAddDayOfWorkout}>
          Adicionar treino do dia
        </button>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
