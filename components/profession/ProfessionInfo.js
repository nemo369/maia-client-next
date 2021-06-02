import React from 'react';

function ProfessionInfo({ profession }) {
  return (
    <article className="bg-white rounded py-8 px-4 ml-4 w-full">
      <header className="flex mb-7">
        <h2 className="ml-auto text-2xl font-bold">ניהול רשתות תקשורת</h2>
        <span>heart</span>
        <span>80</span>
      </header>
      <p>{profession}</p>
      <footer className="mt-4 flex">
        <button type="button">בדוק משרות פנויות</button>
        <button type="button">בדוק מסלולי לימוד</button>
      </footer>
    </article>
  );
}

export default ProfessionInfo;
