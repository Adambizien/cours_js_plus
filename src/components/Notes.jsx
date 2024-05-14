import React, { useState } from 'react';

export default function Notes() {
    const [students, setStudents] = useState([
        { id: 1, name: 'Élève 1', mathScore: 90, scienceScore: 85 },
        { id: 2, name: 'Élève 2', mathScore: 75, scienceScore: 80 },
    ]);

    const [newStudentName, setNewStudentName] = useState('');
    const [newMathScore, setNewMathScore] = useState(0);
    const [newScienceScore, setNewScienceScore] = useState(0);
    const [ModifierBool, setModifierBool] = useState(false);
    const [ModifierId, setModifierId] = useState(0);
    const [newModifierStudentName,setnewModifierStudentName]= useState('');
    const [newModifierMathScore,setnewModifierMathScore]= useState(0);
    const [newModifierScienceScore,setnewModifierScienceScore]= useState(0);


    const handleAddStudent = () => {
        if (newStudentName.trim() !== '') {
        setStudents([
            ...students,
            {
            id: students.length + 1,
            name: newStudentName,
            mathScore: newMathScore,
            scienceScore: newScienceScore,
            },
        ]);
        setNewStudentName('');
        setNewMathScore(0);
        setNewScienceScore(0);
        }
    };

    const handleDeleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    const handleModifBool = (id) => {
        const studentToModify = students.find((student) => student.id === id);
        setnewModifierStudentName(studentToModify.name);
        setnewModifierMathScore(studentToModify.mathScore);
        setnewModifierScienceScore(studentToModify.scienceScore);
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
            scienceScore: newModifierScienceScore
        };
        setStudents(updatedStudents);
        setModifierBool(false);
    };
    
    const handleModifClose = () => {
        setModifierBool(false);
    };

  return (
    <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Notes des élèves</h2>
        <table class="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th class="border border-gray-300 px-4 py-2">Élève</th>
                    <th class="border border-gray-300 px-4 py-2">Mathématiques</th>
                    <th class="border border-gray-300 px-4 py-2">Science</th>
                    <th class="border border-gray-300 px-4 py-2">Moyenne</th>
                    <th class="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                <tr key={student.id}>
                    <td class="border border-gray-300 px-4 py-2">{student.name}</td>
                    <td class="border border-gray-300 px-4 py-2">{student.mathScore}</td>
                    <td class="border border-gray-300 px-4 py-2">{student.scienceScore}</td>
                    <td class="border border-gray-300 px-4 py-2">{(student.mathScore + student.scienceScore) / 2}</td>
                    <td class="border border-gray-300 px-4 py-2">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={()=>handleModifBool(student.id)}>Modifier</button>
                        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteStudent(student.id)}>Supprimer</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <h2 class="text-lg font-semibold mt-4 mb-2">Ajouter un nouvel élève</h2>
        <input
            type="text"
            placeholder="Nom de l'élève"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)}
            class="border border-gray-300 px-4 py-2 mb-2 w-full"
        />
        <input
            type="number"
            placeholder="Note en mathématiques"
            value={newMathScore}
            onChange={(e) => setNewMathScore(parseInt(e.target.value))}
            class="border border-gray-300 px-4 py-2 mb-2 w-full"
        />
        <input
            type="number"
            placeholder="Note en sciences"
            value={newScienceScore}
            onChange={(e) => setNewScienceScore(parseInt(e.target.value))}
            class="border border-gray-300 px-4 py-2 mb-2 w-full"
        />
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddStudent}>Ajouter</button>
        { ModifierBool && 
            <div class="mt-4">
                <h2 class="text-lg font-semibold">Modifier l'élève <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={()=>handleModifClose()}>X</button></h2>
                <input
                    type="text"
                    placeholder="Nom de l'élève"
                    value={newModifierStudentName}
                    onChange={(e) => setnewModifierStudentName(e.target.value)}
                    class="border border-gray-300 px-4 py-2 mb-2 w-full"
                />
                <input
                    type="number"
                    placeholder="Note en mathématiques"
                    value={newModifierMathScore}
                    onChange={(e) => setnewModifierMathScore(parseInt(e.target.value))}
                    class="border border-gray-300 px-4 py-2 mb-2 w-full"
                />
                <input
                    type="number"
                    placeholder="Note en sciences"
                    value={newModifierScienceScore}
                    onChange={(e) => setnewModifierScienceScore(parseInt(e.target.value))}
                    class="border border-gray-300 px-4 py-2 mb-2 w-full"
                />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleModifStudent}>Modifier</button>
            </div>
        }
    </div>
  );
}

 
