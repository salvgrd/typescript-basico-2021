import chalk from 'chalk'

function saludar() {
    console.log(chalk.redBright("Saludos desde otro archivo"))
}

type User = {
    name: string,
    age: number,
    gender: 'Male' | 'Female',
    department: string,
    car: 'Honda'
}

export { saludar, User }