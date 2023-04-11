import { useState } from "react";


function GenderSelect() {
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="flex items-center bg-transperent pb-2">
     
      <select
        id="gender-select"
        className="rounded-md border-white-20 bg-white/20 border text-white color-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={gender}
        onChange={handleGenderChange}
      >
        <option className="bg-white/20 text-black" value="male">Мужской</option>
    <option className="bg-white/20  text-black" value="female">Женский</option>
    <option className="bg-white/20  text-black" value="non-binary">Вертолет Апач</option>
      </select>
    </div>
  );
}
 export default GenderSelect