const express = require('express')
const multer = require('multer')
const path = require("path");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");

const app = express()
const upload = multer({ 
    dest: "uploads/", 
    limits: { fileSize: 50 * 1024 * 1024 } 
});


app.post("/upload", upload.single("audio"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    const inputPath = req.file.path;  
    const outputDir = path.join(__dirname, "processed");
    const outputPath = path.join(outputDir, `${req.file.filename}_8d.mp3`);

    
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    console.log("Processing File:", inputPath);

    ffmpeg(inputPath)
        .audioFilters([
            "apulsator=hz=0.08", 
            "pan=stereo|c0=0.8*c0+0.2*c1|c1=0.2*c0+0.8*c1"  
        ])
        .on("start", (cmd) => {
            console.log("🔹 FFmpeg Command:", cmd);
        })
        .on("progress", (progress) => {
            console.log(`Processing: ${progress.timemark}`);
        })
        .on("end", () => {
            console.log("8D effect applied successfully!");
            res.download(outputPath); 
        })
        .on("error", (err) => {
            console.error(" Error applying 8D effect:", err);
            res.status(500).send("Error processing audio.");
        })
        .save(outputPath);
});

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})