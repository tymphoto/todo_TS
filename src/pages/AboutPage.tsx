import React from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Страница информации</h1>
      <p>разработал Артем Тимошенко</p>
      <button className="btn" onClick={() => navigate('/')} >Обратно к списку дел</button>
    </div>
  )
}
