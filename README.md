# 🧩 Cubologist — Rubik’s Cube Solver

**Cubologist** is a web-based Rubik’s Cube solver that lets users input a 3×3 cube state in 2D and provides an optimal solution in **20 moves or fewer** using the **Kociemba two-phase algorithm**. A 3D visualizer is currently in development.

---

## 📌 Table of Contents

* [Features](#features)
* [Demo Screenshot](#demo-screenshot)
* [Installation & Setup](#installation--setup)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Tech Stack](#tech-stack)
* [Solving & Algorithm](#solving--algorithm)
* [Roadmap](#roadmap)
* [License](#license)

---

## 🧫 Features

* Interactive **2D cube face editor** with color palette
* Navigation between faces: U, R, F, D, L, B
* **Validation** of cube state before solving
* **Solver output** in under 20 moves via Kociemba
* Planned **3D view integration** using ReactThree.js

---

## 📸 Demo Screenshot


---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/discombobulated-otter/cubologist.git
cd cubologist

# Install dependencies
npm install

# Start in development mode
npm run dev
```

---

## 🔎 Usage

1. Use the **color palette** to select a sticker color.
2. Paint each face cell (except center) to match your cube.
3. Navigate between faces using the **navigator**.
4. Click **"Solve"** to validate and compute the solution.
5. View the solution as a move sequence (e.g. `U R2 F' D`).

---

## 📂 Project Structure

```
src/
├── components/
│   ├── ColorPalette.jsx
│   ├── CubeFaceGrid.jsx
│   ├── FaceNavigator.jsx
│   ├── FaceIndicator.jsx
│   └── SubmitButton.jsx
├── utils/
│   ├── CubeHelper.js       # cube state logic
│   └── ValidateCube.js     # validation logic
├── App.jsx
└── index.css               # Tailwind CSS
```

---

## 🛠️ Tech Stack

* **React** — UI framework
* **Tailwind CSS** — styling
* **Kociemba’s two-phase algorithm** via JS binding

---

## 🔍 Solving & Algorithm

Cubologist uses the **Kociemba two-phase algorithm**, a widely-recognized method that computes optimal solutions up to 20 half-turn moves.
The binding is integrated to calculate and display the shortest solution sequence.

---

## 🚣️ Roadmap

* [x] 2D face editor + input validation
* [x] Kociemba solver integration
* [ ] Export/import cube state
* [ ] 3D cube rendering (Three.js)
* [ ] Scramble generator
* [ ] UI accessibility improvements
* [ ] Cube time

---

## 📝 Contributing

Contributions welcome! Please fork the repo and open a pull request.
For major changes, open an issue first to discuss them.

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute freely.

---