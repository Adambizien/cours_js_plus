import React, { useEffect, useState } from 'react';

export default function Notes() {
    const [students, setStudents] = useState([]);

    const [newStudentName, setNewStudentName] = useState('');
    const [newMathScore, setNewMathScore] = useState(0);
    const [newScienceScore, setNewScienceScore] = useState(0);
    const [newSportChambre, setNewSportChambre] = useState(0);
    const [ModifierBool, setModifierBool] = useState(false);
    const [ModifierId, setModifierId] = useState(0);
    const [newModifierStudentName,setnewModifierStudentName]= useState('');
    const [newModifierMathScore,setnewModifierMathScore]= useState(0);
    const [newModifierScienceScore,setnewModifierScienceScore]= useState(0);
    const [newModifierSportChambre,setnewModifierSportChambre]= useState(0);
    

    const saveToLocalStorage = (data) => {
        localStorage.setItem('students', JSON.stringify(data));
    };
    const getFromLocalStorage = () => {
        const savedStudents = localStorage.getItem('students');
        return savedStudents ? JSON.parse(savedStudents) : [];
    };
    useEffect(() => {
        const savedStudents = getFromLocalStorage();
        setStudents(savedStudents);
    }, []);

    const handleAddStudent = () => {
        if (newStudentName.trim() !== '') {
            const newStudent = {
                id: students.length + 1,
                name: newStudentName,
                mathScore: newMathScore,
                scienceScore: newScienceScore,
                sportChambre: newSportChambre
            };
            const updatedStudents = [...students, newStudent];
            setStudents(updatedStudents);
            saveToLocalStorage(updatedStudents);
            setNewStudentName('');
            setNewMathScore(0);
            setNewScienceScore(0);
            setNewSportChambre(0);
        }
    };

    const handleDeleteStudent = (id) => {
        const updatedStudents = students.filter((student) => student.id !== id);
        setStudents(updatedStudents);
        saveToLocalStorage(updatedStudents);

    };

    const handleModifBool = (id) => {
        const studentToModify = students.find((student) => student.id === id);
        setnewModifierStudentName(studentToModify.name);
        setnewModifierMathScore(studentToModify.mathScore);
        setnewModifierScienceScore(studentToModify.scienceScore);
        setnewModifierSportChambre(studentToModify.sportChambre);
        setModifierBool(true);
        setModifierId(id);
    };
        
    const handleModifStudent = () => {
        const studentIndex = students.findIndex((student) => student.id === ModifierId);
        const updatedStudents = [...students];
        updatedStudents[studentIndex] = {
            ...updatedStudents[studentIndex],
            name: newModifierStudentName,
            mathScore: newModifierMathScore,
            scienceScore: newModifierScienceScore,
            sportChambre: newModifierSportChambre
        };
        setStudents(updatedStudents);
        saveToLocalStorage(updatedStudents);
        setModifierBool(false);
    };
    
    const handleModifClose = () => {
        setModifierBool(false);
    };

    const calculateAverage = (student) => {
        let totalScore = 0;
        let count = 0;
        Object.keys(student).forEach(subject => {
            if(typeof student[subject] === 'number' && subject !== 'id' && subject !== 'name'){
                console.log(student[subject]);
                totalScore += student[subject];
                count++;
            }
        });
        return totalScore / count;
    };

  return (
    <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Notes des élèves</h2>
        <div class="flex flex-row mb-2">
            <div class="w-1/4">
                <h2 className="text-lg font-semibold mt-4 mb-2">Ajouter un nouvel élève</h2>
                <input
                    type="text"
                    placeholder="Nom de l'élève"
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    className="border border-gray-300 px-4 py-2 mb-2 w-[350px]"
                />
                <br />
                <input
                    type="number"
                    placeholder="Note en mathématiques"
                    value={newMathScore}
                    onChange={(e) => setNewMathScore(parseInt(e.target.value))}
                    className="border border-gray-300 px-4 py-2 mb-2  w-[350px]"
                />
                <br />
                <input
                    type="number"
                    placeholder="Note en sciences"
                    value={newScienceScore}
                    onChange={(e) => setNewScienceScore(parseInt(e.target.value))}
                    className="border border-gray-300 px-4 py-2 mb-2  w-[350px]"
                />
                <br />
                <input
                    type="number"
                    placeholder="Note en sport de chambre"
                    value={newSportChambre}
                    onChange={(e) => setNewSportChambre(parseInt(e.target.value))}
                    className="border border-gray-300 px-4 py-2 mb-2  w-[350px]"
                />
                <br />
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddStudent}>Ajouter</button>
            </div>
            
            { ModifierBool && 
                <div className="mt-4 w-1/4">
                    <h2 className="text-lg font-semibold">Modifier l'élève <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={()=>handleModifClose()}>X</button></h2>
                    <input
                        type="text"
                        placeholder="Nom de l'élève"
                        value={newModifierStudentName}
                        onChange={(e) => setnewModifierStudentName(e.target.value)}
                        className="border border-gray-300 px-4 py-2 mb-2 w-[350px]"
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Note en mathématiques"
                        value={newModifierMathScore}
                        onChange={(e) => setnewModifierMathScore(parseInt(e.target.value))}
                        className="border border-gray-300 px-4 py-2 mb-2 w-[350px]"
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Note en sciences"
                        value={newModifierScienceScore}
                        onChange={(e) => setnewModifierScienceScore(parseInt(e.target.value))}
                        className="border border-gray-300 px-4 py-2 mb-2 w-[350px]"
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="Note en sport de chambre"
                        value={newModifierSportChambre}
                        onChange={(e) => setnewModifierSportChambre(parseInt(e.target.value))}
                        className="border border-gray-300 px-4 py-2 mb-2 w-[350px]"
                    />
                    <br />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleModifStudent}>Modifier</button>
                </div>
            }
        </div>
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Élève</th>
                    <th className="border border-gray-300 px-4 py-2">Mathématiques</th>
                    <th className="border border-gray-300 px-4 py-2">Science</th>
                    <th className="border border-gray-300 px-4 py-2">Sport de chambre</th>
                    <th className="border border-gray-300 px-4 py-2">Moyenne</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                <tr key={student.id}>
                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.mathScore}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.scienceScore}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.sportChambre}</td>
                    
                    <td className="border border-gray-300 px-4 py-2">{calculateAverage(student)}</td>
                    <td className="border border-gray-300 px-4 py-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>handleModifBool(student.id)}>Modifier</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteStudent(student.id)}>Supprimer</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
       
    </div>
  );
}

 
