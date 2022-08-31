const bootcamp = {
    students: [ 
        {
        numOfStudent: 1,    //порядковый номер студента
        firstName: 'Nomad', //имя студента (можно изменить коммандой)
        points: 0,          //баллы студента
        tasks: {
            left: 20,       //оставшееся количетсво заданий
            completed: 0,   //кол-во выполненных заданий (+5 к points)
            failed: 0,      //кол-во проваленных (-5 от points)
            },
        },
    ],

    //Показать полную статистику всех студентов
    getStatusAll: function () {
        for (let elem of this.students)
        console.log(elem)
    },
    //Добавить студента с заданным именем
    addStudent: function (studentName) {
        this.students.push({
            numOfStudent: this.students[this.students.length-1].numOfStudent + 1, //увеличить на единицу порядковый номер нового студента
            firstName: studentName,
            points: 0,
            tasks: {
                left: 20,
                completed: 0, 
                failed: 0,
                },
            })
    },
    //Изменить имя студента
    changeName: function (studentName, numOfStudent) {
        this.students[numOfStudent].firstName = studentName
    },
    //добавить выполнение задания для студента по порядковому номеру
    completeTask: function (numOfStudent) {
        if (this.students[numOfStudent - 1].failTask > 3){
            return console.log('Student must be expelled.')
        }
        else if (this.students[numOfStudent - 1].tasks.left > 0) {
            this.students[numOfStudent - 1].tasks.left -= 1
            this.students[numOfStudent - 1].tasks.completed += 1; 
            this.students[numOfStudent - 1].points += 5      
        }
        return console.log('All tasks completed!')       
    },
    //добавить провал задания для студента по порядковому номеру
    failTask: function (numOfStudent) {
        if (this.students[numOfStudent - 1].tasks.left > 0) {
            this.students[numOfStudent - 1].tasks.left -= 1
            this.students[numOfStudent - 1].tasks.failed += 1
            this.students[numOfStudent - 1].points -= 5    
            } else {
            console.log('All are over.')
        }
    },
    //постмотреть статус студента по порядковому номеру
    getPersonStat: function (numOfStudent) {
        console.log(this.students[numOfStudent-1])
    }
} 
