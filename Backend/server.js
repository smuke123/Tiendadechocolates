const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./models/userModel')
const Product = require('./models/productModel')


const SECRET_KEY = 'super-secret-key'

// connect to express app
const app = express()

// connect to mongoDB
const dbURI = 'mongodb+srv://smuke123:Nccggc12*@cluster0.ncgbmkd.mongodb.net/UsersDB?retryWrites=true&w=majority'
mongoose
.connect(dbURI)
.then(() => {
    app.listen(3001, () => {
        console.log('Server connected to port 3001 and MongoDb')
    })
})
.catch((error) => {
    console.log('Unable to connect to Server and/or MongoDB', error)
})


// middleware
app.use(bodyParser.json())
app.use(cors())




//Routes

// REGISTER
//POST REGISTER
app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, username, password: hashedPassword })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' })
    }
})

//GET Registered Users
app.get('/register', async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
        
    } catch (error) {
        res.status(500).json({ error: 'Unable to get users' })
    }
})

//LOGIN

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' })
        res.json({ message: 'Login successful' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' })
    }
})

// Cambiar Contraseña por Correo Electrónico
app.post('/change-password-by-email', async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        // Verifica la existencia del usuario por correo electrónico
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Hashea la nueva contraseña y actualiza en la base de datos
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Contraseña cambiada exitosamente' });
    } catch (error) {
        console.error('Error cambiando contraseña por correo electrónico:', error);
        res.status(500).json({ error: 'Error cambiando contraseña por correo electrónico' });
    }
});

app.post('/cart', async (req, res) => {
    const { name, price } = req.body;
  
    try {
      const product = new Product({ name, price });
      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error al añadir al carrito' });
    }
  });

  
app.get('/cart', async (req, res) => {
    try {
      const cartItems = await Product.find(); // Ajusta esto según tu modelo y lógica
      res.status(200).json(cartItems);
    } catch (error) {
      console.error('Error al obtener elementos del carrito:', error);
      res.status(500).json({ error: 'Error al obtener elementos del carrito' });
    }
  });

  app.delete('/cart/:productId', async (req, res) => {
    const productId = req.params.productId;
  
    try {
      // Realiza la lógica necesaria para eliminar el producto del carrito en la base de datos
      await Product.findByIdAndDelete(productId);
      res.status(200).json({ message: 'Producto eliminado del carrito' });
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
      res.status(500).json({ error: 'Error al eliminar el producto del carrito' });
    }
  });
  