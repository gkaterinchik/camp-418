 #language:ru
 Функционал: Крестики нолики

    Сценарий: Ход игрока
        Дано пустое поле
        И ходит игрок 1
        Если игрок ходит в клетку 1, 1
        То поле становится "000|010|000"
        Если игрок ходит в клетку 2, 2
        То поле становится "000|010|002"
        Если игрок ходит в клетку 2, 1
        То поле становится "000|011|002"

    Сценарий: Ход игрока в заполненную клетку
        Дано поле "100|200|102"
        И ходит игрок 1
        Если игрок ходит в клетку 2, 2
        То возвращается ошибка
        И поле становится "100|200|102"
        Если игрок ходит в клетку 1, 1
        То поле становится "100|210|102"

    Сценарий: определение победителя по вертикали
        Дано поле "102|120|002"
        И ходит игрок 1
        Если игрок ходит в клетку 0, 2
        То поле становится "102|120|102"
        И победил игрок 1

    Сценарий: определение победителя по горизонтали
        Дано поле "110|120|102"
        И ходит игрок 1
        Если игрок ходит в клетку 2, 0
        То поле становится "111|120|102"
        И победил игрок 1

    Сценарий: определение победителя по диагонали
        Дано поле "002|120|002"
        И ходит игрок 2
        Если игрок ходит в клетку 0, 2
        То поле становится "002|120|202"
        И победил игрок