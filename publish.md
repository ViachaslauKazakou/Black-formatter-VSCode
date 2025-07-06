## ✅ Шаг 1. Создать publisher (издателя)
Перейди на сайт:
👉 https://dev.azure.com

Войди под своей учёткой (GitHub или Microsoft).

Создай "organization" (если её ещё нет).

Затем перейди на
👉 https://marketplace.visualstudio.com/manage

Нажми "New Publisher", задай:

имя (например: slava-tools)

display name

описание

## ✅ Шаг 2. Установи vsce и залогинься
Если ещё не установлен:

```bash
npm install -g vsce
```

Теперь выполни вход:

```bash
vsce login <publisher-name>
```

🔐 Тебя попросят ввести Personal Access Token (PAT).

## ✅ Шаг 3. Создай Personal Access Token (PAT)
Перейди на https://dev.azure.com

Нажми в правом верхнем углу → Security

Слева выбери "Personal Access Tokens"

Нажми "New Token" и заполни:

Name: vscode-publish

Scopes: ✅ Marketplace → Manage

Скопируй токен и вставь его в терминал при vsce login.

### ✅ Шаг 4. Убедись, что package.json настроен
Убедись, что в package.json указано:

```json
"publisher": "slava-tools",
"name": "black-formatter",
"version": "0.0.1"
```

### ✅ Шаг 5. Опубликуй расширение
Теперь просто:

vsce publish
Если хочешь указать тип релиза:

```bash
vsce publish minor  # или patch / major
```

### ✅ Шаг 6. Убедись, что расширение появилось
Перейди на https://marketplace.visualstudio.com/publishers/SLAVA-TOOLS (пример)

Расширение будет доступно в VSCode: Extensions → поиск по имени

#### 📝 Советы
Каждая публикация требует уникального номера версии в package.json.

Если ошибка 403, проверь, что токен действительно имеет доступ к Marketplace.

Можно подключить CI (например, GitHub Actions) для авто-публикации.

#### 🔐 Настройка VSCE_TOKEN в GitHub
Перейди в свой репозиторий → Settings → Secrets and variables → Actions → New repository secret.

Название: VSCE_TOKEN

Вставь туда свой Personal Access Token от Azure DevOps с правами на Marketplace > Manage.

### 📦 Публикация: как использовать
Увеличь версию в package.json (например, с 0.0.1 до 0.0.2)

Создай git-тег:

```
git tag v0.0.2
git push origin v0.0.2
```

### 📦 7. Упаковка и публикация (опционально)
Если хочешь опубликовать расширение:

```bash
npm install -g vsce
vsce package
```

The code command is not available in your terminal. This happens when VS Code's command line tools aren't installed or aren't in your PATH. Here are a few ways to fix this:

### Option 1: Install VS Code Command Line Tools (Recommended)
Open VS Code
1. Press Cmd + Shift + P to open the Command Palette
2. Type "Shell Command: Install 'code' command in PATH"
3. Select and run this command
This will add the code command to your PATH.

```
code --install-extension black-formatter-0.0.1.vsix
```

### Option 2: Use the full path to VS Code

```
/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code --install-extension black-formatter-0.0.1.vsix
```

### 🔁 Быстрое обновление (всё вместе):

# 1. Обнови версию в package.json
npm version patch  # или minor / major

# 2. Собери .vsix
vsce package

# 3. Установи в VSCode
code --install-extension *.vsix --force
