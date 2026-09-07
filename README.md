# LKO v3 (Личный Кабинет Обучающегося)

Веб-приложение студенческого портала — личного кабинета обучающегося, разработанное на базе **React 19** + **Vite**.

## Обзор

LKO v3 — это современный одностраничный веб-клиент (SPA) для доступа студентов к учебным материалам, документам, портфолио, достижениям, оценкам и новостям вуза. Приложение предоставляет интерфейс для просмотра расписания, оценок, загрузки и выдачи документов, а также управления портфолио и достижениями.

## Технологический стек

| Категория         | Технология                          |
|-------------------|-------------------------------------|
| **Фреймворк**     | React 19                            |
| **Сборка**        | Vite 7                              |
| **Роутинг**       | React Router DOM 7                  |
| **Состояние**     | Redux Toolkit + React Redux         |
| **UI-библиотека** | Material UI (MUI) 7                 |
| **Стили**         | Emotion (CSS-in-JS)                 |
| **Анимации**      | Framer Motion                       |
| **Линтер**        | ESLint 9 (flat config)              |

## Архитектура: FSD (Feature-Sliced Design)

Проект построен по архитектурному подходу **Feature-Sliced Design (FSD)** — масштабируемой методологии организации кода, которая чётко разделяет ответственность слоёв и изолирует бизнес-логику от инфраструктурного кода.

### Слои FSD

```
src/
├── app/          # Настройки приложения: провайдеры, роуты, стили, хранилище
├── pages/        # Страницы (роуты) — композиция виджетов и фич
├── widgets/      # Композитные виджеты — готовые блоки UI
├── features/     # Фичи — бизнес-функционал с собственной логикой
├── entities/     # Сущности — бизнес-сущности и их данные
├── shared/       # Общие ресурсы: UI-компоненты, API, константы, утилиты
└── main.jsx      # Точка входа
```

#### `app/` — слой приложения
Содержит глобальную конфигурацию: провайдеры (Redux, роутинг), хранилище состояния, глобальные стили и корневой роутер (`App.jsx`).

#### `pages/` — страницы
Каждая страница соответствует маршруту и отвечает за композицию виджетов и фич на конкретном экране:
- `ProfilePage` — профиль студента
- `PortfolioPage` / `PortfolioDetailsPage` — портфолио
- `AchievementsPage` — достижения
- `EducationPage` / `SubjectPage` / `MaterialsPage` / `SpecificMaterialPage` — учебные материалы
- `DocumentsPage` — документы
- `GradebookPage` / `AssessmentPage` / `ProgramPage` — успеваемость
- `AllNewsPage` / `AllNotificationsPage` — новости и уведомления

#### `widgets/` — виджеты
Готовые композитные компоненты, объединяющие сущности и фичи в UI-блоки: `achievements`, `documents`, `education`, `layout`, `news`, `notifications`, `performance`, `portfolio`, `profile`.

#### `features/` — фичи
Бизнес-функционал с собственной логикой и состоянием: `achievements`, `documents`, `education`, `header`, `performance`, `portfolio`, `profile`, `sidebar`.

#### `entities/` — сущности
Бизнес-сущности и связанные с ними данные: `achievements`, `documents`, `education`, `layout`, `performance`, `portfolio`, `profile`.

#### `shared/` — общие ресурсы
Переиспользуемые компоненты, API-клиенты, константы, утилиты и статические ресурсы (`api/`, `assets/`, `const/`, `lib/`, `ui/`).

## Структура проекта

```
lko_v3/
├── .git/
├── .gitignore
├── eslint.config.js
├── index.html
├── java/              # Java-модуль (бэкенд / вспомогательные сервисы)
├── lko_front.iml      # Конфигурация модуля IntelliJ IDEA
├── out_java/          # Скомпилированный Java-код
├── out_react/         # Сборка React-приложения (vite build)
├── package.json
├── package-lock.json
├── public/            # Статические файлы (vite.svg)
├── src/               # Исходный код (FSD)
│   ├── main.jsx
│   ├── app/
│   ├── pages/
│   ├── widgets/
│   ├── features/
│   ├── entities/
│   └── shared/
└── vite.config.js
```

## Установка и запуск

### Требования
- Node.js >= 20.19.0 (или >= 22.12.0)

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`.

### Сборка для продакшена

```bash
npm run build
```

Сборка будет помещена в директорию `out_react/` (настроено в `vite.config.js`).

### Предпросмотр сборки

```bash
npm run preview
```

### Линтинг

```bash
npm run lint
```

## Скрипты

| Команда         | Описание                          |
|-----------------|-----------------------------------|
| `npm run dev`   | Запуск dev-сервера Vite           |
| `npm run build` | Сборка production-версии          |
| `npm run preview` | Предпросмотр локальной сборки   |
| `npm run lint`  | Запуск ESLint для проверки кода   |

## Маршруты

Приложение использует `react-router-dom` для клиентского роутинга. Главная страница (`/`) перенаправляет на `/profile`. Основные маршруты:

| Маршрут                              | Страница              |
|--------------------------------------|-----------------------|
| `/` → `/profile`                     | Профиль               |
| `/portfolio`                         | Портфолио             |
| `/portfolio/:portfolioId`            | Детали портфолио      |
| `/achievements`                      | Достижения            |
| `/education`                         | Учебные курсы         |
| `/education/:id`                     | Дисциплина            |
| `/education/:subjectId/:themeId`     | Материалы темы        |
| `/education/:subjectId/:themeId/:materialId` | Конкретный материал |
| `/documents`                         | Документы             |
| `/performance/gradebook`             | Зачётная книжка       |
| `/performance/assessment`            | Оценки                |
| `/performance/program`               | Учебная программа     |
| `/profile/news`                      | Новости               |
| `/profile/notifications`             | Уведомления           |

## Состояние приложения

Глобальное состояние управляется через **Redux Toolkit**. Хранилище находится в `src/app/store/index.js`, а провайдер подключается в `src/main.jsx` через `ReduxProvider`.

## Лицензия

Проект разработан в рамках учебного курса. Все права защищены.
