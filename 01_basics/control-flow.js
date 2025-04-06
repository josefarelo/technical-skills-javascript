// Array de arrays con nombre de Alumno y Nota final
let alumnos = [
    ["juan", 4.5],
    ["emanuel", 6],
    ["marcos", 9],
    ["mauro", 7.25],
    ["sofia", 2.75],
    ["hernan", 'A'],
    ["diana", 8.25],
    ["carla", 5.5],
    ["esteban", 5.45],
    ["noelia", 'A'],
];

// Promediar notas
function promediarNota(nota) {
    if (typeof nota !== "number") return nota;
    return Math.floor(nota) + (nota % 1 >= 0.5 ? 1 : 0);
}

let cantidadAlumnos = alumnos.length;

// Devolver objeto de alumnos
for (i = 0; i < cantidadAlumnos; i++) {
    let nombre = alumnos[i][0];
    let nota = promediarNota(alumnos[i][1]); // Reemplazar la nota original por la promediada
    let resultadoExamen;
    let condicion;
    
    // Indicar el resultado de la evaluación
    if (nota === 'A') {
        resultadoExamen = "Ausente";
    } else if (nota < 6) {
        resultadoExamen = "Reprobado";
    } else {
        resultadoExamen = "Aprobado";
    }
    
    // Indicar la condición del alumno respecto a su nota
    switch (nota) {
        case 1: case 2: case 3: case 4: case 5:
            condicion = "Debe recuperar el examen";
            break;
        case 6: case 7:
            condicion = "Puede rendir el final";
            break;
        case 8: case 9: case 10:
            condicion = "Promocionado";
            break;
        default:
            condicion = "Irregular";
    }
    
    let j=0;
    
    // Crear objeto alumno completo
    while (j < 1) {
        let alumno = {
            nombre: nombre,
            nota: nota,
            examen: resultadoExamen,
            condicion: condicion
        };
        console.log(alumno);
        j++;
    }
}

// Resultados
/*
    {
        nombre: 'juan',
        nota: 5,
        examen: 'Reprobado',
        condicion: 'Debe recuperar el examen'
    }
    {
        nombre: 'emanuel',
        nota: 6,
        examen: 'Aprobado',
        condicion: 'Puede rendir el final'
    }
    {
        nombre: 'marcos',
        nota: 9,
        examen: 'Aprobado',
        condicion: 'Promocionado'
    }
    {
        nombre: 'mauro',
        nota: 7,
        examen: 'Aprobado',
        condicion: 'Puede rendir el final'
    }
    {
        nombre: 'sofia',
        nota: 3,
        examen: 'Reprobado',
        condicion: 'Debe recuperar el examen'
    }
    {
        nombre: 'hernan',
        nota: 'A',
        examen: 'Ausente',
        condicion: 'Irregular'
    }
    {
        nombre: 'diana',
        nota: 8,
        examen: 'Aprobado',
        condicion: 'Promocionado'
    }
    {
        nombre: 'carla',
        nota: 6,
        examen: 'Aprobado',
        condicion: 'Puede rendir el final'
    }
    {
        nombre: 'esteban',
        nota: 5,
        examen: 'Reprobado',
        condicion: 'Debe recuperar el examen'
    }
    {
        nombre: 'noelia',
        nota: 'A',
        examen: 'Ausente',
        condicion: 'Irregular'
    }
*/