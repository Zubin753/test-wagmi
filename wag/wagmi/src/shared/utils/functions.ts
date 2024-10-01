
// Функция принимает строку и количество символов, все символы после N элемента обрезаются
export const trimString = (s: string, N: number): string => s.length > N ? s.slice(0, N) + "..." : s;


// Функция принимает строку, возвращает строку, где все слова начинаются с большой буквы
export const firstCharUpp = (s: string): string => {
    const masDataNames = s.split(' ');
    const masDataUpper = masDataNames.map(name => name[0].toUpperCase() + name.slice(1))
    return masDataUpper.join(" ")
}