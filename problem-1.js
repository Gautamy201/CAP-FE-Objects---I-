let data =
    [
        {
            grade: "V",
            students: [
                {name: "Nrupul", marks: [10, 20, 30]},
                {name: "Prateek", marks: [20, 30, 40]}
            ]
        },
        {
            grade: "VI",
            students: [
                {name: "Aman", marks: [10, 20, 30]},
                {name: "Albert", marks: [20, 30, 40]}
            ]
        },
        {
            grade: "VII",
            students: [
                {name: "Yogesh", marks: [10, 20, 30]},
                {name: "Sandhya", marks: [20, 30, 40]}
            ]
        }
    ]


    function getHighestScoredStudent(grade) {
        const gradeData = data.find(item => item.grade === grade);
    
        if (gradeData) {
            const highestScoredStudent = gradeData.students.reduce((prev, current) => {
                const totalMarksPrev = prev.marks.reduce((a, b) => a + b, 0);
                const totalMarksCurrent = current.marks.reduce((a, b) => a + b, 0);
                return totalMarksPrev > totalMarksCurrent ? prev : current;
            });
    
            console.log(`${grade}-${highestScoredStudent.name}-${highestScoredStudent.marks.reduce((a, b) => a + b, 0)}`);
        }
    }
    
    // Print highest scored student for each grade
    data.forEach(item => getHighestScoredStudent(item.grade));
