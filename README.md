# 8D Audio Converter
# 8D Audio Converter

##  About the Project
This is a simple **8D Audio Converter** built using **Node.js** and **FFmpeg**. It allows users to upload an audio file and apply an 8D audio effect, creating a more immersive listening experience.

##  Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/nimmyj392/8dConversion.git
   ```
2. Navigate to the project directory:
   ```sh
   cd newPeoject
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

##   Usage

1. Start the server:
   ```sh
   node index.js
   ```
2. Open **Postman** or any API testing tool.
3. Send a `POST` request to:
   ```sh
   http://localhost:4000/upload
   ```
   with an **audio file** in the form field named `audio`.
4. Download the processed 8D audio file.

##  API Endpoints
- `POST /upload` → Uploads an audio file, applies 8D effect.

##  Notes
- Maximum file size allowed: **50MB**.
- Supported formats: **MP3, WAV, AAC**.
