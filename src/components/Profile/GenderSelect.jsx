import { useState } from "react";


function GenderSelect( {onChange} ) {
  const [gender, setGender] = useState("");
  const [focus, setFocus] = useState(false);
  const handleGenderChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label className="flex" htmlFor="gender-select">Пол</label>
      <select
        id="gender-select"
        className={`flex rounded-md border-white-20 bg-white/20 border ${focus?"text-white":"text-gray-400"} color-white shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        onFocus={()=>setFocus(true)}
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