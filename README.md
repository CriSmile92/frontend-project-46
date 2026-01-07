### Hexlet tests and linter status:
[![Actions Status](https://github.com/CriSmile92/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/CriSmile92/frontend-project-46/actions)

[![hexlet-check](https://github.com/CriSmile92/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/CriSmile92/frontend-project-46/actions/workflows/hexlet-check.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=CriSmile92_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=CriSmile92_frontend-project-46)

Gendiff – это утилита для сравнения двух файлов. Она отображает различия между файлами в человекочитаемом виде.

Особенности:
Поддержка JSON и YAML файлов
Простота использования из командной строки
Удобный вывод различий в форматах json, stylish, plain
Системные требования:
Node.js версии 14.0 или выше
npm (обычно устанавливается вместе с Node.js)
Поддерживаемые операционные системы: Windows, macOS и Linux.

Установка:
Склонируйте репозиторий с помощью команды: "git clone git@github.com:CriSmile92/frontend-project-46.git"
Перейдите в директорию проекта cd frontend-project-46
Установите необходимые зависимости с помощью команды: make install
Общий синтаксис и доступные команды:
gendiff -h : Вывод справочной информации по утилите

gendiff <файл1> <файл2> : Сравнение файлов с выводом в формате stylish (по умолчанию)

gendiff -f plain <файл1> <файл2> : Сравнение с выводом в формате plain

gendiff -f json <файл1> <файл2> : Сравнение с выводом в формате json

make test : Для запуска тестов

make lint : Для проверки стиля кода

Пример использования:
https://asciinema.org/a/766436



