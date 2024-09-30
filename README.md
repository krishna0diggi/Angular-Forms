# User Form Application

## Overview

This application is a simple user form built with Angular, allowing users to input personal information and address details. It validates the input before submission and displays the submitted data on the screen.

## Features

- **Reactive Forms**: Utilizes Angular's reactive forms for efficient input handling and validation.
- **Input Validation**: Ensures that required fields are filled out and that the email is in the correct format.
- **Dynamic Data Display**: Shows submitted data in a readable JSON format after form submission.
- **User-Friendly Interface**: Clean layout for easy data entry and submission.

## Technologies Used

- **Angular**: A platform for building web applications.
- **TypeScript**: For writing robust, maintainable code.
- **HTML/CSS**: For structuring and styling the application.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally

### Installation

1. Clone the repository.
2. Install dependencies using npm.
3. Run the application using `ng serve`.
4. Open your browser and navigate to `http://localhost:4200`.

## Main Functions

### Validation

The application uses Angular's reactive forms to validate user input. Each field is checked to ensure it meets the following criteria:

- **Name and Username**: Required fields.
- **Email**: Must be a valid email format and is required.
- **Address Fields**: Street, City, and Zipcode are required, while Suite is optional.

### Submit Function

The `onSubmit` function handles form submission:

- **Form Validation**: Checks if the form is valid before proceeding.
- **Data Storage**: If valid, the submitted data is added to an array for display.
- **Form Reset**: After successful submission, the form is reset for new entries.
- **Error Handling**: Logs an error message if the form is invalid.

### Display Results

## Customization![AfterFillingInput](https://github.com/user-attachments/assets/6262afa5-f1c7-4970-a4f6-01491d09a88b)

![output](https://github.com/user-attachments/assets/2c5ad182-fd11-4883-a4db-996d1bfddb18)


Once the form is submitted, the application dynamically displays the submitted data in JSON format below the form, allowing users to review their input.

## Usage

1. Fill in the form fields (Name, Username, Email, Address).
2. Click the "Submit" button to display the entered data below the form.
3. The form resets after submission, allowing for new entries.




Feel free to modify the form fields, styles, or validation logic as needed. You can also implement local storage to save submitted data across sessions.

## License

This project is open-source and available under the MIT License.

---

For further assistance, please refer to the Angular documentation or open an issue in the repository. Happy coding!
