const express = require('express')
const multer = require('multer')
const path = require('path')
const XLSX = require('xlsx')
const cors = require('cors')

const App = express()
const PORT = process.env.PORT || 5005

App.use(express.json())
App.use(cors())

//Configurando o armazenamento
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, "planilha"+path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

App.post('/upload', upload.single('campoFile'), (req, res)=>{
    if(!req.file){
        res.redirect('http://localhost:5173/sucesso/falhou')
    }else{
        res.redirect('http://localhost:5173/sucesso')
    }
})

App.get('/certificados', async (req, res)=>{
    const convertXlsxToJson = async (filePath) => {
        try {
        // Lê o arquivo XLSX
        const workbook = XLSX.readFile(filePath);
        const sheetNames = workbook.SheetNames;
    
        // Considera a primeira aba
        const sheet = workbook.Sheets[sheetNames[0]];
    
        // Converte a aba para JSON
        const json = XLSX.utils.sheet_to_json(sheet);
        
    
        return json;
        } catch (error) {
            throw new Error(`Erro ao converter o arquivo: ${error.message}`);
        }
    }

    const filePath = './uploads/planilha.xlsx';

    try{
        const json = await convertXlsxToJson(filePath);
        console.log(json);
        return res.status(200).send(json)
    } catch (error) {
        console.error('Erro:', error.message);
    } 
})




App.get('*', (req, res) => {
    res.status(404).send(`<h1 style="text-align: center;">404</h1><p style="text-align: center;">Página não encontrada.</p>`)
})

App.listen(PORT, ()=>{
    console.log("Server is Running!")
})