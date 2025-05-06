const express = require('express');
const sequelize = require('./config/database');
const serviceRoute = require('./Routes/serviceRoutes')
const teamRouting=require('./Routes/ourTeamRouting')
const contactRouting=require('./Routes/contactRouting')
const DonorRouting=require('./Routes/DonorRouting')
const bloodInventoryRoutes = require('./Routes/bloodInventoryRoutes');
const app=express()
const path = require('path');
const cors=require('cors');
const bodyParser = require('body-parser'); 


sequelize.sync()
    .then(() => {
        console.log('Database & tables synced!');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // To parse incoming JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',serviceRoute)
app.use('/api',teamRouting)
app.use('/api',contactRouting)
app.use('/api',DonorRouting)
app.use('/api',bloodInventoryRoutes)

app.listen(4000)