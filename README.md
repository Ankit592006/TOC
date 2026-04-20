<img width="798" height="1012" alt="image" src="https://github.com/user-attachments/assets/cbfccef6-f34a-4295-a3f5-fde03d82dc86" />

# 🎓 Online Examination Form Processor

## 📌 Overview

This project is a web-based application that validates an online examination form using **Regular Expressions (Regex)**.

It ensures that users enter correct and properly formatted data before submitting the form.

---

## 🚀 Features

- ✅ Real-time form validation  
- ✅ Regex-based input checking  
- ✅ Strong password validation  
- ✅ File upload validation (PDF only)  
- ✅ Clean and modern UI  
- ✅ Submit button enabled only when all inputs are valid  

---

## 🧠 Why This Project?

In real-world applications, incorrect user input can cause errors.  
This project prevents that by validating inputs using **pattern matching (Regex)**.

---

## 🛠️ Technologies Used

- **HTML** → Structure of the form  
- **CSS** → Styling and UI design  
- **JavaScript** → Validation logic using Regex  

---

## 📋 Form Fields

| Field Name       | Validation Rule |
|----------------|----------------|
| Full Name       | Only letters (2–30 characters) |
| Email           | Standard email format |
| Mobile Number   | 10 digits, starts with 6–9 |
| Roll Number     | Format: 9 digits + 2 uppercase letters + 3 digits |
| Exam Date       | Must be a future date |
| Password        | Min 8 characters, includes uppercase, lowercase, number, special character |
| Subject Code    | Format: ABC123 |
| File Upload     | Only PDF files allowed |

---

## 🔍 Example Inputs

### ✅ Valid Inputs
- Name: `Ankit Chaudhari`
- Email: `ankit@gmail.com`
- Mobile: `9876543210`
- Roll: `123456789AB123`
- Subject Code: `CSE101`

### ❌ Invalid Inputs
- Name: `Ankit123` ❌
- Email: `ankit@.com` ❌
- Mobile: `12345` ❌
- Subject Code: `Abc123` ❌ (lowercase not allowed)

---

## ⚙️ How It Works

1. User enters data into the form  
2. JavaScript checks input using Regex  
3. System shows:
   - ✅ Valid message (green)
   - ❌ Error message (red)
4. Submit button is enabled only when all fields are valid  

---

## 📁 Project Structure
project-folder/
│
├── index.html → Main structure
├── style.css → Styling
├── script.js → Validation logic
└── README.md → Project documentation



---

## ▶️ How to Run

1. Download or clone the project  
2. Open `index.html` in your browser  
3. Start entering data in the form  

---

## 🧪 Testing

Try entering:
- Incorrect formats → You will see error messages  
- Correct formats → You will see success messages  

---

## 🧠 Theory Concept (TOC)

This project is based on:

- **Regular Expressions (Regex)**
- **Finite Automata (DFA/NFA)**

Each input field represents a **pattern (language)**, and validation checks whether the input belongs to that language.

---

## 💡 Example (Theory)

Mobile number validation:
^[6-9]\d{9}$
Language: L = { w | w is a 10-digit number starting with 6–9 }

---

## 🏆 Key Highlights

- Beginner-friendly design  
- Real-time validation  
- Clean UI  
- Strong use of Regex  
- Based on Theory of Computation concepts  

---

## 📌 Conclusion

This project demonstrates how **theoretical concepts like Regex and Automata** are used in real-world applications to validate user input effectively.

---

## 🙌 Author

Developed as part of **Theory of Computation Mini Project**
