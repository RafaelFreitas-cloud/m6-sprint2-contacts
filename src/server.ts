import app from "./app";
import "dotenv/config"

const PORT = process.env.PORt || 3000
app.listen(PORT,()=>{
	console.log(`Server ins running on ${PORT}`)
})
